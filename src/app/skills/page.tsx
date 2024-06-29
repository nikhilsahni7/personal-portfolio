"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaCode,
  FaServer,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiRedis,
  SiVercel,
  SiSupabase,
  SiLinux,
  SiNewrelic,
  SiJest,
  SiNetlify,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Spinner = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="w-16 h-16 border-t-4 border-b-4 border-cyan-500 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const skillCategories = [
    {
      title: "Client-Side",
      icon: <FaCode className="mr-2" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "NextJS", icon: <SiNextdotjs /> },
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <TbBrandReactNative /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Server-side",
      icon: <FaServer className="mr-2" />,
      skills: [
        { name: "Git/Github", icon: <FaGitAlt /> },
        { name: "Nodejs", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "PostMan", icon: <SiPostman /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
      ],
    },
    {
      title: "Dev & Ops",
      icon: <FaCogs className="mr-2" />,
      skills: [
        { name: "Vercel", icon: <SiVercel /> },
        { name: "SupaBase", icon: <SiSupabase /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "New Relic", icon: <SiNewrelic /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner key="spinner" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-8 relative overflow-hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onMouseMove={handleMouseMove}
          >
            <ParticleEffect />
            <GlowingBackground />
            <FloatingShapes />

            <div className="max-w-4xl mx-auto relative z-10">
              <motion.h1
                className="text-5xl sm:text-6xl font-bold mb-12 text-center code-font glitch-text"
                data-text="My Skills"
                variants={itemVariants}
              >
                My Skills <span className="text-cyan-400">🚀</span>
              </motion.h1>

              <motion.div
                className="perspective-1000"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                }}
              >
                <Tabs defaultValue="Client-Side" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    {skillCategories.map((category) => (
                      <TabsTrigger
                        key={category.title}
                        value={category.title}
                        className="text-sm sm:text-base flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        {category.icon}
                        {category.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {skillCategories.map((category) => (
                    <TabsContent key={category.title} value={category.title}>
                      <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                            variants={containerVariants}
                          >
                            {category.skills.map((skill, index) => (
                              <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, rotateY: 180 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="w-full py-3 px-4 text-center text-sm sm:text-base flex  items-center text-slate-800 justify-center bg-white hover:bg-blue-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                >
                                  <span className="mr-2 text-xl">
                                    {skill.icon}
                                  </span>
                                  {skill.name}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </motion.div>
            </div>
            <RotatingCube />
            <FloatingIcons skillCategories={skillCategories} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ParticleEffect = () => {
  return (
    <motion.div className="absolute inset-0 pointer-events-none">
      {[...Array(150)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
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

const GlowingBackground = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.2, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-cyan-900 opacity-20" />
  </motion.div>
);

const RotatingCube = () => {
  return (
    <motion.div
      className="absolute bottom-10 right-10 w-40 h-40"
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="w-full h-full relative transform-style-3d">
        {["front", "back", "right", "left", "top", "bottom"].map(
          (face, index) => (
            <div
              key={face}
              className={`absolute w-full h-full bg-cyan-500/20 border-2 border-cyan-300 backdrop-blur-sm ${face}`}
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(20px)`,
              }}
            />
          )
        )}
      </div>
    </motion.div>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const FloatingIcons = ({ skillCategories }: any) => {
  const allSkills = skillCategories.flatMap((category: any) => category.skills);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {allSkills.map((skill: any, index: any) => (
        <motion.div
          key={index}
          className="absolute text-3xl text-white opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {skill.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
