const Guests = require("../Models/Guest");

// /********************************************************************************************* */
// // -------------------------------Creat Guests-----------------------------------------------------

const createGuests = async (_name,_nId,_arrivDate,_departDate,_job,_nationality,_country,_city,_phone,_id_photo) => {
    try {
        let dataLength = await Guests.find();
        let data = await Guests.create({
            guest_id : dataLength.length +1 ,
            name: _name,
            nId: _nId,
            arrivDate: _arrivDate,
            departDate: _departDate,
            job: _job,
            nationality: _nationality,
            country: _country,
            city: _city,
            phone: _phone,
            id_photo: _id_photo,
        });
        if (data) {
            console.log("Guests", data);
                return data;

        } else {
            console.log("error");
        }
    } catch (e) {
        console.log(e);
    }
};
/******************************************************* */
// -----------------------Shwo Guests---------------------------------


const getAllGuests = async () => {
    try {
        let data = await Guests.find({});
        if (data) {
            console.log("Guests", data);
            return data;
        } else {
            console.log("error");
        }
    } catch (e) {
        console.log(e);
    }
};

/******************************************************* */
// -----------------------update Guests---------------------------------

const updateGuest =(req, res) => {
    Guests.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        nId: req.body.nId,
        arrivDate: req.body.arrivDate,
        departDate: req.body.departDate,
        job: req.body.job,
        nationality: req.body.nationality,
        country: req.body.country,
        city: req.body.city,
        phone: req.body.phone,
        id_photo: req.body.id_photo,
    },{new:true})
    .then(data =>{
        res.send("update done ...." + data);
        return data;
    }).catch(err =>{
        console.log(err)
    })
};

/******************************************************* */
// -----------------------delete Guests---------------------------------

const deleteGuest =(req, res) => {
    Guests.findByIdAndDelete(req.params.id,{
        name: req.body.name,
        nId: req.body.nId,
        arrivDate: req.body.arrivDate,
        departDate: req.body.departDate,
        job: req.body.job,
        nationality: req.body.nationality,
        country: req.body.country,
        city: req.body.city,
        phone: req.body.phone,
        id_photo: req.body.id_photo,
    })
    .then(data =>{
        res.send("deleteng  done" + data);
    }).catch(err =>{
        console.log(err)
    })
};

/******************************************************* */
// /*************----Exports----************************ */

module.exports = { createGuests,getAllGuests,updateGuest,deleteGuest};
