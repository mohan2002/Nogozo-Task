import React from 'react'
import "./Styles/Novels.css"
import rom from "../Images/romanve.jpg"
import fantasy from "../Images/fantasy.jpg"
import scifi from "../Images/scifi.jpg"
import thriller from "../Images/thriller.jpg"

function Novels() {
    return (
        <div className="novels-comp">
            <div className="novel-content">
                <h3 className="hd1">Novels for you</h3>
                <div className="bg">

                    <img src={rom} alt="roman" className="images"/>
                    <img src={fantasy} alt="roman" className="images"/>
                    <img src={scifi} alt="roman" className="images"/>
                    <img src={thriller} alt="roman" className="images"/>


                </div>
            </div>
        </div>
    )
}

export default Novels
