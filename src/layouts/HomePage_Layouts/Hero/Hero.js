import React from "react";
import styles from "./Hero.module.css";
import { FaDiscord } from "react-icons/fa";
import hero_kitty from "assets/images/hero-kitty.png";
import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow1000 = useMediaQuery("(max-width:1000px)");

  return (
    <div className={styles.container}>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className="mb-40px">
              <h1 className="fs-66px weight-4 mb-20px">
                Unleash...the kittens
              </h1>
              <p className="font-cream-shoes fs-40px weight-5 lh-1">
                The kittens are about to storm the blockchain! On February
                26thth we open access to the Kitten Clubhouse. Join the kittens
                and enjoy the benefits of being a part of our community! 10k
                NFTs, 0.1 ETH each...oh yeah, time to grab the catnip.
              </p>
            </div>

            <div className={styles.btns}>
              <button className="button-pink  fs-48px weight-4 pointer radius-24px lh-1">
                <span className="flex">
                  <FaDiscord size={isBellow1000 ? 35 : 58} />
                </span>
                <div className="font-calli-cat-wrapper">
                  <p className="font-calli-cat">Discord</p>
                </div>
              </button>
              <Link
                to="/mint"
                className="button-blue fs-48px weight-4 pointer radius-24px black"
              >
                <div className="font-calli-cat-wrapper">
                  <p className="font-calli-cat">Mint</p>
                </div>
              </Link>
            </div>
          </div>

          <img src={hero_kitty} className={styles.hero_kitty} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
