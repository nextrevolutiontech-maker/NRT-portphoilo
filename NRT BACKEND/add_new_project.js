const db = require('./db');

async function addNewProject() {
  try {
    const title = "Distributor ERP System";
    const industry = "Distribution & Logistics";
    const category = "ERP Systems";
    const challenge = "The distributor faced operational challenges managing inventory, sales, and supply chain across multiple locations using fragmented tools.";
    const solution = "A unified ERP system designed specifically for distribution workflows, providing centralized inventory management, order processing, and real-time reporting.";
    const results = ["Streamlined distribution operations", "Reduced inventory discrepancies", "Faster order fulfillment"];
    const tech_stack = ["ERP Development", "Custom Business Software", "Inventory Management"];
    const live_url = "https://distributor-erp-system.vercel.app/";
    const image_url = "https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=1200&q=80"; // Warehouse/Logistics placeholder

    const query = `
      INSERT INTO projects (title, industry, challenge, solution, results, image_url, live_url, tech_stack)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    const values = [title, industry, challenge, solution, results, image_url, live_url, tech_stack];

    const res = await db.query(query, values);
    console.log("✅ Successfully added new project:", res.rows[0]);
  } catch (err) {
    console.error("❌ Error adding project:", err);
  } finally {
    process.exit();
  }
}

addNewProject();
