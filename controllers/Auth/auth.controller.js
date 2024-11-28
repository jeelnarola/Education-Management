const User = require("../../models/Auth/auth.models");

const Register = async(req,res) =>{
    try {
        let {username,email,password,role} = req.body
        if(!username || !email || !password || !role){
            res.status(400).json({message:"All Filed Required."})
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({success:false,message:"Invalid Email"})
        }

        if(password.length < 6 ){
            return res.status(400).json({success:false,message:"Password must be at least 6 characters"})
        }

        let UserExtits = await User.findOne({email:email})

        if(UserExtits){
            return res.status(400).json({success:false,message:"Email already exists"})
        }
        let userObj = new User({
            username,
            email,
            password,
            role
        })

        await userObj.save()
        res.status(201).json({success:true,user:{
            ...userObj._doc,
            password:""
        }})
    } catch (error) {
        console.log('Error In Register Controller :- ',error.message);
        res.status(500).json({message:'Internal Error :- ',error:error})
    }
}
module.exports = {Register}