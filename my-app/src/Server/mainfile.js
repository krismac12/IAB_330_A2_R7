import axios from "axios";
import React, { useState, useEffect} from 'react';


export default  function GetRoom(id){
    const[roomName , setRoomName] = useState('');
    const getRoom =  axios.get("http://localhost:3001/getRoom")
    .then(res => {
        setRoomName(res.data.name)
    }).catch(err => {
        console.log(err)
    })

    return roomName
  }
