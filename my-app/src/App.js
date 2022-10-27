// import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GetRoom, GetCamera, GetMachine, GetPatient, GetRFIDHistory, GetMachineHistory, GetBookings, GetRoomStatus, GetStaff } from "./Server/mainfile"


var count = 0;
var count2 = 0;

function getStaffName(RFID) {
  let staff = null
  staff = GetStaff(RFID)

  return staff;
}
function getUsage(History, date) {
  var roomUsage = 0;
  var hours = [];
  for (let i = 0; i < History.length; i++) {

    let d2 = new Date(date)
    const d1 = new Date(History[i].Timestamp)
    let year1 = d1.getFullYear()
    let month1 = d1.getMonth()
    let day1 = d1.getDate();
    let year2 = d2.getFullYear()
    let month2 = d2.getMonth()
    let day2 = d2.getDate();
    let hour = d1.getHours();

    if (year1 === year2 &&
      month1 === month2 &&
      day1 === day2) {
      if (!hours.includes(hour)) {
        hours.push(hour)
      }
    }
  }
  roomUsage = Math.round(hours.length / 24 * 100)
  return roomUsage

}

function getBookingNO(History, date) {
  var bookings = 0;
  for (let i = 0; i < History.length; i++) {

    let d2 = new Date(date)
    const d1 = new Date(History[i].Timestamp)
    let year1 = d1.getFullYear()
    let month1 = d1.getMonth()
    let day1 = d1.getDate();
    let year2 = d2.getFullYear()
    let month2 = d2.getMonth()
    let day2 = d2.getDate();
    let hour = d1.getHours();

    if (year1 === year2 &&
      month1 === month2 &&
      day1 === day2) {
      bookings++
    }
  }
  return bookings
}




