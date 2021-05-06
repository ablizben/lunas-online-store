import React from "react";

const Card = (props) => {

    
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image"><i class="fas fa-shipping-fast"></i></div>
                <div className="card-header">{props.card.header}</div>
                <div className="card-body">{props.card.content}</div>
                <div className="card-link">{props.card.link}</div>
            </div>
        </div>

    );
    }
    



export default Card;
    