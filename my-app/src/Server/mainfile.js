import axios from "axios";
import React, { useState, useEffect } from 'react';


// export function GetRoom(id) {
//     let roomName;
//     axios.get("http://localhost:3001/getRoom")
//         .then(res => {
//             console.log(res.data)
//             return res.data
//         }).catch(err => {
//             console.log(err)
//         })

//     return null
// }

export async function GetRoom() {
    let res = await axios.get('http://localhost:3001/getRoom');
    return res.data

}

export function GetCamera(id) {
    let camera = {
        cameraID: 0,
        roomID: 0,
        name: "",
        numDetected: 0
    }
    const [name, setName] = useState(null);
    const [ID, setID] = useState(null);
    const [roomID, setRoomID] = useState(null);
    const [numDetected, setnumDetected] = useState(null);
    const getCamera = axios.get("http://localhost:3001/getCamera")
        .then(res => {
            setName(res.data[id - 1].name)
            setID(res.data[id - 1].cameraID)
            setRoomID(res.data[id - 1].roomID)
            setnumDetected(res.data[id - 1].numDetected)
        }).catch(err => {
            console.log(err)
        })

    camera.name = name;
    camera.cameraID = ID;
    camera.roomID = roomID;
    camera.numDetected = numDetected;
    return camera
}

export function GetMachine(id) {
    let Machine = {
        ID: 0,
        name: "",
        status: 0,
        roomID: 0
    }
    const [ID, setID] = useState(null);
    const [name, setName] = useState(null);
    const [roomID, setRoomID] = useState(null);
    const [status, setStatus] = useState(null);
    const getMachine = axios.get("http://localhost:3001/getMachine")
        .then(res => {
            setName(res.data[id - 1].Name)
            setID(res.data[id - 1].MachineID)
            setRoomID(res.data[id - 1].roomID)
            setStatus(res.data[id - 1].Status)
        }).catch(err => {
            console.log(err)
        })

    Machine.ID = ID;
    Machine.name = name;
    Machine.roomID = roomID;
    Machine.status = status;
    return Machine
}

export function GetPatient(id) {
    let patient = {
        ID: 0,
        FirstName: "",
        LastName: "",
        RFID: 0
    }
    const [ID, setID] = useState(null);
    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [RFID, setRFID] = useState(null);
    const getPatient = axios.get("http://localhost:3001/getPatient")
        .then(res => {
            setFirstName(res.data[id - 1].FirstName)
            setID(res.data[id - 1].PatientID)
            setLastName(res.data[id - 1].LastName)
            setRFID(res.data[id - 1].RFID)
        }).catch(err => {
            console.log(err)
        })

    patient.ID = ID;
    patient.FirstName = FirstName;
    patient.LastName = LastName;
    patient.RFID = RFID;
    return patient
}


export function GetRFIDHistory(id) {

    let History = [];
    let data = [];
    let getHistory = axios.get("http://localhost:3001/getRFIDHistory/" + id)
        .then(res => {
            data = res.data
        }).catch(err => {
            console.log(err)
        })
    History = data
    return History
}

export function GetMachineHistory(id) {

    var History = [];
    let data = [];
    let getHistory = axios.get("http://localhost:3001/getMachineHistory/" + id)
        .then(res => {
            data = res.data
        }).catch(err => {
            console.log(err)
        })
    History = data
    return History
}

export function GetBookings() {

    var History = [];
    let data = [];
    let getHistory = axios.get("http://localhost:3001/getBookings")
        .then(res => {
            data = res.data
        }).catch(err => {
            console.log(err)
        })
    History = data
    return History
}


export async function GetRoomStatus() {
    let RFID = null;
    let res = await axios.get('http://localhost:3001/getRoomStatus/');
    return res.data
    
}

export function GetStaff(RFID) {
    const [FullName, setName] = useState(null);
    let getHistory = axios.get("http://localhost:3001/getStaff/" + RFID)
        .then(res => {
            setName(res.data.FirstName + " " + res.data.LastName)
        }).catch(err => {
            console.log(err)
        })
    return FullName
}
