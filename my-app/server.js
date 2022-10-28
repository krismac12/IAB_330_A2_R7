const path = require("path");
const cors = require('cors');
const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let root = require('path').join(__dirname, 'build')

let db = new sqlite3.Database("./db/iotsolution.db", (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log("connected");
})

app.get('/getRoom', function (req, res) {
    let sql = 'select * from Rooms';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getRoomStatus/', function (req, res) {
    let sql = 'select * from RFIDList where roomID IS NOT NULL';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})


app.get('/getCamera', function (req, res) {
    let sql = 'select * from Cameras';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getMachine', function (req, res) {
    let sql = 'select * from Machines';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getPatient', function (req, res) {
    let sql = 'select * from Patient';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getMachineHistory/:MachineID', function (req, res) {
    let sql = 'select * from MachinesHistory where MachineID = ?';
    var params = [req.params.MachineID]
    db.all(sql, params, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})

app.get('/getRFIDHistory/:RoomID', function (req, res) {
    let sql = 'select * from RFIDHistory where RoomID = ?';
    var params = [req.params.RoomID]
    db.all(sql, params, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})


app.get('/getStaff', function (req, res) {
    let sql = 'select * from Staff';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }
        res.send(row)
    })
})


app.get('/getBookings', function (req, res) {
    let sql = 'select * from RFIDHistory where EventType = 1';
    db.all(sql, res.body, (err, row) => {
        if (err) {
            return console.error(err);
        }

        res.send(row)
    })
})


if (process.env.NODE_ENV === 'development') {
    console.log("Development mode")
    app.use(express.static(root));
    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })
} else {
    console.log("Production mode")
    root = require('path').join(__dirname, '..', 'client', 'build')
    app.use(express.static(root));
    app.use("/*", (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
}





app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});