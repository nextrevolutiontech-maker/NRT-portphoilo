const db = require('../db');
const { uploadImageFromBuffer } = require('../config/cloudinary');
const { runScreenshotAutomation } = require('../utils/screenshotAutomator');

exports.createProject = async (req, res) => {
    const { title, industry, challenge, solution, results } = req.body;
    let imageUrl = '';

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    try {
        // Handle Image Upload
        if (req.file) {
            const uploadResult = await uploadImageFromBuffer(req.file.buffer);
            imageUrl = uploadResult.secure_url;
        }

        // Parse results if it comes as a stringified array from frontend
        let parsedResults = [];
        if (results) {
            try {
                parsedResults = JSON.parse(results);
            } catch (e) {
                // If it's just a single string or already an array (middleware dependency)
                parsedResults = Array.isArray(results) ? results : [results];
            }
        }

        const query = `
      INSERT INTO projects (title, industry, challenge, solution, results, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
        const values = [title, industry, challenge, solution, parsedResults, imageUrl];

        const result = await db.query(query, values);
        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error('Create Project Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Get Projects Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM projects WHERE id = $1', [id]);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Delete Project Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, industry, challenge, solution, results } = req.body;

    try {
        let updateQuery = 'UPDATE projects SET title = $1, industry = $2, challenge = $3, solution = $4, results = $5';
        let values = [title, industry, challenge, solution, results ? JSON.parse(results) : []];
        let paramCount = 6;

        if (req.file) {
            const uploadResult = await uploadImageFromBuffer(req.file.buffer);
            updateQuery += `, image_url = $${paramCount}`;
            values.push(uploadResult.secure_url);
            paramCount++;
        }

        let parsedResults = [];
        if (results) {
            try {
                parsedResults = typeof results === 'string' ? JSON.parse(results) : results;
            } catch (e) {
                parsedResults = Array.isArray(results) ? results : [results];
            }
        }

        updateQuery += ` WHERE id = $${paramCount} RETURNING *`;
        values.push(id);

        // Update the values array with parsedResults at index 4 (results field)
        values[4] = parsedResults;

        const result = await db.query(updateQuery, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json(result.rows[0]);

    } catch (error) {
        console.error('Update Project Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.syncProjects = async (req, res) => {
    try {
        // Runs screenshot capture automation in background to avoid API timeouts
        runScreenshotAutomation()
            .then(stats => console.log('✅ Portfolio automated sync finished:', stats))
            .catch(err => console.error('❌ Portfolio automated sync failed:', err));

        res.json({ message: 'Synchronization and screenshot capture task started in the background.' });
    } catch (error) {
        console.error('Sync Projects Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.refreshProjectScreenshot = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ message: 'Project URL is required' });
    }

    try {
        const updatedProject = await runScreenshotAutomation(url);
        res.json({ message: 'Screenshot refreshed successfully!', project: updatedProject });
    } catch (error) {
        console.error('Refresh Screenshot Error:', error);
        res.status(500).json({ message: 'Failed to refresh screenshot', error: error.message });
    }
};
