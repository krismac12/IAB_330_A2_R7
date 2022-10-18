import axios from "axios";
import React, { useState } from 'react';



export default function getRoom()
{
        const roomName = null;
        axios.get("https://random-data-api.com/api/v2/users?size=2&is_xml=true")
        .then(res => {
            console.log(res)
            console.log(res.data[0].first_name)
            roomName = res.data[0].first_name
        }).catch(err => {
            console.log(err)
        })

    console.log(roomName);
    return roomName;
}