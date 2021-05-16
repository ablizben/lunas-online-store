import React from 'react';
import '../components/page styles/New.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';






const New = () => {
   

    return (
        <div className="New">
            <NavBar />
            <div className="new-header">What's New</div>
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
            <Footer />
        </div>
     
    
    );
    }
    
    export default New;
    