const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'portfolio');

const renameFilesInDir = (dir, prefix) => {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i));
  files.forEach((file, index) => {
    const ext = path.extname(file);
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, `${prefix}-${index + 1}${ext}`);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed in ${dir}: ${file} -> ${prefix}-${index + 1}${ext}`);
    }
  });
};

const processAll = () => {
  const mapping = [
    { dir: 'apparel/Brand Logo', prefix: 'brand' },
    { dir: 'apparel/Hand Tags', prefix: 'tag' },
    { dir: 'apparel/Social Media Posts', prefix: 'social' },
    { dir: 'apparel/Website Banner', prefix: 'banner' },
    
    { dir: 'food/Logos', prefix: 'logo' },
    { dir: 'food/Banners', prefix: 'banner' },
    { dir: 'food/Branding Assets', prefix: 'brand' },
    
    { dir: 'gifts/Logo', prefix: 'logo' },
    { dir: 'gifts/Packaging & Tags', prefix: 'pack' },
    
    { dir: 'home-decor/Logo', prefix: 'logo' },
    { dir: 'home-decor/Banner', prefix: 'banner' },
    
    { dir: 'jewelry/Brand Logo', prefix: 'logo' },
    { dir: 'jewelry/Banners', prefix: 'banner' },
    { dir: 'jewelry/Product Demonstration Posts', prefix: 'social' },
    
    { dir: 'marketing/Logo', prefix: 'logo' },
    { dir: 'marketing/Banner', prefix: 'banner' },
    
    { dir: 'skincare/Logo', prefix: 'logo' },
    { dir: 'skincare/Packaging & Design', prefix: 'pack' },
    { dir: 'skincare/Social Media Post', prefix: 'social' },
    { dir: 'skincare/Website Banner', prefix: 'banner' },
    
    { dir: 'banners', prefix: 'banner' },
    { dir: 'logos', prefix: 'logo' },
    { dir: 'branding', prefix: 'brand' }
  ];

  mapping.forEach(m => {
    renameFilesInDir(path.join(baseDir, m.dir), m.prefix);
  });
};

processAll();
