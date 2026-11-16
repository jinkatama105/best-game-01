// main.ts - entrypoint for the make.fun best-game-01 entry.
// Serves the game/ directory over HTTP using only the Node standard
// library, so the game can be played offline in a browser at
// http://localhost:PORT/ (PORT defaults to 8080). The game itself is a
// single static file (game/index.html) with no backend, no network
// requests and no storage use.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "game");
const port = Number(process.env.PORT || 8080);

const types: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
};

const server = createServer(async (req, res) => {
  try {
    const path = normalize("/" + (req.url || "/").split("?")[0]);
    const file = join(root, path === "/" ? "index.html" : path);
    if (!file.startsWith(root)) {
      res.writeHead(403);
      res.end();
      return;
    }
    const data = await readFile(file);
    res.writeHead(200, {
      "content-type": types[extname(file)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Starfall is live at http://localhost:${port}/`);
});

export default server;
