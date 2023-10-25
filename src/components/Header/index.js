import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = ({ isDark }) => {    
    return (
        <header className={isDark ? 'header' : 'header light'}>
            <div className="header__container">
                <div className="header__logo"><h1><Link className="header__logo--link" to="/" as="h1">Raphael Desitter</Link></h1></div>
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
