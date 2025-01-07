const express = require('express');
require('dotenv').config();
const dbConnection = require('./config/database');
const transactionRouter = require('./routes/transactionRouter');
const userRouter = require('./routes/userRouter');
const UserModel = require('./Models/User');
const TransactionModel = require('./Models/Transaction');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;


app.use('/', userRouter);
app.use('/', transactionRouter);

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.send(users);  
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to fetch users' });  
    }
});

app.get('/alltransactions', async (req, res) => {
    try {
        const users = await TransactionModel.find({});
        res.send(users);  
    } catch (err) {
        console.error(err); 
        res.status(500).send({ error: 'Failed to fetch transactions' }); 
    }
});

app.use('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Orbit Wallet</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #1e1e1e;
                        color: white;
                    }
                    .container {
                        display: flex;
                        height: 100vh;
                    }
                    .sidebar {
                        width: 600px;
                        background-color: #2e2e2e;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                    }
                    .sidebar h2 {
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                    .sidebar ul {
                        list-style: none;
                        padding: 0;
                    }
                    .sidebar ul li {
                        margin: 10px 0;
                        font-size: 16px;
                    }
                    .sidebar ul li a {
                        color: #cfcfcf;
                        text-decoration: none;
                    }
                    .sidebar ul li a:hover {
                        color: white;
                    }
                    .main-content {
                        flex: 1;
                        padding: 20px;
                        background-color: #1e1e1e;
                    }
                    .main-content h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    .main-content p {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                    .main-content a {
                        color: #58a6ff;
                        text-decoration: none;
                    }
                    .main-content a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="sidebar">
                        <h2>API</h2>
                        <ul>
                            <li><a href="http://localhost:7777/users" target="_blank">GET allUsers</a></li>
                            <li><a href="http://localhost:7777/alltransactions" target="_blank">GET allTransactions</a></li>
                            <li><a href="http://localhost:7777/user/64a1f1d1c7d7d3e2" target="_blank">GET userDetails</a></li>
                            <li><a href="http://localhost:7777/transactions/64a1f1d1c7d7d3e2" target="_blank">POST userTransactionsWithFilters</a></li>
                            <li><a href="http://localhost:7777/transactions?page=10" target="_blank">POST allTransactionsWithFilters</a></li>
                        </ul>
                    </div>
                    <div class="main-content">
                        <h1>Orbit Wallet</h1>
                        <p></p>
                        <a href="https://github.com/satyadev2/Orbit-Wallet" target="_blank">Github Repository</a>
                    </div>
                </div>
            </body>
        </html>
    `);
});





dbConnection()
    .then(() => {
        console.log("DB connection Successful");
        app.listen(process.env.PORT, () => {
            console.log(`Server listening at ${port}`);
        });
    })
    .catch((err) => {
        console.error("Database cannot be connected.", err);
    });



// UserModel.insertMany(userdata)
//     .then(() => console.log("Users inserted"))
//     .catch((err) => console.error("Error inserting users:", err));


// TransactionModel.insertMany(transactiondata)
//     .then(() => console.log("Transactions inserted"))
//     .catch((err) => console.error("Error inserting Transactions:", err));



