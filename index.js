const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); 

// Routes
app.use('/api/transactions', transactionRoutes);

// Sync database and start the server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});
