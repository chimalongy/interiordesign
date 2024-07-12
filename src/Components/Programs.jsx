import React from 'react'
import "../Styles/Programs.css"
import program_1 from '../assets/program-1.png'
import program_2 from '../assets/program-2.png'
import program_3 from '../assets/program-3.png'
import program_4 from '../assets/program-4.png'
import program_icon_1 from "../assets/program-icon-1.png"
import program_icon_2 from "../assets/program-icon-2.png"
import program_icon_3 from "../assets/program-icon-3.png"
import program_icon_4 from "../assets/program-icon-4.png"
import white_arrow from "../assets/white-arrow.png"
function Programs() {
  return (
    <div>
        <div className='programs' id="Programs">
        <div className="program">
            <div className='servicelable'>
             INTERIOR AND EXTERIOR DESIGN
            </div>
            <img src={program_1} alt="" />
            <div className="caption">

                <img src={program_icon_1} alt="" />
                <p>INTERIOR AND EXTERIOR DESIGN</p>
            </div>
        </div>
        
        <div className="program">
        <div className='servicelable'>
             Wood Cladding
            </div>
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>WOOD CLADDING</p>
            </div>
        </div>
        <div className="program">
        <div className='servicelable'>
             lighting
            </div>
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>LIGTHING</p>
            </div>
        </div>
        <div className="program">
        <div className='servicelable'>
        TILE FLOORING AND DESIGN
            </div>
            <img src={program_4} alt="" />
            <div className="caption">
                <img src={program_icon_4} alt="" />
                <p>TILE FLOORING AND DESIGN</p>
            </div>
        </div>
    </div>
    <div className='services-button-container'>
    <button className='btn dark-btn'>See more <img src={white_arrow} alt=""/></button>
    </div>
    </div>
  )
}

export default Programs