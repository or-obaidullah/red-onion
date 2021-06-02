import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Cart.css';

const Cart = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isClick, setIsClick] = useState(false);
    const saveContinueHandler = (e) => {
        e.preventDefault();
        setIsClick(true);
    }
    const increaseFoodItem = (key) => {
        const updateItem = cart.find(item => item.key === key);
        const count = updateItem.quantity;
        updateItem.quantity = count + 1;
        const others = cart.filter(item => item.key !== key);
        setCart([...others, updateItem]);
    }
    const decreaseFoodItem = (key) => {
        const updateItem = cart.find(item => item.key === key);
        const count = updateItem.quantity;
        updateItem.quantity = count - 1;
        const others = cart.filter(item => item.key !== key);

        if (updateItem.quantity === 0) {
            setCart([...others]);
        } else {
            setCart([...others, updateItem])
        }
    }
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal/10;
    const grandTotal = subtotal + tax;
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return precision;
    }

    return (
        <div>
            <Header></Header>
            <div className="cart-section container">
                <div className='row edit-delivery d-flex justify-content-between'>
                    <div className="col-md-5">
                        <h5>Edit Delivery Details</h5>
                        <form className='delivery-form' onSubmit={saveContinueHandler}>
                            <input type="text" className='form-control mt-5' placeholder='Your Address' required />
                            <input type="text" className='form-control mt-3' placeholder='Road No.' required />
                            <input type="text" className='form-control mt-3' placeholder='Flat,Suite or Floor' required />
                            <input type="text" className='form-control mt-3' placeholder='Business Name' required />
                            <textarea className='form-control mt-3' placeholder='Add delivery Instruction' name="" id="" cols="30" rows="3"></textarea>
                            <button type='submit' className='allBtn mt-3'>Save & Continue</button>
                        </form>
                    </div>

                    <div className="col-md-4 mt-4">
                        <p>From <span className='font-weight-bold'>Gulsan Plaza Restaura GPR</span></p>
                        <p>Arriving in 20-30 min</p>
                        <p>107,Road No 8</p>
                        {
                            cart.map(food => {
                                return (
                                    <div className='cardBox'>
                                        <img src={food.img} alt="" />
                                        <div>
                                            <h6>{food.title}</h6>
                                            <p>${food.price * food.quantity}</p>
                                        </div>
                                        <div className='boxItem'>
                                            <span onClick={() => decreaseFoodItem(food.key)}>-</span>
                                            <span>{food.quantity}</span>
                                            <span onClick={() => increaseFoodItem(food.key)}>+</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <p className='d-flex justify-content-between'><span>Subtotal (4 item)</span> <span>${subtotal}</span></p>
                        <p className='d-flex justify-content-between'><span>Tax</span> <span>${formatNumber(tax)}</span></p>
                        <p className='d-flex justify-content-between'><span>Delivery fee</span> <span>$2</span></p>
                        <p className='d-flex justify-content-between'><span>Total</span> <span>${formatNumber(grandTotal)}</span></p>
                        <button
                            className={isClick ? 'disableBtn bgColor' : 'disableBtn'}
                            disabled={isClick ? false : true}
                        >Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;