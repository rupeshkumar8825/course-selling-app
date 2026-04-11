//this is the database schema file where we will create the schema of our database 
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId


console.log("Inside the db.ts file and trying to initialize the database");

// lets try to connect with the mongodb url/cluster 
// note that this returns a promise or say this is asynchronous function hence we will 
// have to await it below hence this implementation is not totally correct for this purpose. 
mongoose.connect("database url should come here/database_name")


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



const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchasesModel = mongoose.model("purchase", purchaseSchema);

export default [userModel, courseModel, adminModel, purchasesModel]