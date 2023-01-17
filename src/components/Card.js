import React from "react";

const Card = (props) => {

    
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">{props.card.icon}</div>
                <div className="card-header">{props.card.header}</div>
                <div className="card-body">{props.card.content}</div>
                <div className="card-link">{props.card.link}</div>
            </div>
        </div>

    );
    }
    



export default Card;
    