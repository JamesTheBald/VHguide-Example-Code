import React from "react";
import { useMyContext } from "../context/Context";

const PrivacyPolicy = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <h2 className="panelTitleClass">Privacy Policy</h2>

      <div className="italic">Last update: May 17, 2021</div>
      <div className="pt-4">
        Our team at the University of Calgary’s School of Public Policy operate the Vaccine Hesitancy Guide
        (http://www.vhguide.ca) (the &quot;Site&quot;). This page informs you of our policies regarding the collection,
        use and disclosure of Personal Information we receive from users of the Site.
      </div>
      <div className="pt-4">
        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the
        collection and use of information in accordance with this policy.
      </div>
      <div className="subtitleFont">Information Collection And Use</div>
      <div>
        While using our Site, we may ask you to provide us with certain personally identifiable information that can be
        used to contact or identify you. Personally identifiable information may include, but is not limited to your
        name and contact information, including your email address (&quot;Personal Information&quot;).
      </div>
      <div className="subtitleFont">Log Data</div>
      <div>
        Like many site operators, we collect information that your browser sends whenever you visit our Site ( &quot;Log
        Data&quot;).
      </div>
      <div className="pt-4">
        This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP &quot;) address,
        browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time
        spent on those pages and other statistics.
      </div>
      <div className="subtitleFont">How we collect your information</div>
      <div>
        We collect Personal Information when a user signs up to our website and/or fills in a form to receive updates or
        contact us. We collect Log Data when your browser visits our site, including on mobile devices.
      </div>

      {/* <div className="pb-1.5" style={{ breakInside: "avoid" }}> */}
      <div className="pb-1.5">
        {/* <div className="pb-1.5 dontBreak"> */}
        <div className="subtitleFont">Why we collect your information</div>
        <div>We collect this information for the following purposes:</div>
        <div className="pt-5 ml-4">&bull; To provide and operate the services on our website;</div>
        <div className="pt-3 ml-4">
          &bull; To follow up with users who require more information on the guide, and/or who submit additional
          information to the guide;
        </div>
        <div className="pt-3 ml-4">
          &bull; To be able to contact our visitors / users with current information and news;
        </div>
        <div className="pt-3 ml-4">&bull; To provide, operate, and improve the services on our website; and</div>
        <div className="pt-3 ml-4">&bull; To comply with any applicable laws and regulations.</div>
      </div>

      <div className="subtitleFont">Cookies</div>
      <div>
        Our site does not use cookies to track your browsing behaviour or use of the guide. <br />
      </div>
      <div className="subtitleFont">How we use, share, and disclose your information</div>
      <div>
        Our website is hosted on the Netlify platform. Netlify provides us with the online platform that allows us to
        deliver the guide to you. No personal information will be stored on Netlify’s servers. <br />
      </div>
      <div className="pt-4">
        Users may voluntarily submit Personal Information when prompted in Google Forms. This information is stored on
        secured servers behind a firewall and will not be shared with any additional third parties. <br />
      </div>
      {/* <div className="subtitleFont mb-6" style={{ breakInside: "avoid" }}> */}
      <div className="subtitleFont mb-6  dontBreak">Withdrawal of consent and/or personal information</div>
      <div>
        If you do not want us to retain your Personal Information after submission, please
        <button className="pl-1.5 orangeLink" onClick={() => setShowContactForm(true)}>
          contact us
        </button>
        . Additionally, if you would like to access, correct, amend, or delete any personal information we have about
        you, please contact us to do so.
      </div>
      <div className="subtitleFont">Security</div>
      <div>
        The security of your Personal Information is important to us, but remember that no method of transmission over
        the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Information, we cannot guarantee its absolute security.
      </div>
      <div className="subtitleFont">Changes To This Privacy Policy</div>
      <div>
        This Privacy Policy is effective as of 17 May 2021 and will remain in effect except with respect to any changes
        in its provisions in the future, which will be in effect immediately after being posted on this page.
      </div>
      <div className="pt-4">
        We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy
        periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this
        page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the
        modified Privacy Policy.
      </div>
      <div className="subtitleFont">Contact Us</div>
      <span>
        If you have any questions about this Privacy Policy, please
        <button className="pl-1.5 orangeLink" onClick={() => setShowContactForm(true)}>
          contact us
        </button>
        .
      </span>
    </>
  );
};

const CopyrightNotice = () => {
  const { setShowContactForm } = useMyContext();

  return (
    <>
      <h2 className="panelTitleClass">Copyright Notice</h2>

      <div>
        This website and its content are protected under Canadian copyright law. Except as otherwise provided for under
        the copyright law of Canada, this website and its content may not be copied, distributed, published, downloaded
        or otherwise stored in a retrieval system, transmitted or converted, in any form or by any means (electronic or
        otherwise) without the prior written permission of the copyright owner.
      </div>
      <br />
      <div className="mt-3">
        For further information please
        <button className="pl-1.5 orangeLink" onClick={() => setShowContactForm(true)}>
          contact us
        </button>
        .
      </div>
    </>
  );
};

export const noticesContent = [
  {
    title: "Privacy Policy",
    content: <PrivacyPolicy />,
  },

  {
    title: "Copyright Notice",
    content: <CopyrightNotice />,
  },

  {
    title: "Content Disclaimer",
    content: (
      <>
        <h2 className="panelTitleClass">Content Disclaimer</h2>
        <div>
          All of the information on this website is provided for informational purposes only. It is not endorsed, nor
          does it represent the opinions of any professional medical association or organization. Reliance on any
          information appearing on, or provided in relation to the Vaccine Hesitancy Guide, is solely at your own risk.
          Neither the Guide’s authors, nor the University of Calgary, nor any of its affiliates assume any
          responsibility or liability for any damages, claims, costs or obligations arising from the use of the Guide or
          any other website to which the Guide is linked. We assume no responsibility for the content provided by any
          third-party websites linked to, or referenced in, the Guide. Their use is at your own risk and subject to the
          terms and conditions of use for such sites. The content of the Guide is for personal and non-commercial use
          and reference only.
        </div>
      </>
    ),
  },

  {
    title: "Land Acknowledgement",
    content: (
      <>
        <h2 className="panelTitleClass">Land Acknowledgement</h2>
        <div>
          The VH Guide was developed in Calgary, Alberta, Canada. The authors acknowledge that this work was done in
          Treaty 7 territory—the ancestral and traditional territory of the Blackfoot Confederacy: Kainai, Piikani and
          Siksika as well as the Tsuu T’ina First Nation and Stoney Nakoda First Nation. We acknowledge the many First
          Nations, Métis and Inuit who have lived in these lands for generations. We are grateful for the traditional
          Knowledge Keepers and Elders who are still with us today and those who have gone before us. We recognize the
          land as an act of reconciliation and gratitude to those whose territory we reside on or are visiting.
        </div>
      </>
    ),
  },
];
