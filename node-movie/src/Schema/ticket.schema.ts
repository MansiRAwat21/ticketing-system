import { Document, Schema, model } from "mongoose";

export interface ITicket extends Document{
    name:String,
    cinema: string,
    movie: string,
    seat: Number
}

const TicketSchema: Schema = new Schema<ITicket>({
    name:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:40
    },
    cinema:{
        type:String,
        maxLength:40
    },
    movie:{
        type:String,
        maxlength:20,
        default:'hera pheri'
    },
    seat:{
        type:Number,
        require:true
    },
},  
    {
        timestamps:true
})
export const Ticket =model<ITicket>('Ticket',TicketSchema)