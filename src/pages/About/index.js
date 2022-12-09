import Header from '../../components/Header';
import './style.scss';

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <div className="about__container">
          <h2 className="about__text">Bonjour! Je suis <span className="highlight">Raphael</span>, un développeur & designer basé à Montpellier.</h2>
        </div>
      </main>
    </>
  )
}

export default About;