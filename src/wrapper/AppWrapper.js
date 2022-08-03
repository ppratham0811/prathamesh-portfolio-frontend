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
            {/* <div className="copyright">
              <p className="p-text">
                {currentYear}&copy;Prathamesh Potabatti&trade;
              </p>
              <p className="p-text">All Rights Reserved</p>
            </div> */}
          </div>
          <NavigationDots active={idName} />
        </div>
      </>
    );
  };

export default AppWrapper;
