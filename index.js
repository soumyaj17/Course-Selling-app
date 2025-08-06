const express = require("express");
const app = express();
const mongoose = require("mongoose") ; 
const{MONGO_URL} = require("../Week-8/config");

app.use(express.json());


// Route our express application to structre our code 
const {userRouter} = require("./Routes/user");
const {courseRouter} = require("./Routes/courses");
const {adminRouter} = require("./Routes/admin");


app.use("/user",userRouter );
app.use("/admin",adminRouter);
app.use("/course",courseRouter);



// to ab jo bhi request /user/signup pe aayegi to usko app.use("/user",userRouter ); sidha userrouter pe route kr dega 

async function main(){
    await mongoose.connect(MONGO_URL)
    app.listen(3000);
}

main(); 
