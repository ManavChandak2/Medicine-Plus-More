import {Sequelize} from "sequelize";

const db = new Sequelize('med_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;