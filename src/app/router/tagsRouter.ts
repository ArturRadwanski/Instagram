import { IncomingMessage, ServerResponse } from "http";
import { url } from "inspector";
import { getPostData } from "../getRequestData";
import { photoList, tagsList, UpdatePhotoTagsData } from "../model";
import { addTag, bindTag } from "../controller/tagsController";

export default async function tagRouter(
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  switch (req.method) {
    case "GET":
      const [path, args] = req.url.split("?");
      console.log(path)
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
      } else if (path.match(/tags\/[0-9]*/)) {
        
        const id = path.split(/\/tags\//)[1] as unknown as number;
        const photo = photoList.find(photo => photo.id == id)
        if(photo === undefined)
        {
          res.statusMessage = "I'm not ok"
          res.statusCode = 403
          res.end()
          return;
        }


        
        const tag = photo.tagList.map(
          name => {
           const tag =  tagsList.find((tag) => tag.name == name);
           if(tag !== undefined)
           return tag
          }
        )
        
        

        res.statusCode = 200;
        res.statusMessage = "ok";
        res.setHeader("content-type", "application/json");
        res.write(JSON.stringify(tag));
        res.end();
      }
      break;

    case "POST":
      if (req.url.match(/^\/api\/tags$/)) {
        getPostData(req).then((body) => {
          console.log(body)
          const obj = JSON.parse(body) as {name: string, popularity?: number}
          obj.name = "#" + obj.name.replace(/\#/g, "")

          console.log(obj)

          const ok = addTag(obj.name, obj.popularity)
          if(ok){
            res.statusCode = 200
            res.statusMessage = "ok"
            res.end()
          }
          else{
            res.statusCode = 400
            res.statusMessage = "this tag probably already exists"
            res.end()
          }
        });
      }
      break;

    case "PATCH":
        if(req.url.match(/api\/photos\/tags$/))
        {
            const body:string = await getPostData(req) as string;
            const obj = JSON.parse(body) as UpdatePhotoTagsData
            obj.tagName = "#" + (obj.tagName as string).replace(/\#/g, "")
            const tagId = tagsList.find(tag => tag.name == obj.tagName).id 
            if(bindTag(obj.photoId, [tagId]))
            {
              res.statusMessage = "ok"
              res.statusCode = 200
            }
            else
            {
              res.statusMessage = "I'm not ok"
              res.statusCode = 403
            }
            res.end()  
        }
        else if(req.url.match(/api\/photos\/tags\/mass$/))
        {
          const body:string = await getPostData(req) as string;
          const obj = JSON.parse(body) as UpdatePhotoTagsData
          
          const tagId = (obj.tagName as string[]).map(name => {
            const tag = tagsList.find(el => name == el.name)
            if(tag !== undefined)
              return tag.id;
          });

          if(bindTag(obj.photoId, tagId))
            {
              res.statusMessage = "ok"
              res.statusCode = 200
            }
            else
            {
              res.statusMessage = "I'm not ok"
              res.statusCode = 403
            }
            res.end()  
          
          
        break;
          }
  }
  return;
}
