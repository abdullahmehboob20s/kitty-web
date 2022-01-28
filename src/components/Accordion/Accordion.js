import React from "react";
import styles from "./Accordion.module.css";
import { AiOutlinePlus } from "react-icons/ai";

function Accordion({ title }) {
  return (
    <div className={styles.accordion}>
      <button className={`${styles.accordionButton} pointer`}>
        <div className={styles.textWrapper}>
          <p className="fs-34px black weight-3">{title}</p>
        </div>

        <span className="flex">
          <AiOutlinePlus size={40} />
        </span>
      </button>
    </div>
  );
}

export default Accordion;
