import * as formidable from "formidable";
import { IncomingMessage, ServerResponse } from "http";

export default async function router(
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
        const form = formidable({ multiples: true, uploadDir: "./test" });
        console.log(req);
        form.parse(req, (err, fields, files) => {
          if (err) {
            res.statusCode = err.httpCode || 404;
            res.statusMessage = String(err);
            res.end();
            return;
          }
          console.log(fields);
          console.log(files);
          res.statusCode = 200;
          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify({ ok: "ok" }));
        });
      }
      break;
    case "DELETE":
      if (req.url.match(/api\/photos\/[0-9]*/)) {
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

        //edytuj jedno zdjecie
        res.end();
      }
      break;
  }
}
