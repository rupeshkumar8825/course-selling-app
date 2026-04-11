// this file will consists of all the user schemas which we will be using
// for example there could be a different schema for creation of the user data 
// there could different schema for the user deletion, updation and so on. 

import z  from "zod"

const passwordSchema = z.string().min(8, "Password must be atleast 8 characters long")
                        .max(20, "Password should not exceed 20 characters")

const emailSchema = z.email("Invalid email").transform((value) => value.toLowerCase());

const firstNameSchema = z.string().min(3, "First name should be atleast 3 characters long")
const lastNameSchema = z.string().min(3, "Last name must be atleast 3 characters long");



export const signupUserSchema = z.object({
    email : emailSchema, 
    firstName : z.string().min(3, "First name must   be alteast 3 characters long"),
    lastName : lastNameSchema,
    password : passwordSchema 
});



// schema for signin endpoint
export const signinUserSchema = z.object({
    email : emailSchema, 
    firstName : firstNameSchema, 
    lastName : lastNameSchema, 
    password : passwordSchema
});


