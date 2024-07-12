"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const titles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Passionate Software Engineer",
];

const socialMediaLinks = [
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/iam.nikhil7?igsh=cTFyZDh0NXk0eGNs",
  },
  { Icon: FaFacebookF, url: "https://www.facebook.com/nikhil.sahni" },
  {
    Icon: FaSquareXTwitter,
    url: "https://x.com/Nikhilllsahni?t=GwfnmO3UaBbk5W5Fk2FjsQ&s=09",
  },
  { Icon: FaGithub, url: "https://github.com/nikhilsahni7" },
  {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/nikhil-sahni-655518222",
  },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <BackgroundEffects />
      <Content titleIndex={titleIndex} />
    </motion.section>
  );
};

const BackgroundEffects = () => (
  <>
    <GlowingOrbs />
    <GridLines />
  </>
);

const Content = ({ titleIndex }: any) => (
  <div className="z-10 text-center">
    <ProfileImage />
    <AnimatedName />
    <AnimatedTitle titleIndex={titleIndex} />
    <SocialIcons />
    <CTAButtons />
    <Navigation />
  </div>
);

const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-screen filter blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(${Math.random() * 255},${
            Math.random() * 255
          },${Math.random() * 255},0.8) 0%, rgba(0,0,0,0) 70%)`,
          width: `${Math.random() * 300 + 50}px`,
          height: `${Math.random() * 300 + 50}px`,
        }}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: 0,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

const GridLines = () => (
  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
);

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative mb-8"
  >
    <motion.img
      src="https://avatars.githubusercontent.com/u/100983397?v=4"
      alt="Nikhil Sahni"
      className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-72 xl:h-72 object-cover"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
    <motion.div
      className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75 group-hover:opacity-100 blur"
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.div>
);

const AnimatedName = () => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
  >
    Nikhil Sahni
  </motion.h1>
);

const AnimatedTitle = ({ titleIndex }: any) => (
  <AnimatePresence mode="wait">
    <motion.h2
      key={titleIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-300"
    >
      {titles[titleIndex]}
    </motion.h2>
  </AnimatePresence>
);

const SocialIcons = () => (
  <motion.div
    className="flex space-x-4 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, staggerChildren: 0.1 }}
  >
    {socialMediaLinks.map(({ Icon, url }, index) => (
      <motion.a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <Icon size={24} />
      </motion.a>
    ))}
  </motion.div>
);

const CTAButtons = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <Button
        onClick={() => router.push("/projects")}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        View Projects
      </Button>
      <Button
        onClick={() => router.push("/contact")}
        className="bg-transparent border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
      >
        Contact Me
      </Button>
    </motion.div>
  );
};

const Navigation = () => (
  <motion.nav
    className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    {["About", "Projects", "Skills"].map((item) => (
      <motion.a
        key={item}
        href={`/${item.toLowerCase()}`}
        className="text-gray-400 hover:text-white transition-colors duration-300 text-lg relative group"
        whileHover={{ scale: 1.1 }}
      >
        {item}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </motion.nav>
);

export default Hero;
