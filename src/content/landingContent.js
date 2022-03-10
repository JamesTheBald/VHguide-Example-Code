import React from "react";
import { Link } from "gatsby";

const landingContent = [
  {
    mainTitle: "Are your patients hesitant about getting a COVID-19 vaccine?",
    bgColorFromCls: "from-blue-black", // use Tailwind color name (see tailwind.config.js)
    bgColorToCls: "to-blue-main",
    backgndGradientStartsAt: "top",
    mainTextColorCls: "text-gray-light", // determines if most of the text & graphics are light or dark
    exclaimText: "",
    exclaimTextColorCls: "text-blue-black", // use Tailwind color name (see tailwind.config.js)
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
    buttonText: "Browse Hesitancy Types",
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonBgColorCls: "bg-gray-light",
    buttonTextColorCls: "text-blue-main",
    buttonBorderColorCls: "border-gray-light",
    mainImageFileName: "Panel Graphic - Landing.svg",
    backgndImageFileName: "Wavy Line.svg",
  },

  {
    mainTitle: "Pregnancy and Fertility Section",
    bgColorFromCls: "from-lilac-darkish", // use Tailwind color name (see tailwind.config.js)
    bgColorToCls: "to-lilac-medium",
    backgndGradientStartsAt: "left",
    mainTextColorCls: "text-blue-blackest",
    exclaimText: "Coming Soon!",
    exclaimTextColorCls: "text-gray-light",
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
    buttonText: "Browse Fertility and Pregnancy Advice",
    buttonDestn: "/details/overview",
    newLocn: { branch: 0, topic: 0, subtopic: 3, showSubtopic: false },
    buttonBgColorCls: "bg-blue-black",
    buttonTextColorCls: "text-gray-light",
    buttonBorderColorCls: "border-blue-black",
    mainImageFileName: "Panel Graphics - Pregnancy - Coming Soon.svg",
    backgndImageFileName: "Wavy Line - darker yet.svg",
  },

  {
    mainTitle: "Medical Exemptions Section",
    bgColorFromCls: "from-yellow-700", // use Tailwind color name (see tailwind.config.js)
    bgColorToCls: "to-yellow-500",
    backgndGradientStartsAt: "top",
    mainTextColorCls: "text-gray-light",
    exclaimText: "New!",
    exclaimTextColorCls: "text-blue-blackest", // use Tailwind color name (see tailwind.config.js)
    introPart1: (
      <span>
        The Vaccine Hesitancy Guide has a new section to help clinicians speak with patients seeking medical exemptions
        to COVID-19 vaccination.
      </span>
    ),
    introPart2: (
      <span>
        {" "}
        It includes content on how to express your professional obligations and identify the underlying concerns behind
        your patient’s request for an exemption.
      </span>
    ),
    introPart3: "",
    buttonText: "Browse Medical Exemption Advice",
    buttonDestn: "/details/overview",
    newLocn: { branch: 4, topic: 0, subtopic:0, showSubtopic: false },
    buttonBgColorCls: "bg-gray-light",
    buttonTextColorCls: "text-yellow-700",
    buttonBorderColorCls: "border-gray-light",
    mainImageFileName: "Panel Graphics - Medical Exemptions.svg",
    backgndImageFileName: "Wavy Line.svg",
  },

  {
    mainTitle: "Pediatric Vaccine Hesitancy Section",
    bgColorFromCls: "from-yellow-700", // use Tailwind color name (see tailwind.config.js)
    bgColorToCls: "to-yellow-500",
    backgndGradientStartsAt: "top",
    mainTextColorCls: "text-gray-light",
    exclaimText: "New!",
    exclaimTextColorCls: "text-blue-blackest",
    introPart1: (
      <span>
        The Vaccine Hesitancy Guide has recently added content to help you navigate COVID-19 vaccine conversations with
        parents and their children.
      </span>
    ),
    introPart2: (
      <span> See what other clinicians are saying to support better conversations about childhood vaccination!</span>
    ),
    introPart3: "",
    buttonText: "Browse Pediatric Advice",
    buttonDestn: "/details/overview",
    newLocn: { branch: 3, topic: 0, subtopic:0, showSubtopic: false },
    buttonBgColorCls: "bg-gray-light",
    buttonTextColorCls: "text-yellow-700",
    buttonBorderColorCls: "border-gray-light",
    mainImageFileName: "Panel Graphic - Pediatrics.svg",
    backgndImageFileName: "Wavy Line.svg",
  },
];

export default landingContent;
