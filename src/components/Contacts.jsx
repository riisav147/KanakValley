import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-[#0d0f14] text-white py-20 px-10 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left - Map */}
        <div className="w-full h-96">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=26.963699450619814, 75.84634625767116&output=embed"
            className="w-full h-full rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-4xl font-serif mb-4">Get in Touch</h2>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#b9a23c] text-xl" />
            <p className="text-gray-300">
              539,kanak ghati, opposite govind dev ji mandir, near amer road,
              jaipur, 302002
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#b9a23c] text-xl" />
            <p className="text-gray-300">+919982818072</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#b9a23c] text-xl" />
            <p className="text-gray-300">thekanakvalley@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram className="text-[#b9a23c] text-xl" />
            <a
              href="https://www.instagram.com/thekanakvalley/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              @luxuryhotel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
