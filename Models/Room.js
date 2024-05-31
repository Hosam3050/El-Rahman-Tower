
const mongoose=require('mongoose');


const roomSchema = new mongoose.Schema({
    room_id: {
        type : Number,
        unique: true,
        default: 0
    },
    number:
        { type: Number, required: true },
    type:
        { type: String, required: true },
    price:
        { type: Number, required: true },
    available:
        { type: Boolean, default: true },
});


    const Room = mongoose.model('Room',roomSchema);
    Room.createIndexes({ room_id : 1 });
    module.exports = Room;


