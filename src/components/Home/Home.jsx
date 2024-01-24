import React from "react";
import HomeCSS from './Home.module.css';

function Home() {
    return (
        <>
        <div className={HomeCSS.homeLandingPageContainner}>
            
            <img src="src/assets/landingPage.png" alt="Landing Page"/>
            
            <div className={HomeCSS.homeLandingPageContent}>
                
                <div className={HomeCSS.homeLandingPageText}>
                    <h2>YOUR<br/>ONE-STOP-SHOP</h2>
                    <p>For all your graphic desiging needs.</p>
                </div>
                
                <div className={HomeCSS.homeLandingPageButton}>
                    <button>Get Started</button>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default Home