/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
import React, { useState  } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet'

import "../styles/index.scss";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const onChangeTheme = () => {
    if(theme === "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

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
            <img src={'logo.png'} alt="logo T-Devs"/>
          </div>
          <ul className="sidebar__menu">
            <li>
              <Link to="/"><img src={'/home.png'} alt="Home T-Devs"/></Link>
            </li>
            <li>
              <Link to="/about"><img src={'/blog.png'} width="30" alt="Blog T-Devs"/></Link>
            </li>
            <li>
              <Link to="/social"><img src={'/Instagram-Tdevs.png'} width="30" alt="Instagram T-Devs"/></Link>
            </li>
            <li>
              {
                theme === "light" ? <img src={'Moon.png'} alt="Moon T-Devs" onClick={onChangeTheme}/> : <img src={'Sun.png'} alt="Sun T-Devs" onClick={onChangeTheme}/>
              }
            </li>
          </ul>
        </div>
      </div>
      <div className={theme === "light" ? "container__body" : "container__body--dark"}>
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
        </div >
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
