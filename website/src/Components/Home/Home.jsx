import React from 'react';
import Layout from '../Layout/Layout';
import './Home.css'
import { Link } from 'react-router-dom';


function Home(props) {
  return (
    <Layout>
    <div className="body">
        <div className='hero-box'>
          <h1 className='title'> Hi, my name is  </h1>
          <br/>
          <h1 className='name'>JASON QUIZHPI</h1>
          <br/>
          <h1 className='title2'>I'm a Software Engineer  <span className="skill-text"></span></h1>
          <h3>Explore my work  <span><Link className="arrow" to="/projects"> >> </Link></span> </h3>
        </div>
      
      </div>
      </Layout>
  );
}

export default Home;