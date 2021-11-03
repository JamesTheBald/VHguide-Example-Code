import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";
import { scroller } from "react-scroll";

import { useMyContext } from "../context/Context";
import CoverageGridList from "../components/3aboutEtc/CoverageGridList";
import CoverageWebinars from "../components/3aboutEtc/CoverageWebinars";

// const panelTitleClass = "pb-6  font-semibold text-blue-main text-20 sm:text-25 tracking-0.4 sm:tracking-0.5";
const listClass = "ml-6 sm:ml-12 list-disc list-outside";

const TypesPopup = props => {
  const { text } = props;
  return (
    // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
    <span className="hoverRevealTrigger">
      <span className="orangeLink">&lsquo;{text}&rsquo;</span>

      <div
        className="hiddenTillHover absolute  sm:left-10 md:left-1/4  z-50  w-full sm:w-3/4 md:w-120
               p-7  baseFont bg-white rounded-2xl shadowGray"
        //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
        style={{ bottom: "100%" }}
      >
        <div className="pb-3  text-yellow-darkish font-bold">&lsquo;Type&rsquo;</div>
        <div>
          In this guide, a &lsquo;type&rsquo; is a way of grouping together concerns about vaccines or vaccination that
          share a common psycho-social origin.
        </div>
      </div>
    </span>
  );
};

const MotivationalInterviewing = () => {
  return (
    <a
      className="ml-1.5 orangeUnderline"
      href="https://www.canada.ca/content/dam/phac-aspc/documents/services/reports-publications/canada-communicable-disease-report-ccdr/monthly-issue/2020-46/issue-4-april-2-2020/ccdrv46i04a06-eng.pdf"
      rel="noopener noreferrer"
      target="_blank"
    >
      Motivational Interviewing <FiExternalLink className="inline" size={18} />
    </a>
  );
};

const AboutContentWhatIsThis = () => {
  const { winWidth, setLocn, log } = useMyContext();

  return (
    <article>
      <h2 className="panelTitleClass">What is this guide?</h2>
      <div className="pb-3">
        The Guide presents advice, scripts, and resources to help navigate conversations about COVID-19 vaccines with
        hesitant patients. These have been developed with clinicians from across Canada. In the Guide you&apos;ll
        find&#58;
      </div>
      <ul className={`${listClass} relative`}>
        <li>
          <Link to="/pearls" className="orangeUnderline">
            Clinician-to-clinician advice
          </Link>
          <span className="pl-1.5">on how to counsel patients about their </span>
          <TypesPopup text={"type"} />
          <span>
            . Below you’ll find examples of dialogue from other clinicians who have addressed this type of hesitancy.
          </span>
        </li>
        <li>
          <span>Examples of approaches that work for </span>
          <Link
            to="/details/overview"
            className="orangeUnderline"
            onClick={() => {
              setLocn({ branch: 1, topic: 0, subtopic: 0, showSubtopic: false });
            }}
          >
            undifferentiated vaccine hesitancy
          </Link>
          <span>; and</span>
        </li>
        <li className="relative">
          <span>A</span>
          <Link to="/explore" className="p-1.5 orangeUnderline">
            flowsheet
          </Link>
          <span>for identifying, differentiating, and addressing common </span>
          <TypesPopup text={"types"} />
          <span> of vaccine hesitancy</span>
        </li>
      </ul>
      <div className="pb-3">
        Inside the Guide you will find practical scripts and resources gathered from fellow clinicians that are adapted
        to each &lsquo;type&rsquo; of vaccine hesitancy.
      </div>
      <div className="pb-3">
        <span>The advice, general principles, and scripts in the guide are grounded in the techniques of</span>
        <MotivationalInterviewing />
        <span>. Motivational Interviewing encourages both the clinician and the patient to</span>
        <strong className="px-1.5">identify positive motivations for vaccination.</strong>
        <span>This happens in the course of </span>
        <button
          className="orangeUnderline"
          onClick={() => {
            log && console.log("AboutContentWhatIsThis(): scrolling to eaaseSteps panel.");
            scroller.scrollTo("eaaseSteps", {
              containerID: "AboutPanelsContainer",
              duration: 1000,
              smooth: true,
              offset: winWidth < 1024 ? -300 : winWidth < 1920 ? -300 : -175,
            });
          }}
        >
          open, affirming, conversations
        </button>
        <span> about options rather than closed, judgmental, pronouncements of expertise.</span>
      </div>
    </article>
  );
};

