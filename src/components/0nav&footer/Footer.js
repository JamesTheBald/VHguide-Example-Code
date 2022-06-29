import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Scroll from "react-scroll";
import { RiCopyrightLine } from "react-icons/ri";

import { useMyContext } from "../../context/Context";
import { navbarLabels } from "../../content/navbarLabels";
import LanguageSwitcher from "./LanguageSwitcher.js";
import ModalContactForm from "./ModalContactForm";

const Footer = () => {
  const { fixedBackdrop, winWidth, setShowContactForm, setFixedBackdrop, lang, log, log2 } = useMyContext();

  false && console.log(log, log2);
  const w = winWidth;

  const toggleContactForm = () => {
    setShowContactForm(currShowModal => !currShowModal);
    setFixedBackdrop(currFixedBackdrop => !currFixedBackdrop);
  };

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const onIndexPage = pathname.length > 2 ? false : true;

  log2 && console.log("Footer.js pathname=", pathname);
  log2 && console.log("Footer.js onIndexPage=", onIndexPage);

  const scroll = Scroll.animateScroll;

  return (
    <div className="relative">
      {/* Fixed ('floating') Contact Us Pill */}
      <button
        className={`fixed bottom-11 mxs:bottom-6 qsm:bottom-7  px-1.5 qsm:px-5 py-1.5 mx-auto mb-2 mxs:mb-0
                  flex items-center  text-16 tracking-0.3  rounded-full cursor-pointer border-2 border-white  z-50 qsm:z-40
                    text-gray-light bg-blue-black`}
        style={w < 610 ? { left: winWidth - 79 } : { right: 20 }}
        onClick={() => toggleContactForm()}
      >
        <StaticImage src="../../assets/navbar/speechBubbleGrey.svg" alt="Speech bubble" style={{ width: 28 }} />
        <div className="hidden qsm:block  pl-1.5 pt-1">{lang === "EN" ? "Contact Us" : "Contactez-nous"}</div>
      </button>

      {/* Language Switcher for narrow screens, stacked under Contact Us icon */}
      <div className="mxs:hidden  absolute bottom-3 mxs:bottom-4 z-50" style={{ right: 26 }}>
        <LanguageSwitcher />
      </div>

      {/* Footer */}
      <div className={`z-40 qsm:z-50 ${fixedBackdrop ? "fixed w-full bottom-0" : "relative"} overflow-y-hidden`}>
        <footer
          className="mt-6  pl-8 axs:pl-10 md:pl-12 lg:pl-14  w-full flex justify-between items-center  bg-gray-light border-t border-solid border-gray-lightish text-10 mxs:text-12 text-blue-black"
          style={w < 510 ? { height: 80 } : w < 900 ? { height: 90 } : { height: 75 }}
          aria-hidden="true"
        >
          <div className="flex justify-start">
            <div
              className="flex  gap-y-1"
              style={w < 900 ? { flexDirection: "column" } : { flexDirection: "row-reverse", alignItems: "center" }}
            >
              {/* <div className="flex flex-wrap flex-row-reverse justify-end  items-center  gap-y-1.5 mxs:gap-y-1  bg-red-100"> */}
              <div className="mr-12 flex">
                <a
                  className={`underline cursor-pointer`}
                  href="https://survey.ucalgary.ca/jfe/form/SV_6GbMwSo0jnPE1WS"
                  rel="external noreferrer"
                  target="_blank"
                >
                  {navbarLabels.thoughts[lang]}
                </a>
              </div>

              <Link
                to="/terms"
                className="underline cursor-pointer  mr-8 qsm:mr-10 fsm:mr-12"
                onClick={() => {
                  scroll.scrollToTop();
                  setShowContactForm(false);
                }}
              >
                {navbarLabels.terms[lang]}
              </Link>

              <div className="flex items-center  mr-8 qsm:mr-10 fsm:mr-12">
                <div className="flex flex-shrink-0 items-center">
                  <RiCopyrightLine
                    className="relative"
                    style={w < 510 ? { bottom: "2px" } : { bottom: "1px" }}
                    size={w < 510 ? "10" : "12"}
                  />
                  &#8200;2022 Vaccine
                </div>
                <div className="flex-shrink-0">&#8200;Hesitancy Guide</div>
              </div>
            </div>

            <div className="hidden mxs:flex items-center  relative -left-2 mr-9">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Contact Us link on footer (icon+text) - WIDER screens */}
          <button
            className="hidden qsm:flex flex-none items-center  cursor-pointer  mr-6"
            onClick={() => toggleContactForm()}
          >
            <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 25 }} />
            <div className="pt-1.5 pl-1.5 pr-5 sm:pr-7 md:pr-9 lg:pr-12  text-14 sm:text-16 tracking-0.3">
              {lang === "EN" ? "Contact Us" : "Contactez-nous"}
            </div>
          </button>

          <ModalContactForm />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
