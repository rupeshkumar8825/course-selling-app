import { Router } from "express";
import { Express, Request, Response } from "express";

const courseRouter = Router();


// get the list of all courses being offered by the vendor
courseRouter.get("/courses", function(req : Request, res : Response){
    res.status(200).json({
        message : "Successfully fetched the list of all offered courses"
    });
});


// get the course preview to be shown to the user
courseRouter.get("/preview", function(req : Request, res : Response){
    res.status(200).json({
        message : "Successfully fetched the course preview in this case"
    });
});

export default courseRouter;