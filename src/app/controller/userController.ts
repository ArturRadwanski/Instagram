import { nextUserId, tokenBinding, user, userList } from "../model";
import * as jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
require("dotenv").config()

class UserController {
    async reqisterUser(name: string, lastName: string, email: string, password: string) {
        const encPassword = await bcrypt.hash(password, 10)
        const newUser:user = {name, lastName, email, password:encPassword, confirmed:false, id:nextUserId.id}
        userList.push(newUser)
        const token = await this.createToken(newUser)
        return token
    }
    
    async confirmUser(token:string)
    {
        const turnOut = await this.checkToken(token) as unknown as {email:string, iat:number, exp:number}
        const toConfirm = userList.find(el => el.email == turnOut.email)

        console.log(turnOut)
    }
    async createToken(next:user) {

        let token = await jwt.sign(
           {email: next.email},
            process.env.SECRET_KEY, // powinno być w .env
            {
                expiresIn: "5m" // "1m", "1d", "24h"
            }
        );
        console.log({ token: token });
        return token
    }
    async checkToken(token:string)
    {
        const decode = await jwt.verify(token,
            process.env.SECRET_KEY)
        return decode;

    }
}
var userController = new UserController()
export default userController;