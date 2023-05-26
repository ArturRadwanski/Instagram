import { createServer } from "http";
import filtersRouter from "./app/filtersRouter";
import imageRouter from "./app/imageRouter";
import tagRouter from "./app/tagsRouter";
require("dotenv").config()

const server = createServer((req, res) => {

  if(req.url.match(/tags/))
    tagRouter(req, res);
  else if(req.url.match(/\/api\/photos/))
    imageRouter(req, res);
  else if(req.url.match(/api\/filters/))
    filtersRouter(req, res)

});

server.listen(process.env.APP_PORT, () => {
  console.log("Start on " + process.env.APP_PORT);
});
