import React from "react";
import Layout from "../Layout/Layout";
import profile from "../../Images/me.jpg";
import "./About.css";

function About(props) {
  return (
    <Layout>
      <div className="about-page">
        <div>
        <img className="profile" src={profile} alt="profile" />
        </div>
        <div className="bio">
          <div className="about-me">About Me</div>
          <div className="desc">
            A born and raised New Yorker who is a Visual Artist and a Full-Stack
            Developer. With a diverse skillset in solving problems and eye for
            design, I am passionate about my work and my constant growth inside
            and outside of development. What sets me apart is how I approach
            each and every day taking on new challenges with my eagerness to
            expand my knowledge. I am currently looking for a position as a
            Software Developer in an environment where I feel I can continue to
            grow and help produce amazing projects.
          </div>
          <p> <a target="_blank" rel="noreferrer"href="https://jquizhpi96.wixsite.com/mysite">Click here to check out my art
</a></p>
          <p>
            To learn more about my professional background
            <a target="_blank" rel="noreferrer"href="https://drive.google.com/file/d/1lAgHniWbHrKhC9P8W4ZQqmwjoXcaZ6mj/view?usp=sharing"> click here to view my
            resume.
</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
