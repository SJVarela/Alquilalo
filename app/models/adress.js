module.exports = (sequelize, Sequelize) => {
    const Adress = sequelize.define("adress", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      line1: {
        type: Sequelize.STRING
      },
      line2: {
        type: Sequelize.STRING
      },
      line3: {
        type: Sequelize.STRING
      },
      cityTown: {
        type: Sequelize.STRING
      },
      provinceCountyState: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      countryCode: {
        type: Sequelize.STRING
      },
      geoLon: {
        type: Sequelize.DOUBLE
      },
      geoLat: {
        type: Sequelize.DOUBLE
      }
    });
    return Adress;
  };