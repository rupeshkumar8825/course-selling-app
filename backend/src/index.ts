// import  from "express"
import express, { Request, Response, Express } from "express";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";

const app : Express = express();
//define your middlewares here in this case 
console.log("inside the index.ts file")

app.use("/user", userRouter);
app.use("/course", courseRouter);





// listen to the server on some port
app.listen(3000);