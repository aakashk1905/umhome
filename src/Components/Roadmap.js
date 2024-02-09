import React, { useRef, useState } from "react";
import "./styles/Roadmap.css";
import rmglav from "../assests/rmglav.svg";
import rmblav from "../assests/rmblav.svg";
import play from "../assests/play.png";
const Roadmap = () => {
  const [playing, setPlaying] = useState(false);
  const [noVid, setNoVid] = useState(false);
  const videoRef = useRef();

  return (
    <div className="rm-cont">
      <img src={rmglav} alt="rmglav" className="rmglav"></img>
      <div className="story-top">
        <div className="story-head">
          Roadmap to <b className="story-head-col">Success!</b>
        </div>
        <div className="story-text">
          Embark on your design journey, collaborate with peers, and compete for
          big wins!
        </div>
      </div>
      <div className="rm-main">
        <div className="rm-left">
          <div className="rm-pt-cont">
            <div className="rm-pt-num">1</div>
            <div className="rm-pt-right">
              <div className="rm-pt-head">
                🚀 <b className="rm-pt-head-col">Virtual Campus Kickoff</b>
              </div>
              <div className="rm-pt-text">
                Join the campus, meet your peers and kickstart your Web
                Development journey!!
              </div>
            </div>
          </div>
          <div className="rm-pt-cont">
            <div className="rm-pt-num">2</div>
            <div className="rm-pt-right">
              <div className="rm-pt-head">
                🤝
                <b className="rm-pt-head-col"> Collaborative Skill Crafting</b>
              </div>
              <div className="rm-pt-text">
                Collaborate and learn Web development with you peers and create
                projects together.
              </div>
            </div>
          </div>
          <div className="rm-pt-cont">
            <div className="rm-pt-num">3</div>
            <div className="rm-pt-right">
              <div className="rm-pt-head">
                🏆 <b className="rm-pt-head-col">Competitive Skill Showcase</b>
              </div>
              <div className="rm-pt-text">
                Compete with campus mates, showcasing your skills and aiming for
                big wins.
              </div>
            </div>
          </div>
        </div>
        <div className="rm-right">
          <div className="vid-cont">
            {noVid && "Something Went Wrong !!!"}
            <img src={rmblav} alt="rmblav" className="rmblav" />
            {!playing && (
              <div className="rm-vid-overview">
                <div
                  className="rm-play"
                  onClick={() => {
                    setPlaying(true);
                    videoRef.current?.play();
                  }}
                >
                  <img src={play} alt="rmblav" />
                  Watch Campus Preview
                </div>
              </div>
            )}
            {!noVid && (
              <video
                onError={() => {
                  setNoVid(true);
                  setPlaying(false);
                }}
                ref={videoRef}
                className="rm-vid"
                controls={true}
                src="https://s3.ap-south-1.amazonaws.com/upskillmafia.com/My+Video.mp4"
                alt="rmblav"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
