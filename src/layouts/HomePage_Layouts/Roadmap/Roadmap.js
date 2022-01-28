import React from "react";
import styles from "./Roadmap.module.css";
import roadmap_cat from "assets/images/roadmap-cat.png";
import Sleeping_wizard from "assets/images/Sleeping-wizard.png";
import gold_cat from "assets/images/gold-cat.png";

const Card = ({ index, desc, toRight = false, children }) => {
  return (
    <div className={styles.card} style={{ marginLeft: toRight ? "auto" : 0 }}>
      <h1 className="fs-72px white font-cream-shoes mb-15px">Step {index}</h1>
      <div className={styles.cardContent}>
        <p className="font-cream-shoes fs-30px weight-5">{desc}</p>
        {children}
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="fs-72px text-center black weight-4 mb-50px">Roadmap</h1>
        <div className="mb-50px">
          <img src={roadmap_cat} className={styles.roadmap_cat} alt="" />
        </div>

        <div className={styles.cards}>
          <Card
            index="1"
            desc="Boarding complete. 24 hours after mint date, the official reveal will happen on OpenSea."
          />
          <Card
            index="2"
            desc="Introduction to decentralized charity. Community votes on weekly charitable acts regarding our partnered shelters and rescues."
            toRight={true}
          />
          <Card
            index="3"
            desc="Read...set...art! We give away portions of proceeds back to the community in the form of various prizes. We love contests!"
          />
          <Card
            index="4"
            desc="Official Kitten Clubhouse merch drop #1. The kittens have requested the drip. (Reveal coming soon...)"
            toRight={true}
          >
            <img
              src={Sleeping_wizard}
              className={styles.Sleeping_wizard}
              alt=""
            />
          </Card>
          <Card
            index="5"
            desc="Time for the Kitten games: Official Twitch streamed, community-wide gaming tourneys with tasty eth prizes!"
          />
          <Card
            index="6"
            desc="Community trials commence as community members complete a series of tasks to prove their loyalty and win kitty council chairs that enable them to help guide the project alongside the devs."
            toRight={true}
          />
          <Card
            index="7"
            desc="We tease the first Kitten Clubhouse roadmap expansion...oh yeah, this current roadmap has nothing on what’s coming next. We are here to stay, and are only getting started."
          >
            <img src={gold_cat} className={styles.gold_cat} alt="" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
