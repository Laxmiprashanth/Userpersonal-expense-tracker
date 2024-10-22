const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite', // or 'mysql', 'postgres', etc.
    storage: './database.sqlite' // for SQLite
});

module.exports = sequelize;

