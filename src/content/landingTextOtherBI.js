import React from "react";
import { Link } from "gatsby";

const landingTextOtherBI = {
  whoWeAre: {
    title: { EN: "Who We Are", FR: "Qui nous sommes" },
    caption: {
      EN: (
        <>
          <span className="mr-1.5">
            The Vaccine Hesitancy Guide was developed by a team of researchers out of the University of Calgary’s School
            of Public Policy.
          </span>
          <br className="hidden lg:block" />
          <span>
            We assembled the Guide’s content out of interviews and conversations with primary care clinicians.
          </span>
        </>
      ),

      FR: (
        <>
          <span className="mr-1.5">
            Le Guide sur l’hésitation vaccinale a été conçu par une équipe de chercheurs de l’école de politique
            publique de l’Université de Calgary.
          </span>
          <br className="hidden lg:block" />
          <span>
            Le contenu du guide est le fruit d’entrevues et de conversations avec des cliniciens de soins primaires.
          </span>
        </>
      ),
    },
    button: { EN: "Learn more about our team", FR: "En savoir plus sur notre équipe" },
  },

  mediaCoverage: {
    title: { EN: "Media Coverage", FR: "Couverture médiatique" },
    caption: {
      EN: (
        <>
          The Guide has been featured in a number of publications including Global News Edmonton, CBC News Calgary, the
          Calgary Herald, The Globe and Mail, among others.
        </>
      ),
      FR: (
        <>
          Le guide a fait l’objet de nombreuses publications, dont Global News Edmonton, CBC News Calgary, le Calgary
          Herald et le Globe and Mail.
        </>
      ),
    },
    button: {
      EN: (
        <>
          <div className="mxs:hidden">Look at Our Media Coverage</div>
          <div className="hidden mxs:inline">Take a Look at Our Media Coverage</div>
        </>
      ),
      FR: (
        <>
          <div className="">Notre couverture médiatique</div>
          {/* <div className="mxs:hidden">Notre couverture médiatique</div> */}
          {/* <div className="hidden mxs:inline">Jeter un coup d’œil à notre couverture médiatique</div> */}
        </>
      ),
    },
  },

  testimonials: {
    title: { EN: "Testimonials", FR: "Témoignages" },
  },

  collaborators: {
    title: { EN: "Collaborators", FR: "Collaborateurs" },
  },
};

export default landingTextOtherBI;
