"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const user_middleware_1 = require("../middleware/user.middleware");
const admin_schema_1 = require("../schemas/admin.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const auth_middleware_1 = require("../middleware/auth.middleware");
const adminRouter = (0, express_1.Router)();
// route for new admin sign up
adminRouter.post("/signup", (0, user_middleware_1.validateUserData)(admin_schema_1.signUpAdminSchema), async function (request, response) {
    const { email, firstName, lastName, password } = request.body;
    // TODO : hash the password before storing it
    await db_1.adminModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    });
    // say everything went fine
    response.status(200).json({
        message: "Succcessfully signed up as admin"
    });
});
// route for signing the admin user
adminRouter.post("/signin", (0, user_middleware_1.validateUserData)(admin_schema_1.signInAdminSchema), async function (request, response) {
    const { email, password } = request.body;
    // check whether the admin user exists or not with this credentials 
    const adminUser = await db_1.adminModel.findOne({
        email: email,
        password: password
    });
    if (adminUser) {
        // meaning that the admin user exists 
        // create the jwt token and return to the user itself
        const token = jsonwebtoken_1.default.sign({ id: adminUser._id }, config_1.JWT_ADMIN_SECRET);
        // say everything went fine 
        response.status(200).json({
            message: "Signin Successfully done.",
            token: token
        });
    }
    else {
        response.status(401).json({
            message: "Signin failed"
        });
    }
});
// endpoint to create a new course
adminRouter.post("/course", [auth_middleware_1.authenticateAdminToken, (0, user_middleware_1.validateUserData)(admin_schema_1.adminCourseSchema)], async function (request, response) {
    const { title, description, price, imageUrl } = request.body;
    // now the admin user is already authenticated and also the data is validated properly
    // lets insert into the database 
    await db_1.courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: request.userId
    });
    response.status(200).json({
        message: "successfully created the course"
    });
});
// endpoint to update the course 
adminRouter.put("/course", function (request, response) {
    response.status(200).json({
        message: "Successfully updated the course"
    });
});
// endpoint to get all the course in bulk 
adminRouter.get("/course/bulk", function (request, response) {
    response.status(200).json({
        message: "Successfully fetched the details of all the courses in bulk"
    });
});
// say everything went fine
exports.default = adminRouter;
