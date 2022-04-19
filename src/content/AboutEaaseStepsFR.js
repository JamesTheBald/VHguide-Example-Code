import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";

const AboutEaaseStepsFR = props => {
  const { MotivInterviewBI, textColumnsStyle } = props;

  return (
    <article>
      <h2 id="eaaseSteps" className="aboutTitleClass">
        Explication des étapes « EAASE »
      </h2>

      <div style={textColumnsStyle}>
        <div>
          <span>S’appuyant sur les principes de</span>
          <MotivInterviewBI />
          <span>
            , notre équipe a conçu les étapes <span className="whitespace-nowrap">« EAASE »</span> afin d’aider à
            orienter les conversations avec les patients qui hésitent à se faire vacciner : <b>e</b>ntamer, <b>a</b>
            ffirmer, demander la permission puis faire part d’information (<b>a</b>sk then <b>s</b>hare) et <b>é</b>
            voquer. Même si nous les appelons « étapes », vous n’êtes pas obligé d’en respecter l’ordre. Vous pouvez
            commencer et terminer par n’importe quelle étape.
          </span>
        </div>
        <div className="pt-3">
          L’approche EAASE permet d’améliorer les conversations en établissant un climat de confiance entre vous et
          votre patient. Au lieu de miser sur l’obtention d’un <span className="whitespace-nowrap">« oui »</span> à la
          vaccination par votre patient, l’objectif premier d’une conversation EAASE consiste à établir une alliance et
          à favoriser la confiance en la vaccination.
        </div>
        <br />
        <ul className="listClass">
          <li>
            <b>Entamez</b> a conversation avec des questions ouvertes –{" "}
            <a
              className="orangeUnderline"
              href="https://tools.cep.health/wp-content/uploads/2020/12/CEP_COVID-Framework_2020.12.18.pdf?utm_source=link.cep.health&utm_medium=urlshortener&utm_campaign=covid-vaccine"
              rel="noopener noreferrer"
              target="_blank"
            >
              Entamez une conversation <FiExternalLink className="inline" size={18} />
            </a>{" "}
            sur la vaccination avec vos patients. Le fait de poser des questions ouvertes peut montrer que vous vous
            intéressez à la situation du patient, en plus de créer un lieu sûr et propice au partage des vraies
            inquiétudes.
          </li>
          <li>
            <b>Affirmez</b> et écoutez d’un air pensif – Affirmez la façon de voir les choses de votre patient, et
            positionnez-vous en tant qu’allié. Vous pouvez faire ce qui suit pour y parvenir :
            <ul className="pt-3 listClass">
              <li>
                mettez l’accent sur l’autonomie de votre patient — peu importe la décision qu’il prendra, il sera une
                bonne personne;
              </li>
              <li>
                offrez-lui de travailler avec lui en tant qu’égal pour comprendre l’information qui existe déjà au sujet
                des vaccins;
              </li>
              <li>
                mettez l’accent sur l’importance des décisions individuelles pour protéger la communauté dans son
                ensemble; Emphasizing the importance of individual decisions for protection of the broader community.
              </li>
              <li>
                faites en sorte que votre patient sache que vous l’écoutez bien. Le patient qui se sent mal écouté ou
                incompris ne vous fera probablement pas confiance. L’écoute d’un air pensif joue un grand rôle quand
                vient le temps d’essayer de mieux comprendre les autres.
              </li>
            </ul>
          </li>
          <li>
            <b>Demandez-lui (Ask)</b> la permission, puis <b>faites-lui part (Share)</b> de l’information – Validez que
            vous comprenez bien le point de vue de votre patient, puis demandez-lui la permission de lui faire part de
            vos connaissances et perspectives. Ainsi, vous vous trouverez à faire partie de la même équipe, ayant le
            même objectif, soit celui de vous protéger mutuellement et/ou de protéger la communauté.
          </li>
          <li>
            <b>Évoquez</b> divers scénarios puis évaluez les options –
            <ul className="pt-3 listClass">
              <li>
                Incitez les patients à imaginer divers résultats ou scénarios en fonction de leur choix consistant soit
                à se faire vacciner, soit à ne pas se faire vacciner.
              </li>
              <li>Penchez-vous sur les côtés positifs désirés et non pas sur les côtés négatifs indésirables. </li>
              <li>
                Ensemble, examinez les options de vaccination pour aboutir aux scénarios imaginés ou pour les éviter.
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <div>
            Nous utilisons les étapes EAASE dans le reste du guide pour organiser les conseils liés à chaque type
            d’hésitation.
          </div>
          <div className="m-3 mx-auto sm:float-right md:float-none  w-11/12 mxs:w-10/12 sm:w-2/3 md:w-5/6 lg:w-3/4 xl:w-full">
            <StaticImage
              className="pt-4"
              src={"../assets/screenshots/About the Guide EAASE Example Image.png"}

              // REPLACE THIS WITH A SCREENSHOT OF THE FRENCH PAGE. THEN REMOVE THE ENGLISH ALT TEXT BELOW
              
              alt="Example advice page / Exemple de page de conseils"
              loading="eager"
              quality={90}
              layout="constrained"
            />
          </div>
          <br />
          <div>
            La page des
            <Link to="/pearls" className="px-1.5 orangeUnderline">
              Perles cliniques
            </Link>
            contient des trucs d’autres cliniciens sur la façon de diriger ces conversations.
          </div>
          <br />
          <div>
            Sachez que les conversations EAASE sont parfois des conversations difficiles. N’oubliez pas : l’objectif
            consiste à aider votre patient à prendre une décision et non pas à le convaincre de se faire vacciner.
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutEaaseStepsFR;
