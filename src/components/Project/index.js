/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import "./style.scss"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ExternalLink, GitHub, Lock  } from 'react-feather';
import ProjectNav from "./ProjectNav";

function Project({ id, title, categories, slug, thumbnail, background, totalItems, link, repo, details, back }) {
  const [show, setShow] = useState(false);
  const index = useSelector(state => state.projectItem.id);
  function createMarkup() {
    return {__html: title};
  }
  function createIntro() {
    return {__html: details.introduction};
  }
  useEffect(() => {
    setShow(false);
    const displayProject = () =>  setShow(true);
    setTimeout(displayProject, 500)
  }, [index])
  return (
    <div className="project-item active">
        <ProjectNav />
        <div className="container">
        <div className={show ? 'project-item__info active' : 'project-item__info'}>
            <p className="project-item__count"><span className="project-item__count--index">{id < 10 ? '0'+id : id}</span><span className="project-item__count--total">/{totalItems < 10 ? '0'+totalItems : totalItems}</span></p>
            <div className="project-item__content">
                {categories.map((category) => (
                  <p className="project-item__content__category" key={category}>{category}</p>
                ))}
                <h2 className="project-item__content__title" dangerouslySetInnerHTML={createMarkup()} />
                <div className="project-item__content__links">
                  <a className="project-item__content__link" href={link.url} target="_blank" rel="noopener noreferrer"><ExternalLink /> Visiter</a>
                  <a className={repo.private ? 'project-item__content__link project-item__content__link--private' : 'project-item__content__link'} href={repo.url} target="_blank" rel="noopener noreferrer">{repo.private ? <Lock /> : <GitHub /> }  {repo.label}</a>
                  { back && (
                    <a className="project-item__content__link" href={back.url} target="_blank" rel="noopener noreferrer"><GitHub /> {back.label}</a>
                  )}
                </div>
                <p className="project-item__content__introduction" dangerouslySetInnerHTML={createIntro()} />
            </div>
        </div>
        <div className={show ? 'project-item__image active' : 'project-item__image'}><img src={thumbnail} alt={title} /></div>
        </div>
        <div className="project-item__background"><img src={background} /></div>
    </div>
  );
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  repo: PropTypes.object.isRequired,
  back: PropTypes.object,
};

export default Project;
