import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/"></Link>
            <div className="navbar-options">
                <span>Home</span>
                <span>Service</span>
                <span>Product</span>
                <span>Hiring</span>
                <span>Contact</span>
            </div>
        </nav>
    );
}

export default Nav;
