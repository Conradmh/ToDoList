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

// Retrieve all Properties from the database/find by condition
exports.findAll = (req, res) => {
  const houseNumber = req.query.houseNumber;
  let condition = houseNumber ? { houseNumber: { [Op.like]: `%${houseNumber}%` } } : null;
  Property.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "An error occured while retrieving the Property"
    });
  });
};

// Find a single Property  with an id
exports.findOne = (req, res) => {
 const id = req.params.id;

 Property.findByPk(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Property with id:" + id
    });
  });
};

// Update a Property by the id in teh request
exports.update = (req, res) => {
  const id = req.params.id;

    Property.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Property was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Property with id=${id}. Maybe Property was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Property with id=" + id
        });
      });
};

// Delete a Property with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Property.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Property was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Property with id=${id}. Maybe Property was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Property with id=" + id
      });
    });
};

// Delete all propterties from the database
exports.deleteAll = (req, res) => {
  Property.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Propertys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all properties."
      });
    });
};

// Find all Properties by boolean

// exports.findAllPublished = (req, res) => {
//   Property.findAll({ where: { active: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving properties."
//       });
//     });
// };
