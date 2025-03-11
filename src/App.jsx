import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "./components/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Navbar />
          <Hero></Hero>
        </div>

        <div>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
