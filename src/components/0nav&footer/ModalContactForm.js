import React from "react";
import ReactModal from "react-modal";
import { animateScroll } from "react-scroll";
import { VscClose } from "react-icons/vsc";

import { useMyContext } from "../../context/Context";

const ModalContactForm = () => {
  const { showContactForm, setShowContactForm, setFixedBackdrop, winWidth, lang } = useMyContext();

  const formSource =
    lang === "EN"
      ? "https://docs.google.com/forms/d/e/1FAIpQLSfTnkQFzRpPT4c7lnndoZeIrsn1JnMxP9zc1G6MrZZf_QoWpQ/viewform?embedded=true"
      : "https://docs.google.com/forms/d/e/1FAIpQLSc9MLJbnkLGrSNUh-HiJMJhyMydDdcn1QFf7MDOyKznEuLwww/viewform?embedded=true";
  const widthModal = winWidth < 720 ? 340 : 510;
  const heightModal = winWidth < 720 ? 900 : 840;

  if (typeof window !== `undefined`) {
    animateScroll.scrollToTop({ duration: 600 }); // scroll animation time in ms
  }

  const closeModal = () => {
    setShowContactForm(false);
    setFixedBackdrop(false);
  };

  return (
    <ReactModal
      isOpen={showContactForm}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
      overlayClassName="absolute w-full h-full top-0 left-0 z-40"
      // overlay is the modal's parent div, created here. Its parent is the viewport.
      className="pl-6 pt-16 pb-10 pr-6 text-blue-main bg-gray-light  border border-gray-mid  
                rounded-2xl shadow-2xl relative left-1/2 transform -translate-x-50 sm:-translate-x-70
                top-40  w-100 sm:w-140  focus:outline-none"
    >
      <button className="absolute top-6 right-6 cursor-pointer" onClick={() => closeModal()}>
        <VscClose size="40" />
      </button>

      <iframe
        title="Embedded Google Form for contact details"
        src={formSource}
        width={widthModal}
        height={heightModal}
        frameBorder="0"
        marginHeight="10"
        marginWidth="10"
      >
        Loading…
      </iframe>
    </ReactModal>
  );
};

export default ModalContactForm;
