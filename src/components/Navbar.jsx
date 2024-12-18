import React from "react";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

// Navbar.defaultProps = {
//     title : 'myApp',
//   };
 
Navbar.propTypes = {
    title : PropTypes.string,
}  

function Navbar({title = 'myApp', mode, toggleMode}){
    // const thisTitle = props.title.length > 0 ? props.title : "MyApp";

    return (
        <nav className= {`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;