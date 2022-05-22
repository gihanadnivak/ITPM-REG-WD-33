const express = require('express');

const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const cors= require('cors');

//import routes
const postroute=require('./route/ports');
const adminRoute = require('./route/adminRoute');


const app = express();

// mideleware 
app.use(bodyparser.json());
app.use(cors());


//use route
app.use(postroute);
app.use(adminRoute);

const PORT = 8000;
const DB_URL = 'mongodb+srv://itpm001:itpm001@cluster0.draik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then( () =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection Error ',err));

app.listen(PORT, () =>{
    console.log(`App is running on  ${PORT}`);
});