import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/home" className="brand-logo">
          Crud SPA
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
