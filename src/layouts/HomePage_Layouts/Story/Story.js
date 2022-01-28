import React from "react";
import styles from "./Story.module.css";
import { BiCaretRight } from "react-icons/bi";
import Bengal_stretch from "assets/images/Bengal-stretch.png";

function Story() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center fs-72px black weight-4 mb-40px">
          Our Story
        </h1>

        <p className="font-cream-shoes fs-38px weight-5 mb-35px lh-1">
          Kitten Clubhouse is a community driven collection of 10,000 randomly
          generated NFTs on the Etherneum blochain. Our goal is to build the
          biggest group of frens in the metaverse. Ready to be beamed up? Kitten
          Clubhouse is a community driven collection of 10,000 randomly
          generated NFTs on the Etherneum blochain.
        </p>
        <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
          Our goal is to build the biggest group of frens in the metaverse.
          Ready to be beamed up? Kitten Clubhouse is a community driven
          collection of 10,000 randomly generated NFTs on the Etherneum
          blochain. Our goal is to build the biggest group of frens in the
          metaverse. Ready to be beamed up? Kitten Clubhouse is a community
          driven collection of 10,000 randomly generated NFTs on the Etherneum
          blochain. Our goal is to build the biggest group of frens in the
          metaverse. Ready to be beamed up?
        </p>

        <a
          href="#"
          className="fs-38px weight-5 font-cream-shoes black flex align-center w-fit-content"
        >
          <BiCaretRight /> Read more...
        </a>
        <div className="flex justify-end">
          <img src={Bengal_stretch} style={{ width: "100px" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
