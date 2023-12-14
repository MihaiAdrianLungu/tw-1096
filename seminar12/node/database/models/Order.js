const { Sequelize } = require("sequelize"); 
const {sequelize} = require("../server"); 

const Order = sequelize.define("Order", {
    id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
    }, 
    value: Sequelize.INTEGER,
    status: Sequelize.STRING
})

module.exports = Order;