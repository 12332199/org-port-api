const proModel = require("../models/projectModel")






const addProject = async(req,res)=>{
try {
    
    const {title,desc} = req.body
    const project = await proModel({
        photo:req.file.filename, title,desc
    }).save()
      res.status(201).send(project)
    
} catch (error) {
    console.log(error)
}
}  

const getProject = async(req,res)=>{
    try{
        
        const project = await proModel.find({}) 
          res.status(201).json(project)
         
    } catch (error) {
        console.log(error)
    }
    }  

    const getSinProject = async(req,res)=>{
        try{
           const {id} = req.params
           const project = await proModel.findById(id)
              res.status(201).json(
                
                project)
            
        } catch (error) {
            console.log(error)
        }
        }  

module.exports = {addProject,getProject,getSinProject}