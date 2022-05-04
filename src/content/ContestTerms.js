import React from "react";
import { Link } from "gatsby";
import ReactModal from "react-modal";
import { animateScroll as scroll } from "react-scroll";
import { IoClose } from "react-icons/io5";

import { useMyContext } from "../context/Context";

const ContestTerms = props => {
  const { showContestTerms, setShowContestTerms } = props;
  const { setFixedBackdrop, log } = useMyContext();

  if (typeof window !== `undefined`) {
    scroll.scrollToTop({ duration: 600 }); // scroll animation time in ms
  }

  const closeModal = () => {
    log && console.log("ContestTerms.js closeModal runs. Setting showContestTerms and fixedBackdrop =false");
    setShowContestTerms(false);
    setFixedBackdrop(false);
  };

  return (
    <ReactModal
      isOpen={showContestTerms}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
      overlayClassName="absolute w-full h-580 top-0 left-0 z-40 bg-black bg-opacity-50"
      // overlay is the modal's parent div, created here. Its parent is the viewport.
      className="relative  pl-6 pt-16 pb-10 pr-6 text-blue-black bg-white  border border-gray-mid  
              rounded-2xl shadow-2xl  left-1/2 transform -translate-x-44 mxs:-translate-x-55 sm:-translate-x-70
              top-40  w-88 mxs:w-110 sm:w-140  focus:outline-none  bg-opacity-100"
    >
      <button className="px-2.5 py-3 absolute top-0 right-0  cursor-pointer" onClick={() => closeModal()}>
        <IoClose size={25} />
      </button>

      <div className="flex flex-col">
        <div className="pl-7 pb-5  titleFont popupTitleClass">Evaluation Incentive Terms and Conditions</div>

        <div className="pl-7 w-full ">
          <ul>
            <li className="listClassPopup">Entrants must be 18 years or older.</li>
            <li className="listClassPopup">Only one entry is allowed per individual.</li>
            <li className="listClassPopup">
              Entrants must be a currently-practicing allied health professional (e.g., physician, nurse, medical office
              assistant, social worker, physiotherapist, pharmacist, midwife, etc.).
            </li>
            <li className="listClassPopup">
              Entrants must provide contact information for their entry to be valid. This includes their first name,
              last name, e-mail address. The email address will be used to notify them if they are a winner.
            </li>
            <li className="listClassPopup">
              Entrants must provide verification information for their entry to be valid. This includes the name of the
              professional organization with which they are registered and of which they are a member in good standing.
              This information will be used to verify their eligibility.
            </li>
            <li className="listClassPopup">
              Entrants&apos; contact and verification information will not be shared or distributed to any third parties
              for any reason. These details will remain confidential and only be used by the Team at VHGuide.ca (the
              Promoters) to contact winning parties and verify eligibility.
            </li>

            <li className="listClassPopup">
              Entrants who provide false or invalid contact information or unverifiable professional affiliations will
              be disqualified.
            </li>

            <li className="listClassPopup">
              Winning prize funds will be provided in Canadian dollars (CAD), in the form of up to 10 $100 pre-paid VISA
              gift cards. VISA gift cards are subject to VISA&apos;s standard pre-paid gift card&#8200;
              <a
                href="https://www.visa.ca/en_CA/pay-with-visa/cards/gift-cards.html"
                className="underline cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
              >
                terms and conditions.
              </a>
            </li>

            <li className="listClassPopup">
              Up to 10 winners will be selected from the first 100 valid and verified entries received.
            </li>

            <li className="listClassPopup">
              For every 10 entries received, one winner will be drawn at random from all valid and verified entries.
              Winners will be notified that they have been selected by the e-mail address they provided. No other
              efforts will be made to contact the winner(s).
            </li>

            <li className="listClassPopup">
              Winner(s) have 5 business days from receipt of notification to respond to the Promoters. If the winner(s)
              cannot be contacted, do not respond, or are unable to comply with these Terms and Conditions, the
              Promoters reserve the right to offer the prize to the next eligible entrant drawn at random.
            </li>

            <li className="listClassPopup">
              Prize winnings are non-transferrable, not redeemable for cash, and winners cannot request cash in exchange
              for prizes.
            </li>

            <li className="listClassPopup">
              The Promoters are not responsible for lost entries, prize delays, data loss, or data corruption.
            </li>

            <li className="listClassPopup">
              The Promoters reserve the right to amend or alter the terms of this competition and disqualify entrants
              not compliant with the contest&apos;s Terms and Conditions.
            </li>

            <li className="listClassPopup">
              The use of any part of VHGuide.ca, including the survey and this competition are subject to our
              site&apos;s standard&#8200;
              <Link to="/terms" className="underline cursor-pointer" onClick={() => closeModal()}>
                Privacy Policy
              </Link>
              .
            </li>

            <li className="listClassPopup">
              Prizes subject to availability and prize suppliers&apos; terms and conditions.
            </li>
          </ul>
        </div>
      </div>
    </ReactModal>
  );
};

export default ContestTerms;
