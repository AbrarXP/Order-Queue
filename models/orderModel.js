import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

// Membuat tabel "men"
const Order = db.define(
  "orders", // Nama Tabe
  {
    orderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userID: {
        type: DataTypes.INTEGER
    },
    menuID: {
        type: DataTypes.INTEGER
    },
    status: Sequelize.TEXT
  },
  {
    timestamps: false 
  }
);

export default Order;