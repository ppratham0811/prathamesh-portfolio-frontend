import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { urlFor, client } from "../../Client";
import {AppWrapper} from "../../wrapper/";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <motion.div className="app__about-header" whileInView={{x:[1000,0]}} transition={{duration: 1}} viewport={{once: true}}>
        <h1 className="head-text"><span>About</span> Me</h1>
      </motion.div>
      <motion.div className="app__about-desc" whileInView={{opacity:[0,1]}} transition={{duration: 1}} viewport={{once: true}}>
        <h3 style={{marginBottom: 10}}>Who I am?</h3>
        <p className="p-text">I am a B. Tech student at Vellore Institute of Technology, Chennai. I am pursuing Computer science and engineering with specialization in AI and ML. I love doing web development. I am an enthusiastic learner. I spend my time on learning more about tech and finance. I like to do projects. I have experience in web development. I always look to for solutions to problems I face. I am a problem solver, I never give up. I am also interested in startups and I would love to work for any startup as a fullstack web developer.</p>
      </motion.div>

      <motion.div style={{marginTop: 40}} whileInView={{x:[-1000,0]}} transition={{duration: 1}} viewport={{once: true}}>
        <h2 className="head-text">What I <span>Love to do?</span></h2>
      </motion.div>
      <div className="app__profiles">
        {abouts.reverse().map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: [0,1]}}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
              viewport={{once: true}}
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

export default AppWrapper(About, 'about', 'app__whitebg');
// export default About;
