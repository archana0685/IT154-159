const { has } = require("config");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home=async(req,res)=>{
    try{
        res
    .status(200)
    .send("Welcome to Rustic Recipes..");

    }catch(error){
        console.log(error);
    }
};

//registration

const register=async (req, res)=>{
    try {
        
        const{username, email, password }=req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }
        

    // //     //password hashing
        const saltRound = 10;
        const hash_password=await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({
            username, 
            email, 
            password:hash_password});
        res.status(201)
        .json({msg:"registration successful",
        token: await userCreated.generateToken(), userId: userCreated._id.toString(),});

    } catch (error) {
        res.status(500).json("internal error");
    }
};




//login

const login = async ( req, res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);


        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        
        const user = await bcrypt.compare(password,userExist.password);
        if(user){
            res.status(200).json({
                msg: "login successful", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"invalid credentials"});
        }

    } catch (error) {
        next(error);
    }
}

//user
const user=async(req,res)=>{
    try {
        const userData=req.user;

        return  res.status(200).json({msg:userData});
       
    } catch (error) {
        console.log("error from user route ${error}");
    }
}


module.exports={home,register,login,user};


