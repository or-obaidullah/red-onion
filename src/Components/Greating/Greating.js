import React from 'react';
import greatingData from './GreatingData';
import GreatingCard from './GreatingCard';
import './Greating.css';

const Greating = () => {
    return (
        <div className="whyChoose container">
            <div className="row">
                <div className="col-md-5">
                    <h3>Why You CHoose Us</h3>
                    <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero ullam quisquam totam eveniet illo libero quidem nam.</p>
                </div>
            </div>
            <div className="row pb-5">
                {
                    greatingData.map((data,index)=><GreatingCard 
                    key={index}
                    cardData = {data}
                    ></GreatingCard>)
                }
            </div>
        </div>
    );
};

export default Greating;