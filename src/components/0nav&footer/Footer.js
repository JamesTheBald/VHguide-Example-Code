import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Scroll from "react-scroll";
import { RiCopyrightLine } from "react-icons/ri";

import { useMyContext } from "../../context/Context";
import ModalContactForm from "./ModalContactForm";

const Footer = () => {
  // const {setShowSlideIn } = props;
  const { fixedBackdrop, winWidth, setShowContactForm, setFixedBackdrop, log } = useMyContext();

  false && log && console.log();

  const toggleContactForm = () => {
    setShowContactForm(currShowModal => !currShowModal);
    setFixedBackdrop(currFixedBackdrop => !currFixedBackdrop);
  };

  // const toggleSlideIn = () => setShowSlideIn(currShowSlideIn => !currShowSlideIn);
  
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const scroll = Scroll.animateScroll;

  return (
    <div className="relative">
      <button
        name="Contact Us Pill"
        className={`px-1.5 mxs:px-5 py-1.5 fixed right-5 bottom-3.5 mxs:bottom-7  flex items-center  text-16 tracking-0.3 
                    rounded-full  cursor-pointer border border-gray-mid  z-50 mxs:z-40
                    ${pathname === "/" ? "text-blue-dark bg-gray-light" : "text-gray-light bg-blue-black"}
                    `}
        // style={{ bottom: 28 + "px" }}
        onClick={() => toggleContactForm()}
      >
        {pathname === "/" ? (
          <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 28 }} />
        ) : (
          <StaticImage src="../../assets/navbar/speechBubbleGrey.svg" alt="Speech bubble" style={{ width: 28 }} />
        )}
        <div className="hidden mxs:block  pl-1.5 pt-1">Contact Us</div>
      </button>

      {/* Footer */}
      <div className={`z-40 mxs:z-50 ${fixedBackdrop ? "fixed w-full bottom-0" : "relative"} overflow-y-hidden`}>
        <footer
          className="mt-6  pl-5 md:pl-7 lg:pl-16  w-full flex justify-between items-center  bg-gray-light border-t border-solid border-gray-lightish text-10 mxs:text-12 text-blue-black"
          style={{ height: 70 }}
          // onClick={event => event.stopPropagation()}
          aria-hidden="true"
        >
          <div className="flex flex-wrap">
            <div className="flex items-center">
              <RiCopyrightLine size={winWidth < 510 ? "10" : "12"} />
              <div className="pl-1 pt-0.5 ">2021 Vaccine Hesitancy Guide</div>
            </div>

            <Link
              to="/terms"
              className="ml-6 mxs:ml-8 sm:ml-12  pt-0.5  underline cursor-pointer"
              // className="ml-6 mxs:ml-10 sm:ml-12  pt-0.5  underline cursor-pointer"
              onClick={() => {
                scroll.scrollToTop();
                setShowContactForm(false);
              }}
            >
              Terms &amp; Notices
            </Link>

            {/* {winWidth > 580 && (
              <div className="ml-8 sm:ml-12  pt-0.5 underline cursor-pointer" onClick={() => toggleSlideIn()}>
                Take our survey!
              </div>
            )} */}
          </div>

          {/* Contact Us link on footer (icon+text) */}
          <button className="hidden mxs:flex  cursor-pointer" onClick={() => toggleContactForm()}>
            <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 25 }} />
            <div className="pt-1 pl-1.5 pr-4 sm:pr-6 md:pr-12  text-14 sm:text-16 tracking-0.3">Contact Us</div>
          </button>

          <ModalContactForm />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
