import React from "react";
import { Link } from "gatsby";

// Many of the below string values are TailwindCSS utility classes that use custom colour names defined in tailwind.config.js

const mainBlue = {
  bgColorFromCls: "from-blue-black", // using Tailwind color name (see tailwind.config.js)
  bgColorToCls: "to-blue-main",
  bgGradientDirMobl: "bg-gradient-to-b", // Tailwind background gradient direction class.  ..to-b means 'top to bottom'
  bgGradientDirDesk: "bg-gradient-to-b",
  mainTextColorCls: "text-gray-light", // determines if most of the text & graphics are light or dark
  exclaimTextColorClsMobl: "text-blue-black", // using Tailwind color name (see tailwind.config.js)
  exclaimTextColorClsDesk: "text-blue-black",
  buttonBgColorCls: "bg-gray-light",
  buttonTextColorCls: "text-blue-black",
  buttonBorderColorCls: "border-gray-light",
  backgndImageFileName: "Wavy Line.svg",
};

const orange = {
  bgColorFromCls: "from-yellow-dark",
  bgColorToCls: "to-yellow-medium",
  bgGradientDirMobl: "bg-gradient-to-t",
  bgGradientDirDesk: "bg-gradient-to-r",
  mainTextColorCls: "text-gray-light",
  exclaimTextColorClsMobl: "text-blue-black",
  exclaimTextColorClsDesk: "text-blue-black",
  buttonBgColorCls: "bg-gray-light",
  buttonTextColorCls: "text-yellow-darker",
  buttonBorderColorCls: "border-gray-light",
  backgndImageFileName: "Wavy Line.svg",
};

// const comingSoonLilac = {
//   bgColorFromCls: "from-lilac-darkish",
//   bgColorToCls: "to-lilac-medium",
//   bgGradientDirMobl: "bg-gradient-to-t",
//   bgGradientDirDesk: "bg-gradient-to-r",
//   mainTextColorCls: "text-blue-blackest",
//   exclaimTextColorClsMobl: "text-blue-blackest",
//   exclaimTextColorClsDesk: "text-gray-light",
//   buttonBgColorCls: "bg-blue-black",
//   buttonTextColorCls: "text-gray-light",
//   buttonBorderColorCls: "border-blue-black",
//   backgndImageFileName: "Wavy Line - darker yet.svg",
// };

