import React from 'react'
import "./Styles/Classes.css"

function Classes() {
    const content = [
        {
            class:9,
            text:"Class IX"
        },
        {
            class:10,
            text:"Class X"

        },
        {
            class:11,
            text:"Class XI"
        },
        {
            class:12,
            text:"Class XII"
        },
        {
            class:"1-8",
            text:"Class 1-8"
        },
        {
            class:"IIT",
            text:"IIT-JEE",
        },
        {
            class:"NEET",
            text:"NEET"
        },
        {
            class:"ICSE",
            text:"ICSE"
        },
        {
            class:"GOVT EXAM",
            text:"GOVT EXAM"
        },
        {
            class:"ENG.",
            text:"ENG"
        },

    ]
    return (
        <div className="class-comp">
            <div className="contents">
                {
                    content.map((item,index) => (
                        <div className="box-1" key={index}>
                            <div className="inner-box">
                                {item.class}
                            </div>
                            <p className="subtitle">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Classes
