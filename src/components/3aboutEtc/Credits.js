import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import CollabLogos from "./CollabLogos";

const Credits = () => {
  const lineClass = "flex flex-col sm:flex-row";
  const roleClass = "w-48 sm:w-56 flex-shrink-0";
  const nameClass = "ml-3 mb-3 font-semibold";

  return (
    <article className="panelTextClass">
      <h2 className="panelTitleClass">Credits</h2>

      <div className="flex flex-col lg:flex-row">
        <div className="mt-3">
          <div className={lineClass}>
            <div className={roleClass}>Principal Investigator:</div>
            <div className={nameClass}>Dr. Myles Leslie, PhD</div>
          </div>

          <div className={lineClass}>
            <div className={roleClass}>Project &amp; Content Leads:</div>
            <div>
              <div className={`${nameClass}`}>Dr. Raad Fadaak, PhD</div>
              <div className={`-mt-3 ${nameClass}`}>Nicole Pinto, MPH</div>
            </div>
          </div>

          <div className={lineClass}>
            <div className={roleClass}>Web Design:</div>
            <div className={nameClass}>Elise Martinoski, B.Comm</div>
          </div>

          <div className={lineClass}>
            <div className={roleClass}>Web Development:</div>
            <div className={nameClass}>James Murphy, M.Eng., M.Sc.</div>
          </div>
        </div>

        <div className="mt-5 sm:mt-8 lg:mt-0 lg:ml-30  w-full axs:w-75 mxs:w-85 sm:w-100 lg:w-120">
          <StaticImage
            src="../../images/collabLogos/UofC_SPPLogo.png"
            alt="UofC School of Public Policy logo"
          />
        </div>
      </div>

      <div className="mt-24 panelTitleClass">Collaborators</div>
      <CollabLogos size="small" />
    </article>
  );
};

export default Credits;
