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
          <span className="pl-1">
            the hesitancy types to help identify the sources of your patients’ hesitancy and find advice from fellow
            clinicians on how to address them.
          </span>
          <div className="h-3" />
          <span className="subtitleFont font-light italic">
            For an overview of how to use the guide, visit the
            <Link to="/about" className="px-1.5  underline cursor-pointer">
              about
            </Link>
            <span>page.</span>
          </span>
        </span>
      ),
      FR: (
        <span>
          <span className="pl-1">
            d’hésitation vaccinale auxquels les cliniciens de soins primaires font souvent face. Jetez un coup d’œil aux
            divers types d’hésitation afin de déterminer les sources d’hésitation de vos patients et de trouver des
            ressources et des conseils pour surmonter ces hésitations.
          </span>
          <div className="h-3" />
          <span className="subtitleFont font-light italic">
            Un aperçu de ce guide se trouve à la page
            <Link to="/about" className="px-1.5  underline cursor-pointer">
              «&nbsp;À propos du guide&nbsp;».
            </Link>
          </span>
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Hesitancy Types", FR: "Jeter un coup d’œil aux types d’hésitation" },
    buttonDestn: "/explore",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "", // This is a flag to the onClick code in BrowseButton.js to invoke a function when the button is clicked.
  },

  {
    ...orange,
    mainTitle: {
      EN: "Version française",
      FR: "Version française",
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
      FR: (
        <span>
          Vous avez des patients francophones? La traduction complète du Guide sur l’hésitation vaccinale est maintenant
          disponible!
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">
          language selector button at the top right of the screen to change the site over to French at any time.
        </span>
      ),
      FR: (
        <span className="pl-1">
          Cliquez sur le bouton de sélection de la langue dans le coin droit supérieur de l’écran pour accéder à la
          version française du site.
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Switch to the French Site", FR: "Site en français" },
    buttonDestn: "/",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "french",
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Are you encountering pediatric vaccine hesitancy?",
      FR: "Faites-vous face à des hésitations vaccinales pédiatriques?",
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
      FR: (
        <span>
          Le Guide sur l’hésitation vaccinale présente des conseils pour vous aider à discuter du vaccin de la COVID-19
          avec les
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">clinicians are saying to support better conversations about childhood vaccination.</span>
      ),
      FR: (
        <span className="pl-1">
          parents et leurs enfants. Prenez connaissance de ce que d’autres cliniciens ont à dire pour améliorer vos
          conversations entourant la vaccination des enfants.
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Pediatric Advice", FR: "Conseils pédiatriques" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 3, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...orange,
    mainTitle: {
      EN: "Are your patients requesting vaccine exemptions?",
      FR: "Est-ce que vos patients demandent une exemption vaccinale?",
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
      FR: (
        <span>
          Le Guide sur l’hésitation vaccinale présente des conseils pour aider les cliniciens à s’entretenir avec les
          patients
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">
          It includes content on how to express your professional obligations and identify the underlying concerns
          behind your patient’s request for an exemption.
        </span>
      ),
      FR: (
        <span className="pl-1">
          désirant obtenir une exemption médicale pour le vaccin contre la COVID-19. Le guide comprend du contenu vous
          aidant à exprimer vos obligations professionnelles et à déterminer les inquiétudes se dissimulant derrière la
          demande d’exemption de votre patient.
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Medical Exemption Advice", FR: "Conseils pour exemptions médicales" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 4, topic: 0, subtopic: 0, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Are you encountering concerns about pregnancy or fertility?",
      FR: "Est-ce que vos patients ont des inquiétudes en matière de grossesse ou de fertilité?",
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
      FR: (
        <span>
          L’équipe du Guide sur l’hésitation vaccinale a collaboré avec des médecins de famille et d’autres experts pour
          aider les
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">
          vaccine during pregnancy. The Guide provides discussion points to better understand the reasons for patient
          hesitancy during pregnancy or while trying to conceive.
        </span>
      ),
      FR: (
        <span className="pl-1">
          cliniciens à communiquer l’importance, pour la femme enceinte, de se faire vacciner contre la COVID-19. Le
          guide offre des points de discussion pour mieux comprendre les raisons derrière l’hésitation des patientes
          enceintes ou de celles qui essaient de concevoir.
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Fertility and Pregnancy Advice", FR: "Conseils pour la grossesse et la fertilité" },
    buttonDestn: "/details/overview",
    newLocn: { branch: 0, topic: 0, subtopic: 3, showSubtopic: false },
    buttonFuncFlag: "",
  },

  {
    ...orange,
    mainTitle: {
      EN: "Let us know your thoughts on the site!",
      FR: "Faites-nous part de vos réflexions sur le site!",
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
      FR: (
        <span>
          Que pensez-vous du Guide sur l’hésitation vaccinale jusqu’à maintenant? En avez-vous parlé à vos collègues?
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">
          additional content you’d like to see on the site? Share your feedback and experiences with us!
        </span>
      ),
      FR: (
        <span className="pl-1">
          Voulez-vous partager vos réussites? Voulez-vous suggérer des idées de contenu supplémentaires à publier sur le site? Faites-nous
          part de vos commentaires et de vos expériences!
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: {
      EN: "Take me to the Form",
      FR: "Accès au formulaire",
    },
    buttonDestn: "https://survey.ucalgary.ca/jfe/form/SV_6GbMwSo0jnPE1WS",
    buttonFuncFlag: "survey",
    newLocn: { branch: 0, topic: 0, subtopic: 0, showSubtopic: false },
  },

  {
    ...mainBlue,
    mainTitle: {
      EN: "Have you seen our ‘clinical pearls’ section?",
      FR: <>Avez-vous vu notre section de «&nbsp;perles cliniques&nbsp;»?</>,
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
      FR: (
        <span>
          La section des «&nbsp;perles cliniques&nbsp;» présente des conseils directs, de clinicien à clinicien, montrant comment
          aborder
        </span>
      ),
    },
    introPart2: {
      EN: (
        <span className="pl-1">
          you’re an ally to lowering the temperature, this section features advice applicable to conversations with any
          type of hesitancy. You can also view our undifferentiated vaccine hesitancy section for specific overview,
          advice, and resources applicable to helping all types of vaccine hesitant patients.
        </span>
      ),
      FR: (
        <span className="pl-1">
          et mener à bien les conversations sur l’hésitation vaccinale. Que vous vouliez affirmer que vous êtes l’allié de la patiente,
          ou que vous vouliez calmer un patient, cette section présente des conseils pour les conversations entourant
          tous les types d’hésitations. Vous pouvez aussi consulter notre section sur l’hésitation vaccinale
          indifférenciée pour obtenir une vue d’ensemble, des conseils et des ressources connexes pour tous les types de
          patients hésitant à se faire vacciner.
        </span>
      ),
    },
    introPart3: {
      EN: <></>,
      FR: <></>,
    },
    buttonText: { EN: "Browse Clinical Pearls", FR: "Perles cliniques" },
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
  //     EN: <span className="pl-1"> </span>,
  //     FR: <span className="pl-1"> </span>,
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
