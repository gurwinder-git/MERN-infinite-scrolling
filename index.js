import express, { response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './model/userModel.js';
import paginatedResults from './middleware/paginatedMiddleware.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config({path: './config.env'});
const url = process.env.URL;

// use middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: false
}))


//mongoDB connection
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log('connection successfull')).catch((err) => console.error(err));


//end Points
app.get('/blogs', paginatedResults(Blog), (req, res) => {
    res.status(200).json(res.paginetedResults);
})


app.get('/getfullblog/:id', async (req, res) => {
    try {
        let result = await Blog.find({_id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({err: err.message});
        
    }
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

