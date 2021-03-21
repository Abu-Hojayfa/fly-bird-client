import React, { useEffect, useState } from 'react';
import './Home.css';
import bg from '../../images/Bg.png';
import Grid from '@material-ui/core/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import descrpImg from '../../images/bg.gif';
import bikeImg from '../../images/bike.gif';
import carImg from '../../images/car.gif';
import busImg from '../../images/bus.gif';
import trainImg from '../../images/train.gif';
import { useHistory } from 'react-router';



const Home = () => {
  
    AOS.init({
      duration : 1000
    });
  

  const [scroll, setScroll] = useState(false);  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  
  let history = useHistory();
  const bikes =()=>{
    history.push('/destination',{params:'bike'});
  };
  
  const cars =()=>{
    history.push('/destination',{params:'car'});
  };

  const buses =()=>{
    history.push('/destination',{params:'bus'});
  };
  
  const trains =()=>{
    history.push('/destination',{params:'train'});
  };

  return (
    <div style={{backgroundImage:`url(${bg})`}} id="homeBody">
      <div className="intro">
        <Grid container spacing={3}>
          <Grid data-aos="fade-right" item xs={12} sm={12} md={5}>
            <div className='description'>
              <h1>
                Fly <span> Bird </span>
              </h1>
              <h2>
                Always by your side...
              </h2>  
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident excepturi sit doloremque sequi alias a labore commodi quisquam rerum minus tempora optio molestias dolores perspiciatis, autem delectus atque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptate laborum quasi culpa iure pariatur nostrum odio repellat deserunt labore? non esse!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <div className="descriptionImg">
              <img data-aos="fade-left" src={descrpImg} alt=""/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={scroll ? '' : 'section'}></div>
      <div className="rideSelection">
      <Grid container spacing={2}>

        <Grid   item xs={12} sm={6} md={4} lg={3}>
          
            <div onClick={()=>bikes()} className="card">
              <img src={bikeImg} alt=""/>
              <h2>
                Lets Ride!
              </h2>
            </div>
          
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          
            <div onClick={()=>cars()} className="card">
              <img src={carImg} alt=""/>
              <h2>
                Lets Ride!
              </h2>
            </div>
          
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          
            <div onClick={()=>buses()} className="card">
              <img src={busImg} alt=""/>
              <h2>
                Lets Ride!
              </h2>
            </div>
          
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          
            <div onClick={()=>trains()} className="card">
              <img src={trainImg} alt=""/>
              <h2>
                Lets Ride!
              </h2>
            </div>
        
        </Grid>

      </Grid>
      </div>
    </div>
  );
};

export default Home;