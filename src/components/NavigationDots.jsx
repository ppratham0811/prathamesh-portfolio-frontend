import React from "react";

import "./NavigationDots.scss";

const NavigationDots = ({ active }) => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <div className="app__navigation">
        {sections.map((section, index) => {
          return (
            <a
              className="app__navigation-dot"
              key={section + index}
              href={`#${section}`}
              style={active === section ? { backgroundColor: "var(--secondary-color)" } : {}}
            />
          );
        })}
      </div>
    </>
  );
};

export default NavigationDots;
