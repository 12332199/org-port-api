const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
    photo:{
      type:String,
      
    }, 
    
    heading:{
        type:String,
        require:true,
       
    }, 
    desc:{
        type:String,
        required:true,
         
    }
},{timestamps:true})


const serModel = mongoose.model("services",ServicesSchema)

module.exports = serModel