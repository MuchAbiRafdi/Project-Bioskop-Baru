import React from 'react';
import '../Css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">DCM XXI</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">DCM Now</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">DCM Events</a>
                </li>
            </ul>
            <div className="navbar-icons">
                <a href="#" className="icon-link">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon-link">
                    <i className="fas fa-user"></i> {/* Icon untuk akun */}
                </a>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <button className="search-button"><i className="fas fa-search"></i></button>
            </div>
        </nav>
    );
};

export default Navbar;
