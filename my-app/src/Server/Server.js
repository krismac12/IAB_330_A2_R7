const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors());
app.use((req, res, next)=>{
    res.setHeader("Acess-Control-Allow-Origin","*");
    next();
});
app.use(express.json({limit:'10mb'}));

let db = new sqlite3.Database('iotsolution.db', (err)=>{
    if(err) {
        console.log(err.message);
    }
    console.log("connected");
})





app.post('/getRoom', (req,res) =>{
    let sql = 'select * from Rooms where roomID = ?';
    db.get(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err.message);
        }
        return row
    })
})


app.listen(2100, () => console.log("Port 2100"));