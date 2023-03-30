interface singleChange 
{
    status: String,
    lastModifiedDate: String
}

export default interface PhotoData {
    id: String,
    album: String,
    originalName: String,
    url: String,
    lastChange: String,
    history: singleChange[]

}