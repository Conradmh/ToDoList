module.exports = app => {
  const serviceRequests = require("../controllers/serviceRequests.js");

  var router = require("express").Router();

  // Create a new serviceRequests
  router.post("/", serviceRequests.create);

  // Retrieve all serviceRequests
  router.get("/", serviceRequests.findAll);

  // Retrieve all active serviceRequests
  // router.get("/active", serviceRequests.findAllActive);

  // Retrieve a single serviceRequests with id
  router.get("/:id", serviceRequests.findOne);

  // Update a serviceRequests with id
  router.put("/:id", serviceRequests.update);

  // Delete a serviceRequests with id
  router.delete("/:id", serviceRequests.delete);

  // Create a new serviceRequests
  router.delete("/", serviceRequests.deleteAll);

  app.use('/api/servicerequests', router);
}
