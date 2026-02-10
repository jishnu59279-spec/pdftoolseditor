import fs from "fs";

export function syncFile(local, cloud) {
  fs.copyFileSync(local, cloud);
}