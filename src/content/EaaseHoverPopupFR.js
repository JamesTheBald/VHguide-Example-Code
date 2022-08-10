import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const EaaseHoverPopupFR = props => {
  const { eaaseTextClass, eaaseBoxClass } = props;
  return (
    <span className="hoverRevealTrigger">
      <AnchorLink to="/about/#eaaseSteps" title="étapes EAASE" className={eaaseTextClass} />

      <div className={`hiddenTillHover  p-6 mxs:p-8 baseFont bg-white rounded-2xl ${eaaseBoxClass} shadowGray  z-50`}>
        <div className="pb-3 font-bold">Étapes EAASE</div>
        <div className="pb-3">
          S’appuyant sur les principes de l’entrevue motivationnelle, notre équipe a conçu les étapes
          «&nbsp;EAASE&nbsp;» afin d’aider à orienter les conversations avec les patients qui hésitent à se faire
          vacciner : entamer, affirmer, demander la permission puis faire part d’information (ask then share) et
          évoquer. Même si nous les appelons «&nbsp;étapes&nbsp;», vous n’êtes pas obligé d’en respecter l’ordre. Vous
          pouvez commencer et terminer par n’importe quelle étape. L’approche EAASE permet d’améliorer les conversations
          en établissant un climat de confiance entre vous et votre patient.
        </div>
        <div className="w-full  flex flex-col mxs:flex-row  items-center">
          <div>
            Au lieu de miser sur l’obtention d’un «&nbsp;oui&nbsp;» à la vaccination par votre patient, l’objectif
            premier d’une conversation EAASE consiste à établir une alliance et à favoriser la confiance en la
            vaccination.
          </div>
          <StaticImage
            src="../assets/other/EAASE Icon.svg"
            alt="EAASE cycle"
            className="order-1 mxs:order-2  pt-0.5 mt-4 mxs:mt-0 mxs:ml-2 sm:ml-4  w-40 mxs:w-36 sm:w-40  flex-shrink-0"
          />
        </div>
      </div>
    </span>
  );
};

export default EaaseHoverPopupFR;
