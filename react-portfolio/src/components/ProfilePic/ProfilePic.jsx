import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./ProfilePic.module.css";

export const ProfilePic = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vivian</h1>
                <p className={styles.description}>I'm a full stack developer with 3 years of experience in using React and NodeJS. Reach out if you'd like to learn more!</p>
                <a href="mailto:viviantucholski@gmail.com" className={styles.contactLink}>Contact Me</a>
            </div>
            <img src={ getImageUrl("vvttmp.jpg")} alt="Profile Picture" className={styles.profileImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}