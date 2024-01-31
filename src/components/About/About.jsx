import React from "react";
import AboutCSS from './About.module.css';

function About() {
    return (
        <>
        <div className={AboutCSS.mainContainner}>

            <div className={AboutCSS.Content}>

                <div className={AboutCSS.ContentLogo}>
                    <img className={AboutCSS.ContentLogoImage} src="/Header/k_black.png" alt="kalantagrata logo"/>
                </div>
                
                <p>Welcome to kalantagrata. I'm <span>Pranav</span>, a passionate graphic designer since 2015. 
                    Beyond graphic design, kalantagrata offers a holistic creative experience, from branding strategies to digital illustrations. 
                    The journey began with overwhelming local support, leading to the creation of our virtual canvas. 
                    Join me in exploring endless creative possibilities at kalantagrata.<br/> <br/>
                    <span>kalantagrata</span> - Elevating brands, one design at a time.
                </p>
            </div>
            
        </div>

        </>
    )
}

export default About