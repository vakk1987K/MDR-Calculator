import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Design high-quality SVG
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#064e3b" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <filter id="dropGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>
  
  <!-- Outer Rounded Square Background -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)" />
  
  <!-- Decorative Ring -->
  <circle cx="256" cy="256" r="190" fill="none" stroke="#34d399" stroke-width="6" stroke-opacity="0.2" />
  
  <!-- Inner Card -->
  <rect x="100" y="100" width="312" height="312" rx="44" fill="#042f2e" stroke="#14b8a6" stroke-width="4" filter="url(#dropGlow)" />
  
  <!-- UPI Double Triangle Arrows -->
  <g transform="translate(196, 136) scale(0.65)">
    <path d="M40 80 L140 80 L90 20 Z" fill="#38bdf8" />
    <path d="M60 80 L160 80 L110 140 Z" fill="#34d399" />
  </g>

  <!-- Rupee Symbol ₹ -->
  <text x="256" y="325" 
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        font-size="140" 
        font-weight="900" 
        fill="#f8fafc" 
        text-anchor="middle"
        dominant-baseline="central">₹</text>

  <!-- Tiny badge MDR -->
  <rect x="196" y="355" width="120" height="32" rx="16" fill="url(#accentGrad)" />
  <text x="256" y="372" 
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        font-size="16" 
        font-weight="800" 
        letter-spacing="2"
        fill="#022c22" 
        text-anchor="middle" 
        dominant-baseline="central">MDR CALC</text>
</svg>`;

// Write icon.svg
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);

// Generate PNG sizes
async function generatePngs() {
  const svgBuffer = Buffer.from(svgIcon);

  // 192x192
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));

  // 512x512
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));

  // 512x512 maskable (with 15% safe padding)
  const innerResized = await sharp(svgBuffer)
    .resize(410, 410)
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 15, g: 118, b: 110, alpha: 1 }
    }
  })
    .composite([{ input: innerResized, top: 51, left: 51 }])
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

  // Apple touch icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Favicon (48x48 png / ico)
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('PWA icons successfully generated!');
}

generatePngs().catch(console.error);
