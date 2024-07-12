import React from 'react'
import "../Styles/Hero.css"
import dark_arrow from "../assets/dark-arrow.png"
import { Link } from 'react-scroll'

export const Hero = () => {
  return (
    <div className='hero container'>

        <div className='hero-text'>
            <h1>Innovative Designs for Modern Living</h1>
            <p>Transforming spaces with personalized design, making your home beautiful and functional.</p>
            {/* <button className='btn'>Explore More <img src={dark_arrow}/></button> */}
            <div className='btn'>
            <Link to="about" smooth={true} offset={-130} duration={500}>Explore More</Link>
            </div>
        </div>

    </div>
  )
}
