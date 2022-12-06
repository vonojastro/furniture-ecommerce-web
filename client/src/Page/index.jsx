import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <div className="max-w-7xl mx-auto py-10">
        <Cards />
        <Banner />
        <Carousel />
      </div>
    </>
  );
};

export default LandingPage;
