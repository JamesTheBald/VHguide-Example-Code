import React from "react";

const log1 = false;
let w = 720;

if (typeof window !== `undefined`) {
  w = window.innerWidth;
  log1 && console.log("eaaseStepNamesBI.js w=", w);
}

const eaaseStepNamesBI = {
  name: {
    engage: { EN: "Engage", FR: "Entamez" },
    affirm: { EN: "Affirm", FR: "Affirmez" },
    ask: { EN: w < 600 ? <>Ask/&#8203;Share</> : "Ask & Share", FR: <>Demandez/&#8203;Faites part</> },
    evoke: { EN: "Evoke", FR: "Evoquez" },
  },

  // Demandez la permission puis faites part d’information

  subname: {
    engage: { EN: "with open questions", FR: "avec des questions ouvertes" },
    affirm: { EN: "and reflectively listen", FR: "et écoutez d’un air pensif" },
    ask: { EN: "for permission then share information", FR: "la permission puis faites part d’information" },
    evoke: { EN: "and evaluate options", FR: "et évaluez les options" },
  },
};

export default eaaseStepNamesBI;
