import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrapper } from "../../wrapper/";
import { urlFor, client } from "../../Client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleProjects = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 50, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 400);
  };
  return (
    <>
      <motion.h2 className="head-text" whileInView={{x:[-1000,0]}} transition={{duration: 1}} viewport={{once: true}}>
      My <span>Projects</span>
      </motion.h2>
      <div className="app__work-filter">
        {["Web Apps", "Backend APIs", "AI/ML", "All"].map((item, index) => {
          return (
            <div
              key={index}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              onClick={() => handleProjects(item)}
            >
              {item}
            </div>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        viewport={{once: true}}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-content-links">
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  <span></span>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <AiFillEye />
                  </a>
                </div>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

// export default Work;
export default AppWrapper(Work, "projects", 'app__whitebg');
