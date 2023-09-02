import "./Home.css";
import Navbar from "./Navbar";
import Body from "./Body";
import { Menu } from "lucide-react";
import { useState } from "react";
function Home() {
  const [isVisible,setIsVisible]=useState(true);
  const toggleVisibility=()=>{
    setIsVisible(!isVisible);
  };
  return (
    <div className="main-container">
      <div className="sidebar">
        <button id="togglebutton" onClick={toggleVisibility}>
          <Menu size={28} strokeWidth={2.25} absoluteStrokeWidth />
        </button>{isVisible &&         <div className="sidebar-content" id="toggleDiv">
          <ul>
            <li>
              <a href="#Personal">Personal</a>
            </li>
            <li>
              <a href="#Achievements">Achievements</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Links">Links</a>
            </li>
            <li>
              <a href="#Technical">Technical</a>
            </li>
            <li>
              <a href="#Qualities">Qualities</a>
            </li>
            <li>
              <a href="#Positives">Positives</a>
            </li>
            <li>
              <a href="#aboutme">About me</a>
            </li>
          </ul>
        </div>}

      </div>
      <div className="mainbar">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}
export default Home;
