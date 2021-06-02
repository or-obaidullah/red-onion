import React, { useContext, useState } from 'react';
import logo from '../../images/logo2.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [cart, setCart, loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user,setUser] = useState({
        isSignIn: false,
        name: '',
        email:'',
        password:'',
        confirmPassword: ''
    });
    const {name,email,password} = user;

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var {displayName,email} = result.user;
            const signInUser = {
                isSignIn: true,
                name:displayName,
                email};
            setLoggedInUser(signInUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
        });
    }
    const handleOnBlur = (e) =>{
        console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.+\S+/.test(e.target.value);
        }
        if(e.target.name === 'password' ){
            isFieldValid = e.target.value.length >= 6;     
        }
        if(!newUser){
            if(e.target.name === 'confirmPassword' ){
                isFieldValid = e.target.value.length >= 6;     
            }
        }


        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    //create New account
    const handleSubmit = (e) => {
        if(newUser && name && email && password){
            console.log('submit');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                }).then(() => {
                    var {displayName,email} = result.user;
                    const signInUser = {
                        isSignIn: true,
                        name:displayName,
                        email};
                    setLoggedInUser(signInUser);
                    setUser(signInUser);
                    history.replace(from);
                });
                   
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });

        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                var {displayName,email} = result.user;
                    const signInUser = {
                        isSignIn: true,
                        name:displayName,
                        email};
                    setLoggedInUser(signInUser);
                    setUser(signInUser);
                    history.replace(from);     
            })
            .catch(error => {
                var errorMessage = error.message;
            });
        }
        
        e.preventDefault();    
    }

    // console.log(user);
    return (
        <div className='auth'>
            <div className='container'>
                <div className="row text-center d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <img  src={logo} alt="" />
                        <form className='formInput' onSubmit={handleSubmit}>
                            {
                                newUser &&
                                <input onChange={handleOnBlur} type="text" name='name' className='form-control mt-3' placeholder='Name' />
                            }
                            <input onChange={handleOnBlur} type="email" name='email' className='form-control mt-3' placeholder='Email' />
                            <input onChange={handleOnBlur} type="password" name='password' className='form-control mt-3' placeholder='Password' />
                            {
                                newUser &&
                                <input onChange={handleOnBlur} type="password" name='confirmPassword' className='form-control mt-3' placeholder='Confirm Password' />
                            }
                            <button type='submit' className='allBtn mt-3'>{newUser ? 'sign Up' : 'sign In'}</button>
                        </form>
                        <div className='d-flex justify-content-around'>
                            <span style={{cursor:'pointer'}}  onClick={handleGoogleSignIn}>Sign with Google</span>
                            <p style={{cursor:'pointer'}} onClick={() => setNewUser(!newUser)} >Already have an account</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;