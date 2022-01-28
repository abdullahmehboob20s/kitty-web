import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-50px">
        <div className={styles.footer}>
          <div className={styles.left}>
            <img src={logo} style={{ width: "449px" }} alt="" />
            <button className="button-blue fs-36px weight-4 pointer radius-24px">
              <div className="font-calli-cat-wrapper">
                <p className="font-calli-cat">Mint</p>
              </div>
            </button>
          </div>
          <div className={styles.right}>
            <a href="#" className="black">
              <FaDiscord size={45} />
            </a>
            <a href="#" className="black">
              <FaTwitter size={38} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
