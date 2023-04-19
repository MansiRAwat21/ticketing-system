import { Document, Schema, model } from "mongoose";

export interface IHall extends Document{
    name:String,
    address: string,
    movie: string,
    hallNo: Number
}

const HallSchema: Schema = new Schema<IHall>({
    name:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:40
    },
    address:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        maxLength:40
    },
    movie:{
        type:String,
        maxlength:20,
        default:'hera pheri'
    },
    hallNo:{
        type:Number,
        require:true
    },
},  
    {
        timestamps:true
})
export const Hall = model<IHall>('Hall',HallSchema)