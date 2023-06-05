import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";

function HomePage() {
  return (
    <div>
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
