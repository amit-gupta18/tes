import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import Landing from "./components/Landing.jsx";
import PastShow from "./components/PastShow.jsx";
import Timeline from "./components/Timeline.jsx";
import About from "./components/About.jsx";

// Root single-page layout that stitches together all event sections.
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Landing />
      <Timeline />
      <PastShow />
      <About />
      <Analytics />
    </div>
  );
}

export default App;

