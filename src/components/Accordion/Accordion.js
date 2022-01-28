import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { AiOutlinePlus } from "react-icons/ai";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      setIsOpen(true);
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
    } else {
      setIsOpen(false);
      bodyRef.current.style.height = 0;
    }
  };

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionButton} ${
          isOpen ? styles.active : ""
        } pointer`}
        onClick={handler}
      >
        <div className={styles.textWrapper}>
          <p className="fs-34px black weight-3">{title}</p>
        </div>

        <span className="flex">
          <AiOutlinePlus size={40} />
        </span>
      </button>

      <div className={styles.accordionBody} ref={bodyRef}>
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
