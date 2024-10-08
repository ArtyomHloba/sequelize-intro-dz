'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: DataTypes.STRING,
      brand: DataTypes.STRING,
      year: DataTypes.INTEGER,
      ram: DataTypes.INTEGER,
      processor: DataTypes.STRING,
      screen: DataTypes.FLOAT,
      nfc: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
