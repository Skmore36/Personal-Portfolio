import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { Link } from '@mui/material';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="Preview Not Available" />
      <p>
        <b>Tech Stack:</b>{project.skills}
      </p>
      {project.gitRepoUrl ? <Link href={project.gitRepoUrl} target="_blank">
        <GitHubIcon />
      </Link> : <GitHubIcon />}
    </div>
  );
};

export default ProjectDisplay;
