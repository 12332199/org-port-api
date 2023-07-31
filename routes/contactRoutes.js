const express = require('express');
const { addContact, getContact, deleteContact } = require('../controllers/contactCtrl');

const router = express.Router();

router.post("/add-contact",addContact)
router.get('/get-contactus',getContact)
router.delete('/delete-contact/:id',deleteContact)

module.exports = router  