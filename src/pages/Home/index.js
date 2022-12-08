import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import portrait from './resume.jpg';
import './style.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="presentation">
        <h2 className="presentation__text">Bonjour! Je suis <span className="highlight">Raphael</span>, un développeur & designer basé à Montpellier.</h2>
        <Link className="presentation__button" to="/portfolio">Voir mon portfolio</Link>
        </div>
        <div className="home__background">
        <img src={portrait} alt="C'est moi !" />
        </div>
      </main>
    </>
  )
}

export default React.memo(Home)