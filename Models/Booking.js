
const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({

    booking_id: {
        type : Number,
        unique: true,
        default: 0
    },
    checkInDate:
        { type: Date},
    checkOutDate:
        { type: Date},
    nights: 
        { type: Number },
    paid:
        { type: Boolean, default: false },
    room:
        { type: mongoose.Types.ObjectId, ref: "Room" },
    guests:
        [{ type: mongoose.Types.ObjectId, ref: "Guest" }],
});
    
    const Booking=mongoose.model('Booking',bookingSchema);
    Booking.createIndexes({ booking_id : 1 });

    module.exports=Booking;