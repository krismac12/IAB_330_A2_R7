import axios from "axios";
import React, { useState } from 'react';


export default   function GetRoom(id){
    const[roomName , setRoomName] = useState('');
    axios.get("http://localhost:3001/getRoom")
    .then(res => {
        setRoomName(res.data.name)
        
    }).catch(err => {
        console.log(err)
    })
    return roomName
  }
