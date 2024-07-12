"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imagePath: string;
}

const Projects: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const projects: Project[] = [
    {
      title: "Skill-Bridge",
      description:
        "Developed an online  Platform for Clients and freelancers to connect with each other and work on projects and grow there business.",
      technologies: [
        "Next.js",
        "Web Sockets",
        "PostgreSQL",
        "ShadCn UI",
        "Tailwind CSS",
        "framer-motion",
        "Prisma",
        "next-auth",
      ],
      link: "https://skill-bridg.vercel.app",
      imagePath: "/skill-bridge.png",
    },
    {
      title: "Study-Point",
      description:
        "Developed a full-stack e-learning platform using Next.js and PostgreSQL, serving over 500 students.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "AWS S3",
        "CloudFront CDN",
        "ShadCn UI",
        "Tailwind CSS",
        "Redis",
        "Prisma",
        "next-auth",
      ],
      link: "https://study-point-nine.vercel.app",
      imagePath: "/studypoint.png",
    },
    {
      title: "FitnessFusion X Bync Gym",
      description:
        "Created a scalable fitness and gym website with Next.Js and PostgreSQL supporting 300 concurrent users to elevate their fitness levels.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "RESTful API",
        "Shadcn Ui",
        "RazorPay",
        "Prisma",
        "nex-auth",
        "Framer Motion",
      ],
      link: "https://fitnessfusion-self.vercel.app",
      imagePath: "/fitnessfusion.png",
    },
    {
      title: "Medium-Clone",
      description:
        "Designed and developed a clean and efficient blogging app like medium where people can easily create and share their blogs",
      technologies: [
        "React",
        "Hono(Backend)",
        "Tailwind CSS",
        "CloudFlare",
        "PostgreSQL",
        "Prisma",
      ],
      link: "https://blog-app-ten-orpin.vercel.app",
      imagePath: "/medium-clone.png",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ParticleEffect />
      <GlowingBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center code-font glitch-text"
          data-text="My Projects"
          variants={itemVariants}
        >
          My Projects <span className="text-cyan-400">🚀</span>
        </motion.h1>

        <motion.div className="space-y-16" variants={containerVariants}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [isFlipped, setIsFlipped] = React.useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.2,
      },
    },
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer"
    >
      <AnimatePresence>
        <motion.div
          key={isFlipped ? "back" : "front"}
          initial={false}
          animate={isFlipped ? "back" : "front"}
          variants={flipVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="bg-gray-900/80 border-gray-700 overflow-hidden backdrop-blur-sm h-full">
            {!isFlipped ? (
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 mix-blend-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold code-font flex items-center">
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-cyan-400 mr-2"
                      >
                        {index + 1}.
                      </motion.span>
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-4 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs py-1 px-2"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Project
                    </motion.a>
                  </CardContent>
                </div>
              </div>
            ) : (
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title} Details
                </h3>
                <p className="text-center mb-4">{project.description}</p>
                <ul className="list-disc pl-6 mb-4">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Project
                </motion.a>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const ParticleEffect: React.FC = () => {
  return (
    <motion.div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-cyan-500 rounded-full"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
        />
      ))}
    </motion.div>
  );
};

const GlowingBackground: React.FC = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.1, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-cyan-900 opacity-10" />
  </motion.div>
);

export default Projects;
