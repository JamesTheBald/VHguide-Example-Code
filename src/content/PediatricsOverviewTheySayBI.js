import React from "react";
// import { Link } from "gatsby";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const PediatricsOverviewTheySayBI = () => {
  const { pedQuoteGroupInitOpen, lang } = useMyContext();

  pedQuoteGroupInitOpen.current = Array(20).fill(false);

  const theySayListItems = [
    { EN: "Long-term effects / Long-term data", FR: "" },
    { EN: "Developmental/puberty concerns", FR: "" },
    { EN: "Risks of COVID vs risks of vaccine to children", FR: "" },
    { EN: "Rushed approval/authorization of vaccine for children", FR: "" },
    { EN: "Virus 'Shedding'", FR: "" },
  ];

  return (
    <>
      <h3 className="listTitleClass">{lang === "EN" ? "What Clinicians Are Hearing" : ""}</h3>
      <div className="pt-3 baseFont">{lang === "EN" ? "Patients are saying they have concerns about..." : ""}</div>

      <ul className="ml-5 sm:ml-10  listClass2">
        {theySayListItems.map((currItem, index) => {
          return (
            <li className="pb-3 pl-1" key={index}>
              <button
                className="orangeUnderline text-left"
                onClick={() => {
                  pedQuoteGroupInitOpen.current[index] = true;
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
