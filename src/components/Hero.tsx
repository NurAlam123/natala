"use client";

import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] bg-white rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      <div className="container relative">
        <div className="flex items-center justify-center ">
          <a
            href="#"
            className="border rounded-lg py-1 px-2 border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task
              <br />
              at a Time
            </h1>
            <motion.div
              className="absolute right-[496px] top-[108px] hidden sm:inline"
              drag
            >
              <Image
                src={cursorImage}
                alt="cursor icon"
                height={200}
                width={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[520px] hidden sm:inline"
              drag
            >
              <Image
                src={messageImage}
                alt="message icon"
                height={200}
                width={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md font-medium">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Button title="Get for free" />
        </div>
      </div>
    </div>
  );
};
