const { uploadImage } = require('./config/cloudinary');
const path = require('path');
const fs = require('fs');

const frontendPath = 'd:\\New folder\\NRT portpholio\\NRT FRONTEND';

const assetsToUpload = [
    { path: path.join(frontendPath, 'public/logo.png'), name: 'logo.png' },
    { path: path.join(frontendPath, 'public/pulse-portal.png'), name: 'pulse-portal.png' },
    { path: path.join(frontendPath, 'public/pulse-admin.png'), name: 'pulse-admin.png' },
    { path: path.join(frontendPath, 'public/pulse-reception.png'), name: 'pulse-reception.png' },
    { path: path.join(frontendPath, 'public/agentic_ai_dashboard.png'), name: 'agentic_ai_dashboard.png' },
    { path: path.join(frontendPath, 'public/iraqbid-1.png'), name: 'iraqbid-1.png' },
    { path: path.join(frontendPath, 'public/iraqbid-2.png'), name: 'iraqbid-2.png' },
    { path: path.join(frontendPath, 'public/iraqbid-3.png'), name: 'iraqbid-3.png' },
    { path: path.join(frontendPath, 'public/iraqbid-4.png'), name: 'iraqbid-4.png' },
    { path: path.join(frontendPath, 'public/iraqbid-5.png'), name: 'iraqbid-5.png' },
    { path: path.join(frontendPath, 'public/babybloom-home.png'), name: 'babybloom-home.png' },
    { path: path.join(frontendPath, 'public/babybloom-shop.png'), name: 'babybloom-shop.png' },
    { path: path.join(frontendPath, 'public/gharjaisa-home.png'), name: 'gharjaisa-home.png' },
    { path: path.join(frontendPath, 'public/gharjaisa-menu.png'), name: 'gharjaisa-menu.png' },
    { path: path.join(frontendPath, 'public/textile-pos.png'), name: 'textile-pos.png' },
    { path: path.join(frontendPath, 'public/videos/circuit.mp4'), name: 'circuit.mp4' },
    { path: path.join(frontendPath, 'public/videos/coding.mp4'), name: 'coding.mp4' },
    { path: path.join(frontendPath, 'public/videos/globe.mp4'), name: 'globe.mp4' },
    { path: path.join(frontendPath, 'public/videos/network.mp4'), name: 'network.mp4' }
];

const migrate = async () => {
    console.log('Starting Migration...');
    const mapping = {};

    for (const asset of assetsToUpload) {
        if (fs.existsSync(asset.path)) {
            try {
                console.log(`Uploading ${asset.name}...`);
                const result = await uploadImage(asset.path);
                console.log(`Uploaded ${asset.name}`);
                mapping[asset.name] = result.secure_url;
            } catch (error) {
                console.error(`Failed to upload ${asset.name}:`, error.message);
            }
        } else {
            console.log(`Skipping ${asset.name} (not found: ${asset.path})`);
        }
    }

    fs.writeFileSync('migration_map.json', JSON.stringify(mapping, null, 2));
    console.log('Migration Complete. Map saved to migration_map.json');
};

migrate();
