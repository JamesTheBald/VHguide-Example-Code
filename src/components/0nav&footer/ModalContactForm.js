import React from "react";
import ReactModal from "react-modal";
import { animateScroll as scroll } from "react-scroll";

import { VscClose } from "react-icons/vsc";

function ModalContactForm(props) {
  const { showContactForm, onHide, width, height, formSource } = props;

  if (typeof window !== `undefined`) {
    scroll.scrollToTop({ duration: 600 }); // scroll animation time in ms
  }

  return (
    <ReactModal
      isOpen={showContactForm}
      onRequestClose={onHide}
      ariaHideApp={false}
      overlayClassName="absolute left-1/2 top-1/4 z-40"
      className="pl-6 pt-16 pr-6 text-blue-main bg-white rounded-xl shadow-2xl relative -left-1/2 -top-24 focus:outline-none"
    >
      <button className="absolute top-6 right-8 cursor-pointer" onClick={onHide}>
        <VscClose size="40" />  
      </button>

      <iframe
        title="Embedded Google Form for contact details"
        src={formSource}
        width={width}
        height={height}
        frameBorder="0"
        marginHeight="10"
        marginWidth="10"
      >
        Loading…
      </iframe>
    </ReactModal>
  );
}

export default ModalContactForm;
