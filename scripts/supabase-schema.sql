-- ==============================================================================
-- SKYLINE Centre of Excellence - Supabase Database Schema
-- ==============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Core Tables
CREATE TABLE IF NOT EXISTS admission_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    program VARCHAR(255) NOT NULL,
    lead_source VARCHAR(255),
    status VARCHAR(50) DEFAULT 'New',
    notes TEXT,
    
    -- Follow-up Management Fields
    assigned_to VARCHAR(255),
    next_followup_date TIMESTAMP WITH TIME ZONE,
    followup_notes TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS lead_activity (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID NOT NULL REFERENCES admission_enquiries(id) ON DELETE CASCADE,
    action_type VARCHAR(50) NOT NULL, -- e.g., 'status_change', 'note_added', 'info_update'
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Indexes for Performance
-- Index for faster retrieval of history for a specific lead
CREATE INDEX IF NOT EXISTS idx_lead_activity_lead_id ON lead_activity(lead_id);

-- Index for efficient querying of pending follow-ups
CREATE INDEX IF NOT EXISTS idx_admission_enquiries_followup 
ON admission_enquiries(next_followup_date) 
WHERE next_followup_date IS NOT NULL;

-- 4. Create Triggers for Auto-updating Timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS set_updated_at ON admission_enquiries;
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON admission_enquiries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
