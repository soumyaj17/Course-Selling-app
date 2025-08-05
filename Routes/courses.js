const { Router } = require("express") ; 
const courseRouter = Router();


courseRouter.get("/SeeAllCourse" , (req ,res)=>{

});

courseRouter.post("/PurchaseCourse" , (req ,res)=>{

});

courseRouter.get("/SeeAllPurchasedCourse" , (req ,res)=>{

});

module.exports ={
    courseRouter
}