import * as formidable from "formidable";
import * as fs from "fs";
import {
  nextPhotoId,
  nextPostId,
  photoList,
  post,
  postList,
  userList,
} from "../model";
import userController from "./userController";
import userRouter from "../router/userRouter";

class FileControllerClass {
  createAlbum(name: string): void {
    fs.mkdirSync(`./albums/${name}`);
  }

  uploadPhoto(name: string, album: string, userId: number) {
    if (!fs.existsSync(`./albums/${album}`)) this.createAlbum(album);
    fs.renameSync(`./temp/${name}`, `./albums/${album}/${name}`);
    photoList.push({
      id: nextPhotoId.id,
      album: album,
      originalName: name,
      url: `./albums/${album}/${name}`,
      lastChange: Date.now().toLocaleString(),
      history: [],
      tagList: [],
      userId,
    });
    return photoList[photoList.length - 1];
  }

  findPhotoById(id: number) {
    return photoList.find((el) => el.id == id);
  }

  createNewPost(
    title: string,
    content: string,
    photoId: number[],
    email: string
  ) {
    const user = userList.find((val) => val.email == email);
    const post: post = {
      title,
      content,
      photoId,
      id: nextPostId.id,
      userId: user.id,
      email: user.email,
    };
    postList.push(post);
    return;
  }

  deletePost(id: number, email: string) {
    const post = postList.findIndex((val) => val.id == id);
    if (postList[post].email == email) {
      const [x] = postList.slice(post, post + 1);
      return x;
    }
    return false;
  }
  deletePhoto(id: number) {}
}

const FileController = new FileControllerClass();
export default FileController;

// export interface PhotoData {
//     id: String,
//     album: String,
//     originalName: String,
//     url: String,
//     lastChange: String,
//     history: singleChange[]
// }
