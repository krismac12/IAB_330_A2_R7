import React from 'react';
import classes from "../css/mappage.module.css";
import mapBackgroud from '../Assets/map.png'
import homeButton from '../Assets/Home.png'
import filterButton from '../Assets/filter-add.svg'
import RoomIcon from '../Components/RoomIcon';
import { Link } from 'react-router-dom';
//className={classes.UserText}
export default function MapPage(props) {
    const { roomStatus } = props


    return (
        <div className={classes.layout}>
            <div className="grid-container">
                <div>
                    {roomStatus.map((e, id) => (
                        <RoomIcon key={id} x={e.x} y={e.y} roomStatus={e}></RoomIcon>
                    ))}

                    <img src={mapBackgroud} alt={mapBackgroud}></img>
                </div>
                <div className={classes.navBar}>
                    <Link to={"/"}>
                        <button style={{ marginRight: "52%" }} className={classes.button}><img className={classes.buttonIcon} src={homeButton} alt={homeButton} ></img></button>
                    </Link>
                    <button className={classes.button}><img className={classes.buttonIcon} src={filterButton} alt={filterButton}></img></button>
                </div>
            </div>
        </div >
    )
}