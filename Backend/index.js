const express = require('express');
const connectDB = require('./database/Database');
const cors = require('cors');
const cloudinary = require('cloudinary');
const multipart = require('connect-multiparty');

// Dotenv Config
require("dotenv").config();
const app = express();

// express json
app.use(express.json());
app.use(multipart())

// cors config
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
};

cloudinary.config({
    cloud_name: "kingsly",
    api_key: "368993726257699",
    api_secret: "t7wlk7UbEkBn--lCB4OhDJ-E4_U"
});

app.use(cors(corsOptions));

//  create a route
app.get('/', (req, res) => {
    res.send('Welcome to API');
});

// middleware for user controller
app.use('/api/user', require('./controllers/userControllers'));
// middleware for product controller
app.use('/api/product', require('./controllers/productController'));


// connect to database
connectDB();

// listen to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



