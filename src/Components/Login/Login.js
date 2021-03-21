import React, { useContext, useState } from 'react';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from  '../../images/google.png';
import fb from '../../images/fb.png';
import {  signInFrameWork, signInWithFacebook, signInWithGoogle } from '../LoginManager/LoginManager';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";


signInFrameWork();

const Login = () => {

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const[user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    wrongPass:false
  });

  AOS.init({
    duration : 1000
  });

  const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };


  const googleSignIn = () => {
    signInWithGoogle()
    .then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const fbSignIn = () => {
    signInWithFacebook()
    .then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const formValidation = (e) => {
    if (e.target.name === 'name'){
      const newInfo = {...user};
      newInfo[e.target.name] = e.target.value;
      setUser(newInfo);
    }

    let formValid  ;
    if(e.target.name === 'email'){
      formValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
    }
    if (e.target.name === 'password'){
      formValid = e.target.value.length > 6 &&  (/[a-zA-Z]/).test(e.target.value) && (/[0-9]/).test(e.target.value);
    }
    if (e.target.name === 'logPass'){
      formValid = e.target.value;
    }

    if(formValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
    
    e.preventDefault();
  };

  const createUser = () =>{
    const {name, email , password} = user; signInFrameWork();
    if (email && name && password){

      window.localStorage.setItem('name' , name);
      window.localStorage.setItem('img' , "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png");

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userInformation = {
          name: name,
          email: email,
          imgURL: userCredential.photoURL,
          isSignIn: true
        };
        setLoggedInUser({});
        setLoggedInUser(userInformation);
        history.replace(from);
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    
  };
  
  const login = () =>{
    const { email , logPass} = user;
    firebase.auth().signInWithEmailAndPassword(email, logPass)
    .then((userCredential) => {
      const {displayName , email, photoURL} =  userCredential.user;
      const userInformation = {
        name: displayName,
        email: email,
        imgURL: photoURL,
        isSignIn: true
      };
      setLoggedInUser({});
      setLoggedInUser(userInformation);
      history.replace(from);
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  

  return (
    <div className='LogBody'>
      <section>
        <div data-aos="zoom-in" className="container">
          <div className="user signinBx">
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
            <div className="formBx">
              <form action="" >
                <h2>Sign In</h2>
                <input onBlur = {formValidation} type="text" name="email" placeholder="email" />
                <input onBlur = {formValidation} type="password" name="logPass" placeholder="Password" />
                </form>
                <input onClick={login} type="submit" value="Login" />
                <h5 className="signup">
                  Don't have an account ?
                  <p onClick={()=>toggleForm()}>Sign up.</p>
                </h5>
              
              <div className="autoLogin">
                <p>OR</p>
                <button onClick={googleSignIn} className="oneClick">
                  <img src={google} alt=""/>
                  <p>Continue With Google</p>
                </button>
                <button onClick={fbSignIn} className="oneClick">
                  <img className='fb' src={fb} alt=""/>
                  <p>Continue With Facebook</p>
                </button>
              </div>
            </div>
            
          </div>

          <div className="user signupBx">
            <div className="formBx">
              <form  >
                <h2>Create an account</h2>
                <input onBlur = {formValidation} type="text" name="name" placeholder="Username" />
                <input onBlur = {formValidation} type="email" name="email" placeholder="Email Address" />
                <input onBlur = {formValidation} type="password" name="password" placeholder="Create Password" />
                <input onBlur = {formValidation} type="password" name="recheck" placeholder="Confirm Password" />
                </form>
                <input onClick={createUser} type="submit" value="Sign Up" />
                <h5 className="signup">
                  Already have an account ?
                  <p onClick={()=>toggleForm()}>Sign in.</p>
                </h5>
              
              <div className="autoLogin">
                <p>OR</p>
                <button onClick={googleSignIn} className="oneClick">
                  <img src={google} alt=""/>
                    <p>Continue With Google</p>
                </button>
                <button onClick={fbSignIn} className="oneClick">
                  <img className='fb' src={fb} alt=""/>
                  <p>Continue With Facebook</p>
                </button>
              </div>
            </div>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Login;