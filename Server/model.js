const { Sequelize, Model } = require("sequelize");
const sequelize = require("./server");

sequelize
    .sync()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.log("Unable to connect to the database:", error);
    });