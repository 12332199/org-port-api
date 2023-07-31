const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    photo:{
      type:String,
      required:true
    },
    
    title:{
        type:String,
        require:true,
       
    }, 
   
    desc:{
        type:String,
        required:true,
         
    },
   
},{timestamps:true})


const proModel = mongoose.model("projects",projectSchema)

module.exports = proModel