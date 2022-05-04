import React from "react";
import { useMyContext } from "../context/Context";

const PrivacyPolicyEN = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <div className="italic" style={{ columnSpan: "all" }}>
        Last update: May 17, 2021
      </div>
      <div className="pt-4">
        Our team at the University of Calgary’s School of Public Policy operate the Vaccine Hesitancy Guide
        (http://www.vhguide.ca) (the &quot;Site&quot;). This page informs you of our policies regarding the collection,
        use and disclosure of Personal Information we receive from users of the Site.
      </div>
      <div className="pt-4">
        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the
        collection and use of information in accordance with this policy.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Information Collection And Use</div>
      <div>
        While using our Site, we may ask you to provide us with certain personally identifiable information that can be
        used to contact or identify you. Personally identifiable information may include, but is not limited to your
        name and contact information, including your email address (&quot;Personal Information&quot;).
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Log Data</div>
      <div>
        Like many site operators, we collect information that your browser sends whenever you visit our Site ( &quot;Log
        Data&quot;).
      </div>
      <div className="pt-4">
        This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP &quot;) address,
        browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time
        spent on those pages and other statistics.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">How we collect your information</div>
      <div>
        We collect Personal Information when a user signs up to our website and/or fills in a form to receive updates or
        contact us. We collect Log Data when your browser visits our site, including on mobile devices.
      </div>

      <div className="pb-1.5">
        <div className="subSubHeadingFont pb-3 pt-10">Why we collect your information</div>
        <div>We collect this information for the following purposes:</div>
        <div className="pt-5 ml-4">&bull; To provide and operate the services on our website;</div>
        <div className="pt-3 ml-4">
          &bull; To follow up with users who require more information on the guide, and/or who submit additional
          information to the guide;
        </div>
        <div className="pt-3 ml-4">
          &bull; To be able to contact our visitors / users with current information and news;
        </div>
        <div className="pt-3 ml-4">&bull; To provide, operate, and improve the services on our website; and</div>
        <div className="pt-3 ml-4">&bull; To comply with any applicable laws and regulations.</div>
      </div>

      <div className="subSubHeadingFont pb-3 pt-10">Cookies</div>
      <div>
        Our site does not use cookies to track your browsing behaviour or use of the guide. <br />
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">How we use, share, and disclose your information</div>
      <div>
        Our website is hosted on the Netlify platform. Netlify provides us with the online platform that allows us to
        deliver the guide to you. No personal information will be stored on Netlify’s servers. <br />
      </div>
      <div className="pt-4">
        Users may voluntarily submit Personal Information when prompted in Google Forms. This information is stored on
        secured servers behind a firewall and will not be shared with any additional third parties. <br />
      </div>
      <div className="subSubHeadingFont pb-3 pt-10 mb-6  dontBreak">
        Withdrawal of consent and/or personal information
      </div>
      <div>
        If you do not want us to retain your Personal Information after submission, please
        <button className="pl-1.5 orangeLink" onClick={() => setShowContactForm(true)}>
          contact us
        </button>
        . Additionally, if you would like to access, correct, amend, or delete any personal information we have about
        you, please contact us to do so.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Security</div>
      <div>
        The security of your Personal Information is important to us, but remember that no method of transmission over
        the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Information, we cannot guarantee its absolute security.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Changes To This Privacy Policy</div>
      <div>
        This Privacy Policy is effective as of 17 May 2021 and will remain in effect except with respect to any changes
        in its provisions in the future, which will be in effect immediately after being posted on this page.
      </div>
      <div className="pt-4">
        We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy
        periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this
        page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the
        modified Privacy Policy.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Contact Us</div>
      <span>
        <span className="pr-1.5">If you have any questions about this Privacy Policy, please</span>
        <button className="orangeLink" onClick={() => setShowContactForm(true)}>
          contact us.
        </button>
      </span>
    </>
  );
};

