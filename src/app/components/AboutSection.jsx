"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++, Java, Dart, Javascript, HTML, CSS</li>
        <li>Django, React.js, Next.js,tailwind CSS, Apache Kafka</li>
        <li>MongoDb, MYSQL, PostgreSQL</li>
        <li>Windows, Linux(Ubuntu, Kali), Mbed OS, Apache Hadoop</li>
        <li>Operating System,Computer Networking, System Design, Distributed System, DBMS </li>
        <li>Cisco Packet Tracer, Wireshark, Figma, Adobe Photoshop, Tableu, Microsot Excel, ROS, VIM, Flutterflow</li>
        <li>Communication , Decision Making, Event Management, Public Speaking, Smart work, Composur</li>
        
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Institute of Technology Arunachal Pradesh</li>
         <p>--Btech- Computer Science and Engineering</p>
         <p>--CGPA- 8.35(current)</p>
        <li>CBSE Board</li>
        <p>--12th</p>
        <p>--89.4%</p>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#1b132a]  " id="about">
      <div className=  "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        width={400}
        height={400}
        className="rounded-full border-8 border-[#474153] transition duration-300 ease-in-out"
    whileHover={{ x: 10, rotate: 75 ,  scale: 1.1, rotateY: 100 }}
    
        
      />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-4xl">About Me</h2>
          <p className="text-base lg:text-lg">
          Greetings! I'm Mudit Rai, currently in my final year pursuing BTech in Computer Science at NIT Arunachal Pradesh. My focus lies in crafting Flutter applications and delving into the intricacies of machine learning. I am deeply passionate about continuous growth and eagerly explore emerging technologies. Collaborating within team settings fuels my desire to learn and excel. I embrace the title of a Techy Extrovert learner, driven by curiosity and a relentless pursuit of knowledge to forge a rewarding career as a software developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
             
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



