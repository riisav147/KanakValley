import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/Images/HotelFront4.png",
    "/Images/HotelFront4.png",
    "/Images/HotelFront4.png",
    "/Images/HotelFront4.png",
    "/Images/HotelFront4.png",
    "/Images/HotelFront4.png",
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full min-h-screen bg-[#0d0f14] text-white py-20 px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Gallery</h2>
        <p className="text-gray-400 text-base">
          Immerse yourself in the serene ambiance and timeless elegance of our
          property through these visuals.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl group bg-[#111] cursor-pointer"
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white drop-shadow-xl">
                View Details
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full rounded-xl shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent modal close on image click
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-500 transition-colors"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
