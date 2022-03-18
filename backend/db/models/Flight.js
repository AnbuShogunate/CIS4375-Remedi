const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Flight', {
    flightID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flightDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    departTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    departLocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalLcation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    airlineID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airline',
        key: 'airlineID'
      }
    }
  }, {
    sequelize,
    tableName: 'Flight',
    schema: 'dbo',
    timestamps: true,
    underscored: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT',
    deletedAt: false,
    indexes: [
      {
        name: "PK__Flight__0E0186225222424C",
        unique: true,
        fields: [
          { name: "flightID" },
        ]
      },
    ]
  });
};
