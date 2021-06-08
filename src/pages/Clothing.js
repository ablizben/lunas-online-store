import React from 'react';
import '../components/page-styles/New.css';
import NavBar from '../components/NavBar';
import Filter from '../components/Filter';
import NewCard from '../components/NewCard';
import Footer from '../components/Footer';
import NewContent from '../components/NewContent';
import { Checkbox } from '@material-ui/core';



const Clothing = () => {
   

    return (
        <div className="New">
            <NavBar />
            <div className="new-header">Clothing</div>
            <div className="new-components">
                <Filter />
                <div className="filters">
                    <div className="category-filter">
                        <div className="category-header">
                        Category
                        </div>
                    {/* Need to refactor to make one category item */}
                    <div className="category-item">
                        <Checkbox />
                        Tops
                    </div>
                    <div className="category-item">
                        <Checkbox />
                        Bottoms
                    </div>
                    <div className="category-item">
                        <Checkbox />
                        Dresses
                    </div>
                    <div className="category-item">
                        <Checkbox />
                        Accessories
                    </div>
                    </div>

                    <div className="color-filter">
                        <div className="color-header">
                        Color
                        </div>
                    {/* Need to refactor to make one category item */}
                    <div className="color-item">
                        <Checkbox />
                        Black
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        White
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        Red
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        Blue
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        Orange
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        Purple
                    </div>
                    <div className="color-item">
                        <Checkbox />
                        Multi-Color
                    </div>
                    </div>


                    <div className="price-filter">
                        <div className="price-header">Price
                        </div>
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
    
    export default Clothing;