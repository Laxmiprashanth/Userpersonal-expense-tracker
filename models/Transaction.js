const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Transaction extends Model {}

Transaction.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Transaction',
});

module.exports = Transaction;
