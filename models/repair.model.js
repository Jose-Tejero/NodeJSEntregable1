const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Repair = db.define("repair", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
});

module.exports = { Repair };