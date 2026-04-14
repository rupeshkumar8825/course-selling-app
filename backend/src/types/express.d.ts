// this is to extend the request interface so that I can store the token in the request 
// obejct itself in the authentication middleware

import { JwtPayload } from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request {
            userId? : string
        }
    }
}

export {}