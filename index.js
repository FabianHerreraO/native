import express from "express";
import mongoose from "mongoose";
import * as bookmarkRoutes from "./routes/bookmarkRoutes.js";
import * as userRoutes from "./routes/userRoutes.js"
import cors from "cors";
import User from "./models/userModel.js";
import bcrypt from "bcrypt";


const app = express();
app.use(express.json());
app.use(cors());



mongoose
    .connect("mongodb://127.0.0.1:27017/nativeapp")
    .then(() => console.log("Database Connected =)"))
    .catch((e) => console.log(e));


app.post("/user/login", (req,res)=>{
    const {email, password}=req.body;
    User.findOne({email:email})
        .then(user=>{
                if(user){
                    bcrypt.compare(password, user.password,(err,response)=>{
                        if(response){
                            res.json("Success")
                        }else{
                            res.json("The password is incorrect")
                        }
                })
            }else{
                res.json('No user found')
            }
        })
})


app.use(bookmarkRoutes.router);
app.use(userRoutes.router);


app.listen(8080, ()=>{
    console.log("Server live: 8080")
});
