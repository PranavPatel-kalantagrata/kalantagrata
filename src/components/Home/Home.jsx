import React from "react";
import HomeCSS from './Home.module.css';

function Home() {
    return (
        <>
        <div className={HomeCSS.mainContainner}>

            {/* <div className={HomeCSS.Content}> */}

            <div className={HomeCSS.ContentLogo}>
            
            </div>
            
            <div className={HomeCSS.ContentText}>
            
                <p>Your <span>ONE-STOP-SHOP</span> for seamless 
                graphic design visuals and cutting-edge web development.
                </p>

            </div>

            {/* </div> */}

        </div>








        {/* <div className={HomeCSS.ourServicesContainner} id="ourServices">
            <h1>Our Services</h1>
        </div>

        <div>
            <p className={HomeCSS.ourServicesHeading}>Social Media Management</p>
            <p className={HomeCSS.ourServicesHeading}>Real Estate Photography & Videography</p>
            <p className={HomeCSS.ourServicesHeading}>Vectorizing</p>
            <p className={HomeCSS.ourServicesHeading}>Photo Editing</p>
            <p className={HomeCSS.ourServicesHeading}>Video Editing</p>
        </div> */}

        </>
        
    )
}

export default Home