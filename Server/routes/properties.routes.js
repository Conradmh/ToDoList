module.exports = app => {
  const property = require("../controllers/properties.js");

  var router = require("express").Router();

  // Create a new Property
  router.post("/", property.create);

  // Retrieve all Properties
  router.get("/", property.findAll);

  // Retrieve all active Properties
  // router.get("/active", property.findAllActive);

  // Retrieve a single Property with id
  router.get("/:id", property.findOne);

  // Update a Property with id
  router.put("/:id", property.update);

  // Delete a Property with id
  router.delete("/:id", property.delete);

  // Create a new Property
  router.delete("/", property.deleteAll);

  app.use('/api/properties', router);
}
