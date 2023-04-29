const express = require('express');
const connectDB = require('./database/Database');

// Dotenv Config
require("dotenv").config();
const app = express();

// express json
app.use(express.json());


//  create a route
app.get('/', (req, res) => {
    res.send('Welcome to API');
});

// middleware for user controller
app.use('/api/user', require('./controllers/userControllers'));


// connect to database
connectDB();

// listen to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



