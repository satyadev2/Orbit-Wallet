const  express=require('express');
const userRouter = express.Router();
const UserModel = require('../Models/User');
userRouter.get('/user/:userId',async (req,res) =>
{
    const userId = req.params.userId;
    try {
        const userData = await UserModel.find({ _id: userId });
        if (userData == null)
        {
            throw new Error("Unable to fetch userdata");
        }
        res.json(userData);
    }
    catch (err)
    {
        res.status(400).send(err.message);
    }
    
})
module.exports = userRouter;