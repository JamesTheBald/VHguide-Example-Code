import React from "react";
// import { Link } from "gatsby";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const PediatricsOverviewTheySay = () => {
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
      <h3 className="listTitleClass">{lang === "EN" ? "Patients are saying they have concerns about..." : ""}</h3>

      <ul className="listClass2">
        {theySayListItems.map((currItem, index) => {
          return (
            <li className="pb-3" key={index}>
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

export default PediatricsOverviewTheySay;
