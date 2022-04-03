const ContactSchema = require('../models/contact');

//create new contact
exports.AddContact = async (req, res) => {
  const { email } = req.body;
  try {
    const contact = new ContactSchema(req.body);
    const found = await ContactSchema.findOne({ email });
    if (found) {
      return res.status(400).send('contact already exists ');
    }
    await contact.save();
    res.status(200).send({ msg: 'contact is added', contact });
  } catch (error) {
    res.status(500).send('could not add user');
  }
};

//read contact list
exports.GetContacts = async (req, res) => {
  try {
    const contactList = await ContactSchema.find();
    res.status(200).send({ msg: 'your contact list', contactList });
  } catch (error) {
    res.status(500).send('could not get contact list');
  }
};

//update contact
exports.UpdateContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send('contact updated');
  } catch (error) {
    res.status(500).send('could not update');
  }
};

//delete contact
exports.DeleteContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: 'contact deleted' });
  } catch (error) {
    res.status(500).send('could not delete');
  }
};

//get one contact
exports.GetOneContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findById(req.params.id);
    res.status(200).send({ msg: 'your contact ', contact });
  } catch (error) {
    res.status(500).send('could not find contact');
  }
};
