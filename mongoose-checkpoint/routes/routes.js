const express = require('express');
const router = express.Router();
const {
  AddPerson,
  ReadAllDB,
  FindByFood,
  FindById,
  ClassicUpdate,
  UpdatePerson,
  DeletePerson,
  DeleteDocs,
  ChainSearch,
} = require('../controllers');

// Add person to database
router.post('/', AddPerson);

// Read the database
router.get('/', ReadAllDB);

// find by food
router.get('/food', FindByFood);

// find by id
router.get('/find/:id', FindById);

//classical update person info
router.put('/classic/:id', ClassicUpdate);

//update person info
router.put('/:id', UpdatePerson);

//delete person from database
router.delete('/:id', DeletePerson);

//delete many documents
router.delete('/', DeleteDocs);

//chain search many documents
router.get('/search_chain', ChainSearch);

// export router
module.exports = router;
