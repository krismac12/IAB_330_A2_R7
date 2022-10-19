// import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import React, { useState } from 'react';
import getRoom from "./Server/mainfile";
import axios from "axios";

function App() {

  var roomName = getRoom();

  console.log(roomName)
  const [graphData, setGraphData] = useState([{ data: { type: 'bar', x: ["jan", "april", "july", "october"], y: [25, 61, 83, 28] }, title: "Overall Room Usage" }, { data: { type: 'bar', x: ["mon", "tue", "wed", "thur"], y: [44, 46, 55, 70] }, title: "Bookings Per Day" }])
  const [roomUsage, setRoomUsage] = useState("50")
  const [machineUsage, setMachineUsage] = useState("50")

  //The x and y is used to tell the app where the room is on the map
  const [roomStatus, setRoomStatus] = useState([{
    x:"50px",
    y:"30px",
    roomCount: 0,
    inUse: false,
    name: "MRI 01",
    inUseBy: null,
    timeInUse: null,
    bookedUntill: null,
    machines: [{ name: "MRI", inUse: false }]
  },
  {
    x:"140px",
    y:"30px",
    roomCount: 1,
    inUse: true,
    name: "MRI 02",
    inUseBy: roomName,
    timeInUse: "0070",
    bookedUntill: "0050",
    machines: [{ name: "MRI", inUse: true }]
  }
  ])

  //Finds room by name
  function findRoomByName(name){
    let index = 0;
    roomStatus.forEach(e => {
      if(e.name === name){
        return index
      }
      index++
    });
  }

  //NOTE
  //Below is two example of how to change the roomStatus 
  //NOTE

  //Used to change if a room is in use
  function setRoomUse(name, status) {
    let newRoomStatus = roomStatus;
    let roomID = findRoomByName(name)
    newRoomStatus[roomID].inUse = status
    setRoomStatus(newRoomStatus)
  }
  //Used to change the number of people in a room
  function setRoomCount(name, count) {
    let newRoomStatus = roomStatus;
    let roomID = findRoomByName(name)
    newRoomStatus[roomID].inUse = count
    setRoomStatus(newRoomStatus)
  }


  return (
    <Routes>
      <Route path="/" element={<HomePage graphData={graphData} roomStatus={roomStatus} roomUsage={roomUsage} machineUsage={machineUsage} />} />
      <Route path="/Map" element={<MapPage roomStatus={roomStatus} />} />
    </Routes>
  );
}

export default App;
