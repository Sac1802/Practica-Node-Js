const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {}, (err, res) => {
    if(err){
        console.log("Error connection Data Base");
    }else{
        console.log("Connection Successful");
    }
});