import User from "./user"

export interface CommentDTO{
    id:number
    text:String
    owner: number
    timestamp: String
    user: User
}