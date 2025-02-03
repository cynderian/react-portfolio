import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen 
                            ? getImageUrl("sidegr.png") 
                            : getImageUrl("borgr.png")
                    } 
                    alt="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#about'>Projects</a>
                    </li>
                    <li>
                        <a href='#about'>Skills</a>
                    </li>
                    <li>
                        <a href='#about'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};