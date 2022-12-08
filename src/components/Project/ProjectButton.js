import PropTypes from 'prop-types';
import React from 'react';
import {ReactComponent as Arrow} from './arrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getSlug, resetSlug } from '../../action';
import { Navigate } from 'react-router-dom';
import projects from '../../data/portfolio';

function ProjectButton( { action } ) {
    const maxItems = projects.length;
    const activeIndex = useSelector(state => state.projectItem.id);
    const slug = useSelector(state => state.slug);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (action === 'next') {
            if (activeIndex < maxItems) { dispatch(getSlug(activeIndex + 1)) }
            else { dispatch(getSlug(1)) }
        }

        if (action === 'prev') {
            if (activeIndex > 1) { dispatch(getSlug(activeIndex - 1)) }
            else { dispatch(getSlug(maxItems)) }
        }
    }

    if (slug) {
        dispatch(resetSlug());
        return <Navigate to={`/portfolio/${slug}`} replace />
    }

    return (
        <button className={'project-nav__btn project-nav__btn--' + action} type="button" onClick={handleClick}>
            <Arrow />
        </button>
    );
}

ProjectButton.propTypes = {
    action: PropTypes.string.isRequired,
};

export default ProjectButton;
