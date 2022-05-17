const {Sequelize} = require('sequelize');
require("dotenv").config(".env");
const sequelize = new Sequelize(process.env.DB_URI, {
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;