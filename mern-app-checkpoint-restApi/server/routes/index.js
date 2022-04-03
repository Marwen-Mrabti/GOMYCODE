const express = require('express');
const {
  AddContact,
  GetContacts,
  UpdateContact,
  DeleteContact,
  GetOneContact,
} = require('../controllers/contact');

const ContactRoutes = express.Router();

// create contact
ContactRoutes.post('/', AddContact);

//read contact list
ContactRoutes.get('/', GetContacts);

// update contact info
ContactRoutes.put('/:id', UpdateContact);

//delete contact
ContactRoutes.delete('/:id', DeleteContact);

// read one contact by id
ContactRoutes.get('/:id', GetOneContact);

module.exports = ContactRoutes;
