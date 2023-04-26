import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { Link } from "@mui/material";
import ProfilePhoto from "./ProfilePhoto";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <ProfilePhoto />
        <h2>Hi, My name is Snehalkumar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href="https://github.com/Skmore36" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/Snehalkumar More" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="mailto:skmore36@gmail.com" target="_blank">
            <EmailIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h2> skills</h2>
        <ol class="list">
          <li class="item">
            <h2 class="headline">Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li class="item">
            <h2 class="headline">Back-End</h2>
            <span>NodeJS, MySQL</span>
          </li>
          <li class="item">
            <h2 class="headline">Languages</h2>
            <span>JavaScript, TypeScript, C</span>
          </li>
          <li class="item">
            <h2 class="headline">Clouds</h2>
            <span>Novice- AWS , Terraform(IaSS) </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
