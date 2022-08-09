import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { urlFor, client } from "../../Client";
import { AppWrapper } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <motion.h2 className="head-text" whileInView={{x:[1000,0]}} transition={{duration: 1}} viewport={{once: true}}>My <span>Skills</span></motion.h2>
      <motion.div className="app__skills-desc" whileInView={{opacity:[0,1]}} transition={{duration: 1}} viewport={{once: true}}>
        <h3 style={{marginBottom: 10}}>What I do?</h3>
        <p className="p-text">I am good at fullstack web development and machine learning. I build websites in the MERN stack. I am also good with other technologies such as git, figma, scss, bootstrap, tailwind etc. I put good efforts in optimizing the code, so that websites run efficiently. I always strive to make the functionalities better. I have used SQL and NoSQL based databases. I also have experience in AI/ML related works. I use Python for AI/ML and DL related tasks. I am also interested in blockchain technology, and I am currently learning more about it.</p>
      </motion.div>
      <div className="app__skills-container">
        <motion.div className="app__skills-list" whileInView={{opacity:[0, 1]}} transition={{duration: 1}} viewport={{once: true}}>
          {skills.map((skill, index) => {
            return (
              <div className="app__skills" key={`skill-${index}`}>
                <div
                  data-tip
                  data-for={skill.name}
                  key={index}
                  className="app__skills-icons"
                >
                  <img src={urlFor(skill.icon)} alt={`${skill.name}-icon`} />
                </div>
                <ReactTooltip id={skill.name} effect="solid" arrowColor="#000" className="skills-tooltip">{skill.name}</ReactTooltip>
                <p className="p-text skills-tooltip-p">{skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills");
