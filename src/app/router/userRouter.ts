import { IncomingMessage, ServerResponse } from "http";
import userController from "../controller/userController";
import { getPostData } from "../getRequestData";

export default async function userRouter(req:IncomingMessage, res:ServerResponse<IncomingMessage>)
{
    switch (req.method){
        case "POST":
            if(req.url.match(/\/register/))
            {
                const body = await getPostData(req);
                const user = JSON.parse(body) as unknown as {name:string, lastName:string, email:string, password:string}
                console.log(user)
                if(user.name != undefined && user.lastName != undefined && user.email != undefined && user.password != undefined)
                {
                    const token = await userController.reqisterUser(user.name, user.lastName, user.email, user.password)
                    res.statusCode = 200
                    res.statusMessage = "ok"
                    res.end(token)
                }
                res.statusCode = 400
                res.statusMessage = "im not ok"
                res.end()
                
                
            }
            break;
        case "GET":
            if(req.url.match(/\/confirm\/.+$/))
            {
                const phases = req.url.split("/")
                const token = phases[phases.length - 1]
                userController.confirmUser(token)
                res.statusCode = 200
                res.statusMessage = "ok"
                res.end()
            }
    }
}