const PrivacyPolicyFR = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <div className="italic" style={{ columnSpan: "all" }}>
        Dernière mise à jour : le 17 mai 2021
      </div>
      <div className="pt-4">
        Le Guide sur l’hésitation vaccinale relève de notre équipe de l’école de politique publique de l’Université de
        Calgary (http://www.vhguide.ca) («&nbsp;site&nbsp;»). Cette page contient nos politiques en matière de collecte,
        d’utilisation et de divulgation des renseignements personnels que nous obtenons auprès des utilisateurs du site.
        Nous nous servons des renseignements personnels seulement pour fournir le site et l’améliorer.
      </div>
      <div className="pt-4">
        Nous nous servons des renseignements personnels seulement pour fournir le site et l’améliorer. En utilisant le
        site, vous acceptez la collecte et l’utilisation des renseignements conformément à la présente politique.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Collecte et utilisation des renseignements</div>
      <div>
        Quand vous utilisez ce site, il se peut que vous deviez nous fournir certains renseignements personnels qui
        pourront servir à communiquer avec vous ou à vous identifier. Ces renseignements personnels comprennent, sans
        s’y limiter, votre nom et vos coordonnées, dont votre adresse électronique («&nbsp;renseignements
        personnels&nbsp;»).
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Données de journalisation</div>
      <div>
        À l’instar de nombreux exploitants de sites, nous recueillons les renseignements que votre navigateur nous
        transmet lorsque vous visitez notre site («&nbsp;données de journalisation&nbsp;»).
      </div>
      <div className="pt-4">
        Ces données de journalisation peuvent comprendre des renseignements comme l’adresse IP de votre ordinateur
        («&nbsp;IP &nbsp;»), le type de navigateur, la version du navigateur, les pages de notre site que vous
        consultez, l’heure et la date de vos visites, le temps que vous passez sur chaque page et d’autres statistiques.
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">Comment nous recueillons vos renseignements</div>
      <div>
        Nous recueillons des renseignements personnels lorsqu’un utilisateur s’inscrit à notre site Web et/ou remplit un
        formulaire pour recevoir des mises à jour ou pour communiquer avec nous. Nous recueillons les données de
        journalisation quand votre navigateur visite notre site, y compris à partir d’appareils mobiles.
      </div>

      <div className="pb-1.5">
        <div className="subSubHeadingFont pb-3 pt-10">Pourquoi nous recueillons vos renseignements</div>
        <div>Nous recueillons ces renseignements pour les raisons suivantes :</div>
        <div className="pt-5 ml-4">&bull; pour fournir et exploiter les services de notre site Web;</div>
        <div className="pt-3 ml-4">
          &bull; pour faire les suivis auprès des utilisateurs qui ont besoin de plus amples renseignements sur le guide
          et/ou qui donnent des renseignements supplémentaires au guide;
        </div>
        <div className="pt-3 ml-4">
          &bull; pour pouvoir communiquer avec nos visiteurs ou utilisateurs afin de leur transmettre de l’information
          et des nouvelles à jour;
        </div>
        <div className="pt-3 ml-4">&bull; pour fournir, exploiter et améliorer les services de notre site Web; et</div>
        <div className="pt-3 ml-4">&bull; pour nous conformer aux lois et règlements applicables.</div>
      </div>

      <div className="subSubHeadingFont pb-3 pt-10">Témoins</div>
      <div>
        Notre site ne se sert pas de témoins pour suivre votre comportement de navigation ou votre utilisation du guide.{" "}
        <br />
      </div>
      <div className="subSubHeadingFont pb-3 pt-10">
        Comment nous utilisons, partageons et divulguons vos renseignements
      </div>
      <div>
        Notre site Web est hébergé sur la plateforme Netlify. Netlify fournit la plateforme en ligne qui nous permet de
        mettre le guide à votre disposition. Aucun renseignement personnel ne sera stocké sur les serveurs de Netlify..{" "}
        <br />
      </div>
      <div className="pt-4">
        Les utilisateurs peuvent fournir, volontairement, leurs renseignements personnels lorsque Google le demande dans
        ses formulaires. Ces renseignements sont stockés sur des serveurs sécurisés protégés par un pare-feu et ils ne
        seront pas partagés avec d’autres tiers.
        <br />
      </div>
      <div className="subSubHeadingFont pb-3 pt-10 mb-6  dontBreak">
        Retrait du consentement et/ou des renseignements personnels
      </div>
      <div>
        Si vous ne voulez pas que nous conservions vos renseignements personnels après les avoir fournis, veuillez
        <button className="pl-1.5 orangeLink" onClick={() => setShowContactForm(true)}>
          communiquer avec nous
        </button>
        . Par ailleurs, si vous voulez avoir accès aux renseignements personnels que nous avons à votre sujet, les
        corriger, les modifier ou les supprimer, veuillez communiquer avec nous.
      </div>

      <div className="subSubHeadingFont pb-3 pt-10">Sécurité</div>
      <div>
        La sécurité de vos renseignements personnels nous importe, mais n’oubliez pas qu’aucune méthode de transmission
        sur Internet ni aucune méthode de stockage électronique n’est sécuritaire à 100 pour cent. Même si nous nous
        efforçons d’employer des moyens commercialement acceptables pour protéger vos renseignements personnels, nous ne
        pouvons pas garantir leur sécurité absolue.
      </div>

      <div className="subSubHeadingFont pb-3 pt-10">Modification de la présente politique de confidentialité</div>
      <div>
        La présente politique de confidentialité est entrée en vigueur le 17 mai 2021 et demeurera en vigueur, sauf en
        ce qui a trait aux modifications susceptibles d’être apportées à ses modalités, dans lequel cas les
        modifications en question entreront en vigueur immédiatement après avoir été publiées sur cette page.
      </div>
      <div className="pt-4">
        Nous nous réservons le droit de mettre à jour ou de modifier notre politique de confidentialité en tout
        temps.Vous devriez donc vérifier notre politique de confidentialité périodiquement.Si vous continuez d’utiliser
        ce service après la publication de modifications à la politique de confidentialité figurant sur cette page, cela
        signifie que vous acceptez les modifications et que vous vous conformez à la politique de confidentialité
        modifiée.
      </div>

      <div className="subSubHeadingFont pb-3 pt-10">Contactez-nous </div>
      <span>
        <span className="pr-1.5">Si vous avez des questions sur cette politique de confidentialité, veuillez</span>
        <button className="orangeLink" onClick={() => setShowContactForm(true)}>
          communiquer avec nous.
        </button>
      </span>
    </>
  );
};

