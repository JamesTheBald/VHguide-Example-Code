import React from "react";

const TypesPopupFR = props => {
  const { sizeAndPosnClass } = props;

  return (
    // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
    <span className="hoverRevealTrigger">
      <span className="orangeLink  whitespace-nowrap">«&nbsp;type&nbsp;»</span>

      <span
        className={`hiddenTillHover absolute  ${sizeAndPosnClass} p-7 baseFont bg-white rounded-2xl shadowGray z-50`}
        //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
        style={{ top: 50 + "px" }}
      >
        <div className="pb-3  text-yellow-darkish font-bold">«&nbsp;Type&nbsp;»</div>
        <div>
          Dans le guide, un «&nbsp;type&nbsp;» correspond à une façon de regrouper les inquiétudes concernant les vaccins ou la
          vaccination en fonction de leur origine psychosociale commune.
        </div>
      </span>
    </span>
  );
};

export default TypesPopupFR;
