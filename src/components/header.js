import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './header.module.styl';

const Header = ({ menuLinks, siteTitle }) => (
  <header className={style.siteHeader}>
    <div className={style.siteHeaderContainer}>
      <Link to="/" className={style.siteTitle}>
        {siteTitle}
      </Link>
      <nav className={style.navigation}>
        {menuLinks.map(link => (
          <Link className={style.navigationLink} key={link.name} to={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
