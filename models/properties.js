module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("property", {
    unitNumber: {
      type:Sequelize.NUMBER
    },
    houseNumber: {
      type: Sequelize.NUMBER
    },
    street: {
      type: Sequelize.STRING
    }
  });

  return Property;
};
