import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Pdf from '../assets/Snehalkumar_More_9158090561.pdf';


const NavBar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
        <a href={Pdf} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  );
};

export default NavBar;
