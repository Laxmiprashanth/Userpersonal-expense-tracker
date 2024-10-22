const express = require('express'); 
const router = express.Router();
const Transaction = require('../models/Transaction');

// POST /api/transactions - Add a new transaction
router.post('/', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    try {
        const { type, category, amount, date, description } = req.body;
        const transaction = await Transaction.create({ type, category, amount, date, description });
        res.status(201).json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
});

// GET /api/transactions - Retrieve all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// GET /api/transactions/:id - Retrieve a transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        console.error('Error fetching transaction:', error);
        res.status(500).json({ error: 'Failed to fetch transaction' });
    }
});

// PUT /api/transactions/:id - Update a transaction by ID
router.put('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        const { type, category, amount, date, description } = req.body;
        await transaction.update({ type, category, amount, date, description });
        res.status(200).json(transaction);
    } catch (error) {
        console.error('Error updating transaction:', error);
        res.status(400).json({ error: 'Failed to update transaction' });
    }
});

// DELETE /api/transactions/:id - Delete a transaction by ID
router.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        await transaction.destroy();
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting transaction:', error);
        res.status(500).json({ error: 'Failed to delete transaction' });
    }
});

// GET /api/transactions/summary - Retrieve a summary of transactions
router.get('/summary', async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + t.amount, 0);
        const totalExpenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + t.amount, 0);
        const balance = totalIncome - totalExpenses;

        // Log the summary
        console.log('Summary:', { totalIncome, totalExpenses, balance });

        res.status(200).json({ totalIncome, totalExpenses, balance });
    } catch (error) {
        console.error('Error fetching summary:', error);
        res.status(500).json({ error: 'Failed to fetch summary' });
    }
});


// Export the router
module.exports = router;
