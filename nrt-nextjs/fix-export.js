const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/pages/HomeClient.tsx');
let content = fs.readFileSync(file, 'utf8');

// Replace export function Home() with export function HomeClient()
content = content.replace(/export function Home\(\) \{/, 'export function HomeClient() {');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed export in HomeClient.tsx');