const AboutContentHowUse = () => {
  const { setLocn, setNoneSelected, setShowContactForm } = useMyContext();

  return (
    <article>
      <h2 className="panelTitleClass">How do I use the guide?</h2>

      <div className="pb-3">
        The Guide can be used either during an appointment with a vaccine hesitant patient, or outside of patient
        contact hours. As the Guide includes potentially sensitive scripts, you will want to familiarize yourself with
        its content and organization prior to using it synchronously with patients.
      </div>
      <div className="pb-3 relative">
        <span>The Guide is built around examples of typical presentations of vaccine hesitancy. These </span>
        <TypesPopup text={"types"} />
        <span> vaccine hesitancy can be browsed through an interactive </span>
        <Link
          to="/explore"
          className="orangeUnderline"
          onClick={() => {
            setLocn({ branch: 0, topic: 0, subtopic: 0, showSubtopic: false });
            setNoneSelected(true);
          }}
        >
          flowsheet
        </Link>
        . The types may also incorporate further sub-types, each of which describes a more specific presentation of
        vaccine hesitancy. Once you have worked through the menus and identified the &lsquo;type&rsquo; that most
        closely resembles your patient&apos;s hesitancy, you will have access to three tabs of information:
      </div>
      <ul className={listClass}>
        <li>
          An &lsquo;Overview&rsquo; tab which includes common phrases or concerns related to this type of hesitancy, as
          well as some options to consider during consultations;
        </li>
        <li>An &lsquo;Advice&rsquo; tab which provides successful scripts as used by fellow clinicians; and </li>
        <li>A &lsquo;Resources&rsquo; tab which provides links to external sources of relevant information.</li>
      </ul>
      <span>
        The advice, scripts, and resources in the Guide are being updated in response to developments in the COVID-19
        pandemic, vaccine rollout, and user feedback. If you have any comments or suggestions,
        <button className="pl-1.5 orangeUnderline" onClick={() => setShowContactForm(true)}>
          contact us.
        </button>
      </span>
    </article>
  );
};

