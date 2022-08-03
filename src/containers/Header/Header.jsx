import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { images } from "../../constants";
import {AppWrapper} from "../../wrapper/";

const scaleVariants = {
  animate: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        animate={{ opacity: [0, 1], x: [-300, 0] }}
        // whileInView={{ opacity: [0, 1], x: [-300, 0] }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h2>cout &lt;&lt;</h2>
              <h1 className="head-text">
                "Prathamesh
                <br />
                Potabatti";
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p>&lt;ul&gt;</p>
            <p className="p-text">
              <span>&lt;li&gt;</span>
              <span>Fullstack Web Developer</span>
              <span>&lt;/li&gt;</span>
            </p>
            <p className="p-text">
              <span>&lt;li&gt;</span>
              <span>AI/ML Developer</span>
              <span>&lt;/li&gt;</span>
            </p>
            <p className="p-text">
              <span>&lt;li&gt;</span>
              <span>Backend Developer</span>
              <span>&lt;/li&gt;</span>
            </p>
            <p className="p-text">
              <span>&lt;li&gt;</span>
              <span>Blockchain Enthusiast</span>
              <span>&lt;/li&gt;</span>
            </p>
            <p>&lt;/ul&gt;</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0, 1], scale: [0, 1], rotate: [-180, 0] }}
        transition={{ duration: 1, delayChildren: 0.4, ease: "easeIn" }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" id="app__profile-img" />
        <motion.img
          animate={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        animate={scaleVariants.animate}
        className="app__header-circles"
      >
        <div className="circle-cmp app__flex" key={`circle-1`}>
          <a
            href="https://github.com/ppratham0811"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.github} alt="circle" />
          </a>
        </div>
        <div className="circle-cmp app__flex" key={`circle-2`}>
          <a
            href="https://www.linkedin.com/in/prathamesh-potabatti/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.linkedin} alt="circle" />
          </a>
        </div>
        <div className="circle-cmp app__flex" key={`circle-3`}>
          <a
            href="https://www.instagram.com/m_pratha_esh/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.instagram} alt="circle" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, 'home');
