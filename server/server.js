const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = require('./routes/routes');





const app = express();


app.use(bodyParser.json());
app.use('/', router)

const connectionString = 'mongodb://localhost/react-shopping-cart'
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("Connection Done"))






app.listen(5001, ()=>{
    console.log("Running on post 5001")
})