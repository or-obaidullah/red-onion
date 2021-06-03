import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo2.png';
import './Header.css'

const Header = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <>
            <div className='header-section'>
                <div className="header d-flex justify-content-between align-items-center py-3">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <div className="header-Right">
                        <Link to="/cart"><FiShoppingCart /><span className='ml-1'>{cart.length}</span></Link>
                        {
                            loggedInUser.isSignIn &&
                            <span className='welcome'>Welcome {loggedInUser.name}</span>
                        }
                        {
                            !loggedInUser.isSignIn && <Link to="/login">Login</Link>
                        }
                        {
                            loggedInUser.isSignIn ?
                            <Link to='' onClick={()=>setLoggedInUser({})}>Sign Out</Link> :
                            <Link to='/login' >Sign Up</Link>
                        }
  
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Header;