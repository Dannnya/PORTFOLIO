import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import git from '../assets/git.png';
import sass from '../assets/sass1.png';
import photo from '../assets/photo.jpg';
import '../scss/AboutMePage.scss';

export const AboutMePage = () => {
  return (
    <div className="container-about">
      <div className="title-container">
        <h1 className="title-about-me">ABOUT ME</h1>
        <p className="title-text">
          Hi there. here you can find a little about me and my technical aspects, I am always happy to <br />
          discuss the topic of web development, it will be useful to hear your opinion <br/>
          in the form of feedback in the contacts section. <br/>
        </p>
      </div>
      <div className="info">
        <img className="info-photo" src={photo} alt="" width="300px" />
        <div className="info-text">
          <h3 className="name">KOMAROVSKYI DANIIL</h3>
          <h3>FRONTEND DEVELOPER</h3>
          <p className="aboutme-text"> 
            I thrive at the intersection of creativity and technology.
            As a Frontend Developer, <br/> I see coding not just  as a skill but as a way to bring ideas to life.
            I enjoy crafting intuitive,  <br /> dynamic, and visually engaging web experiences that leave an impact. <br />
          </p>
          <p className="aboutme---text"> Curiosity drives me — I love diving deep into new technologies, experimenting with <br />
            different approaches, and continuously refining my skills. <br/>
            Every project I work on is a challenge that fuels my passion for problem-solving and innovation. <br />
            <br/>
            My approach is simple: make things work beautifully while keeping the code clean and scalable.
          </p>
          <a href="" download="CV">
            <button className="btn btn-download-cv" type="button"> Download CV </button>
          </a>
        </div>
      </div>
      <div className="stack">
        <h3 className="stack-title">My Stack</h3>
        <div className="stack-photo">
          <img src={html} alt="html" title='HTML' />
          <img src={css} alt="css" title='CSS' />
          <img src={js} alt="js" title='JavaScript' />
          <img src={react} alt="react" title='React' />
          <img src={redux} alt="redux" title='Redux Toolkit' />
          <img src={git} alt="git" title='Git' />
          <img src={sass} alt="sass" width="65px" title='SASS' />
        </div>
      </div>
    </div>
  )
};
