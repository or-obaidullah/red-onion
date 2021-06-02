import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo2.png';
import firebase from "firebase/app";
import './Header.css'
import firebaseConfig from '../Login/firebase.config';
const Header = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({});
          }).catch((error) => {

          });
    }
    return (
        <>
            <div className='header-section'>
                <div className="header d-flex justify-content-between align-items-center py-3">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <div className="header-Right">
                        <Link to="/cart"><FiShoppingCart /><span className='ml-1'>{cart.length}</span></Link>
                        {
                            !loggedInUser.isSignIn && <Link to="/login">Login</Link>
                        }
                        <Link to='/login' onClick={handleSignOut}>
                            {loggedInUser.isSignIn ? "SignOut" :"Sign Up"}
                        </Link>
  
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Header;