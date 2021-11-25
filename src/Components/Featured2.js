import React from 'react'
import "./Styles/Featured.css"
import novel7 from "../Images/novel7.jpeg"
import novel8 from "../Images/novel8.jpeg"
import novel9 from "../Images/novel9.jpeg"
import novel10 from "../Images/novel10.jpeg"
import novel11 from "../Images/novel11.jpeg"
import novel12 from "../Images/novel12.jpeg"
import novel13 from "../Images/novel13.jpeg"
import novel14 from "../Images/novel14.jpeg"
import novel15 from "../Images/novel15.jpeg"

function Featured2() {
    const contents = [
        {
            image: novel7,
            title:"Oswaal CBSE 10 Economics",
            origprice:"₹99",
            discountprice:"₹199",
            off:"50% off"
        },
        {
            image: novel8,
            title:"Oswaal CBSE 10 QP",
            origprice:"₹90",
            discountprice:"₹179",
            off:"50% off"
        },
        {
            image: novel9,
            title:"Oswaal CBSE 10 Bio",
            origprice:"₹90",
            discountprice:"₹179",
            off:"50% off"
        },
        {
            image: novel10,
            title:"Oswaal CBSE 10 Sci",
            origprice:"₹90",
            discountprice:"₹179",
            off:"50% off"
        },
        {
            image: novel11,
            title:"Oswaal CBSE 10 Math",
            origprice:"₹90",
            discountprice:"₹199",
            off:"50% off"
        },
        {
            image: novel12,
            title:"Oswaal CBSE 10 MCQ",
            origprice:"₹299",
            discountprice:"₹597",
            off:"50% off"
        },
        {
            image: novel13,
            title:"Educart CBSE Term 1",
            origprice:"₹279",
            discountprice:"₹537",
            off:"50% off"
        },
        {
            image: novel14,
            title:"Mastermind CBSE",
            origprice:"₹200",
            discountprice:"₹395",
            off:"50% off"
        }
    ]
    return (
        <div className="featured-comp">
            <h3 className="featured">Term 1 Exams 2021</h3>
            <div className="featured-content">
                
                {
                    contents.map((content,index)=>(
                        <div className="featured-boxes">
                            <div className="featured-box1">
                                <img className="image2" src={content.image}/>
                            </div>
                            <div className="featured-box2">
                                <h4 className="title">{content.title}</h4>
                                <div className="price">
                                    <p className="orig-price">{content.origprice}</p>
                                    <p className="discount">{content.discountprice}</p>
                                </div>
                                <p className="per">{content.off}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Featured2
