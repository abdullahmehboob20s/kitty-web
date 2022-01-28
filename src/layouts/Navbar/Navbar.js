import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import opensea_icon from "assets/images/opensea-icon.svg";

import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div>
            <img src={logo} className={`${styles.logo} w-full`} alt="" />
          </div>
          <div className={styles.links}>
            <ScrollLink
              offset={-30}
              to="about"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">About</p>
            </ScrollLink>
            <ScrollLink
              offset={-30}
              to="roadmap"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Roadmap</p>
            </ScrollLink>
            <ScrollLink
              offset={-30}
              to="team"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Team</p>
            </ScrollLink>
            <ScrollLink
              offset={-30}
              to="faq"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">FAQ</p>
            </ScrollLink>
            <ScrollLink
              offset={-30}
              to="story"
              className="font-winter-soraya-wrapper flex w-fit-content pointer"
            >
              <p className="font-winter-soraya fs-72px white">Story</p>
            </ScrollLink>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className="white">
              <FaTwitter size={40} />
            </a>
            <a href="#" className="white">
              <FaDiscord size={45} />
            </a>
            <a href="#" className="white">
              <img src={opensea_icon} style={{ width: "40px" }} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
