const mongoose = require('mongoose');

// const mongooseUrl = 'mongodb://127.0.0.1/crudIteams';
const mongooseUrl = 'mongodb+srv://pydamnaidu:kG35vdP7ZSQfqVno@database.cjh6ckr.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery',false);

mongoose.connect(mongooseUrl,{
    useNewUrlParser: true
});

const db = mongoose.connection;


db.on('error',console.error.bind(console,'Mongodb connection Error'));
db.once('open',(error)=>{
    console.log('Success in connecting to the database');
});

module.exports = db;