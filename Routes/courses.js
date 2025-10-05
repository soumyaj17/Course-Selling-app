const { Router } = require("express") ; 
const courseRouter = Router();
const{userauth} = require("../middlewares/userauth");
const{purchaseModel} = require("../db");
const{courseModel} = require("../db");

courseRouter.get("/SeeAllCourses" , async(req ,res)=>{
       const allcourses =  await courseModel.find({});  // empty array means find all the courses

       res.status(200).json({
            courses : allcourses
       });
});

courseRouter.post("/PurchaseCourse" ,userauth ,  async(req ,res)=>{
            const userid = req.userid ; 
            const courseid = req.body.courseid;

            await purchaseModel.create({
                userId: userid,
                courseId: courseid   
            });

            res.status(200).json({
                message : "The course has been purchased! "
            });

});


module.exports ={
    courseRouter
}