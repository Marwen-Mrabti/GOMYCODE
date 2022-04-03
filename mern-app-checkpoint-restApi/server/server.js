require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const ContactRoutes=require('./routes')

const app = express();
//to parse data
app.use(express.json());

// connect to the database
connectDB();
//routes
app.use('/api/contact', ContactRoutes);

// create server
port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on http://localhost:${port}`));
