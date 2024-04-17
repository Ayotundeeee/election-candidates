import React from 'react'
import "./navbar.css"
import flag from "../navbar/image.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={flag} alt="" />
    </div>
  )
}

export default Navbar