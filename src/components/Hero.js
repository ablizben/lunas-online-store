import React from "react";
import imageOne from '../images/imagethree.jpg';
import imageTwo from '../images/imageone.jpg';
import imageThree from '../images/imagetwo.jpg';



const Hero = () => {
   

    return (
        <div className="hero">
            <div className="hero-1">
                <img src={imageOne} id="hero-image-1" alt="woman looking toward camera in all gray sweatsuit with white sneakers"/>
                <div className="text-btn-1">
                    <h3>Cozy Essentials</h3>
                    <button id="cozy-btn">Get Cozy</button>
                </div>
            </div>
            <div className="hero-2">
                <img src={imageTwo} id="hero-image-2" alt="woman looking over oceanview in long, blue dress" />
                <div className="text-btn-2">
                    <h3>Summer Lookbook 2023</h3>
                    <button id="summer-btn">Shop The Collection</button>
                </div>
            </div>
            <div className="hero-3">
                <img src={imageThree} id="hero-image-3" alt="woman in yellow floral dress looking sideways" />
                <div className="text-btn-3">
                    <h3>Femme Florals</h3>
                    <button id="floral-btn">Find Florals</button>
                </div>
            </div>
        </div>
     
    
    );
    }
    
    export default Hero;
    


