import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
          <div className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.linkBox}>
                <h1 className={styles.title}>Links</h1>
                <p>
                  <a href="https://www.linkedin.com/in/vivian-tucholski-19226b2b9/">LinkedIn</a>
                </p>
                <p>
                  <a href="https://github.com/cynderian">GitHub</a>
                </p>
                <p>
                  <a href='/Vivian_Tucholski_Resume.pdf' download>Resume</a>
                </p>
              </div>
              <div className={styles.contactBox}>
                <h1 className={styles.title}>Contact</h1>
                <a href='mailto:vivian.tucholski@gmail.com'>vivian.tucholski@gmail.com</a>
                <p>678-772-8938</p>
                <p>Richardson, TX</p>
              </div>
            </div>
          </div>
      </>
    )
};