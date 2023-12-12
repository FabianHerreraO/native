import User from "../models/userModel.js";
import bcrypt from "bcrypt";


const createUser=async(req,res)=>{
    
    try{
        const{email, password, confirmPassword}=req.body;
        const user= await User.findOne({email});
        if(user)
            {
                return res.status(401).json({message:"user already exists"})
            }
        if(password!==confirmPassword)
            {
                return res.status(402).json({message:"Passwords must match"})
            }
        const hashPassword=await bcrypt.hash(password,10);

        const newUser = new User({
            email,
            password: hashPassword,
        });
        newUser.save();
            return res.status(200).json({message:"user created"})
    }catch(e){
        res.status(403).json({message:e.message})
    }
};
/*
const logingUser = async(req,res)=>{
    const {email, password}=req.body;
    const user= await User.findOne({email:email});
    if(!user){
        return res.status(400).json({message:"Invalid credentials"})
    }
    const validPassword=await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(400).json({message:"Invalid credentials"})
    }
    return res.status(200).json({message:"Logged in!"});
};
*/
const getUsers = async (req, res) => {
    var userList = await User.find();
    res.json(userList);
};

const deleteUser = async (req, res) => {
    var userId = req.params.idUser;
    await User.findByIdAndDelete(userId);
    res.status(200).json();
};

export{createUser, getUsers, deleteUser};



/*
const logingUser = async (req, res) => {
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.email });
        if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
            res.status(200).json({message:"Success"});
        } else {
            res.status(400).json({ error: "password doesn't match" });
        }
        } else {
        res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};


    
    app.post("/login", async function(req, res){
        try {
            // check if the user exists
            const user = await User.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
            const result = req.body.password === user.password;
            if (result) {
                res.render("secret");
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
            } else {
            res.status(400).json({ error: "User doesn't exist" });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
});

*/