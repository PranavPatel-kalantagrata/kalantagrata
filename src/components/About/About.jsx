import React from "react";
import AboutCSS from './About.module.css';

function About() {
    return (
        <>
        <div className={AboutCSS.mainContainner}>

            <div className={AboutCSS.Content}>

                <div className={AboutCSS.ContentLogo}>
                    <img className={AboutCSS.ContentLogoImage} src="/Logos/k_white.png" alt="kalantagrata logo"/>
                </div>
                
                <p>Welcome to kalantagrata. I'm <a className={AboutCSS.wordEmail} href="mailto:pranav.patel@kalantagrata.com" target="_blank"><span className={AboutCSS.wordMyName}>Pranav</span></a>, a passionate graphic designer since 2015. 
                    Beyond graphic design, kalantagrata offers a holistic creative experience, from branding strategies to digital space solutions. 
                    The journey began with overwhelming local support, leading to the creation of our virtual canvas. 
                    Join me in exploring endless creative possibilities at kalantagrata.<br/> <br/>
                    <span className={AboutCSS.wordBrandName}>kalantagrata</span> - Elevating brands, one design at a time.
                </p>

            </div>
            
        </div>

        </>
    )
}

export default About