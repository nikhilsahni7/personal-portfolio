"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaShare } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner key="spinner" />
      ) : (
        <motion.div
          key="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-8 relative overflow-hidden"
        >
          <BackgroundEffects />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Contact Me <span className="text-cyan-400">📨</span>
            </motion.h1>
            <ContactTabs />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Spinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="w-16 h-16 border-t-4 border-b-4 border-cyan-500 rounded-full animate-spin" />
  </div>
);

// eslint-disable-next-line react/display-name
const BackgroundEffects = React.memo(() => (
  <>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50" />
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
  </>
));

const ContactTabs = () => (
  <Tabs defaultValue="form" className="w-full">
    <TabsList className="grid w-full grid-cols-2 mb-8">
      <TabsTrigger value="form" className="text-sm sm:text-base">
        <FaEnvelope className="mr-2" />
        Contact Form
      </TabsTrigger>
      <TabsTrigger value="info" className="text-sm sm:text-base">
        <FaMapMarkerAlt className="mr-2" />
        Contact Info
      </TabsTrigger>
    </TabsList>

    <TabsContent value="form">
      <Card className="bg-gray-800/80 border-gray-700">
        <CardContent className="p-6">
          <ContactForm />
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="info">
      <Card className="bg-gray-800/80 border-gray-700">
        <CardContent className="p-6">
          <ContactInfo />
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full bg-gray-700 text-white border-gray-600"
        required
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full bg-gray-700 text-white border-gray-600"
        required
      />
      <Input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full bg-gray-700 text-white border-gray-600"
        required
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full bg-gray-700 text-white border-gray-600"
        rows={5}
        required
      />
      <Button
        type="submit"
        className="w-full bg-cyan-500 text-black hover:bg-cyan-600 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {submitStatus === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 text-center">
          Error sending message. Please try again.
        </p>
      )}
    </form>
  );
};

const ContactInfo = () => (
  <div className="space-y-6">
    <ContactInfoItem
      icon={FaEnvelope}
      title="Email"
      content="nikhil.sahni321@gmail.com"
    />
    <ContactInfoItem icon={FaPhone} title="Phone" content="+91 8800244926" />
    <ContactInfoItem
      icon={FaMapMarkerAlt}
      title="Address"
      content="H.no.526, Ground Floor Sector-91 Faridabad, Haryana, India"
    />
    <ContactInfoItem
      icon={FaShare}
      title="Social Media"
      content="All my social media links are available on the home page. Check out and reach me there!"
    />
  </div>
);

const ContactInfoItem = ({ icon: Icon, title, content }: any) => (
  <div className="flex items-center space-x-4">
    <Icon className="text-2xl text-cyan-500" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

export default Contact;
