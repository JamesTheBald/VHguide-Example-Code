import React from "react";
import { Link } from "gatsby";

// Many of the below string values are TailwindCSS utility classes that use custom colour names defined in tailwind.config.js

const mainBlue = {
  bgColorFromCls: "from-blue-black", // using Tailwind color name (see tailwind.config.js)
  bgColorToCls: "to-blue-main",
  bgGradientDirMobl: "bg-gradient-to-b",  // Tailwind background gradient direction class.  ..to-b means 'top to bottom'
  bgGradientDirDesk: "bg-gradient-to-b",
  mainTextColorCls: "text-gray-light", // determines if most of the text & graphics are light or dark
  exclaimText: "",
  exclaimTextColorClsMobl: "text-blue-black", // using Tailwind color name (see tailwind.config.js)
  exclaimTextColorClsDesk: "text-blue-black",
  buttonBgColorCls: "bg-gray-light",
  buttonTextColorCls: "text-blue-main",
  buttonBorderColorCls: "border-gray-light",
  mainImageFileName: "Panel Graphic - Landing.svg",
  backgndImageFileName: "Wavy Line.svg",
};

const newOrange = {
  bgColorFromCls: "from-yellow-dark",
  bgColorToCls: "to-yellow-medium",
  bgGradientDirMobl: "bg-gradient-to-t",
  bgGradientDirDesk: "bg-gradient-to-r",
  mainTextColorCls: "text-gray-light",
  exclaimText: "New!",
  exclaimTextColorClsMobl: "text-blue-black",
  exclaimTextColorClsDesk: "text-blue-black",
  buttonBgColorCls: "bg-gray-light",
  buttonTextColorCls: "text-yellow-700",
  buttonBorderColorCls: "border-gray-light",
  mainImageFileName: "Panel Graphic - Pregnancy - for orange bg.svg",
  backgndImageFileName: "Wavy Line.svg",
};

const comingSoonLilac = {
  bgColorFromCls: "from-lilac-darkish",
  bgColorToCls: "to-lilac-medium",
  bgGradientDirMobl: "bg-gradient-to-t",
  bgGradientDirDesk: "bg-gradient-to-r",
  mainTextColorCls: "text-blue-blackest",
  exclaimText: "Coming Soon!",
  exclaimTextColorClsMobl: "text-blue-blackest",
  // exclaimTextColorClsMobl: "text-gray-light",
  exclaimTextColorClsDesk: "text-gray-light",
  buttonBgColorCls: "bg-blue-black",
  buttonTextColorCls: "text-gray-light",
  buttonBorderColorCls: "border-blue-black",
  mainImageFileName: "Panel Graphic - Pregnancy - for lilac bg.svg",
  backgndImageFileName: "Wavy Line - darker yet.svg",
};

const landingContent = [
  {
    // Landing panel, in 'Main Blue'
    ...mainBlue,
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
    buttonText: "Browse Hesitancy Types",
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...newOrange,
    mainTitle: "Updated Pregnancy and Fertility Section",
    introPart1: (
      <span>
        The Vaccine Hesitancy Guide team is talking with family doctors and other experts to help clinicians communicate
        the importance of the COVID-19
      </span>
    ),
    introPart2: (
      <span>
        {" "}
        vaccine during pregnancy. This update includes support for better communications with patients who are concerned
        that vaccines will affect their fertility or unborn child.
      </span>
    ),
    introPart3: "",
    buttonText: "Browse Fertility and Pregnancy Advice",
    buttonDestn: "/details/overview",
    newLocn: { branch: 0, topic: 0, subtopic: 3, showSubtopic: false },
  },

  {
    ...comingSoonLilac,
    mainTitle: "French Translation",
    introPart1: (
      <span>
        Prenez-vous soin des patients francophones? Une traduction complète des conseils inclus sur le Vaccine Hesitancy
        Guide sera bientôt disponible! A full
      </span>
    ),
    introPart2: <span> translation of the advice included in the Vaccine Hesitancy Guide will be available soon!</span>,
    introPart3: "",
    buttonText: "Browse Hesitancy Types",
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...newOrange,
    mainTitle: "Pediatric Vaccine Hesitancy Section",
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
    newLocn: { branch: 3, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...newOrange,
    mainTitle: "Medical Exemptions Section",
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
    newLocn: { branch: 4, topic: 0, subtopic: 0, showSubtopic: false },
  },
];

export default landingContent;
