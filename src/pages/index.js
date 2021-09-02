// built on Gatsby starter "gatsby-tailwindcss-starter"
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Home from "./home";

// import { myContext } from "../context/Context";
import NavFooterLayout from "../components/0nav&footer/NavFooterLayout";


// import Seo from "../components/seo"

const IndexPage = () => {
  console.log("Hello there!  Alpha.js runs.");

  return (
    <>
      {/* <Seo title="Home" /> */}
      <NavFooterLayout>
        <div>
          <Home />
          <h1 className="titleFont titleMedium">Put Home Page Here</h1>
          <p className="mt-8">Welcome to your new Gatsby site.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <StaticImage src="../images/gatsby-astronaut.png" alt="gatsby astronaut" />
          </div>
        </div>
      </NavFooterLayout>
    </>
  );
};

export default IndexPage;
