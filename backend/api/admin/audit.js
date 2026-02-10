import fs from "fs";

export function log(action, user) {
  fs.appendFileSync(
    "storage/audit.log",
    `${new Date().toISOString()} | ${user} | ${action}\n`
  );
}