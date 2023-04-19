import { Document, Schema, model } from "mongoose";

export interface IMovie extends Document{
    name:String,
    genre: string,
    duration: string
}

const MovieSchema: Schema = new Schema<IMovie>({
    name:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:40
    },
    genre:{
        type:String,
        lowercase:true,
        maxLength:40
    },
    duration:{
        type:String,
        maxlength:20
    },
},  
    {
        timestamps:true
})
export const Movie =model<IMovie>('Movie',MovieSchema)