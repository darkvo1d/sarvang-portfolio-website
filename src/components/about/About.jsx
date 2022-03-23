import React from "react";
import "./about.css";
import ME from "../../assets/headshot.png";
import { FaAward, FaGraduationCap, FaFolderOpen } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of Industry Experience</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Pursuing Masters in Artificial Intelligence & Business Ahnalytics</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed personal projects</small>
            </article>
          </div>

          <p>
            Labore exercitation laboris ad exercitation proident magna commodo
            veniam voluptate sunt. Irure laborum nisi exercitation commodo
            sunt duis officia nostrud esse labore consectetur. Exercitation
            officia aute exercitation exercitation irure elit esse pariatur
            pariatur elit aute anim. Duis laboris adipisicing anim sit culpa
            reprehenderit consequat sunt cillum aliqua.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Get in Touch</a>

        </div>

      </div>
    </section>
  );
};

export default about;
