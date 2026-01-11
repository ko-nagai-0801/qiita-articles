const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const remoteDir = path.join(publicDir, ".remote");
const hexFile = /^[0-9a-f]+\.md$/;

if (!fs.existsSync(remoteDir)) {
  fs.mkdirSync(remoteDir, { recursive: true });
}

const entries = fs.readdirSync(publicDir, { withFileTypes: true });
let moved = 0;

for (const entry of entries) {
  if (!entry.isFile()) continue;
  if (!hexFile.test(entry.name)) continue;
  const from = path.join(publicDir, entry.name);
  const to = path.join(remoteDir, entry.name);
  fs.renameSync(from, to);
  moved += 1;
}

console.log(`Moved ${moved} file(s) to public/.remote/`);
