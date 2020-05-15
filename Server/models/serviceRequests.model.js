module.exports = (sequelize, Sequelize) => {
  const Request = sequelize.define("request", {
    title: {
      type:Sequelize.STRING
    },
    description: {
      type:Sequelize.STRING
    }
  });

  return Request;
};
