import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.socialLinks}>
            <a href="#" className="white">
              <FaTwitter size={40} />
            </a>
            <a href="#" className="white">
              <FaDiscord size={45} />
            </a>
          </div>
          <div className={styles.center}>
            <img src={logo} style={{ width: "505px" }} alt="" />
          </div>
          <div className={styles.btns}>
            <button
              className={`${styles.walletBtn} fs-26px weight-4 black pointer`}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
