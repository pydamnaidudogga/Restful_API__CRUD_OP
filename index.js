
// This is the main index file

const express = require('express');
// This api is running on port number 8080
const port = 8080;
// start the express server
const db = require('./config/mongoose');
const errorHandling = require('./middlewares/errorHandling');
const app= express();
// To excess the json data
app.use(express.json());
// The urlencoded is used to create a body object to the req with the data
app.use(express.urlencoded({extended:true}));
// All the routes are redirected to the api routes file
app.use('/',require('./api/routes/index'));
// handling the errors
app.use(errorHandling.errorHandling);






// This app is listening on the 8080 port
app.listen(port,()=>{
    console.log('surver connected successful on portno 8080');
} )