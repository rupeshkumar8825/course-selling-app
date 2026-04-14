"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdminToken = exports.authenticateUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
// middleware to authenticate the user token
// using this we should be able to get the id of the user and then should be able to 
// append this to the request so that we can access the userId in the router layer 
// for this purpose. 
const authenticateUserToken = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        // this means that the auth header is not defined i.e. we cannot get the
        // token for this purpose. 
        return response.status(401).json({
            message: "No token provided"
        });
    }
    // else lets get the token now 
    const token = authHeader.split(" ")[1];
    // now lets decode the token for this purpose
    const decodedValue = jsonwebtoken_1.default.verify(token, config_1.JWT_USER_SECRET);
    if (!decodedValue) {
        return response.status(401).json({
            message: "Invalid Token"
        });
    }
    request.userId = decodedValue;
    // lets call the next function to continue the flow of execution 
    next();
};
exports.authenticateUserToken = authenticateUserToken;
// middleware to authenticate the admin using the JWT_ADMIN_PASSWORD/SECRET for this purpose. 
const authenticateAdminToken = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        // this means that the authheader itself is not present 
        return response.status(401).json({
            message: "No token found"
        });
    }
    // otherwise lets get the token from authorization header 
    const token = authHeader.split(" ")[1];
    const decodedValue = jsonwebtoken_1.default.verify(token, config_1.JWT_ADMIN_SECRET);
    if (decodedValue) {
        // then this means that the authetnication of the user token is done. 
        request.userId = decodedValue;
        next();
    }
    else {
        // return the 401 status code 
        return response.status(401).json({
            message: "Authentication failed"
        });
    }
};
exports.authenticateAdminToken = authenticateAdminToken;
