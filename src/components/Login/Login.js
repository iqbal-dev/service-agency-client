import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const[user,setUser] = useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleSubmit = () => {
        history.push('/dashboard')
        firebase.auth().signInWithPopup(provider)
        .then( result =>{
            const { displayName, email,photoURL } = result.user;
            const newUser = { ...user, name: displayName, email: email, img:photoURL }
            localStorage.setItem('email', newUser.email);
            setUser(newUser);
            history.replace(from);
            console.log(newUser,result.user)
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
    console.log(user);
    return (
        <div className="container login">
            <div style={{width:'500px',margin:'40px auto',}}>
               <img style={{height: '100px',margin: '0 auto'}} src={require('../../images/logos/logo.png')} alt=""/>
            </div> 
            <form action="">
                <h4 className="text-center">Log in With</h4>
                <button onClick={handleSubmit} className="btn button"><img height="30px" src={require('../../images/logos/googlePlus.png')} alt=""/> Google Sign in</button>
            </form>
        </div>
    );
};

export default Login;