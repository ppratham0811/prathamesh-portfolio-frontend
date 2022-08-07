import React from "react";
import { NavigationDots } from "../components/";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <div className={`app__container ${classNames}`} id={idName}>
          <div className="app__wrapper app__flex">
            <Component />
          </div>
          <NavigationDots active={idName} />
        </div>
      </>
    );
  };

export default AppWrapper;
