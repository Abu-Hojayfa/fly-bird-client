import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Profile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { signInFrameWork, signOut } from '../LoginManager/LoginManager';

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {name, email, imgURL} = loggedInUser;
  signInFrameWork();
  signOut();
  const logOut = () =>{
    let userInfo = {...loggedInUser};
    userInfo = {
      name: '',
      email: '',
      imgURL: '',
      isSignIn: false
    };
    setLoggedInUser(userInfo);
  };

  AOS.init({
    duration : 1000
  });

  return (
    <div className="profileBody">
      <div data-aos="zoom-in" className="profileArea">
        <div className="img">
          <img src={imgURL? imgURL:window.localStorage.getItem('img')} alt=""/>
        </div>
        <div className="profileDiscribe">
          <h2>{name}</h2>
          <p>{email}</p>
          <h3>
            Order Complete : 5
          </h3>
          <h3>
            On Going order : 2
          </h3>
          <button onClick = {logOut} className="logOut">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;