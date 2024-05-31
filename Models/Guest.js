
const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    guest_id: {
        type : Number,
        unique: true,
        default: 0
    },
    name: 
        { type: String, required: true },
    nId:
        { type: String, required: true },
    arrivDate: 
        { type: Date  },
    departDate:
        { type: Date },
    job: 
        { type: String , required: true },
    nationality:
        { type: String , required: true },
    country:
        { type: String, required: true  },
    city:
        { type: String , required: true },
    phone:
        { type: String , required: true },
    id_photo:
        { type: String , required: true },
});

    const Guest=mongoose.model('Guest',guestSchema);
    Guest.createIndexes({ guest_id : 1 });
    module.exports=Guest;
