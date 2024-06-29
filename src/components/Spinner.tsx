// components/Spinner.tsx
import React from "react";
import { motion } from "framer-motion";

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

export default Spinner;
