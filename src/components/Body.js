import React  from "react";
import Card from './Card';
import content from "./content";




const Body = () => {

    return (
        <div className="body">
        <div className="top-body">
            <div className="back-in-stock">Your favorites are back in stock!</div>
            <button className="back-in-stock-btn">Shop Now</button>
        </div>
        <div className="bottom-body">
            {content.map(card => {
                return <Card card={card} key ={card.id} />;
            })}
        </div>
        </div>
    );
    }
    



export default Body;
    
