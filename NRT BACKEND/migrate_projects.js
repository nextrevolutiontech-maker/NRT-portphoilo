const db = require('./db');

async function migrate() {
  try {
    console.log("Running projects table migration...");
    
    // Add live_url and tech_stack columns if they do not exist
    await db.query(`
      ALTER TABLE projects 
      ADD COLUMN IF NOT EXISTS live_url VARCHAR(500),
      ADD COLUMN IF NOT EXISTS tech_stack TEXT[] DEFAULT '{}';
    `);
    
    console.log("✅ projects table migration completed successfully (columns live_url, tech_stack added if missing).");
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
  } finally {
    process.exit();
  }
}

migrate();
