import React, { useContext, useState } from 'react';
import { FiBarChart } from 'react-icons/fi';
import { Link,NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import FoodData from '../../FoodData/FoodData';
import Cart from '../Cart/Cart'
import FoodDetails from '../FoodDetails/FoodDetails';
import './FoodBody.css';
import FoodCard from './FoodCard';
import { scroll} from 'react-scroll'

const FoodBody = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const breakfast = FoodData.filter(items => items.category === 'breakfast');
    const lunch = FoodData.filter(items => items.category === 'lunch');
    const dinner = FoodData.filter(items => items.category === 'dinner');

    let history = useHistory();
    const [food, setFood] = useState({
        activeProduct: 2,
        product: lunch,
    });
    const [singleFood, setSingleFood] = useState(null);
    const [success, setSuccess] = useState(false);

    const selectedFoodBtn = (item, x) => {
        setFood({...food, product:item, activeProduct:x})
        setSingleFood(null);
    }
    const foodHandler = (foodItem) => {
        setSingleFood(foodItem);
        window.scroll({
            top: 500,
            left: 0, 
            behavior: 'smooth',
          });

    }
    const addToCart = (singleFood)=>{
        const sameFoods = cart.find(food => food.key === singleFood.key);
        if(sameFoods){
            sameFoods.quantity = singleFood.quantity;
            const others = cart.filter(other => other.key != singleFood.key);
            setCart([...others,sameFoods]);
        }else{
            setCart([...cart,singleFood]);
        }
        setSuccess(true);
        if(setSuccess){
            setTimeout(() => setSuccess(false),1500)
        }
    }
    
    const checkoutFood = () =>{
        history.push("/cart");
    }
    return (
        <>
            <div className="search-section text-center">
                <h1>Best Food Waiting For Your Belly</h1>
                <div className="input-group w-75 w-sm-25 w-md-25 w-lg-25 mx-auto mt-3">
                    <input type="text" className="form-control" placeholder="Search food items"/>
                    <div className="input-group-append">
                        <span className="input-group-text searchBtn px-4">Search</span>
                    </div>
                </div>
            </div>

            <div className="Food-section" id='foodSection'>
                <div className="CategoryBtn text-center py-5">
                    <NavLink to="" activeClassName={food.activeProduct === 1 && 'activeCategoryBtn'} onClick={()=> selectedFoodBtn(breakfast, 1)}>BreakFast</NavLink>

                    <NavLink to="" activeClassName={food.activeProduct === 2 && 'activeCategoryBtn'} className="ml-5" onClick={()=> selectedFoodBtn(lunch, 2)}>lunch</NavLink>

                    <NavLink to="" activeClassName={food.activeProduct === 3 && 'activeCategoryBtn'} className="ml-5" onClick={()=> selectedFoodBtn(dinner, 3)}>Dinner</NavLink>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    {   
                        singleFood === null &&
                        food.product.map(item => <FoodCard key={item.key} foodHandler={foodHandler} foodItems={item}></FoodCard>)
                        
                    }

                </div>
                {
                    singleFood != null &&
                    <FoodDetails success={success}  addToCart={addToCart} singleFood={singleFood}></FoodDetails>
                }

                <div className='checkoutFood text-md-center mb-5 mt-2'>
                
                {
                    
                    <button 
                        className={cart.length > 0 ? 'disableBtn bgColor' : 'disableBtn'}
                        disabled={cart.length > 0 ? false: true}
                        onClick={checkoutFood}
                        >Checkout Your Food
                    </button>
                }
                </div>
            </div>
        </>
    );
};

export default FoodBody;