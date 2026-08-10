import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <main>
      <SEO title="Головна" />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
