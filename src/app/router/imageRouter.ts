import * as formidable from "formidable";
import { IncomingMessage, ServerResponse } from "http";
import FileController from "../controller/fileController";
import { getPostData } from "../getRequestData";
import { photoList, postList, userList } from "../model";
import userController from "../controller/userController";
import { JwtPayload } from "jsonwebtoken";
import fs from "fs";

export default async function imageRouter(
  req: IncomingMessage,
  res: ServerResponse
) {
  switch (req.method) {
    case "GET":
      const [path, params] = req.url.split(/\?/);
      if (path == "/api/photos") {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");

        res.end(JSON.stringify(photoList));
        //pobierz wszystkie
        res.end();
      } else if (req.url.match(/api\/photos\/[0-9]+/)) {
        const xd = req.url.split(/\//g);
        const id: number = parseInt(xd[xd.length - 1]);
        const photo = photoList.find((img) => img.id == id);
        let url = __dirname + photo.url;
        url = url.replace(/\/\//g, "/");
        res.setHeader("content-type", "image/jpg");
        res.statusCode = 200;
        var readStream = fs.createReadStream(url);
        readStream.pipe(res);

        //pobierz jedno zdjęcie
        res.end();
      } else if (req.url.match(/api\/photos\/post/)) {
        console.log("xd");
        res.statusCode = 200;
        res.end(JSON.stringify(postList));
      } else if (req.url.match(/api\/photos\/profile/)) {
        const token = await userController.verifyLogin(req);
        const user = userList.find((us) => us.email == token.email);
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            name: user.name,
            lastName: user.lastName,
            photoId: user.profilePic,
            email: user.email,
          })
        );
      }
      break;
    case "POST":
      if (req.url == "/api/photos") {
        const form = formidable({ multiples: true, uploadDir: "./temp" });

        console.log(form);
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.log(res);
            res.statusCode = err.httpCode || 404;
            res.statusMessage = String(err);
            res.end();
            return;
          }

          userController
            .verifyLogin(req)
            .then((token) => {
              const user = userList.find((val) => val.email == token.email);
              const photo = FileController.uploadPhoto(
                (files.file as unknown as formidable.File).newFilename,
                (fields as unknown as { album: string }).album,
                user.id
              );
              res.statusCode = 200;
              res.setHeader("content-type", "application/json");
              res.end(JSON.stringify({ ok: "ok", ...photo }));
            })
            .catch((err) => {
              res.statusCode = 400;
              res.end(err);
            });
        });
      }
      if (req.url.match(/photos\/post/)) {
        const body = await getPostData(req);
        const data = JSON.parse(body);
        try {
          const token = await userController.verifyLogin(req);

          FileController.createNewPost(
            data.title,
            data.content,
            data.photoId,
            token.email
          );
          res.statusCode = 201;
          res.statusMessage = "ok";
          res.end();
        } catch (err) {
          res.statusCode = 401;
          res.statusMessage = "invalid token";
          res.end(err);
        }
      }
      break;
    case "DELETE":
      if (req.url.match(/api\/photos\/post\/[0-9]*/)) {
        try {
          const url = req.url.split(/\//g);
          const id = parseInt(url[url.length - 1]);
          const token = await userController.verifyLogin(req);
          const post = FileController.deletePost(id, token.email);
          if (post) {
            res.statusCode = 200;
            res.setHeader("content-type", "application/json");
            res.end(post);
          } else {
            res.statusCode = 403;
            res.statusMessage = "forbidden";
            res.end("You can only delete your own posts");
          }
        } catch (err) {
          res.statusCode = 401;
          res.statusMessage = "err";
          res.end(err);
        }
      } else if (req.url.match(/photos\/[0-9]*/)) {
      }

      break;
    case "PATCH":
      if (req.url.match(/api\/photos\/[0-9]*/)) {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        const body = await getPostData(req);
        //edytuj jedno zdjecie
        res.end(JSON.stringify(body));
      }
      break;
  }
}
