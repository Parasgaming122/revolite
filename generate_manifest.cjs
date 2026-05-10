const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'public', 'revolite');
const manifest = {};

const scanDir = (dir, parentKey = '') => {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      scanDir(fullPath, parentKey ? `${parentKey}/${item}` : item);
    } else if (item.match(/\.(jpg|jpeg|png|gif|webp|avif|jfif|svg)$/i)) {
      if (!manifest[parentKey]) manifest[parentKey] = [];
      manifest[parentKey].push(item);
    }
  });
};

if (fs.existsSync(rootDir)) {
  scanDir(rootDir);
  fs.writeFileSync(path.join(__dirname, 'src', 'portfolio_manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Portfolio manifest generated successfully with extended format support!');
} else {
  console.log('revolite directory not found in public/');
}
