// import React from "react";
import imageOne from '../images/imageone.jpg';
import imageTwo from '../images/imagetwo.jpg';
import imageThree from '../images/imagethree.jpg';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';


// const CarouselHero = () => {
   

//     return (
//         <div className="Carousel">
//         <AwesomeSlider>
//             <div data-src={imageOne} />
//             <div data-src={imageTwo} />
//             <div data-src={imageThree} />
//         </AwesomeSlider>
//         </div>
    
//     );
//     }
    
//     export default CarouselHero;
    
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
const buttonStyle = {
//   padding: "15px",
//   borderRadius: "50%",
//   background: "red",
//   opacity: 0.7,
//   fontSize: "20px"
};
const contentStyle = {
  color: "black",
  fontSize: "20px",
  marginTop: "250px",
};
const bgImg = {
  position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  width: "100%"
};

export default function CarouselHero() {
  return (
    <AwesomeSlider
      organicArrows={true}
    //   buttonContentRight={<p style={buttonStyle}>{">"}</p>}
    //   buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
      play
      // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div style={{ zIndex: 2 }}>
        <div>  
          <img
            style={bgImg}
            alt="Wow"
            src={imageOne}
          />
          <h1 class="first-carousel">Summer Lookbook 2021</h1>
          <button id="summer-btn">Shop</button>
        </div>
      </div>
      <div>
        <img
          style={bgImg}
          alt="Wow"
          src={imageTwo}
        />
        <h1 class="second-carousel">Femme Florals</h1>
        <button id="floral-btn">Shop Florals</button>
      </div>
      <div>
        <img
          style={bgImg}
          alt="Wow"
          src={imageThree}
        />
        <h1 class="third-carousel">Cozy Essentials</h1>
        <button id="cozy-btn">Shop Cozy</button>
      </div>
    </AwesomeSlider>
  );
}
