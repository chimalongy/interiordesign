import React from 'react'
import "../Styles/About.css"
import about_img from "../assets/about.png"
import play_icon from "../assets/play-icon.png"

export const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT MIGOS</h3>
            <h2>Crafting Beautiful, Functional Spaces</h2>
            <p>
            At MIGOs, we believe that a well-designed space can elevate your everyday life. Our team of expert designers is dedicated to transforming your home into a sanctuary of style and comfort. From initial concept to final touches, we work closely with you to bring your vision to life, ensuring that every detail reflects your unique taste and lifestyle.</p>
            <p>Whether you're looking for modern elegance, cozy warmth, or timeless sophistication, we have the creativity and expertise to make it happen. Let us help you create a space that not only looks beautiful but also feels like home.</p>
        
        </div>
    </div>
  )
}
