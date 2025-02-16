import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
          <div className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.linkBox}>
                <h1 className={styles.title}>Links</h1>
                <h2>
                  <a href="https://www.linkedin.com/in/vivian-tucholski-19226b2b9/">LinkedIn</a>
                </h2>
                <h2>
                  <a href="https://github.com/cynderian">GitHub</a>
                </h2>
                <h2>
                  <a>Resume</a>
                </h2>
              </div>
              <div className={styles.contactBox}>
                <h1 className={styles.title}>Contact</h1>
                <h2>vivian.tucholski@gmail.com</h2>
                <h2>678-772-8938</h2>
                <h2>Richardson, TX</h2>
              </div>
            </div>
          </div>
      </>
    )
};