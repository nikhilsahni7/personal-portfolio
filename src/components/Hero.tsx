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
  {
    Icon: FaFacebookF,
    url: "https://www.instagram.com/iam.nikhil7?igsh=cTFyZDh0NXk0eGNs",
  },
  {
    Icon: FaSquareXTwitter,
    url: "https://x.com/Nikhilllsahni?t=GwfnmO3UaBbk5W5Fk2FjsQ&s=09",
  },
  { Icon: FaGithub, url: "https://github.com/nikhilsahni7" },
  {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/nikhil-sahni-655518222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <BackgroundEffects />
      <Content titleIndex={titleIndex} />
    </motion.section>
  );
};

const BackgroundEffects = () => (
  <>
    <GlitchEffect />
    <ParticleEffect />
    <NeonEffect />
    <LaserEffect />
  </>
);

const Content = ({ titleIndex }: React.Key | any) => (
  <>
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 z-10 text-center code-font glitch-text"
      data-text="Nikhil Sahni"
    >
      Nikhil Sahni
    </motion.h1>

    <AnimatePresence mode="wait">
      <motion.h2
        key={titleIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 z-10 text-center text-gray-300 code-font"
      >
        {titles[titleIndex]}
      </motion.h2>
    </AnimatePresence>

    <ProfileImage />
    <SocialIcons />
    <CTAButtons />
    <Navigation />
    <ScrollIndicator />
  </>
);

const GlitchEffect = () => (
  <style jsx global>{`
    .glitch-text {
      position: relative;
      animation: glitch 1s infinite;
    }
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .glitch-text::before {
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    .glitch-text::after {
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }
    @keyframes glitch-anim {
      0% {
        clip: rect(31px, 9999px, 94px, 0);
      }
      100% {
        clip: rect(70px, 9999px, 58px, 0);
      }
    }
    @keyframes glitch-anim2 {
      0% {
        clip: rect(65px, 9999px, 100px, 0);
      }
      100% {
        clip: rect(60px, 9999px, 18px, 0);
      }
    }
  `}</style>
);

const ParticleEffect = () => (
  <motion.div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute bg-white rounded-full"
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

const NeonEffect = () => (
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

const LaserEffect = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    {[...Array(5)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute top-0 bottom-0 w-0.5 bg-cyan-500"
        style={{ left: `${(index + 1) * 20}%` }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          delay: index * 0.2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    ))}
  </motion.div>
);

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
    className="relative mb-8 sm:mb-12 z-10"
  >
    <motion.img
      src="https://avatars.githubusercontent.com/u/100983397?v=4"
      alt="Nikhil Sahni"
      className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-72 xl:h-72 object-cover"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
    <motion.div
      className="absolute inset-0 rounded-full border-4 border-cyan-500"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    />
    <HolographicEffect />
    <CyberCircle />
  </motion.div>
);

const HolographicEffect = () => (
  <motion.div
    className="absolute inset-0 rounded-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.5, 0], rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    style={{
      background:
        "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
    }}
  />
);

const CyberCircle = () => (
  <motion.svg
    className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none"
    viewBox="0 0 200 200"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#ff00ff" />
      </linearGradient>
    </defs>
    <circle
      cx="100"
      cy="100"
      r="95"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="2"
      strokeDasharray="10 5"
    />
  </motion.svg>
);

const SocialIcons = () => (
  <motion.div
    className="flex space-x-4 sm:space-x-6 mb-8 sm:mb-12 z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, staggerChildren: 0.1 }}
  >
    {socialMediaLinks.map(({ Icon, url }, index) => (
      <motion.a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
        transition={{
          delay: index * 0.1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="text-gray-400 hover:text-cyan-500 transition-colors relative group"
      >
        <Icon size={24} className="sm:text-2xl md:text-3xl" />
        <motion.div
          className="absolute -inset-2 bg-cyan-500 opacity-0 group-hover:opacity-20 rounded-full"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </motion.div>
);

const CTAButtons = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10 w-full max-w-xs sm:max-w-md"
    >
      <Button
        onClick={() => router.push("/projects")}
        size="lg"
        className="w-full bg-cyan-500 text-black hover:bg-cyan-600 transition-colors duration-300 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg code-font relative overflow-hidden group"
      >
        <span className="relative z-10">View Projects</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
      <Button
        onClick={() => router.push("/contact")}
        variant="outline"
        size="lg"
        className="w-full text-cyan-500 code-font hover:text-cyan-400 border-2 border-cyan-500 hover:border-cyan-400 transition-colors duration-300 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg relative overflow-hidden group"
      >
        <span className="relative z-10">Contact Me</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          initial={{ x: "100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
};

const Navigation = () => (
  <motion.nav
    className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 sm:space-x-8 z-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5 }}
  >
    {["About", "Projects", "Skills"].map((item) => (
      <motion.a
        key={item}
        href={`${item.toLowerCase()}`}
        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg code-font relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {item}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </motion.nav>
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1 }}
  >
    <motion.div
      className="w-6 h-10 border-2 border-white rounded-full relative"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.div
        className="w-2 h-2 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
);

export default Hero;
