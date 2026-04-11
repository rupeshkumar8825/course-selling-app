// this is the middleware for the user itself. 
// this may consists of some prechecks about the user sending the data to us. 

import { NextFunction, Request, Response } from "express";
import {z, ZodError } from "zod"


// define the middleware for validating all the user data based on the schema it has
export function validateUserData (schema : z.ZodObject<any, any>) {
    // here lets call the function that has access to the req, res and next function 
    // and the output of that particular function we would simply return 
    return (request : Request, response : Response, next : NextFunction) => {
        // lets try parsing the user data that we got 
        const result = schema.safeParse(request.body);

        // check whether the parsing was successfull or not 
        if(!result.success)
        {
            // lets get the formatted errors from the zod 
            const formattedErrors = result.error.issues.map((err: { path: any[]; message: any; }) => ({
                field : err.path.join("."), 
                message : err.message
            }));

            // this means that the parsing failed due to some errors 
            return response.status(400).json({
                message : "Validation failed", 
                errors : formattedErrors
            })
        }
        else{
            // simply call the next function 
            next();
        }

    }

}
