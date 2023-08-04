import React, {useEffect, useState} from 'react'
import { styles } from '../styles'
import { NavLink } from 'react-router-dom'
import {logo, menu, close, Logo} from '../assets'
import { navLinks } from '../constants'
import { BrowserRouter as Router, Link, useNavigate, Route, Routes } from 'react-router-dom'
import './NavBar.css'
import Hero from './Hero'


function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logo} alt="" style={{width: "10%", height: "10%", borderRadius: "100%"}} />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                color={click ? "violet" : "white"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                color={click ? "violet" : "white"}

              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/collections"
                onClick={click ? handleClick : null}
                color={click ? "violet" : "white"}

              >
                Collections
              </NavLink>
            </li>
            <li className="nav-item" style={{ flexDirection: "row", width: "100px"}}>
              <NavLink
                exact
                to="/Why us"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
               color={click ? "violet" : "white"}

              >
                Why us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
               color={click ? "violet" : "white"}

              >
                Contact
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Navbar
