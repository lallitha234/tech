import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const base = process.env.VITE_BASE || "/tech/";
console.log(`Building with VITE_BASE=${base}`);
execSync("npm run build", {
  env: { ...process.env, VITE_BASE: base },
  stdio: "inherit",
});

const src = path.resolve("dist/client");
const dest = path.resolve("docs");
if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}
fs.cpSync(src, dest, { recursive: true });
console.log(`Copied ${src} to ${dest}`);
