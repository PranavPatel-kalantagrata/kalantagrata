import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import HeaderCSS from './Header.module.css'

function Header() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const resetCheckboxValue = ()=>{
        setIsChecked(false)
    }
    
    


    return (
        <header>
            
            <input className={HeaderCSS.input} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        
            <nav className={HeaderCSS.mainContainner}>
                
                <div className={HeaderCSS.hamburgerContainner}>
                    
                </div>
                    
                <div className={HeaderCSS.logoContainner}>
                    <Link to="/"><img src="/Logos/k_white.png" alt="Logo"/>kalantagrata</Link>
                </div>  
        
                <div className={HeaderCSS.navbarContainner} >

                    <ul>
                        <li> <NavLink to="/" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}} onClick={resetCheckboxValue}> Home </NavLink> </li>
                        {/* <li> <NavLink to="/Services"> Services </NavLink> </li> */}
                        <li> <NavLink to="/BrandArt" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}} onClick={resetCheckboxValue} > Brand Art </NavLink> </li>
                        <li> <NavLink to="/About" style={({isActive})=>{return {color: isActive? "#d5d5d5":"",};}} onClick={resetCheckboxValue}> About </NavLink> </li>
                    </ul>

                </div>
            
            </nav>
        </header>
    )
}

export default Header