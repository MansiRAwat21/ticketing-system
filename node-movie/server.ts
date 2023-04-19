const dotenv=require('dotenv')
dotenv.config();
import { App } from "./src/app"
import { middlewares } from "./src/middleware";
import { routes } from './src/router/index';

const PORT =parseInt(process.env.PORT||'3000');
const app =new App(PORT, middlewares , routes)
const connect_URI=process.env.DB_URI

app.listen();
 
app.mongoDB(connect_URI as string)
