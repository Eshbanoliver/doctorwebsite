import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function processImage() {
  const image_path = 'public/Screenshot 2026-04-27 105555.png';
  
  try {
    console.log("Starting background removal...");
    const blob = await removeBackground(image_path);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync('src/assets/dr_quresh_enhanced.png', buffer);
    console.log("Background removed successfully!");
  } catch (error) {
    console.error("Error removing background:", error);
  }
}

processImage();
