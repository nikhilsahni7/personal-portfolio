"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaReact,
  FaNodeJs,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const AboutMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const starRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = starRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    type Star = {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    };

    const stars: Star[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    function draw() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();

        s.x += s.vx / 30;
        s.y += s.vy / 30;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <canvas
        ref={starRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center code-font"
          variants={itemVariants}
          animate={floatingAnimation}
        >
          About Me <span className="text-cyan-400">💻</span>
        </motion.h1>

        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/80 border-gray-700 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-6">
                <motion.h2
                  className="text-2xl sm:text-3xl font-semibold mb-4 code-font flex items-center"
                  animate={floatingAnimation}
                >
                  <span className="text-cyan-400 mr-2">👨‍💻</span> Nikhil Sahni
                </motion.h2>
                <p className="mb-6 code-font leading-relaxed text-sm sm:text-base">
                  Hello, I am Nikhil Sahni,20 years old and an Innovative Full
                  Stack Developer with a strong foundation in computer science,
                  seeking to leverage expertise in React.js, Node.js, and modern
                  web technologies to drive impactful solutions. Passionate
                  about creating scalable, user-centric applications with a keen
                  eye for detail and commitment to clean, efficient code. If you
                  liked my profile and interested to work...kindly contact me!
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: FaReact, text: "React.js" },
                    { icon: FaNodeJs, text: "Node.js" },
                    { icon: SiJavascript, text: "JavaScript" },
                    { icon: SiTypescript, text: "TypeScript" },
                    { icon: SiNextdotjs, text: "Next.js" },
                    { icon: SiPostgresql, text: "PostgreSQL" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={iconVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs sm:text-sm py-1 px-2 sm:px-3 flex items-center"
                      >
                        <tech.icon className="mr-1" /> {tech.text}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <motion.h2
                  className="text-2xl sm:text-3xl font-semibold mb-4 code-font flex items-center"
                  animate={floatingAnimation}
                >
                  <span className="text-cyan-400 mr-2">📬</span> Contact
                  Information
                </motion.h2>
                <ul className="space-y-4 code-font text-sm sm:text-base">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaPhoneAlt className="text-cyan-400 mr-2" />
                    <a
                      href="tel:+918800244926"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      +91 8800244926
                    </a>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaEnvelope className="text-cyan-400 mr-2" />
                    <a
                      href="mailto:nikhil.sahni321@gmail.com"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      nikhil.sahni321@gmail.com
                    </a>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaMapMarkerAlt className="text-cyan-400 mr-2" />
                    Delhi NCR, India
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.a
              href="contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full code-font transition-all duration-300 hover:from-blue-500 hover:to-cyan-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch 🚀
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
