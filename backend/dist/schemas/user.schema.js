"use strict";
// this file will consists of all the user schemas which we will be using
// for example there could be a different schema for creation of the user data 
// there could different schema for the user deletion, updation and so on. 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinUserSchema = exports.signupUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const passwordSchema = zod_1.default.string().min(8, "Password must be atleast 8 characters long")
    .max(20, "Password should not exceed 20 characters");
const emailSchema = zod_1.default.email("Invalid email").transform((value) => value.toLowerCase());
const firstNameSchema = zod_1.default.string().min(3, "First name should be atleast 3 characters long");
const lastNameSchema = zod_1.default.string().min(3, "Last name must be atleast 3 characters long");
exports.signupUserSchema = zod_1.default.object({
    email: emailSchema,
    firstName: zod_1.default.string().min(3, "First name must   be alteast 3 characters long"),
    lastName: lastNameSchema,
    password: passwordSchema
});
// schema for signin endpoint
exports.signinUserSchema = zod_1.default.object({
    email: emailSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    password: passwordSchema
});
