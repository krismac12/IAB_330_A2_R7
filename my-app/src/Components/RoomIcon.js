import React, { useState } from 'react';
import classes from "../css/roomIcon.module.css";
import { useEffect } from "react";
import RoomInfo from './RoomInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function RoomIcon(props) {
    const { x, y, inUse, roomCount } = props
    const [status, setStatus] = useState("#FF0000")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let roomName = "MRI 01"
    //Updates the colour of the room status to show if its in use or not
    useEffect(() => {
        setStatus(inUse ? "#D9FD00" : "#FF0000")
        console.log(status)


    }, [inUse])


    return (
        <div>
            <button style={{ left: x, top: y }} className={classes.room} onClick={handleShow}>
                {roomCount}
                <div style={{ backgroundColor: status }} className={classes.innerCircle}></div>

            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{roomName}</Modal.Title>
                </Modal.Header>
                <Modal.Body><RoomInfo></RoomInfo></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Book room
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}