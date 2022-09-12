import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        
        <div className='experience__webdev'>
          <h3>Web Development</h3>
          <div className='experience__content'>

            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>CSS/Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Worked On</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Worked On</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Meddled With</small>
              </div>
            </article>

          </div>
        </div>

        <div className='experience__data'>
          <h3>Data Science and Business Analytics</h3>
          <div className='experience__content'>

            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>numpy & pandas</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>scikit-learn</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>tensorflow</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>pygame</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>open-cv</h4>
                <small className='text-light'>Worked On</small>
              </div>
            </article>
            <article className='experience__detail'>
              <MdVerified className='experience__icon'/>
              <div>
                <h4>Tableau</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience