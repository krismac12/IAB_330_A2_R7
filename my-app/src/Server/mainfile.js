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

export async function GetCamera() {
    let res = await axios.get("http://localhost:3001/getCamera/")
    return res.data
}

export async function GetMachine(id) {

    let res = await axios.get("http://localhost:3001/getMachine")
    return res.data
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




export async function GetRFIDHistory(id) {
    let res = await axios.get("http://localhost:3001/getRFIDHistory/" + id)
    return res.data
}

export async function GetMachineHistory(id) {
    let res = await axios.get("http://localhost:3001/getMachineHistory/" + id)
    return res.data
}

export async function GetBookings() {
    let res = await axios.get("http://localhost:3001/getBookings")
    return res.data
}


export async function GetRoomStatus() {
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
