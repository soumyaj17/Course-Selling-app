const { Router } = require("express") ; 
const userRouter = Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose") ; 
const{userModel , courseModel , purchaseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const {userauth} = require("../middlewares/userauth")


userRouter.post("/signup" , async(req , res)=>{
    // All databases calls are asynchronus
    const { email, password, firstName, lastName } = req.body;  // destructing objects 
    const hashedpassword = await bcrypt.hash(password , 10);

    try{
        await userModel.create({
            email : email , 
            password : hashedpassword ,
            firstname : firstName , 
            lastname : lastName 
        });

        res.status(200).json({
                message : "You are Signed Up!"
            });

    } catch(e){
            res.status(400).json({
                message : e
            });
        }

})


userRouter.post("/signin" , async(req , res)=>{
    const {email , password} = req.body ;  // destruct email and password from req.body

    const user = await userModel.findOne({
            email : email
    });

    if(user){
        const dbpassword = user.password ;  // fetch database stored password 
        const userr = bcrypt.compare(password , dbpassword); // and compare with body password 
        
        if(userr){
            const token = jwt.sign({
                id : userr._id
            } , JWT_USER_PASSWORD);

            res.status(200).json({
                token : token
            })
        }

        else{
            res.status(403).json({
                messege : "Wrong Credential"
            })
        }

    }

    else{
        res.status(404).json({
            message : "user not found!"
        })
    }

    
})

userRouter.post("/purchaseCourse" , userauth , (req , res)=>{
        const {userid} = req.body ;

        

    
})

userRouter.get("/SeeAllCourse" , (req , res)=>{
    
})

userRouter.get("/SeeCourse" , (req , res)=>{
    
})

module.exports = {
    userRouter
}