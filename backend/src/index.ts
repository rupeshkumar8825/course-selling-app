// import  from "express"
import express, { Request, Response, Express } from "express";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";
import adminRouter from "./routes/admin.routes";

const app : Express = express();
//define your middlewares here in this case 
console.log("inside the index.ts file")

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);





// listen to the server on some port
app.listen(3000);