import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {

    const linkStyle = {
        textDecoration: "none"
    }

    return (
        <div>
        <div className="nav-wrapper white">
            <Link to="/" className="brand-logo left" style={{color:"black", fontFamily: "Arial"}}>Pinch Me so I Know its Real</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li ><Link to="/home" style={{color:"black"}}>Home</Link></li>
            <li ><Link to="/portfolio" style={{color:"black"}}>Portfolio</Link></li>
            <li ><Link to="/AboutMe" style={{color:"black"}}>About Me</Link></li>
            <li><Link to="/filmsimulations" style={{color:"black"}}>Film Simulations</Link></li>
            <li><Link to="/Contact" style={{color:"black"}}>Contact</Link></li>
            <li>
                <button className="btn #c62828 red darken-3" >
                Logout
                </button>
            </li>
            </ul>
        </div>
        </div>
        );
}

export default Nav;