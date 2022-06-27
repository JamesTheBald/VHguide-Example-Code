import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const PediatricsOverviewTheySayBI = () => {
  const { pedQuoteGroupInitOpen, lang } = useMyContext();

  pedQuoteGroupInitOpen.current = Array(10).fill(false);

  // we have 6 sections on the Advice tab but only 5 topics that link to these from here. Two sections are referenced from the same topic link. (On the Advice tab there's "COVID Is Low-Risk In Children" and "Vaccination Is Too Risky For My Kids". Both seem to line up with "Risks of COVID vs risks of vaccine to children" on the Overview tab.)

  const theySayListItems = [
    { EN: "Long-term effects / Long-term data", FR: "Effets ou données à long terme" },
    { EN: "Developmental/puberty concerns", FR: "Problèmes en matière de développement ou de puberté" },
    { EN: "Risks of COVID vs risks of vaccine to children", FR: "La COVID présente peu de risques pour les enfants." },
    {
      EN: "Rushed approval/authorization of vaccine for children",
      FR: "Approbation rapide des vaccins pour les enfants",
    },
    { EN: "Virus 'Shedding'", FR: "Excrétion virale" },
  ];

  return (
    <>
      <h3 className="listTitleClass">
        {lang === "EN" ? "What Clinicians Are Hearing" : "Ce que les cliniciens entendent"}
      </h3>
      <div className="pt-3 baseFont">{lang === "EN" ? "Patients are saying they have concerns about..." : ""}</div>

      <ul className="ml-5 sm:ml-10  listClass2">
        {theySayListItems.map((currItem, index) => {
          return (
            <li className="pb-3 pl-1" key={index}>
              <button
                className="orangeUnderline text-left"
                onClick={() => {
                  let i = index; // Handle how there's five items on Overview list ('What Clinicians Are Hearing') but six topics
                  if (i >= 3) i = i + 1; //  on Advice page('Patients are saying they have concerns about…')
                  pedQuoteGroupInitOpen.current[i] = true;
                  navigate("/details/advice/pediatrics");
                }}
              >
                {currItem[lang]}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PediatricsOverviewTheySayBI;
