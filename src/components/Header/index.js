import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';

const Header = ({ isDark }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <header className={isDark ? 'header' : 'header light'}>
            <div className="header__container">
                <div className="header__logo"><h1><Link className="header__logo--link" to="/" as="h1">Raphael Desitter</Link></h1></div>
                <button className={isOpen ? 'header__button open': 'header__button'} id="btn" onClick={toggleMenu}><i className="header__button--icon"></i><span>menu</span></button>
                <nav className={isOpen ? 'header__menu visible': 'header__menu'}>
                    <ul className="header__menu__list">
                        <li className="header__menu__list--item"><NavLink className="header__menu__list--link" to="/" onClick={toggleMenu}>Accueil</NavLink></li>
                        <li className="header__menu__list--item"><NavLink className="header__menu__list--link" to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink></li>
                        <li className="header__menu__list--item"><NavLink className="header__menu__list--link" to="/a-propos" onClick={toggleMenu}>A propos</NavLink></li>
                        {/* <li className="header__menu__list--item"><NavLink className="header__menu__list--link" to="/contact" onClick={toggleMenu}>Me contacter</NavLink></li>  */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.defaultProps = {
    isDark: true
}

Header.propTypes = {
    isDark: PropTypes.bool,
}

export default Header;
