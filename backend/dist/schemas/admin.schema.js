"use strict";
// this file will consists of the schema of different data that we will receive from 
// the user. the rules are written by using the zod library 
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCourseSchema = exports.signInAdminSchema = exports.signUpAdminSchema = void 0;
const zod_1 = require("zod");
const passwordSchema = zod_1.z.string().min(8, "Password must be atleast 8 characters long")
    .max(20, "Password should not exceed 20 characters");
const emailSchema = zod_1.z.email("Invalid email").transform((value) => value.toLowerCase());
const firstNameSchema = zod_1.z.string().min(3, "First name should be atleast 3 characters long");
const lastNameSchema = zod_1.z.string().min(3, "Last name must be atleast 3 characters long");
const objectIdSchema = zod_1.z.string().length(24, "Invalid Mongo ObjectId");
// please note that the _id will automatically will be appended by the mongodb itself
exports.signUpAdminSchema = zod_1.z.object({
    email: emailSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    password: passwordSchema
});
exports.signInAdminSchema = zod_1.z.object({
    email: emailSchema,
    password: passwordSchema
});
exports.adminCourseSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, "Minimum title length should be 3")
        .max(100, "Max title length could be 100"),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    imageUrl: zod_1.z.string(),
    creatorId: objectIdSchema
});
