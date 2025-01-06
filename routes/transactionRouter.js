const  express=require('express');
const transactionRouter = express.Router();
const UserModel = require('../Models/User');
const TransactionModel = require('../Models/Transaction');
transactionRouter.use(express.json());


transactionRouter.post('/transactions/:userId', async (req, res) => {
    const { status, type, fromDate, toDate } = req.body; 
    const userId = req.params.userId; 

    try {
        
        const pipeline = [
            {
                $match: {
                    _id:userId 
                }
            },
            {
                $lookup: {
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'transactionsByUser',
                    pipeline: [
                        {
                            $match: {
                                ...(status ? { status: status } : {}),
                                ...(type ? { type: type } : {}),
                                ...(fromDate && toDate ? {
                                    transactionDate: {
                                        $gte: new Date(fromDate),
                                        $lte: new Date(toDate)
                                    }
                                } : {}) 
                            }
                        }
                    ]
                }
            }
        ];

        // Execute aggregation query
        const result = await UserModel.aggregate(pipeline);

        // Send response
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

transactionRouter.post('/transactions', async (req, res) => {
    const { status, type, fromDate, toDate } = req.body;

    try {
        const pipeline = [
            {
                $match: {
                    ...(status ? { status: status } : {}), 
                }
            },
            {
                $match: {
                    ...(type ? { type: type } : {}),
                }
            },
            {
                $match: {
                    ...(fromDate && toDate ? {
                        transactionDate: {
                            $gte: new Date(fromDate),
                            $lte: new Date(toDate)
                        }
                    } : {})
                }
            },
            {
                "$lookup": {
                    from: "users", 
                    localField: "userId",
                    foreignField: "_id", 
                    as: "All Transaction Entries"
                }
            }
        ]

        
        const result = await TransactionModel.aggregate(pipeline);

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});





module.exports = transactionRouter;