import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import git from '../assets/git.png';
import sass from '../assets/sass1.png';
import photo from '../assets/Danyaaa.jpg';
import '../scss/AboutMePage.scss';

export const AboutMePage = () => {
  return (
    <div className="container-about">
      <div className="title-container">
        <h1 className="title-about-me">ABOUT ME</h1>
        <p className="title-text">
          Lorem ipsum dolor sit amet consectetur. Eget turpis nulla dignissim integer.
          Quis tempus est quis <br /> sapien. Odio neque lectus posuere orci.
          Turpis quis amet euismod vel scelerisque <br /> scelerisque.
        </p>
      </div>
      <div className="info">
        <img className="info-photo" src={photo} alt="" width="300px" />
        <div className="info-text">
          <h3 className="name">KOMAROVSKYI DANIIL</h3>
          <h3>FRONTEND DEVELOPER</h3>
          <p className="aboutme-text"> Lorem ipsum dolor sit amet consectetur. Nunc suspendisse pulvinar orci viverra <br /> in massa nunc tristique.
            Tempor interdum ac tempus sapien. Pulvinar <br /> consectetur lorem ligula morbi nec condimentum.
            Urna sit semper integer <br />commodo non mauris dictum non.
          </p>
          <p className="aboutme---text"> Lorem ipsum dolor sit amet consectetur. Nunc suspendisse pulvinar orci viverra <br /> in massa nunc tristique.
            Tempor interdum ac tempus sapien.
            Pulvinar<br /> consectetur lorem ligula morbi
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

