


    const express = require('express');
    const router = express.Router();
    const bookingController=require('../Controller/BookingController')


/***********************************************************************************************/
// ------------------------------------------Creat------------------------------------------------

router.post("/creat-Guests",async (req, res) => {



}
)



/****************************************************************************/
// ----------------------------Shwo All Booking------------------------------

router.get("/getAllBooking", async (req, res) => {

    try {
        let data = await bookingController.getAllBooking();
        if (data != "error") {
            res.json({
                Booking: data,
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
// ----------------------------update Booking------------------------------


    router.put('/update-Booking:id',async(req,res)=>{


    })




/**********************************************************************/
// ----------------------------delete Booking------------------------------


    router.delete('/delete-Booking:id',async(req,res)=>{

        
    })







/**********************************************************/


module.exports = router;
