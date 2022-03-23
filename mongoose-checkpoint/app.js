// dotenv
require('dotenv').config();
// import connectDB module
const connectDB = require('./config/connectDB');
//import routes
const routes = require('./routes/routes');
//import express
const express = require('express');
// create an express instance
const app = express();

//to translate data to json
app.use(express.json());

//connect to database
connectDB();

//routes
app.use('/api/person/', routes);

//run server =>to run server :: npm i nodemon =>  npm run dev
app.listen(process.env.port, () => {
  console.log(`server listening on port ${process.env.port}`);
});
