import React, { useContext } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { userContext } from '../../App';


const Contact = () => {
  AOS.init({
    duration : 1000
  });

  const [loggedInUser] =useContext(userContext);
  return (
    <div className="contactBody">
        <div  data-aos="zoom-in" className="container">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
            <h2>Let's Chat</h2>
            <p>Whether you have a question, want to start a project or            simply want to connect.</p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
          </div>
            </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form action="#">
            <h2 className="lg-view">Contact</h2>
            <h2 className="sm-view">Let's Chat</h2>
                <input type="text" placeholder="Name *" required defaultValue={loggedInUser.isSignIn? loggedInUser.name:'Your name'} />
                <input type="email"   defaultValue={loggedInUser.isSignIn ? loggedInUser.email:'Enter Email'} required/>
                <input type="text" placeholder="Company" required/>
                <input type="phone" placeholder="Phone" required/>
                <textarea rows="4" placeholder="Message" required></textarea>
            <button>Submit</button>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;