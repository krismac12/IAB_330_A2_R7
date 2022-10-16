import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Components/graphSlider/Slider';
import classes from '../css/homePage.module.css'
import '../css/test.css'

export default function HomePage() {
    // const [slideStyle, setSlideStyle] = useState([{style:{display:"none"}},{style:{display:"none"}}])

    // const [slideIndex,setSlideIndex] = useState(1);
    // showSlides(slideIndex);
    // function plusSlides(n) {
    //     showSlides(setSlideIndex(slideIndex + n));
    // }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     let i;
    //     let slides = JSON.parse(JSON.stringify(slideStyle));
    //     if (n > slides.length) { setSlideIndex(1) }
    //     if (n < 1) { setSlideIndex(slides.length) }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }

    //     slides[slideIndex - 1].style.display = "block";
    //     setSlideStyle(slides)
    // }

    return (
        // <div>
        //     <Link to={"/Map"}>
        //         <button style={{height:"50px"}}>To map view</button>
        //     </Link>

        // </div>
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
                    <div style={{ height: "240px" }} >
                        <Slider ></Slider>
                    </div>

                </div>

                <div className={classes.card} style={{ height: "185px", overflowY: "scroll" }}>
                    <b>Rooms</b>
                    <p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p><p>asdfa</p>
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