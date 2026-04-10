// this is the user related routes that we have to implement so that the index.ts gets clean altogether 
import { Express, Request, Response } from "express";
import { Router } from "express";
const userRouter = Router();



//define your routes here may be. 
userRouter.post("/user/signup", function(req : Request, res : Response) {
    res.status(200).json({
        message : "signup successfully done. thanks"
    });
})



userRouter.post("/user/signin", function(req : Request, res : Response){
    res.status(200).json({
        message : "User successfully signed in"
    });
})



// get the list of courses enrolled by the user 
userRouter.get("/user/purchases", function(req : Request, res: Response) {
    res.status(200).json({
        message : "successfully fetched the list of courses in which user is enrolled into"
    });
})


// end point to purchase the course by paying 
userRouter.post("/user/purchase", function(req : Request, res: Response){
    // here we are expecting the user to pay the money
    res.json({
        message : "Course purchase successfull"
    });
});


export default userRouter;