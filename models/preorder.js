'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Preorder.init(
    {
      orderDate: DataTypes.DATEONLY,
      status: DataTypes.ENUM,
      pending: DataTypes.INTEGER,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Preorder',
    }
  );
  return Preorder;
};
