import React from "react";
import "./style.css";
import githubLogo from "../../images/github.png"
import instagramLogo from "../../images/instagram.png"


export default function Footer() {
    return(
        <footer className="footer--wrapper">
            <div className="footer--images">
                <a href="#"><img src={githubLogo}alt="githubLogo"/></a>
                <a href="#"><img src={instagramLogo}alt="instagramLogo"/></a>
            </div>
        </footer>
    )
}