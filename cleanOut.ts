// clean-assets.js
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('./assets'); // Adjust path if needed

fs.readdirSync(assetsDir).forEach(file => {
  if (/^bundle\..*\.map$/.test(file)) {
    fs.unlinkSync(path.join(assetsDir, file));
    console.log(`Deleted: ${file}`);
  }
});

