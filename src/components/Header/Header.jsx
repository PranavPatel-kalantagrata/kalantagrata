import React from "react";
import {Link, NavLink} from "react-router-dom";
import HeaderCSS from './Header.module.css'

function Header() {
    return (
        <header>
            <nav className={HeaderCSS.headerContainner}>

                    <div className={HeaderCSS.headerLogoContainner}>
                        <Link to="/"><img src="src/assets/k_black.png" alt="Logo"/></Link>
                        <h1>kalantagrata</h1>
                    </div>  

                    <div className={HeaderCSS.headerNavbarContainner}>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink> </li>
                            <li> <NavLink to="/Services"> Services </NavLink> </li>
                            <li> <NavLink to="/Projects"> Projects </NavLink> </li>
                            <li> <NavLink to="/About"> About </NavLink> </li>
                        </ul>
                    </div>

            </nav>
        </header>
    )
}

export default Header