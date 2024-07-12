import React from 'react'
import "../Styles/Contact.css"
import msg_icon from "../assets/msg-icon.png"
import mail_icon from "../assets/mail-icon.png"
import phone_icon from "../assets/phone-icon.png"
import location_icon from "../assets/location-icon.png"
import white_arrow from "../assets/white-arrow.png"


export const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b3e3494-d735-4e55-94f5-860ffa5daa5c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us a Message <img src={msg_icon} alt="message icon" /></h3>
        <p>Have questions or need assistance with your design project? Our team is here to help! Reach out to us, and we'll get back to you promptly to discuss your needs and how we can bring your vision to life.</p>

        <ul>
          <li> <img src={mail_icon} alt="" /> Contact@WEBHq.org</li>
          <li> <img src={phone_icon} alt="" />+234 8161357377</li>
          <li> <img src={location_icon} alt="" />Ukwodu Victor Compound, Road 17 Newcity, Old Nekede Road, Owerri ImoState Nigeria.</li>

        </ul>
        <div className='socials'>
          <ul>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li>
          </ul>
        </div>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label >Your Phone number</label>
          <input type="phone" name="phone" placeholder='Enter your mobile number' required />
          <label >Write your message here</label>
          <textarea name="message" placeholder='Enter your message' rows={6} required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt="" /></button>
        </form>
        <span>
          {result}
        </span>
      </div>


    </div>
  )
}
