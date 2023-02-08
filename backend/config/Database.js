import { Sequelize } from "sequelize";

const db = new Sequelize("webtera", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
