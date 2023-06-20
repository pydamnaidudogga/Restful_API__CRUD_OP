const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        require:true
    },
    brand :{
        type:String,
        require:true
    },
    color :{
        type:String,
        require:true
    },
    discription :{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }

});


const Items = mongoose.model('Items',itemSchema);
module.exports = Items;