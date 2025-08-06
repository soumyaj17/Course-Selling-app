const mongoose = require("mongoose") ; 
const Schema = mongoose.Schema ; 
const ObjectId = mongoose.Types.ObjectId ;

const userSchema = new Schema({
    email : {type : String , unique : true} , 
    password : String ,
    firstname : String , 
    lastname : String 

})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});


const userModel = mongoose.model("users" , userSchema , "users");
const adminModel = mongoose.model("admin" , adminSchema , "admin");
const courseModel = mongoose.model("courses" , courseSchema , "courses");
const purchaseModel = mongoose.model("purchases" , purchaseSchema , "purchases");

module.exports = {
    userModel , 
    adminModel , 
    courseModel , 
    purchaseModel
}