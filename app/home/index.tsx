import React from "react";
import Banner from "./sections/banner";
import Services from "./sections/services";
import Destinations from "./sections/destinations";
import Packages from "./sections/packages";
import Team from "./sections/team";
import ContactUs from "./sections/contact-us";

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Destinations />
      <Packages />
      <Team/>
      <ContactUs />
    </div>
  );
}


export default Home;
