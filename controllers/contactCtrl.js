const conModel = require("../models/contactModel")

const addContact = async(req,res)=>{
    try {
        const {fname,lname,country,areaofintrest,companyname,email,phone,message} =  req.body
        const contact = await conModel({  
            fname,
            lname,
            country, 
            areaofintrest, 
            companyname, 
            email, 
            phone,
            message
        }).save();
       
        res.status(201).send({
            success:true, 
            message:"Add Success Fully",
            contact
        })
     
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false, 
            message:"Error",
            
        })
    }
}
 

//getall contact us

const getContact = async(req,res)=>{
    try {
        const contact = await conModel.find({})
        res.status(201).json(contact)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false, 
            message:"Error",
            
        })
    
    }
}

//delete contact us

const deleteContact = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await conModel.findByIdAndDelete(id)
        res.status(201).send({
            success:true, 
            message:"Delete Successfully",
            contact
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false, 
            message:"Error",
            
        })
    
    }
}



module.exports = {addContact,getContact,deleteContact}