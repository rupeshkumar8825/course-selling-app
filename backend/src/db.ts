//this is the database schema file where we will create the schema of our database 
import mongoose from "mongoose";
import zod from "zod"

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId


console.log("Inside the db.ts file and trying to initialize the database");



const userSchema = new Schema({
    email : {type : String, unique : true},
    password : String, 
    firstName : String, 
    lastName : String
});

const adminSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String, 
    lastName : String 
});


const courseSchema = new Schema({
    title : String, 
    description : String,
    price : Number, 
    imageUrl : String, 
    creatorId : ObjectId
});



const purchaseSchema = new Schema({
    userId : ObjectId, 
    courseId: ObjectId
});



export const userModel  = mongoose.model("user", userSchema);
export const courseModel = mongoose.model("course", courseSchema);
export const adminModel = mongoose.model("admin", adminSchema);
export const purchasesModel = mongoose.model("purchase", purchaseSchema);