import React from "react";
import { Link } from 'react-router-dom';

const NavItem = ({ navItem }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/${navItem.link}`}>{navItem.text}</Link>
    </li>
  )
}

const NavBar = ({ title, navs }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">{title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {navs.map((navItem, index) => (
            <NavItem navItem={navItem} key={index} />
          ))}
        </ul>
      </div>
    </nav>
  )
}


export default NavBar;
