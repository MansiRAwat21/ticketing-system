const express=require("express");
import { Request, Response, Router } from "express";
import { IHall , Hall} from "../Schema/hall.schema";
import { crudController } from "../controller/crud";


export const hallRouter=Router();

class HallRouter extends crudController<IHall> {}
const _hallController = new HallRouter(Hall)

hallRouter.get('/all', (req:Request, res:Response) => _hallController.get(res, {}))

hallRouter.get('/get/:_id', (req: Request, res: Response) => _hallController.getById(res, req.params._id))

hallRouter.post('/create',(req: Request, res: Response) => _hallController.create(res, req.body))

hallRouter.put('/update/:_id',(req: Request, res: Response) =>  _hallController.update(res, req.params._id, req.body))

hallRouter.delete('/delete/:_id',(req: Request, res: Response) => _hallController.delete(res, req.params._id))