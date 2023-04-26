import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link href="https://www.instagram.com/skmore1999" target="_blank">
          <InstagramIcon />
        </Link>
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
      <p> ©{new Date().getFullYear()} made with ♥</p>
    </div>
  )
}

export default Footer