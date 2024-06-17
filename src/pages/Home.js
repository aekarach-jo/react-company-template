import React from "react";
import Slider from "../components/Slider/Slider";
import About from "../components/About/About";
import BgSec from "../components/BgSec/BgSec";
import Services from "../components/Services/Services";
import Features from "../components/Features/Features";
import Portfolio from "../components/Portfolio/Portfolio";
import Pricing from "../components/Pricing/Pricing";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Client from "../components/Client/Client";
import FunFacts from "../components/Fun-facts/FunFacts";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <BgSec />
      <Services />
      <Features />
      <Portfolio />
      <Pricing />
      <Team />
      <Testimonials />
      <FunFacts />
      <Blog />
      <Client />
      <Contact />
    </>
  );
};

export default Home;
