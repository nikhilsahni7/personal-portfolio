"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaShare } from "react-icons/fa";

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

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
          <ParticleEffect />
          <GlowingBackground />
          <FloatingShapes />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold mb-12 text-center code-font glitch-text"
              data-text="Contact Me"
              variants={itemVariants}
            >
              Contact Me <span className="text-cyan-400">📨</span>
            </motion.h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Tabs defaultValue="form" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="form"
                    className="text-sm sm:text-base flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    Contact Form
                  </TabsTrigger>
                  <TabsTrigger
                    value="info"
                    className="text-sm sm:text-base flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    Contact Info
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="form">
                  <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <ContactForm />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="info">
                  <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <ContactInfo />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          <RotatingCube />
          <FloatingIcons />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactForm = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <motion.div variants={inputVariants}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-gray-700 text-white border-gray-600"
          required
        />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full bg-gray-700 text-white border-gray-600"
          required
        />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full bg-gray-700 text-white border-gray-600"
          required
        />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full bg-gray-700 text-white border-gray-600"
          rows={5}
          required
        />
      </motion.div>
      <motion.div variants={inputVariants}>
        <Button
          type="submit"
          className="w-full bg-cyan-500 text-black hover:bg-cyan-600 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-center"
        >
          Message sent successfully!
        </motion.p>
      )}
      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-center"
        >
          Error sending message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

const ContactInfo = () => {
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

  const infoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div
        variants={infoVariants}
        className="flex items-center space-x-4"
      >
        <FaEnvelope className="text-2xl text-cyan-500" />
        <div>
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-300">nikhil.sahni321@gmail.com</p>
        </div>
      </motion.div>
      <motion.div
        variants={infoVariants}
        className="flex items-center space-x-4"
      >
        <FaPhone className="text-2xl text-cyan-500" />
        <div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-300">+91 8800244926</p>
        </div>
      </motion.div>
      <motion.div
        variants={infoVariants}
        className="flex items-center space-x-4"
      >
        <FaMapMarkerAlt className="text-2xl text-cyan-500" />
        <div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-gray-300">
            H.no.526,Ground Floor Sector-91 faridabad,Haryana,India
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={infoVariants}
        className="flex items-center space-x-4"
      >
        <FaShare className="text-2xl text-cyan-500" />
        <div>
          <h3 className="text-lg font-semibold">Social Media</h3>
          <p className="text-gray-300">
            All my social media links are available in home page,Check out and
            Reach to me...
          </p>
        </div>
      </motion.div>
    </motion.div>
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

const FloatingIcons = () => {
  const icons = [FaEnvelope, FaPhone, FaMapMarkerAlt];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((Icon, index) => (
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
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default Contact;
