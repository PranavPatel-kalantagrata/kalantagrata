import React from "react";
import {Link, NavLink} from "react-router-dom";
import HeaderCSS from './Header.module.css'

function Header() {
    return (
        <header>
            <nav className={HeaderCSS.headerContainner}>

                    <div className={HeaderCSS.headerLogoContainner}>
                        <Link to="/"><img src="/Logos/k_white.png" alt="Logo"/>kalantagrata</Link>
                    </div>  

                    <div className={HeaderCSS.headerNavbarContainner}>
                        <ul>
                            <li> <NavLink to="/" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}}> Home </NavLink> </li>
                            {/* <li> <NavLink to="/Services"> Services </NavLink> </li> */}
                            <li> <NavLink to="/BrandArt" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}}> Brand Art </NavLink> </li>
                            <li> <NavLink to="/About" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}}> About </NavLink> </li>
                        </ul>
                    </div>

            </nav>
        </header>
    )
}

export default Header