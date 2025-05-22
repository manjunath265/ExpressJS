const express = require('express');
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controller/contactController');
const router = express.Router();
const { validateTokenHandler } = require('../middleware/validateTokenHandler');

router.use(validateTokenHandler);
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)
module.exports = router;