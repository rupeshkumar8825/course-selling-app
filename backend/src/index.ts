// import  from "express"
import express, { Request, Response, Express } from "express";

const app : Express = express();

//define your middlewares here in this case 



//define your routes here may be. 
app.post("/user/signup", function(req : Request, res : Response) {
    res.status(200).json({
        message : "signup successfully done. thanks"
    });
})

app.post("/user/signin", function(req : Request, res : Response){
    res.status(200).json({
        message : "User successfully signed in"
    });
})


// get the list of all courses being offered by the vendor
app.get("/courses", function(req : Request, res : Response){
    res.status(200).json({
        message : "Successfully fetched the list of all offered courses"
    });
})


// get the list of courses enrolled by the user 
app.get("/user/purchases", function(req : Request, res: Response) {
    res.status(200).json({
        message : "successfully fetched the list of courses in which user is enrolled into"
    });
})


// end point to purchase the course by paying 
app.post("/user/purchase", function(req : Request, res: Response){
    // here we are expecting the user to pay the money
    res.json({
        message : "Course purchase successfull"
    });
})


// listen to the server on some port
app.listen(3000);