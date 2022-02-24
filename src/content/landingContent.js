import React from "react";
import { Link } from "gatsby";

// import { useHooksContext } from "../context/HooksForContentFiles";
// const { showFullPara, setShowFullPara } = useHooksContext();

const landingContent = [
  {
    backgndColour1: "", // use Tailwind color name (see tailwind.config.js)
    backgndColour2: "",
    darkBackgnd: true, // determines if most of the text is light or dark
    firstLineText: "Are your patients hesitant about getting a COVID-19 vaccine?",
    mainTitle: "Are your patients hesitant about getting a COVID-19 vaccine?",
    subTitlePara: (
      <>
      {/* Add 'Read More' button to expand, hide subTitleParaBot */}

        <header>
          The Vaccine Hesitancy Guide supports better clinical conversations about vaccines. It differentiates common
          types of vaccine hesitancy that primary care clinicians may see. Browse through these types to help identify
          the sources of your patients&rsquo; hesitancy, and find advice and resources on how to address them.
        </header>

        <div className={`mt-6  subtitleFont font-light italic`}>
          <span>For an overview of how to use the guide, visit the</span>
          <Link to="/about" className="px-1.5  underline cursor-pointer">
            about
          </Link>
          <span>page.</span>
        </div>
      </>
    ),
    pillButtonText: "Browse Hesitancy Types",
    mainImageFileName: "Home Main Way.svg",
    backgndImageFileName: "Line for Home and New.svg",
  },

  {
    backgndColour: "",
    darkBackgnd: true,
    firstLineText: "New!",
    mainTitle: "Pediatric Vaccine Hesitancy Section",
    subTitlePara: (
      <>
        <header>
          The Vaccine Hesitancy Guide has recently added content to help you navigate COVID-19 vaccine conversations
          with parents and their children. See what other clinicians are saying to support better conversations about
          childhood vaccination!
        </header>
      </>
    ),
    pillButtonText: "",
    mainImageFileName: "",
    backgndImageFileName: "",
  },
];

export default landingContent;
