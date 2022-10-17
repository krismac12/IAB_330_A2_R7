import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Components/graphSlider/Slider';
import classes from '../css/homePage.module.css'
import '../css/test.css'

export default function HomePage() {

    return (
        <div className={classes.layout}>
            <div className="grid-container">
                <div className={classes.header}>
                    <b>Hospital DashBoard</b>
                </div>
                <div className={classes.card} >
                    <div style={{ lineHeight: 2 }}>
                        <b>Alerts</b>
                        <p>Room usage</p>
                        <p>Machine usage</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <b>Statistics</b>
                    <div style={{ overflow: 'hidden' }} >
                        <Slider ></Slider>
                    </div>

                </div>

                <div className={classes.card} style={{ height: "185px", overflowY: "scroll" }}>                        
                <b>Rooms</b>

                    <div className={classes.roomCard}>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
                        <p>asdfa</p>
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