import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Rooms from "./components/Rooms.jsx";
import Gallery from "./components/Gallery.jsx";
import Contacts from "./components/Contacts.jsx";
import Scrolltotop from "./components/Scrolltotop.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // simulate 2s load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-[#0d0f14] text-white">
          <Scrolltotop />
          <Navbar />
          <div id="homepage">
            <Homepage />
          </div>
          <div id="rooms">
            <Rooms />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="contacts">
            <Contacts />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
// src ="https://www.google.com/maps?q=26.963699450619814, 75.84634625767116&output=embed";
