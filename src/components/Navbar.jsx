import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navbar.css';
import logo from '../assets/images/logo_s.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link className="navbar-logo" to='/'>
                    <img src={logo} alt="Logo" className="navbar-logo__img"/>
                    <span className="navbar-logo__title">Pokemon Master Training</span>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
