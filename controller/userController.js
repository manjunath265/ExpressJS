const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    console.log("user", user);
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.status(201).json({ message: 'User registered' });
})

const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))) {
       const accessToken = jwt.sign(
            {
                user: {
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );
        res.status(200).json({ accessToken });
    }
    else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
})

const getUser = asyncHandler(async(req, res) => {
    res.status(200).json(req.user);
})
module.exports = {
    registerUser,
    loginUser,
    getUser
}