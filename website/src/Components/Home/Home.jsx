import React from 'react';
import Layout from '../Layout/Layout';
import './Home.css'
import manatee from "../../Images/manatee.JPG"
import { Link } from 'react-router-dom';


function Home(props) {
  return (
    <Layout>
    <div className="body">
        <div className='hero-box'>
        <h1 className='title'> Hi, my name is  </h1>
      <h1 className='name'>JASON QUIZHPI</h1>
      {/* <h4 className='sub-title'>( but you can call me Jaysaan )</h4> */}
          <h1 className='title'> Software Engineer</h1>
          <h3>Explore work  <span><Link className="arrow" to="/projects"> >> </Link></span> </h3>
        </div>
        {/* <img className='load'src={manatee} alt="load"/> */}
      </div>
      </Layout>
  );
}

export default Home;