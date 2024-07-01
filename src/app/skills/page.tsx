// Skills.js
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/components/SkillData";

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? <Spinner key="spinner" /> : <SkillContent key="content" />}
    </AnimatePresence>
  );
};

const SkillContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-12 text-center code-font glitch-text">
          My Skills <span className="text-cyan-400">🚀</span>
        </h1>

        <SkillTabs />
      </div>
      <BackgroundEffects />
    </motion.div>
  );
};

const SkillTabs = () => {
  return (
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
          <SkillCard skills={category.skills} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

const SkillCard = ({ skills }: any) => (
  <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill: any, index: React.Key) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className="w-full py-3 px-4 text-center text-sm sm:text-base flex items-center text-slate-800 justify-center bg-white hover:bg-blue-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <span className="mr-2 text-xl">{skill.icon}</span>
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const BackgroundEffects = () => (
  <>
    <ParticleEffect />
    <GlowingBackground />
    <FloatingShapes />
    <RotatingCube />
    <FloatingIcons />
  </>
);

const ParticleEffect = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, index) => (
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
  </div>
);

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

const FloatingShapes = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(5)].map((_, index) => (
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

const RotatingCube = () => (
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

const FloatingIcons = () => {
  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {allSkills.slice(0, 10).map((skill, index) => (
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
