const Room=require('../Models/Room');

// /********************************************************************************************* */
// // -------------------------------Creat Room-----------------------------------------------------

    const createRoom = async (_number,_type,_price,_available,_bookings,_room_photo) => {
        try {
            let dataLength = await Room.find();
            let data = await Room.create({
                room_id : dataLength.length +1 ,
                number:_number,
                type:_type,
                price:_price,
                available:_available,
                bookings:_bookings,
                room_photo:_room_photo
            });
                
            if (data) {
                console.log('Room', data);
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
// -----------------------Shwo Room---------------------------------

const getAllRoom = async () => {
    try {
        let data = await Room.find({});
        if (data) {
            console.log('Room', data)
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
// -----------------------update Room---------------------------------




const updateRoom =(req, res) => {
    Room.findByIdAndUpdate(req.params.id,{
        number: req.body.number,
        type: req.body.type,
        price: req.body.price,
        available: req.body.available,
        room_photo: req.body.room_photo,
    },{new:true})
    .then(data =>{
        res.send("update done ...." + data);
        return data;
    }).catch(err =>{
        console.log(err)
    })
};



/******************************************************* */
// -----------------------delete Room---------------------------------

const deleteRoom =(req, res) => {
    Room.findByIdAndDelete(req.params.id,{
        number: req.body.number,
        type: req.body.type,
        price: req.body.price,
        available: req.body.available,
        room_photo: req.body.room_photo,
    },{new:true})
    .then(data =>{
        res.send("deleting done ...." + data);
    }).catch(err =>{
        console.log(err)
    })
};






// /*************----Exports----************ */


module.exports = { createRoom,getAllRoom,updateRoom,deleteRoom };



