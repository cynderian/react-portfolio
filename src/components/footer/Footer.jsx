import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <div>
              <h1>Links</h1>
              <a href="https://www.linkedin.com/in/vivian-tucholski-19226b2b9/">LinkedIn</a>
              <a href="https://github.com/cynderian">GitHub</a>
              <a>Resume</a>
            </div>
            <div>
              <h1>Contact</h1>
              <h2>vivian.tucholski@gmail.com</h2>
              <h2>678-772-8938</h2>
              <h2>Richardson, TX</h2>
            </div>
        </>
    )
};