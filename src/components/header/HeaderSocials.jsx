import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/sarvang-konnur-0672b61ba/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/darkvo1d' target='_blank'><BsGithub/></a>
      <a href='https://www.facebook.com/sarvang.konnur.5' target='_blank'><BsFacebook/></a>
      <a href='https://www.instagram.com/konnursarvang/?hl=en' target='_blank'><BsInstagram/></a>
      <a href='https://twitter.com/learningM4' target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials