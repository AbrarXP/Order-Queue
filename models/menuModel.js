import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

// Membuat tabel "men"
const Menu = db.define(
  "menus", // Nama Tabe
  {
    menuID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: Sequelize.TEXT,
    resep: Sequelize.TEXT,
  },
  {
    timestamps: false 
  }
);

export default Menu;