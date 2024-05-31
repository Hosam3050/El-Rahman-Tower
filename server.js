

/******************------Open Server------********************* */

const express = require('express');
const app = express();
const port = 8020;
const guestRoute = require('./Routes/GuestRoute');
const roomtRoute = require('./Routes/RoomRoute');

require('./db'); 



app.get('/',(req,res)=>{
    res.send('Welcome....in my website')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/guest', guestRoute);
app.use('/room', roomtRoute);

app.listen(port, () => console.log(`My port listening on port ${port}!`))



/************************************************************ */
