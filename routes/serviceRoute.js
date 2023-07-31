const express = require('express');
const { addServices, getServices, getSinServices} = require('../controllers/serviceCtrl');
const imageUpload = require('../middlewares/imageUpload');




const router = express.Router();



router.post('/addservice',imageUpload.single("photo"),addServices)

router.get('/getservice',getServices)
router.get('/getservice/:id',getSinServices)

module.exports = router