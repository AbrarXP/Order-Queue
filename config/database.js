import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("resto_db", "admin", "bandengpresto", {
  host: "34.58.254.65",
  dialect: "mysql",
});

export default db;