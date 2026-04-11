// import  from "express"
import express, { Request, Response, Express } from "express";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";
import adminRouter from "./routes/admin.routes";
import mongoose from "mongoose";

const app : Express = express();
//define your middlewares here in this case 
console.log("inside the index.ts file")

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);



async function main()
{
    // lets try to connect with the mongodb url/cluster 
    // note that this returns a promise or say this is asynchronous function hence we will 
    // have to await it below hence this implementation is not totally correct for this purpose. 
    // await mongoose.connect("database url should come here/database_name")
    // listen to the server on some port
    app.listen(3000);
    console.log("listening on port 3000 here");
}


main();

