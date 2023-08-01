"use client";
import styles from "./main.module.scss";
import { motion } from "framer-motion";
import ImageSection from "./image-section.component";
import SocialSection from "./social-section.components";
import Techs from "../techs/technologies.component";

const Main = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease: "easeOut"}}
    >
      <div className="flex flex-col justify-center items-center p-10">
        <ImageSection imageSrc="/images/me.jpeg"/>
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <div className="text-3xl text-center">
            Hey! I am <span className="font-bold">Ozan Kersit</span>{" "}
            <span className={`${styles.wave}`}>👋</span>
          </div>
          <div className="text-2xl max-w-3xl text-center">
            I am a passionate and dedicated{" "}
            <span className="font-bold">Front-End Developer</span> based in
            Turkey, Istanbul. 📍
          </div>
          <SocialSection/>
        </div>
        <Techs/>
      </div>
    </motion.div>
  );
};

export default Main;
