import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { urlFor, client } from "../../Client";
import {AppWrapper} from "../../wrapper/";


// const abouts = [
//   {
//     title: "Fullstack Web Developer",
//     description: "I love web development",
//     imgUrl: images.about01
//   },
//   {
//     title: "AI/ML Developer",
//     description: "B. Tech in CSE with Specialization in AI/ML",
//     imgUrl: images.about02
//   },
//   {
//     title: "Blockchain Enthusiast",
//     description: "Very interested in blockchain development, currently learning it",
//     imgUrl: images.about03
//   }
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <motion.div id="about" className="app__about-header" whileInView={{x:[1000,0]}} viewport={{once: true}}>
        <span>About </span>me
      </motion.div>
      <div className="app__profiles">
        {abouts.reverse().map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text">{about.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrapper(About, 'about');
// export default AppWrapper(About, 'about');
