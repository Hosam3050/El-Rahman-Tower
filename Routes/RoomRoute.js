
    const express = require('express');
    const multer = require('multer');
    const path = require('path');
    const roomController=require('../Controller/RoomController')
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
// ------------------------------------------Creat Room------------------------------------------------

router.post("/creat-room",upload.single('room_photo'), async (req, res) => {

    let room_photo = new Date + req.file.filename;
    try {
        const {number,type,price,available} = req.body;
        let data = await roomController.createRoom(number,type,price,available,room_photo);
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
// ----------------------------Shwo All Room------------------------------

router.get("/getAllRoom", async (req, res) => {

    try {
        let data = await roomController.getAllRoom();
        if (data != "error") {
            res.json({
                Room: data,
                msg: "ok",
                status: 200
            });
            console.log(data)
        }
        else {
            res.status(403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})

/**********************************************************************/
// ----------------------------update Room------------------------------

router.put('/:id',roomController.updateRoom);





/**********************************************************************/
// ----------------------------delete Room------------------------------

router.delete('/:id',roomController.deleteRoom);






/**********************************************************/


module.exports = router;
