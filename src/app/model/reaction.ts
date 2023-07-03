import { EnumType } from "typescript"
import User from "./user"

export interface Reaction{
    id:number
    reactionType: String
    user: User
    commentId: number
    postId: number
    timeStamp: String
}