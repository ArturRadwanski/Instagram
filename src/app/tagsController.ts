import { tagsList, nextTagId, photoList } from "./model";

export function addTag(name:string, popularity?: number):boolean
{
    if(tagsList.findIndex(tag => tag.name == name) == -1)
    {
        tagsList.push({
            name: name,
            popularity: popularity ?? 0,
            id: nextTagId.id
        })
        nextTagId.id += 1
      return true
    }
   return false;
}

export function bindTag(photoId:number, tagId:number[]):boolean
{
  let success = true;
  const photo = photoList.find(photo => photo.id == photoId)

  
    tagId.forEach(id => {
      const tag = tagsList.find(tag => tag.id == id)
      if(tag !== undefined && !photo.tagList.includes(tag.name))
        photo.tagList.push(tag.name)
      else
      success = false
    })
  

  return success;
}