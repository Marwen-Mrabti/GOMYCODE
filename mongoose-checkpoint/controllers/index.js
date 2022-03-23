const PersonSchema = require('../models/person');

// add person to db
exports.AddPerson = async (req, res) => {
  try {
    const person = new PersonSchema(req.body);
    await person.save();
    res.status(200).send({ msg: 'person added', person });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// read the db content
exports.ReadAllDB = async (req, res) => {
  try {
    const dbContent = await PersonSchema.find();
    res.status(200).send({ msg: 'list of people', dbContent });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//find one by food
exports.FindByFood = async (req, res) => {
  try {
    const person = await PersonSchema.findOne({
      favoriteFoods: req.body.favoriteFood,
    });
    res.status(200).send({ msg: 'person', person });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//find one by id
exports.FindById = async (req, res) => {
  try {
    const person = await PersonSchema.findById(req.params.id);
    res.status(200).send({ msg: 'person', person });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//update a person infos : find => update => save
exports.ClassicUpdate = async (req, res) => {
  try {
    const person = await PersonSchema.findById(req.params.id);
    person.favoriteFoods.push('fNew');
    await person.save();
    res.status(200).send({ msg: 'enough', person });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//update a person infos :findOneAndUpdate
exports.UpdatePerson = async (req, res) => {
  try {
    const person = await PersonSchema.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send('person info updates');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete by id
exports.DeletePerson = async (req, res) => {
  try {
    const person = await PersonSchema.findByIdAndRemove(req.params.id);
    res.status(200).send(`person with _id:${person.id} removed`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete many docs => .remove()
exports.DeleteDocs = async (req, res) => {
  try {
    const deletedDocs = await PersonSchema.remove({ name: 'Mary' });
    res.status(200).send(`you have deleted ${deletedDocs.deleteCount} docs`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Chain Search
exports.ChainSearch = async (req, res) => {
  try {
    const F1Lovers = await PersonSchema.find({ favoriteFoods: 'f1' })
      .sort({
        name: 1,
      })
      .limit(2)
      .select('name favoriteFoods')
      .exec((err, data) => {
        if (err) res.status(500).send(error.message);
        res
          .status(200)
          .send({ msg: 'people who love f1 sorted by name', data });
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