function App() {
  var yesterday = new Date();
  var twoDaysAgo = new Date();
  var today = new Date();


  yesterday.setDate(yesterday.getDate() - 1);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  today.setDate(today.getDate());

  const [isLoading, setLoading] = useState('');
  const [graphData, setGraphData] = useState([{ data: { type: 'bar', x: [twoDaysAgo.getDate() + "/" + (twoDaysAgo.getMonth() + 1), yesterday.getDate() + "/" + (yesterday.getMonth() + 1), today.getDate() + "/" + (today.getUTCMonth() + 1)], y: [25, 61, 83] }, title: "Overall Room Usage" }, { data: { type: 'bar', x: ["mon", "tue", "wed", "thur"], y: [44, 46, 55, 70] }, title: "Bookings Per Day" }])
  const [roomUsage, setRoomUsage] = useState("50")
  const [machineUsage, setMachineUsage] = useState("50")

  //The x and y is used to tell the app where the room is on the map
  const [roomStatus, setRoomStatus] = useState([{}])
  //Finds room by name
  function FindRoomByName(name) {
    for (let i = 0; i < roomStatus.length; i++) {
      if (roomStatus[i].name == name) {
        return i
      }

    }
    return null
  }


  //NOTE
  //Below is two example of how to change the roomStatus 
  //NOTE

  //Used to change if a room is in use
  function setRoomUse(name, status, staff) {
    let newRoomStatus = JSON.parse(JSON.stringify(roomStatus))
    let roomID = FindRoomByName(name)
    if (roomID === null) {
      return
    }
    if (count2 < 5) {
      newRoomStatus[roomID].inUse = status
      newRoomStatus[roomID].inUseBy = staff
      setRoomStatus(newRoomStatus)
    }
    count2++
  }
  //Used to change the number of people in a room
  function setRoomCount(name, count) {
    let newRoomStatus = JSON.parse(JSON.stringify(roomStatus))
    let roomID = FindRoomByName(name)
    if (roomID === null) {
      return
    }
    newRoomStatus[roomID].inUse = count
    setRoomStatus(newRoomStatus)
  }

  //Used to change the number of people in a room
  function setRoomName(name, newName) {
    let newRoomStatus = JSON.parse(JSON.stringify(roomStatus))
    let roomID = FindRoomByName(name)
    if (roomID === null) {
      return
    }
    newRoomStatus[roomID].name = newName
    setRoomStatus(newRoomStatus)
  }

  // Function to set graph data machine usage and room usage
  function SetData(graphData, roomUsage, machineUsage) {
    count++
    if (count < 5) {
      setGraphData(graphData)
      setRoomUsage(roomUsage)
      setMachineUsage(machineUsage)
    }

  }

  let roomPos = [{ x: "50px", y: "30px" }, { x: "140px", y: "30px" }, { x: "200px", y: "160px" }]
  const [count, setCount] = useState(0);
  // setInterval(() => {
  //   setCount(count + 1);
  // }, 100000);
  const [time, setTime] = useState(Date.now());

  //console.log(await GetRoomee())
  useEffect(() => {
    async function fetchData() {
      console.log('Interval triggered');
      let roomStorage = [];

      let roomNames = await GetRoom();

      let inUse = await GetRoomStatus()
      console.log(roomNames)
      //Adds 
      let i = 0;
      roomNames.forEach(e => {
        roomStorage.push({ x: roomPos[i].x, y: roomPos[i].y, roomCount: 1, inUse: false, name: e.name, inUseBy: null, machines: [] })
        i++
      });

      inUse.forEach(e => {
        roomStorage[e.roomID - 1].inUse = true
      });
      setRoomStatus(roomStorage)
    }    
    const interval = setInterval(() => {
      fetchData();
    }, 4000);
    
    // let roomName1 = null;
    // roomName1 = GetRoom(1)

    // if (roomName1 !== "") {
    //   setRoomName("MRI 01", roomName1)
    // }


    //setRoomUse(roomName1,room1status,staff)


    // let roomName2 = null;
    // roomName2 = GetRoom(2)
    // if (roomName2 !== "") {
    //   setRoomName("MRI 02", roomName2)
    // }

    // let room1History = GetRFIDHistory(1)
    // var room1Usage1 = 0;
    // var room1Usage2 = 0;
    // var room1Usage3 = 0;
    // if (room1History.length != 0) {
    //   room1Usage1 = getUsage(room1History, twoDaysAgo)
    //   room1Usage2 = getUsage(room1History, yesterday)
    //   room1Usage3 = getUsage(room1History, today)

    // }

    // let room2History = GetRFIDHistory(2);
    // var room2Usage1 = 0;
    // var room2Usage2 = 0;
    // var room2Usage3 = 0;
    // if (room2History.length != 0) {
    //   room2Usage1 = getUsage(room2History, twoDaysAgo)
    //   room2Usage2 = getUsage(room2History, yesterday)
    //   room2Usage3 = getUsage(room2History, today)
    // }

    // let room3History = GetRFIDHistory(2);
    // var room3Usage1 = 0;
    // var room3Usage2 = 0;
    // var room3Usage3 = 0;
    // if (room3History.length != 0) {
    //   room3Usage1 = getUsage(room3History, twoDaysAgo)
    //   room3Usage2 = getUsage(room3History, yesterday)
    //   room3Usage3 = getUsage(room3History, today)
    // }



    // let machine1History = GetMachineHistory(1)
    // var machine1Usage = 0;

    // if (machine1History.length != 0) {
    //   machine1Usage = getUsage(machine1History, today)

    // }

    // let machine2History = GetMachineHistory(2)
    // var machine2Usage = 0;

    // if (machine2History.length != 0) {
    //   machine2Usage = getUsage(machine2History, today)

    // }

    // let machine3History = GetMachineHistory(1)
    // var machine3Usage = 0;

    // if (machine3History.length != 0) {
    //   machine3Usage = getUsage(machine3History, today)

    // }


    // let rfid1 = GetRoomStatus(1)
    // console.log(rfid1)
    // if (rfid1 != null || rfid1 != undefined) {
    //   let roomstatus = true;
    //   setRoomUse(roomName1, roomstatus)
    // }

    // let rfid2 = GetRoomStatus(2)
    // console.log(rfid1)
    // if (rfid2 != null || rfid2 != undefined) {
    //   let roomstatus = true;
    //   setRoomUse(roomName2, roomstatus)
    // }





    // var RFIDHistory = GetBookings()

    // if (RFIDHistory.length != 0) {
    //   var roomUsage1 = Math.round((room1Usage1 + room2Usage1 + room3Usage1) / 3)
    //   var roomUsage2 = Math.round((room1Usage2 + room2Usage2 + room3Usage2) / 3)
    //   var roomUsage3 = Math.round((room1Usage3 + room2Usage3 + room3Usage3) / 3)
    //   var MachineUsage = Math.round((machine1Usage + machine2Usage + machine3Usage) / 3)
    //   var NoBookings1 = getBookingNO(RFIDHistory, twoDaysAgo)
    //   var NoBookings2 = getBookingNO(RFIDHistory, yesterday)
    //   var NoBookings3 = getBookingNO(RFIDHistory, today)

    //   let graphData = [{ data: { type: 'bar', x: [twoDaysAgo.getDate() + "/" + (twoDaysAgo.getMonth() + 1), yesterday.getDate() + "/" + (yesterday.getMonth() + 1), today.getDate() + "/" + (today.getUTCMonth() + 1)], y: [roomUsage1, roomUsage2, roomUsage3] }, title: "Overall Room Usage" }, {
    //     data: {
    //       type: 'bar', x:
    //         [twoDaysAgo.getDate() + "/" + (twoDaysAgo.getMonth() + 1), yesterday.getDate() + "/" + (yesterday.getMonth() + 1), today.getDate() + "/" + (today.getUTCMonth() + 1)], y: [NoBookings1, NoBookings2, NoBookings3]
    //     }, title: "Bookings Per Day"
    //   }]
    //   SetData(graphData, roomUsage3, MachineUsage)
    //}
    return () => {
      clearInterval(interval);
    };
  }, [])


  // }, 20000);
  return (
    <Routes>
      <Route path="/" element={<HomePage graphData={graphData} roomStatus={roomStatus} roomUsage={roomUsage} machineUsage={machineUsage} />} />
      <Route path="/Map" element={<MapPage roomStatus={roomStatus} />} />
    </Routes>
  );
}

export default App;