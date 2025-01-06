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



