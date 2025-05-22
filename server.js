const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

const connectDB = require('./config/dbConnect');
const app = express();

const port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use('/api/contacts', require('./routes/contactroutes'));
app.use('/api/users', require('./routes/userroutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});