import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  const icon = (
    <FontAwesomeIcon className="commentsbubble" icon={faEnvelope} size="7x" />
  );

  return (
    <Layout>
      <div className="contact-page">
        <h1 className="contact">Contact Me</h1>
        <div className="socials">
          <a href="https://github.com/jquizhpi96">
            <img
              className="social"
              src=" https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.linkedin.com/in/jason-quizhpi-30a41b169/">
            {" "}
            <img
              className="social"
              src=" https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
              alt="Github"
            />
          </a>
          <a className="social2" href="mailto: jquizhpi96@gmail.com">{icon}</a>
        </div>
       
      </div>
    </Layout>
  );
}

export default Contact;
