import { IRoute } from "../types";
import { hallRouter } from "./hall";
import { movieRouter } from "./movie";
import { ticketRouter } from "./ticket";
import { userRouter } from "./user";

export const routes:Array<IRoute>=[
    {
        path:'v1/user',
        router:userRouter
    },

    {
        path:'v1/ticket',
        router:ticketRouter
    },

    {
        path:'v1/hall',
        router:hallRouter
    },

    {
        path:'v1/movie',
        router:movieRouter
    },

];