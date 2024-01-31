import React from "react";
import {Link, NavLink} from "react-router-dom";
import HeaderCSS from './Header.module.css'

function Header() {
    return (
        <header>
            <nav className={HeaderCSS.headerContainner}>

                    <div className={HeaderCSS.headerLogoContainner}>
                        <Link to="/"><img src="/Header/k_black.png" alt="Logo"/>kalantagrata</Link>
                    </div>  

                    <div className={HeaderCSS.headerNavbarContainner}>
                        <ul>
                            <li> <NavLink to="/" style={({isActive})=>{return {color: isActive? "black":"",};}}> Home </NavLink> </li>
                            {/* <li> <NavLink to="/Services"> Services </NavLink> </li> */}
                            <li> <NavLink to="/Projects" style={({isActive})=>{return {color: isActive? "black":"",};}}> Projects </NavLink> </li>
                            <li> <NavLink to="/About" style={({isActive})=>{return {color: isActive? "black":"",};}}> About </NavLink> </li>
                        </ul>
                    </div>

            </nav>
        </header>
    )
}

export default Header