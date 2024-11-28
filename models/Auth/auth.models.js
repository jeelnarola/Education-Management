const mongoose = require('mongoose')
// const { type } = require('os')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Student','Teacher','Admin'],
        require:true
    }
})

UserSchema.pre('save',async function (next) {
    if(!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password,10)
    next();
})

const User = mongoose.model('User',UserSchema)

module.exports = User