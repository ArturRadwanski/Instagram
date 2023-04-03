import { IncomingMessage } from "http";

export async function getPostData(req: IncomingMessage):Promise<string>
{
    return new Promise((resolve, reject) =>{
        try {
            let body = ""

            req.on("data", part => {
                body += part.toString()
            })
    
            req.on("end", () => {
                resolve(body)
            })
    
        }
        catch (err)
        {
            reject(err)
        }
        
    })
}