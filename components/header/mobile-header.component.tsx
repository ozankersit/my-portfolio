"use client";
import { MobileMenuIcon } from "@/icons/mobile-menu-icon.component";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const linkElements = [
  { id: 1, str: "Home", route: "/" },
  { id: 2, str: "About", route: "#about" },
  { id: 3, str: "Projects", route: "#projects" },
  { id: 4, str: "Contact", route: "#contact" },
];

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <button
        className="xl:hidden flex"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <MobileMenuIcon />
      </button>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
            className="!fixed bg-blue left-0 top-0 max-w-xs h-screen overflow-auto z-[1000000]"
          >
            <li className="list-none flex flex-col gap-3 cursor-pointer items-center mt-10">
              {linkElements.map((item) => (
                <Link key={item.id} href={item.route}>
                  <ul className="hover:text-blue text-white transition-colors duration-300">
                    {item.str}
                  </ul>
                </Link>
              ))}
            </li>
          </motion.div>
        )}
      </AnimatePresence>

      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className="block opacity-80 !fixed bg-white left-0 top-0 z-[100000] w-screen h-screen"
        ></div>
      )}
    </div>
  );
};

export default MobileHeader;
