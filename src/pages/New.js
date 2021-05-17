import React from 'react';
import '../components/page-styles/New.css';
import NavBar from '../components/NavBar';
import Filter from '../components/Filter';
import NewCard from '../components/NewCard';
import Footer from '../components/Footer';
import NewContent from '../components/NewContent';



const New = () => {
   

    return (
        <div className="New">
            <NavBar />
            <div className="new-header">What's New</div>
            <div className="new-components">
                <Filter />
                <div className="filters">
                    <div className="category-filter">
                        Category Filter
                    </div>
                    <div className="color-filter">
                        Color Filter
                    </div>
                    <div className="price-filter">
                        Price Filter
                    </div>
                    </div>
                <div className="item-cards">
                    {NewContent.map(card => {
                        return <NewCard card={card} key={card.id} />
                    } 
                        )}
                    
                </div>
            </div>
            <Footer />
        </div>
     
    
    );
    }
    
    export default New;
    