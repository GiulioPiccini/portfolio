/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet'

import "../styles/index.scss";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`container ${showMenu ? "is-open" : ""}`}>
      <Helmet>
          <title>My Title</title>
          <meta charset="UTF-8" />
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="John Doe" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="container__sidebar">
        <div className="sidebar">
          <div className="home__logo__wrapper">
            <img src={'logo.png'} />
          </div>
          <ul className="sidebar__menu">
            <li>
              <Link to="/"><img src={'/home.png'} /></Link>
            </li>
            <li>
              <Link to="/about"><img src={'/blog.png'} width="30" /></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container__body">
        <div className="container__mobile-header">
          <div className="mobile-header">
            <div className="mobile-header__menu">
              <button
                onClick={e => {
                  e.preventDefault();
                  setShowMenu(!showMenu);
                }}
              />
            </div>
            <div className="mobile-header__logo">
              <Link to="/">home</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
