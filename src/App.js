import React from "react";

import { Navbar } from "./components";
import {
  About,
  Header,
  Footer,
  Skills,
  Work,
} from "./containers";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
