import * as formidable from 'formidable';
import * as fs from 'fs';

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
}

}
const FileController = new FileControllerClass()
export default FileController
