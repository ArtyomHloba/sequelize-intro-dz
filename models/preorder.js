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
      Preorder.belongsTo(models.Phone, {
        foreignKey: {
          name: 'phoneId',
          allowNull: false,
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Preorder.init(
    {
      orderDate: DataTypes.DATEONLY,
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'done'),
        allowNull: false,
      },
      quantity: DataTypes.INTEGER,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Preorder',
    }
  );
  return Preorder;
};
