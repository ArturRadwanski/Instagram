import * as formidable from "formidable";
import { IncomingMessage, ServerResponse } from "http";
import FileController from "./fileController";
import { getPostData } from "./getRequestData";

export default async function imageRouter(
  req: IncomingMessage,
  res: ServerResponse
) {
  switch (req.method) {
    case "GET":
      const [path, params] = req.url.split(/\?/);
      if (path == "/api/photos") {
        res.statusCode = 200;
        res.setHeader("content-type", "image/jpg");
        //pobierz wszystkie
        res.end();
      } else if (req.url.match(/api\/photos\/[0-9]*/)) {
        res.statusCode = 200;
        res.setHeader("content-type", "image/jpg");
        //pobierz jedno zdjęcie
        res.end();
      }
      break;
    case "POST":
      if (req.url == "/api/photos") {
        const form = formidable({ multiples: true, uploadDir: "./temp" });
        form.parse(req, (err, fields, files) => {
          if (err) {
            res.statusCode = err.httpCode || 404;
            res.statusMessage = String(err);
            res.end();
            return;
          }

          FileController.uploadPhoto((files.file as unknown as formidable.File).newFilename, (fields as unknown as{album: String}).album)
          res.statusCode = 200;
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify({ ok: "ok" }));
        });
      }
      break;
    case "DELETE":
      if (req.url.match(/api\/photos\/[0-9a-zA-Z]*/)) {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");

        //usun zdjecie i zwroc jego json
        res.end();
      }
      break;
    case "PATCH":
      if (req.url.match(/api\/photos\/[0-9]*/)) {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        const body = await getPostData(req)
        //edytuj jedno zdjecie
        res.end(JSON.stringify(body));
      }
      break;
  }
}
