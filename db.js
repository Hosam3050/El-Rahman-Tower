const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/Hotel').then(() => {
    console.log("connect to my db");
}).catch(err => {
    console.log(err);
})