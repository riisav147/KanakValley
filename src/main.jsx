import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "@studio-freight/lenis";

function Main() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
