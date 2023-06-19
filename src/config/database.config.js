const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    dialect: "postgres",
    define: {
        underscored: true
    }
});

module.exports = sequelize;