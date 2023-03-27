import { createServer } from "http";
const PORT = 3000;
import router from "./app/router";

const server = createServer((req, res) => {
  router(req, res);
});

server.listen(PORT, () => {
  console.log("Start on " + PORT);
});
