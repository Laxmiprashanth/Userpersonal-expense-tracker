# Userpersonal-expense-tracker

Project Description
This Transaction Management Application allows users to efficiently track their financial transactions, enabling them to add, retrieve, update, and delete transactions. It provides summary reports on total income, expenses, and balance, helping users maintain better control over their finances.

File Structure

transaction-manager/
├── config/
│   └── db.js                  # Database configuration
├── models/
│   └── Transaction.js          # Sequelize model for transactions
├── routes/
│   └── transactionRoutes.js    # Express routes for transaction endpoints
├── node_modules/
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Exact version of dependencies
└── index.js                    # Main server file
API Endpoints
POST /api/transactions - Add a new transaction
GET /api/transactions - Retrieve all transactions
GET /api/transactions/
- Retrieve a transaction by ID
PUT /api/transactions/
- Update a transaction by ID
DELETE /api/transactions/
- Delete a transaction by ID
GET /api/transactions/summary - Retrieve a summary of transactions
Technology Stack
The application is built using the following technologies:

Node.js: A JavaScript runtime for building server-side applications.
Express: A web framework for Node.js to build APIs easily.
Sequelize: A promise-based Node.js ORM for managing SQL databases.
SQLite: A lightweight SQL database used for storing transaction data.