const CopyrightNoticeEN = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <div>
        This website and its content are protected under Canadian copyright law. Except as otherwise provided for under
        the copyright law of Canada, this website and its content may not be copied, distributed, published, downloaded
        or otherwise stored in a retrieval system, transmitted or converted, in any form or by any means (electronic or
        otherwise) without the prior written permission of the copyright owner.
      </div>
      <div className="mt-3">
        <span>For further information please</span>{" "}
        <button className="orangeLink" onClick={() => setShowContactForm(true)}>
          contact us
        </button>
        .
      </div>
    </>
  );
};

const CopyrightNoticeFR = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <div>
        Ce site Web et son contenu sont protégés en vertu des lois canadiennes sur le droit d’auteur. À moins
        d’indication contraire dans les lois canadiennes sur le droit d’auteur, ce site Web et son contenu ne peuvent
        être copiés, distribués, publiés, téléchargés ou stockés de toute manière que ce soit dans un système
        d’extraction, transmis ou convertis de toute manière ou par tout moyen que ce soit (électronique ou autre) sans
        le consentement écrit préalable du détenteur du droit d’auteur.
      </div>
      <div className="mt-3">
        <span>Pour de plus amples renseignements, veuillez</span>{" "}
        <button className="orangeLink" onClick={() => setShowContactForm(true)}>
          communiquer avec nous
        </button>
        .
      </div>
    </>
  );
};

