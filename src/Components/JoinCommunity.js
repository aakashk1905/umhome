import React from "react";
import "./styles/JoinCommunity.css";
import jcImg from "../assests/jcImg.svg";
const JoinCommunity = () => {
  return (
    <div className="jc-cont">
      <div className="jc-left">
        <img src={jcImg} alt="jc" />
      </div>
      <div className="jc-right">
        <div className="jc-right-top">
          <div className="jc-head">
            Great! Right ? You can also be a part of our{" "}
            <b className="jc-head-col">Community!</b>
          </div>
          <div className="jc-text">
            Join our thriving community where learning meets collaboration.
            Connect with fellow learners, share insights, and grow together!
          </div>
        </div>
        <a href="#choose">
          <div className="jc-cta ">Join now for Free!</div>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;
