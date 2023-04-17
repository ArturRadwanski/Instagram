import * as formidable from 'formidable';
import * as fs from 'fs';
import { nextPhotoId, photoList } from './model';

class FileControllerClass
{

createAlbum(name: String): void
{
    fs.mkdirSync(`./albums/${name}`)
}

uploadPhoto(name: String, album: String)
{
    if(!fs.existsSync(`./albums/${album}`))
        this.createAlbum(album)
    fs.renameSync(`./temp/${name}`, `./albums/${album}/${name}`)
    photoList.push({
        id: nextPhotoId.id as unknown as number,
        album: album,
        originalName: name,
        url: `./albums/${album}/${name}`,
        lastChange: Date.now().toLocaleString(),
        history: [],
        tagList: []
    })
    return photoList[photoList.length - 1]
}

}
const FileController = new FileControllerClass()
export default FileController

// export interface PhotoData {
//     id: String,
//     album: String,
//     originalName: String,
//     url: String,
//     lastChange: String,
//     history: singleChange[]
// }