import React from "react";

import Helmet from "../Helmet";
import HeroSection from "../HeroSection";
import ListCard from "../ListCard";
import Suggestions from "../Suggestions";

function Home() {
  return (
    <Helmet title="Homepage">
      <HeroSection />
      <div style={{ background: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListCard />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%", maxWidth: "1200px" }}>
            <Suggestions title="Suggestions for you" />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Home;
