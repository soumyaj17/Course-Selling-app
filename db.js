const mongoose = require("mongoose") ; 
const Schema = mongoose.Schema ; 
const ObjectId = mongoose.Types.ObjectId ;

mongoose.connect("mongodb+srv://soumyajain9413:Soumya%40123@soumyajain17.clqfcrw.mongodb.net/Course-Selling-app")

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


const userModel = mongoose.Model("users" , userSchema);
const adminModel = mongoose.Model("admin" , adminSchema);
const courseModel = mongoose.Model("courses" , courseSchema);
const purchaseModel = mongoose.Model("purchases" , purchaseSchema);

module.exports = {
    userModel , 
    adminModel , 
    courseModel , 
    purchaseModel
}