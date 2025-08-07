import React from "react";
import { motion } from "framer-motion";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      img: "/Images/Room2.JPG",
      title: "Deluxe Suite",
      desc: "Spacious suite with stunning sea view and modern amenities.",
    },
    {
      id: 2,
      img: "/Images/Room4.JPG",
      title: "Executive Room",
      desc: "Perfect blend of comfort and elegance for business travellers.",
    },
    {
      id: 3,
      img: "/Images/Room5.JPG",
      title: "Premium King Room",
      desc: "Luxuriously appointed room with king-sized bed.",
    },
    {
      id: 4,
      img: "/Images/Room7.JPG",
      title: "Garden View Room",
      desc: "Relax with a serene garden view right from your window.",
    },
    {
      id: 5,
      img: "/Images/Room8.png",
      title: "Oceanfront Villa",
      desc: "Private villa with direct beach access and private pool.",
    },
    {
      id: 6,
      img: "/Images/Room13.png",
      title: "Classic Twin Room",
      desc: "Ideal for family or friends, with modern twin bedding.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#0d0f14] text-white py-20 px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Our Signature Rooms</h2>
        <p className="text-gray-400 text-base">
          Experience unmatched luxury and elegance in our carefully curated
          rooms designed for your utmost comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="relative overflow-hidden rounded-xl group bg-[#111]"
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex flex-col justify-end p-5">
              <h3 className="text-2xl text-white font-semibold mb-2 drop-shadow-xl">
                {room.title}
              </h3>
              <p className="text-white text-sm drop-shadow-md">{room.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
