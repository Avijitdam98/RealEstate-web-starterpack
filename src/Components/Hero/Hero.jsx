import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
        </div>
        <div className="flexColStart hero-des">
          <span className="secondaryText">
            Find a variety of properties that suit you very easily
          </span>
          <span className="secondaryText">
            Forget all difficulties in finding a residence for you
          </span>
        </div>

        <div className="search-bar">
          <HiLocationMarker color="var(--blue)" size={25} />
          <input type="text" />
          <button className="button">Search</button>
        </div>

        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={8000} end={9000} duration={4} />
            </span>
            <span>+</span>
            <span className="secondaryText">Premium Products</span>
          </div>

          <div className="flexColCenter stat">
            <span>
              <CountUp start={2000} end={7000} duration={4} />
            </span>
            <span>+</span>
            <span className="secondaryText">Happy customers</span>
          </div>

          <div className="flexColCenter stat">
            <span>
              <CountUp end={90} duration={4} />
            </span>
            <span>+</span>
            <span className="secondaryText">Award Winnings</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div
           d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
