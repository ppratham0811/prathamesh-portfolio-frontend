import React, { useState } from "react";

import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "skills", "projects", "contact"].map(
            (navSection) => {
              return (
                <li key={`link-${navSection}`} className="app__flex p-text">
                  <div />
                  <a href={`#${navSection}`}>{navSection}</a>
                </li>
              );
            }
          )}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
                {["home", "about", "skills", "projects", "contact"].map(
                  (navSection) => {
                    return (
                      <li key={navSection}>
                        <a
                          href={`#${navSection}`}
                          onClick={() => setToggle(false)}
                        >
                          {navSection}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <motion.div
        className="scroll-indicator"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default Navbar;
