import { tagsList, nextTagId } from "./model";

export function addTag(name:string, popularity?: number):boolean
{
    if(tagsList.findIndex(tag => tag.name == name) == -1)
    {
        tagsList.push({
            name,
            popularity: popularity ?? 0,
            id: nextTagId.id
        })
        nextTagId.id += 1
      return true
    }
   return false;
}