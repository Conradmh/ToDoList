const db = require('../models');
const Property = db.property;
const Op = db.Sequelize.Op;

// Create and Save a new Properties
exports.create = (req, res) => {
    // Validate request
    if (!req.body.street || req.body.name || req.body.houseNumber) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Tutorial
    const property = {
      name: req.body.name,
      street: req.body.street,
      houseNumber: req.body.houseNumber,
      unitNumber: req.body.unitNumber,
    };

    // Save Tutorial in the database
    Property.create(property)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Property."
        });
      });
};

// Retrieve all Properties from the database
exports.findAll = (req, res) => {

};

// Find a single Property  with an id
exports.findOne = (req, res) => {

};

// Update a Property by the id in teh request
exports.update = (req, res) => {

};

// Delete a Property with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all propterties from the database
exports.deleteAll = (req, res) => {

};
