import React from 'react'
import './projects.css'
import IMG3 from '../../assets/fish-species.png'
import IMG4 from '../../assets/tictactoe.png'
import IMG5 from '../../assets/minesweeper.png'
import IMG6 from '../../assets/ocr.png'
import IMG1 from '../../assets/2dcar.gif'
import IMG2 from '../../assets/exam.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'
// import IMG5 from '../../assets/portfolio5.png'


const Projects = () => {
  
  const projectDetails = [
    {
      id: 1,
      image: IMG1,
      title: '2D AI Self Driving Car',
      description: 'An AI model that drives in a 2D space learning based off of a users lap run.',
      github: 'https://github.com/Zantorym/AI-Car-Game',
      demo: ''
    },
    {
      id: 2,
      image: IMG2,
      title: 'Exam Proctoring System',
      description: 'An automated system that uses computer vision to flag moments of fishy means being used by a candidate giving an online exam.',
      github: 'https://github.com/darkvo1d/fish_species_assignment',
      demo: ''
    },
    {
      id: 3,
      image: IMG3,
      title: 'ML model to predict Fish Species',
      description: 'A classifier model built to determine the fish species.',
      github: 'https://github.com/darkvo1d/fish_species_assignment',
      demo: 'https://predict-fish-species-ass.herokuapp.com/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Tic-Tac-Toe Bot',
      description: 'A bot built on the a* algorithm that can interact with a CLI game of tic-tac-toe.',
      github: 'https://github.com/darkvo1d/Tic-Tac-Toe',
      demo: ''
    },
    {
      id: 5,
      image: IMG5,
      title: 'Minesweeper',
      description: 'A GUI based classic game of minesweeper built using the pygame module.',
      github: 'https://github.com/darkvo1d/Minesweeper',
      demo: ''
    },
    {
      id: 6,
      image: IMG6,
      title: 'OCR',
      description: 'A flask application that lets the user draw a digit on an HTML canvas an then predicts the said digit using an AI model.',
      github: 'https://github.com/darkvo1d/mnist-digit-ocr',
      demo: ''
    }
  ]
  
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>

        {
          projectDetails.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='project__item'>
                <div className='project__item-image'>
                  <img src={image} alt='Thumbnail for Fish Species'/>
                </div>
                <h3>{title}</h3>
                {description ? (
                    <h4>{description}</h4>
                  ) : (
                    <span></span>
                  )}
                <div className='project__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {demo ? (
                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                  ) : (
                    <span></span>
                  )}
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