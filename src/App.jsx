import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Expriences from "./sections/Expriences.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Expriences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
