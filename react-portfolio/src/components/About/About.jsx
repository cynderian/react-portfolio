import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img src={getImageUrl(@about)} */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p> I&apos;m a frontend developer, with experience making React-ive and responsive sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>nodejs and python and sql and stuff</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                            <h3>even more code</h3>
                            <p>why do i write so much code</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}