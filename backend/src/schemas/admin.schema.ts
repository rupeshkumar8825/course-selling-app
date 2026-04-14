// this file will consists of the schema of different data that we will receive from 
// the user. the rules are written by using the zod library 

import { z } from "zod"



const passwordSchema = z.string().min(8, "Password must be atleast 8 characters long")
                        .max(20, "Password should not exceed 20 characters")

const emailSchema = z.email("Invalid email").transform((value) => value.toLowerCase());

const firstNameSchema = z.string().min(3, "First name should be atleast 3 characters long")
const lastNameSchema = z.string().min(3, "Last name must be atleast 3 characters long");

const objectIdSchema = z.string().length(24, "Invalid Mongo ObjectId");


// please note that the _id will automatically will be appended by the mongodb itself
export const signUpAdminSchema = z.object({
    email : emailSchema, 
    firstName : firstNameSchema, 
    lastName : lastNameSchema, 
    password : passwordSchema
});



export const signInAdminSchema = z.object({
    email : emailSchema, 
    password : passwordSchema
});



export const adminCourseSchema = z.object({
    title : z.string().min(3, "Minimum title length should be 3")
            .max(100, "Max title length could be 100"),
    description : z.string(),
    price : z.number().positive(), 
    imageUrl : z.string(), 
    creatorId : objectIdSchema
})

