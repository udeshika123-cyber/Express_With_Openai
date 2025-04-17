import { Router } from "express";
import { OpenAIRoutes } from "./openai.routes";

export class Routes{
    public router: Router;

    constructor(){
        this.router = Router();
        this.initilizeRoutes();
    }

    private initilizeRoutes(){
        this.router.use('/openai', new OpenAIRoutes().router);
        // Add other routes here as needed
        // this.router.use('/other', new OtherRoutes().router);
    }
}