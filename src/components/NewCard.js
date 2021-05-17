import React from "react";
import '../components/page-styles/New.css';

const NewCard = (props) => {

    
    return (
        <div className="new-card">
            <div className="new-card-content">
                <div className="new-card-image"></div>
                <div className="card-footer">
                    <div className="clothes-name">{props.card.name}</div>
                    <div className="clothes-price">{props.card.price}</div>
                </div>
            </div>
        </div>

    );
    }
    



export default NewCard;
    