module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("property", {
    name: {
      type:Sequelize.STRING
    },
    unitNumber: {
      type:Sequelize.STRING
    },
    houseNumber: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    }
  });

  return Property;
};
