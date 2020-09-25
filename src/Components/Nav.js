import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./images/logo.jpg";

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo-container">
                <img src={logo} alt="logo" className="logo-img" />
                <span>Healthland Clinic</span>
            </Link>
            <div className="navbar-options">
                <span>Home</span>
                <span className="dropdown">
                    <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Services
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <a className="dropdown-item" href="https://google.com">
                            Acupuncture
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Massage Therapy (RMT)
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Massage Reflexology
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Foot Reflexology
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Cupping/Gua-sha/Hot Stone
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Traditional Chinese Medicine
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Chiropractic
                        </a>
                        <a className="dropdown-item" href="https://google.com">
                            Kinesiology
                        </a>
                    </div>
                </span>
                <span>Products</span>
                <span>Hiring</span>
                <span>Contact</span>
            </div>
            <button className="book-button">Book Now</button>
        </nav>
    );
}

export default Nav;
