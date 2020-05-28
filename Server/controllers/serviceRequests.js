const db = require('../models/index.js');
const Request = db.serviceRequests;
const Op = db.Sequelize.Op;

// Create and Save a new Service Requests
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title || !req.body.description || !req.body.priority) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Request
    const request = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority
    };

    // Save Request in the database
    Request.create(request)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Request."
        });
      });
};

// Retrieve all Service Requests from the database
// Retrieve all Properties from the database/find by condition
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Request.findAll({ where: condition })
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
//find by condition
exports.findAllActive = (req, res) => {
  // const completed = req.query.completed;
  // let condition = !completed ? { completed: { [Op.like]: `%${completed}%` } } : null;
  Request.findAll({
    where: {
        completed: false
      }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "An error occured while retrieving the Request"
    });
  });
};

// Find a single Request  with an id
exports.findOne = (req, res) => {
 const id = req.params.id;

 Request.findByPk(id)
  .then(data => {
    console.log(data, 'dataer')
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Request with id:" + id
    });
  });
};

// Update a Request by the id in teh request
exports.update = (req, res) => {
  const id = req.params.id;

    Request.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Request was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Request with id=${id}. Maybe Request was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Request with id=" + id
        });
      });
};

// Delete a Request with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Request.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Request was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Request with id=${id}. Maybe Request was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Request with id=" + id
      });
    });
};

// Delete all Service Requests from the database
exports.deleteAll = (req, res) => {
  Request.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Requests were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all properties."
      });
    });
};

// Find all Service Requests by boolean
//
// exports.findAllActive = (req, res) => {
//   Request.findAll({ where: { active: true } })
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
