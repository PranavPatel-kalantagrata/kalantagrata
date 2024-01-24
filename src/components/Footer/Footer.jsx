import React from "react";
import {Link, NavLink} from "react-router-dom";
import FooterCSS from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <nav className={FooterCSS.footerContainner}>

                    <div className={FooterCSS.footerLogoContainner}>
                        <Link to="/"><img src="src/assets/k_white.png" alt="Logo"/></Link>
                        <h1>kalantagrata</h1>
                    </div>  

                    <div className={FooterCSS.footerNavbarContainner}>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink> </li>
                            <li> <NavLink to="/Services"> Services </NavLink> </li>
                            <li> <NavLink to="/Projects"> Projects </NavLink> </li>
                            <li> <NavLink to="/About"> About </NavLink> </li>
                        </ul>
                    </div>

            </nav>
        </footer>
    )
}

export default Footer