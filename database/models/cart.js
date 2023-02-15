'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define('Carts', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Carts.associate = function(models) {
    // associations can be defined here
    Carts.belongsTo(models.Products, {
      foreignKey: 'productId'
    });
  };
  return Carts;
};
