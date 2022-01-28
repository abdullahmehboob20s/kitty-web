import Accordion from "components/Accordion/Accordion";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-100px">
        <h1 className="text-center fs-72px black weight-4 mb-40px">FAQs</h1>

        <div className={styles.faqs}>
          <Accordion title="How do I get a Kitten Clubhouse NFT ?" />
          <Accordion title="When will Kitten Clubhouse Launch ?" />
          <Accordion title="Why Kitten Clubhouse ?" />
          <Accordion title="What does my Kitten Clubhouse NFT do for me ?" />
          <Accordion title="What are the mint details ?" />
          <Accordion title="What if I have more questions ?" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
