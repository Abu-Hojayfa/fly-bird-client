import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {

  const [scroll, setScroll] = useState(false);  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const [loggedInUser] = useContext(userContext);
  let names; let imgURLs ; let isSignIns;
  if(loggedInUser === undefined){}
  else{
    const {name, imgURL, isSignIn} = loggedInUser;
    names = name;
    imgURLs = imgURL;
    isSignIns = isSignIn;
  }

  let history = useHistory();
  const destination = () =>{
    history.push('/destination',{params:''});
  }


  return (
    <div className="hBody">
      <nav className={scroll? 'scrolled':''}>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li style={{cursor:'pointer'}} onClick={() => destination()}>
            <a> Destination</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            {
              isSignIns? 
                <Link to="/profile">
                  <button className = "profileLink">
                    <img src={imgURLs?imgURLs : window.localStorage.getItem('img')} alt=""/>
                    <p>{names}</p>
                  </button>
                </Link> : 
                <Link to="/login">
                  <button className="login">
                    Login
                  </button>
                </Link>
            }
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Header;