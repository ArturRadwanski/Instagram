import sharp from "sharp";
import FileController from "./fileController";

export async function getMetadata(photoId:number): Promise<sharp.Metadata | string>
{
    return new Promise(async (resolve, reject) => {
        try {
            const photo = FileController.findPhotoById(photoId)
            if(photo !== undefined)
            {
                let meta = await sharp(photo.url)
                .metadata()
                resolve(meta)
            }
            else{
                resolve("not found")
            }
        }
        catch (err)
        {
            reject(err.message)
        }
    })
}