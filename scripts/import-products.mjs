/* Importă pozele de produs (masterele hi-res din Drive) în design system:
   - redimensionează la max 1600px, JPEG q82 → public/products/{slug}.jpg
   - citește {nume}.txt (ingrediente + gramaj) → scripts/products.manifest.json
   Masterele rămân în Drive; aici intră doar versiuni web-optimizate.
   Rulare: node scripts/import-products.mjs "<folder-master>" */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, extname, basename } from 'path'
import sharp from 'sharp'

const SRC = process.argv[2]
if (!SRC) { console.error('Usage: node scripts/import-products.mjs "<folder>"'); process.exit(1) }
const OUT = 'public/products'
mkdirSync(OUT, { recursive: true })

// nume fișier -> slug curat + nume afișat
const slugify = (s) => s
  .toLowerCase()
  .replace(/ă/g,'a').replace(/â/g,'a').replace(/î/g,'i').replace(/ș/g,'s').replace(/ț/g,'t')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')

const cleanName = (f) => basename(f, extname(f))
  .replace(/^\d+\.\s*/, '')   // "13. Premium" -> "Premium"
  .replace(/2$/, '')          // "Margherita2" -> "Margherita"
  .trim()

const files = readdirSync(SRC).filter(f => /\.jpe?g$/i.test(f)).sort((a,b)=>{
  const na = parseInt(a), nb = parseInt(b); return (na||99)-(nb||99)
})

const manifest = []
for (const f of files) {
  const name = cleanName(f)
  const slug = slugify(name)
  const outFile = `${slug}.jpg`
  // ingrediente + gramaj din .txt omonim
  let ingredients = [], weight = null
  const txt = join(SRC, basename(f, extname(f)) + '.txt')
  try {
    const lines = readFileSync(txt, 'utf8').split(/\r?\n/).map(l=>l.trim()).filter(Boolean)
    for (const l of lines) {
      const m = l.match(/greutate\s*[-–:]\s*(.+)/i)
      if (m) weight = m[1].trim(); else ingredients.push(l)
    }
  } catch { /* fără txt */ }
  const meta = await sharp(join(SRC, f))
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(OUT, outFile))
  manifest.push({ slug, name, image: `/products/${outFile}`, ingredients, weight,
    px: `${meta.width}x${meta.height}`, kb: Math.round(meta.size/1024) })
  console.log(`✓ ${slug.padEnd(26)} ${meta.width}x${meta.height}  ${Math.round(meta.size/1024)}KB  [${ingredients.length} ingr, ${weight||'?'}]`)
}
writeFileSync('scripts/products.manifest.json', JSON.stringify(manifest, null, 2))
console.log(`\n${manifest.length} produse → ${OUT}/ + scripts/products.manifest.json`)
