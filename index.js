const express = require("express");
const app = express();

app.use(express.json());


// Route our express application to structre our code 
const {userRouter} = require("./Routes/user");
const {courseRouter} = require("./Routes/courses");
const {adminRouter} = require("./Routes/admin");


app.use("/user",userRouter );
app.use("/course",courseRouter);
app.use("/admin",adminRouter);



// to ab jo bhi request /user/signup pe aayegi to usko app.use("/user",userRouter ); sidha userrouter pe route kr dega 



app.listen(3000);