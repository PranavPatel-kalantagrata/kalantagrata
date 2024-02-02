import React from "react";
import {Link, NavLink} from "react-router-dom";
import FooterCSS from './Footer.module.css'

function Footer() {

    const yearSpan = new Date();
    const currentYear = yearSpan.getFullYear();

    return (
        <footer>
            <nav className={FooterCSS.footerContainner}>

                    <div className={FooterCSS.footerLogoContainner}>
                        <Link to="/"><img src="/Logos/k_white.png" alt="Logo"/></Link>
                    </div>  

                    <div className={FooterCSS.footerCopyrightContainner}>
                        <p>&copy; {currentYear} kalantagrata. All rights reserved.</p>
                    </div>

            </nav>
        </footer>
    )
}

export default Footer