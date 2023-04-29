const router = require('express').Router();
const User = require('../models/userModel');

// ceate a test route
router.get('/test', (req, res) => {
    res.send('Welcome to user API');
});

// create a route for user registration
router.post('/register', async (req, res) => {
    console.log(req.body);
    
    // destructuring
    const {fname, lname, email, password} = req.body;

    // validation
    if(!fname || !lname || !email || !password){
        return res.status(400).json({msg: "Please enter all fields"});
    }

    try {
        
        //  check existing user
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({msg: "User already exists"});
        }

        // create a new user
        const newUser = new User({
            fname,
            lname,
            email,
            password,
        });
        // save the user
        newUser.save();
        res.json("User registered successfully");

    } catch (error) {
        res.status(500).json("User registration failed");
    }

});


module.exports = router;


