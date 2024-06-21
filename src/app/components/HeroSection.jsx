"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut"
  }
};

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#1f113f] mb-4  text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-4xl sm:text-5xl lg:text-8xl">
  Hello, I am{" "}
</span>

            <br></br>
            <TypeAnimation 
              sequence={[
                "Mudit Rai",
                1000,
                "Flutter Developer",
                1000,
                "AI/ML Enthusiast",
                1000,
                "Full Stack Developer",
                1000,
                "Coder...",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#1b132a]  text-base sm:text-lg mb-6 lg:text-xl">
          Hi, I am Mudit Rai, a final-year BTech (CSE) student at NIT Arunachal Pradesh. I specialize in Flutter app development and have a keen interest in machine learning. Passionate about continuous learning, I love exploring new technologies and aspire to become a software developer.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-400 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1iR0LTd0fM2g10wBl8u7IxfZfK8_yqL3g/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-white text-black hover:bg-slate-300 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#120b29] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/boy2.jpg"
              alt="boy image"
              className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition duration-300 ease-in-out"
              animate={{ y: ["0%", "-10%", "0%"] }}
              transition={bounceTransition}
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;