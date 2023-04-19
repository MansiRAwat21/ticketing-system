const express=require("express");
import { Request, Response, Router } from "express";
import { ITicket , Ticket} from "../Schema/ticket.schema";
import { crudController } from "../controller/crud";


export const ticketRouter=Router();

class TicketRouter extends crudController<ITicket> {}
const _ticketController = new TicketRouter(Ticket)

ticketRouter.get('/all', (req:Request, res:Response) => _ticketController.get(res, {}))

ticketRouter.get('/get/:_id', (req: Request, res: Response) => _ticketController.getById(res, req.params._id))

ticketRouter.post('/create',(req: Request, res: Response) => _ticketController.create(res, req.body))

ticketRouter.put('/update/:_id',(req: Request, res: Response) =>  _ticketController.update(res, req.params._id, req.body))

ticketRouter.delete('/delete/:_id',(req: Request, res: Response) => _ticketController.delete(res, req.params._id))