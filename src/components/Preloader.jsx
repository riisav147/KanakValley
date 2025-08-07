import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0f14]">
      <motion.div
        className="text-[#b9a23c] text-3xl font-serif"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Preloader;
