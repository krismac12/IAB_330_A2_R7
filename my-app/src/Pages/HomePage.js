import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Components/graphSlider/Slider';
import classes from '../css/homePage.module.css'
import '../css/test.css'
import RoomTableItem from '../Components/RoomsTableItem'
export default function HomePage(props) {
    const {graphData,roomStatus,roomUsage,machineUsage} = props


    return (
        <div className={classes.layout}>

            {/* Header */}
            <div className="grid-container">
                <div className={classes.header}>
                    <b>Hospital Dashboard</b>
                </div>

                 {/* Alerts */}
                <div className={classes.card} >
                    <div style={{ lineHeight: 2 }}>
                        <b>Alerts</b>
                        <div style={{ display: "grid", gridTemplateRows: "100% 100%", marginBottom: "30px", height: "30px" }}>
                            <div>
                                {"Room usage: " + roomUsage + "%"}

                            </div>
                            <div>
                                {"Machine usage: " + machineUsage + "%"}
                            </div>

                        </div>
                    </div>
                </div>

                 {/* Graphs */}
                <div className={classes.card}>
                    <b>Statistics</b>
                    <div style={{ height: "230px", overflow: 'hidden' }} >
                        <Slider graphData = {graphData}></Slider>
                    </div>
                </div>

                {/* Rooms list */}
                <div className={classes.card} style={{ height: "253px", overflowY: "scroll" }}>
                    <b>Rooms</b>
                    <div className={classes.roomCard}>
                        {roomStatus.map((e,id) => (
                            <RoomTableItem key={id} roomName={e.name} inUse={e.inUse}></RoomTableItem>
                        ))}

                    </div>
                </div>

                 {/* Nav bar */}
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