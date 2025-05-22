const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts);
})
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact)
})
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
})
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    if(contact.user_id.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json(updatedContact);
})
//@access private
const deleteContact = asyncHandler(async (req, res) => {
     const contact = await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted' });
})

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}