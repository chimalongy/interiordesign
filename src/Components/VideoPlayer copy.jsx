import React, { useRef } from 'react'
import "../Styles/VideoPlayer.css"


export const VideoPlayer = ({playState, setPlayState}) => {
  const player= useRef(null)
  
    return ( 
    <div className= {`video-player ${playState?"":"hide"}` } ref={player}  onClick={(e)=>{
        if (e.target===player.current){
            setPlayState(false)
        }
    }}>
        <video src={""} autoPlay muted controls></video>
    </div>
  )
}
