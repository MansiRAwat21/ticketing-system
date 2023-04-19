const express=require("express")
import { Application} from "express";
import { IRoute } from './types';
import mongoose from "mongoose";

/**
 * @param port
 * @param middleware
 * @param routes
 */
export class App{
    private app: Application=express();
    private apipath: string ='/api'
    constructor (
        private port:number,
        private middlewares:Array<any>=[],
        private routes:Array<IRoute>=[]
    ){
        // this.app=express()
        this.applymiddleware()
        this.applyRoutes()
    }
    private applymiddleware(){
        this.middlewares.forEach(middleware =>{
            this.app.use(middleware)
        })
    }
    private applyRoutes(){
        this.routes.forEach(({path,router}) => {
            if(path[0]==='/'){
                path=path.substring(1)
            }
            const _path=`${this.apipath}/${path}`
            this.app.use(_path,router)
        })
    }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server started on port${this.port}`)
        })
    }

    public mongoDB(uri:string){
        const connect=()=>{
            mongoose.set('strictQuery',false);
            mongoose.connect(uri).then(()=>{
                console.log("DB connected successfully")
            }).catch((error) => {
                console.log(error);
                return process.exit(1);
            });
        };

        connect();
        mongoose.connection.on("disconnected",connect)
    }
}

