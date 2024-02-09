import "./styles/Stories.css";

import { Swiper, SwiperSlide } from "swiper/react";

// import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Stories = () => {
  const arr = [
    <div className="story-card">
      <div className="story-card-head">
        The mentorship program at Upskill Mafia was invaluable in shaping my web
        Development career, highly recommended!
      </div>
      <div className="story-card-line"></div>
      <div className="story-card-btm">
        <div className="story-name">Sourabh Porwal,</div>
        <div className="story-post">UI UX Designer, Bankly</div>
      </div>
    </div>,
    <div className="story-card">
      <div className="story-card-head">
        The mentorship program at Upskill Mafia was invaluable in shaping my
        design career, highly recommended!
      </div>
      <div className="story-card-line"></div>
      <div className="story-card-btm">
        <div className="story-name">Isha Sharma ,</div>
        <div className="story-post">UI UX Designer</div>
      </div>
    </div>,
    <div className="story-card">
      <div className="story-card-head">
        The monthly hackathons ,events and Competitions pushed me to think
        outside the box and apply my skills to real projects.
      </div>
      <div className="story-card-line"></div>
      <div className="story-card-btm">
        <div className="story-name">Jayash Thapa ,</div>
        <div className="story-post">UI UX Designer</div>
      </div>
    </div>,
  ];
  return (
    <div className="story-cont">
      <div className="story-top">
        <div className="story-head">
          Community <b className="story-head-col">Stories!</b>
        </div>
        <div className="story-text">What our students say!</div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {arr.map((ar, index) => {
          return <SwiperSlide key={index}>{ar}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Stories;
