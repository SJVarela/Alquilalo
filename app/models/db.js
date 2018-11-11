const Sequelize = require("sequelize");
const UserModel = require("./user");
const AdressModel = require("./adress")

//Db creation
const sequelize = new Sequelize("rentalo", "rentalo", "123456", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//Db check
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//Models
const User = UserModel(sequelize, Sequelize);
const Adress = AdressModel(sequelize,Sequelize);

//Relations
Adress.belongsTo(User);

//Sync
sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

//exports
module.exports = {User, Adress};
