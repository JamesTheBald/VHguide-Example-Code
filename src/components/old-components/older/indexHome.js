// built on Gatsby starter "gatsby-tailwindcss-starter"
import React from "react";

// import Seo from "../components/seo"
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home from "./home";

const IndexPage = () => {
  console.log("VH Guide index.js runs.");

  return (
    <>
      {/* <Seo title="Home" /> */}
      <Home />
    </>
  );
};

IndexPage.Layout = Layout;
// Above Layout assigning follows https://dev.to/milescrighton/keeping-persistent-ui-across-routes-with-gatsby-s-wrappageelement-4o22

export default IndexPage;
