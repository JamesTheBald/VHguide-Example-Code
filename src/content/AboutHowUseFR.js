import React from "react";
import { Link } from "gatsby";

import TypesPopupFR from "./TypesPopupFR";
import { useMyContext } from "../context/Context";

const AboutHowUseFR = props => {
  const { textColumnsStyle } = props;
  const { setLocn, setNoneSelected, setShowContactForm } = useMyContext();

  return (
    <article>
      {/* <article className="relative"> */}
      <h2 className="aboutTitleClass">Comment dois-je utiliser le Guide HV?</h2>

      <div className="relative" style={textColumnsStyle}>
        <div className="pb-3">
          Le guide peut être utilisé soit dans le cadre d’un rendez-vous avec un patient qui hésite à se faire vacciner,
          soit en dehors des heures de rendez-vous avec les patients. Les scénarios du guide peuvent avoir un caractère
          délicat. C’est pourquoi vous devriez vous familiariser avec leur contenu et leur organisation avant de les
          utiliser avec les patients.
        </div>
        <div className="pb-3 relative">
          Le guide s’articule autour d’exemples de présentations typiques d’hésitation vaccinale. Ces{" "}
          <TypesPopupFR sizeAndPosnClass="left-0 sm:left-16  -top-40  w-full sm:w-3/4 md:w-120" /> d’hésitation
          vaccinale figurent dans une{" "}
          <Link
            to="/explore"
            className="orangeUnderline"
            onClick={() => {
              setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
              setNoneSelected(true);
            }}
          >
            feuille de route
          </Link>{" "}
          interactive. Les types peuvent également être divisés en sous-types, chacun décrivant une présentation plus
          précise d’hésitation vaccinale. Après avoir pris connaissance des menus et déterminé le{" "}
          <TypesPopupFR sizeAndPosnClass="left-0 sm:left-16  -top-40  w-full sm:w-3/4 md:w-120" /> qui correspond le
          mieux à l’hésitation de votre patient, vous aurez accès à trois onglets d’information :
        </div>
        <ul className="listClass">
          <li>
            l’onglet « Aperçu », comprenant des inquiétudes ou des énoncés courants pour le type d’hésitation choisi,
            ainsi que certaines options à considérer pendant les consultations;
          </li>
          <li>
            l’onglet « Conseils », présentant des scénarios éprouvés qui ont été utilisés par d’autres cliniciens; et
          </li>
          <li>l’onglet « Ressources », menant à de l’information pertinente faisant partie de liens externes.</li>
        </ul>
        <span>
          Les conseils, les scénarios et les ressources figurant dans le guide sont mis à jour à la lumière de
          l’évolution de la pandémie de la COVID-19, de la distribution des vaccins et de la rétroaction des
          utilisateurs. Veuillez{" "}
          <button className="orangeUnderline" onClick={() => setShowContactForm(true)}>
            communiquer avec nous
          </button>{" "}
          si vous avez des commentaires ou des suggestions.
        </span>
      </div>
    </article>
  );
};

export default AboutHowUseFR;
