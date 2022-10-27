import React from "react";

import tickBox from '../Assets/ticked-box.svg'
import crossedBox from '../Assets/crossed-box.svg'

export default function ToomsTableItem(props) {
    const { roomName, inUse } = props
    return (
        <div style={{ display: "grid", gridTemplateColumns: "85% 15%"}}>
            {roomName}
            {inUse ? <img src={crossedBox} alt={crossedBox}></img> : <img src={tickBox} alt={tickBox}></img>}
        </div>
    )
}