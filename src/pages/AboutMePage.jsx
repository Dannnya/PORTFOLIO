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
    <div className="container">
      <div className="title-container">
        <h1 className="title-about-me">ABOUT ME</h1>
        <p className="title-text">dgdgdfg
          dgdgdfgdfg
        dfgdfgdfg
          dfgfdfdg
        fdg</p>
      </div>
      <div className="info">
        <img className="info-photo" src={ photo } alt="" width="300px"/>
        <div className="info-text">
          <h1 className="name">Komarovskyi Daniil</h1>
          <h3>FRONTEND DEVELOPER</h3>
            <p>text</p>
        </div>
      </div>
      <div className="stack">
        <h3  className="stack-title">My Stack</h3>
        <div className="stack-photo">
          <img src={ html } alt="html" title='HTML'/>
          <img src={ css } alt="css" title='CSS'/>
          <img src={ js } alt="js" title='JavaScript'/>
          <img src={ react } alt="react" title='React' />
          <img src={ redux } alt="redux" title='Redux Toolkit' />
          <img src={ git } alt="git" title='Git' />
          <img src={ sass } alt="sass" width="65px" title='SASS' />
        </div>
      </div>
    </div>
  )
}

