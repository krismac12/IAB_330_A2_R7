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

export async function GetPatient(RFID) {
    let res = await axios.get('http://localhost:3001/getPatient/');
    return res.data
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

export async function GetStaff(RFID) {
    let res = await axios.get('http://localhost:3001/getStaff/');
    return res.data
}
