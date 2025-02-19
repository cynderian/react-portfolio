import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import TextMotion from "../../components/TextMotion"

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        { /*src={getImageUrl("vvttmp.jpg")}*/ }
        <img
          src="black_image.png"
          alt="Profile Picture"
          sizes="max(min(max(100vw - 128px, 1px), 1200px) * 0.6399, 1px)"
          className={styles.profileImg}
        />
      </div>
      { /* implement smooth scroll? (lenis?) */ }
      <div className={styles.intro}>
        <div className={styles.name}>
          <TextMotion text="Vivian Tucholski"/>
        </div>
        <div className={styles.about}>
          <TextMotion delay={1} text="this is going to be a little section about myself and my ambitions and stuff I suppose"/>
        </div>
        <span className={styles.links}>
          <Link to="/Projects">
            <TextMotion delay={2} href="" text="Projects" className={styles.projects}/>
          </Link>
          <TextMotion delay={2} href="" text={<a className={styles.resume} href='/Vivian_Tucholski_Resume.pdf' download>Resume</a>} />
        </span>
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