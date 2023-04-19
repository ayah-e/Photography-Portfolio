import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom"
import Logo from "../assets/Logo2.svg"
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

      const [isHidden, setIsHidden] = useState(false); 

      useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            setIsHidden(true); // Scrolling down, hide nav
          } else {
            setIsHidden(false); // Scrolling up, show nav
          }
          lastScrollTop = st <= 0 ? 0 : st;
        });
      }, []);

    return (
        // <div className = "nav-container"  style={{ position: "relative" }}>
        <div
        className={`nav-container ${isHidden ? "hidden" : ""}`}
        style={{ position: "relative" }}
        >
        <div>  <Link to="/" className="brand-logo left"><img src= {Logo} alt = "logo" width="70" height="70" /></Link> </div>
        <div>
            <ul id="nav-mobile">
            <li ><Link to="/home" className="nav-link" >Home</Link></li>
            <li ><Link to="/portfolio" className="nav-link" >Portfolio</Link></li>
            <li ><Link to="/AboutMe" className="nav-link" >About Me</Link></li>
            <li><Link to="/filmsimulations" className="nav-link" >Film Simulations</Link></li>
            <li><Link to="/Shoots" className="nav-link">Shoot Ideas</Link></li>
            <li>
                <Link to = "/" className="nav-link" onClick = {handleLogoutClick} >
                Logout
                </Link>
            </li>
            </ul>
        </div>
        </div>
        );
}

export default Nav;