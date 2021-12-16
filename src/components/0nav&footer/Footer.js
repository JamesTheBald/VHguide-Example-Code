import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Scroll from "react-scroll";

import { useMyContext } from "../../context/Context";
import ModalContactForm from "./ModalContactForm";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  const { showContactForm, winWidth, setShowContactForm } = useMyContext();

  // const rightGap = 100 * widthAdjRatio;
  const widthModal = winWidth > 800 ? 500 : 350;
  const heightModal = winWidth > 800 ? 840 : 880;
  const formSource =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTnkQFzRpPT4c7lnndoZeIrsn1JnMxP9zc1G6MrZZf_QoWpQ/viewform?embedded=true";

  const toggleContactForm = () => setShowContactForm(currShowModal => !currShowModal);

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const scroll = Scroll.animateScroll;

  return (
    <div className="relative">
      <button
        name="Contact Us Pill"
        className={`px-1.5 mxs:px-5 py-1.5 fixed bottom-1 right-5  flex items-center  text-16 tracking-0.3 
                    rounded-full  cursor-pointer border border-gray-mid  z-50 mxs:z-40
                    ${
                      "text-blue-dark bg-gray-light"
                      // pathname === "/" ? "text-gray-light bg-blue-black" : "text-blue-dark bg-gray-light"
                    }
                    `}
        // style={{ boxShadow: "0px 0px 3px #D6D6D6" }}
        onClick={() => toggleContactForm()}
      >
        {pathname === "/" ? (
          <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 28 }} />
        ) : (
          <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 28 }} />
        )}
        <div className="hidden mxs:block  pl-1.5 pt-1">Contact Us</div>
      </button>

      {/* Footer */}
      <div className={`z-40 mxs:z-50 ${showContactForm ? "fixed w-full bottom-0" : "relative"}`}>
        <footer
          className="pl-5 md:pl-7 lg:pl-16  w-full flex justify-between items-center  bg-gray-light border-t border-solid border-gray-lightish text-10 mxs:text-12 text-blue-black"
          style={{ height: 50 }}
          // onClick={event => event.stopPropagation()}
          aria-hidden="true"
        >
          <div
            className="flex flex-wrap"
            //  style={{ marginRight: `${rightGap}px`}}  // Forces text wrapping on small screens but not necessary even at 360px
          >
            <div className="flex items-center">
              <RiCopyrightLine size={winWidth < 510 ? "10" : "12"} />
              <div className="pl-1 pt-0.5 ">2021 Vaccine Hesitancy Guide</div>
            </div>

            <Link
              to="/terms"
              className="ml-6 mxs:ml-10 sm:ml-12  pt-0.5  underline cursor-pointer"
              onClick={() => {
                scroll.scrollToTop();
                setShowContactForm(false);
              }}
            >
              Terms &amp; Notices
            </Link>
          </div>

          {/* Contact Us on footer */}
          <button className="hidden mxs:flex  cursor-pointer" onClick={() => toggleContactForm()}>
            <StaticImage src="../../assets/navbar/speechBubbleBlue.svg" alt="Speech bubble" style={{ width: 25 }} />
            <div className="pt-1 pl-1.5 pr-4 sm:pr-6 md:pr-12  text-14 sm:text-16 tracking-0.3">Contact Us</div>
          </button>

          <ModalContactForm
            showContactForm={showContactForm}
            onHide={() => setShowContactForm(false)}
            widthModal={widthModal}
            heightModal={heightModal}
            formSource={formSource}
          />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
