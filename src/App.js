import React from "react";

import { Navbar } from "./components";
import {
  About,
  Header,
  Footer,
  Skills,
  Work,
  Contact
} from "./containers";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
