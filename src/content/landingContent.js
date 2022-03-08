import React from "react";
import { Link } from "gatsby";

const landingContent = [
  {
    backgndColourFrom: "blue-black", // use Tailwind color name (see tailwind.config.js)
    backgndColourTo: "blue-main",
    backgndGradientStartsAt: "top",
    mainTextColor: "gray-light", // determines if most of the text & graphics are light or dark
    exclaimText: "",
    exclaimTextColor: "gray-light", // use Tailwind color name (see tailwind.config.js)
    mainTitle: "Are your patients hesitant about getting a COVID-19 vaccine?",

    introPart1: (
      <span>
        The Vaccine Hesitancy Guide supports better clinical conversations about vaccines. It differentiates common
        types of vaccine hesitancy that primary care
      </span>
    ),
    introPart2: (
      <span>
        {" "}
        clinicians may see. Browse through these types to help identify the sources of your patients&rsquo; hesitancy,
        and find advice and resources on how to address them.
      </span>
    ),
    introPart3: (
      <span className="subtitleFont font-light italic">
        For an overview of how to use the guide, visit the
        <Link to="/about" className="px-1.5  underline cursor-pointer">
          about
        </Link>
        <span>page.</span>
      </span>
    ),

    pillButtonText: "Browse Hesitancy Types",
    pillButtonColor: "blue-main",
    mainImageFileName: "Panel Graphic - Landing.svg",
    backgndImageFileName: "Wavy Line.svg",
  },

  {
    backgndColourFrom: "lilac-darkish", // use Tailwind color name (see tailwind.config.js)
    backgndColourTo: "lilac-medium",
    backgndGradientStartsAt: "left",
    mainTextColor: "blue-blackest",
    exclaimText: "Coming Soon!",
    exclaimTextColor: "gray-light",
    mainTitle: "Pregnancy and Fertility Section",

    introPart1: (
      <span>
        The Vaccine Hesitancy Guide team is talking with family doctors and other experts to help clinicians communicate
        the importance of the COVID-19
      </span>
    ),
    introPart2: (
      <span>
        {" "}
        vaccine during pregnancy. The next release of the Guide will include support for better communications with
        patients who are concerned that vaccines will affect their fertility or unborn child.
      </span>
    ),
    introPart3: "",

    subTitlePara: (
      <>
        <header></header>
      </>
    ),
    pillButtonText: "Browse Fertility and Pregnancy Advice",
    pillButtonColor: "lilac-darkish",
    mainImageFileName: "Panel Graphics - Pregnancy - Coming Soon.svg",
    backgndImageFileName: "Wavy Line - darker.svg",
  },

  {
    backgndColourFrom: "yellow-700", // use Tailwind color name (see tailwind.config.js)
    backgndColourTo: "yellow-500",
    backgndGradientStartsAt: "top",
    mainTextColor: "gray-light",
    exclaimText: "New!",
    exclaimTextColor: "blue-blackest", // use Tailwind color name (see tailwind.config.js)
    mainTitle: "Medical Exemptions Section",
    subTitlePara: (
      <>
        <header>
          The Vaccine Hesitancy Guide has a new section to help clinicians speak with patients seeking medical
          exemptions to COVID-19 vaccination. It includes content on how to express your professional obligations and
          identify the underlying concerns behind your patient’s request for an exemption.
        </header>
      </>
    ),
    pillButtonText: "Browse Medical Exemption Advice",
    pillButtonColor: "yellow-700",
    mainImageFileName: "Panel Graphics - Medical Exemptions.svg",
    backgndImageFileName: "Wavy Line.svg",
  },

  {
    backgndColourFrom: "yellow-700 ", // use Tailwind color name (see tailwind.config.js)
    backgndColourTo: "yellow-500",
    backgndGradientStartsAt: "top",
    mainTextColor: "gray-light",
    exclaimText: "New!",
    exclaimTextColor: "blue-blackest",
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
    pillButtonText: "Browse Pediatric Advice",
    pillButtonColor: "yellow-700",
    mainImageFileName: "Panel Graphic - Pediatrics.svg",
    backgndImageFileName: "Wavy Line.svg",
  },
];

export default landingContent;
