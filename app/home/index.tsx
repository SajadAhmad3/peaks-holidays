import React from "react";
import Banner from "./sections/banner";
import About from "./sections/about";
import Services from "./sections/services";
import Destinations from "./sections/destinations";
import Packages from "./sections/packages";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Destinations />
      <Packages />
    </div>
  );
}

export default Home;
