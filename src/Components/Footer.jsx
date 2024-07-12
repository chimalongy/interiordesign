import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <p> &copy; {new Date().getFullYear()} MIGOS. All rights reserved.</p>
        {/* <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul> */}
    </div>
  )
} 

export default Footer