const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({

    fname:{
        type:String,
        require:true
    }, 
    lname:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    areaofintrest:{
        type:String,
        require:true
    },
    companyname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true})

const conModel = mongoose.model("contactus",contactSchema)
module.exports = conModel