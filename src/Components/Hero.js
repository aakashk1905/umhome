import React from "react";
import "./styles/Hero.css";
import Navbar from "./Navbar";

import heroavs from "../assests/heroavs.svg";
import herolines from "../assests/hero-lines.svg";
import heroright from "../assests/hero-right.png";
import heroblur from "../assests/heroblur.png";
import hero1 from "../assests/hero1.png";
import hero2 from "../assests/hero2.png";
import hero3 from "../assests/hero3.png";
import hero4 from "../assests/hero4.png";

const Hero = () => {
  return (
    <div className="hero-cont" id="hero">
      <Navbar />
      <div className="hero-main-cont">
        <img src={herolines} alt="herolines" className="herolines" />
        <img src={heroblur} alt="herolines" className="heroblur" />
        <div className="hero-left">
          <div className="hero-left-top">
            <div>
              <div className="hero-head">
                Develop Your Skills in a
                <svg
                  className="hero-head-abs"
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="70"
                  viewBox="0 0 90 70"
                  fill="none"
                >
                  <path
                    d="M37.3033 31.0186C40.5047 32.6778 43.6868 34.3023 46.9229 35.9422C48.0821 36.5406 49.3188 37.0183 50.4873 37.6141L62.8549 43.9589C64.7006 44.8827 66.594 45.7238 68.4613 46.542C69.6682 47.0576 70.8913 47.5589 72.0845 48.0982L72.9856 48.516L73.832 49.0283C74.3949 49.3769 74.9484 49.728 75.5033 50.1586C76.0582 50.5893 75.8089 51.0756 74.9106 51.3762C74.3539 51.5402 73.7797 51.6371 73.2 51.6648C72.8652 51.6822 72.5295 51.6754 72.1957 51.6442L71.64 51.5833C71.4626 51.5311 71.2888 51.4676 71.1196 51.3932C66.2235 49.299 61.3466 47.0899 56.6034 44.4854C53.762 42.9394 50.6307 41.6909 47.6552 40.2408C44.3849 38.6599 41.1227 36.997 37.8779 35.3993L31.885 32.3805C28.8497 30.8565 25.8367 29.2667 22.8121 27.8197L19.2782 26.1497C18.1316 25.5979 16.9799 25.0276 15.8207 24.4292C15.3108 24.1663 14.8015 23.9432 14.2959 23.6592C12.4401 22.5483 11.9628 21.997 11.9871 21.0815C11.9712 20.876 11.9795 20.6692 12.0119 20.4656C12.1491 19.8595 13.1646 19.8471 14.6133 20.4078L17.7683 21.67L21.1134 22.9711L22.7375 23.6646C23.2916 23.9057 23.8717 24.1697 24.3748 24.4445L27.6221 26.0515C30.8533 27.6728 34.1081 29.3077 37.3393 30.929L37.3033 31.0186Z"
                    fill="white"
                  />
                  <path
                    d="M33.893 30.1841C37.328 31.8207 40.763 33.4573 44.244 35.0416C45.5057 35.6125 46.8126 36.0913 48.0674 36.674C52.516 38.7382 56.9441 40.8379 61.4174 42.8455C63.3936 43.7344 65.4268 44.538 67.4407 45.3068C68.7246 45.8118 70.0421 46.2179 71.3249 46.7931C72.6013 47.3552 73.845 47.989 75.0498 48.6916C75.7992 49.1401 75.4481 49.6936 74.5064 50.0558C73.2159 50.5224 71.8118 50.5739 70.4906 50.203C69.809 50.0143 69.14 49.7833 68.4873 49.5112L66.5107 48.7323C65.1938 48.2162 63.8905 47.6765 62.5822 47.1181C59.9775 46.0081 57.3858 44.8347 54.825 43.5532C51.7313 42.0349 48.4186 40.8549 45.1989 39.5002C41.6609 38.0011 38.1502 36.4547 34.6301 34.9108L28.1483 32.043C24.8733 30.5932 21.618 29.0683 18.3299 27.682C15.7706 26.6297 13.1799 25.7957 10.5754 24.8355C10.0077 24.6181 9.47116 24.4422 8.8935 24.1875C6.83897 23.2297 6.30505 22.6536 6.29131 21.5586C6.27409 21.3124 6.27463 21.0652 6.29291 20.819C6.42748 20.0538 7.53598 19.8667 9.14612 20.2843C13.9942 21.6921 18.7426 23.423 23.3594 25.4653C26.8763 26.9601 30.4143 28.4593 33.9003 30.0622L33.893 30.1841Z"
                    fill="white"
                  />
                  <path
                    d="M32.0321 30.1735C35.9905 31.8996 39.9514 33.635 43.9185 35.3189C45.3704 35.9287 46.8712 36.3855 48.3654 37.004L56.0018 40.3415C58.5276 41.4926 61.056 42.653 63.5998 43.7593C65.8607 44.7416 68.1791 45.5287 70.4871 46.3886C71.9749 46.9089 73.4757 47.3657 74.9499 47.9096C76.4028 48.5301 77.8107 49.2509 79.1636 50.0667C80.0033 50.5909 79.6449 51.2662 78.571 51.8436C77.1057 52.6034 75.4448 52.9022 73.8065 52.7008C67.6104 50.9121 61.561 48.6494 55.712 45.9327C52.257 44.2216 48.3682 43.0162 44.6997 41.552C40.6656 39.9161 36.6469 38.2262 32.6332 36.5548L25.2115 33.4594C21.4442 31.9618 17.7542 30.1937 13.9645 28.762C11.0639 27.5915 8.06429 26.7971 5.13821 25.6434C4.50213 25.3943 3.85241 25.1689 3.22499 24.8776C1.03032 23.6577 0.382379 22.8425 0.364982 21.8084C0.328633 21.5772 0.316067 21.343 0.327479 21.1093C0.43293 20.4218 1.61799 20.334 3.43431 20.6264C8.96533 21.5116 14.4435 23.4298 19.9769 25.2932C24.1021 26.635 28.0823 28.4052 32.1233 30.0292L32.0321 30.1735Z"
                    fill="white"
                  />
                  <path
                    d="M67.8949 21.3931C69.3051 22.4435 70.7514 23.5543 72.1734 24.6116C72.6971 25.0006 73.2711 25.3163 73.7899 25.6867C75.6268 27.0623 77.4661 28.4472 79.344 29.752C80.1706 30.3395 81.0841 30.8039 81.9424 31.3231C83.0623 31.899 84.1413 32.551 85.1721 33.2744C85.4663 33.5152 85.2644 34.0288 84.7229 34.3936C84.4108 34.6119 84.0559 34.7614 83.6818 34.8324C83.2986 34.9184 82.8986 34.8902 82.5313 34.7511C80.0098 33.7225 77.684 32.2678 75.6557 30.4506C74.3767 29.4049 72.9332 28.6031 71.5835 27.6662C70.2338 26.7294 68.6414 25.558 67.1864 24.4895L64.4931 22.5643L62.4653 21.1099C61.7991 20.5993 61.1304 20.0793 60.4505 19.5922C59.3994 18.875 58.2643 18.1803 57.2039 17.4657C56.9694 17.2988 56.7262 17.1741 56.4935 16.9768C56.1651 16.7467 55.8955 16.4426 55.7063 16.089C55.5701 15.836 55.5712 15.5313 55.7091 15.2792C55.7538 15.1593 55.814 15.0458 55.8883 14.9415C56.0414 14.7883 56.2537 14.7095 56.4697 14.7258C56.7625 14.7214 57.0525 14.7838 57.3176 14.9081C59.3467 15.8827 61.4748 17.0404 63.5365 18.2859C64.2989 18.7307 65.034 19.2208 65.7377 19.7537L67.9172 21.3272L67.8949 21.3931Z"
                    fill="white"
                  />
                  <path
                    d="M62.2951 19.2075L67.9816 22.7978C68.6769 23.2308 69.4337 23.5574 70.1197 23.9929C72.5354 25.553 74.9586 27.1411 77.4227 28.6583C78.5137 29.3225 79.6394 29.9277 80.7952 30.4715C82.2268 31.2665 83.8035 31.7829 84.9133 33.2036C85.2761 33.6257 84.8889 34.119 84.1424 34.5388C83.7308 34.7796 83.2938 34.9738 82.8392 35.1177C82.596 35.2133 82.3428 35.2812 82.0843 35.32C81.851 35.3122 81.621 35.2622 81.4055 35.1723C80.6488 34.8456 79.8895 34.5097 79.1371 34.162C78.3847 33.8142 77.6912 33.3508 76.9679 32.9253C75.5325 32.0583 74.1434 31.1169 72.8062 30.105C71.0792 28.9451 69.2852 27.8882 67.4334 26.94L61.6278 23.5015L58.0579 21.3617C56.2289 20.3135 54.4705 19.1566 52.6031 18.1887C51.1603 17.4266 49.637 16.8859 48.1609 16.2227C47.8307 16.0714 47.4918 15.9624 47.1753 15.7875C45.9937 15.1053 45.7501 14.6812 46.0559 13.6603C46.1315 13.4203 46.1859 13.176 46.2757 12.9522C46.6531 12.1973 47.5515 11.8648 48.3294 12.1921C51.1648 13.0843 53.8993 14.2697 56.4888 15.7292C58.4862 16.7721 60.4043 17.9662 62.3969 19.1403L62.2951 19.2075Z"
                    fill="white"
                  />
                  <path
                    d="M58.5547 19.4509C60.8128 20.6837 63.0622 21.9588 65.3116 23.2339C66.1338 23.6928 67.0055 24.0385 67.8333 24.5559C70.7208 26.1993 73.6015 27.8546 76.5411 29.3943C77.8532 30.0415 79.184 30.6838 80.5054 31.3285C82.1686 31.9816 83.965 32.7588 85.4302 33.6047C85.8793 33.864 85.8102 34.3519 85.1756 34.7417C84.2899 35.2238 83.2553 35.3548 82.2774 35.1088C80.3968 34.6138 78.5397 33.9828 76.726 33.2901C74.9123 32.5975 73.271 31.579 71.5881 30.5916C69.6177 29.3516 67.3484 28.5613 65.2155 27.5347C62.9096 26.3846 60.5988 25.2158 58.2705 23.9819L54.025 21.7434C51.8671 20.6236 49.7247 19.4497 47.5483 18.4847C45.8476 17.6918 44.1657 17.0438 42.4123 16.315C42.0142 16.1833 41.6321 16.0076 41.2731 15.7912C39.9856 14.9376 39.6985 14.4252 39.7665 13.5979C39.7708 13.4113 39.7912 13.2254 39.8273 13.0422C39.9559 12.4784 40.7487 12.3059 41.9055 12.4854L43.2053 12.6765C43.6233 12.7626 44.0361 12.8721 44.4418 13.0044C45.2556 13.2458 46.0894 13.5618 46.8914 13.7964C48.54 14.3344 50.1443 14.9999 51.6898 15.7868C53.9931 16.9276 56.3214 18.1615 58.6347 19.3396L58.5547 19.4509Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="hero-head hero-head-col">
                Virtual Learning Hub
              </div>
              <div className="hero-head">with Upskill Mafia!</div>
            </div>
            <div className="hero-text">
              Step into India's First Virtual Campus! A place to Connect,
              collaborate, & Boost your learning journey through teamwork and
              shared knowledge.
            </div>
            <div className="hero-avs-cont">
              <img src={heroavs} alt="hero-avs" />
              <div className="hero-avs-mem">5K+ Members</div>
            </div>
          </div>
          <a href="#choose">
            <div className="hero-cta">Join now for Free!</div>
          </a>
        </div>
        <div className="hero-right">
          <img src={heroright} alt="hero-right" />
        </div>
      </div>
      <div className="hero-btm">
        <div className="hero-btm-chip">
          <img src={hero1} alt="hero-btm-chip" />
          Hustling Community
        </div>
        <div className="hero-btm-chip">
          <img src={hero2} alt="hero-btm-chip" />
          Free Resources
        </div>
        <div className="hero-btm-chip">
          <img src={hero3} alt="hero-btm-chip" />
          Network & Get work!
        </div>
        <div className="hero-btm-chip" style={{ border: "none" }}>
          <img src={hero4} alt="hero-btm-chip" />
          Encouraging Environment
        </div>
      </div>
    </div>
  );
};

export default Hero;
