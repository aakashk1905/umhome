import React from "react";
import "./styles/Home.css";
import Hero from "../Components/Hero";
import Allinone from "../Components/Allinone";
import Communities from "../Components/Communities";
import Stories from "../Components/Stories";
import JoinCommunity from "../Components/JoinCommunity";
import PersonalDashboard from "../Components/PersonalDashboard";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";
import Roadmap from "../Components/Roadmap";
const Home = () => {
  return (
    <div className="home-cont">
      <Hero />
      <Allinone />
      <Communities />
      <Stories />
      <JoinCommunity />
      <PersonalDashboard />
      <Roadmap />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