const landingSlidesContentBI = [
  {
    ...mainBlue,
    mainTitle: {
      EN: "Are your patients hesitant about getting a COVID-19 vaccine?",
      FR: "Vos patients hésitent à se faire vacciner contre la COVID-19?",
    },
    mainImageFileName: "Landing Slide - Home.svg",
    mainImageFileNameRev: "Landing Slide - Home Reversed.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          The Vaccine Hesitancy Guide supports better clinical conversations about vaccines. It identifies common types
          of vaccine hesitancy clinicians may encounter. Review
        </span>
      ),
      FR: (
        <span>
          Le Guide sur l’hésitation vaccinale permet d’entretenir de meilleures conversations au sujet des vaccins en
          milieu clinique. Il dresse la différence entre les types
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span>
          {" "}
          the hesitancy types to help identify the sources of your patients’ hesitancy and find advice from fellow
          clinicians on how to address them.
        </span>
      ),
      FR: (
        <span>
          {" "}
          d’hésitation vaccinale auxquels les cliniciens de soins primaires font souvent face. Jetez un coup d’œil aux
          divers types d’hésitation afin de déterminer les sources d’hésitation de vos patients et de trouver des
          ressources et des conseils pour surmonter ces hésitations.
        </span>
      ),
    },
    introPart3: {
      EN: (
        <>
          <span className="subtitleFont font-light italic">
            For an overview of how to use the guide, visit the
            <Link to="/about" className="px-1.5  underline cursor-pointer">
              about
            </Link>
            <span>page.</span>
          </span>
        </>
      ),
      FR: (
        <>
          <span className="subtitleFont font-light italic">
            Un aperçu de ce guide se trouve à la page
            <Link to="/about" className="px-1.5  underline cursor-pointer">
              «&nbsp;À propos du guide&nbsp;».
            </Link>
          </span>
        </>
      ),
    },
    buttonText: { EN: "Browse Hesitancy Types", FR: "Jeter un coup d’œil aux types d’hésitation" },
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "", // This is a flag to the onClick code in BrowseButton.js to invoke a function when the button is clicked.
  },

  {
    ...orange,
    mainTitle: {
      EN: "Traduction Français",
      FR: "Traduction Français",
    },
    mainImageFileName: "Landing Slide - French Translation.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          Prenez-vous soin des patients francophones? A full translation of the Vaccine Hesitancy Guide is now
          available! Click the
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: (
        <span>
          {" "}
          language selector button at the top right of the screen to change the site over to French at any time.
        </span>
      ),
      FR: <span></span>,
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Switch to the French Site", FR: "" },
    buttonDestn: "/",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "french",
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Are you encountering pediatric vaccine hesitancy?",
      FR: "Placeholder for FRENCH pediatric vaccine hesitancy",
    },
    mainImageFileName: "Landing Slide - Pediatric.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          The Vaccine Hesitancy Guide has advice to help you navigate COVID-19 vaccine conversations with parents and
          their children. See what other
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: <span>clinicians are saying to support better conversations about childhood vaccination.</span>,
      FR: <span> </span>,
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Pediatric Advice", FR: "Placeholder for FRENCH button" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 3, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...orange,
    mainTitle: {
      EN: "Are your patients requesting vaccine exemptions?",
      FR: "Placeholder for FRENCH vaccine exemptions",
    },
    mainImageFileName: "Landing Slide - Medical Exemptions.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          The Vaccine Hesitancy Guide has advice to help clinicians speak with patients seeking medical exemptions to
          COVID-19 vaccination.
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: (
        <span>
          {" "}
          It includes content on how to express your professional obligations and identify the underlying concerns
          behind your patient’s request for an exemption.
        </span>
      ),
      FR: <span> </span>,
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Medical Exemption Advice", FR: "" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 4, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Are you encountering concerns about pregnancy or fertility?",
      FR: "Placeholder for FRENCH pregnancy/fertility slide",
    },
    mainImageFileName: "Landing Slide - Pregnancy.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          The Vaccine Hesitancy Guide team worked with family doctors and other experts to help clinicians communicate
          the importance of the COVID-19
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: (
        <span>
          {" "}
          vaccine during pregnancy. The Guide provides discussion points to better understand the reasons for patient
          hesitancy during pregnancy or while trying to conceive.
        </span>
      ),
      FR: <span> </span>,
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Fertility and Pregnancy Advice", FR: "" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 0, topic: 0, subtopic: 3, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...orange,
    mainTitle: {
      EN: "Let us know your thoughts on the site!",
      FR: "Placeholder for FRENCH survey slide",
    },
    mainImageFileName: "Landing Slide - Feedback.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          How have you been enjoying the VH Guide so far? Have you referred it to your colleagues? Do you have a success
          story to share? Ideas of
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: <span>additional content you’d like to see on the site? Share your feedback and experiences with us!</span>,
      FR: <span> </span>,
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: {
      EN: "Take me to the Form",
      FR: "",
    },
    buttonDestn: "https://survey.ucalgary.ca/jfe/form/SV_6GbMwSo0jnPE1WS",
    buttonFuncFlag: "survey",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Have you seen our ‘clinical pearls’ section?",
      FR: "Placeholder for FRENCH clinical pearls slide",
    },
    mainImageFileName: "Landing Slide - Clinical Pearls.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          ‘Clinical pearls’ features direct clinician-to-clinician advice on how to approach and conduct vaccine
          hesitancy conversations. From affirming
        </span>
      ),
      FR: <span></span>,
    },
    introPart2: {
      EN: (
        <span>
          {" "}
          you’re an ally to lowering the temperature, this section features advice applicable to conversations with any
          type of hesitancy. You can also view our undifferentiated vaccine hesitancy section for specific overview,
          advice, and resources applicable to helping all types of vaccine hesitant patients.
        </span>
      ),
      FR: <span> </span>,
    },
    introPart3: {
      EN: (
        <>
          <span className="subtitleFont font-light italic"></span>
        </>
      ),
      FR: (
        <>
          <span className="subtitleFont font-light italic"></span>
        </>
      ),
    },
    buttonText: { EN: "Browse Clinical Pearls", FR: "" },
    buttonDestn: "/pearls",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "",
  },

  // BLANK DATA TEMPLATE
  // {
  //   ...mainBlue,
  //   mainTitle: {
  //     EN: "",
  //     FR: "",
  //   },
  //   mainImageFileName: "",
  //   exclaimText: "",
  //   introPart1: {
  //     EN: <span></span>,
  //     FR: <span></span>,
  //   },
  //   introPart2: {
  //     EN: <span> </span>,
  //     FR: <span> </span>,
  //   },
  //   introPart3: {
  //     EN: (
  //       <>
  //         <span className="subtitleFont font-light italic"></span>
  //       </>
  //     ),
  //     FR: (
  //       <>
  //         <span className="subtitleFont font-light italic"></span>
  //       </>
  //     ),
  //   },
  //   buttonText: { EN: "", FR: "" },
  //   buttonDestn: "/explore",
  //   newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  //   buttonFuncFlag: "",
  // },
];

export default landingSlidesContentBI;
