import React, { useState } from "react";
import { useMyContext } from "../context/Context";

const ReproductiveOverviewTheySayBI = () => {
  const { lang } = useMyContext();

  const [showFullTheySay, setShowFullTheySay] = useState(false);

  const theySayListItems1 = [
    {
      EN: "I’m really worried that there is no long-term data to tell us what the effects of this will be on me or my baby.",
      FR: "L’absence de données de longue date sur les effets qu’aura la vaccination sur moi ou mon bébé m’inquiète vraiment.",
    },
    {
      EN: "I’m at very low risk, I think. I'm being very careful. I'm working and staying at home. I’m limiting all my social contact. So there’s no need.",
      FR: "Je pense que mes risques sont très faibles. Je fais très attention. Je travaille et je reste à la maison. J’ai très peu de contacts avec les gens. Je n’ai donc pas besoin du vaccin.",
    },
    {
      EN: "I don't want to introduce unnecessary medications and chemicals into my body if I don't need to. Why would I do that?",
      FR: "Je ne veux pas introduire dans mon corps des médicaments ou des produits chimiques qui ne sont pas nécessaires. Pourquoi est-ce que je ferais ça?",
    },
  ];

  const theySayListItems2 = [
    { EN: "I already had COVID - do I still need the vaccine [or booster] while pregnant?", FR: "J’ai déjà eu la COVID. Est-ce que j’ai quand même besoin du vaccin [ou d’une dose de rappel] pendant ma grossesse?" },
    {
      EN: "There is no vaccine for babies, so why would I get it when I’m pregnant? Why would I get a vaccine that is not good for babies?",
      FR: "Il n’y a pas de vaccin pour les bébés. Pourquoi donc devrais-je me faire vacciner pendant ma grossesse? Pourquoi devrais-je accepter un vaccin qui n’est pas bon pour les bébés?",
    },
    {
      EN: "The vaccine is a big issue with my partner/family as well - [they] are very much against getting the vaccine at this stage or even later on especially when I'm breastfeeding.",
      FR: "Pour mon partenaire et/ou ma famille, le vaccin présente un gros problème. [Ils] sont vraiment contre le vaccin à ce stade-ci de ma grossesse ou même plus tard, surtout pendant l’allaitement.",
    },
    {
      EN: "I don't want it during the first trimester when all the baby’s organs are developing and when I’m at the highest risk of miscarriage.",
      FR: "Je ne veux pas de vaccin pendant mon premier trimestre de grossesse, au moment du développement des organes du bébé ou quand les risques de fausse couche sont grands.",
    },
    {
      EN: "I’m not having my partner get this experimental vaccine when she's carrying my child that we've worked so hard to conceive.",
      FR: "Je ne veux pas que ma partenaire ait ce vaccin expérimental pendant qu’elle porte mon enfant, cet enfant que nous avons eu tant de mal à concevoir.",
    },
    {
      EN: "I heard the vaccine knocks you out for a day or two.  This can’t happen.  I’m pregnant and I’ve got two other kids already. I am tired, and I don't have anyone to help me.  I can’t afford those two days!",
      FR: "J’ai entendu dire que le vaccin nous met à terre pendant un jour ou deux. Ça pourrait m’arriver. Je suis enceinte et j’ai deux autres enfants. Je suis fatiguée et je n’ai personne pour m’aider. Je ne peux pas me permettre de perdre deux jours!",
    },
  ];

  return (
    <>
      <h3 className="listTitleClass">{lang === "EN" ? "People with this hesitancy type say:" : "Ce que disent les personnes ayant ce type d’hésitation"}</h3>

      <ul className="ml-5  listClass2">
        {theySayListItems1.map((currItem, index) => {
          return (
            <li className="pb-3" key={index}>
              {currItem[lang]}
            </li>
          );
        })}
      </ul>
      {showFullTheySay && (
        <ul className="ml-5  listClass2">
          {theySayListItems2.map((currItem, index) => {
            return (
              <li className="pb-3" key={index}>
                {currItem[lang]}
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
        {lang === "EN"
          ? showFullTheySay
            ? "read less..."
            : "read more..."
          : showFullTheySay
          ? "En lire moins..."
          : "En lire plus"}
      </div>
    </>
  );
};

export default ReproductiveOverviewTheySayBI;
