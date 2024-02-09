import React from "react";
import "./styles/Communities.css";
import concode from "../assests/concode.svg";
import comcodecard from "../assests/comcodecard.svg";
import comui from "../assests/comui.png";
import comuicard from "../assests/comuicard.svg";
const Communities = () => {
  return (
    <div className="com-cont" id="choose">
      <div className="com-head-cont">
        <div className="com-head">Discover Vibrant Communities</div>
        <div className="com-text">
          Explore and join vibrant communities to enhance your skills.
        </div>
      </div>
      <div className="com-cards-cont">
        <div className="com-card">
          <img src={comcodecard} alt="comcodecard" className="comcodecard" />
          <svg
            className="com-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="578"
            height="461"
            viewBox="0 0 578 461"
            fill="none"
          >
            <g filter="url(#filter0_f_73_1670)">
              <circle cx="502.5" cy="385.5" r="115.5" fill="#1050D0" />
            </g>
            <defs>
              <filter
                id="filter0_f_73_1670"
                x="-113"
                y="-230"
                width="1231"
                height="1231"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_73_1670"
                />
              </filter>
            </defs>
          </svg>
          <div className="com-card-upper">
            <div className="com-card-head">
              Website Development
              <img src={concode} alt="concode"></img>
            </div>
            <ul>
              <li>Master coding and digital innovation.</li>
              <li>Connect with developers, collaborate, and innovate.</li>
              <li>Shape the future of the web with us.</li>
            </ul>
          </div>
          <div className="com-web">Web Developement</div>
          <div
            className="com-cta"
            onClick={() =>
              window.open("https://upskillmafia.com/mern", "_blank")
            }
          >
            Know More
          </div>
        </div>
        <div className="com-card">
          <img src={comuicard} alt="comcodecard" className="comcodecard" />
          <svg
            className="com-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="578"
            height="461"
            viewBox="0 0 578 461"
            fill="none"
          >
            <g filter="url(#filter0_f_73_1690)">
              <circle cx="502.5" cy="385.5" r="115.5" fill="#8000C0" />
            </g>
            <defs>
              <filter
                id="filter0_f_73_1690"
                x="-113"
                y="-230"
                width="1231"
                height="1231"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_73_1690"
                />
              </filter>
            </defs>
          </svg>
          <div className="com-card-upper">
            <div className="com-card-head">
              UI UX Designing
              <img src={comui} alt="concode"></img>
            </div>
            <ul>
              <li>Explore user-centric design, creativity, and innovation.</li>
              <li>
                Connect with fellow designers, share insights, and collaborate.
              </li>
              <li>
                Elevate your UX/UI skills for exceptional user experiences.
              </li>
            </ul>
          </div>
          <div className="com-web">UI/UX Designing</div>
          <div
            className="com-cta"
            style={{
              background: "linear-gradient(180deg, #A336DA 0%, #8000C0 100%)",
            }}
            onClick={() =>
              window.open("https://upskillmafia.com/uiux", "_blank")
            }
          >
            Know More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
