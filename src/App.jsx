import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Offer,
  Projects,
  Contact,
  Footer,
} from "./components/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative z-0 bg-dark">
        <div>
          <Navbar />
          <Hero></Hero>
        </div>

        <div>
          <About />
          <Projects />
          <Offer />
          <Contact />
        </div>
        <Footer></Footer>
      </main>
    </BrowserRouter>
  );
};

export default App;
