"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchasesModel = exports.adminModel = exports.courseModel = exports.userModel = void 0;
//this is the database schema file where we will create the schema of our database 
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ObjectId = mongoose_1.default.Types.ObjectId;
console.log("Inside the db.ts file and trying to initialize the database");
const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});
exports.userModel = mongoose_1.default.model("user", userSchema);
exports.courseModel = mongoose_1.default.model("course", courseSchema);
exports.adminModel = mongoose_1.default.model("admin", adminSchema);
exports.purchasesModel = mongoose_1.default.model("purchase", purchaseSchema);
