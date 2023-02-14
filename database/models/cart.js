'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
      this.belongsTo(models.Products, {foreignKey: 'productId',  onDelete:'CASCADE', targetKey: 'id'});
    }
  }
  Carts.init({
    userName: DataTypes.STRING,
    count: DataTypes.INTEGER,
    productId: {
      type: DataTypes.INTEGER,
      field: 'productId',
      references: {
        model: Model.Products,
        key: 'id'
    }
 } }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};