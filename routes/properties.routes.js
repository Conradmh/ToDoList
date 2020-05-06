module.exports = app => {
  const tutorials = require("../controllers/properties.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  app.use('/api/properties', router);
}
