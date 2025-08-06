const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");

function userauth(req , res , next){

    const token = req.headers.token ;
    const decodeddata = jwt.verify(token , JWT_USER_PASSWORD);

    if(decodeddata){
        req.userid = decodeddata.id
        next();
    }
    else{
        res.status(403).json({
            message :  " Invalid token "
        })
    }


}

module.exports = {
    userauth
}