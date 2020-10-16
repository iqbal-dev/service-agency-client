import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to='/home'><img style={{height:'50px'}} src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/team">Our Team</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Log In</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;