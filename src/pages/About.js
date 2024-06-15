import React, { Component } from "react";
import "./About.css";
import profilepic from "../assets/profilepic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profilepic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Aditya Naidu</div>
            <div className="brief_description">
            - Studying Computer Science @ Purdue University<br/>
          - Software Engineering Intern @ Allthenticate<br/>
          - Past Digital Security Intern @ H-E-B Digital<br/>
          - Excited to experience IBM Accelerate and learn more about the tech industry!<br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
