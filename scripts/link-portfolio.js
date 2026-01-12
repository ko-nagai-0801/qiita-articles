const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const portfolioDir = path.join(publicDir, "portfolio");

if (!fs.existsSync(portfolioDir)) {
  console.error("portfolio directory not found:", portfolioDir);
  process.exit(1);
}

const entries = fs.readdirSync(portfolioDir, { withFileTypes: true });
let created = 0;
let skipped = 0;

for (const entry of entries) {
  if (!entry.isFile()) continue;
  if (!entry.name.endsWith(".md")) continue;

  const linkPath = path.join(publicDir, entry.name);
  const target = path.join("portfolio", entry.name);

  try {
    const stat = fs.lstatSync(linkPath);
    if (stat.isSymbolicLink()) {
      skipped += 1;
      continue;
    }
    console.warn(`Skip (exists): ${linkPath}`);
    skipped += 1;
    continue;
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }

  fs.symlinkSync(target, linkPath);
  created += 1;
}

console.log(`Symlinks created: ${created}, skipped: ${skipped}`);
