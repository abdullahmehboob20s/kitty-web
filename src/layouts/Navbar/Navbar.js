import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import opensea_icon from "assets/images/opensea-icon.svg";

import { Link as ScrollLink } from "react-scroll";
import useMediaQuery from "hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [show, setShow] = useState(false);
  const isBellow1000 = useMediaQuery("(max-width:1000px)");
  const menuRef = OutsideClickDetector(() => {
    setShow(false);
  });

  return (
    <div className={styles.navbarWrapper}>
      <div className={`black-screen ${show ? "show" : ""}`}></div>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div>
            <img src={logo} className={`${styles.logo} w-full`} alt="" />
          </div>
          <div
            className={`${styles.links} ${show ? styles.show : ""}`}
            ref={menuRef}
          >
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

            <button className={styles.closeBtn} onClick={() => setShow(false)}>
              <GrFormClose size={35} />
            </button>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className="white">
              <FaTwitter size={isBellow1000 ? 25 : 40} />
            </a>
            <a href="#" className="white">
              <FaDiscord size={isBellow1000 ? 30 : 45} />
            </a>
            <a href="#" className="white">
              <img
                src={opensea_icon}
                style={{ width: isBellow1000 ? "25px" : "40px" }}
                alt=""
              />
            </a>

            <button
              className={`${styles.hamburger} pointer white`}
              onClick={() => setShow(true)}
            >
              <GiHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
