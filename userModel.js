import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: [true, "Valid email required!"],
    },
    password:{
        type: String,
        required: [true, "Password required!"]
    },
    confirmPassword:{
        type: String
    }
})

const User = mongoose.model("users", UserSchema);

export default User;
