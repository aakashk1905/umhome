import React from "react";
import "./styles/Allinone.css";
import aio1 from "../assests/aio1.svg";
import aio2 from "../assests/aio2.svg";
import aio3 from "../assests/aio3.svg";
import aio4 from "../assests/aio4.svg";
import aio5 from "../assests/aio5.svg";
import aio6 from "../assests/aio6.svg";
const Allinone = () => {
  return (
    <div className="aio-cont">
    <div className="aio-abs"></div>
      <div className="aio-card">
        <div className="aio-head-cont">
          <div className="aio-text">One platform, multiple touchpoints.</div>
          <div className="aio-head">
            All-In-One Solution for{" "}
            <b className="aio-head-col">Skill Development!</b>
          </div>
        </div>
        <div className="aio-chips-cont">
          <div className="aio-chip-inner">
            <div className="aio-chip">
              <img src={aio1} alt="aio1"></img>
              Virtual Learning Sessions
            </div>
            <div className="aio-chip">
              <img src={aio2} alt="aio1"></img>
              Personalized Mentorship
            </div>
          </div>

          <div className="aio-chip-inner">
            <div className="aio-chip">
              <img src={aio3} alt="aio1"></img>
              Self-Paced Lectures
            </div>
            <div className="aio-chip">
              <img src={aio4} alt="aio1"></img>
              Community Collaboration
            </div>
          </div>

          <div className="aio-chip-inner">
            <div className="aio-chip">
              <img src={aio5} alt="aio1"></img>
              Job Opportunities
            </div>
            <div className="aio-chip">
              <img src={aio6} alt="aio1"></img>
              Receive Certification
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allinone;
