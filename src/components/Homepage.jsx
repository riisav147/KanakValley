// src/pages/Homepage.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0f14]">
      {/* Hero Luxury Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-10 py-20 pt-30 relative overflow-hidden">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image with Zoom-In on Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src="/HotelFront3.PNG" // <-- Replace with actual image
              alt="Luxury Room"
              className="w-full h-auto object-cover rounded-lg md:w-[35vw] md:h-[80vh]"
            />
            <div className="flex justify-between text-white text-sm mt-4 w-[35vw] tracking-widest">
              <span>01</span>
              <div className="flex-1 mx-2 border-t border-white opacity-30"></div>
              <span>03</span>
            </div>
          </motion.div>

          {/* Right Content with Staggered Fade-In */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="text-white flex flex-col space-y-6 relative"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl font-serif leading-tight"
            >
              INDULGE IN LUXURY
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-gray-400 text-base max-w-md"
            >
              At Kanak Valley, we invite you to experience our philosophy of
              design in places out of the ordinary.
            </motion.p>

            {/* Right Image with Zoom-in */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full mt-4"
            >
              <img
                src="/Room1.JPG" // <-- Replace with actual image
                alt="Room Interior"
                className="w-full h-auto object-cover rounded-lg md:w-[40vw] md:h-[55vh]"
              />
            </motion.div>

            {/* Scroll Down Rotated Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute right-10 top-1/2 transform -translate-y-1/2 rotate-90 text-white text-xs tracking-widest"
            >
              SCROLL DOWN • SCROLL DOWN •
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
