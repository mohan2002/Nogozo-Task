import React, { useState } from 'react'
import "./Styles/Banner.css"
import logo from "../Images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="banner-comp">
           <div className="carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item interval={4000}>
                        <div className="one">
                            <div className="demo1">
                                <h1 className="hd-1">SELL YOUR BOOKS & EARN MONEY</h1>
                                <h2 className="hd">PICKUP FROM HOME</h2>
                                <button className="btn-2">CLICK HERE</button>

                            </div>
                            <div className="demo2">
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="two">
                            <div className="demo3">
                                <h1 className="hd-1">TEXT BOOKS</h1>
                                <h2 className="hd">MATHS</h2>
                                <h3 className="hd">CLASS X</h3>
                                <button className="btn-3">NOGOZO</button>
                            </div>
                            <div className="demo4">

                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <div className="three">
                            <div className="demo5">
                                <h1 className="hd-1">ACCOUNTANCY</h1>
                                <h1 className="hd-1">CLASS 11</h1>
                                <button className="btn-3">BUY NOW !</button>
                            </div>
                            <div className="demo6">

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
           </div>
        </div>
    )
}

export default Banner
