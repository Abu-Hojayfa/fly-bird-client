import React, { useEffect, useState } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../images/peopleicon.png';

const Blog = () => {
  AOS.init({
    duration : 1000
  });
  const [blogging, setBlogging] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setBlogging(data));
  },[]);

  return (
    <div className="blogBody">
      
        {
          blogging.map(blog=>

            <div key={blog.id} data-aos="fade-right" className="blog">
              <div className="bloggerDes">
                <img src={img} alt=""/>
                <div>
                  <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                  <p>{blog.name}</p>
                  <p>{blog.email}</p>
                </div>
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, blanditiis nulla provident, dolorum tenetur repellendus veniam enim minus veritatis adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis perspiciatis eaque, atque dolorum a illum ullam explicabo totam culpa. expedita officia facilis aut incidunt sapiente ad ab esse debitis!......</h3>
              <a href="https://janina.com">Read More...</a>
            </div>

            )
        }
      
    </div>
  );
};

export default Blog;