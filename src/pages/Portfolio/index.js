import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getProject, getProjectBySlug } from '../../action';
import Header from "../../components/Header";
import Project from '../../components/Project';

const Portfolio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const projectItem = useSelector(state => state.projectItem);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [index, setIndex] = useState(projectItem.id || 1);

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getProjectBySlug(slug));
    } 
    else {
      dispatch(getProject(index));
    }

    setIsLoaded(true);

    // window.addEventListener('wheel', handleWheel);
    // return () => window.removeEventListener('wheel', handleWheel);
  }, [index, location]);

  const handleWheel = (event) => {
    let wheelDirection = event.deltaY;
    // console.log(event.wheelDelta);
    if (wheelDirection < 0) {
      event.stopPropagation() 
      return changeSlide('up');
    }
    else {
      event.stopPropagation() 
      return changeSlide('down')
    }
  }

  const changeSlide = (direction) => {
    let newIndex = 0;

    if (direction === "up") {
      if (index > 1) {
        newIndex = index - 1;
      } else {
        newIndex = 4;
      }
    }

    if (direction === "down") {
      if (index < 4) {
        newIndex = index + 1;
      }
      else {
        newIndex = 1;
      }
    }
    navigate(`/portfolio/${projectItem.slug}`)
    return setIndex(newIndex);
  }

  return (
    <>
      <Header />
      {isLoaded && (
        <Project {...projectItem} />
      )
      }
      {/* <Footer isDark /> */}
    </>
  )
}

export default React.memo(Portfolio)