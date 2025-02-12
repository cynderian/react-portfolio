import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Me</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:vivian.tucholski@gmail.com">
            vivian.tucholski@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedInIcon.png")} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/vivian-tucholski-19226b2b9/">
            linkedin.com/vivian-tucholski
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
          <a href="https://github.com/Cynderian">github.com/cynderian</a>
        </li>
      </ul>
    </footer>
  );
};
