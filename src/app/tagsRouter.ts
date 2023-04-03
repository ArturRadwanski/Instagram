import { IncomingMessage, ServerResponse } from "http";
import { url } from "inspector";
import { getPostData } from "./getRequestData";
import { tagsList } from "./model";
import { addTag } from "./tagsController";

export default async function tagRouter(
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  switch (req.method) {
    case "GET":
      const [path, args] = req.url.split("?");
      if (path.match(/raw/)) {
        res.statusCode = 200;
        res.statusMessage = "ok";
        res.setHeader("content-type", "application/json");

        const stringList = tagsList.map((tag) => {
          return tag.name;
        });
        res.write(JSON.stringify(stringList));
        res.end();
      } else if (path.match(/tags$/)) {
        res.statusCode = 200;
        res.statusMessage = "ok";
        res.setHeader("content-type", "application/json");
        res.write(JSON.stringify(tagsList));
        res.end();
      } else if (path.match(/tag\/[0-9]*/)) {
        const id = path.split(/\/tags\//)[1] as unknown as number;
        const tag = tagsList.find((tag) => tag.id == id);

        res.statusCode = 200;
        res.statusMessage = "ok";
        res.setHeader("content-type", "application/json");
        res.write(JSON.stringify(tag));
        res.end();
      }
      break;

    case "POST":
      if (path.match(/^\/api\/tags$/)) {
        getPostData(req).then((body) => {
          const params = new URLSearchParams(body as string);
          const obj = Object.fromEntries(params) as unknown as {
            name: string,
            popularity?: number
          };
          addTag(...obj)
        });
      }
      break;

    case "PATCH":
        if(req.url.match(/api\/photos\/tags/))
        {
            const body:string = await getPostData(req) as string;
            const params = new URLSearchParams(body)

        }
        break;
  }
  return;
}
