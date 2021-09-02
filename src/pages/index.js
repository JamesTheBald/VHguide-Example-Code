// built on Gatsby starter "gatsby-tailwindcss-starter"
import React from "react";

// import Seo from "../components/seo"
import NavFooterLayout from "../components/0nav&footer/NavFooterLayout";
import Home from "./home";

const IndexPage = () => {
  console.log("VH Guide index.js runs.");

  return (
    <>
      {/* <Seo title="Home" /> */}
      <NavFooterLayout>
        <Home />
      </NavFooterLayout>
    </>
  );
};

export default IndexPage;
