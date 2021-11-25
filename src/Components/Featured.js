import React from 'react'
import "./Styles/Featured.css"
import novel6 from "../Images/novel6.jpg"
import novel1 from "../Images/novel1.jpg"
import novel2 from "../Images/novel2.jpg"
import novel3 from "../Images/novel3.jpg"
import novel4 from "../Images/novel4.jpg"
import novel5 from "../Images/novel5.jpg"
function Featured() {
    const contents = [
        {
            image: novel6,
            title:"The Last of the Mohicans",
            origprice:"₹240",
            discountprice:"₹400",
            off:"50% off"
        },
        {
            image: novel1,
            title:"Harry potter & cursed",
            origprice:"₹449",
            discountprice:"₹899",
            off:"50% off"
        },
        {
            image: novel2,
            title:"Dollar Bahu",
            origprice:"₹150",
            discountprice:"₹250",
            off:"40% off"
        },
        {
            image: novel3,
            title:"Will you still love me",
            origprice:"₹139",
            discountprice:"₹199",
            off:"30% off"
        },
        {
            image: novel4,
            title:"Hyperfocus",
            origprice:"₹250",
            discountprice:"₹1299",
            off:"81% off"
        },
        {
            image: novel5,
            title:"Sapiens A brief",
            origprice:"₹299",
            discountprice:"₹599",
            off:"50% off"
        }
    ]
    return (
        <div className="featured-comp">
            <h3 className="featured">Featured Novels</h3>
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

export default Featured
