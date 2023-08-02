"use client";
import { motion } from "framer-motion";
import ImageSection from "./image-section.component";
import SocialSection from "./social-section.components";
import Techs from "../techs/technologies.component";
import MainText from "./text-section.component";
import About from "../about/about.component";
import Projects from "../projects/projects.component";
import Contact from "../contact/contact.component";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center items-center p-10">
        <ImageSection imageSrc="/images/me.jpeg" />
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <MainText />
          <SocialSection />
        </div>
        <Techs />
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </motion.div>
  );
};

export default Main;
