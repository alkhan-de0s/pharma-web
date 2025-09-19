import React from "react";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import HeroUI from "./components/HeroSection";
import Product from "./components/Product";
import FormUI from "./components/Form";
import Partners from "./components/Partners";
const Home = () => {
  return (
    <main>
      <Slider />
      <Cards />
      <HeroUI />
      <Product/>
      <FormUI/>
      <Partners/>
    </main>
  );
};

export default Home;
