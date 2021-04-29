import React from "react";
import imageOne from '../images/imageone.jpg';
import imageTwo from '../images/imagetwo.jpg';
import imageThree from '../images/imagethree.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const CarouselHero = () => {
   

    return (
        <div className="Carousel">
        <AwesomeSlider>
            <div data-src={imageOne} />
            <div data-src={imageTwo} />
            <div data-src={imageThree} />
        </AwesomeSlider>
        </div>
    );
    }
    
    export default CarouselHero;
    
