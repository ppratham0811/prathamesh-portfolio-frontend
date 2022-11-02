import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";


import { Navbar } from "./components";

import { About, Header, Footer, Skills, Work, Contact } from "./containers";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#007AB9");

  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000)
  }, [])

  return (
    <div>
      {
        loading ? <HashLoader cssOverride={{display: "block", margin: "40vh auto"}} loading={loading} color={color} size={50} aria-label="Loading Spinner" data-testid="loader" /> :
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      }
    </div>
  );
};

export default App;
