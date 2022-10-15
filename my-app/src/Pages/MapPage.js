import React, { useState } from 'react';
import classes from "../css/mappage.module.css";
import mapBackgroud from '../Assets/map.png'
import homeButton from '../Assets/Home.png'
import filterButton from '../Assets/filter-add.svg'
import RoomIcon from '../Components/RoomIcon';
import { Link } from 'react-router-dom';
//className={classes.UserText}
export default function MapPage() {
    let [roomStatus, setRoomStatus] = useState([{
        roomCount: 0,
        inUse: false
    },
    {
        roomCount: 1,
        inUse: true
    }
    ])

    //Used to change if a room is in use
    function setRoomUse(roomID, status) {
        let newRoomStatus = roomStatus;
        newRoomStatus[roomID].inUse = status
        setRoomStatus(newRoomStatus)
    }
    //Used to change the number of people in a room
    function setRoomCount(roomID, count) {
        let newRoomStatus = roomStatus;
        newRoomStatus[roomID].inUse = count
        setRoomStatus(newRoomStatus)
    }

    return (
        <div className={classes.layout}>
            <div className="grid-container">
                <div>
                    <RoomIcon x={"50px"} y={"30px"} inUse={false} roomCount={roomStatus[0].roomCount}></RoomIcon>
                    <RoomIcon x={"140px"} y={"30px"} inUse={roomStatus[1].inUse} roomCount={roomStatus[1].roomCount}></RoomIcon>

                    <img src={mapBackgroud}></img>
                </div>
                <div className={classes.navBar}>
                    <Link to={"/"}>
                        <button style={{ marginRight: "52%" }} className={classes.button}><img className={classes.buttonIcon} src={homeButton} ></img></button>
                    </Link>
                    <button className={classes.button}><img className={classes.buttonIcon} src={filterButton} ></img></button>
                </div>
            </div>
        </div >
    )
}