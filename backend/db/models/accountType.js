const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountType', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accountType',
    schema: 'dbo',
    timestamps: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    indexes: [
      {
        name: "PK__accountT__3213E83F12288540",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "PK__accountT__3213E83F9611EB87",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
