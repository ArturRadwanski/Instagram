interface singleChange 
{
    status: String,
    lastModifiedDate: String
}

export interface PhotoData {
    id: String,
    album: String,
    originalName: String,
    url: String,
    lastChange: String,
    history: singleChange[]
}

export interface TagData {
    id: number,
    name: String,
    popularity:number
}
export const tagsList:TagData[] = [
    {
        "id": 0,
        "name": "#love",
        "popularity": 0
   },
   {
        "id": 1,
        "name": "#instagood",
        "popularity": 0
   },
   {
        "id": 2,
        "name": "#fashion",
        "popularity": 0
   },
   {
        "id": 3,
        "name": "#photooftheday",
        "popularity": 0
   },
   {
        "id": 4,
        "name": "#beautiful",
        "popularity": 0
   },
   {
        "id": 5,
        "name": "#art",
        "popularity": 0
   }
]
export let nextTagId = {
    _id:6,
    get id()
    {
        return this._id

    },
    set id(value: number)
    {
        this._id = value
    }
}

export const photoList:PhotoData[] = []
export let nextPhotoId = 
{
    _id: 0,
    get id()
    {
        return this.id
    },
    set id(value:number)
    { this._id = value}

}
