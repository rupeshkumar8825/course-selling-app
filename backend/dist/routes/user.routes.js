"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
// import mongoose from "mongoose";
const user_middleware_1 = require("../middleware/user.middleware");
const user_schema_1 = require("../schemas/user.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const userRouter = (0, express_1.Router)();
// all the middlewares to use comes here
//define your routes here may be. 
userRouter.post("/signup", (0, user_middleware_1.validateUserData)(user_schema_1.signupUserSchema), async function (req, res) {
    // lets implement this end point now. 
    const { email, password, firstName, lastName } = req.body;
    // TODO : has the password so plaintext pw is not stored in the DB 
    // TODO : add the error handling here too
    //insert this entry into the db now
    await db_1.userModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    });
    res.status(200).json({
        message: "signup successfully done. thanks"
    });
});
userRouter.post("/signin", (0, user_middleware_1.validateUserData)(user_schema_1.signinUserSchema), async function (req, res) {
    const { email, password } = req.body;
    // need to check whether atleast a single entry remains with this password and email or not 
    const user = await db_1.userModel.findOne({
        email: email,
        password: password
    });
    if (user) {
        const token = jsonwebtoken_1.default.sign({
            id: user._id
        }, config_1.JWT_USER_SECRET);
    }
    else {
        res.status(401).json({
            message: "User signin failed."
        });
    }
});
// get the list of courses enrolled by the user 
userRouter.get("/purchases", function (req, res) {
    res.status(200).json({
        message: "successfully fetched the list of courses in which user is enrolled into"
    });
});
// end point to purchase the course by paying 
userRouter.post("/purchase", function (req, res) {
    // here we are expecting the user to pay the money
    res.json({
        message: "Course purchase successfull"
    });
});
exports.default = userRouter;
