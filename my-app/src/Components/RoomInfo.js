import React, { useState } from 'react';


export default function RoomInfo() {
 let inUseBy = "John doe"
 let timeInUse = "0030"
 let bookedUntill = "1200"
 let machines = [{inUse: true}]
  return (
    <div>
      <div className="grid-container">
        <p>In use by: {inUseBy}</p>
        <p>Time in use: {timeInUse}</p>
        <p>Booked untill: {bookedUntill}</p>
        <p>Machine 1: {machines[0].inUse ? "In use 0015": "Online"}</p>
      </div>
    </div>
  );
}