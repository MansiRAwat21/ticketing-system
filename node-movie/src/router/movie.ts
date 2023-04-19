const express=require("express");
import { Request, Response, Router } from "express";
import { IMovie , Movie} from "../Schema/movie.schema";
import { crudController } from "../controller/crud";


export const movieRouter=Router();  

class MovieRouter extends crudController<IMovie> {}
const _movieController = new MovieRouter(Movie)

movieRouter.get('/all', (req:Request, res:Response) => _movieController.get(res, {}))

movieRouter.get('/get/:_id', (req: Request, res: Response) => _movieController.getById(res, req.params._id))

movieRouter.post('/create',(req: Request, res: Response) => _movieController.create(res, req.body))

movieRouter.put('/update/:_id',(req: Request, res: Response) =>  _movieController.update(res, req.params._id, req.body))

movieRouter.delete('/delete/:_id',(req: Request, res: Response) => _movieController.delete(res, req.params._id))