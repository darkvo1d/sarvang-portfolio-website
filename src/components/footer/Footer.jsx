import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sarvang</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/sarvang-konnur-0672b61ba/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/darkvo1d' target='_blank'><BsGithub/></a>
        <a href='https://www.facebook.com/sarvang.konnur.5' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/konnursarvang/?hl=en' target='_blank'><BsInstagram/></a>
        <a href='https://twitter.com/learningM4' target='_blank'><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Sarvang Konnur. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer