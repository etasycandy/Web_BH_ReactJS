import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import video from "../assets/videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted />
      <h1>FASHION WORLD</h1>
      <p>What are you waiting for?</p>
      <div className="hero__btns">
        <Link to="/products">
          <Button
            buttonClassName="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
