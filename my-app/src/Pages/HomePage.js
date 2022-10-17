import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Components/graphSlider/Slider';
import classes from '../css/homePage.module.css'
import '../css/test.css'
import RoomTableItem from '../Components/RoomsTableItem'
export default function HomePage() {
    const [roomDetails, setRoomDetails] = useState( [{ Name: "default", inUse: false }])
    return (
        <div className={classes.layout}>
            <div className="grid-container">
                <div className={classes.header}>
                    <b>Hospital Dashboard</b>
                </div>
                <div className={classes.card} >
                    <div style={{ lineHeight: 2 }}>
                        <b>Alerts</b>
                        <div style={{ display: "grid", gridTemplateRows: "100% 100%", marginBottom: "30px", height: "30px" }}>
                            <text>Room usage:</text>
                            <text>Machine usage:</text>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <b>Statistics</b>
                    <div style={{ height: "230px", overflow: 'hidden' }} >
                        <Slider ></Slider>
                    </div>

                </div>

                <div className={classes.card} style={{ height: "253px", overflowY: "scroll" }}>
                    <b>Rooms</b>
                    <div className={classes.roomCard}>
                        {roomDetails.map((e) => (
                            <RoomTableItem roomName={e.Name} inUse={e.inUse}></RoomTableItem>
                        ))}

                    </div>
                </div>
                <div className={classes.navBar}>
                    <Link to={"/Map"}>
                        <button style={{ width: "140px", marginRight: "38%" }} className={classes.button}>Map view</button>
                    </Link>
                    <button className={classes.button}>Config</button>
                </div>
            </div>
        </div >
    )
}