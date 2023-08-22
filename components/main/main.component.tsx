"use client";
import { motion } from "framer-motion";
import Techs from "../techs/technologies.component";
import About from "../about/about.component";
import Projects from "../projects/projects.component";
import Contact from "../contact/contact.component";
import HeroSection from "./hero-section.component";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center items-center p-10">
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <HeroSection />
        </div>
        <Techs />
        <About />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
};

export default Main;
