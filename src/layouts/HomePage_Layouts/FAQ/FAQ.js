import Accordion from "components/Accordion/Accordion";
import React from "react";
import styles from "./FAQ.module.css";
import Cat_playing from "assets/images/Cat-playing.png";

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center fs-72px black weight-4 mb-40px">FAQs</h1>

        <div className={styles.faqs}>
          <img src={Cat_playing} className={styles.Cat_playing} alt="" />
          <Accordion title="How do I get a Kitten Clubhouse NFT ?">
            <p className="font-cream-shoes fs-40px black mb-5px weight-5">
              How to buy
            </p>
            <p className="font-cream-shoes fs-34px black mb-15px">
              Here are the steps on what you need to do to get your Kitten
              Clubhouse NFT.
            </p>

            <ol>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Download the metamask.io extension on your browser
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Purchase Ethereum from various exchanges, such as Coinbase or
                Binance
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Send Ethereum from this exchange to your MetaMask wallet
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                On launch day, open the Kitten Clubhouse website and select the
                number of NFTs you wish to mint
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Click “MINT” button, Metamask will popup asking for connection
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                . Confirm the transaction and any associated fees
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Once you have made your purchase, your NFTs will appear in your
                wallet and on OpenSea
              </li>
            </ol>
          </Accordion>
          <Accordion title="When will Kitten Clubhouse Launch ?">
            <p className="font-cream-shoes fs-34px black ">
              The pre-sale will launch on February 18th at 9AM MST and our
              public sale on February 19th at 9AM MST.
            </p>
          </Accordion>
          <Accordion title="Why Kitten Clubhouse ?">
            <p className="font-cream-shoes fs-40px black mb-25px weight-5">
              Why not Kitten Clubhouse? I mean…
            </p>

            <ul className="mb-40px" style={{ paddingLeft: "28px" }}>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                A project that does real good for animals with full
                transparency, researched partnerships, and picture receipts of
                the actual animals we’re saving the lives of?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                A community built for real connections, job opportunities,
                project help, skillshare, alpha, and help in actually “making
                it” in this new crypto/NFT journey in the most wholesome way
                possible?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                Twitch gaming tournaments with eth prizes and regularly
                scheduled in-house streaming channels?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                Movie/TV streaming nights with the kittens?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                Exclusive access to merch drops designed by people who have
                actually made great looking merch before? Including merch that
                will be unique to the specific kittens held in your wallet?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                The cutest, softest, most-cuddly prone NFT kittens on the
                blockchain that will appreciate in value over time to make our
                holders great wealth?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                With even greater things to come in a future expanded roadmap
                reveal, but also at the same time is making realistic promises
                they can keep?
              </li>
              <li className="fs-30px mb-20px black font-cream-shoes lh-1">
                Opportunities to be a part of the kitten high council and have a
                say in the direction of the projects with opportunities to work
                with the project devs?
              </li>
            </ul>

            <p className="font-cream-shoes fs-34px black">
              Yeah…we could keep going on, but the kittens are getting antsy…we
              gotta run and get more catnip
            </p>
          </Accordion>
          <Accordion title="What does my Kitten Clubhouse NFT do for me ?">
            <p className="font-cream-shoes fs-30px black weight-5">
              Gives you exclusive access to everything we just mentioned above
              because without it, you won’t be allowed access to the clubhouse.
              It will also give you a cute little NFT kitten to look at in your
              down time…here kitty kitty.
            </p>
          </Accordion>
          <Accordion title="What are the mint details ?">
            <p className="font-cream-shoes fs-30px black weight-5">
              The mint will cost .05 ETH + gas fees for whitelisted wallets, and
              .09 ETH public sale. Mint date to be revealed.
            </p>
          </Accordion>
          <Accordion title="What if I have more questions ?">
            <p className="font-cream-shoes fs-30px black weight-5">
              Great, we have a more detailed FAQ page with both beginner and
              intermediate FAQs in our discord. Find us there!
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
