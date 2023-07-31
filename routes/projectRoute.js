const express = require('express');
const { addProject, getProject, getSinProject } = require('../controllers/projectCtrl');
const imageUpload = require('../middlewares/imageUpload');


 

const router = express.Router();



router.post('/addproject',imageUpload.single("photo"),addProject)

router.get('/getproject',getProject)
router.get('/getproject/:id',getSinProject)

module.exports = router