import React from "react";
import "./styles/PersonalDashboard.css";
import dashboard from "../assests/dashboard.svg";
import pd1 from "../assests/pd1.svg";
import pd2 from "../assests/pd2.svg";
import pd3 from "../assests/pd3.svg";
import pd4 from "../assests/pd4.svg";
import pdlines from "../assests/pdlines.png";

const PersonalDashboard = () => {
  return (
    <div className="pd-cont">
      <img src={pdlines} alt="pdlines" className="pdlines" />

      <div className="story-top">
        <div className="story-head">
          Your Personalized <b className="story-head-col">Dashboard!</b>
        </div>
        <div className="story-text">
          Access your personalized dashboard for seamless learning. Track
          progress, access resources, and tailor your experience effortlessly.
        </div>
      </div>
      <img src={dashboard} alt="dashboard" />
      <div className="pd-btm">
        <div className="pd-card">
          <img src={pd1} alt="pd1" />
          Join Daily & Weekly Challenges.
        </div>
        <div className="pd-card">
          <img src={pd2} alt="pd1" />
          Participate in Hackathons.
        </div>
        <div className="pd-card">
          <img src={pd3} alt="pd1" />
          Discover Internship Opportunities!
        </div>
        <div className="pd-card">
          <img src={pd4} alt="pd1" />
          Track your Task Progress.
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
