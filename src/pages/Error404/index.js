import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import portrait from '../Home/resume.jpg';
import '../Home/style.scss';

const Error404 = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="presentation">
        <h2 className="presentation__text">Désolé vous vous êtes perdu en route...</h2>
        <Link className="presentation__button" to="/portfolio">Voir mon portfolio</Link>
        </div>
        <div className="home__background">
        <img src={portrait} alt="C'est moi !" />
        </div>
      </main>
    </>
  )
}

export default React.memo(Error404)