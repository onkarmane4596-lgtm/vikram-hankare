import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is required."
  );
}

declare global {
  var pgPool: Pool | undefined;
}

export const db =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    max: 10,
    idleTimeoutMillis: 10000, // Reduced to 10s to close before PgBouncer drops it
    connectionTimeoutMillis: 10000,
    keepAlive: true, // Crucial for Supabase transaction pooler
    keepAliveInitialDelayMillis: 10000,
  });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = db;
}

// Optional connection test
db.on("connect", () => {
  console.log("✅ PostgreSQL Connected");
});

db.on("error", (err) => {
  console.error("❌ PostgreSQL Error:", err);
});
