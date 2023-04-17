import { IncomingMessage, ServerResponse } from "http";
import { url } from "inspector";
import { getPostData } from "./getRequestData";
import { photoList, tagsList, UpdatePhotoTagsData } from "./model";
import { addTag } from "./tagsController";

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
        
        const tag = tagsList.find((tag) => tag.id == id);

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
          const obj = JSON.parse(body) as {name: string, popularity?: number}
          obj.name = obj.name.replace(/\#/g, "")

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
            obj.tagName = (obj.tagName as string).replace(/\#/g, "")
            const photo = photoList.find(photo => photo.id == obj.photoId)
            if(!photo.tagList.includes(obj.tagName as string))
            {
              if(tagsList.find(tag => 
                tag.name.includes(obj.tagName as string)
              ) === undefined)
              {
                console.log(obj.tagName)
                res.statusCode = 400
                res.statusMessage = "this tag does not exists"
                res.end()
              }
              else {
                photo.tagList.push(obj.tagName as string)
              res.statusCode = 200
              res.statusMessage = "ok"
              res.end()
              }
              
            }
            else
            {
              res.statusCode = 400
              res.statusMessage = "photo already has this tag"
              res.end()
            }            
        }
        else if(req.url.match(/api\/photos\/tags$\/mass/))
        {
          const body:string = await getPostData(req) as string;
          const obj = JSON.parse(body) as UpdatePhotoTagsData
          const photo = photoList.find(photo => photo.id == obj.photoId)
          
          obj.tagName = (obj.tagName as string[]).map(name => name.replace(/\#/g, ""))

          const nonExistent:string[] = []

          res.statusCode = 200
          res.statusMessage = "ok"

          obj.tagName.forEach(name => {
            if(!photo.tagList.includes(name))
            {
              if(tagsList.find(tag => 
                tag.name.includes(name)
              ) === undefined)
              {
                nonExistent.push(name)
              }
              else {
                photo.tagList.push(obj.tagName as string)
              }
              
            }
            else
            {
              nonExistent.push(name)
            }    
          })
        if(nonExistent.length != 0)
        {
          res.statusCode = 400
          res.statusMessage = `these tags are not correct ${JSON.stringify(nonExistent)}`
        }
        res.end()
        }
        break;
  }
  return;
}
