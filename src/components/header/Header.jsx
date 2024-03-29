import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/headshot-2.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Sarvang Konnur</h1>
        <h5 className='text-light'>Data Science Enthusiast</h5>
        
        <CTA/>
        <HeaderSocials/>
        
        <div className='me'>
          <img src={ME} alt="headshot"/>
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
