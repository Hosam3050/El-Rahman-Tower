const express = require('express');
const multer = require('multer');
const path = require('path');
const guestController = require('../Controller/GuestController');
const router = express.Router();



// ------------------------Upload file---------------------------


const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..","upload"));
    },
    filename: (req, file, callback) => {
        callback(null,file.originalname);
    }

})

const upload = multer({ storage: Storage });

// ------------------------Entery point-------------------------------------

router.get('/', (req, res) => {
    res.send('Welcome....');
})




/***********************************************************************************************/
// ------------------------------------------Creat------------------------------------------------

router.post("/creat-Guests",upload.single('id_photo'), async (req, res) => {

    let id_photo = new Date + req.file.filename;
    try {
        const {name,nId,arrivDate,departDate,job,nationality,country,city,phone} = req.body;
        let data = await guestController.createGuests(name,nId,arrivDate,departDate,job,nationality,country,city,phone,id_photo);
        if (data != "error") {
            res.send('creating Done...'+data);
            console.log(data)
        }
        else {
            res.status
            (403).send("not found");
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e);
    }

}
)



/****************************************************************************/
// ----------------------------Shwo All Guests------------------------------

router.get("/getAllGuests", async (req, res) => {

    try {
        let data = await guestController.getAllGuests();
        if (data != "error") {
            res.json({
                Guests: data,
                msg: "ok",
                status: 200
            });
            console.log(data)
        }
        else {
            res.status(403).send("not found");
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})

/**********************************************************************/
// ----------------------------update Guests------------------------------

router.put('/:id',guestController.updateGuest);



/**********************************************************************/
// ----------------------------delete Guests------------------------------


router.delete('/:id',guestController.deleteGuest);











/**********************************************************/


module.exports = router;