const AboutContentEaaseSteps = () => {
  return (
    <article>
      <h2 className="panelTitleClass">EAASE Steps</h2>

      <div>
        <span>Using the principles of</span>
        <MotivationalInterviewing />
        <span>
          , our team developed the &lsquo;EAASE&rsquo; steps to help guide conversations with vaccine hesitant patients:
          Engage, Affirm, Ask then Share, and Evoke. We call them steps, but you don&apos;t need to follow them as a
          sequence. You can begin and end on any step.
        </span>
      </div>
      <div className="pt-3">
        The EAASE approach improves conversations by focusing on the trust relationship between you and your patient.
        Rather than focusing on getting your patient to say &lsquo;yes&rsquo; to vaccination, the first aim of an EAASE
        conversation is to build an alliance and set a foundation for vaccine confidence.
      </div>
      <br />
      <ul className={listClass}>
        <li>
          <em>
            <strong>Engage</strong> with open questions:
          </em>
          {/* <span className="pl-1.5"></span> */}
          <a
            className="px-1.5 orangeUnderline"
            href="https://tools.cep.health/wp-content/uploads/2020/12/CEP_COVID-Framework_2020.12.18.pdf?utm_source=link.cep.health&utm_medium=urlshortener&utm_campaign=covid-vaccine"
            rel="noopener noreferrer"
            target="_blank"
          >
            Actively start the conversation <FiExternalLink className="inline" size={18} />
          </a>
          about vaccination with your patients. Asking open questions can help demonstrate your interest, and create a
          safe space for them to share real concerns.
        </li>
        <li>
          <span className="pr-1.5 italic">
            <strong>Affirm</strong> and reflectively listen:
          </span>
          <span>Affirm your patient’s worldview, and situate yourself as an ally. You can do this by:</span>
          <ul className={`pt-3 ${listClass}`}>
            <li>
              Emphasizing your patient&apos;s autonomy &mdash; they will be a good person regardless of the decision
              they make.
            </li>
            <li>Offering to work together as equals to understand available vaccine information.</li>
            <li>Emphasizing the importance of individual decisions for protection of the broader community.</li>
            <li>
              Ensuring they feel heard. A patient who feels misheard and mis-interpreted is unlikely to trust you.
              Reflective listening is important in overcoming gaps in our understandings of others.
            </li>
          </ul>
        </li>
        <li>
          <span className="pr-1.5 italic">
            <strong>Ask</strong> for permission, then <strong>Share</strong> information:
          </span>
          <span>
            Check that you understand where your patient is coming from, then ask permission to share your knowledge and
            perspectives. This places the two of you on the same team, with a shared goal of protecting them and&#47;or
            their community.
          </span>
        </li>
        <li>
          <span className="pr-1.5 italic">
            <strong>Evoke</strong>
          </span>
          <span>and evaluate options:</span>
          <ul className={`pt-3 ${listClass}`}>
            <li>
              Encourage patients to imagine different outcomes or scenarios based on their choice to either vaccinate or
              remain unvaccinated.
            </li>
            <li>Explore desired positive futures, rather than unwanted negative outcomes.</li>
            <li>Examine vaccination options together to achieve, or avoid, these imagined scenarios.</li>
          </ul>
        </li>
      </ul>
      <div>
        <div>Across the rest of the Guide we use the EAASE steps to organize advice for each type of hesitancy.</div>
        {/* Make sure the breakpoints for the image below line up with those in the columnStyle class in in AboutPanels.js*/}
        <div className="m-3 mx-auto sm:float-right md:float-none  w-11/12 mxs:w-10/12 sm:w-2/3 md:w-5/6 lg:w-3/4 xl:w-full">
          <StaticImage
            className="pt-4"
            src={"../images/screenshots/Overview-Undifferentiated-Hesitancy.png"}
            alt="Screenshot of Undifferentiated Hesitancy overview page"
          />
        </div>
        <br />
        <div>
          For tips from fellow clinicians on how to conduct these conversations, head over to the
          <Link to="/pearls" className="px-1.5 orangeUnderline">
            Clinical Pearls
          </Link>
          page.
        </div>
        <br />
        <div>
          Ironically, EAASE conversations can often be difficult to have. Remember: the goal is to support your
          patient&apos;s decision-making, rather than convincing them to get a vaccine.
        </div>
      </div>
    </article>
  );
};

const AboutContentMediaCoverage = () => {
  // console.log("aboutContent.js AboutContentMediaCoverage() coverage=", coverage);

  return (
    <article>
      <h2 className="pb-8  titleFont titleMedium text-blue-main">Media Coverage</h2>
      <h3 className="panelTitleClass">Publications</h3>
      <CoverageGridList type="publications" className="pb-20" />

      <h3 className="panelTitleClass">News Media</h3>
      <CoverageGridList type="newsmedia" className="pb-20" />

      <h3 className="panelTitleClass">Webinars</h3>
      <CoverageWebinars className="" />
    </article>
  );
};

export const aboutContent = [
  {
    title: "What is the VH Guide?",
    panelID: "whatIs",
    content: <AboutContentWhatIsThis />,
  },

  {
    title: "How do I use the VH Guide?",
    panelID: "howUse",
    content: <AboutContentHowUse />,
  },

  {
    title: "The EAASE Steps Explained",
    panelID: "eaaseSteps",
    content: <AboutContentEaaseSteps />,
  },
  {
    title: "Media Coverage",
    panelID: "coverage",
    content: <AboutContentMediaCoverage />,
  },
];
