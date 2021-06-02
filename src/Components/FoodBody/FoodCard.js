import React from 'react';
import { Link } from 'react-router-dom';
const FoodCard = (props) => {
    const foodHandler = props.foodHandler;
    const {title,key, description, price,img} = props.foodItems;
    return (
        <div onClick={() => foodHandler(props.foodItems)} className='col-md-4 foodCard text-center py-4'>
            <div className="card">
                <img src={img} className="card-img-top mx-auto" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title m-0">{title}</h6>
                    <p className="card-text m-0">{description}</p>
                    <h5 className='mb-0'>${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;