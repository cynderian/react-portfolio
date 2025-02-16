import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import TextMotion from "../../components/TextMotion"

export default function Home() {
  return (
    <div className="home">
      { /* implement smooth scroll? (lenis?) */ }
      <div className={styles.intro}>
        <TextMotion text="Vivian Tucholski"/>
        <TextMotion delay={1} text="this is going to be a little section about myself and my ambitions and stuff I suppose"/>
        <div className={styles.links}>
        <Link to="/Projects">
          <TextMotion delay={2} href="" text="Projects"/>
        </Link>
          <TextMotion delay={2} href="" text={<a href='/Vivian_Tucholski_Resume.pdf' download>Resume</a>} />
        </div>
      </div>
      
      <div className={styles.specialties}>
        <div className={styles.frontendBox}>
          <h1>Frontend</h1>
          <p>details</p>
        </div>
        <div className={styles.backendBox}>
          <h1>Backend</h1>
          <p>details</p>
        </div>
        <div className={styles.cicdBox}>
          <h1>CI/CD</h1>
          <p>details</p>
        </div>
      </div>
      <div className={styles.skills}>
          <h1>Skills</h1>
          <p>figure out how to put a table of skills/technologies from resume here, probably something to do with grids</p>
          <p>make them decently size with images next to them for each</p>
          <p>perhaps use favicons or another image importer rather than editing each in individually</p>
      </div>
    </div>
  );
};