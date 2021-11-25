import React from 'react'
import "./Styles/Featured.css"
import novel16 from "../Images/novel16.jpeg"
import novel17 from "../Images/novel17.jpeg"
import novel18 from "../Images/novel18.jpeg"
import novel19 from "../Images/novel19.jpeg"
import novel20 from "../Images/novel20.jpeg"
import novel21 from "../Images/novel21.jpeg"
import novel22 from "../Images/novel22.jpeg"


function Featured3() {
    const contents = [
        {
            image: novel16,
            title:"ISC Bio Class 12",
            origprice:"₹450",
            discountprice:"₹909",
            off:"50% off"
        },
        {
            image: novel17,
            title:"ISC Mathematics class 11",
            origprice:"₹450",
            discountprice:"₹909",
            off:"50% off"
        },
        {
            image: novel18,
            title:"ISC Chemistry Class 12",
            origprice:"₹570",
            discountprice:"₹1135",
            off:"50% off"
        },
        {
            image: novel19,
            title:"ISC Class 11 Math",
            origprice:"₹400",
            discountprice:"₹795",
            off:"50% off"
        },
        {
            image: novel20,
            title:"Nootan ISC Chemistry",
            origprice:"₹90",
            discountprice:"₹459",
            off:"50% off"
        },
        {
            image: novel21,
            title:"Oswaal ISC 10 Chemistry",
            origprice:"₹299",
            discountprice:"₹597",
            off:"50% off"
        },
        {
            image: novel22,
            title:"Educart ISC Term 1",
            origprice:"₹279",
            discountprice:"₹537",
            off:"50% off"
        },

    ]
    return (
        <div className="featured-comp">
            <h3 className="featured">ISC Board Picks</h3>
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

export default Featured3
