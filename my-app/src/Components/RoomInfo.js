import React from 'react';


export default function RoomInfo(props) {
  const { roomStatus } = props

  return (
    <div>
      <div className="grid-container">
        {roomStatus.inUse === true &&
          <>
            <p>Unavailable</p>
          </>
        }
        {roomStatus.inUse === false &&
          <p>This room is available!</p>
        }
        {roomStatus.machines.map((e, id) => (
          <p key={id}>{e.name + ": " + (e.inUse ? "Online" : "Offline")}</p>
        ))}
      </div>
    </div>
  );
}