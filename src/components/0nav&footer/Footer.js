import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { useMyContext } from "../../context/Context";
import ModalContactForm from "./ModalContactForm";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  const { showContactForm, winWidth, winHeight, widthAdjRatio, setNavBarOpen, setShowContactForm } = useMyContext();

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const rightGap = 100 * widthAdjRatio;
  const widthFormModal = winWidth > 800 ? 500 : 400;
  const heightFormModal = 820;
  const formSource =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTnkQFzRpPT4c7lnndoZeIrsn1JnMxP9zc1G6MrZZf_QoWpQ/viewform?embedded=true";

  const toggleContactForm = () => {
    setShowContactForm(currShowModal => !currShowModal);
    setNavBarOpen(false);
  };

  return (
    // "Contact Us Pill"
    <div className="relative">
      {/* {pathname !== "/" && ( */}
      <button
        className={`px-1.5 mxs:px-5 py-1.5 fixed right-5  flex items-center  text-16 text-gray-light tracking-0.3 
                  bg-blue-black rounded-full  z-50 mxs:z-40  cursor-pointer`}
                  //  ${pathname === "/" ? "bg-blue-black" : "bg-blue-black"}
        style={{ top: winHeight - 45, boxShadow: "0px 0px 3px #D6D6D6" }} // pill sits higher on homepage
        onClick={() => toggleContactForm()}
      >
        <StaticImage src="../../images/navbar/speechBubble.svg" alt="Speech bubble" style={{ width: 28 }} />
        <div className="hidden mxs:block  pl-1.5 pt-1">Contact Us</div>
      </button>
      {/* )} */}

      {/* Footer */}
      <div className={`z-40 mxs:z-50 ${showContactForm ? "fixed w-full bottom-0" : "relative"}`}>
        <footer
          className="pl-5 md:pl-7 lg:pl-16  w-full flex justify-between items-center  bg-gray-light border-t border-gray-lightish text-10 mxs:text-12 text-blue-black"
          style={{ height: 50 }}
          onClick={event => {
            event.stopPropagation();
            setNavBarOpen(false);
          }}
          aria-hidden="true"
        >
          <div className="flex flex-wrap" style={{ marginRight: `${rightGap}px` }}>
            <div className="flex items-center">
              <RiCopyrightLine size={winWidth < 510 ? "10" : "12"} />
              <div className="pl-1 pt-0.5 ">2021 Vaccine Hesitancy Guide</div>
            </div>

            <Link
              to="/terms"
              className="ml-6 mxs:ml-10 sm:ml-12  pt-0.5  underline cursor-pointer"
              onClick={() => {
                setShowContactForm(false);
                setNavBarOpen(false);
              }}
            >
              Terms &amp; Notices
            </Link>
          </div>

          <button className="hidden mxs:flex  cursor-pointer" onClick={() => toggleContactForm()}>
            <StaticImage src="../../images/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 25 }} />
            <div className="pt-1 pl-1.5 pr-4 sm:pr-6 md:pr-12  text-14 sm:text-16 tracking-0.3">Contact Us</div>
          </button>

          <ModalContactForm
            showContactForm={showContactForm}
            onHide={() => setShowContactForm(false)}
            width={widthFormModal}
            height={heightFormModal}
            formSource={formSource}
          />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
