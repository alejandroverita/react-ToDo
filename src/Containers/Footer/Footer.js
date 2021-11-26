import React from 'react';
import './Footer.css';
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div className="Footer">
            <a href="https://www.instagram.com/alejandroverahdez/" target="__blank"><SiInstagram
                className="icon"
            /><span>@alejandrovera</span></a>
            <a href="https://www.linkedin.com/in/alejandro-vera-278713192/" target="__blank"><SiLinkedin
                className="icon"
            /><span>@alejandro-vera</span></a>
            <a href="https://github.com/alejandroverita" target="__blank"><SiGithub
                className="icon"
            /><span>@alejandroverita</span></a>
        </div>
    );
}

export {Footer};