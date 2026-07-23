"use client";

import { useState, useEffect } from "react";
import { AdmissionEnquiry, LeadActivity } from "@/types/admissions";
import { useRouter } from "next/navigation";
import { Calendar, Mail, Phone, BookOpen, Clock, User, Edit2, Save, X, Activity, MessageSquare, Bell } from "lucide-react";

export default function LeadDetailsClient({ 
  initialLead, 
  initialActivities 
}: { 
  initialLead: AdmissionEnquiry, 
  initialActivities: LeadActivity[] 
}) {
  const router = useRouter();
  const [lead, setLead] = useState<AdmissionEnquiry>(initialLead);
  const [activities, setActivities] = useState<LeadActivity[]>(initialActivities);
  
  useEffect(() => {
    setLead(initialLead);
    setActivities(initialActivities);
    setEditForm({
      fullName: initialLead.full_name,
      email: initialLead.email,
      phone: initialLead.phone,
      program: initialLead.program,
    });
    setFollowupForm({
      date: initialLead.next_followup_date ? new Date(initialLead.next_followup_date).toISOString().slice(0, 16) : "",
      notes: initialLead.followup_notes || "",
      assignedTo: initialLead.assigned_to || ""
    });
  }, [initialLead, initialActivities]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: lead.full_name,
    email: lead.email,
    phone: lead.phone,
    program: lead.program,
  });

  const [newNote, setNewNote] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [followupForm, setFollowupForm] = useState({
    date: lead.next_followup_date ? new Date(lead.next_followup_date).toISOString().slice(0, 16) : "",
    notes: lead.followup_notes || "",
    assignedTo: lead.assigned_to || ""
  });

  const statuses = ['New', 'Contacted', 'Interested', 'Follow Up', 'Converted', 'Rejected'];

  const handleUpdate = async (updates: any) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admissions/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (res.ok) {
        const result = await res.json();
        // To get the fresh activities, we could refresh the router to refetch server data
        // or just rely on router.refresh()
        router.refresh(); 
        
        // Optimistically update local state for fast UI
        if (result.data) {
          setLead(result.data);
        }
      } else {
        alert("Failed to update lead");
      }
    } catch (e) {
      console.error(e);
      alert("Error updating lead");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleStatusChange = (status: string) => {
    if (status === lead.status) return;
    handleUpdate({ status });
  };

  const handleSaveInfo = async () => {
    await handleUpdate({
      fullName: editForm.fullName,
      email: editForm.email,
      phone: editForm.phone,
      program: editForm.program
    });
    setIsEditing(false);
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    await handleUpdate({ notes: newNote });
    setNewNote("");
  };

  const handleSaveFollowup = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleUpdate({
      nextFollowupDate: followupForm.date ? new Date(followupForm.date).toISOString() : null,
      followupNotes: followupForm.notes || null,
      assignedTo: followupForm.assignedTo || null,
    });
  };

  const formatDate = (dateInput: Date | string) => {
    return new Date(dateInput).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit'
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column: Details & Status */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Header / Info Card */}
        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 blur-[100px] pointer-events-none" />
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <h1 className="text-3xl font-medium text-white">{lead.full_name}</h1>
            <button 
              onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              title={isEditing ? "Cancel" : "Edit Details"}
            >
              {isEditing ? <X className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
            </button>
          </div>

          {isEditing ? (
            <div className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Full Name</label>
                  <input type="text" value={editForm.fullName} onChange={e => setEditForm({...editForm, fullName: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email</label>
                  <input type="email" value={editForm.email} onChange={e => setEditForm({...editForm, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Phone</label>
                  <input type="text" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Program</label>
                  <select value={editForm.program} onChange={e => setEditForm({...editForm, program: e.target.value})} className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-3 py-2 text-white">
                    <option value="Foundation: Cyber Security Basics">Foundation: Cyber Security Basics</option>
                    <option value="Professional: Ethical Hacking">Professional: Ethical Hacking</option>
                    <option value="Global Cert: CEH">Global Cert: CEH</option>
                  </select>
                </div>
              </div>
              <button onClick={handleSaveInfo} disabled={isUpdating} className="px-4 py-2 bg-[#00E5FF] text-[#0A1F44] font-bold rounded-lg hover:bg-white transition-all flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-white/5"><Mail className="w-5 h-5 text-[#00E5FF]" /></div>
                <div>
                  <p className="text-xs text-slate-500">Email Address</p>
                  <p className="font-medium text-white">{lead.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-white/5"><Phone className="w-5 h-5 text-[#00E5FF]" /></div>
                <div>
                  <p className="text-xs text-slate-500">Phone Number</p>
                  <p className="font-medium text-white">{lead.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-white/5"><BookOpen className="w-5 h-5 text-[#00E5FF]" /></div>
                <div>
                  <p className="text-xs text-slate-500">Program of Interest</p>
                  <p className="font-medium text-white">{lead.program}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-white/5"><Calendar className="w-5 h-5 text-[#00E5FF]" /></div>
                <div>
                  <p className="text-xs text-slate-500">Submitted On</p>
                  <p className="font-medium text-white">{formatDate(lead.created_at)}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notes Input Section */}
        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-8 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00E5FF]" /> Add Internal Note
          </h2>
          <form onSubmit={handleAddNote}>
            <textarea 
              value={newNote}
              onChange={e => setNewNote(e.target.value)}
              placeholder="Type your notes here... (e.g. Tried calling, no answer)"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#00E5FF]/50 transition-colors mb-4 min-h-[100px]"
              required
            />
            <button type="submit" disabled={isUpdating} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all disabled:opacity-50">
              Submit Note
            </button>
          </form>
        </div>

      </div>

      {/* Right Column: Status & Timeline */}
      <div className="space-y-6">
        
        {/* Status Card */}
        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-8 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#00E5FF]" /> Lead Status
          </h2>
          <div className="flex flex-col gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                disabled={isUpdating}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  lead.status === status 
                    ? 'bg-[#00E5FF]/10 border-[#00E5FF]/50 text-[#00E5FF] font-medium' 
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {status}
                {lead.status === status && <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Follow Up Card */}
        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-8 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#00E5FF]" /> Schedule Follow-up
          </h2>
          <form onSubmit={handleSaveFollowup} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Date & Time</label>
              <input 
                type="datetime-local" 
                value={followupForm.date}
                onChange={e => setFollowupForm({...followupForm, date: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white [color-scheme:dark]" 
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Assigned To</label>
              <input 
                type="text" 
                placeholder="e.g. John Smith"
                value={followupForm.assignedTo}
                onChange={e => setFollowupForm({...followupForm, assignedTo: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" 
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Follow-up Notes</label>
              <textarea 
                placeholder="What needs to be discussed?"
                value={followupForm.notes}
                onChange={e => setFollowupForm({...followupForm, notes: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white min-h-[80px]" 
              />
            </div>
            <button type="submit" disabled={isUpdating} className="w-full px-4 py-2 bg-[#00E5FF]/10 text-[#00E5FF] font-medium border border-[#00E5FF]/20 rounded-lg hover:bg-[#00E5FF]/20 transition-all">
              Save Follow-up
            </button>
          </form>
        </div>

        {/* History Timeline */}
        <div className="bg-[#0D2B60] border border-white/5 rounded-[2rem] p-8 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#00E5FF]" /> Activity History
          </h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
            {activities.length === 0 ? (
              <p className="text-slate-500 text-sm text-center">No history available yet.</p>
            ) : (
              activities.map((activity) => (
                <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0D2B60] bg-[#00E5FF] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-medium text-white text-sm">
                        {activity.action_type === 'status_change' && "Status Updated"}
                        {activity.action_type === 'note_added' && "Note Added"}
                        {activity.action_type === 'info_update' && "Details Edited"}
                        {activity.action_type === 'follow_up' && "Follow-up Action"}
                      </div>
                      <time className="text-xs text-slate-500 font-medium">{formatDate(activity.created_at)}</time>
                    </div>
                    <div className="text-slate-400 text-sm">
                      {activity.description}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
