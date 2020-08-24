import React from 'react';
import {NavLink} from 'react-router-dom';

const Navb = () => {
return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand ml-5" to="/"><strong>Sahil Technicals</strong></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link text-primary mr-5" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-primary mr-5" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-primary mr-5" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-primary mr-5" to="/contact">Contact</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navb;