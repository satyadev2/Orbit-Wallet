const transactions = [
    // Transactions for User1
    {
        "_id": "t1",
        "status": "success",
        "type": "debit",
        "transactionDate": "2025-01-01",
        "amount": 150.75,
        "userId": "64a1f1d1c7d7d3e2"
    },
    {
        "_id": "t2",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 250.30,
        "userId": "64a1f1d1c7d7d3e2"
    },
    {
        "_id": "t3",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 78.00,
        "userId": "64a1f1d1c7d7d3e2"
    },
    {
        "_id": "t4",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-04",
        "amount": 430.00,
        "userId": "64a1f1d1c7d7d3e2"
    },
    {
        "_id": "t5",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-03",
        "amount": 120.50,
        "userId": "64a1f1d1c7d7d3e2"
    },
    {
        "_id": "t6",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 850.90,
        "userId": "64a1f1d1c7d7d3e3"
    },
    {
        "_id": "t7",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2024-12-30",
        "amount": 345.60,
        "userId": "64a1f1d1c7d7d3e3"
    },
    {
        "_id": "t8",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-05",
        "amount": 94.20,
        "userId": "64a1f1d1c7d7d3e3"
    },
    {
        "_id": "t9",
        "status": "success",
        "type": "debit",
        "transactionDate": "2024-12-28",
        "amount": 112.70,
        "userId": "64a1f1d1c7d7d3e3"
    },
    {
        "_id": "t10",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-03",
        "amount": 470.00,
        "userId": "64a1f1d1c7d7d3e3"
    },
    // Transactions for User3
    {
        "_id": "t11",
        "status": "success",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 760.40,
        "userId": "64a1f1d1c7d7d3e4"
    },
    {
        "_id": "t12",
        "status": "failed",
        "type": "credit",
        "transactionDate": "2025-01-01",
        "amount": 99.99,
        "userId": "64a1f1d1c7d7d3e4"
    },
    {
        "_id": "t13",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-03",
        "amount": 403.00,
        "userId": "64a1f1d1c7d7d3e4"
    },
    {
        "_id": "t14",
        "status": "success",
        "type": "credit",
        "transactionDate": "2024-12-29",
        "amount": 510.55,
        "userId": "64a1f1d1c7d7d3e4"
    },
    {
        "_id": "t15",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-04",
        "amount": 300.30,
        "userId": "64a1f1d1c7d7d3e4"
    },
    // Transactions for User4
    {
        "_id": "t16",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 255.00,
        "userId": "64a1f1d1c7d7d3e5"
    },
    {
        "_id": "t17",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2025-01-01",
        "amount": 500.00,
        "userId": "64a1f1d1c7d7d3e5"
    },
    {
        "_id": "t18",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2024-12-30",
        "amount": 700.00,
        "userId": "64a1f1d1c7d7d3e5"
    },
    {
        "_id": "t19",
        "status": "success",
        "type": "debit",
        "transactionDate": "2025-01-03",
        "amount": 800.00,
        "userId": "64a1f1d1c7d7d3e5"
    },
    {
        "_id": "t20",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-04",
        "amount": 100.00,
        "userId": "64a1f1d1c7d7d3e5"
    },
    // Transactions for User5
    {
        "_id": "t21",
        "status": "success",
        "type": "debit",
        "transactionDate": "2025-01-01",
        "amount": 320.90,
        "userId": "64a1f1d1c7d7d3e6"
    },
    {
        "_id": "t22",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 480.70,
        "userId": "64a1f1d1c7d7d3e6"
    },
    {
        "_id": "t23",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2024-12-30",
        "amount": 125.80,
        "userId": "64a1f1d1c7d7d3e6"
    },
    {
        "_id": "t24",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-03",
        "amount": 630.00,
        "userId": "64a1f1d1c7d7d3e6"
    },
    {
        "_id": "t25",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 350.10,
        "userId": "64a1f1d1c7d7d3e6"
    },
    // Transactions for User6
    {
        "_id": "t26",
        "status": "success",
        "type": "debit",
        "transactionDate": "2025-01-02",
        "amount": 420.00,
        "userId": "64a1f1d1c7d7d3e7"
    },
    {
        "_id": "t27",
        "status": "failed",
        "type": "credit",
        "transactionDate": "2024-12-31",
        "amount": 310.60,
        "userId": "64a1f1d1c7d7d3e7"
    },
    {
        "_id": "t28",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-03",
        "amount": 230.50,
        "userId": "64a1f1d1c7d7d3e7"
    },
    {
        "_id": "t29",
        "status": "success",
        "type": "credit",
        "transactionDate": "2024-12-30",
        "amount": 510.80,
        "userId": "64a1f1d1c7d7d3e7"
    },
    {
        "_id": "t30",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-04",
        "amount": 95.00,
        "userId": "64a1f1d1c7d7d3e7"
    },
    // Transactions for User7
    {
        "_id": "t31",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 540.60,
        "userId": "64a1f1d1c7d7d3e8"
    },
    {
        "_id": "t32",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-01",
        "amount": 245.30,
        "userId": "64a1f1d1c7d7d3e8"
    },
    {
        "_id": "t33",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 150.40,
        "userId": "64a1f1d1c7d7d3e8"
    },
    {
        "_id": "t34",
        "status": "success",
        "type": "debit",
        "transactionDate": "2025-01-03",
        "amount": 780.00,
        "userId": "64a1f1d1c7d7d3e8"
    },
    {
        "_id": "t35",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-04",
        "amount": 395.00,
        "userId": "64a1f1d1c7d7d3e8"
    },
    // Transactions for User8
    {
        "_id": "t36",
        "status": "success",
        "type": "debit",
        "transactionDate": "2024-12-30",
        "amount": 960.00,
        "userId": "64a1f1d1c7d7d3e9"
    },
    {
        "_id": "t37",
        "status": "failed",
        "type": "credit",
        "transactionDate": "2025-01-01",
        "amount": 610.50,
        "userId": "64a1f1d1c7d7d3e9"
    },
    {
        "_id": "t38",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-02",
        "amount": 420.00,
        "userId": "64a1f1d1c7d7d3e9"
    },
    {
        "_id": "t39",
        "status": "success",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 190.25,
        "userId": "64a1f1d1c7d7d3e9"
    },
    {
        "_id": "t40",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2025-01-03",
        "amount": 880.00,
        "userId": "64a1f1d1c7d7d3e9"
    },
    // Transactions for User9
    {
        "_id": "t41",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-03",
        "amount": 770.50,
        "userId": "64a1f1d1c7d7d3ea"
    },
    {
        "_id": "t42",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2024-12-30",
        "amount": 230.40,
        "userId": "64a1f1d1c7d7d3ea"
    },
    {
        "_id": "t43",
        "status": "failed",
        "type": "debit",
        "transactionDate": "2025-01-02",
        "amount": 145.10,
        "userId": "64a1f1d1c7d7d3ea"
    },
    {
        "_id": "t44",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-01",
        "amount": 910.25,
        "userId": "64a1f1d1c7d7d3ea"
    },
    {
        "_id": "t45",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2024-12-29",
        "amount": 305.20,
        "userId": "64a1f1d1c7d7d3ea"
    },
    // Transactions for User10
    {
        "_id": "t46",
        "status": "success",
        "type": "debit",
        "transactionDate": "2024-12-31",
        "amount": 680.40,
        "userId": "64a1f1d1c7d7d3eb"
    },
    {
        "_id": "t47",
        "status": "failed",
        "type": "credit",
        "transactionDate": "2025-01-01",
        "amount": 105.80,
        "userId": "64a1f1d1c7d7d3eb"
    },
    {
        "_id": "t48",
        "status": "pending",
        "type": "debit",
        "transactionDate": "2025-01-02",
        "amount": 300.50,
        "userId": "64a1f1d1c7d7d3eb"
    },
    {
        "_id": "t49",
        "status": "success",
        "type": "credit",
        "transactionDate": "2025-01-03",
        "amount": 415.90,
        "userId": "64a1f1d1c7d7d3eb"
    },
    {
        "_id": "t50",
        "status": "pending",
        "type": "credit",
        "transactionDate": "2024-12-30",
        "amount": 590.30,
        "userId": "64a1f1d1c7d7d3eb"
    }
]

module.exports = transactions;