"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
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
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 80,
        },
      },
    }),
    []
  );

  const iconVariants = useMemo(
    () => ({
      hidden: { scale: 0, rotate: -90 },
      visible: {
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 8,
        },
      },
    }),
    []
  );

  const floatingAnimation = useMemo(
    () => ({
      y: ["-5px", "5px"],
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  const starRef = useRef<HTMLCanvasElement | null>(null);

  const drawStars = useCallback(() => {
    const canvas = starRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];
    const numStars = 50;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      stars.forEach((star) => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  useEffect(() => {
    drawStars();
    window.addEventListener("resize", drawStars);
    return () => window.removeEventListener("resize", drawStars);
  }, [drawStars]);

  const technologies = useMemo(
    () => [
      { icon: FaReact, text: "React.js" },
      { icon: FaNodeJs, text: "Node.js" },
      { icon: SiJavascript, text: "JavaScript" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: SiNextdotjs, text: "Next.js" },
      { icon: SiPostgresql, text: "PostgreSQL" },
    ],
    []
  );

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <canvas ref={starRef} className="absolute inset-0 z-0" />

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
                  Hello, I am Nikhil Sahni, 20 years old and an Innovative Full
                  Stack Developer with a strong foundation in computer science,
                  seeking to leverage expertise in React.js, Node.js, and modern
                  web technologies to drive impactful solutions. Passionate
                  about creating scalable, user-centric applications with a keen
                  eye for detail and commitment to clean, efficient code. If you
                  liked my profile and are interested in working together,
                  kindly contact me!
                </p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={iconVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                  {[
                    {
                      icon: FaPhoneAlt,
                      text: "+91 8800244926",
                      href: "tel:+918800244926",
                    },
                    {
                      icon: FaEnvelope,
                      text: "nikhil.sahni321@gmail.com",
                      href: "mailto:nikhil.sahni321@gmail.com",
                    },
                    { icon: FaMapMarkerAlt, text: "Delhi NCR, India" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <item.icon className="text-cyan-400 mr-2" />
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-cyan-400 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </motion.li>
                  ))}
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
