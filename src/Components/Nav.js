import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./images/logo.jpg";
function Nav() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="logo"></img>
                <span>Healthland Clinic</span>
            </Link>
            <div className="navbar-options">
                <span>Home</span>
                <span>Service</span>
                <span>Product</span>
                <span>Hiring</span>
                <span>Contact</span>
            </div>
            <button>Booking</button>
        </nav>
    );
}

export default Nav;
