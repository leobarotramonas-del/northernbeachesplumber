import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const areas = [
  ['manly', -33.7972, 151.2887],
  ['dee-why', -33.7517, 151.2880],
  ['brookvale', -33.7611, 151.2748],
  ['freshwater', -33.7780, 151.2850],
  ['curl-curl', -33.7683, 151.2917],
  ['narrabeen', -33.7136, 151.2977],
  ['collaroy', -33.7323, 151.3004],
  ['mona-vale', -33.6760, 151.3034],
  ['warriewood', -33.6906, 151.2955],
  ['frenchs-forest', -33.7505, 151.2290],
  ['forestville', -33.7620, 151.2150],
  ['belrose', -33.7390, 151.2110],
  ['newport', -33.6567, 151.3196],
  ['avalon-beach', -33.6357, 151.3299],
];

const zoom = 13;
const tileSize = 256;
const width = 800;
const height = 500;
const worldTiles = 2 ** zoom;
const outputDir = join(process.cwd(), 'public', 'images', 'maps');
const tileCache = new Map();

const worldPixels = (latitude, longitude) => ({
  x: ((longitude + 180) / 360) * worldTiles * tileSize,
  y: ((1 - Math.asinh(Math.tan(latitude * Math.PI / 180)) / Math.PI) / 2) * worldTiles * tileSize,
});

const getTile = async (x, y) => {
  const key = `${zoom}/${x}/${y}`;
  if (!tileCache.has(key)) {
    tileCache.set(key, (async () => {
      const response = await fetch(`https://tile.openstreetmap.org/${key}.png`, {
        headers: { 'User-Agent': 'NorthernBeachesPlumber/1.0 (website map preview)' },
      });
      if (!response.ok) throw new Error(`OpenStreetMap tile ${key} returned ${response.status}`);
      return Buffer.from(await response.arrayBuffer());
    })());
  }
  return tileCache.get(key);
};

await mkdir(outputDir, { recursive: true });

for (const [slug, latitude, longitude] of areas) {
  const centre = worldPixels(latitude, longitude);
  const startX = Math.floor(centre.x - width / 2);
  const startY = Math.floor(centre.y - height / 2);
  const firstTileX = Math.floor(startX / tileSize);
  const firstTileY = Math.floor(startY / tileSize);
  const lastTileX = Math.floor((startX + width - 1) / tileSize);
  const lastTileY = Math.floor((startY + height - 1) / tileSize);
  const canvasWidth = (lastTileX - firstTileX + 1) * tileSize;
  const canvasHeight = (lastTileY - firstTileY + 1) * tileSize;
  const tiles = [];

  for (let y = firstTileY; y <= lastTileY; y += 1) {
    for (let x = firstTileX; x <= lastTileX; x += 1) {
      tiles.push({
        input: await getTile(x, y),
        left: (x - firstTileX) * tileSize,
        top: (y - firstTileY) * tileSize,
      });
    }
  }

  const marker = Buffer.from(`
    <svg width="42" height="54" viewBox="0 0 42 54" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 52C17 45 4 31 4 21C4 11.6 11.6 4 21 4C30.4 4 38 11.6 38 21C38 31 25 45 21 52Z" fill="#1463DF" stroke="#FFFFFF" stroke-width="4"/>
      <circle cx="21" cy="21" r="7" fill="#FFFFFF"/>
    </svg>
  `);
  const mosaic = await sharp({ create: { width: canvasWidth, height: canvasHeight, channels: 3, background: '#dfe7ef' } })
    .composite(tiles)
    .png()
    .toBuffer();
  const composite = await sharp(mosaic)
    .extract({ left: startX - firstTileX * tileSize, top: startY - firstTileY * tileSize, width, height })
    .composite([{ input: marker, left: Math.round(width / 2 - 21), top: Math.round(height / 2 - 50) }])
    .webp({ quality: 86 })
    .toBuffer();

  await writeFile(join(outputDir, `${slug}.webp`), composite);
}

const generated = await Promise.all(areas.map(async ([slug]) => {
  const file = join(outputDir, `${slug}.webp`);
  return `${slug}: ${(await readFile(file)).byteLength} bytes`;
}));

console.log(`Generated ${generated.length} map previews\n${generated.join('\n')}`);
