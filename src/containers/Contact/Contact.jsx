import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

import { AppWrapper } from "../../wrapper";
import { motion } from "framer-motion";

const Contact = () => {
  const [formBtnText, setFormBtnText] = useState("Send Message 📤");

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE,
      templateId = process.env.REACT_APP_EMAILJS_TEMPLATE;

    emailjs
      .sendForm(serviceId, templateId, form.current, "FxjtemBzB63O7q6iG")
      .then(
        (result) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          }, 5000);
          e.target.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <motion.h2
        className="head-text"
        whileInView={{ x: [1000, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span>Contact</span> Me
      </motion.h2>
      <motion.div
        className="app__contact-section"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="app__contact-section-first-div">
          <div>
            <h4>Name</h4>
            <p>Prathamesh Potabatti</p>
          </div>
          <div>
            <h4>My Email</h4>
            <p>ppratham0811@gmail.com</p>
          </div>
          <div>
            <h4>My Contact No</h4>
            <p>+91 9309927871</p>
          </div>
          <div>
            <p>
              You can send a connection request to me on{" "}
              <a
                href="https://www.linkedin.com/in/prathamesh-potabatti/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <br />
              My{" "}
              <a
                href="https://github.com/ppratham0811"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>{" "}
              profile, you will find all of my projects here
              <br />
              Please follow me on{" "}
              <a
                href="https://www.instagram.com/m_pratha_esh/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>{" "}
              as well
            </p>
            <p className="p-text">
              **Details entered in this form will stay confidential.
            </p>
          </div>
        </div>
        <div>
          {!isFormSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="app__contact-form">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name*"
                required
              />
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email*"
                required
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Enter Subject*"
                required
              />
              <textarea
                name="user_message"
                id="contact-message"
                cols="50"
                rows="10"
                placeholder="Enter your message here*"
                required
              ></textarea>
              <button type="submit">
                {loading ? "Sending..." : formBtnText}
              </button>
            </form>
          ) : (
            <h2 style={{marginTop: 26}}>Thank you, I will get back to you soon✌</h2>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default AppWrapper(Contact, "contact");
