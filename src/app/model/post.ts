import { UserService } from "../service/user/user.service"
import User from "./user"

export interface Post {
    id: number
    content:String
    userDTO: User
    imagePaths: string[]
    totalComments: number 
    comments: Comment
    postedIn:number 
    creationDate: String 

}