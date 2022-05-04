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
  buttonTextColorCls: "text-blue-main",
  buttonBorderColorCls: "border-gray-light",
  backgndImageFileName: "Wavy Line.svg",
};

const newOrange = {
  bgColorFromCls: "from-yellow-dark",
  bgColorToCls: "to-yellow-medium",
  bgGradientDirMobl: "bg-gradient-to-t",
  bgGradientDirDesk: "bg-gradient-to-r",
  mainTextColorCls: "text-gray-light",
  exclaimTextColorClsMobl: "text-blue-black",
  exclaimTextColorClsDesk: "text-blue-black",
  buttonBgColorCls: "bg-gray-light",
  buttonTextColorCls: "text-yellow-700",
  buttonBorderColorCls: "border-gray-light",
  backgndImageFileName: "Wavy Line.svg",
};

const comingSoonLilac = {
  bgColorFromCls: "from-lilac-darkish",
  bgColorToCls: "to-lilac-medium",
  bgGradientDirMobl: "bg-gradient-to-t",
  bgGradientDirDesk: "bg-gradient-to-r",
  mainTextColorCls: "text-blue-blackest",
  exclaimTextColorClsMobl: "text-blue-blackest",
  exclaimTextColorClsDesk: "text-gray-light",
  buttonBgColorCls: "bg-blue-black",
  buttonTextColorCls: "text-gray-light",
  buttonBorderColorCls: "border-blue-black",
  backgndImageFileName: "Wavy Line - darker yet.svg",
};

const landingSlidesContentBI = [
  {
    ...mainBlue,
    mainTitle: {
      EN: "Are your patients hesitant about getting a COVID-19 vaccine?",
      FR: "Vos patients hésitent à se faire vacciner contre la COVID-19?",
    },

    mainImageFileName: "Panel Graphic - Landing.svg",
    exclaimText: "",
    introPart1: {
      EN: (
        <span>
          The Vaccine Hesitancy Guide supports better clinical conversations about vaccines. It differentiates common
          types of vaccine hesitancy that primary care
        </span>
      ),
      FR: (
        <span>
          Le Guide sur l’hésitation vaccinale permet d’entretenir de meilleures conversations au sujet des vaccins en
          milieu clinique. Il dresse la différence entre les types
        </span>
      ),
    },
    // d’hésitation vaccinale auxquels les cliniciens de soins primaires font souvent face. Jetez un coup d’œil aux divers types d’hésitation afin de déterminer les sources d’hésitation de vos patients et de trouver des ressources et des conseils pour surmonter ces hésitations. Un aperçu de ce guide se trouve à la page «&nbsp;À propos du guide&nbsp;».

    introPart2: {
      EN: (
        <span>
          {" "}
          clinicians may see. Browse through these types to help identify the sources of your patients&rsquo; hesitancy,
          and find advice and resources on how to address them.
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
  },

  {
    ...newOrange,
    mainTitle: "Updated Pregnancy and Fertility Section",
    mainImageFileName: "Panel Graphic - Pregnancy - for orange bg.svg",
    exclaimText: "New!",
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
    mainTitle: (
      <>
        <div>Traduction Français</div>
        <div>French Translation</div>
      </>
    ),
    mainImageFileName: "Panel Graphic - French Translation.svg",
    exclaimText: "Bientôt Disponible! Coming Soon!",
    introPart1: (
      <span>
        Prenez-vous soin des patients francophones? Une traduction complète des conseils inclus sur le Vaccine Hesitancy
        Guide sera bientôt disponible! A full
      </span>
    ),
    introPart2: <span> translation of the advice included in the Vaccine Hesitancy Guide will be available soon!</span>,
    introPart3: "",
    buttonText: "",
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...newOrange,
    mainTitle: "Pediatric Vaccine Hesitancy Section",
    mainImageFileName: "Panel Graphic - Pediatrics.svg",
    exclaimText: "New!",
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
    mainImageFileName: "Panel Graphic - Medical Exemptions.svg",
    exclaimText: "New!",
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

export default landingSlidesContentBI;
