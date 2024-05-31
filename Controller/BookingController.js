const Booking=require('../Models/Booking');

// /********************************************************************************************* */
// // -------------------------------Creat Booking-----------------------------------------------------

    const createBooking = async (_checkInDate,_checkOutDate,_nights,_paid,_room,_guests) => {
        try {
            let data = await Booking.create({
                checkInDate:_checkInDate,
                checkOutDate:_checkOutDate,
                nights:_nights,
                paid:_paid,
                room:_room,
                guests:_guests
            });
                
            if (data) {
                console.log('Booking', data)
            }
            else {
                console.log("error");
            }
        }
        catch (e) {
            console.log(e);
        }
    } 



/******************************************************* */
// -----------------------Shwo Booking---------------------------------

const getAllBooking = async () => {
    try {
        let data = await Booking.find({});
        if (data) {
            console.log('Booking', data)
            return data;
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }
}
/******************************************************* */
// -----------------------update Booking---------------------------------











/******************************************************* */
// -----------------------delete Booking---------------------------------












// /*************----Exports----************ */


module.exports = { createBooking,getAllBooking };



