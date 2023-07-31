const express = require('express')
const cors = require('cors')
const multer = require('multer')
const dotenv = require('dotenv')
const ConnDB = require('./config/ConnDB')
const path = require("path")
dotenv.config()




const app = express()
app.use(express.json())
app.use(cors()) 
app.use(express.static("public"));
app.use('/api/contact',require('./routes/contactRoutes'));
app.use('/api/services',require('./routes/serviceRoute'))
app.use('/api/projects',require('./routes/projectRoute'))
 


app.use(express.static(path.join(__dirname,'../frontend/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})
ConnDB();

const PORT  = 5000  || process.env.PORT

app.listen(process.env.PORT
    ,()=>{
    console.log(`Server is Runing On Port ${PORT}`)
})