import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import styles from "./Navbar.module.css";

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'



export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // return (
    //     <>
    //         {/* <div className={styles.navbar}>
    //             <a className={styles.title} href="/">Portfolio</a>
    //             <div className={styles.menu}>
    //                 <button className={styles.menuBtn} type="button">
    //                     <svg className={styles.svg} viewBox="0 0 24 24">
    //                         <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div> */}
    //         <div className={styles.navbar}>
    //             <Link to='#' className={styles.menuBars}>
    //                 <FaIcons.FaBars onclick={showSidebar} />
    //             </Link>
    //         </div>
    //         <nav className={sidebar ? `${styles.sideMenu}` : `${styles.sideMenu}`}>
    //             <ul className={styles.navMenu}>
    //                 <li>
    //                     <Link to='#' className={styles.menuBars}>
    //                         <AiIcons.AiOutlineClose />
    //                     </Link>
    //                 </li>
    //                 {SidebarData.map((item, index) => {
    //                     return (
    //                         <li key={index} className={item.cName}>
    //                             <Link to={item.path}>
    //                                 {item.icon}
    //                                 <span>{item.title}</span>
    //                             </Link>
    //                         </li>
    //                     );
    //                 })}
    //             </ul>
    //         </nav>
    //     </>
    // );

    return (
        <>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
        </>
      );
};