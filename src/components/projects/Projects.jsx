import React from 'react'
import './projects.css'
import IMG1 from '../../assets/fish-species.png'
import IMG2 from '../../assets/tictactoe.png'
import IMG3 from '../../assets/minesweeper.png'
import IMG4 from '../../assets/portfolio4.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'
// import IMG5 from '../../assets/portfolio5.png'


const Projects = () => {
  
  const projectDetails = [
    {
      id: 1,
      image: IMG1,
      title: 'ML model to predict Fish Species',
      github: 'https://github.com/darkvo1d/fish_species_assignment',
      demo: 'https://predict-fish-species-ass.herokuapp.com/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Tic-Tac-Toe Bot',
      github: 'https://github.com/darkvo1d/Tic-Tac-Toe',
      demo: '#'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Minesweeper',
      github: 'https://github.com/darkvo1d/Minesweeper',
      demo: '#'
    },
    {
      id: 4,
      image: IMG4,
      title: 'My Portfolio Website',
      github: '#',
      demo: '#'
    }
  ]
  
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>

        {
          projectDetails.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='project__item'>
                <div className='project__item-image'>
                  <img src={image} alt='Thumbnail for Fish Species'/>
                </div>
                <h3>{title}</h3>
                <div className='project__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Projects