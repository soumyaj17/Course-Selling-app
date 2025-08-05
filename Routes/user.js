const { Router } = require("express") ; 
const userRouter = Router();

const bcrypt = require("bcrypt");
const mongoose = require("mongoose") ; 
const{userModel , courseModel , purchaseModel} = require("../db");




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




userRouter.post("/login" , (req , res)=>{
    
})

userRouter.post("/purchaseCourse" , (req , res)=>{
    
})

userRouter.get("/SeeAllCourse" , (req , res)=>{
    
})

userRouter.get("/SeeCourse" , (req , res)=>{
    
})

module.exports = {
    userRouter
}