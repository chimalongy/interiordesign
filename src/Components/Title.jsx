import React from 'react'
import "../Styles/Title.css"

export const Title = ({subtitle, title}) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
    
  )
}
 