import React, { useState }  from 'react';
import classes from "../css/roomIcon.module.css";
import { useEffect } from "react";

export default function RoomIcon(props) {
    const { x, y, inUse,roomCount } = props
    const [status,setStatus] = useState("#FF0000")

    //Updates the colour of the room status to show if its in use or not
    useEffect(() => {
        setStatus(inUse ? "#D9FD00" : "#FF0000")
        console.log(status)


    }, [inUse])


    return (
        <div>
            <button style={{ left: x, top: y }} className={classes.room}>
                {roomCount}
                <div style={{backgroundColor: status }} className={classes.innerCircle}></div>

            </button>

        </div>
    )
}