import React from "react";
import BrandArtCSS from './BrandArt.module.css';

function BrandArt() {

    
    return (
        <>
        
        <div className={BrandArtCSS.mainContainner}>
            
            <div className={BrandArtCSS.artContainner}>

                <svg version="1.1" viewBox="0 0 370.42 370.42">
                    <text transform="scale(.26458)"/>
                    <g fill="none" stroke="currentColor" strokeWidth="19.844">
                    <path className={BrandArtCSS.topLeft} d="m185.09 136.08h-108.17"/>
                    <path className={BrandArtCSS.topRight} d="m185.09 136.08h108.17"/>
                    <path className={BrandArtCSS.curve} d="m138.84 136.08c-17.757 0-35.687 11.838-42.869 29.177-7.182 17.339-3.2121 37.297 10.059 50.568 13.271 13.271 33.229 17.241 50.568 10.059s28.607-24.697 28.602-43.503c-5e-3 -18.807 11.3-35.594 28.639-42.776s37.297-3.2121 50.568 10.059 17.241 33.096 10.059 50.435c-7.111 17.168-23.768 28.42-42.313 28.641-0.18521 2e-3 -10.497 3e-3 -10.682 3e-3"/>
                    <path className={BrandArtCSS.vertical} d="m185.09 244.28v-118.12"/>
                    </g>
                </svg>
    
            </div>

        </div>

        </>
    )
}

export default BrandArt