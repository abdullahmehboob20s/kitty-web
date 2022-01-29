import React, { useState } from "react";
import styles from "./Story.module.css";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import Bengal_stretch from "assets/images/Bengal-stretch.png";

function Story() {
  const [readMore, setReadMore] = useState(false);
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

        <button
          className={`pointer fs-38px weight-5 font-cream-shoes black flex align-center w-fit-content ${
            readMore ? "mb-30px" : ""
          }`}
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? <BiCaretDown /> : <BiCaretRight />}{" "}
          {readMore ? "Read Less" : "Read more..."}
        </button>

        {readMore ? (
          <div>
            <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
              A goal, a vision, three friends with big plans to create something
              lasting, useful, and wholesome
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
              It all started with three dudes. Three dudes fresh out of
              undergrad, and yup, you guessed it, all business majors covering
              areas such as social media marketing, product strategy, operations
              etc, with a few fun minors, some developer certificates here and
              there, yada yada, sounds pretty typical right?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
              Well think again…
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
              These friends aren't your typical meat-headed business
              graduates…they’ve actually seen and done a thing or two.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
              These friends aren't your typical meat-headed business
              graduates…they’ve actually seen and done a thing or two.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              So how exactly did we all spend our years in highschool and
              undergrad? Well, between the lot of us we’ve managed to:
            </p>

            <ul className="mb-60px">
              <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Successfully conducted affiliate marketing campaigns for
                companies such as PAX Labs, Salesforce CRM products, commercial
                solar systems, as well as a ton of other software and
                tech-focused projects and companies.
              </li>
              <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Deep dived into influencer marketing and paid advertising with
                Instagram, Twitter, TikTok, Snapchat, and Facebook ads in which
                we implemented for our own individual projects such as varying
                ecommerce shopify stores, charity campaigns, school projects,
                and art auctions.
              </li>
              <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Created over the last 6 years: music videos for upcoming rap and
                hip-hop artists, the hype videos you see on YouTube for
                professional winter sports athletes sponsored by GopPro and
                Redbull, advertising videos for a wide portfolio of university
                organizations, animal shelters awareness videos, and much more
                with PremierPro and other Adobe creative softwares.
              </li>
              <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Two of us come from a background of investing in the stock
                market, from a 4 year experienced day trader, to a 7 year
                experienced long term investor that has killed it time and time
                again with big plays. He is basically Elon approved and both
                have shifted their success to the crypto markets
              </li>
              <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Lead a small team of graphic artists from all over the world
                with over 500+ successful orders regarding logo design, branding
                identity, illustration, social media design, and other printing
                and publishing orders. We dig the art.
              </li>
            </ul>

            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Whew…ok so why the heck did we note all of this to you?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Are we noting this to brag?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              No.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Are we simply flexing our skills and achievements?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Eh, not quite, but we’re flattered if you're impressed. Compared
              to the other wildly talented people we’re working with on
              Kittenclubhouse, this is just slight work.{" "}
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We’re actually noting all this because when you invest in a
              project, you’re not just investing in a project, you’re also
              investing in us, our team, our ability to deliver, our ability to
              get things done, and to get our goals met as well as to provide
              immense value for our community, HODLers, and official partners
              time and time again. We want you, our community, to be proud to
              place your trust in us in creating something truly amazing 🐾🐾🐾
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Ok…so enough about us, what about the goods?…The actual project
              here.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We’re so glad you asked.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Kitten Clubhouse was conceived to be not just a normal cat NFT set
              that you and your grandma see every other day of the week. It’s
              meant to cultivate the power of it’s community to do actual good
              in the physical world, and eventually, the metaverse alike.{" "}
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              🐈 We also really love animals…like REALLY love animals, cats too
              if you couldn’t tell 🐈
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              So that’s where we started…we made a bunch of friggin cats…about
              10,000 of them .
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              From there we made one of the main pivots of our set to help save
              the lives of cats, kittens, and other animals all around through
              official partners with the proceeds made off of the sales of this
              set! We did our due diligence to research and find authentic,
              legitimate, transparent, non-euthanizing, and non-corrupt animal
              shelters all over the U.S. to partner with so that funds are
              allocated to the right places.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              These funds will help our cute, furry friends by providing funds
              for the care of homeless animals to prevent them from being
              euthanized and to help them find a proper home, pay for expenses
              needed to run current and additional animal shelters as well as
              provide the equipment, food, water, needed to do so. These
              proceeds will additionally provide for the medical procedures and
              equipment needed to bring these helpless animals from poor health
              back to tip top shape in order to prep them for adoption. You can
              check out exactly all the ways at kittenclubhouse.io and
              austinpetsalive.com! 🧶🧶🧶
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We love it guys, so what else is involved with this project?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              😀 Community 😀
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Yes, yes, you hear it all the time, community this and community
              that, so what makes this different?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Well for starters...
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1"></p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Community is something that takes time to grow, time to cultivate,
              and time to strengthen. We know that, it will take awhile.
              However, we aim to succeed in cultivating a community who:
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              shares a love for animals <br /> share a laugh <br /> want to
              network or find work in the space <br /> want help with starting
              their own crypto/nft projects <br /> want NFT flipping advice,
              tips, and early calls <br /> want to game together in our official
              prize-incentivized tournaments <br />
              have casual movie nights <br />
              meet crypto friends <br />
              unwind and relax after a day of work <br />
              who simply want to talk about their day <br />
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              - and overall band together in a wholesome environment that aims
              to have everyone who contributes and gets out of their comfort
              zone to make it! This is reflective in how we’ve set up our
              project discord in which everyone is also welcome, but of course,
              HODLers will have more than their fair share of exclusive content,
              abilities, roles, and opportunities.
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Anything else we should know about?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              So much more…too much more…like, too much to possibly explain
              here, but just look around. Chat and learn. We have so many things
              coming, and so many real and virtual benefits coming to the kitten
              clubhouse holders and community. Merch drops, gaming tournaments
              with eth prizes, art contents, the kitty council governance,
              charity events, and even a potential A.I. driven game where you
              can raise your kitten NFTs online like the Nintendo DS’s hit game
              Nintendogs?
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              …oh wait, did we reveal too much? Yeah, we did didn’t we? Just
              some bonuses for reading this far from our unannounced expanded
              roadmap (coming soon…)
            </p>
            <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Overall, excited is an understatement in regard to how we’ve been
              working day in and day out to make this vision come to a reality,
              and we’d love to have you join us along in our fun-filled journey
              with Kitten Clubhouse 🚀🚀🚀
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-end">
          <img src={Bengal_stretch} style={{ width: "100px" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
