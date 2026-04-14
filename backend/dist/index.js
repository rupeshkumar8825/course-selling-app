"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import  from "express"
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const app = (0, express_1.default)();
//define your middlewares here in this case 
console.log("inside the index.ts file");
app.use("/api/v1/user", user_routes_1.default);
app.use("/api/v1/course", course_routes_1.default);
app.use("/api/v1/admin", admin_routes_1.default);
async function main() {
    // lets try to connect with the mongodb url/cluster 
    // note that this returns a promise or say this is asynchronous function hence we will 
    // have to await it below hence this implementation is not totally correct for this purpose. 
    // await mongoose.connect("database url should come here/database_name")
    // listen to the server on some port
    app.listen(3000);
    console.log("listening on port 3000 here");
}
main();
