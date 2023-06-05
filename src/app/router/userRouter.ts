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
                    res.statusCode = 201
                    res.statusMessage = "ok"
                    res.end(token)
                }
                res.statusCode = 400
                res.statusMessage = "im not ok"
                res.end()
                
                
            }
            if(req.url.match(/\/login/))
            {
                const body = await getPostData(req);
                const data = JSON.parse(body) as unknown as {email:string, password:string}
                const result = await userController.login(data.email, data.password)
                if(result)
                {
                    res.statusCode = 200
                    res.statusMessage = "pomyslnie zalogowano"
                    res.end(result)
                }
                else{
                    res.statusCode = 400
                    res.statusMessage = "err"
                    res.end("upewnij się że hasło jest poprawne, a adres email potwierdzony")
                }
                    
            }
            break;
        case "GET":
            if(req.url.match(/\/confirm\/.+$/))
            {
                const phases = req.url.split("/")
                const token = phases[phases.length - 1]
                let status = await userController.confirmUser(token)
                if(status)
                {
                    res.statusCode = 200
                    res.statusMessage = "successfully confirmed"
                    res.end()
                }
                res.statusCode = 401
                res.statusMessage = "bad token"
                res.end()
            }
    }
}