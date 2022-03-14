import React, { useState } from "react";
// import { Link } from "gatsby";
// import { navigate } from "gatsby";

// import { useMyContext } from "../context/Context";

const ReproductiveOverviewTheySay = () => {
  // const { pedQuoteGroupInitOpen } = useMyContext();

  const [showFullTheySay, setShowFullTheySay] = useState(false);

  const theySayListItems1 = [
    "I’m really worried that there is no long-term data to tell us what the effects of this will be on me or my baby.",
    "I’m at very low risk, I think. I'm being very careful. I'm working and staying at home. I’m limiting all my social contact. So there’s no need.",
    "I don't want to introduce unnecessary medications and chemicals into my body if I don't need to. Why would I do that?",
  ];

  const theySayListItems2 = [
    "I already had COVID - do I still need the vaccine [or booster] while pregnant?",
    "There is no vaccine for babies, so why would I get it when I’m pregnant? Why would I get a vaccine that is not good for babies?",
    "The vaccine is a big issue with my partner/family as well - [they] are very much against getting the vaccine at this stage or even later on especially when I'm breastfeeding.",
    "I don't want it during the first trimester when all the baby’s organs are developing and when I’m at the highest risk of miscarriage.",
    "I’m not having my partner get this experimental vaccine when she's carrying my child that we've worked so hard to conceive.",
    "I heard the vaccine knocks you out for a day or two.  This can’t happen.  I’m pregnant and I’ve got two other kids already. I am tired, and I don't have anyone to help me.  I can’t afford those two days!",
  ];

  return (
    <>
      <h3 className="listTitleClass">People with this hesitancy type say:</h3>

      <ul className="listClass2">
        {theySayListItems1.map((currItem, index) => {
          return (
            <li className="pb-3" key={index}>
              {currItem}
            </li>
          );
        })}
      </ul>
      {showFullTheySay && (
        <ul className="listClass2">
          {theySayListItems2.map((currItem, index) => {
            return (
              <li className="pb-3" key={index}>
                {currItem}
              </li>
            );
          })}
        </ul>
      )}

      <div
        className="ml-6 sm:ml-10 mb-8  orangeUnderline cursor-pointer"
        onClick={() => setShowFullTheySay(curr => !curr)}
        onKeyPress={() => setShowFullTheySay(curr => !curr)}
        tabIndex={0}
        role="button"
      >
        {showFullTheySay ? <>read less...</> : <>read more...</>}
      </div>
    </>
  );
};

export default ReproductiveOverviewTheySay;
