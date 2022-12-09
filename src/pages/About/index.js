import Header from '../../components/Header';
import Scene from '../../components/Scene';
import { Linkedin  } from 'react-feather';
import './style.scss';

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <div className="about__container">
          <h2 className="about__title">
            Après plus de 10 ans à travailler comme designer, je me reconvertis dans le développement Web.
          </h2>
          <p className="about__text">
            Ayant toujours été attiré par les nouvelles technologies, j'ai été amené à me pencher sur le domaine du web en autodidacte durant mon parcours professionnel.
          </p>
          <p className="about__text">
            J'ai décidé de m'y consacrer à 100% après avoir suivi une formation de Développeur Fullstack JS chez&nbsp;
            <a className="about__link" href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank" rel="noopener noreferrer">O'Clock</a>.
          </p>
          <a className="about__button" href="https://www.linkedin.com/in/raphael-desitter/" target="_blank" rel="noreferrer"><Linkedin /> Contactez moi</a>
        </div>
        <Scene />
      </main>
    </>
  )
}

export default About;