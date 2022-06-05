import React from "react";
import "./style.css";
import logoEmail from "../../images/emailIcon.png";
import samuelImagem from "../../images/sunken.jpg";
import logoLinkedin from "../../images/Linkedin.png";

export default function Info() {
    return (
        <div className="info--outer">
            <img src={samuelImagem} alt="Foto do Samuel" className="info--profile_image"/>
            <div className="info--content">
                <h1 className="info--content_title">Samuel Lucas</h1>
                <div className="info--content_subtitle">Frontend Developer</div>
                <div className="info--content_contact">samuellucasrdg@gmail.com</div>
            </div>
            <div className="info--buttons">
                <a href="#"className="info--buttons_email">
                    <img src={logoEmail} alt="Icon Email"/>
                    <div className="info--buttons_email_text">Email</div>
                </a>
                <a href="https://www.linkedin.com/in/samuel-lucas-rdg/" className="info--buttons_linkedin">
                    <img src={logoLinkedin} alt="Icon Linkedin"/>
                    <span className="info--buttons_linkedin_text">LinkedIn</span>
                </a>
            </div>
        </div>
    )
}