const termsContent = [
  {
    subheading: { EN: "Privacy Policy", FR: "Politique de confidentialité" },
    // The body section below needs to be in a separate react component so useMyContext() can be run, to bring in a context var.
    // See Rules of React
    body: { EN: <PrivacyPolicyEN />, FR: <PrivacyPolicyFR /> },
  },

  {
    subheading: { EN: "Copyright Notice", FR: "Avis de droit d’auteur" },
    body: { EN: <CopyrightNoticeEN />, FR: <CopyrightNoticeFR /> },
  },

  {
    subheading: { EN: "Content Disclaimer", FR: "Avertissement au sujet du contenu" },
    body: {
      EN: (
        <>
          <div>
            All of the information on this website is provided for informational purposes only. It is not endorsed, nor
            does it represent the opinions of any professional medical association or organization. Reliance on any
            information appearing on, or provided in relation to the Vaccine Hesitancy Guide, is solely at your own
            risk. Neither the Guide’s authors, nor the University of Calgary, nor any of its affiliates assume any
            responsibility or liability for any damages, claims, costs or obligations arising from the use of the Guide
            or any other website to which the Guide is linked. We assume no responsibility for the content provided by
            any third-party websites linked to, or referenced in, the Guide. Their use is at your own risk and subject
            to the terms and conditions of use for such sites. The content of the Guide is for personal and
            non-commercial use and reference only.
          </div>
        </>
      ),
      FR: (
        <>
          <div>
            Toute l’information contenue sur ce site Web est fournie à titre d’information seulement. Elle n’est pas
            appuyée par une association ou une organisation médicale professionnelle et ne représente pas les opinions
            d’une telle association ou organisation. L’utilisation de toute information figurant dans le Guide sur
            l’hésitation vaccinale ou fournie dans le cadre de ce guide se fait entièrement à vos risques. Les auteurs
            du guide, l’Université de Calgary et leurs affiliés n’assument aucune responsabilité quant aux dommages,
            réclamations, coûts ou obligations découlant de l’utilisation du guide ou de tout autre site Web auquel le
            guide est relié. Nous n’assumons aucune responsabilité quant au consentement fourni par le site Web d’un
            tiers auquel le guide est relié ou dont il fait mention. Leur utilisation se fait à vos risques et est
            assujettie aux conditions et modalités d’utilisation des sites en question. Le contenu du guide doit être
            utilisé à des fins personnelles et non commerciales, et seulement à titre de référence.
          </div>
        </>
      ),
    },
  },

  {
    subheading: { EN: "Land Acknowledgement", FR: "Reconnaissance territoriale" },
    body: {
      EN: (
        <>
          <div>
            The VH Guide was developed in Calgary, Alberta, Canada. The authors acknowledge that this work was done in
            Treaty 7 territory—the ancestral and traditional territory of the Blackfoot Confederacy: Kainai, Piikani and
            Siksika as well as the Tsuu T’ina First Nation and Stoney Nakoda First Nation. We acknowledge the many First
            Nations, Métis and Inuit who have lived in these lands for generations. We are grateful for the traditional
            Knowledge Keepers and Elders who are still with us today and those who have gone before us. We recognize the
            land as an act of reconciliation and gratitude to those whose territory we reside on or are visiting.
          </div>
        </>
      ),
      FR: (
        <>
          <div>
            Le Guide sur l’hésitation vaccinale a été élaboré à Calgary, en Alberta, au Canada. Les auteurs
            reconnaissent que ce travail a été réalisé dans le territoire ancestral et traditionnel de la Confédération
            des Pieds-Noirs du Traité no 7 : Kainai, Piikani et Siksika ainsi que la Première Nation Tsuu T’ina et la
            Première Nation Stoney Nakoda. Nous reconnaissons les nombreuses Premières Nations, les Métis et les Inuits
            qui ont vécu sur ces terres ou y vivent depuis des générations. Nous sommes reconnaissants envers les
            gardiens du savoir traditionnel et les aînés qui sont toujours parmi nous de nos jours et ceux qui ne le
            sont plus. Nous reconnaissons la terre comme acte de réconciliation et de gratitude envers ceux et celles
            dont nous occupons et visitons le territoire.
          </div>
        </>
      ),
    },
  },
];

export default termsContent;
