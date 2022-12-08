import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../../action';
import CloseButton from "../../components/CloseButton";
import { ExternalLink  } from 'react-feather';

import './style.scss';

const Project = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const project = useSelector(state => state.projectItem);

  const { slug } = useParams();
  console.log('ici', typeof project.id);
  useEffect(() => {
    
    if (!project.id) {
      console.log('ici');
      dispatch(getProjectBySlug(slug));
    }
    setIsLoaded(true);
  }, []);

  function createTitle() {
    return {__html: project.title};
  }

  function createDetail(label) {
    return {__html: project.details[label]};
  }
  return (
    <div className="project">
      <CloseButton />
      { isLoaded && (
        <div className="project dark">
          <section className="project__banner">
            <div className="project__banner__image"><img src={project.thumbnail} alt={project.title} /></div>
            <div className="slider__item__content">
              <p className="project__banner__date">{project.date}</p>
              <h2 className="project__banner__title" data-color="dark" dangerouslySetInnerHTML={createTitle()} />
              {project.link && (
                <a href={project.link.url} className="project__banner__link" target="_blank" rel="noreferrer noopener"> <ExternalLink /> {project.link.label}</a>
              )}
              <p className="project__banner__desc" dangerouslySetInnerHTML={createDetail("introduction")} />
            </div>
          </section>
          <section className="container">
            <div className="project__section">
              <h2 className="project__title" data-color="dark">Title</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eius expedita voluptatum doloremque magni corrupti ullam non modi cupiditate velit, eos sunt veniam, sequi laborum repudiandae omnis quae ducimus blanditiis.</p>
            </div>
          </section>
          <section className="container">
            <div className="project__section">
              <h2 className="project__title" data-color="yellow">Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
        </div>
      )}
  </div>
  )
}

export default React.memo(Project)