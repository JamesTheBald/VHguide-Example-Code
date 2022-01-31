import React from "react";
// import { Link } from "gatsby";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const PediatricsOverviewTheySay = () => {
  const { pedQuoteGroupInitOpen } = useMyContext();

  const theySayListItems = [
    "Long-term effects / Long-term data",
    "Developmental/puberty concerns",
    "Risks of COVID vs risks of vaccine to children",
    "Rushed approval/authorization of vaccine for children",
    "Virus 'Shedding'",
  ];

  return (
    <>
      <h3 className="listTitleClass">Patients are saying they have concerns about...</h3>

      <ul className="listClass2">
        {theySayListItems.map((currItem, index) => {
          return (
            <li className="pb-3" key={index}>
              <button
                className="orangeUnderline text-left"
                onClick={() => {
                  pedQuoteGroupInitOpen.current[index]=true;
                  navigate("/details/advice/pediatrics");
                }}
              >
                {currItem}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PediatricsOverviewTheySay;
