import fs from "fs";
import path from "path";

export function saveVersion(file) {
  const versions = "storage/versions";
  if (!fs.existsSync(versions)) fs.mkdirSync(versions);
  fs.copyFileSync(file, path.join(versions, Date.now() + ".pdf"));
}