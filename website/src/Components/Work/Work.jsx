import React from 'react';
import './Work.css'
import Project1 from "../../Images/Project1.png"
import Project2 from "../../Images/Project2.png"
import Project3 from "../../Images/Project3.png"
import Project4 from "../../Images/Project4.png"
import Layout from '../Layout/Layout';

function Work(props) {
  return (
    <Layout>
    <div className="container">
      <div className="projects" >
        <div className="project">
            <img className="project-img"src={Project1}></img>
            <h2 className="project-title">Gotta Catch Them All</h2>
            <p className="brief">A vanilla Javascript, HTML, and CSS app where the user's objective is to catch the 15 Pokemon in the wild in order to become a Pokemon Master. This app uses a third-party API, pokeapi.co.
            <div className="button-container">
            <button className="deploy"><a className="link" href="https://jquizhpi96.github.io/Gotta-Catch-Them-All/">See the app</a></button>
            <button className="github"><a className="link" href="https://github.com/jquizhpi96/Gotta-Catch-Them-All">See the code</a></button>
                    </div>
</p>
        </div>
        <div className="project">
            <img className="project-img"src={Project2}></img>
            <h2 className="project-title">Craig List</h2>
            <p className="brief">Cregs-List is an Airtable and React build app for all the Craigs in the world to display a profile of themselves.
            <div className="button-container">
            <button className="deploy"><a className="link" href="https://cregs-list.netlify.app/">See the app</a></button>
            <button className="github"><a className="link" href="https://github.com/jquizhpi96/Cregs-List">See the code</a></button>
                    </div>
</p>
        </div>
        <div className="project">
            <img className="project-img" src={Project3}></img>
          <h2 className="project-title">The Dog Spot</h2>
          <p className="brief">The Dog Spot is a collaborative full CRUD application utilizing MERN stack that is focused towards pet adoption centers nationwide. This application has user authorization and authentication implemented to store adoption status of listed animals across users.</p>
          <div className="button-container">
          <button className="deploy"><a className="link" href="https://the-dog-spot.netlify.app/">See the app</a></button>

          <button className="github"><a className="link" href="https://github.com/amarp86/The-Dog-Spot">See the code</a></button>
                    </div>
          </div>
          <div className="project">
          <img className="project-img" src={Project4}></img>
          <h2 className="project-title">Yak Yik</h2>
          <p className="brief">Yak Yik is a full CRUD React and Ruby on Rails social media smartphone application based on a discontinued app, Yik Yak, that allows people to create and view discussion threads while being anonymous.
          <div className="button-container">
                        <button className="deploy"><a className="link" href="https://yak-yik.netlify.app/">See the app</a></button>
                        <button className="github"><a className="link" href="https://github.com/jquizhpi96/Yak-Yik">See the code</a></button>
                    </div>
</p>
        </div>
      </div>

      </div>
      </Layout>
  );
}

export default Work;