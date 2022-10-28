import axios from "axios";

export async function GetRoom() {
    let res = await axios.get('/getRoom');
    return res.data
}

export async function GetCamera() {
    let res = await axios.get("/getCamera/")
    return res.data
}

export async function GetMachine(id) {

    let res = await axios.get("/getMachine")
    return res.data
}

export async function GetPatient(RFID) {
    let res = await axios.get('/getPatient/');
    return res.data
}




export async function GetRFIDHistory(id) {
    let res = await axios.get("/getRFIDHistory/" + id)
    return res.data
}

export async function GetMachineHistory(id) {
    let res = await axios.get("/getMachineHistory/" + id)
    return res.data
}

export async function GetBookings() {
    let res = await axios.get("/getBookings")
    return res.data
}


export async function GetRoomStatus() {
    let res = await axios.get('/getRoomStatus/');
    return res.data
    
}

export async function GetStaff(RFID) {
    let res = await axios.get('/getStaff/');
    return res.data
}
