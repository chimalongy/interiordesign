import React, {useState} from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import Programs from './Components/Programs'
import { Title } from './Components/Title'
import { About } from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import { Contact } from './Components/Contact'
import Footer from './Components/Footer'
import { VideoPlayer } from './Components/VideoPlayer'

const App = () => {
  const [playState, setPlayState]= useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="OUR SERVICES" title ="What We Offer"/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle="Gallery" title ="What We've Done"/>
      <Campus/>
      <Title subtitle="TESTIMONIALS " title ="What our Clients Says"/>
      <Testimonials/>
      <Title subtitle="Contact us " title ="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App