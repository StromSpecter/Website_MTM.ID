'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Career extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Career.init(
    {
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Career',
    }
  );

  return Career;
};
