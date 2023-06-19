const express = require('express');
const port = 8080;
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',require('./api/routes/index'));







app.listen(port,()=>{
    console.log('surver connected successful on portno 8080');
} )