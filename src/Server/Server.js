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

app.get("/test", function(req,res){
    res.send("Hello");
})

app.listen(3001,function(){
    console.log("Connected to port 3001")
})





app.get('/getRoom', function(req,res) {
    let db = new sqlite3.Database('./src/Server/iotsolution.db', (err)=>{
        if(err) {
            console.log(err.message);
        }
        console.log("connected");
    })
    let sql = 'select * from Rooms';
    db.all(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err);
        }
        res.send(row)
    })
    db.close()
})

app.get('/getCamera', function(req,res) {
    let sql = 'select * from Cameras';
    db.all(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getMachine', function(req,res) {
    let sql = 'select * from Machines where MachineID = 1';
    db.get(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getPatient', function(req,res) {
    let sql = 'select * from Patien where PatientID = 1';
    db.get(sql, res.body, (err, row)=>{
        if(err)
        {
            return console.error(err);
        }
        res.send(row)
    })
})