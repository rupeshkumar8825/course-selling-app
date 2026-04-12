// this is the user related routes that we have to implement so that the index.ts gets clean altogether 
import { Express, Request, Response } from "express";
import { Router } from "express";
import { userModel } from "../db";
// import mongoose from "mongoose";
import { validateUserData } from "../middleware/user.middleware";
import { signinUserSchema, signupUserSchema } from "../schemas/user.schema";
import jwt from "jsonwebtoken"

const userRouter = Router();


const JWT_USER_SECRET = "askhfaiowehanfkldsan";

// all the middlewares to use comes here
//define your routes here may be. 
userRouter.post("/signup", validateUserData(signupUserSchema), async function(req : Request, res : Response) {
    // lets implement this end point now. 
    const { email, password, firstName, lastName } = req.body;


    // TODO : has the password so plaintext pw is not stored in the DB 
    // TODO : add the error handling here too

    //insert this entry into the db now
    await userModel.create({
        email : email, 
        firstName : firstName, 
        lastName : lastName, 
        password : password
    });

    res.status(200).json({
        message : "signup successfully done. thanks"
    });
})



userRouter.post("/signin", validateUserData(signinUserSchema),  async function(req : Request, res : Response){
    const {email, password} = req.body;

    // need to check whether atleast a single entry remains with this password and email or not 
    const user = await userModel.findOne({
        email : email, 
        password : password
    });

    if(user)
    {
        const token = jwt.sign({
            id : user._id
        }, JWT_USER_SECRET)
    }
    else 
    {
        res.status(401).json({
            message : "User signin failed."
        });
    }

})



// get the list of courses enrolled by the user 
userRouter.get("/purchases", function(req : Request, res: Response) {
    res.status(200).json({
        message : "successfully fetched the list of courses in which user is enrolled into"
    });
})


// end point to purchase the course by paying 
userRouter.post("/purchase", function(req : Request, res: Response){
    // here we are expecting the user to pay the money
    res.json({
        message : "Course purchase successfull"
    });
});


export default userRouter;