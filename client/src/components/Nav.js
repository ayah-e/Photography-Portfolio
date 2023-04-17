import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"

function Nav({user, setUser}) {

    const linkStyle = {
        textDecoration: "none"
    }

    function handleLogoutClick() {
        fetch('/logout', { method: 'DELETE' }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    //   function handlePortfolioClick() {
    //     window.location.reload();
    // }
    // onClick={handlePortfolioClick} 

    return (
        <div className = "nav-container"  style={{ position: "relative" }}>
        <div className="nav-wrapper white">
            <Link to="/" className="brand-logo left" style={{color:"black", fontFamily: "Arial"}}>Pinch Me so I Know its Real</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li ><Link to="/home" className="nav-link" style={{color:"black"}}>Home</Link></li>
            <li ><Link to="/portfolio" className="nav-link" style={{color:"black"}}>Portfolio</Link></li>
            <li ><Link to="/AboutMe" className="nav-link" style={{color:"black"}}>About Me</Link></li>
            <li><Link to="/filmsimulations" className="nav-link" style={{color:"black"}}>Film Simulations</Link></li>
            <li><Link to="/Shoots" className="nav-link" style={{color:"black"}}>Shoot Ideas</Link></li>
            <li>
                <Link to = "/" className="btn #c62828 red darken-3" onClick = {handleLogoutClick} >
                Logout
                </Link>
            </li>
            </ul>
        </div>
        </div>
        );
}

export default Nav;