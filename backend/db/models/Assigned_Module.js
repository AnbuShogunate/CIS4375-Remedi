const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Assigned_Module', {
    contractorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Contractor',
        key: 'contractorID'
      }
    },
    moduleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Module',
        key: 'moduleID'
      }
    },
    projectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Project',
        key: 'projectID'
      }
    }
  }, {
    sequelize,
    tableName: 'Assigned_Module',
    schema: 'dbo',
    timestamps: true,
    underscored: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT',
    deletedAt: false,
    indexes: [
      {
        name: "PK__Assigned__52B7CDBB6CBD1D80",
        unique: true,
        fields: [
          { name: "contractorID" },
          { name: "moduleID" },
          { name: "projectID" },
        ]
      },
      {
        name: "PK__Assigned__D6A63CF6F799D883",
        unique: true,
        fields: [
          { name: "contractorID" },
          { name: "moduleID" },
        ]
      },
    ]
  });
};
