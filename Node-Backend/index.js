//environment file
require('dotenv').config();
const bodyParser = require('body-parser');

//imports
const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./routers/studentRouter');

//express app
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use('/api/student',studentRouter);

//connect to db
mongoose.connect(process.env.Mongo_URI).then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
}).catch((err)=>{
  console.log('error',err)
});

