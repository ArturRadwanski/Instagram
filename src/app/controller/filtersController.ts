import sharp from "sharp";
import FileController from "./fileController";
import userController from "./userController";

export async function getMetadata(
  photoId: number
): Promise<sharp.Metadata | string> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        let meta = await sharp(photo.url).metadata();
        resolve(meta);
      } else {
        resolve("not found");
      }
    } catch (err) {
      reject(err.message);
    }
  });
}
//toDo edutuj historie zdjecia zamiast tworzyc nowe dane po filtrze
export async function rotate(photoId: number, angle: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .rotate(angle)
          .toFile(`temp/${photo.originalName}_rotate.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_rotate.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function resize(
  photoId: number,
  width: number,
  height: number
): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .resize(width, height)
          .toFile(`temp/${photo.originalName}_resize.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_resize.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

//toDo funkcja uploadPhoto i tak zrobi z tego jpg, napraw potem
export async function reformat(photoId: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url).toFile(`temp/${photo.originalName}.png`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + ".png",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function crop(
  photoId: number,
  region: sharp.Region
): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .extract(region)
          .toFile(`temp/${photo.originalName}_crop.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_crop.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function grayScale(photoId: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .grayscale()
          .toFile(`temp/${photo.originalName}_grayScale.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_grayScale.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function flip(photoId: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .flip()
          .toFile(`temp/${photo.originalName}_flip.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_flip.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}
export async function flop(photoId: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .flop()
          .toFile(`temp/${photo.originalName}_flop.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_flop.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function negate(photoId: number): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .grayscale()
          .toFile(`temp/${photo.originalName}_negate.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_negate.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function tint(
  photoId: number,
  color: sharp.Color
): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const photo = FileController.findPhotoById(photoId);
      if (photo !== undefined) {
        await sharp(photo.url)
          .tint(color)
          .toFile(`temp/${photo.originalName}_tint.jpg`);
        const newPhoto = FileController.uploadPhoto(
          photo.originalName + "_tint.jpg",
          photo.album,
          photo.userId
        );
        resolve(newPhoto.id);
      } else {
        reject("not found");
      }
    } catch (err) {
      reject(err);
    }
  });
}
