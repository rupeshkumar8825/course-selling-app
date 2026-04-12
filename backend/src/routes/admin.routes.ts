import { Request, Response, Router } from "express";
import { Express } from "express";
import { adminModel }  from "../db"
import { validateUserData } from "../middleware/user.middleware";
import { signInAdminSchema, signUpAdminSchema } from "../schemas/admin.schema";
import jwt  from "jsonwebtoken"

const JWT_ADMIN_SECRET = "ALFHAOIHFLJALKFDA";

const adminRouter = Router();


// route for new admin sign up
adminRouter.post("/signup", validateUserData(signUpAdminSchema), async function(request : Request, response : Response) {
    const { email, firstName, lastName, password } = request.body;

    // TODO : hash the password before storing it

    await adminModel.create({
        email : email, 
        firstName : firstName, 
        lastName : lastName, 
        password : password
    });


    // say everything went fine
    response.status(200).json({
        message: "Succcessfully signed up as admin"
    });


});


// route for signing the admin user
adminRouter.post("/signin", validateUserData(signInAdminSchema),  async function(request : Request, response : Response) {
    const { email, password } = request.body;


    // check whether the admin user exists or not with this credentials 
    const adminUser = await adminModel.findOne({
        email : email,
        password : password
    });

    if(adminUser)
    {
        // meaning that the admin user exists 
        // create the jwt token and return to the user itself
        const token = jwt.sign({id : adminUser._id}, JWT_ADMIN_SECRET);

        // say everything went fine 
        response.status(200).json({
            message : "Signin Successfully done.",
            token : token
        })
    }
    else 
    {
        response.status(401).json({
            message : "Signin failed"
        });

    }


});


// endpoint to create a new course
adminRouter.post("/course", function(request : Request, response : Response){
    response.status(200).json({
        message : "successfully created the course"
    });
});


// endpoint to update the course 
adminRouter.put("/course", function(request : Request, response : Response) {
    response.status(200).json({
        message : "Successfully updated the course"
    });
});


// endpoint to get all the course in bulk 
adminRouter.get("/course/bulk", function(request : Request, response : Response) {
    response.status(200).json({
        message : "Successfully fetched the details of all the courses in bulk"
    });
});

// say everything went fine
export default adminRouter;