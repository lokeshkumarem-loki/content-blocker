import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok", app: "content-blocker" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
