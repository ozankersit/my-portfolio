"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
    imageSrc: string;
}

const ImageSection:FC<IProps> = ({imageSrc}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  >
    <Image
      src={`${imageSrc}`}
      alt="me"
      width={100}
      height={100}
      className="border-2 border-solid border-black rounded-[50%]"
    />
  </motion.div>
  )
}

export default ImageSection