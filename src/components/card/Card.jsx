import React from 'react'
import "./card.css"

const Card = (prop) => {
  return (
    <div className='card'>
      <div className="person">
        <img src="./src/assets/person.jpg" alt="image" id='person'/>
      </div>
      <div className="name">
        <p>{prop.name}</p>
      </div>
      
    </div>
  )
}

export default Card