import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './FoodDetails.css';

const FoodDetails = (props) => {
    const singleFood = props.singleFood;
    const {title,price,img} = singleFood;
    const [count,setCount] = useState(1);
    const  addToCart= props.addToCart;

    const decreaseBtn = () => {
        if(count>1){
            setCount(count-1);
        }
    }
    singleFood.quantity = count;

    return (
        <div className='row foodDetails'>
            <div className="col-md-6">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam aspernatur debitis est. Placeat labore rem ex officia molestias vel minus, nesciunt nulla commodi, obcaecati nam mollitia maxime repellendus illo.</p>

                <div className='d-flex'>
                    <h3>${price}</h3>
                    <div className='toggleBtn ml-4'>
                        <span onClick={decreaseBtn}>-</span>
                        <span >{count}</span>
                        <span onClick={()=>setCount(count+1)}>+</span>
                    </div>
                </div>
                {   
                    props.success &&
                    <p className='text-success font-weight-bold mt-2'>Item add to Cart Successfully</p>
                }

                <button className='searchBtn px-4 py-2 ml-1 mt-4' onClick={()=>addToCart(singleFood)}><FiShoppingCart /><span className='ml-3'>Add</span></button>
            </div>

            <div className="col-md-6 text-center">
                <img src={img} alt="image" />
            </div>
        </div>
    );
};

export default FoodDetails;