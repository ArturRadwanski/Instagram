import { createServer } from "http";
import userController from "./app/controller/userController";
import filtersRouter from "./app/router/filtersRouter";
import imageRouter from "./app/router/imageRouter";
import tagRouter from "./app/router/tagsRouter";
import userRouter from "./app/router/userRouter";
require("dotenv").config()

const server = createServer((req, res) => {

  userController.verifyLogin(req)
  if(req.url.match(/tags/))
    tagRouter(req, res);
  else if(req.url.match(/\/api\/photos/))
    imageRouter(req, res);
  else if(req.url.match(/api\/filters/))
    filtersRouter(req, res)
  else if(req.url.match(/api\/user/))
    userRouter(req, res)

});

server.listen(process.env.APP_PORT, () => {
  console.log("Start on " + process.env.APP_PORT);
});
