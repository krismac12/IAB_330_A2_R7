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





app.get('/getRoom', (req,res) =>{
    let sql = 'select * from Rooms where roomID = ?';
    db.get(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err.message);
        }
        res.send(row)
    })
})

app.get('/bob', (req,res) => "Hello World")

app.listen(5000, () => console.log("Port 5000"));
