import React from 'react'
import "./card.css"
import person from "../card/person.jpg"

const Card = (prop) => {
  return (
    <div className='card'>
      <div className="person">
        <img src={person} alt="image" id='person'/>
      </div>
      <div className="name">
        <p>{prop.name}</p>
      </div>
      
    </div>
  )
}

export default Card