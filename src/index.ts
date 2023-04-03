import { createServer } from "http";
const PORT = 3000;
import imageRouter from "./app/imageRouter";
import tagRouter from "./app/tagsRouter";

const server = createServer((req, res) => {

  if(req.url.match(/tags/))
    tagRouter(req, res);
  else if(req.url.match(/\/api\/photos/))
    imageRouter(req, res);

});

server.listen(PORT, () => {
  console.log("Start on " + PORT);
});
