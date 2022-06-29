import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import TypesPopupFR from "./TypesPopupFR";
import { useMyContext } from "../context/Context";

const AboutWhatIsThisFR = props => {
  const { MotivInterviewBI, textColumnsStyle } = props;

  const { setLocn, setNoneSelected, log } = useMyContext();
  false && console.log(log);

  return (
    <article className="relative">
      {/* Add onClick to next line to reveal/collapse following content. Also add pivoting chevron */}
      <h2 className="aboutTitleClass">Qu’est-ce que le Guide sur l’hésitation vaccinale (Guide HV)?</h2>

      <div style={textColumnsStyle}>
        <div className="pb-3">
          Le Guide sur l’hésitation vaccinale (Guide HV) présente des conseils, des scénarios et des ressources aidant à
          orienter les conversations au sujet des vaccins contre la COVID-19 avec les patients qui hésitent à se faire
          vacciner. L’information contenue dans le guide a été préparée en collaboration avec des cliniciens des quatre
          coins du Canada. Vous trouverez ce qui suit dans le guide&nbsp;:
        </div>

        <ul className="ml-6 sm:ml-12  listClass relative md:static">
          <li>
            <Link to="/pearls" className="orangeUnderline">
              des conseils de clinicien à clinicien
            </Link>
            <span className="pl-1.5">sur la façon de conseiller les patients au sujet de leur propre </span>
            {/* Note the interplay of the absolute positioning tailwind classes below and the relative / static ones above */}
            <TypesPopupFR sizeAndPosnClass="left-0 sm:left-16  top-10  w-full sm:w-3/4 md:w-120" />
            <span>
              {" "}
              d’hésitation face à la vaccination. Pour chaque type d’hésitation, vous trouverez des exemples de
              dialogues d’autres cliniciens qui ont eu à faire face à ce type d’hésitation;
            </span>
          </li>
          <li>
            <span>des exemples d’approches qui portent fruits dans le cas de </span>
            <Link
              to="/details/overview"
              className="orangeUnderline"
              onClick={() => {
                setLocn({ branch: 1, topic: 0, subtopic: 0, showSubtopic: false });
              }}
            >
              l’hésitation vaccinale indifférenciée
            </Link>
            <span>; et</span>
          </li>
          <li className="relative md:static">
            <span>une</span>
            <Link to="/explore" className="p-1.5 orangeUnderline" onClick={() => setNoneSelected(true)}>
              feuille de route
            </Link>
            <span>pour déterminer, différencier et aborder les </span>
            <TypesPopupFR sizeAndPosnClass="top-20 md:top-1/4 left-0 md:left-1/4  w-full sm:w-3/4 md:w-120" />
            {/* left-0 sm:left-16  top-10 */}
            <span> courants d’hésitation vaccinale.</span>
          </li>
        </ul>
        <div className="pb-3">
          Vous trouverez dans le guide des scénarios et des ressources pratiques provenant d’autres cliniciens, adaptés
          à chaque «&nbsp;type&nbsp;» d’hésitation vaccinale.
        </div>
        <div className="pb-3">
          <span>
            Les conseils, les principes généraux et les scénarios présentés dans le guide sont fondés sur les techniques
          </span>
          <MotivInterviewBI />
          <span>. L’entrevue motivationnelle encourage tant le clinicien que le patient à</span>
          <strong className="px-1.5">trouver les motivations positives de la vaccination.</strong>
          <span>Ce genre d’entrevue doit se faire au moyen de </span>

          <AnchorLink
            to="/about/#eaaseSteps"
            title="conversations ouvertes et affirmatives"
            className="orangeUnderline"
          />

          <span>
            {" "}
            au sujet des options, et non pas au moyen de conversations fermées, assorties de jugements et de
            déclarations d’expertise.
          </span>
        </div>
      </div>
    </article>
  );
};

export default AboutWhatIsThisFR;
