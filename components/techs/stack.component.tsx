import CssIcon from "@/icons/css-icon.component";
import HtmlIcon from "@/icons/html-icon.component";
import JsIcon from "@/icons/js-icon.component";
import NextjsIcon from "@/icons/nextjs-icon.component";
import ReactIcon from "@/icons/react-icon.component";
import SassIcon from "@/icons/sass-icon.component";
import TailwindIcon from "@/icons/tailwind-icon.component";
import TypeScriptIcon from "@/icons/typescript-icon.component";
import VueIcon from "@/icons/vue-icon.component";
import { motion } from "framer-motion";

const technologies = [
  { id: 1, icon: <HtmlIcon />, name: "HTML5" },
  { id: 2, icon: <CssIcon />, name: "CSS" },
  { id: 3, icon: <JsIcon />, name: "JavaScript" },
  { id: 4, icon: <TypeScriptIcon />, name: "TypeScript" },
  { id: 5, icon: <ReactIcon />, name: "ReactJS" },
  { id: 6, icon: <NextjsIcon />, name: "NextJS" },
  { id: 7, icon: <TailwindIcon />, name: "Tailwind" },
  { id: 8, icon: <SassIcon />, name: "Sass" },
  { id:9, icon: <VueIcon/>, name: "Vue.js" }
];

const Stack = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const index = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center gap-6 flex-wrap max-w-md"
    >
      {technologies.map((item) => (
        <motion.li key={item.id} className="item" variants={index}>
          <div className="flex flex-col items-center gap-2">
            <div>{item.icon}</div>
            <span>{item.name}</span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Stack;
