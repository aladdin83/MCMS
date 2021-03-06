'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    code: DataTypes.STRING,
    area_code: DataTypes.STRING
  });
};
