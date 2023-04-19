import { Document, Schema, model } from "mongoose";

export interface IUser extends Document{
    name:String,
    email:String,
    phone:Number

}

const UserSchema: Schema = new Schema<IUser>({
    name:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:40
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    phone:{
        type:Number,
        require:false
    },
},  
    {
        timestamps:true
})
export const User =model<IUser>('User',UserSchema)