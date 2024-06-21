"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Hey there, Craft a compelling narrative through my meticulously designed portfolio website powered by Next.js. This platform is not just a showcase of my skills but an immersive experience enriched with interactive animations and the robustness of TypeScript, libraries like resend. It serves as a canvas to highlight not only my creativity but also my achievements, offering visitors a seamless journey into my projects and accomplishments. ",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    
  },
  {
    id: 2,
    title: "KisaanMitr",
    description: "Empowering Farmers Through Technology, KisaanMitr is my initiative using Flutter, Dart, GetX, and Firebase to bridge the gap between farmers and consumers. It aims to create a fairer food system by facilitating direct connections, enabling farmers to showcase their produce and consumers to access fresh, locally sourced food and also farmer education resources, and community forums to promote sustainable agriculture and fair trade practices.",
    image: "/images/kisaan.jpg",
    tag: ["All", "App"],
    gitUrl: "https://github.com/Mudit2003/KisaanMitr",
    
  },
  {
    id: 3,
    title: "MyNotes",
    description: "MyNotes is a straightforward and efficient note-taking app developed using Flutter. The app employs the BLoC (Business Logic Component) pattern for state management and integrates with Firebase for backend services. MyNotes offers a seamless experience for users to create, edit, and manage their notes effortlessly. Ideal for both personal and professional use, it ensures your notes are securely stored and easily accessible across devices.",
    image: "/images/notes1.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/Mudit2003/mynotes",
    
  },
  {
    id: 4,
    title: "Optical Character Recognition (OCR)",
    description: "The Optical Character Recognition (OCR) project transforms various document types—scanned paper documents or images taken by a digital camera—into editable and searchable data. Created using Python and harnessing robust libraries like Tesseract and OpenCV, this project excels in extracting text from images with exceptional accuracy, facilitating seamless digitalization and accessibility of textual content.It ensuring reliable performance as well",
    image: "/images/ml.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Mudit2003/OpticalCharacterRecognition",
    
  },
  {
    id: 5,
    title: "Image Captioning",
    description: "Implemented advanced deep learning models to enhance image understanding and integrated sophisticated natural language processing algorithms for improved caption generation. These enhancements were designed to facilitate more accurate and contextually relevant outputs, ensuring robust performance across diverse datasets and applications. Additionally, incorporated user feedback mechanisms to refine and optimize the system's capabilities based on real-world usage scenarios.",
    image: "/images/ml2.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Mudit2003/imageCaptioning",
    
  },
 
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-40 mb-20">
     <h2 className="text-transparent text-center font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-4xl mb-10">My Projects</h2>
      <div className="text-[#120926] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
             
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
