import React from 'react';
import {ReactComponent as Cross} from './cross.svg';
import { useNavigate} from "react-router-dom";
import './style.scss';
import { useSelector } from 'react-redux';

function CloseButton() {
    let navigate = useNavigate();
    const slug = useSelector(state => state.projectItem.slug);
    return (
        <button className="close__button" type="button" onClick={() => navigate(`/portfolio/${slug}`)}><Cross /></button>
    );
}

export default CloseButton;
