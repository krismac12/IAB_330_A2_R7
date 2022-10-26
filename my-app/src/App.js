// import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GetRoom, GetCamera,GetMachine, GetPatient, GetRFIDHistory } from "./Server/mainfile"


let roomNames = [];
var count = 0;
function getRoomUsage(History,date){
    var roomUsage = 0;
    var hours = [];
    for(let i = 0; i < History.length;i++){

      let d2 = new Date(date)
      const d1 = new Date(History[i].Timestamp)
      let year1 = d1.getFullYear()
      let month1 = d1.getMonth()
      let day1 = d1.getDate();
      let year2 = d2.getFullYear()
      let month2 = d2.getMonth()
      let day2 = d2.getDate();
      let hour = d1.getHours();
      
      if(year1 === year2 &&
      month1 === month2 &&
      day1 === day2){
        if(!hours.includes(hour)){
          hours.push(hour)
        }
      }
    }
    roomUsage = Math.round(hours.length / 24 * 100)
    return roomUsage

}

function App() {
  var yesterday = new Date();
  var twoDaysAgo = new Date();
  var today = new Date();


  yesterday.setDate(yesterday.getDate() - 1);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  today.setDate(today.getDate());

  const [isLoading, setLoading] = useState('');
  const [graphData, setGraphData] = useState([{ data: { type: 'bar', x: [twoDaysAgo.getDate() + "/" + (twoDaysAgo.getMonth()+1), yesterday.getDate() + "/" + (yesterday.getMonth()+1), today.getDate() + "/" + (today.getUTCMonth()+1)], y: [25, 61, 83] }, title: "Overall Room Usage" }, { data: { type: 'bar', x: ["mon", "tue", "wed", "thur"], y: [44, 46, 55, 70] }, title: "Bookings Per Day" }])
  const [roomUsage, setRoomUsage] = useState("50")
  const [machineUsage, setMachineUsage] = useState("50")

  //The x and y is used to tell the app where the room is on the map
  const [roomStatus, setRoomStatus] = useState([{
    x: "50px",
    y: "30px",
    roomCount: 0,
    inUse: false,
    name: "MRI 01",
    inUseBy: null,
    timeInUse: null,
    bookedUntill: null,
    machines: [{ name: "MRI", inUse: false }]
  },
  {
    x: "140px",
    y: "30px",
    roomCount: 1,
    inUse: true,
    name: "MRI 02",
    inUseBy: "Jack brown",
    timeInUse: "0070",
    bookedUntill: "0050",
    machines: [{ name: "MRI", inUse: true }]
  }
  ])
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
  function setRoomUse(name, status) {
    let newRoomStatus = JSON.parse(JSON.stringify(roomStatus))
    let roomID = FindRoomByName(name)
    if (roomID === null) {
      return
    }
    newRoomStatus[roomID].inUse = status
    setRoomStatus(newRoomStatus)
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
  let roomName1 = null;
  roomName1 = GetRoom(1)
  console.log(roomName1)
  
  if (roomName1 !== "") {
    setRoomName("MRI 01" ,  roomName1)
  }

  let roomName2 = null;
  roomName2 = GetRoom(2)
  if (roomName2 !== "") {
    setRoomName("MRI 02" ,  roomName2)
  }


  let room1History = GetRFIDHistory(1);
  var room1Usage1 = 0;
  var room1Usage2 = 0;
  var room1Usage3 = 0;
  if(room1History.length != 0){
    room1Usage1 = getRoomUsage(room1History,twoDaysAgo)
    room1Usage2 = getRoomUsage(room1History,yesterday)
    room1Usage3 = getRoomUsage(room1History,today)
    
  }

  let room2History = GetRFIDHistory(2);
  var room2Usage1 = 0;
  var room2Usage2 = 0;
  var room2Usage3 = 0;
  if(room2History.length != 0){
    room2Usage1 = getRoomUsage(room2History,twoDaysAgo)
    room2Usage2 = getRoomUsage(room2History,yesterday)
    room2Usage3 = getRoomUsage(room2History,today)
  }

  let room3History = GetRFIDHistory(2);
  var room3Usage1 = 0;
  var room3Usage2 = 0;
  var room3Usage3 = 0;
  if(room3History.length != 0){
    room3Usage1 = getRoomUsage(room3History,twoDaysAgo)
    room3Usage2 = getRoomUsage(room3History,yesterday)
    room3Usage3 = getRoomUsage(room3History,today)
  }


  function SetData(graphData,roomUsage){
    count++
    if(count < 5)
    {
      setGraphData(graphData)
      setRoomUsage(roomUsage)
    }

  }


  if(room3History.length != 0 && count < 100)
  {
    var Usage1 = Math.round((room1Usage1 + room2Usage1 + room3Usage1)/3)
    var Usage2 = Math.round((room1Usage2 + room2Usage2 + room3Usage2)/3)
    var Usage3 = Math.round((room1Usage3 + room2Usage3 + room3Usage3)/3)
    let graphData = [{ data: { type: 'bar', x: [twoDaysAgo.getDate() + "/" + (twoDaysAgo.getMonth()+1), yesterday.getDate() + "/" + (yesterday.getMonth()+1), today.getDate() + "/" + (today.getUTCMonth()+1)], y: [Usage1, Usage2, Usage3] }, title: "Overall Room Usage" }, { data: { type: 'bar', x: ["mon", "tue", "wed", "thur"], y: [44, 46, 55, 70] }, title: "Bookings Per Day" }]
    SetData(graphData,Usage3)
    console.log("test")
  }


  let Patient = GetPatient(1);

  if(Patient.FirstName != null)
  {
    console.log(Patient)
  }  
  return (
    <Routes>
      <Route path="/" element={<HomePage graphData={graphData} roomStatus={roomStatus} roomUsage={roomUsage} machineUsage={machineUsage} />} />
      <Route path="/Map" element={<MapPage roomStatus={roomStatus} />} />
    </Routes>
  );
}

export default App;