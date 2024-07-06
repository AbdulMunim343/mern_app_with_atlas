//environment file
require('dotenv').config();

//imports
const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./routers/student');

//express app
const app = express();


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

