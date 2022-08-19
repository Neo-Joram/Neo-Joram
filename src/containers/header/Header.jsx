import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='header' id='home'>
      <div className="header-things">
        <h1 className='gradient_text'>Let's build something amazing with Zenom open AI</h1>
        <p className="text">From scratch to something big and important. 
        This way we build big thing which is already helping</p>
        <div className="header-things-textarea">
          <input type="email" placeholder="Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-things-followers">
          <img src={people} alt="Following" />
          <p>2000 and more people requested access</p>
        </div>
      </div>
      <div className="header-art">
        <img src={ai} alt="ZENOM_AI" />
      </div>
    </div>
  )
}

export default Header
