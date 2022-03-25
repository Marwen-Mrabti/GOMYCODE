require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const app = express();
app.use(express.json());

//Routes
app.use('/users', router);

//connect to db
console.log(process.env);
const port = process.env.PORT || 5000;
const MongoUri = process.env.MONGO_URI;

mongoose
  .connect(
    MongoUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log('DB connected')
  )
  //start server once connected
  .then(
    app.listen(port, () => console.log(`server running on: http://localhost:${port}`))
  )
  //console log err message if not connected
  .catch((err) => console.log(err.message));
