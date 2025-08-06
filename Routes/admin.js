const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose") ; 
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");
const {adminauthmiddleware} = require("../middlewares/adminauth");


adminRouter.post("/signup" , async(req , res)=>{
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


adminRouter.post("/signin" , async(req , res)=>{
        const {email , password} = req.body; 
        const user = await adminModel.findOne({
            email : email
        });

        if(user){
            const dbpassword = user.password ; 
            const userr = await bcrypt.compare(password , dbpassword);

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

adminRouter.post("/createAcourse" , adminauthmiddleware,  async(req , res)=>{
            const userid = req.userid ; 

        const {title , description , price , imageUrl } = req.body ; 

        const course = await adminModel.create({

            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorId: userid

        });

        res.status(200).json({
            message : "Successfuly created course" , 
            Courseid : course._id
        })

});

adminRouter.put("changecoursecontents" , adminauthmiddleware ,async(req , res)=>{
            const adminid = req.userid ; 
            const {title , description , price , imageUrl  , Courseid} = req.body ; 
            
            const course = await adminModel.updateOne({
                    _id : Courseid , 
                    creatorId :  adminid

            } , {
                title: title,
                description: description,
                price: price,
                imageUrl: imageUrl,

        });

        res.status(200).json({
            message : "course updated successfully"
        })

});


adminRouter.get("/SeeAllcourse" , adminauthmiddleware , async(req , res)=>{
            const userId = req.userid ; 

            const courses  = await adminModel.find({
                creatorId : userId
            });

            res.status(200).json({
                messege : "The All Courses are!", 
                courses
            })

});


adminRouter.post("/deleteAcourse" ,adminauthmiddleware , async(req , res)=>{
            const userID = req.userid ;
            const id = req.courseID ;

            const deletedcourse = await adminModel.deleteOne({
                    creatorId : userID,
                    _id : id
            });

            res.status(200).json({
                message : "Deleted the Course Successfully!" , 
                deletedcourse
            });
});


module.exports = {
    adminRouter
}