import {model,Schema,models} from 'mongoose';


export interface Iuser {
    username : string;
    email : string;
    password : string | "";
    avatar? : string;
    isHost :boolean;
}


const userSchema = new Schema<Iuser>({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password :{
        type : String ,
        unique : true,
        select : false,
        default : ""
    },
    avatar : {
        type : String  
    },
    isHost : {
        type : Boolean,
        default :false
    },
   
})





export const User = models?.User || model<Iuser>("User",userSchema);
