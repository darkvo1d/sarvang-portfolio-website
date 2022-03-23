import React from 'react'
import Resume from '../../assets/Sarvang_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Lets Get In Touch</a>
    </div>
  )
}

export default CTA