module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });
  return User;
};
