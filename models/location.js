'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    tripId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.Trip, { foreignKey: 'tripId' });
  };
  return Location;
};
