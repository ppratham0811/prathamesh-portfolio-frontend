import React from "react";

import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="app__footer-sticky">
        <p className="p-text">{`${currentYear}-${currentYear+1}`}&copy; Prathamesh Potabatti</p>
      </footer>
    </>
  );
};

export default Footer;
