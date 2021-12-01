import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";

const AboutEaaseSteps = props => {
  const { MotivationalInterviewing, textColumnsStyle } = props;

  return (
    <article>
      <h2 id="eaaseSteps" className="aboutTitleClass">
        The EAASE Steps Explained
      </h2>

      <div style={textColumnsStyle}>
        <div>
          <span>Using the principles of</span>
          <MotivationalInterviewing />
          <span>
            , our team developed the &lsquo;EAASE&rsquo; steps to help guide conversations with vaccine hesitant
            patients: Engage, Affirm, Ask then Share, and Evoke. We call them steps, but you don&apos;t need to follow
            them as a sequence. You can begin and end on any step.
          </span>
        </div>
        <div className="pt-3">
          The EAASE approach improves conversations by focusing on the trust relationship between you and your patient.
          Rather than focusing on getting your patient to say &lsquo;yes&rsquo; to vaccination, the first aim of an
          EAASE conversation is to build an alliance and set a foundation for vaccine confidence.
        </div>
        <br />
        <ul className="listClass">
          <li>
            <strong>Engage</strong> with open questions:
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
            <span className="pr-1.5">
              <strong>Affirm</strong> and reflectively listen:
            </span>
            <span>Affirm your patient’s worldview, and situate yourself as an ally. You can do this by:</span>
            <ul className="pt-3 listClass">
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
            <span className="pr-1.5">
              <strong>Ask</strong> for permission, then <strong>Share</strong> information:
            </span>
            <span>
              Check that you understand where your patient is coming from, then ask permission to share your knowledge
              and perspectives. This places the two of you on the same team, with a shared goal of protecting them
              and&#47;or their community.
            </span>
          </li>
          <li>
            <span className="pr-1.5">
              <strong>Evoke</strong>
            </span>
            <span>and evaluate options:</span>
            <ul className="pt-3 listClass">
              <li>
                Encourage patients to imagine different outcomes or scenarios based on their choice to either vaccinate
                or remain unvaccinated.
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
              src={"../assets/screenshots/Overview-Undifferentiated-Hesitancy.png"}
              alt="Screenshot of Undifferentiated Hesitancy overview page"
              loading="eager"
              layout="constrained"
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
      </div>
    </article>
  );
};

export default AboutEaaseSteps;
