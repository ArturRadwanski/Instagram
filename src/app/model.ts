interface singleChange {
  status: string;
  lastModifiedDate: string;
  url: string;
}
export interface tokenStructure {
  email: string;
  iat: number;
  exp: number;
}

export interface PhotoData {
  id: number;
  album: string;
  originalName: string;
  url: string;
  lastChange: string;
  history: singleChange[];
  tagList: string[];
  userId: number;
}

export interface TagData {
  id: number;
  name: string;
  popularity: number;
}

export interface UpdatePhotoTagsData {
  photoId: number;
  tagName: string | string[];
}
export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  confirmed: boolean;
  password: string;
  photosId: number[];
  profilePic: number | null;
}
export let nextUserId = {
  _id: 6,
  get id(): number {
    this._id += 1;
    return this._id;
  },
};
export const userList: user[] = [];
export const tokenBinding: { userId: number; token: string }[] = [];
export const tagsList: TagData[] = [
  {
    id: 0,
    name: "#love",
    popularity: 0,
  },
  {
    id: 1,
    name: "#instagood",
    popularity: 0,
  },
  {
    id: 2,
    name: "#fashion",
    popularity: 0,
  },
  {
    id: 3,
    name: "#photooftheday",
    popularity: 0,
  },
  {
    id: 4,
    name: "#beautiful",
    popularity: 0,
  },
  {
    id: 5,
    name: "#art",
    popularity: 0,
  },
];
export let nextTagId = {
  _id: 6,
  get id(): number {
    this._id += 1;
    return this._id;
  },
};

export const photoList: PhotoData[] = [];
export let nextPhotoId = {
  _id: 0,
  get id(): number {
    this._id += 1;
    return this._id;
  },
};

export interface post {
  userId: number;
  email: string;
  title: string;
  content: string;
  photoId: number[];
  id: number;
}
export let nextPostId = {
  _id: 0,
  get id(): number {
    this._id += 1;
    return this._id;
  },
};
export const postList: post[] = [];
