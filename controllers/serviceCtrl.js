const imageUpload = require("../middlewares/imageUpload")
const serModel = require("../models/ServicesModel")



const addServices = async(req,res)=>{
try {
    
    const {photo,heading,desc} = req.body 
    const service = await serModel({
        photo:req.file.filename, heading,desc
    }).save()
      res.status(201).send(service)
     
} catch (error) {
    console.log(error)
}
}  

const getServices = async(req,res)=>{
    try{
        
        const service = await serModel.find({}) 
          res.status(201).json(service)
       
    } catch (error) {
        console.log(error)
    }
    }  

    const getSinServices = async(req,res)=>{
        try{
           const {id} = req.params
           const service = await serModel.findById(id)
              res.status(201).json(service)
            
        } catch (error) {
            console.log(error)
        }
        }  

module.exports = {addServices,getServices,getSinServices}