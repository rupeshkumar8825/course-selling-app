import { Request, Response, Router } from "express";
import { Express } from "express";

const adminRouter = Router();

// lets define the endpoints here for this purpose. 
adminRouter.get("/create/course", function(request : Request, response : Response){
    response.status(200).json({
        message : "successfully created the course"
    });
});


// say everything went fine
export default adminRouter;