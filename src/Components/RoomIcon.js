import React, { useState, useEffect } from 'react';
import classes from "../css/roomIcon.module.css";
import RoomInfo from './RoomInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function RoomIcon(props) {
    const { roomStatus, x, y } = props
    const [status, setStatus] = useState("#FF0000")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Updates the colour of the room status to show if its in use or not
    useEffect(() => {
        setStatus(roomStatus.inUse ? "#FF0000" : "#D9FD00")
    }, [roomStatus.inUse])


    return (
        <div>
            <button style={{ left: x, top: y }} className={classes.room} onClick={handleShow}>
                {roomStatus.roomCount}
                <div style={{ backgroundColor: status }} className={classes.innerCircle}></div>

            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{roomStatus.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RoomInfo roomStatus={roomStatus}></RoomInfo>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Book room
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}