const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose") ; 
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const {adminauthmiddleware} = require("../middlewares/adminauth");


adminRouter.post("signup" , async(req , res)=>{
    const {email , password , firstname , lastname} = req.body; 
    const hashedpassword = await bcrypt.hash(password , 10);

    try{

        await adminModel.create({
        email: email,
        password: hashedpassword,
        firstName: firstname,
        lastName: lastname,

    });

    res.status(200).json({
        message : "You are signed in !"
    })
    } catch(e){
        res.status(403).json({
            messege : e
        });
    }
    



});


adminRouter.post("signin" , async(req , res)=>{
        const {email , password} = req.body; 

        const user = await adminModel.findOne({
            email : email
        });

        if(user){
            const dbpassword = user.password ; 
            const userr = bcrypt.compare(password , dbpassword);

            if(userr){
                const token = jwt.sign({
                    id : userr._id
                } , JWT_ADMIN_PASSWORD);

                res.status(200).json({
                    token : token
                });

            }

            else{
                res.status(403).json({
                    messege : "incorrect Credential"
                });
            }
        }

        else{
            res.status(403).json({
                message : "Fuck You!"
            });
        }

});

adminRouter.post("createAcourse" , adminauthmiddleware,  (req , res)=>{

});


adminRouter.post("deleteAcourse" , (req , res)=>{

});

adminRouter.post("changecoursecontents" , (req , res)=>{

});

module.exports = {
    adminRouter
}