module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define("request", {
    title: {
      type:Sequelize.STRING
    },
    description: {
      type:Sequelize.STRING
    },
    priority: {
      type:Sequelize.INTEGER
    },
    completed: {
      type:Sequelize.BOOLEAN,
      defaultValue: false
    },
    propertyId: {
      type:Sequelize.STRING
    },
    createdByUserId: {
      type:Sequelize.STRING
    }
  });

  return Request;
};
