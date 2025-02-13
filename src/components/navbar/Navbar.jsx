import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styles from "./Navbar.module.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={styles.navbar}>
          <Link to="#" className={styles.menuBars} onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
        </div>
        <nav
          className={
            sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
          }
        >
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            <li className={styles.navbarToggle}>
              <Link to="#" className={styles.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
            className={!sidebar ? `${styles.overlay}` : `${styles.overlay} ${styles.visible}`}
            onClick={showSidebar}
        />
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
