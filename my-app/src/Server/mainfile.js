import axios from "axios";
import React, { useState, useEffect} from 'react';


export  function GetRoom(id){
    const[roomName , setRoomName] = useState('');
    const getRoom =  axios.get("http://localhost:3001/getRoom")
    .then(res => {
        setRoomName(res.data[id-1].name)
    }).catch(err => {
        console.log(err)
    })

    return new Promise((resolve, reject) => {
        if (true) {
          resolve(roomName);
        } else {
          reject("Promise rejected");
        }
      });
  }

  export  function GetCameraName(id){
    const[name , setName] = useState(null);
    const getCamera =  axios.get("http://localhost:3001/getCamera")
    .then(res => {
        setName(res.data[id-1].name)
    }).catch(err => {
        console.log(err)
    })

    return name
  }