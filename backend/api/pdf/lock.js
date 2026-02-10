const locks = new Set();

export function lock(req, res) {
  if (locks.has(req.body.file)) return res.sendStatus(423);
  locks.add(req.body.file);
  res.json({ locked: true });
}

export function unlock(req, res) {
  locks.delete(req.body.file);
  res.json({ unlocked: true });
}