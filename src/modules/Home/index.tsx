import React from "react";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import HeroUI from "./components/HeroSection";
import Product from "./components/Product";
import FormUI from "./components/Form";
const Home = () => {
  return (
    <div>
      <Slider />
      <Cards />
      <HeroUI />
      <Product/>
      <FormUI/>
    </div>
  );
};

export default Home;
