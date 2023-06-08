import {
  nextUserId,
  tokenBinding,
  tokenStructure,
  user,
  userList,
} from "../model";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IncomingMessage } from "http";
import { getPostData } from "../getRequestData";
require("dotenv").config();

class UserController {
  async reqisterUser(
    name: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const encPassword = await bcrypt.hash(password, 10);
    const newUser: user = {
      name,
      lastName,
      email,
      password: encPassword,
      confirmed: false,
      id: nextUserId.id,
    };
    userList.push(newUser);
    const token = await this.createToken(newUser.email, "5m");
    return token;
  }

  async confirmUser(token: string) {
    try {
      const turnOut = (await this.checkToken(token)) as unknown as {
        email: string;
        iat: number;
        exp: number;
      };
      const toConfirm = userList.find((el) => el.email == turnOut.email);

      toConfirm.confirmed = true;
      console.log(toConfirm);
      return true;
    } catch {
      return false;
    }
  }
  async createToken(email: string, time: string) {
    let token = await jwt.sign(
      { email: email },
      process.env.SECRET_KEY, // powinno być w .env
      {
        expiresIn: time, // "1m", "1d", "24h"
      }
    );
    console.log({ token: token });
    return token;
  }
  async checkToken(token: string) {
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    return decode;
  }
  async login(email: string, password: string): Promise<boolean | string> {
    const toCheck = userList.find((el) => el.email == email);
    let passCheck = await bcrypt.compare(password, toCheck.password);
    console.log(passCheck, toCheck.confirmed);
    if (passCheck && toCheck.confirmed) {
      const userId = toCheck.id;
      const token = await this.createToken(email, "1h");
      tokenBinding.push({ userId, token });
      return token;
    }
    return false;
  }
  async checkLoginToken(token: string) {
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    return decode;
  }
  async verifyLogin(req: IncomingMessage): Promise<string | jwt.JwtPayload> {
    return new Promise(async (resolve, reject) => {
      console.log(req.headers);
      if (req.headers.authorization) {
        try {
          const tokenInsights = jwt.decode(
            req.headers.authorization
          ) as tokenStructure;
          const now = Math.floor(Date.now() / 1000);

          if (now < tokenInsights.exp) {
            resolve(tokenInsights);
          } else {
            reject("token expired");
          }
        } catch {
          reject("incorrect token");
        }
      }
      reject("no authorization token");
    });
  }
}
var userController = new UserController();
export default userController;
