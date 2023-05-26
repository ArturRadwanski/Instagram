import { IncomingMessage, ServerResponse } from "http";
import {
  getMetadata,
  rotate,
  resize,
  reformat,
  crop,
  grayScale,
  flop,
  flip,
  negate,
  tint,
} from "./filters";

export default async function filtersRouter(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.method === "GET") {
    if (req.url.match(/metadata\/[0-9]*$/)) {
      const temp = req.url.split("/");
      const id = temp[temp.length - 1] as unknown as number;
      const meta = await getMetadata(id);
      res.statusCode = 200;
      res.statusMessage = "ok";
      res.write(JSON.stringify(meta));
      res.end();
    } else if (req.url.match(/getfile\/[0-9]\//)) {
      const temp = req.url.split("/");
      let newID;
      switch (temp[temp.length - 1]) {
        case "rotate":
          newID = await rotate(temp[temp.length - 2] as unknown as number, 90);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "resize":
          newID = await resize(
            temp[temp.length - 2] as unknown as number,
            200,
            200
          );
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "reformat":
          newID = await reformat(temp[temp.length - 2] as unknown as number);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "crop":
          newID = await crop(temp[temp.length - 2] as unknown as number, {
            width: 100,
            height: 100,
            left: 0,
            top: 0,
          });
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "grayScale":
          newID = await grayScale(temp[temp.length - 2] as unknown as number);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "flip":
          newID = await flip(temp[temp.length - 2] as unknown as number);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "flop":
          newID = await flop(temp[temp.length - 2] as unknown as number);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "negate":
          newID = await negate(temp[temp.length - 2] as unknown as number);
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
        case "tint":
          newID = await tint(temp[temp.length - 2] as unknown as number, "red");
          res.statusCode = 200;
          res.statusMessage = "ok";
          res.end(newID + "");
          break;
      }
    }
  } else if (req.method === "PATCH") {
  }
}
