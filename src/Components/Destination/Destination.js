import React from 'react';
import './Destination.css';
import { useLocation } from 'react-router';
import bike from "../../images/Frame.png";
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";
import train from "../../images/Group.png";
import dummy from '../../images/peopleicon.png';
import MAp from '../Map/MAp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Destination = () => {
  AOS.init({
    duration : 1000
  });

  const location = useLocation();
  const vehicle = location.state.params;

  let img ;
  if(vehicle === 'bike'){
    img = bike;
  } else if (vehicle === 'car'){
    img = car;
  } else if (vehicle === 'bus'){
    img = bus;
  } else if (vehicle === 'train'){
    img = train;
  } else if (vehicle === ''){
    img = '';
  }


  return (
    <div className="desBody">
      <div className="desMain">
        <div data-aos="fade-right" className="showForm">
          {
            img===''?
            <div >
              <p>Pick From</p>
              <input type="text" name="" defaultValue="Mirmur 1"  />
              <p>Pick From</p>
              <input type="text" name="" defaultValue="Mirmur 500" />
              <p>Confirm the date </p>
              <input type="date"  id=""/>
              <p>Passenger</p>
              <input type="number" min="0" name="" id=""/>
              <button>
                Search
              </button>
          </div> :
          <div data-aos="fade-left">
            <div className="timeLine">
              
              <ul>
                <li> <span className="dot"></span> Mirpur 1</li>
                <li> <span className="dot"></span> Gulshan</li>
              </ul>
            </div>
            <p style={{marginTop:'15px'}}>Date</p>
            <input type="datetime" defaultValue="22/03/2022  (7.30pm)" id=""/>
            <div className="vehicle">
              <img src={img} alt=""/>
              <p className='vehicleName'>{vehicle}</p>
              <img className="dummy" src={dummy} alt=""/>
              <p className='people'>4</p>
              <p className="money">$70</p>
            </div>
            <div className="vehicle">
              <img src={img} alt=""/>
              <p className='vehicleName'>{vehicle}</p>
              <img className="dummy" src={dummy} alt=""/>
              <p className='people'>4</p>
              <p className="money">$70</p>
            </div>
            <div className="vehicle">
              <img src={img} alt=""/>
              <p className='vehicleName'>{vehicle}</p>
              <img className="dummy" src={dummy} alt=""/>
              <p className='people'>4</p>
              <p className="money">$70</p>
            </div>
            <button>
              Book Now
            </button>
          </div>
          }  
        </div>
        
        
          <div className="map">
            <MAp />
          </div>
          
      </div>
    </div>
  );
};

export default Destination;