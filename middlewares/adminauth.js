const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

function adminauthmiddleware(req , res , next){
        const token = req.headers.token ; // destructing objetcs 
        const decodeddata = jwt.verify(token , JWT_ADMIN_PASSWORD);

        if(decodeddata){
            req.userid = decodeddata.id;
            next();
        }

        else{
            res.status(403).json({
                message : "Invalid Token!"
            });
        }
}

module.exports = {
    adminauthmiddleware
}