const express=require("express");
import { Request, Response, Router } from "express";
import { IUser , User} from "../Schema/user.schema";
import { crudController } from "../controller/crud";


export const userRouter=Router();

class UserRouter extends crudController<IUser> {}
const _userController = new UserRouter(User)

userRouter.get('/all', (req:Request, res:Response) => _userController.get(res, {}))

userRouter.get('/get/:_id', (req: Request, res: Response) => _userController.getById(res, req.params._id))

userRouter.post('/create',(req: Request, res: Response) => _userController.create(res, req.body))

userRouter.put('/update/:_id',(req: Request, res: Response) =>  _userController.update(res, req.params._id, req.body))

userRouter.delete('/delete/:_id',(req: Request, res: Response) => _userController.delete(res, req.params._id))