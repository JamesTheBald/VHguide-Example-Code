import React from "react";
import LinkToAboutEAASE from "./LinkToAboutEAASE";
import { FiExternalLink } from "react-icons/fi";
// import { BsArrowRight } from "react-icons/bs";

export const contentPersonas = {
  // Put copy content inside <> and </> instead of double quotes (except for LinkText).
  // Be sure to put double quotes around all URL addresses. e.g. href="https://www.cdc.gov/"

  // Catalog of contentIDs (note that some now start with a capital letter):

  // ScienceConcerns
  // mRNAConcerns
  // MedicallyComplex
  // ReproductiveEffects
  // SideEffects
  // Conspiracies
  // Naturalist
  // PoliticalSkeptic
  // Religious
  // PersonalTrauma
  // GroupTrauma
  // NeedlePhobia
  // Unconcerned
  // Undifferentiated
  // BadContentID

  // Path names for doctor icon images:
  //  ../images/peopleIcons/doctorBlackManBeard.svg
  //  ../images/peopleIcons/doctorBlackWoman.svg
  //  ../images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg
  //  ../images/peopleIcons/doctorWhiteManBlackHair.svg
  //  ../images/peopleIcons/doctorWhiteManGoatee.svg
  //  ../images/peopleIcons/doctorWhiteManYoung.svg
  //  ../images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg
  //  ../images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg

  // OLD NOTES:
  // Anything with square brackets is an 'array', holding multiple elements (all unlabeled peers).
  // Be sure to put a comma at the end of each line, unless it's blank or ends with { or [
  // Note that blank lines or extra spaces between items have no effect.
  // Please break up any long strings with zero-width spaces (&#8203;) for better word wrapping


  ScienceConcerns: {
    // location: [0, 0, 0],  // branch number, topic number, subtopic number - per branch.js
    tags: ["", ""],
    related: ["Conspiracies", "mRNAConcerns", "Naturalist"], // put contentIDs of related topic here
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy3.svg",
        content: [
          <>
            &ldquo;I don&apos;t trust it at my age. I don&apos;t know what will come down the road, what it will do to
            me three to five years from now. &rdquo;
          </>,
          <>&ldquo;Will this be a yearly vaccine? What about boosters?&rdquo;</>,
          <>&ldquo;I don&apos;t trust anyone about this. We&apos;re being treated like guinea pigs.&rdquo;</>,
          <>&ldquo;We don&apos;t know the long-term side effects of this.&rdquo;</>,
          <>
            &ldquo;I want to see the statistics of what percent we actually need to reach &lsquo;herd immunity&rsquo;.
            &rdquo;
          </>,
          <>
            &ldquo;It&apos;s scary. You&apos;re being filled with unknown things. There&apos;s not enough data.&rdquo;
          </>,
          <>&ldquo;I&apos;m not taking an unapproved vaccine.&rdquo;</>,
          <>&ldquo;I already had COVID, why would I need to get a vaccine?&rdquo;</>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        content: [
          <>
            <b>Don&apos;t rush into the science.</b> Consider your patient&apos;s willingness to hear, and capacity to
            understand, statistics and data.
          </>,
          <>
            <b>Ask permission to share</b> the science before jumping into the facts.
          </>,
          <>
            <b>Consider using simple, relatable metaphors to explain</b> the vaccine development process and the
            vaccines&apos; mechanisms of action.
          </>,
        ],
      },
      // (ScienceConcerns)
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            As a trusted health care professional you can reassure your patient that the science behind the vaccines is
            sound. Your recommendation carries significant weight when a patient is considering whether to get a
            vaccine.
          </>,
          <>
            <b>Ask permission to share</b> the science before jumping into the facts!
          </>,
        ],
      },
    },

    // (ScienceConcerns)

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              It sounds like you&apos;ve been doing a lot of research and reading about the vaccines. I have been, too.
              Can we compare our notes and what we’ve learned about them?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I appreciate where you&apos;re coming from, and I don&apos;t know if I’ll be able to get all the answers
              for you today. But let’s see what we can get through now, together.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              So it&apos;s not about any corners being cut. It&apos;s really more that we dropped everything else and
              poured money and resources into it. When it comes to regulatory waiting times, we didn&apos;t remove the
              red tape, we just got some sharper scissors to cut through the red tape and protect people as fast as
              possible.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: <>What if no vaccine had ever been created for COVID? What do the next five years look like for you?</>,
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // (ScienceConcerns)
      engage: {
        tags: ["", ""],
        content: [
          // Each item (between { }) should be either a subheading or a list of quotes, but not both.
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    It sounds like you&apos;ve been doing a lot of research and reading about the vaccines. I have been,
                    too. Can we compare our notes and what we&apos;ve learned about them?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Let me ask you, is it something specific with the vaccines or how they were made, or is it just more
                    vaccination overall?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    What sorts of things worry you about the vaccines? What information would you need to feel safe or
                    confident in getting one?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I appreciate where you&apos;re coming from, and I don&apos;t know if I’ll be able to get all the
                    answers for you today. But let’s see what we can get through now, together.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The media coverage of this has been really challenging to follow, eh? It seems like every day
                    there&apos;s something new and it contradicts what was said before, which can make it even more
                    difficult to tease out what&apos;s the truth.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The information changes quickly, and I can see how, for folks who aren’t as familiar with vaccines
                    and haven&apos;t studied diseases, it looks like we&apos;re flipping and flopping all over the place
                    and we don&apos;t know what the heck we&apos;re doing. But I think my job in working with you as a
                    patient is to think about what&apos;s in the best interest of you and your health.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Can I share with you what I know about the vaccines and a little more about the science behind them?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Would you be interested in hearing from me about how the vaccines work? You&apos;ve known me for a
                    fair amount of time. You may not know how much of a science nerd I am, but do you have a moment? I
                    can outline how we got here so quickly? Because, it&apos;s actually a cool science story.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    So do you remember Ebola and another virus called MERS, M-E-R-S? We love our acronyms in science!
                    But, researchers were actually looking at mRNA technology to fight those two conditions but they
                    disappeared too quickly, so the mRNA technology was put on the shelf...
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "redTapemRNA",
                fullStoryLinkText: "Read the full story",
                // <div className="flex">
                //   <div className="pr-2 ">Read the full story</div>
                //   {/* <BsArrowRight size="24" /> */}
                // </div>
              },

              {
                text: (
                  <>
                    Can I personally vouch for every CEO of every big pharma company? Can I personally vouch that no one
                    in history has ever done something shady to try and make money? Absolutely I can&apos;t. And yet in
                    my work, every single day I see people&apos;s whose lives are changed for the better, as a result of
                    drug therapies developed by pharmaceutical companies. I see people who live longer, fuller lives
                    because we&apos;re able to use the medications that are out there. And the vaccine is one of those
                    drugs – longer, fuller lives for all of us. Better lives. Lives without masks and distancing and
                    restrictions.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You don&apos;t trust the pharmaceutical industry. And that&apos;s fair because let&apos;s face it –
                    the number one threat to evidence-based practice right now is deliberate distortion of entire
                    literatures by the pharmaceutical industry. So I don&apos;t blame you for not trusting Big Pharma. I
                    don&apos;t either. On the other hand, the doubt about vaccines was created by a guy who basically
                    committed a fraud for his own profit [source]. So you got to be alert for scams on both sides of
                    this.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    So I guess [hearing about serious side effects from the vaccine] is like seeing a news story about
                    an airplane crash. Even though it happens incredibly rarely, the media make sure you know about it.
                    It’s been like this with the vaccine ever since it was approved. Everybody&apos;s very interested,
                    rightfully so, in how things go, every little twist and turn. It all gets reported on. But all the
                    reporting on very rare events, combined with us being cooped up, all that makes people anxious. So
                    I&apos;m wondering whether maybe if we could find a reliable source from one of the regulatory
                    agencies or something to talk about safety. It might be worthwhile thinking about that.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The mRNA technology has been developed over many years. I know people freak out and they go,{" "}
                    <i>
                      &lsquo;Oh, my gosh. This is less than a year and we got a vaccine. That&apos;s not
                      possible.&rsquo;
                    </i>{" "}
                    But, this sort of mRNA approach has been in development for decades. So, we were able to sort of
                    piggyback onto earlier work.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Around the world, hundreds of millions of people have had these vaccines. In terms of the
                    development, they went faster than they&apos;ve ever gone before to go from &lsquo;
                    <i>what&apos;s the virus?</i>
                    &rsquo; to, &lsquo;<i>how do we build a vaccine for it?</i>&rsquo;. That&apos;s true. But they
                    actually didn&apos;t skip any steps. I looked into it. The reason they were able to go faster, is
                    that they actually invested more than they&apos;ve ever invested before. And they work together in
                    ways that they&apos;ve never done before.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    I&apos;ve been working in this job for 20 years and we make lots of recommendations today that
                    differ from when I started &mdash; because we have a commitment to lifelong learning and adapting
                    our advice based on new research.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The tricky part with COVID is we don&apos;t have time to sit back and do more research before we
                    make our next recommendation &mdash; we have to act fast. But the new research and guidance is
                    always grounded in our longstanding knowledge about vaccines and immunity in general &mdash; so
                    it&apos;s not just pulled out of a hat.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    We&apos;re learning as we go forward, and we&apos;re trying to be as safe as we can. So, we’ve
                    learned from some very rare events. 1 in 100,000 events. So, one person out of 100,000 gets a blood
                    clot. It’s very small numbers but we&apos;re taking it really seriously. By comparison your chances,
                    as a Canadian, of dying in a traffic accident – which is a chance we take every time we get in a car
                    – that chance is 1 in 20,000. I hope that putting it in that context helps.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    I&apos;ve had my vaccine...[
                    <i>Share your experience of the vaccination process and/or side effects here.</i>] I really didn’t
                    have any reservations about having the vaccine personally. I was actually quite excited to get it! I
                    know that the science sounds new and modern when they talk about this mRNA vaccine and how it works
                    in a different way compared to the previous way that vaccines have been made, but it has given us
                    some real advantages.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },

          // SUBHEADING HERE (with the quotations to show it's a patient saying it): "I already had COVID, why do I need to get the vaccine?"
          {
            subheading: "'I already had COVID, why do I need to get the vaccine?'",
            // subheading: <>&quot;I already had COVID, why do I need to get the vaccine?&quot;</>,
            quotes: [],
          },

          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    My daughter just learned to drive &mdash; I taught her to begin with. She picked up all my bad and
                    lazy habits. Then I had a professional teach her and she&apos;s a great driver now, and I pay less
                    on insurance for her too. A vaccine after the infection is like that professional
                    &lsquo;tutoring&rsquo; to help your body be really good at fighting off COVID.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    We do have some emerging real-world data on patients who have been sick with COVID and we are
                    specifically looking at whether these folks might be able to have just a single dose of vaccine to
                    &lsquo;boost&rsquo; their immunity to better levels in the longer term.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    In comparing the antibodies on patients post-vaccine versus post illness we see a better immunity
                    from the vaccine &mdash; likely because the body is not so busy with being sick in the vaccine
                    group, so it can focus its attention on building more antibodies instead of trying not to die!
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I know, you think your immune system should be able to do it alone. If what you are saying is true
                    then you would chose to not wash your hands after using the bathroom, or wash your produce before
                    eating it, or not refrigerate your eggs because your immune system just needs to &lsquo;figure
                    out&rsquo; how to fight off E.coli and salmonella. But I bet you wash your hands and use your
                    fridge, right? When Dr. Semmelweis first proposed in the 1900s that washing hands would reduce
                    infections everyone thought he was crazy. But I bet you are glad I wash my hands in the office when
                    I see you now!
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              //END SUBHEADING SECTION.

              {
                text: (
                  <>
                    If we have increased volumes of people getting sick, the other thing to think about is: do we have
                    enough space for them in hospital? We could wait to have enough people get sick and die, and enough
                    people get sick and not die, so that we build up the ‘herd immunity’ that people talk about. But for
                    me, the vaccines get us to the same end point faster, sort of like a FastPass at Disneyland. A
                    FastPass without all the hospitalizations and deaths.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (ScienceConcerns)
              {
                text: (
                  <>
                    If a large portion of the population don’t get the vaccine, this could mean working from home, our
                    kids in and out of school, no social activities, et cetera, for the next several years. Which feels
                    kind of gross to me.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The vaccine developers were able to move quickly because the government gave them a lot of money.
                    Usually these trials take a long time because they are very expensive but for COVID, that financial
                    risk was taken away and that&apos;s a big part of what shortened the time.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    What if no vaccine had ever been created for COVID? What would the next five years look like for
                    you?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I hear you wondering, &lsquo;<i>oh, it&apos;s still kind of new. It&apos;s experimental.</i>’&rsquo;
                    We have a lot of data today, but we’ll have even more as the weeks go by and more people get the
                    vaccine. And I promise I will dig it up for you. And I&apos;ll tell you what I know and what I
                    don&apos;t know at that point. And maybe we&apos;ll make a decision together then.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    When was the last time you paid such close attention to scientific research related to health
                    recommendations? I would argue we are all just a little freaked out right now and so this can
                    sometimes be an outlet for that fear.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I see you as a leader within your community, and if I can help you understand where I&apos;m coming
                    from with this, I honestly feel like with the right information, we can help many, many people. If
                    you can partner with me, I&apos;m more than willing to have a look through your literature, and we
                    can figure out where some of the information on that is coming from, and hopefully help you to
                    understand, and make the best choice for you, and your family, and your community.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns Resources)

      resources: [
        {
          label: <>CanVax - How do the mRNA vaccines work?</>,
          image: "",
          linkTitle: <>Educational video from CanVax</>,
          link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
          description: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
        },

        {
          label: <>University of Waterloo - mRNA vaccine myths factsheet</>,
          image: "",
          linkTitle: <>mRNA vaccine myths factsheet for patients</>,
          link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
          description: <>A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA vaccines. (2021)</>,
        },

        {
          label: <>The Long Road to the mRNA vaccines</>,
          image: "",
          linkTitle: <>CIHR Website and Timeline</>,
          link: "https://cihr-irsc.gc.ca/e/52424.html",
          description: <>CIHR&apos;s overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
        },
        {
          label: <>Safety of the COVID-19 Vaccines</>,
          image: "",
          linkTitle: <>WHO website and infographics</>,
          link: "https://www.who.int/news-room/feature-stories/detail/safety-of-covid-19-vaccines",
          description: (
            <>
              WHO&apos;s overview page looking at the safety of the COVID-19 vaccines. Patient-appropriate, with
              infographics and videos. (March 2021)
            </>
          ),
        },
        {
          label: <>COVID-19 Vaccine Frequently Asked Questions</>,
          image: "",
          linkTitle: <>ImmunizeBC Vaccine FAQ Page</>,
          link: "https://immunizebc.ca/covid-19-vaccine-frequently-asked-questions",
          description: (
            <>
              ImmunizeBC&apos;s FAQ page for the COVID-19 vaccines. Includes sections on safety, allergies, and side
              effects. (Updated regularly, 2021).
            </>
          ),
        },
        {
          label: <>How Pfizer Makes Its Covid-19 Vaccine</>,
          image: "",
          linkTitle: <>New York Times news article</>,
          link: "https://www.nytimes.com/interactive/2021/health/pfizer-coronavirus-vaccine.html",
          description: (
            <>Detailed examination of how Pfizer produces the mRNA vaccines. New York Times article. (April 2021).</>
          ),
        },
        {
          label: <>Is the COVID-19 vaccine safe?</>,
          image: "",
          linkTitle: <>Johns Hopkins Medicine web resource</>,
          link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/is-the-covid19-vaccine-safe",
          description: (
            <>Hopkins Medicine fact page and resources for exploring the safety of the COVID-19 vaccines. (May 2021).</>
          ),
        },
        {
          label: <>How did you convince others? (Twitter)</>,
          image: "",
          linkTitle: <>Twitter thread</>,
          link: "https://twitter.com/DoYouEvenLif/status/1405265498166595585?s=20",
          description: (
            <>
              Twitter thread about hesitancy discussions and effective counselling strategies for others. Use Twitter at
              your own risk. (June 2021).
            </>
          ),
        },
      ],
    },
  },

  mRNAConcerns: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", "", "", "", "", "", ""],
      image: "",

      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy3.svg",
        content: [
          <>&ldquo;I’ve heard that the mRNA vaccines will alter my DNA.&rdquo;</>,
          <>
            &ldquo;I am not willing to have anything injected into my body that could potentially rewrite my DNA.&rdquo;
          </>,
          <>&ldquo;Will my cells be permanently reprogrammed?&rdquo;</>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorBlackManBeard.svg",
        content: [
          <>Affirm with the patient that this concern is shared by others.</>,
          <>Use clear metaphors and straight forward analogies to explain how the mRNA vaccines work.</>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            The mRNA vaccines are safe and never interact with a patient&apos;s DNA. Using clear metaphors to explain
            how these vaccines work can help your patient feel more informed and comfortable about these types of
            vaccines.
          </>,
        ],
      },
    },
    // (mRNAConcerns)
    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              Maybe if you don&apos;t mind, you can share with me what&apos;s behind your concerns about what the
              vaccine might do to you?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I get that there’s a lot of discussion out there about how the vaccines work and some of it can be
              concerning. Sometimes it can be difficult to make sense of something so new and so different from what
              we’ve had before.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              So this concern about DNA is something I&apos;ve heard quite a bit. And because of that, I&apos;ve looking
              into this quite a bit to make sure that I could effectively answer people&apos;s questions and concerns.
              Is it okay if I share some of the vaccine science with you?
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              Would you feel safer if you could get a vaccine without the mRNA? There are other vaccine options we can
              explore.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // (mRNAConcerns)
      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Maybe if you don&apos;t mind, you can share with me what&apos;s behind your concerns about what the
                    vaccine might do to you?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I do want to challenge you a little bit there. Just to make sure we have the right information and
                    are on the same page.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I get that there’s a lot of discussion out there about how the vaccines work and some of it can be
                    concerning. Sometimes it can be difficult to make sense of something so new and so different from
                    what we’ve had before.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I mean it&apos;s a really complex thing, right? Just like you, I&apos;ve been learning about the
                    vaccines as well. And it&apos;s something that&apos;s so new to everyone I think we&apos;re all just
                    trying to figure out what&apos;s going on.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    So this concern about DNA is something I&apos;ve heard quite a bit. And because of that, I&apos;ve
                    looking into this quite a bit to make sure that I could effectively answer people&apos;s questions
                    and concerns. Is it okay if I share some of the vaccine science with you?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              //LONGQUOTE below
              {
                text: (
                  <>
                    I have kind of a cool analogy I like to use to help people understand how mRNA works. Can I share it
                    with you? Imagine if the chef from your favourite restaurant could come over to your house and make
                    your favourite dish...
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "chefAnalogy",
                fullStoryLinkText: "Read the full story",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I know there&apos;s lots of information out there, but you can take this one to the bank: the
                    vaccine does not change your DNA. There are other things we might not know yet, but that one we know
                    for sure. That one is absolutely true.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I really wish we had the technology to alter DNA. Honestly, it would be a wondrous thing if we did
                    because you know what? We&apos;d be curing cancer right, left, and center. We just don&apos;t have
                    the ability to alter DNA. It just doesn&apos;t exist. We really just need to use the technology we
                    do have to protect you from getting so sick.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (mRNAConcerns)
              {
                text: (
                  <>
                    These mRNA vaccines are different than traditional vaccines, because they don&apos;t expose you to
                    any of the real virus. Instead, the bit of mRNA that&apos;s in the vaccines is like a recipe book
                    for this bit of protein that we want your cells to make.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              //LONGQUOTE below
              {
                text: (
                  <>
                    What&apos;s really cool about these mRNA vaccines that makes them even better than other vaccines is
                    that they go into your cell and they make your cell produce those little spiky things that you see
                    in all the COVID pictures. Those spikes are how COVID attaches onto your cells in your body and how
                    it starts attacking you. So, instead of having COVID attack you, and take over your cells, the mRNA
                    from the vaccine goes inside your cell, and it tells your cell to create just that same little spiky
                    thing. None of the virus itself, just the little spiky thing. And then your body&apos;s like,
                    &lsquo;
                    <i>Oh, what&apos;s this spiky thing? This looks bad</i>&rsquo;, and it starts to develop an immune
                    response.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "spikyVaccines",
                fullStoryLinkText: <>Read the full story</>,
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    By now, we have seen that these vaccines are safe and effective in so many people around the world,
                    and that they simply do not mess with people&apos;s DNA. It makes sense to have concerns about new
                    things like this, but I can assure you that these vaccines will not interfere with your DNA, and
                    that they are a safe choice.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What we&apos;re trying to do as physicians and healthcare providers in general is help people to see
                    that the more we do this one last thing of getting vaccinated, the more likely we are to avoid these
                    restrictions coming back and disrupting our lives again.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns Resources)
      resources: [
        {
          label: <>CanVax - How do the mRNA vaccines work?</>,
          image: "",
          linkTitle: <>Educational video from CanVax</>,
          link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
          description: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
        },

        {
          label: <>University of Waterloo - mRNA vaccine myths factsheet</>,
          image: "",
          linkTitle: <>mRNA vaccine myths factsheet for patients</>,
          link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
          description: <>A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA vaccines. (2021)</>,
        },

        {
          label: <>The Long Road to the mRNA vaccines</>,
          image: "",
          linkTitle: <>CIHR Website and Timeline</>,
          link: "https://cihr-irsc.gc.ca/e/52424.html",
          description: <>CIHR&apos;s overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
        },
        {
          label: <>Understanding the mRNA vaccines</>,
          image: "",
          linkTitle: <>US CDC website and infographics</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html",
          description: (
            <>
              US CDC&apos;s website for patients and public to better understand the mRNA vaccines, including
              infographics on how they work and links to information on their development. (March 2021)
            </>
          ),
        },
        {
          label: <>How the COVID vaccine can save your life (comic)</>,
          image: "",
          linkTitle: <>Interactive comic looking at COVID vaccines</>,
          link: "https://projects.nj.com/vaccine-comic/",
          description: <>A graphic novel/comic strip looking at the mRNA vaccines. (February 2021)</>,
        },
      ],
    },
  },

  MedicallyComplex: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>
            &ldquo;With all of my conditions and medications, I&apos;m not sure taking the vaccine is the right thing
            for me.&rdquo;
          </>,
          <>&ldquo;If I catch COVID and die, then I die.&rdquo;</>,
          <>&ldquo;I&apos;m worried about the vaccine interacting with my medications.&rdquo;</>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorBlackWoman.svg",
        content: [
          <>
            Consider discussing your patient’s specific co-morbidities/medications with a specialist who can advise on
            the best course of action.
          </>,
          <>
            Encourage patients to see that not taking the vaccine could make current conditions even worse or more
            challenging to deal with.
          </>,
          <>
            Check in with how your patient may be feeling. After long conversations about health issues, a follow-up
            appointment may be a better time to discuss the vaccines.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            As a trusted healthcare counsellor you can remind your medically complex patient that you are working
            together to optimize their health outcomes. Consider discussing the importance of this vaccine to keep
            treatment plans on track and lower the risk of long&ndash;term health implications.
          </>,
        ],
      },
    },
    // (MedicallyComplex)
    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: <>I know this is yet another thing, but I really hope you&apos;re not giving up on me.</>,
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I can understand that you would feel overwhelmed. You certainly do have a lot on your plate, and
              that&apos;s why we end up having so many conversations. It&apos;s you and me working to maximize your
              quality of life as much as we can. You know I&apos;d rather have you on no medications at all, but we need
              to protect you, get you living the best life you can.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              Whatever you&apos;ve read about the different vaccines, I can tell you that all of them are preventing
              people from being hospitalized or dying. That&apos;s the sort of protection that we&apos;re getting.
              I&apos;d really much rather that you didn&apos;t have a new health problem from COVID on your hands.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        // (MedicallyComplex)
        evoke: {
          text: (
            <>
              I guess when it comes to COVID, my major concern is when you&apos;ve got someone with the medical problems
              you have, I really worry that you would get a really bad run of it if you caught the virus. You would be a
              very high risk for winding up in hospital, doing really badly, maybe even needing the ICU. People that
              have been into ICU, they don&apos;t; come out in great shape if they do come out. I&apos;d rather we just
              protect you from that altogether. These vaccines do that.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: <>I know this is yet another thing, but I really hope you’re not giving up on me.</>,
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I know you have a lot on your plate, but let’s chat about why the vaccine is really important for
                    you and your health.
                  </>
                ),
                // (MedicallyComplex)
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: <>I hear you&apos;re worried about drug interactions. Let&apos;s explore that a little bit.</>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I can understand that you would feel overwhelmed. You certainly do have a lot on your plate, and
                    that&apos;s why we end up having so many conversations. It&apos;s you and me working to maximize
                    your quality of life as much as we can. You know I&apos;d rather have you on no medications at all,
                    but we need to protect you, get you living the best life you can.
                  </>
                ),
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I can appreciate your concern about drug interactions with the vaccine. I want to make sure you feel
                    as comfortable as possible about taking this vaccine. I&apos;m here to help you get there.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Right, there is a lot you&apos;re dealing with, health-wise. You&apos;re not the first patient of
                    mine to express these concerns.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>What specifically about your condition(s) or medication(s) makes you concerned about the vaccine?</>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I&apos;ve been doing a lot of reading on the vaccines and people like yourself. People with other
                    health concerns who are taking a few different types of medications. Would you be up for hearing
                    what I&apos;ve found relating to your conditions?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Whatever you&apos;ve read about the different vaccines, I can tell you that all of them are
                    preventing people from being hospitalized or dying. That&apos;s the sort of protection that
                    we&apos;re getting. I&apos;d really much rather that you didn&apos;t have a new health problem from
                    COVID on your hands.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    It has been a great relief over the last couple of months when folks like you have said, &lsquo;
                    <i>you know what? I just got vaccinated, and I&apos;m feeling really good about that</i>&rsquo;. I
                    tell them, &lsquo;
                    <i>Oh, that&apos;s great. That&apos;s really good news to know that you&apos;re protected.</i>
                    &rsquo;. That&apos;s really what I&apos;d like for you as my patient is to try and get you as
                    protected as we can.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I really don&apos;t want you to get COVID because I think the reaction that you could have with your
                    health issues would be pretty significant.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    While I see that medication interactions with the vaccine are a concern for you, the flip side of
                    that concern for me is the long-term impact of COVID for you. It&apos;s long-COVID that I&apos;m
                    worried about for you, specifically those lingering symptoms, a brain fog that might last for the
                    next year or longer. I would hate for that to happen. So, that&apos;s the thing that I keep worrying
                    about because you&apos;re at a bit higher risk for those long-COVID effects than the average person.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Could I possibly have a conversation with your pharmacist, I&apos;m sure you know your pharmacist
                    better than you know me, and see whether they might be able to set aside one of their doses for you
                    so that you don&apos;t have to go to one of these big centers? Do you think that&apos;s something
                    that we would be able to work with?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (MedicallyComplex)
              {
                text: (
                  <>
                    So, I&apos;ve been reading letters from specialists caring for patients who are on medications to
                    change the way that their immune system works. Some of those patients are able to receive the
                    vaccine if they jump off the medication before the vaccine. So it is still possible to give the
                    vaccine in certain situations, but there&apos;s got to be a gap in the immunosuppressants that you
                    take when you receive the vaccine. You have to kind of reduce the dulling down of the immune system
                    so that the immune system can recognize the thing that&apos;s presented in the vaccine. Then you can
                    go back on your medication again. So, I can always investigate the best way forward by having a chat
                    with your specialist and making sure that we&apos;re making the right decisions.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Some of these newer treatments, I&apos;m not an expert on, so I like to talk to your specialist to
                    make sure that we&apos;re not causing trouble by just going ahead with the vaccine. There&apos;s a
                    helpline available to me where I can phone a specialist and we run through your case and talk about
                    your medications and come up with the best plan.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (MedicallyComplex)
              {
                text: (
                  <>
                    I guess when it comes to COVID, my major concern is when you&apos;ve got someone with the medical
                    problems you have, I really worry that you would get a really bad run of it if you caught the virus.
                    You would be a very high risk for winding up in hospital, doing really badly, maybe even needing the
                    ICU. People that have been into ICU, they don&apos;t come out in great shape if they do come out.
                    I&apos;d rather we just protect you from that altogether. These vaccines do that.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I mean, say, COVID kills you, okay? It’s over. But what if it doesn&apos;t? What if you catch COVID,
                    and you survive? I&apos;ve certainly got lots of patients in my own practice that are these
                    long-haulers that you&apos;ll have heard about on the radio and the news. The people who end up with
                    these longstanding problems. Which would mean taking what you&apos;re dealing with just now and
                    making it even worse. Even harder for you to get through day-to-day stuff because of fatigue, and
                    breathlessness. It just seems like given all the efforts that you&apos;re making with your health,
                    it just seems a really simple thing to do to protect you, and prevent you from ending up in that
                    sort of position. It&apos;s really just about keeping you as safe as we can and everyone else around
                    you.
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (MedicallyComplex)
              {
                text: (
                  <>
                    Don&apos;t forget that it&apos;s much easier for your friends and family to be able to come visit
                    you confidently knowing that you&apos;re protected, that they don&apos;t have to worry about making
                    you sick, and for me to see you as well.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    One way of thinking about it is that the vaccine is, in some ways, more important than most of your
                    other medications really. They’re all kind of &lsquo;small print&rsquo; in comparison to this really
                    big issue. Protecting you from COVID-19 is that important.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex Resources)
      resources: [
        {
          label: <>Alberta Health Services: Counselling Immunocompromised Individuals on the use of mRNA COVID-19 Vaccines</>,
          image: "",
          linkTitle: <>Interim Information for Health Care Providers Completing Risk
          Assessments</>,
          link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-counselling-immunocompromised-individuals-mrna.pdf",
          description: (
            <>
              An informational guide for health professionals on how to discuss the mRNA vaccines with immunocompromised patients. (February 2021)
            </>
          ),
        },

        {
          label: <>Canadian Rheumatology Association&apos;s Recommendation on Covid-19 Vaccination in Persons with Autoimmune Rheumatic Disease</>,
          image: "",
          linkTitle: <>Interim Recommendations for Healthcare Providers from the CRA</>,
          link: "https://rheum.ca/wp-content/uploads/2021/05/FINAL-V2-CRA-Recommendation-on-COVID-19-Vaccination_May-2021.pdf",
          description: (
            <>
              Advisory and recommendations from the CRA on COVID-19 vaccination in persons with autoimmune rheumatic disease (Updated May 2021)
            </>
          ),
        },

        {
          label: <>Crohn&apos;s and Colitis Canada: COVID-19 Vaccines and IBD</>,
          image: "",
          linkTitle: <>Recommendations on the use of COVID-19 vaccines in individuals with IBD/Crohn&apos;s/Colitis</>,
          link: "https://crohnsandcolitis.ca/About-Crohn-s-Colitis/COVID-19-and-IBD/Vaccines",
          description: (
            <>
              The Crohn’s and Colitis Canada COVID-19 and IBD Task Force present their recommendations and justifications for why the COVID-19 vaccines should be administered to patients with IBD at the earliest available opportunity. (Updated May 2021)
            </>
          ),
        },

        {
          label: <>Cancer Care Alberta: COVID-19 and Cancer Treatment</>,
          image: "",
          linkTitle: <>Information for Patients and Families</>,
          link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-cancer-treatment-info-pf.pdf",
          description: (
            <>
              Information on COVID-19 and COVID-19 vaccination for patients undergoing cancer treatments. (Updated April 2021)
            </>
          ),
        },
        
        {
          label: <>I&apos;ve heard about people having allergic reactions to the vaccine. What are they allergic to?</>,
          image: "",
          linkTitle: <>Video from the Ontario Hospital Association</>,
          link: "https://www.youtube.com/watch?v=eWbaME_F750&list=PL2zzFmCbIz4eE5JUlT2ODFU2KnjCVG7D6",
          description: (
            <>
              Dr. Zainab Abdurrahman explains the possible allergens that cause rare allergic reactions in some people
              who receive a COVID-19 vaccine. (March 2021).
            </>
          ),
        },

        {
          label: <>COVID-19 Vaccines for People with Underlying Medical Conditions</>,
          image: "",
          linkTitle: <>US CDC website and factsheet</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations/underlying-conditions.html",
          description: (
            <>
              US CDC overview and examination of COVID-19 vaccine considerations for those with underlying medical
              conditions. (Updated, June 2021)
            </>
          ),
        },
      ],
    },
  },

  ReproductiveEffects: {
    // edit this from ContentID to the specific name for this persona type. No duplication!
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy2.svg",
        content: [
          <>
            &ldquo;I don&apos;t want to introduce unnecessary medications into my body if I don&apos;t need to. Why
            would I do that?&rdquo;
          </>,
          <>
            &ldquo;It&apos;s too early to know what the effects of the vaccine will be on my baby/chances of
            conceiving.&rdquo;
          </>,
          <>
            &ldquo;I don&apos;t want to get the vaccine because I&apos;m worried the side effects will interrupt my
            training/fitness performance.&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
        content: [
          <>Draw attention to the fact that vaccines are a normal part of prenatal care.</>,
          <>Highlight demonstrated safety in both clinical trials and vaccine roll out in pregnant populations.</>,
          <>
            Draw attention to the benefits of vaccination shared between mother and unborn child &#40;e.g. passive
            immunity&#41;.
          </>,
          <>
            Discuss possibility of a COVID infection and its symptoms&apos; effects on training and fitness versus the
            vaccine side effects.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Beyond the evidence showing that the vaccines do not interfere with reproductive health or fitness, there is
            likely a need for personal reassurance here. Your recommendation as a trusted health counsellor can carry
            significant weight in a patient&apos;s decision to get vaccinated.
          </>,
        ],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              What have you heard or read about the vaccines and fertility? Are you thinking that the vaccine would make
              it harder to have children?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        affirm: {
          text: (
            <>
              I know we&apos;ve talked before about your plans to ensure fertility, and that&apos;s informed other kinds
              of decisions we&apos;ve made along the way &#91;e.g. birth control, sexual performance&#93;, and stuff
              like that, right? So I get where you&apos;re coming from in that regard, and that&apos;s very important to
              you.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        ask: {
          text: (
            <>
              Fertility concerns are something I&apos;ve been hearing quite a bit from my other patients. And because of
              that, I&apos;ve done a fair bit of research in this space to make sure that I could effectively answer
              people&apos;s questions and concerns. Can I share what I&apos;ve been telling my other patients?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
        },
        evoke: {
          text: (
            <>
              I would like to make it really clear to you that the way we make sure that we have healthy babies, is that
              we keep moms healthy. And we help get mom to make antibodies against COVID, which has turned our world
              upside down, and to give those antibodies &mdash; that protection, that shield &mdash; to her baby.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    What have you heard or read about the vaccines and fertility? Are you thinking that the vaccine
                    would make it harder to have children?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Are you thinking that the vaccine would give you problems in maintaining an active or athletic
                    lifestyle?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              //REPRODUCTIVE
              {
                text: (
                  <>
                    I know we&apos;ve talked before about your plans to ensure fertility, and that&apos;s informed other
                    kinds of decisions we&apos;ve made along the way &#91;e.g. birth control, sexual performance&#93;,
                    and stuff like that, right? So I get where you&apos;re coming from in that regard, and that&apos;s
                    very important to you.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I think we are on the same page that wanting healthy babies, it&apos;s a shared goal for me and you,
                    right?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I can see it&apos;s very important for you to know if there is any chance that getting a vaccine
                    could affect your ability to have children.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              //FITNESS
              {
                text: (
                  <>
                    I know maintaining an active lifestyle is really important to you and we want to make sure we keep
                    you as active as possible for as long as possible.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Fertility concerns are something I&apos;ve been hearing quite a bit from my other patients. And
                    because of that, I&apos;ve done a fair bit of research in this space to make sure that I could
                    effectively answer people&apos;s questions and concerns. Can I share what I&apos;ve been telling my
                    other patients?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Keeping up your healthy lifestyle is important to me as well. I want to see you living as healthy as
                    possible. Can I share why I think a COVID vaccine may help you do that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    The vaccine doesn&apos;t stay in your body forever. It&apos;s just like any kind of medication you
                    take, a pill you take by mouth. It doesn&apos;t stay in your body forever. Quite naturally, it gets
                    flushed out of your body in a few days. Because you&apos;re so healthy, this natural process will
                    probably happen even faster for you.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              //REPODUCTIVE
              {
                text: (
                  <>
                    It&apos;s been standard practice to vaccinate moms-to-be for the flu, and whooping cough as well.
                    The idea is that the mom can pass along her protection to the newborn. And so we think the rationale
                    is really similar for COVID. What we see in the research is that the vaccine itself does not cross
                    the placenta. So the baby is not affected by the vaccine, but mom can give her protection to the
                    baby. So mom is doing this incredible thing for the baby, which is using her immune system to
                    protect the newborn. And I can&apos;t imagine any sort of mom-to-be who wouldn&apos;t want to hand
                    off a shield to her baby.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    The fertility piece is obviously a really important piece for women in particular. What&apos;s
                    interesting is as much as the COVID vaccines are a new, we&apos;ve been dealing with vaccines for
                    years and years. And the whole picture from vaccine science tells us that this is something we can
                    be super comfortable about.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    During the pandemic we&apos;ve actually seen a whole bunch of unvaccinated, pregnant moms ending up
                    very, very sick. This has actually become a big priority in my practice to make sure that moms who
                    are expecting are definitely getting vaccinated. Because of course, if we can protect them, then
                    we&apos;re protecting two lives, aren&apos;t we?
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    In terms of your particular concern around the fertility, this is something that has come up quite a
                    bit in my practice. And in my digging, what I have found is that a lot of these concerns have been
                    spurred on by a group actually funded out of &#91;other countries&#93;. A group that is trying to
                    spread disinformation to frighten people. Is it okay if I share some scientifically sound
                    information that&apos;s not designed to frighten you, just to give you a better sense of how this
                    works?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              //This next one needs a link, using HREF
              {
                text: (
                  <>
                    Tens and tens of thousands of women are getting successfully pregnant after the COVID vaccine.
                    They&apos;re not just having no trouble getting pregnant, their pregnancies are going smoothly too.
                    In the randomized trials, there was even a bunch of people who got pregnant. So we even saw that
                    early on, that it wasn&apos;t stopping fertility, but now we have 100,000 plus people in{" "}
                    <a
                      href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafepregnancyregistry.html"
                      className="orangeLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      a registry in the US being followed
                    </a>
                    . And we don&apos;t see any signals whatsoever of concern for mom or baby.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Around the world, medical professionals have given these vaccines to billions of people now. This is
                    probably the most watched, most followed medical intervention in the history of humanity. We know
                    the side effects inside and out, and I can promise you that impotence affecting sexual function is
                    absolutely not a side effect at all.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    In my world, I see guys every day that need Viagra, but they don&apos;t need Viagra because they
                    took a vaccine. They need Viagra because they have other problems. Maybe they have high blood
                    pressure or they have diabetes and those sort of things, but that&apos;s got nothing to do with the
                    vaccine.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              //FITNESS
              {
                text: (
                  <>
                    My &#91;e.g. relative/friend/colleague&#93; is quite athletic, he&apos;s only 40, and - this is a
                    true story - he got COVID and it laid him low. And he&apos;s been having chest pain ever since, and
                    he had to actually go see a cardiologist. And they said his heart was fine, but you know, he
                    wasn&apos;t really able to get back to biking for weeks and weeks. So just seeing that in my own
                    &#91;e.g. relative/friend/colleague&#93; I was like, oof, I just don&apos;t want anyone to risk
                    that.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              //Add REPRODUCTIVE subheading here
              {
                text: (
                  <>
                    I would like to make it really clear to you that the way we make sure that we have healthy babies,
                    is that we keep moms healthy. And we help get mom to make antibodies against COVID, which has turned
                    our world upside down, and to give those antibodies - that protection, that shield - to her baby.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              //ADD FITNESS Subheading here
              {
                text: (
                  <>
                    Have you gotten any information directly from a specialist &#91;e.g. sports medicine, obstetrics,
                    men’s health, nutrition&#93; in this area about the safety of the vaccine? They may have something
                    to add that would be relevant. Maybe we could connect with them?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    So you&apos;re good with supplements to body build, so I&apos;m going to suggest you also take this
                    thing that&apos;s proven to be safe, tested as widely as anything has been tested, and it may
                    protect your life, your family, and stop you from getting really sick, and allow you to go back to
                    freedom and the gym. I&apos;m thinking that it might be in your best interest to consider taking
                    that.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    My &#91;e.g. relative/friend/colleague&#93; had COVID a couple of weeks ago, and she can barely get
                    out of her bed at the moment she&apos;s so fatigued. She&apos;s a keen runner, and the concept of
                    going for a run at the moment is just not something she can even contend with. From your
                    perspective, if that happened to you, how would that affect your training/performance?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    If you wanted to protect yourself against getting COVID and also have a lower risk of losing some
                    training time, you could get the first vaccine because that usually doesn&apos;t cause people
                    problems, and then you&apos;d be largely protected against it and so that would be like maybe a good
                    middle ground.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      //REPRODUCTIVE Resources & FITNESS Resources
      resources: [
        {
          label: <>19-to-Zero: COVID-19 Vaccines, Fertility, and Menstruation (Video)</>,
          image: "",
          linkTitle: <>Short video discussion about the vaccines and fertility/menstruation</>,
          link: "https://www.youtube.com/watch?v=aFZ757WXNRE",
          description: (
            <>
             5 minute video with an OBGYN and a public health expert discussing the vaccines, fertility, and menstruation. (June 2021)
            </>
          ),
        },
        
        
        {
          label: <>COVID-19 Vaccines While Pregnant or Breastfeeding</>,
          image: "",
          linkTitle: <>US CDC overview and factsheets</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations/pregnancy.html",
          description: (
            <>
              US CDC overview and considerations for COVID-19 vaccines for those who are pregnant or breastfeeding.
              (Updated, June 2021)
            </>
          ),
        },

        {
          label: <>V-safe COVID-19 Vaccine Pregnancy Registry</>,
          image: "",
          linkTitle: <>US CDC vaccine pregnancy registry</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafepregnancyregistry.html",
          description: (
            <>
              Main page for US CDC&apos;s V-Safe pregnancy vaccination registry for the US. Provides updated counts of
              vaccinated individuals who become pregnant. (Updated, June 2021)
            </>
          ),
        },

        {
          label: <>Don’t Let Misinformation About Fertility and COVID-19 Vaccines Stop Teens from Getting the Shot</>,
          image: "",
          linkTitle: <>Healthline fact page</>,
          link: "https://www.healthline.com/health-news/dont-let-misinformation-about-fertility-and-covid-19-vaccines-stop-teens-from-getting-the-shot#Whats-behind-the-myth?",
          description: (
            <>
              Healthline overview of the misinformation regarding fertility, and consolidated resources to counter it.
              (January 2021)
            </>
          ),
        },
        {
          label: <>Exercise and COVID-19 Vaccination: What You Should Know</>,
          image: "",
          linkTitle: <>University of California Fact Page</>,
          link: "https://www.newswise.com/coronavirus/exercise-and-covid-19-vaccination-what-you-should-know",
          description: (
            <>
              UC San Diego sports medicine specialists discuss issues related to exercise before and after vaccination.
              (April 2021)
            </>
          ),
        },
      ],
    },
  },

  SideEffects: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>&ldquo;I hear that the side effects from the second dose are really bad.&rdquo;</>,
          <>
            &ldquo;My &#91;friend/family member&#93; had a really bad reaction after they got the vaccine. I am worried
            about that for me.&rdquo;
          </>,
          <>
            &ldquo;I&apos;ve been hearing about these blood clot and heart issues and worry about how safe these
            vaccines are.&rdquo;
          </>,
          <>&ldquo;We don&apos;t know what the long-term effects will be.&rdquo;</>,
        ],
      },
      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        content: [
          <>Be transparent about possible side effects of the vaccines with patients.</>,
          <>
            Discuss that common, flu-like symptoms from the vaccine are beneficial and demonstrate that the immune
            system is at work.
          </>,
          <>
            Consider comparing risk of adverse events to risks present in everyday/common activities &#40;e.g. car
            accidents, airline travel, etc.&#41;.
          </>,
          <>Emphasize the close regulatory scrutiny of the vaccines, their safety, and any adverse events.</>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Beyond the evidence that major side effects from the vaccines are very rare, your patient likely needs
            personal reassurance. Reaffirming that most minor &lsquo;side effects&rsquo; are, in fact, evidence that the
            vaccine and the patient&apos;s immune system are working, can help make the difference.
          </>,
        ],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              Which side effects worry you the most with the vaccines? Can you tell me what you think will happen if you
              get vaccinated?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I&apos;ve definitely been hearing these concerns among some of my patients. I&apos;m glad you&apos;re
              thinking about all of the risks and benefits of getting the vaccine or not.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        ask: {
          text: (
            <>
              Sometimes people get their immune response mixed up with a side effect. We want your body to mount as
              strong an immune response as it can to the vaccine. Does that make sense? Because we want your immune
              system to do its job, right? That&apos;s not a side effect, that&apos;s THE effect.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        evoke: {
          text: (
            <>
              Something to think about here is your risk of getting COVID. Because if you got COVID, obviously you could
              have much even more significant symptoms, right? I mean you could get super sick from that. Much sicker
              than you might feel from a side effect.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
        },
      },

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Which side effects worry you the most with the vaccines? Can you tell me what you think will happen
                    if you get vaccinated?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Have you had any friends or family members who have received a vaccine? How have their experiences
                    been with it?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Can you share with me why specifically you feel nervous about the vaccines? Is there something
                    making you particularly anxious about vaccination?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;ve definitely been hearing these concerns among some of my patients. I&apos;m glad
                    you&apos;re thinking about all of the risks and benefits of getting the vaccine or not.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    You are not alone! Being anxious about potential side effects has definitely made others hesitate to
                    get the vaccine right away, too. It is scary when we hear people have had bad side effects from a
                    vaccine, or any medication for that matter.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    There&apos;s been a lot of media coverage about blood clots and the vaccines and some of this has
                    been quite confusing.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    You&apos;re right, what you&apos;re describing &#91;e.g., follow-up flu-like symptoms&#93; is really
                    common. Feeling some flu-like symptoms after getting a vaccine is certainly not unusual.
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I can understand why you aren&apos;t excited about potentially feeling a bit sick or flu-like for a
                    few days after getting your vaccine.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I&apos;m really glad you got that first shot &mdash; that means you already have some immunity and
                    some protection. And I can understand why you&apos;re concerned that the second one will have worse
                    side effects.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I appreciate that you are looking into and weighing the risks as well as the benefits of getting the
                    vaccine. Everyone has been very closely following and monitoring the &#91;e.g., blood
                    clot/myocarditis&#93; issue, and it makes sense to have concerns about that.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    There have been conversations about a certain side effects &#91;e.g. blood clots, myocarditis&#93;.
                    Do you want to look at that information with me? We can discuss it together.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Having the full picture can sometimes make these things a little bit less scary. Can I discuss the
                    benefits and risks of the vaccines with you?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Sometimes people get their immune response mixed up with a side effect. We want your body to mount
                    as strong an immune response as it can to the vaccine. Does that make sense? Because we want your
                    immune system to do its job, right? That&apos;s not a side effect, that’s <i>THE</i> effect.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              //SECOND DOSE STUFF STARTS HERE. MAYBE SUB-HEADING IT LATER.
              {
                text: (
                  <>
                    &#91;<i>On the importance of the second dose</i>&#93; When the virus can get in to more people
                    &mdash; even if they don&apos;t get really sick &mdash; it gets a chance to mutate. That&apos;s how
                    variants happen and that&apos;s why we keep prolonging the end of this pandemic &mdash; so the more
                    complete protection we have the safer we all will be.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    We know that getting the first dose gets you some protection, but we know that protection isn’t as
                    strong, and won’t last as long. Getting the second dose will give your immune system that kick in
                    the backside, that reminder to know what it&apos;s actually dealing with so that it remembers, and
                    you will be protected for longer.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    The side effects are actually a sign that your immune system has caught on and is fired up. So
                    that&apos;s not saying something&apos;s wrong with the vaccine. That&apos;s actually saying
                    it&apos;s doing its job. Now, the reason there have been a few blood clots is because for a few
                    people, a very few, your immune system produces sort of a weird antibody. Everybody produces
                    different antibodies, slightly different ones...
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "sideEffectsStory",
                fullStoryLinkText: <>Read the full story</>,
              },
              {
                text: (
                  <>
                    One of my colleagues was talking about how he&apos;d been talking to some infectious disease doctors
                    who were just over the moon when they got sore arms from their vaccines because, for them, it showed
                    that it was doing something. They saw it as a desired effect, not a side effect!
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Honestly, the thing is, and I&apos;ve been saying this about vaccines for years, you kind of want to
                    feel crummy because it tells you that your immune system is doing its job. Your immune system&apos;s
                    paying attention. Your immune system is reacting to that vaccine the way it should. Imagine what
                    you’d feel like if it was the real thing and not the vaccine?!
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Now, if you ask me, &lsquo;
                    <i>how can you know this isn&apos;t going to have a problem 10 years down the line?</i>&rsquo;, I
                    don&apos;t. I can&apos;t tell you with 100% certainty. But I can explain how the vaccine works, and
                    vaccines have a really strong track record. They&apos;re certainly better than getting a bad case of
                    the disease they&apos;re preventing.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    So I guess &#91;the blood clots&#93; are like seeing a news story about an airplane crash. Even
                    though it happens incredibly rarely, the media make sure you know about it. It&apos;s been like this
                    with the vaccine ever since it was authorized. Everybody&apos;s very interested, rightfully so, in
                    how things go, every little twist and turn. It all gets reported on. But all the reporting on very
                    rare events, combined with us being cooped up, all that makes people anxious. So I&apos;m wondering
                    whether maybe if we could find a reliable source from one of the regulatory agencies or something to
                    talk about safety. It might be worthwhile thinking about that.
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I get that those stories about side effects can be really scary. But if we look at the statistics
                    behind it, the chances of anything bad happening are just so tiny. The chances of us wearing masks
                    forever and homeschooling our kids forever if we don&apos;t get vaccinated is much higher and much
                    more real.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I&apos;ve had my vaccine. I had a little bit of a headache initially for the first day when I had it
                    and then achy for two days. I couldn&apos;t sleep well. And I was a little bit tired for around
                    about a week and it all settled down. I didn&apos;t really have any reservations about having the
                    vaccine personally. I was actually quite excited to get it really.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Around the world, medical professionals have given this vaccine to hundreds of millions of people
                    now. This is probably the most watched, most followed medical intervention in the history of
                    mankind, and we know the side effects inside and out, and I can promise you that there are no side
                    effects affecting sexual function. There&apos;s just no side effects in that regard.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    In my world, I see guys every day that need Viagra, but they don&apos;t need Viagra because they
                    took a vaccine. They need Viagra because they got other problems. Maybe they have high blood
                    pressure or they got diabetes and those sort of things, but that&apos;s got nothing to do with the
                    vaccine.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    You want it to do something. You don&apos;t want to have nothing happen. It&apos;s actually
                    promising that it&apos;s working and that your immune system is now going to recognize COVID and
                    give you that protection against hospitalization and death that we know these vaccines primarily
                    give people.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, my &#91;friend/relative&#93; is quite athletic and they&apos;re &#91;younger&#93;, this is a
                    true story. And they got COVID and it laid them low. And they have been having chest pain ever
                    since, and they had to actually go see a cardiologist. And the cardiologist said their heart was
                    fine, but you know, they weren&apos;t really able to get back to biking for weeks and weeks. So just
                    seeing that in my own &#91;friend/relative&#93; I was like, &lsquo;
                    <i>Oof, I just don&apos;t want to risk that.</i>&rsquo; I&apos;d rather have the side effects from
                    the vaccine than roll the dice with getting the real disease.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Something to think about here is your risk of getting COVID. Because if you got COVID, obviously you
                    could have much even more significant symptoms, right? I mean you could get super sick from that.
                    Much sicker than you might feel from a side effect.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Are you kidding me? So every single day, about 20 times a day, you pop open a cigarette pack. A pack
                    that says: &lsquo;this thing will kill you&rsquo;. And you&apos;ve been doing that for 20 years and
                    now you&apos;re going to stand there and tell me that you&apos;re afraid of a one in a million
                    chance of a severe adverse event? You&apos;re afraid of that when your cigarette package tells you
                    you&apos;re definitely going to die from those things? This is the time you&apos;re going to be
                    worried about a potential side effect?!
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    &#91;When coordinating vaccination around life events&#93; I mean you could get the first shot and
                    see how you feel. Then with the second shot, you can postpone it if you wanted since you&apos;re at
                    a little bit higher risk of feeling a bit flu-like for a couple days. That would be reasonable. I
                    mean my first recommendation would be to do them both as soon as you can just because COVID is such
                    a bad disease.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      //SIDEEFFECTS RESOURCES
      resources: [
        {
          label: <>How to explain side effects without scaring patients</>,
          image: "",
          linkTitle: <>General advice to clinicians</>,
          link: "https://www.singlecare.com/blog/explain-side-effects/",
          description: <>Advice to clinicians on how to discuss side effects with patients. (Feb 2020)</>,
        },

        {
          label: <>Five Ways to Communicate Risk So That Patients Understand</>,
          image: "",
          linkTitle: <>AAFP Article</>,
          link: "https://www.aafp.org/fpm/2018/1100/p28.html",
          description: (
            <>
              Tips on how to communicate risks in understandable, patient-friendly ways. From the American Academy of
              Family Medicine. (2018)
            </>
          ),
        },

        {
          label: <>Are there long-term side effects caused by mRNA COVID-19 vaccines? How do we know?</>,
          image: "",
          linkTitle: <>FAQ page from ImmunizeBC</>,
          link: "https://immunizebc.ca/ask-us/questions/are-there-long-term-side-effects-caused-mrna-covid-19-vaccines-how-do-we-know",
          description: (
            <>ImmunizeBC examines the question of long-term side effects from COVID-19 vaccines. (Updated, June 2021)</>
          ),
        },

        {
          label: <>Alberta Health: Myocarditis and/or Pericarditis following COVID-19 Vaccines</>,
          image: "",
          linkTitle: <>Medical advisory from Alberta Health for Medical Professionals</>,
          link: "https://www.alberta.ca/assets/documents/health-QA-myocarditis-and-pericarditis-following-covid.pdf",
          description: (
            <>Alberta Health compiled information on myocarditis and pericarditis following COVID vaccination. Targeted for medical professionals. (Updated, July 2021)</>
          ),
        },

        {
          label: <>Alberta Health: COVID-19 Vaccine - Care After Immunization</>,
          image: "",
          linkTitle: <>Information about side effects and care after COVID-19 vaccination</>,
          link: "https://myhealth.alberta.ca/health/pages/conditions.aspx?Hwid=custom.ab_imm_covid19vaccine_ac",
          description: (
            <> (Updated, July 2021)</>
          ),
        },

        {
          label: <>Mixing Vaccines Provides Strong Protection: NYTimes Article</>,
          image: "",
          linkTitle: <>NYTimes Article: Mixing Pfizer and Astra Zeneca Provides Strong Protection</>,
          link: "https://www.nytimes.com/2021/06/28/health/mixing-pfizer-astrazeneca-results.html",
          description: (
            <>
              {" "}
              Media coverage with links to studies showing that mixing vaccine types provides strong immunity. (June
              2021)
            </>
          ),
        },

        {
          label: <>MayoClinic - COVID-19: Long-term effects</>,
          image: "",
          linkTitle: <>MayoClinic Info on Long-COVID</>,
          link: "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-long-term-effects/art-20490351",
          description: <>MayoClinic&apos;s infopage on the long-term effects of COVID and long-COVID. (May 2021)</>,
        },
      ],
    },
  },

  Conspiracies: {
    tags: ["", ""],
    related: ["PoliticalSkeptic", "ScienceConcerns", "Unconcerned"],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy3.svg",
        content: [
          <>
            &ldquo;I don&apos;t trust the government telling me what I need to do when they haven&apos;t led us down the
            right road, in my view, to this day.&rdquo;
          </>,
          <>
            &ldquo;I don&apos;t think pharmaceutical companies/Big Pharma have our best interest in mind. They&apos;re
            all about making profits.&rdquo;
          </>,
          <>
            &ldquo;I&apos;m not going to be injected with a vaccine developed by Bill Gates to control the
            population.&rdquo;
          </>,
          <>&ldquo;Mainstream media is ignoring the facts of the virus. It&apos;s overhyped panic.&rdquo;</>,
          <>&ldquo;How can we be sure there are no chips involved in the vaccines?&rdquo;</>,
          <>
            &ldquo;It&apos;s an unapproved vaccine. I won&apos;t be taking any unapproved experimental drugs that are
            only in use because they fall under an emergency order.&rdquo;
          </>,
        ],
      },
      thingsToConsider: {
        image: "/images/peopleIcons/doctorBlackManBeard.svg",
        content: [
          <>Reaffirm your position as an ally and role as trusted provider of health information.</>,
          <>Pose hypothetical situations or scenarios to help show patients alternatives to their current views.</>,
          <>
            Work with the patient to identify situations or scenarios that would change their mind about the vaccines.
          </>,
          <>
            Emphasize that your perspective as a healthcare provider is different than a patient&apos;s, and work to
            find middle ground based on shared experiences and understandings.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            There’s a firehose of information out there and it can be difficult to understand. Working with your
            patient, as an equal, you can review that information together and come to a mutual understanding that meets
            their health goals.
          </>,
        ],
      },
    },
    // conspiracies
    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              It&apos;s been a really hard year for me as a physician and for my colleagues. And yeah, my own personal
              experience has been seeing a lot of sick patients, a lot of scared patients when they&apos;ve become
              contacts &#91;of cases&#93; and stuff. And I hear you, you&apos;re saying that hasn&apos;t really been
              your experience. So what do you think is the end game &#91;for pharmaceutical companies&#93;, aside from
              making money off of the vaccines? Talk to me a little bit about what you think the benefit is for pharma
              in creating this whole situation. How are they winning?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I hear you, that you don&apos;t trust the government on this, but I&apos;ve been doing my own research,
              because I&apos;m with you on this issue. I think they haven&apos;t earned our trust all the way around,
              right? So that&apos;s why I&apos;ve been doing my reading. I&apos;ve been making sure that I&apos;m fully
              up to date, so I can provide the right advice to the people I really care for.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        ask: {
          text: (
            <>
              Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked together
              for &#91;<i>x amount of time</i>&#93;, so I&apos;m hoping you might appreciate that I look at this vaccine
              with a different lens than what you&apos;ve heard in the media.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManYoung.svg",
        },
        evoke: {
          text: (
            <>
              You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face and
              have some of that comradery with your colleagues. You mentioned your kids going back to school in a normal
              way. What would you be willing to pay for that? What would you be willing to give for that?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
        },
      },
      // conspiracies
      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    It&apos;s been a really hard year for me as a physician and for my colleagues. And yeah, my own
                    personal experience has been seeing a lot of sick patients, a lot of scared patients when
                    they&apos;ve become contacts &#91;of cases&#93; and stuff. And I hear you, you&apos;re saying that
                    hasn&apos;t really been your experience. So what do you think is the end game &#91;for
                    pharmaceutical companies&#93;, aside from making money off of the vaccines? Talk to me a little bit
                    about what you think the benefit is for pharma in creating this whole situation. How are they
                    winning?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I think I&apos;m hearing you say that when it comes to COVID-19, it&apos;s all very much black or
                    white. Either, I&apos;m all wrong as a physician, as a scientist, and you have it all right. And if
                    I&apos;m wrong then it&apos;s a total sham and it&apos;s made up and it&apos;s entirely about
                    government control. Or it&apos;s got to be the other way around and you&apos;re all wrong and that
                    would not be a comfortable position for you, I can imagine. I think, maybe, it&apos;s not quite so
                    black and white. I certainly don&apos;t think you&apos;re all wrong, but maybe you don&apos;t think
                    I&apos;m totally wrong either.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I hear you, that you don&apos;t trust the government on this, but I&apos;ve been doing my own
                    research, because I&apos;m with you on this issue. I think they haven&apos;t earned our trust all
                    the way around, right? So that&apos;s why I&apos;ve been doing my reading. I&apos;ve been making
                    sure that I&apos;m fully up to date, so I can provide the right advice to the people I really care
                    for.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    You don&apos;t trust the pharmaceutical industry. And that&apos;s fair because let&apos;s face it
                    &mdash; the number one threat to evidence-based practice right now is deliberate distortion of
                    entire literatures by the pharmaceutical industry. So I don&apos;t blame you for not trusting Big
                    Pharma. I don&apos;t either. On the other hand, the doubt about vaccines was created by a guy who
                    basically committed a fraud for his own profit &#91;
                    <a
                      href="https://www.bmj.com/content/342/bmj.c5347"
                      className="orangeLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      source
                    </a>
                    &#93;. So you got to be alert for scams on both sides of this.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    This concern is something I&apos;ve heard quite a bit from my patients. And I can see why people are
                    thinking about it. So, because of that, I&apos;ve done a fair bit of research in this space to make
                    sure that I could effectively answer people&apos;s questions and concerns.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    The media coverage of this has been really challenging to follow, eh? It seems like every day
                    there&apos;s something new and it contradicts what was said before, which can make it even more
                    difficult to tease out what&apos;s helpful.
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    It sounds like you&apos;re really concerned about the government and other people making decisions
                    for you and that it&apos;s almost like your decision-making &#91;is being hindered&#93; by the
                    government and public health, is that fair?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked
                    together for &#91;x amount of time&#93;, so I&apos;m hoping you might appreciate that I look at this
                    vaccine with a different lens than what you&apos;ve heard in the media.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    You&apos;re doing Internet research, and so am I. I&apos;m right there with you, and it&apos;s
                    really confusing, isn&apos;t it? Can we compare notes?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Would it be okay to share someone else&apos;s experience with you? I could email you some{" "}
                    <a
                      href="https://youtu.be/7sgAdgqOFQs"
                      className="orangeLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      links
                    </a>{" "}
                    with other people who had, I think, similar mistrusts as yours. Would that be helpful?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Can I personally vouch for every CEO of every Big Pharma company? Can I personally vouch that no one
                    in history has ever done something shady to try and make money? Absolutely I can&apos;t. And yet in
                    my work, every single day I see people&apos;s whose lives are changed for the better, as a result of
                    drug therapies developed by pharmaceutical companies. I see people who live longer, fuller lives
                    because we&apos;re able to use the medications that are out there. And the vaccine is one of those
                    drugs &mdash; longer, fuller lives for all of us. Better lives. Lives without masks and distancing
                    and restrictions.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    As far as these vaccines go, I don&apos;t necessarily need you to trust &#91;politicians&#93;, but I
                    do think you should trust me. These are good vaccines. They keep people from dying from the virus.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    When you get the injection, it comes with a needle that has an opening less than a millimeter wide.
                    We make microchips all the time. We don&apos;t make them that small. There has to be some degree, of
                    faith, I guess, in that regard. Look at the needles they use to inject the microchips into dogs
                    &mdash; we&apos;re talking about almost 3 millimeters wide to fit the chip. We just don&apos;t have
                    chips small enough to fit into these vaccine syringes.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // conspiracies
              {
                text: (
                  <>
                    I get to see lots of people, lots of different experiences, and have a different perspective than
                    the average person who just knows the people in their family and immediate surroundings. What I know
                    is that lots and lots of people got sick, and a small percentage of people got very, very sick.
                    You&apos;re exactly right. The problem is that a small percentage of a large number of people piles
                    up, and every case that ends up in the intensive care unit stays there for three weeks, on average,
                    and of those, probably about 30&#37; of them die.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    &#91;<i>If patient brings up adverse event reports.</i>&#93; You are comparing this vaccine to other
                    vaccines &mdash; the more appropriate comparison is the deaths from a vaccine to the deaths and
                    impact of the disease it is protecting us from. The vaccines for COVID have also been studied in
                    much higher numbers of people than any other vaccine and have been rolled out to more people than
                    any other vaccine &mdash; so it makes sense that we would see more adverse outcomes &#91;than with
                    other vaccines&#93;.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // conspiracies
              {
                text: (
                  <>
                    So do you remember Ebola and another virus called MERS, M-E-R-S? We love our acronyms in science!
                    But, researchers were actually looking at mRNA technology to fight those two conditions but they
                    disappeared too quickly, so the mRNA technology was put on the shelf...
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "redTapemRNA",
                fullStoryLinkText: "Read the full story",
              },
            ],
          },
        ],
      },
      // conspiracies
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face
                    and have some of that comradery with your colleagues. You mentioned your kids going back to school
                    in a normal way. What would you be willing to pay for that? What would you be willing to give for
                    that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                    for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                    doing?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // conspiracies
              {
                text: (
                  <>
                    You understand the pandemic based on your sources &#91;of truth&#93;, but what would have to happen
                    in your immediate vicinity to convince you to rely on something other than those sources? If, for
                    example, say someone you were close to actually got sick enough to need to be in ICU and intubated,
                    would that change your opinion? Hypothetically?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I see what you&apos;re saying. Well, if I was going to put my evil thinking cap on, if I was trying
                    to create a situation where absolutely everyone would want to get a vaccine, I wouldn&apos;t give
                    them something similar to what we&apos;ve seen before, like the flu. I&apos;d go big. I&apos;d be
                    like, &lsquo;
                    <i>Okay, Im going to create something that&apos;s going to make everyone&apos;s skin turn purple</i>
                    &rsquo;, and the only way to fix it is by taking a vaccine. Because no one wants to walk around
                    looking purple and it would be really visible. I also wouldn’t have the disease kill anyone because
                    you can&apos;t sell a vaccine to someone who is already dead. So I guess if that was their
                    &#91;e.g., pharmaceutical companies&apos;/the government&apos;s&#93; real objective, they maybe
                    didn&apos;t come up with the right disease.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // conspiracies
              {
                text: (
                  <>
                    What if someone within your circle &#91;of family or friends&#93; got vaccinated, maybe for some
                    other reason? Maybe they&apos;ve got some underlying problems and their physician put out a case for
                    them that changed their mind. Hypothetically, if someone you knew had gotten a COVID vaccine, would
                    that nudge you away from where you&apos;re at right now?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    Tell me what you would have to hear or see or which person you would need to stand up and speak in
                    favour of vaccines, for you to switch from this clearly, really hard &lsquo;no&rsquo; over to a
                    &lsquo;maybe&rsquo;?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // conspiracies
              {
                text: (
                  <>
                    After all these years of working together, would you include information that you receive from me as
                    credible?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I think what I&apos;ve heard you say here is that if we talk about this in hypotheticals you see
                    some situations where you could potentially change your mind.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Conspiracies)
      resources: [
        {
          label: <>How to take on COVID conspiracy theories</>,
          image: "",
          linkTitle: <>Financial Times news article</>,
          link: "https://www.ft.com/content/6660cb80-8c11-476a-b107-e0193fa975f9",
          description: (
            <>News article examining the spread of misinformation, and some advice on how to counter it. (Feb 2021)</>
          ),
        },

        {
          label: <>Winning Hearts and Minds</>,
          image: "",
          linkTitle: <>Johns Hopkins University interview</>,
          link: "https://hub.jhu.edu/2021/06/30/winning-hearts-and-minds/",
          description: (
            <>
              Interview with public health expert Jennifer Nuzzo of JHU about vaccine hesitancy conversations. (June
              2021)
            </>
          ),
        },

        {
          label: <>To counter conspiracy theories, boost well-being</>,
          image: "",
          linkTitle: <>Nature journal blog article</>,
          link: "https://www.nature.com/articles/d41586-020-03130-6",
          description: (
            <>Expert on countering misinformation looks at various approaches to these conversations. (November 2020)</>
          ),
        },

        {
          label: <>Six rules of engagement</>,
          image: "",
          linkTitle: <>The Conversation news article</>,
          link: "https://theconversation.com/ive-been-talking-to-conspiracy-theorists-for-20-years-here-are-my-six-rules-of-engagement-143132",
          description: <>Discussion looking at how to engage with misinformation and conspiracies. (July 2020)</>,
        },
      ],
    },
  },

  Naturalist: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>
            &ldquo;The vaccines are unnatural. I&apos;d rather get COVID and build my immune system the natural
            way.&rdquo;
          </>,

          <>&ldquo;The vaccines have toxins in them. I don&apos;t want to put toxins into my body.&rdquo;</>,

          <>
            &ldquo;I would prefer to use natural remedies to protect myself &#40;e.g. vitamins, zinc, oregano
            oil&#41;.&rdquo;
          </>,

          <>
            &ldquo;I&apos;ve heard that some &#40;supplements/probiotics/remedies&#41; can help prevent or minimize the
            symptoms from COVID.&rdquo;
          </>,

          <>
            &ldquo;I had chicken pox at 8, shingles at 38 and I&apos;m still living. I don&apos;t see the need to get
            vaccinated.&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        content: [
          <>
            Respect patient treatment choices, including preferences for complementary and alternative medicine
            &#40;CAM&#41;. Avoid dismissing perspectives and correcting misinformation.
          </>,
          <>
            Stress that the goals of CAM and primary care medicine are aligned and that the vaccines are embraced by
            both.
          </>,
          <>
            Try to gain a better understanding of what the patient believes to be &apos;natural&apos; versus
            &apos;unnatural&apos;.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Remember that the goal for you and your patient is mutual&#58; to maximize their health and wellbeing. Help
            your patient see that vaccines can leverage their natural immunity and ultimately promote longevity.
          </>,
        ],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              So when you say &lsquo;natural&rsquo;, I just want to make sure we&apos;re on the same page about that,
              because I know we&apos;re on the same page about our end goal. We both want you to be well. So just help
              me understand what you mean by natural as it relates to the vaccine.
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I know that after all these years working together that your health and your ability to live a long,
              healthy life has always been a big part of what defines you. Is that what you would say if you were
              describing yourself?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              So, mRNA is something that is in our bodies already. We all make it as part of how we make protein and so
              I just want to reassure you that that&apos;s not some unnatural thing. It&apos;s something that triggers
              your own body to make the proteins that you then make antibodies for.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              I guess the concern I have, is that the COVID infection itself may not be natural either. And so we might
              have to take special pains to keep you protected from it. And I can&apos;t think of a more natural way to
              protect yourself than the vaccine, right?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    So when you say &lsquo;natural&rsquo;, I just want to make sure we&apos;re on the same page about
                    that, because I know we&apos;re on the same page about our end goal. We both want you to be well. So
                    just help me understand what you mean by natural as it relates to the vaccine.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: <>Can you tell me more about what you mean by &lsquo;natural immunity&rsquo;? </>,
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What kinds of medications or medical products do you feel comfortable using to &lsquo;boost your
                    immunity&rsquo;? Are there any specific ingredients you do not feel comfortable taking?{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I know that after all these years working together that your health and your ability to live a long,
                    healthy life has always been a big part of what defines you. Is that what you would say if you were
                    describing yourself?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I see how getting the vaccine might feel like it&apos;s not the same kind of thing as what
                    you&apos;ve been doing to keep yourself healthy normally, I get that.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I think what can happen when we&#39;re in a situation like we are with COVID right now is oftentimes
                    when we&apos;ve lived a really healthy life and we&apos;ve done everything we can to be as healthy
                    as we can, we start to get nervous about things that are new. We can get a feeling like these new
                    medicines might disrupt our normal, healthy routines.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You know I have your back. I want you to achieve your goals. I want you to be healthy just like you
                    want to be healthy. I think we&apos;re the same there.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I think for a young, healthy person like you, the likelihood is that COVID is not going to kill you.
                    I&apos;m not here to lie to you. You know I have your back.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                    different options that might be available to you to. Do you think it might be okay if I tell you a
                    little bit about what I know, as opposed to maybe what you&apos;re hearing about from other sources?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked
                    together for &#91;<i>x amount of time</i>&#93;, so I&apos;m hoping you might appreciate that I look
                    at this vaccine with a different lens than what you&apos;ve heard from some of your other sources.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I think that the vaccine that we have today is very safe and it&apos;s actually very simple.
                    It&apos;s hard to make, but it&apos;s very simple. So, there&apos;s not a lot of extra chemicals in
                    there. There are no other ingredients in the vaccine, other than the fatty stuff they use to allow
                    us to inject it.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I&apos;d like to give you another way to think about the vaccines. I&apos;m not saying you&apos;re
                    thinking is wrong, but I&apos;m just giving you another way to think about them. A vaccine is a
                    teacher. Your immune system is one of the most amazing learning machines in the known universe. The
                    vaccine just stands in front of your genius immune system and shows it a piece of the virus, and
                    says: &lsquo;
                    <i>Hey, this is the bad stuff. This is what you want to attack.</i>&rsquo; And off your immune
                    system goes!
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Can I give you another way to think about the vaccines? The vaccine is like a cop &mdash; a homicide
                    detective. When it goes into your arm it&apos;s like giving the bad guy&apos;s glove to the police
                    dog to sniff. Your immune system is that attack dog. The vaccine goes in and waves the
                    suspect&apos;s glove in front of the attack dog. It&apos;s like the vaccine is saying: &lsquo;
                    <i>This is what you&apos;re after.</i>&rsquo; And once your immune system has that scent, it&apos;s
                    on a mission!
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    <i>Amount</i> is the key word with anything you&apos;re putting in your body. Now, there are some
                    things that are so poisonous that any amount is the wrong amount. Plutonium &#91;which is
                    radioactive&#93; is so toxic that even the tiniest amount will make you sick. Let me give you
                    another example of selenium. One reason we don&apos;t want coal mines is because they put selenium
                    into the water at a level that will, even though it&apos;s only millionths of a gram, will kill the
                    fish, make people sick, can&apos;t use the water, ruin people&apos;s wells. So selenium is pretty
                    toxic in those amounts. But here&apos;s the funny thing: if you have no selenium, you&apos;ll die.
                    That&apos;s why you find selenium in multivitamins. It&apos;s amount that&apos;s key.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    …I&apos;m not worried about propylene glycol. Yeah they use it in windshield washer fluid.
                    That&apos;s not because it&apos;s toxic, that&apos;s because it doesn&apos;t freeze. And remember
                    they have to keep the vaccines in a freezer. It&apos;s an antifreeze that is safe for people in tiny
                    amounts. And the amounts we&apos;re talking about here &#91;in the vaccines&#93; are insanely tiny.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    It&apos;s leveraging your natural immunity, it&apos;s giving your natural immune system a hint as to
                    what COVID looks like, and getting your natural immune system ready for it. So of all the options, I
                    just feel like it&apos;s pretty natural one, really.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So your immune system is kind of like your language system. If you don&apos;t learn a language, if
                    you don&apos;t learn to read when you&apos;re young, you can do it when you&apos;re older, but
                    you&apos;re never good at it. You&apos;ll never be a native speaker. You&apos;ll never be a good
                    reader if you don&apos;t learn it when you&apos;re little, because that&apos;s when your brain is
                    primed to learn this stuff. And when you&apos;re young is when your immune system is primed to learn
                    this stuff too. Now that&apos;s not great news for people like me in our sixties who are getting the
                    vaccine. And that&apos;s why if you read this stuff, you&apos;ll see people my age just don&apos;t
                    develop the immune response. We get some, but we just don&apos;t develop the immune response that
                    younger people do because we&apos;re too far past that, what we call it, a critical period.
                    That&apos;s what the language teachers talk about. We&apos;re too far past that. I mean, I could
                    learn Mandarin. I&apos;ve learned a few words, but I&apos;ll never be an actual Mandarin speaker. If
                    I&apos;d started when I was 10. I could have been. And your immune system works that way. It&apos;s
                    an avid learner.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The vaccine doesn&apos;t stay in your body forever. It&apos;s just like any kind of medication you
                    take, like a pill you take by mouth. It doesn&apos;t stay in your body forever. It gets flushed out
                    of your body in a few days, naturally.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I guess the concern I have, is that the COVID infection itself may not be natural either. And so we
                    might have to take special pains to keep you protected from it. And I can&apos;t think of a more
                    natural way to protect yourself than the vaccine, right?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I hear you, but I guess I can&apos;t quite follow what&apos;s natural in all this. It&apos;s natural
                    when you get appendicitis to let it explode and potentially get in big trouble from that. It&apos;s
                    arguably unnatural to have a surgeon cut it out. But for sure you would want that. And I think
                    there&apos;s other kinds of medical inventions that you would want to take advantage of if you
                    really needed it. COVID-19 is one of the moments where we all really need it. Our natural immune
                    response just needs a kick from the vaccine. That&apos;s much less invasive than surgery for an
                    appendix.
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    But what does concern me is that you could be the link in a chain for somebody else ending up in the
                    ICU. Whether that&apos;s your friends, or your family members. Do you absolutely need this vaccine?
                    Maybe not, maybe it&apos;d be fine. But do we as a community need this vaccine? I think we do. The
                    vaccine helps stop the transmission chains and gets us back to normal, natural life.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Naturalist)
      resources: [
        {
          label: <>Association of Accredited Naturopathic Medical Colleges Statement on COVID Vaccination (US)</>,
          image: "",
          linkTitle: <>Link to AANMC statement</>,
          link: "https://aanmc.org/featured-articles/aanmc-statement-on-covid-19-vaccination/",
          description: (
            <>AANMC issued a strong statement that all community members receive COVID vaccines. (January 2021)</>
          ),
        },

        {
          label: <>The COVID Choice</>,
          image: "",
          linkTitle: <>NDs for Vaccines article</>,
          link: "https://ndsforvaccines.com/the-covid-choice/",
          description: (
            <>
              Naturopathic doctors discuss the choice to get the COVID vaccine, with various approaches and
              considerations. (December 2020)
            </>
          ),
        },

        {
          label: <>Holistic Vaccine Support</>,
          image: "",
          linkTitle: <>Blog article from an ND</>,
          link: "https://www.drdianaquinn.com/blog/4ltwwd8s9657e93wr37xcx7ma7tj2w",
          description: (
            <>
              Naturopathic doctor discusses the various considerations for COVID vaccination. Approachable blog post for
              CAM-oriented patients. (January 2021)
            </>
          ),
        },

        {
          label: <>Opinion Article: I believe in natural health, but I also got my COVID-19 vaccine</>,
          image: "",
          linkTitle: <>Op-Ed in The Globe and Mail</>,
          link: "https://www.theglobeandmail.com/opinion/article-healthy-skepticism-doesnt-necessarily-mean-rejecting-mainstream/",
          description: (
            <>
              Author and patient committed to natural health explains why they decided to get the COVID vaccine. (July
              2021)
            </>
          ),
        },
      ],
    },
  },

  PoliticalSkeptic: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy2.svg",
        content: [
          <>&ldquo;I&apos;m not going to let the government have control over what goes into my body.&rdquo;</>,
          <>
            &ldquo;This virus has been completely politicized. If you want me to trust the science, you have to take the
            politics out of it.&rdquo;
          </>,
          <>
            &ldquo;The Government is interfering in our lives, and this vaccine is just another part of that
            overreach.&rdquo;
          </>,
          <>
            &ldquo;&#91;Corporations/Governments&#93; should not be telling us whether we have to take a vaccine or
            not.&rdquo;
          </>,
        ],
      },
      thingsToConsider: {
        image: "/images/peopleIcons/doctorBlackManBeard.svg",
        content: [
          <>Emphasize patient autonomy and validate deliberations about the vaccines.</>,
          <>Situate yourself as a neutral source of truth and open to exploring their concerns.</>,
          <>Offer to explore facts and sources together.</>,
          <>
            Focus on personal benefits of getting vaccinated &#40;e.g. travel, socializing, recreational activities,
            etc.&#41;.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            After over a year of undergoing lockdowns and forced closures, it&apos;s time patients feel empowered to
            take their health into their own hands. You can help your patient evaluate options for and against
            vaccination, and discuss what both possibilities mean for their freedom and independence.
          </>,
        ],
      },
    },
    // PoliticalSkeptic
    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              I really want us to go back to how things were in 2019. For me, the best tool for us to get back there is
              the vaccine because once we&apos;re all protected with the vaccine then we will be able to resume our
              normal lives. What are your thoughts?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              It sounds like you&apos;re really concerned about the government and other people making decisions for you
              and that it&apos;s almost like your ability to make decisions &#91;is being hindered&#93; by the
              government and public health, is that fair?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              I find it nutty these days: as quickly as you&apos;ve made a decision, all the information changes. And I
              can see for folks who haven&apos;t studied vaccines and haven&apos;t studied diseases, that it looks like
              the government is flipping and flopping all over the place and they don&apos;t know what the heck
              they&apos;re doing. But there&apos;s a difference between that high level government stuff – the school
              and business closures and all that. There&apos;s a difference between that stuff and what you and I are
              talking about right now.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              I know you love to &#91;go
              travelling/&#8203;camping/&#8203;outdoors/&#8203;clubbing/&#8203;dining/&#8203;etc.&#93;. And I&apos;m
              pretty sure you&apos;d rather be able to work face to face and have some of that comradery with your
              colleagues. I&apos;m pretty sure you&apos;d rather have your kids back to school in a normal way. What
              would you be willing to pay for that? What would you be willing to give for that?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // PoliticalSkeptic
      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I think on the one hand, I&apos;m hearing you say that you&apos;re very much black or white around
                    this. It&apos;s either I have it all wrong as a physician, as a scientist, and you have it all
                    right. That this is a sham and it&apos;s made up and the whole thing is about government control. Or
                    it&apos;s got to be the other way around, that you&apos;re all wrong and everyone had good
                    intentions towards one another. All &apos;kum-bye-yah&apos; and nice. I think there&apos;s some room
                    in between those. Some grey. And I can understand that if it&apos;s black and white, you would need
                    to win. But I&apos;m not here to try to win. I&apos;m here as your doctor. I&apos;m not part of the
                    government. I&apos;m here to talk about the grey in between. Where some of it is a sham, for sure,
                    and some of it is really effective. Can we have that conversation?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I really want us to go back to how things were in 2019. For me, the best tool for us to get back
                    there is the vaccine because once we&apos;re all protected with the vaccine then we will be able to
                    resume our normal lives. What are your thoughts?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    It sounds like you&apos;re really concerned about the government and other people making decisions
                    for you and that it&apos;s almost like your ability to make decisions &#91;is being hindered&#93; by
                    the government and public health, is that fair?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, I hear you that you don&apos;t trust the government on this. I&apos;m with you on that.
                    It&apos;s why I&apos;ve been doing my own research, because I&apos;m with you. I don&apos;t think
                    they&apos;ve earned our trust, right? So, I&apos;ve been making sure that I&apos;m fully up to date,
                    so I can provide the advice that I want to provide to the people I really care for.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // PoliticalSkeptic
              {
                text: (
                  <>
                    What I&apos;m hearing is that you want to get back to normal life, is that right? You want to be
                    able to enjoy those activities that you enjoyed all of your life without being encumbered by
                    physical distancing and masking. Is that what I&apos;m hearing?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: <> </>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I find it nutty these days: as quickly as you&apos;ve made a decision, all the information changes.
                    And I can see for folks who haven&apos;t studied vaccines and haven&apos;t studied diseases, that it
                    looks like the government is flipping and flopping all over the place and they don&apos;t know what
                    the heck they&apos;re doing. But there&apos;s a difference between that high level government stuff
                    &mdash; the school and business closures and all that. There&apos;s a difference between that stuff
                    and what you and I are talking about right now. Are they getting some of those high-level calls
                    wrong? Probably. But when it comes to the vaccines, I can tell you&apos;re they&apos;re 100% on
                    track. My job is to work with you to think about what&apos;s in the best interest of you and your
                    health. And I can tell you that the vaccines are in your best interests and very good for your
                    health.
                  </>
                ),
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What we&apos;re trying to do as physicians is to help people to see that the more we do this one
                    last thing of getting vaccinated, the more quickly we can start to peel off all those restrictions
                    and get back to a sense of normal, like before COVID.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // PoliticalSkeptic
              {
                text: (
                  <>
                    Here&apos;s what I&apos;ve learned. Around the world, hundreds of millions of people have had these
                    vaccines. In terms of the development, yes they went pretty quickly from &lsquo;
                    <i>what is this virus?</i>
                    &rsquo; to, &lsquo;<i>let&apos;s build a vaccine for it</i>&rsquo;. But they actually didn&apos;t
                    skip any steps. I looked into it.{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "quickDevelopment",
                fullStoryLinkText: "Read the full story",
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I know you love to &#91;go
                    travelling/&#8203;camping/&#8203;outdoors/&#8203;clubbing/&#8203;dining/&#8203;etc.&#93;. And
                    I&apos;m pretty sure you&apos;d rather be able to work face to face and have some of that comradery
                    with your colleagues. I&apos;m pretty sure you&apos;d rather have your kids back to school in a
                    normal way. What would you be willing to pay for that? What would you be willing to give for that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                    for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                    doing?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // PoliticalSkeptic
              {
                text: (
                  <>
                    You&apos;re right, you could look at the people getting the vaccine as sheep. Just following what
                    the government is saying. But in this case I&apos;m not the government, I&apos;m telling you that
                    this is a really good idea. But you could still just see everyone who&apos;s doing it as a sheep.
                    That&apos;s fair. My follow up question would be: Who are the group that&apos;s not getting the
                    vaccines following? Aren&apos;t they just sheep of a different colour? We all have to put some faith
                    in things, I get it. And I&apos;m offering you some perspectives that you can put some faith in.
                    I&apos;m your doctor, not the government. You don&apos;t have to put any stock in what I say, but
                    I&apos;m hoping you&apos;ll consider it alongside the other ideas you&apos;re following.
                  </>
                ),
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So I think, it sounds to me if you knew that it would be clearly the path to getting you back to
                    &#91;social activities&#93;, and getting the kids back to school, and getting normal again, then
                    it&apos;s time. Then it&apos;s time for you to say, &lsquo;<i>Okay, I see the benefit here</i>
                    &rsquo;. And until then you&apos;re living sort of like a hermit and it&apos;s not a good bargain in
                    your mind right now.{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (PoliticalSkeptic)
      resources: [
        {
          label: <>A Guide to Global COVID-19 Vaccine Efforts</>,
          image: "",
          linkTitle: <>Council on Foreign Relations Backgrounder</>,
          link: "https://www.cfr.org/backgrounder/guide-global-covid-19-vaccine-efforts",
          description: (
            <>CFR backgrounder looking at the development of the vaccines and who was involved. (Updated, June 2021)</>
          ),
        },

        {
          label: (
            <>
              Organization for Economic Co-operation and Development (OECD): Enhancing public trust in COVID-19
              vaccination: The role of governments
            </>
          ),
          image: "",
          linkTitle: <>OECD Policy Responses to COVID-19</>,
          link: "https://www.oecd.org/coronavirus/policy-responses/enhancing-public-trust-in-covid-19-vaccination-the-role-of-governments-eae0ec5a/",
          description: (
            <>
              OECD overview of the role of governments globally in vaccination programs and efforts, including building
              trust with the public. (May 2021)
            </>
          ),
        },

        {
          label: <>Focus Group: Vaccine hesitancy conversation</>,
          image: "",
          linkTitle: <>YouTube video</>,
          link: "https://youtu.be/lSD_dSAFFwU",
          description: (
            <>
              Focus group discussion with a US-based Republican pollster and vaccine hesitant individuals who changed
              their mind about the vaccine. (March 2021)
            </>
          ),
        },
      ],
    },
  },

  Religious: {
    // Moral or Religious Objections
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy3.svg",
        content: [
          <>
            &ldquo;Taking the vaccine goes against my religious beliefs. My concern is more of a religious
            position.&rdquo;
          </>,

          <>&ldquo;It&apos;s up to God if I get COVID and whether I die from this disease.&rdquo;</>,
          <>
            &ldquo;It&apos;s safer to keep washing your hands, stay away from people and drink orange juice until the
            Devil&apos;s coronavirus work passed over.&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorBlackWoman.svg",
        content: [
          <>Emphasize that taking a vaccination is a moral act &#40;e.g. an act of neighbourly love&#41;.</>,
          <>
            Emphasize that religious authorities around the world have declared the vaccines and vaccination to be
            morally acceptable and advisable.
          </>,
          <>Consider highlighting the shared values between the vaccine scientists and the religious community.</>,
          <>Emphasize vaccination as a key part to getting back to worshipping in person.</>,
        ],
      },
      // Moral or Religious Objections

      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            The majority of religious leaders and organizations have come out in favour of the COVID-19 vaccines. Remind
            patients that these vaccines can help us return to normal life, including being able to worship together in
            person.
          </>,
        ],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              I&apos;m interested &mdash; can you tell me what your specific &#91;e.g. denomination/sect/community&#93;
              says about the vaccine? Can you tell me what you&apos;ve heard so I can better understand that and how it
              relates to your health?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        affirm: {
          text: (
            <>
              I think when we have that place where we feel a sense of comfort in our &#91;e.g. faith/community&#93;, it
              can be really difficult when we get advice that doesn&apos;t necessarily align with what we&apos;re
              hearing from public health.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        ask: {
          text: (
            <>
              Would you be willing to let me send you some resources about this topic? Some patient resources that may
              help paint a picture about how these vaccines align with the teachings of your religion.{" "}
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        // Moral or Religious Objections

        evoke: {
          text: (
            <>
              I look at being vaccinated as a service to my patients and to my family and to my community. It&apos;s
              something I can do to keep them safe. So that&apos;s maybe another way to look at it alongside the other
              teachings from your faith.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // Moral or Religious Objections
      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;m interested &mdash; can you tell me what your specific &#91;e.g.
                    denomination/&#8203;sect/&#8203;community&#93; says about the vaccine? Can you tell me what
                    you&apos;ve heard so I can better understand that and how it relates to your health?{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Can you share some of the details about why your &#91;e.g.
                    imam/&#8203;minister/&#8203;priest/&#8203;officiant&#93; said the vaccine is a problem? Can we talk
                    about that a little bit more? Are there other viewpoints from the same religion that you&apos;re
                    aware of?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    Can you tell me more about why you think the vaccine goes against your religion? Can we talk about
                    that a little bit more?{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I am also a &#91;e.g. Muslim/&#8203;Christian/&#8203;Jew/&#8203;Hindu/&#8203;Sikh/&#8203;community
                    member&#93;, and I like to stay informed about the teachings. I haven&apos;t heard or read about any
                    teachings that are against immunization. Can you share a little more about what you&apos;ve heard?
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I think when we have that place where we feel a sense of comfort in our &#91;e.g.
                    faith/community&#93;, it can be really difficult when we get advice that doesn&apos;t necessarily
                    align with what we&apos;re hearing from public health.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I know that you&apos;re &#91;e.g. Jewish/&#8203;Christian/&#8203;Muslim/&#8203;etc.&#93;. And having
                    known you for the past few years, I know that you&apos;re following all the teachings. That is
                    important to you and I can completely appreciate that.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    So, I appreciate having concerns about how the vaccines were developed, and wondering if those go
                    against your faith.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    I don&apos;t want you to feel disconnected from your &#91;e.g. faith/community&#93; at all. I also
                    don&apos;t want you to get COVID because I think the reaction that you could have could be pretty
                    significant.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Would you be willing to let me send you some resources about this topic? Some patient resources that
                    may help paint a picture about how these vaccines align with the teachings of your religion.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    There was a great{" "}
                    <a
                      href="https://www.cccb.ca/wp-content/uploads/2021/03/CLARIFICATION-CCCB-Statement-on-COVID-19-Vaccine-Choice-9-March-2021-EN.pdf"
                      className="orangeLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      document
                    </a>{" "}
                    that I saw with regards to the Canadian Catholic bishops on the vaccines. The bishops describe how
                    devout Catholics can conduct themselves and feel like they&apos;ve followed the teachings of the
                    church. So maybe I can share that with you through it if you&apos;d be interested?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    The Catholic church has{" "}
                    <a
                      href="https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20201221_nota-vaccini-anticovid_en.html"
                      className="orangeLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      come down in favor of the vaccinations
                    </a>{" "}
                    with some nuances. So maybe I can send that to you and then we can have a follow-up conversation to
                    discuss it in some more detail if you feel the need for that?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So I&apos;m &#91;e.g. Christian/Jewish/Muslim/Hindu/Sikh/First Nations&#93; myself, although I must
                    admit I&apos;m maybe not the best example. But I always reflect back to those kind of base
                    teachings: the idea that we do to others as we would have done to ourselves, and to make sure
                    we&apos;re conducting ourselves in a way that serves our communities.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I look at being vaccinated as a service to my patients and to my family and to my community.
                    It&apos;s something I can do to keep them safe. So that&apos;s maybe another way to look at it
                    alongside the other teachings from your faith.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, what if we did have an option that was not at all connected this important issue for you. What
                    if that was no longer a concern? Would you be interested in getting a vaccine if we had one that
                    would be okay by your &#91;e.g. faith/community&#93;?
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    I guess thinking more broadly, the risk to you and your neighbors, all of your other &#91;e.g.
                    church/community members&#93;, and your friends, and your family from this virus is... It&apos;s
                    quite huge.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    It&apos;s always hard to think about, but for me, if &#91;e.g.
                    God/&#8203;Allah/&#8203;Jaweh/&#8203;etc.&#93; really did feel that we shouldn&apos;t be vaccinating
                    people, I can&apos;t see how we would have managed to get as far as we have with medical science to
                    be able to get to the point where we can protect people. Medical science feels, to me, like an
                    extension of that divine will.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    If you look around the world to the countries that have managed to get these vaccines into
                    people&apos;s arms: they&apos;re getting back to normal life. They&apos;re able to worship together
                    as you would like to be able to do. I know that not being able to worship with the rest of your
                    community has been really hard on you this last year.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    The path forward is by protecting as many in our population as we can. Someone in a leadership role
                    like yourself or your community leader, can help ensure as many people as possible are protected.
                    You can lead by example and allow us to help those neighbours to get their businesses back up and
                    running.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Well &#91;e.g. God/&#8203;Yahweh/&#8203;Allah/&#8203;the Creator/&#8203;etc&#93; helped those people
                    who made the vaccine, and helped them make it really fast. And you know, it&apos;s like this
                    obviously has a divine hand in it, because look at how effective it is and how fast it&apos;s been
                    developed. For me, &#91;e.g. God/&#8203;Yahweh/&#8203;Allah/&#8203;etc&#93; works through scientists
                    and doctors.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Moral or Religious Objections
              {
                text: (
                  <>
                    &#91;Regarding the use of fetal stem cells in vaccine development&#93; We&apos;ve heard about how
                    some of the metals used in cell phones come from war-torn areas and there are children who are being
                    enslaved and all these terrible things. Does that mean that we should just all throw away our cell
                    phones? I mean it&apos;s a good question. We should think about this stuff. But there&apos;s also a
                    lot of good that has come of having this technology. We just need to think about maybe reforming the
                    way that they&apos;re made, and that&apos;s a long process and a different process. But right now,
                    the emergency is telling us that the most important thing is to protect each other and get back to
                    normal. The vaccines will help us do that.
                  </>
                ),

                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    If there are others in your community that want to chat through this with me, I totally understand
                    if they&apos;re getting information from other sources. But I&apos;m here for you, I&apos;m here for
                    the community. And like I said, I spent a lot of time trying to make sense of this information,
                    because I understand how confusing it can be.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Religious)
      resources: [
        {
          label: (
            <>
              Canadian Conference of Catholic Bishops - Note on Ethical Concerns Related to Currently Approved COVID-19
              Vaccines
            </>
          ),
          image: "",
          linkTitle: <>CCCB Statement on COVID vaccines</>,
          link: "https://www.cccb.ca/wp-content/uploads/2021/03/CLARIFICATION-CCCB-Statement-on-COVID-19-Vaccine-Choice-9-March-2021-EN.pdf",
          description: (
            <>
              CCCB issued a statement in support of vaccination and the ethical dimensions of the COVID vaccines, in
              alignment with the Vatican and the Holy See, in March 2021. This is their statement. (March 2021)
            </>
          ),
        },

        {
          label: (
            <>
              Congregation For the Doctrine of the Faith - Vatican: Note on the morality of using some anti-Covid-19
              vaccines
            </>
          ),
          image: "",
          linkTitle: <>Vatican Statement Supporting COVID-19 Vaccination</>,
          link: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20201221_nota-vaccini-anticovid_en.html",
          description: (
            <>
              The Vatican issued a statement in support of COVID vaccines, examining the ethical considerations of their
              development and the choice to vaccinate. (December 2020)
            </>
          ),
        },

        {
          label: <>Berkley Forum: Religion, Bioethics, and COVID-19 Vaccination</>,
          image: "",
          linkTitle: <>Editorial Forum with multiple perspectives</>,
          link: "https://berkleycenter.georgetown.edu/posts/religion-bioethics-and-covid-19-vaccination",
          description: (
            <>
              Editorial forum and report addressing faithful engagement with COVID vaccination, and multiple
              perspectives from multiple faith and health leaders. (February 2021)
            </>
          ),
        },

        {
          label: <>Imam’s Roundtable: COVID-19 Vaccines in the Muslim Community</>,
          image: "",
          linkTitle: <>YouTube video - virtual discussion</>,
          link: "https://youtu.be/wP-7tvq8P18",
          description: (
            <>
              Virtual roundtable/webinar to address Muslim community&apos;s questions about the COVID-19 vaccine, per
              Cleveland Clinic in the US. (March 2021)
            </>
          ),
        },
      ],
    },
  },

  PersonalTrauma: {
    // Personal Trauma
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>&ldquo;Last time I went to &#91;e.g. a clinic, hospital&#93; it didn&apos;t go well.&rdquo;</>,
          <>&ldquo;Doctors and nurses haven&apos;t treated me well when I&apos;ve needed their help.&rdquo;</>,
          <>&ldquo;I get really anxious in hospitals or clinics. I don&apos;t know if I can get vaccinated.&rdquo;</>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteManYoung.svg",
        content: [
          <>Ask the patient what they would need to feel safe to get the vaccine.</>,
          <>Differentiate your role as a vaccine advocate from larger healthcare/governmental systems.</>,
          <>
            Acknowledge and affirm the validity of personal past traumas/social anxiety that may affect willingness to
            get vaccinated.
          </>,
          <>Offer to help arrange alternative locations for receiving a vaccine.</>,
        ],
      },

      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Remember that despite previous negative experiences with bigger healthcare systems, this patient chooses to
            seek your health advice. Work with your patient as a team member to find ways to promote feelings of safety
            around getting the vaccine.
          </>,
        ],
      },
    },
    // Personal Trauma

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: <>What do you need to feel safe about getting vaccinated?</>,
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I know hospitals/clinics can be scary places and waiting can be frustrating. Going through the steps to
              actually get a vaccine can be challenging for so many reasons. I want to reassure you that we can work
              together to make this as easy a process as possible.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              I&apos;d like to try and see whether we can move past how things have gone, and focus on protecting you.
              Let&apos;s just forget the system. They can do what they want to do, but we want to make sure that we
              protect you because I really would worry that if you caught COVID, you would do quite badly.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              Can we arrange to have you get this somewhere else? More and more places have the vaccines available every
              day. Maybe we can find one that makes you feel more comfortable and safe.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // Personal Trauma

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: <>What do you need to feel safe about getting vaccinated?</>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    So, you&apos;re talking about a bad experience with the vaccine? In the past, did you have a bad
                    reaction or a bad experience getting the vaccine?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: <>What part about getting the vaccine worries you the most?</>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I know things have gone wrong in &#91;other healthcare settings&#93;. And it&apos;s been tough.
                    I&apos;m sorry about that. But I&apos;d like to think I have your back on this. You&apos;ve known me
                    for a long time, and I think we&apos;ve done a pretty decent job of keeping you healthy, and I
                    wouldn&apos;t lie to you. Hopefully, you feel that way, that I&apos;m pretty honest. I just really
                    want to get you protected.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I know hospitals/clinics can be scary places and waiting can be frustrating. Going through the steps
                    to actually get a vaccine can be challenging for so many reasons. I want to reassure you that we can
                    work together to make this as easy a process as possible.{" "}
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I hear you, that you don&apos;t trust the &#91;other healthcare settings&#93; to have your back on
                    this. They haven&apos;t earned your trust, right? And it&apos;s because they haven&apos;t earned
                    your trust that I&apos;ve been doing my reading. I&apos;ve been making sure that I&apos;m fully up
                    to date, so I can provide trustworthy advice to the people I really care for. I&apos;ve got your
                    back.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                    different options that might be available to you. Do you think it might be okay if I tell you a
                    little bit about what I know, as opposed to maybe what you&apos;re hearing about from other sources?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;d like to try and see whether we can move past how things have gone, and focus on protecting
                    you. Let&apos;s just forget the system. They can do what they want to do, but we want to make sure
                    that we protect you because I really would worry that if you caught COVID, you would do quite badly.
                    I&apos;d be quite worried about you, phoning you every day at the very least to check in on you, and
                    just worry that you&apos;d end up in hospital or worse.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Can we arrange to have you get this somewhere else? More and more places have the vaccines available
                    every day. Maybe we can find one that makes you feel more comfortable and safe.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I hear you: your past experiences have seen you lose so much. Your home, your culture. And
                    governments have been the problem. You have every reason to mistrust what the government is saying
                    with the vaccine. But I&apos;m hoping that you don&apos;t see me as part of the government because
                    I&apos;m not. This is about you and me finding the best things for your health, and the health of
                    your family. I&apos;ve been doing research &mdash; for everyone like you in my practice &mdash; and
                    that research is telling me that these vaccines aren&apos;t just safe, they are so much safer than
                    running the risk of not taking them. Choosing to vaccinate gives you power over the system. It lets
                    you take your freedom back into your own hands, and I think, from how we know one another, having
                    the power to decide what happens to you and your family is important to you.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      resources: [
        {
          label: <>International Society for Traumatic Stress Studies: What is medical trauma?</>,
          image: "",
          linkTitle: <>Fact sheet (patient-facing language)</>,
          link: "https://istss.org/ISTSS_Main/media/Documents/Public-Facing-Fact-Sheet-2.pdf",
          description: <>A public fact sheet examining medical trauma and coping advice for patients. (2020)</>,
        },

        {
          label: <>Top tips to deal with challenging situations: doctor–patient interactions</>,
          image: "",
          linkTitle: <>Breathe (Medical Journal): 2017 article</>,
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5467659/",
          description: (
            <>
              An article examining challenging situations in doctor–patient interactions, how they might be better
              managed. (June 2017)
            </>
          ),
        },

        {
          label: <>To Overcome Vaccine Hesitancy, We Need a Better Patient Experience</>,
          image: "",
          linkTitle: <>Harvard Business Review Editorial</>,
          link: "https://hbr.org/2021/01/to-overcome-vaccine-hesitancy-we-need-a-better-patient-experience",
          description: (
            <>
              Editorial article looking at considerations surrounding the vaccination experience, both before, during,
              and after. (January 2021)
            </>
          ),
        },

        {
          label: <>Anxiety Canada: A Tool for Dealing with Anxiety Around Vaccination</>,
          image: "",
          linkTitle: <>The CARD Tool for Patients</>,
          link: "https://www.anxietycanada.com/wp-content/uploads/2020/04/CARD-for-Individuals.pdf",
          description: (
            <>
              An easy-to-use tool for patients with generalized anxiety – fears of fainting or appearing in public –
              around the vaccination process that helps them develop specific strategies in four domains. (April 2020)
            </>
          ),
        },
      ],
    },
  },

  GroupTrauma: {
    // Group Trauma
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy2.svg",
        content: [
          <>
            &ldquo;I can&apos;t see how we as &#91;minorities/First Nations&#93; can rush into taking anything that was
            developed so quickly. I can&apos;t go on the fact that the government is saying it&apos;s safe.&rdquo;
          </>,
          <>&ldquo;I won&apos;t be used as a guinea pig for white people.&rdquo;</>,
          <>
            &ldquo;How do you know that white folks won&apos;t get one vaccine and &#91;my minority group&#93; will get
            a different one?&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
        content: [
          <>
            Acknowledge and affirm the validity of historical traumas and mistreatment that may affect willingness to
            get vaccinated.
          </>,
          <>
            Providing
            <a
              className="ml-1.5 orangeUnderline"
              href="http://www.bccdc.ca/health-professionals/clinical-resources/covid-19-care/education-and-training/culturally-safe-care"
              rel="noopener noreferrer"
              target="_blank"
            >
              culturally safe care <FiExternalLink className="inline" size={18} />
            </a>{" "}
            should be a priority for every provider.
          </>,
          <>
            Emphasize that getting the vaccine is for protecting the community as much as it is for protecting the
            individual &#40;e.g. protecting Elders&#41;.
          </>,
          <>
            Acknowledge and affirm the validity of personal past traumas/social anxiety that may affect willingness to
            get vaccinated.
          </>,
          <>
            Note that prioritizing marginalized populations is part of a more just/equitable vaccine plan, not because
            the vaccine&apos;s safety is questionable.
          </>,
        ],
      },
      // Group Trauma

      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Community, group, and historical traumas are complex matters to tease apart and address. As a trusted health
            counsellor, you can be a figure within the healthcare system who can acknowledge these traumas and create
            more positive experiences for this patient moving forward. Work with your patient to find ways that promote
            feelings of safety towards getting a vaccine.
          </>,
        ],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: <>What would you need in order to feel safe about getting vaccinated?</>,
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I hear what you&apos;re saying. It does seem kind of funny that suddenly they &#91;i.e. the
              government/public health&#93; are interested in protecting you and your people, whereas where have they
              been all these years? Am I understanding that right?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              Well, I guess I see it as a way for your community to take the power that it can, take the resource
              that&apos;s there to benefit it and actually going first. And saying, &lsquo;
              <i>
                Well, for once we&apos;re going to get the treatments first. We&apos;re going to be front of the line
                for this.
              </i>
              &rsquo;
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              ...You have every reason to mistrust what the government is saying with the vaccine. But I&apos;m hoping
              that you don&apos;t see me as part of the government, because I&apos;m not. This is about you and me
              finding the best things for your health, and the health of your family...
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // Group Trauma

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: <>What would you need in order to feel safe about getting vaccinated?</>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I&apos;m not trying to strong-arm you into anything here. Tell me where your lingering concerns are
                    and I just want to hear from you for a moment.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    I&apos;m curious – in your community, have you seen many examples of people who have been
                    vaccinated? How do you feel about their choice to do so?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I hear what you&apos;re saying. It does seem kind of funny that suddenly they &#91;i.e. the
                    government/public health&#93; are interested in protecting you and your people, whereas where have
                    they been all these years? Am I understanding that right?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, I understand that your community has been treated very poorly by the system. Experiments and
                    outright abuse. That&apos;s all very real for you and it affected everyone in your community.
                    I&apos;m hoping we can have a conversation about vaccines while also acknowledging that past. This
                    conversation is between you and me, not the bigger system. This is you and me having a conversation.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    This pandemic has unearthed some of the bigger issues you&apos;re bringing up for a lot of people.
                    It&apos;s opened people&apos;s eyes, I think. You&apos;re not alone in mistrusting motives here,
                    that&apos;s for sure. I guess one of the reasons I raised the idea of the vaccine for you, is that
                    one of the ways that&apos;s opened people&apos;s eyes, is that we&apos;ve seen different communities
                    be disproportionately affected by the virus.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I hear you, that you don&apos;t trust the government on this, but I guess what I&apos;m suggesting
                    is that, I&apos;ve been doing my own research because I&apos;m with you. I don&apos;t think the
                    government has earned any of our trust, right? So that&apos;s why I&apos;ve been doing my reading.
                    I&apos;ve been making sure that I&apos;m up to date, so I can provide the best advice to the people
                    I really care for.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I guess you can say I&apos;m part of the system, but I think you&apos;ve learned that I&apos;m here
                    for you, that I&apos;m looking out for you.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Would you mind if I share my thoughts on why the vaccines might be particularly good and important
                    for you and your community?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                    different options that might be available to you. Do you think it might be okay if I tell you a
                    little bit about what I know, as opposed to maybe what you&apos;re hearing about from other sources?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    For me, getting the vaccine wasn&apos;t so much about me, as it was about you. I got vaccinated so I
                    could be here for you. I took it so I can be safe when I&apos;m around you. And I think maybe
                    it&apos;s a bit like that in your community too. You might be a bit on the &apos;maybe&apos; side,
                    but when it is about protecting the community &mdash; protecting the Elders and their knowledge.
                    When it comes to that, you&apos;re really taking it for them. So you can be there for them.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    From my point of view, I totally understand there is a mistrust with the system. The health system
                    hasn&apos;t exactly been known to put the health and interests of Indigenous people first over the
                    last couple centuries. But I know that not only do the vaccines keep me safe, they also keep my
                    community and my Elders safe. I have a Cree Elder who I know well and she has been vaccinated. I
                    struggled with my own questions about the vaccine but have chosen to do it, and my M&eacute;tis
                    Grandmother in Manitoba got hers 3 weeks ago. I feel that colonization has taken enough away from
                    us, that I can&apos;t risk not doing my part to preserve the culture and knowledge we have left with
                    our Elders especially.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    With the vaccine rollout, part of it is trying to acknowledge those historical injustices and to
                    provide something that&apos;s more equitable. So, one of the reasons Indigenous communities are
                    being prioritized for the vaccine is to move us towards that more just place. You could see it as
                    being at the front of a weird line, I guess, but I can tell you that I&apos;ve got non-Indigenous
                    patients desperate to get their shots, and so it&apos;s a line that lots of people want to be at the
                    front of. For me, the way things are rolling out is a real, good faith effort to improve equity and
                    right some of those historical wrongs.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Group Trauma
              {
                text: (
                  <>
                    So, the vaccine priority list isn&apos;t just about who&apos;s most at risk – which people in your
                    community are. It&apos;s also about making decisions that help address historical damage and address
                    inequalities. Public health people are thinking about those factors too when they make up the
                    priority lists.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    And I guess from my perspective, I want to do everything I can to protect your community. Now,
                    clearly, it&apos;s not in my power to fix everything, although I would like to. There are some
                    things that are in my power and I want to do that to protect my patients and the communities that I
                    care for. For me, when I see under-served communities, under-resourced communities, take the brunt
                    of this pandemic, I want to move heaven and earth to get them vaccinated first.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // Group Trauma
              {
                text: (
                  <>
                    It makes me angry knowing they can do such rapid vaccine development now - why don&apos;t they do
                    this for TB? Why don&apos;t they do this for malaria? Now, that we know this is possible, I want to
                    see them do it for all sorts of conditions that are killing people in marginal communities. But as
                    far as these &#91;COVID&#93; vaccines go, I don&apos;t necessarily need you to trust them, but I do
                    think you should trust me. These are good vaccines. They stop people from dying from the virus.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I think you and your community should be relatively front of the line in Canada, but already in
                    Canada, millions of people are vaccinated. And hundreds of millions of people around the world are
                    vaccinated. We know these vaccines are good, we know that they work, we know that they&apos;re safe.
                    And now I want to take that knowledge and make sure it benefits the people that I care so much for.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I hear you. Your past experiences have seen you lose so much: Your home, your culture. And
                    governments have been the problem. You have every reason to mistrust what the government is saying
                    with the vaccine. But I&apos;m hoping that you don&apos;t see me as part of the government, because
                    I&apos;m not. This is about you and me finding the best things for your health, and the health of
                    your family. I&apos;ve been doing research &mdash; for everyone like you in my practice &mdash; and
                    that research is telling me that these vaccines aren&apos;t just safe, they are so much safer than
                    running the risk of not taking them. Choosing to vaccinate gives you power over the system. It lets
                    you take your freedom back into your own hands, and I think, from how we know one another, having
                    the power to decide what happens to you and your family is important to you.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    This obviously doesn&apos;t fix other issues. It&apos;s not just during the pandemic, it&apos;s
                    hundreds of years now of being at the back of the line. And it&apos;s not right, but this is a
                    chance for the community to be first. And I want to help make sure that happens. I want the
                    community to be protected from the virus and then to stand up healthy and proud and say, &lsquo;
                    <i>
                      We beat this thing. Now, give us what else is coming our way, all the resources that we&apos;re
                      meant to have
                    </i>
                    &rsquo;.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    As members of minority groups, we always seem to get less out of things that go on. I want us at the
                    forefront of this. I want to make sure that &#91;our community&#93; is represented. I&apos;m going
                    by faith that these people won&apos;t do us wrong. I&apos;m holding them accountable.{" "}
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      resources: [
        {
          label: <>BC Centres for Disease Control: Indigenous Community Resources</>,
          image: "",
          linkTitle: <>BC CDC Resources Page</>,
          link: "http://www.bccdc.ca/health-info/diseases-conditions/covid-19/indigenous-community-resources",
          description: (
            <>
              BC Centres for Disease Control Indigenous Community Resources offers a wide array of resource materials
              for providers working with Indigenous communities regarding vaccination.
            </>
          ),
        },

        {
          label: <>Morning Star Lodge: Protecting Our Home Fires COVID-19 Resources</>,
          image: "",
          linkTitle: <>Morning Star Lodge COVID-19 Pandemic Resources for Indigenous Communities</>,
          link: "https://www.indigenoushealthlab.com/protecting-our-home-fires",
          description: (
            <>
              Morning Star Lodge, an Indigenous community-based health research organization, has a wealth of resources
              available for building vaccine confidence in Indigenous communities. This includes YouTube videos, fact
              sheets, and more.
            </>
          ),
        },
        // Group Trauma
        {
          label: <>Women&apos;s College Hospital - Maad&apos;ookiing Mshkiki: Sharing Medicine</>,
          image: "",
          linkTitle: <>Resources for Indigenous, Métis, and Inuit Communities Page</>,
          link: "https://www.womenscollegehospital.ca/research,-education-and-innovation/maadookiing-mshkiki%E2%80%94sharing-medicine",
          description: (
            <>
              Consolidated resources co-developed by First Nations, Inuit and Métis Healthcare Professionals,
              Traditional Practitioners and Trusted Community Members (2021)
            </>
          ),
        },

        {
          label: (
            <>
              NBCNews Editorial: I&apos;m a Black doctor who didn&apos;t trust the Covid vaccine. Here&apos;s what
              changed my mind.
            </>
          ),
          image: "",
          linkTitle: <>NBCNews Article</>,
          link: "https://www.nbcnews.com/think/opinion/i-m-black-doctor-who-didn-t-trust-covid-vaccine-ncna1255085",
          description: (
            <>
              An editorial looking at a doctor&apos;s personal experience changing her perspective and choice to get
              vaccinated. Considerations for the conversations and how to approach doubt and uncertainty. (January 2021)
            </>
          ),
        },
        // Group Trauma
        {
          label: <>AMA: Impact of COVID-19 on minoritized and marginalized communities</>,
          image: "",
          linkTitle: <>Resource list from the AMA</>,
          link: "https://www.ama-assn.org/delivering-care/health-equity/impact-covid-19-minoritized-and-marginalized-communities",
          description: (
            <>
              Collected resource list from the American Medical Association looking at the disproprotionate impacts of
              COVID-19 on marginalized communities. (Updated, October 2020)
            </>
          ),
        },

        {
          label: <>World Economic Forum: How a history of medical racism may fuel mistrust in COVID-19 vaccines</>,
          image: "",
          linkTitle: <>WEF Article</>,
          link: "https://www.weforum.org/agenda/2020/12/how-a-history-of-medical-racism-may-fuel-mistrust-in-covid-19-vaccines/",
          description: (
            <>
              An article looking at a history of medical racism and how it may impact vaccine confidence, from the World
              Economic Forum. (December 2020)
            </>
          ),
        },
        // Group Trauma
        {
          label: (
            <>
              Indigenous Primary Health Care Council: COVID-19 Resources for First Nations, Inuit, and Métis communities
            </>
          ),
          image: "",
          linkTitle: <>Resources Page</>,
          link: "https://www.iphcc.ca/covid-19/",
          description: (
            <>
              Patient-facing FAQ and concerns list about COVID-19 vaccines, tailored to common Indigenous patient
              concerns. From IPHCC. (February 2021)
            </>
          ),
        },

        {
          label: (
            <>
              Indigenous Primary Health Care Council: Engaging Indigenous Communities With COVID-19 Vaccine
              Implementation (Report)
            </>
          ),
          image: "",
          linkTitle: <>Online report here</>,
          link: "https://www.iphcc.ca/publications/resources/COVID19/Engaging-Indigenous-Communities-with-COVID-19/",
          description: (
            <>
              A report looking at providing guidance on communication/engagement strategies and culturally safe
              practices/policies for vaccine implementation for Indigenous people in Ontario. (2021)
            </>
          ),
        },
      ],

      // resources: [

      //   {
      //     label: <>BC Centres for Disease Control: Indigenous Community Resources</>,
      //     image: "",
      //     linkTitle: <>BC CDC Resources Page</>,
      //     link: "https://www.bccdc.ca/health-info/diseases-conditions/covid-19/indigenous-community-resources",
      //     description: (
      //       <>
      //         BC Centres for Disease Control Indigenous Community Resources offers a wide array of resource materials for providers working with Indigenous communities regarding vaccination.
      //       </>
      //     ),
      //   },

      //   {
      //     label: <>Morning Star Lodge: Protecting Our Home Fires COVID-19 Resources</>,
      //     image: "",
      //     linkTitle: <>Morning Star Lodge COVID-19 Pandemic Resources for Indigenous Communities</>,
      //     link: "https://www.indigenoushealthlab.com/protecting-our-home-fires",
      //     description: (
      //       <>
      //         Morning Star Lodge, an Indigenous community-based health research organization, has a wealth of resources available for building vaccine confidence in Indigenous communities. This includes YouTube videos, fact sheets, and more.
      //       </>
      //     ),
      //   },

      //   {
      //     label: (
      //       <>
      //         NBCNews Editorial: I&apos;m a Black doctor who didn&apos;t trust the Covid vaccine. Here&apos;s what
      //         changed my mind.
      //       </>
      //     ),
      //     image: "",
      //     linkTitle: <>NBCNews Article</>,
      //     link: "https://www.nbcnews.com/think/opinion/i-m-black-doctor-who-didn-t-trust-covid-vaccine-ncna1255085",
      //     description: (
      //       <>
      //         An editorial looking at a doctor&apos;s personal experience changing her perspective and choice to get
      //         vaccinated. Considerations for the conversations and how to approach doubt and uncertainty. (January 2021)
      //       </>
      //     ),
      //   },

      //   {
      //     label: <>AMA: Impact of COVID-19 on minoritized and marginalized communities</>,
      //     image: "",
      //     linkTitle: <>Resource list from the AMA</>,
      //     link: "https://www.ama-assn.org/delivering-care/health-equity/impact-covid-19-minoritized-and-marginalized-communities",
      //     description: (
      //       <>
      //         Collected resource list from the American Medical Association looking at the disproprotionate impacts of
      //         COVID-19 on marginalized communities. (Updated, October 2020)
      //       </>
      //     ),
      //   },

      //   {
      //     label: <>World Economic Forum: How a history of medical racism may fuel mistrust in COVID-19 vaccines</>,
      //     image: "",
      //     linkTitle: <>WEF Article</>,
      //     link: "https://www.weforum.org/agenda/2020/12/how-a-history-of-medical-racism-may-fuel-mistrust-in-covid-19-vaccines/",
      //     description: (
      //       <>
      //         An article looking at a history of medical racism and how it may impact vaccine confidence, from the World
      //         Economic Forum. (December 2020)
      //       </>
      //     ),
      //   },

      //   {
      //     label: <>Indigenous Primary Health Care Council: COVID-19 Vaccine – Common Beliefs Explored</>,
      //     image: "",
      //     linkTitle: <>Appendix (PDF) here</>,
      //     link: "https://",
      //     description: (
      //       <>
      //         Patient-facing FAQ and concerns list about COVID-19 vaccines, tailored to common Indigenous patient
      //         concerns. From IPHCC. (February 2021)
      //       </>
      //     ),
      //   },

      //   {
      //     label: (
      //       <>
      //         Indigenous Primary Health Care Council: Engaging Indigenous Communities With COVID-19 Vaccine
      //         Implementation (Report)
      //       </>
      //     ),
      //     image: "",
      //     linkTitle: <>Online report here</>,
      //     link: "https://www.iphcc.ca/publications/resources/COVID19/Engaging-Indigenous-Communities-with-COVID-19/",
      //     description: (
      //       <>
      //         A report looking at providing guidance on communication/engagement strategies and culturally safe
      //         practices/policies for vaccine implementation for Indigenous people in Ontario. (2021)
      //       </>
      //     ),
      //   },
      // ],
    },
  },

  NeedlePhobia: {
    tags: ["needle", "injection", "shots", "pain", "fear", "faint"],
    related: [""],
    overview: {
      tags: ["overview", "needle", "injection", "shots", "pain", "fear", "faint"],
      // Note to James: Use ../images/ path but remember that images actually need to be put in the /public/images folder
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>&ldquo;I really hate needles.&rdquo;</>,
          <>&ldquo;I&apos;m worried about getting the shot because I get really nervous when I see a needle.&rdquo;</>,
          <>&ldquo;I once fainted after I got a vaccine&rdquo;</>,
          <>
            &ldquo;Even if you just say words like &apos;injection&apos; or &apos;blood work&apos;, my stomach turns to
            ice.&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
        content: [
          <>Offer to deliver the vaccine to patient directly &#40;if possible&#41;.</>,
          <>Offer topical anaesthetic or sedation</>,
          <>Offer to lay patient down, if prone to vasovagal response</>,

          // I tried but wasn't able to set up a link to the Resources tab (just to Overview)
          <>
            {/* Direct patient to <a href="INTERNAL RESOURCES TAB">resources</a> to assist in needle phobia. */}
            Direct patient to resources to assist in needle phobia. (See Resources tab)
          </>,
          <>Direct patients to low-stimulus/sensory-friendly clinics &#40;if available&#41;.</>,
        ],
      },

      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Fears around needles can be challenging for patients in all aspects of healthcare, including with bloodwork
            and other routine vaccinations. Helping your patient address the source of their anxieties around needles
            &#40;e.g. pain, fainting, etc.&#41; &mdash; and exploring various options for the setting and context of
            vaccination &mdash; can make the vaccines seem more approachable and acceptable.
          </>,
        ],
      },
    },
    // (NeedlePhobia)

    advice: {
      // NB: The data structure for the advice section is not complete! Work in progress!
      tags: ["overview", "needle", "injection", "shots", "pain", "fear", "faint"],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              So, what I&apos;m hearing is if, for example, this fear that we&apos;re talking is not there, you would
              get COVID vaccine? Do you have any other concerns or questions about the vaccine before we address your
              fear of needles?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
          // Note to James: Use ../images/ path but remember that images actually need to be put in the /public/images folder
        },
        affirm: {
          text: (
            <>
              I feel for you because to tell the truth, I have a little bit of fear of needles as well and I&apos;m a
              doctor! But we can address this.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              Would you be open to hearing about some solutions we could use to make you feel more comfortable about
              getting a vaccine?
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
        evoke: {
          text: (
            <>
              What if &#91;the needle&#93; part wasn&apos;t there anymore? Not to say that we can get there, but what if
              we could change the environment and the way the vaccine is delivered?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },
      },
      // (NeedlePhobia)

      engage: {
        tags: [""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    So, what I&apos;m hearing is if, for example, this fear that we&apos;re talking is not there, you
                    would get COVID vaccine? Do you have any other concerns or questions about the vaccine before we
                    address your fear of needles?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, it sounds that you&apos;re not against the vaccine, but it&apos;s just that like it&apos;s the
                    fear of getting the needle was bothering you. Can you tell me more about this fear?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Oh, I&apos;m sorry to hear that. Was there a time when this might have really upset you maybe when
                    you were a child or is it something that has kind of got worse over time?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      affirm: {
        tags: [""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I feel for you because to tell the truth, I have a little bit of fear of needles as well and
                    I&apos;m a doctor! But we can address this.
                  </>
                ),
                featured: true,
                image: "", // Add image path
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I understand your fear of needles, and I do remember it&apos;s always hard for us to get bloodwork
                    done for that reason.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      ask: {
        tags: [""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    You&apos;re actually speaking to someone who had the same problem themselves, believe it or not,
                    which is a terrible quality to have in a doctor. I remember myself when I was younger I actually
                    fainted after a vaccine. So I guess maybe I can give you some strategies that I&apos;ve tried to
                    help me get over this. It might be something to think about.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Would you be open to hearing about some solutions we could use to make you feel more comfortable
                    about getting a vaccine?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
                // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
                // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.
              },

              {
                text: (
                  <>
                    There are a lot of different options for people with needle sensitivity. Would you like to explore
                    these together?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
                // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
                // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      share: {
        tags: [""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Because there are a lot of other people like yourself, many places have set up what they call
                    &lsquo;low-stimulus&rsquo; or &lsquo;sensory-friendly&rsquo; clinics where they take special
                    measures to help reduce any potential pain or distress associated with vaccination. I think we
                    should set up an appointment for you at one of these locations.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You should know that, for the vaccine, the needle is much smaller than the needles for bloodwork.
                    And you can look away when they give you the injection and you probably won&apos;t even feel it.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg", // Add image path
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>It&apos;s a super tiny needle. I didn&apos;t even notice it when I went in and got my vaccine.</>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, there are some people that do have what we call &rsquo;syncope&lsquo; in relation to a needle.
                    And that&apos;s a condition where your blood pressure drops. And sometimes if that happens most
                    times for you, there are little tips and tricks that I learned along the way that I could share.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      evoke: {
        tags: [""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    What if &#91;the needle&#93; part wasn&apos;t there anymore? Not to say that we can get there, but
                    what if we could change the environment and the way the vaccine is delivered?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    If you wanted can certainly find a picture of the needle they use to show you. It&apos;s really
                    quite tiny. The other thing to think about is all the needles that you might have to have if you
                    ever caught COVID. I wouldn&apos;t want you to have to go through all that.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I know you&apos;re scared of the needles, but some of that other &#91;COVID symptoms&#93; can be
                    pretty significant, too, even if you just have a mild case.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What if we got &#91;a trusted clinician at the clinic/office&#93; to do it with us? All right? And
                    we did it here in the office? If I could get the vaccine here, would you consider getting it done
                    here?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What we&apos;ll do is we&apos;ll have you come into the office. I&apos;m going to give you something
                    for the anxiety. We&apos;re going to let that kick in, and then &#91;a trusted clinician at the
                    clinic/office&#93; is going to sit with you. We&apos;re going to do all the things to make this a
                    forgettable experience.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, I think we could talk to some behavioral consultants in our clinic. Maybe we could put you in
                    contact with them to talk about some of the strategies for how to overcome this fear. Do you think
                    you&apos;re interested in that?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
              // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.
            ],
          },
        ],
      },
      // (NeedlePhobia)

      resources: [
        {
          label: <>How patients can overcome needle phobia and get the COVID vaccine</>,
          image: "",
          // image: "/images/screenshots/How patients can overcome needle phobia and get the COVID vaccine.png",
          linkTitle: <>Article from Open Access Government</>,
          link: "https://www.openaccessgovernment.org/patients-covid-19-vaccination-needle-phobia/103163/",
          // Be sure that URLs do NOT include the https://
          description: (
            <>
              A physician explores what can be done to help patients who refuse the COVID-19 vaccination due to needle
              phobia. (April 2021)
            </>
          ),
          // Open question: Should we add tags to resources, so individual resources are findable in a search?
          // Or close enough to get them to the resources page?
        },
        {
          label: <>NHS: Overcoming your needle phobia (fear of needles)</>,
          image: "", // path for screenshot image
          // image: "/images/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
          linkTitle: <>Article from Guy’s and St Thomas’ NHS Foundation Trust</>,
          link: "https://www.guysandstthomas.nhs.uk/resources/patient-information/all-patients/overcoming-your-fear-of-needles.pdf",
          description: (
            <>
              A leaflet from the NHS explaining needle phobia and providing practical advice on how to overcome it.
              Patient-facing. (2017)
            </>
          ),
        },

        {
          label: <>Alberta Health Services: Commitment to Comfort - For Providers</>,
          image: "", // path for screenshot image
          // image: "/images/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
          linkTitle: <>PDF Handout for Providers</>,
          link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-commitment-comfort-vaccine-orientation.pdf",
          description: (
            <>
              A PDF summary document for providers on easing pain and distress before, during and after immunization
              (March 2021)
            </>
          ),
        },

        {
          label: <>Alberta Health Services: Commitment to Comfort - For Patients</>,
          image: "", // path for screenshot image
          // image: "/images/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
          linkTitle: <>PDF Handout for Patients</>,
          link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-commitment-comfort-vaccine-client-summary.pdf",
          description: (
            <>A PDF summary document for patients on how to improve comfort during immunizations (March 2021)</>
          ),
        },

        {
          label: <>ImmunizeBC: Managing Needle Fears</>,
          image: "",
          linkTitle: <>Advice page from ImmunizeBC on needle fears</>,
          link: "https://immunizebc.ca/adults-managing-needle-fears",
          description: (
            <>
              Short advice page from ImmunizeBC on needle phobia and how to manage it for COVID-19 vaccination. (May
              2021)
            </>
          ),
        },

        // To add more resource linsk to this section, copy one of the resource link blocks above, paste it here, and change the content.
        // Be sure to copy everything from curly brace { to curly brace }, and to separate the resource link blocks with a comma.
      ],
    },
  },

  Unconcerned: {
    tags: ["", ""],
    related: ["Conspiracies", "mRNAConcerns", "Naturalist"], // put contentIDs of related topic here
    overview: {
      tags: ["", ""],
      theySay: {
        image: "/images/peopleIcons/People-with-Hesitancy.svg",
        content: [
          <>&ldquo;It&apos;s been blown out of proportion, it&apos;s just a bad flu.&rdquo;</>,
          <>&ldquo;I know someone who had it and they didn&apos;t get it that bad.&rdquo;</>,
          <>
            &ldquo;I got chicken pox at 8, shingles at 38 and I&apos;m still living. I don&apos;t see the need to get
            vaccinated.&rdquo;
          </>,
          <>&ldquo;It&apos;s only affecting older people. I&apos;m pretty young so I should be fine.&rdquo;</>,
          <>&ldquo;COVID has a 99% survival rate and is less deadly than the flu for most people.&rdquo;</>,
          <>
            &ldquo;The goal posts/restrictions keep changing. I&apos;m not sure that getting vaccinated will actually
            make any difference at this point.&rdquo;
          </>,
        ],
      },

      thingsToConsider: {
        image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        content: [
          <>
            Emphasize that as a healthcare provider in the community, you have a different perspective on the severity
            and impacts of COVID.
          </>,
          <>Mention that many reopening plans are and will continue to be tied to vaccination rates.</>,
          <>
            Highlight that the vaccines can protect not only the patient, but friends, family, and loved ones as well.
          </>,
          <>Avoid lengthy debates about facts, and stress the ease of access and high safety profile of vaccines.</>,
        ],
      },

      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            For patients who have not had COVID affect them or their social groups, it can be difficult to understand
            the severity of the disease and the toll it has taken. Taking the time to explain your perspective as a
            healthcare professional can help shed light on what might be the &lsquo;hidden effects&rsquo; of the
            pandemic on the patient&apos;s community.
          </>,
        ],
      },
    },
    // (Unconcerned)
    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: <>Could you tell me a little bit more about your understanding of COVID and its severity?</>,
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: (
            <>
              I understand that you might not see the effects of COVID in everyday life. Maybe if you&apos;re looking
              around, you&apos;re not seeing anyone who gets really sick. That would make it more difficult to see the
              impact that COVID is having out there in the community. But, certainly, in town here, there&apos;s lots of
              people who have been really sick with it.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: (
            <>
              Having seen a lot of patients in the community, I have a different perspective of the pandemic, which may
              not necessarily align with your views of COVID. Could I share my experience&#40;s&#41; with you?
            </>
          ),
          image: "/images/peopleIcons/doctorBlackManBeard.svg",
        },
        evoke: {
          text: (
            <>
              What does concern me is that, you could be the link in a chain for somebody else ending up in the ICU.
              Whether that&apos;s your mom, or someone in your family who is not quite as fit as you. Do you absolutely
              need this vaccine? Maybe not, maybe you&apos;d be fine. But do we, the people in your community, need this
              vaccine? I think we do.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
        },
      },
      // (Unconcerned)
      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: <>Could you tell me a little bit more about your understanding of COVID and its severity?</>,
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: <>Can we talk through your information? Can you show me your sources?</>,
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I understand that you might not see the effects of COVID in everyday life. Maybe if you&apos;re
                    looking around, you&apos;re not seeing anyone who gets really sick. That would make it more
                    difficult to see the impact that COVID is having out there in the community. But, certainly, in town
                    here, there&apos;s lots of people who have been really sick with it.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I can see that someone as healthy as you may not be concerned about COVID. Sometimes it&apos;s hard
                    to make sense of the numbers and impacts without seeing the individual cases and people who had the
                    disease.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Here&apos;s the thing, I think that we have all gotten so used to keeping ourselves safe, that
                    we&apos;ve forgotten that our aim really needs to be not having to mask forever, not having to
                    homeschool our kids forever, not having to designate one person to go to the grocery store.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So, I think I&apos;m hearing that you don&apos;t feel there&apos;s any benefit for you in the
                    getting the vaccine. You&apos;re already giving up so much, and you&apos;re asking &lsquo;
                    <i>why do I have to do one more thing for the world?</i>&rsquo; Especially when it doesn&apos;t even
                    feel like it&apos;s even going to help you?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Having seen a lot of patients in the community, I have a different perspective of the pandemic,
                    which may not necessarily align with your views of COVID. Could I share my experience&#40;s&#41;
                    with you?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackManBeard.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              {
                text: (
                  <>
                    There are a lot of reasons why natural or herd immunity aren&apos;t the best approaches to getting
                    out of this pandemic. Would you like to hear what some of those reasons are?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    So there are people like you and me that were in the ICU, and it is totally preventable by getting a
                    vaccine that&apos;s like a flu shot. Part of our trouble now is trying to convince the public that
                    COVID is in fact, different, and it is very different than other diseases like the flu. This is
                    something that is way more transmittable. It has a higher severity rate, and it really overwhelmed
                    health systems around the world. And look at us, we were in lockdowns because of this darn thing. So
                    the way out of this is to get people, like you and me, vaccinated. But unless enough of us do it,
                    we&apos;re going to go back to &#91;lockdowns, restrictions, etc.&#93;.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (Unconcerned)
              {
                text: (
                  <>
                    I&apos;ll be honest with you, the people who are unhealthy and are at higher risk of bad outcomes
                    from COVID infection, there&apos;s no question that COVID is more of a concern there. But we
                    definitely are seeing younger and completely healthy people end up in the intensive care unit, and
                    it&apos;s just a total disaster. It&apos;s so avoidable, that&apos;s the crazy part. It just
                    doesn&apos;t need to happen.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I get to see lots of people, lots of different experiences, and have a lot more of that bigger
                    picture than the average person who just knows the people in their family and immediate social
                    groups. What I know is that lots and lots of people get sick &#91;with COVID&#93;, and a small
                    percentage of people get very, very sick. You&apos;re exactly right. The problem is that a small
                    percentage of a large number of people starts to pile up, and every case that ends up in the
                    intensive care unit stays there for three weeks, on average, and of those, probably about 30% of
                    them die. Even later in the pandemic, we have been seeing younger people going to the ICUs. They
                    were all healthy enough that they would otherwise be living normal lives and productive lives.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (Unconcerned)
              {
                text: (
                  <>
                    The bottom line is that I know there&apos;s lots of confusion, there&apos;s lots of different
                    messaging, and there are people out there that are saying completely opposite things from me, and
                    they&apos;re saying that this is a natural thing that should be allowed to run its course.
                    What&apos;ll happen? Just look at &#91;e.g. <i>early 2021: Ontario, Quebec, India</i>&#93; their
                    intensive care units were full. So, this is just different. This is different because this thing is
                    way more infectious. There&apos;s no immunity in the population, so it spreads like wildfire, and
                    these guys that are saying that we need natural immunity, the problem with that is that there&apos;s
                    just massive numbers of people that are going to be sick and fill intensive care units. What do you
                    say we do then?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    From what I saw in the countries that took the approach of what you probably loosely refer to as
                    &lsquo;herd immunity&rsquo;, the initial thought when this all started was, if we let people get it,
                    then eventually we&apos;ll have enough immunity in the population to deal with this and it will run
                    its course. In the fullness of time, this turned out to be the wrong approach. What they &#91;e.g.
                    politicians&#93; weren&apos;t aware of was that COVID is a disease that can affect many different
                    people in many different ways. Getting to herd immunity without the vaccines is going to cost a lot
                    of lives and make a lot of people very sick. &#91;
                    <i>Reference India&apos;s wave of COVID in early 2021; Reference long COVID, etc.</i>&#93;.{" "}
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (Unconcerned)
              {
                text: (
                  <>
                    So, natural immunity assumes that a lot of people will get sick. A lot of them, you&apos;re right,
                    it&apos;ll be a sniffle and the flu. But 30% of them will go to hospital. We know that for sure. Do
                    we have space for them in hospital? Are we okay with a portion of them dying? I guess you could say
                    that rolling the dice with natural immunity gets us to the same point as the vaccines. But without
                    the vaccines we get there a lot more slowly.That&apos;s extra time waiting for people to die, and
                    working from home, and our kids out of school. Which, for me, isn&apos;t the kind of waiting game
                    I&apos;m comfortable with.{" "}
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Let me paint a different picture for you. What if you &#91;and your social group&#93; all got
                    together to hang out and then you went home Sunday. All of you have taken the decision to Thelma and
                    Louise it over the cliff and not get vaccinated. What if you found out on the Monday that &#91;your
                    friend/&#8203;family member&#93; got admitted to hospital for COVID pneumonia and had exposed all of you to
                    COVID? And if you didn&apos;t know where he got it from, how would you feel not knowing if you maybe
                    passed it on to them? How would you feel knowing you could have prevented that?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What does concern me is that, you could be the link in a chain for somebody else ending up in the
                    ICU. Whether that&apos;s your mom, or someone in your family who is not quite as fit as you. Do you
                    absolutely need this vaccine? Maybe not, maybe you&apos;d be fine. But do we, the people in your
                    community, need this vaccine? I think we do. This is our way to build immunity. It stops the
                    transmission chains and gets us to normal.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (Unconcerned)
              {
                text: (
                  <>
                    For me, it&apos;s important to get vaccinated, not just to keep yourself safe, but also to keep
                    people around you safe. I&apos;m sure you want to visit with your
                    &#91;children/&#8203;grandchildren/&#8203;parents/&#8203;friends&#93;. That community, that&apos;s a pretty good reason
                    to do it, no? It&apos;s just not our own responsibility to our own health. It&apos;s also about our
                    responsibility to our families and the community around us.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face
                    and have some of that comradery with your colleagues. You mentioned your kids going back to school
                    in a normal way. What would you be willing to pay for that? What would you be willing to give for
                    that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)

      resources: [
        {
          label: <>Understanding herd immunity</>,
          image: "",
          linkTitle: <>Nature: Human Behaviour (Journal) article</>,
          link: "https://www.immunize.ca/sites/default/files/resources/s41562-017-0056_0.pdf",
          description: (
            <>
              Journal article examining the importance of communicating the concept of herd immunity in vaccine
              advocacy. (2017)
            </>
          ),
        },

        {
          label: <>Similarities and Differences Between COVID and the Flu</>,
          image: "",
          linkTitle: <>US CDC comparison between COVID and Influenza</>,
          link: "https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm ",
          description: (
            <>
              A comparison between COVID and the Flu, and how it affects the infectious window, vulnerable populations,
              and complications (Updated, June 2021)
            </>
          ),
        },

        {
          label: <>Forbes Op-Ed: If Herd Immunity Is Your Plan to Beat COVID, You Need A Plan B.</>,
          image: "",
          linkTitle: <>Forbes Op-Ed by Infectious Diseases Doctor</>,
          link: "https://www.forbes.com/sites/coronavirusfrontlines/2021/04/23/if-herd-immunity-is-your-plan-to-beat-covid-you-need-a-plan-b/",
          description: (
            <>
              A discussion of the challenges of reaching herd immunity, and why vaccines are critical even if those
              thresholds are lofty. (April 2021)
            </>
          ),
        },
      ],
    },
  },

  Undifferentiated: {
    // edit this from ContentID to the specific name for this persona type. No duplication!
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],

      theySay: {
        image: "/images/peopleIcons/presentation.svg",
        content: [
          <>
            <p>
              Below you can download a slide deck that outlines approaches for any vaccine hesitancy conversation. The
              slides describe successful approaches to:
            </p>
            <div className="ml-5 mxs:ml-10">
              <p>
                <b>Resetting</b> your expectations for the conversation
              </p>
              <p>
                <b>Engaging</b> openly
              </p>
              <p>
                <b>Affirming</b> your patient’s concerns and starting points{" "}
              </p>
              <p>
                <b>Asking</b> permission, then <b>sharing</b> your own information or perspectives
              </p>
              <p>
                <b>Evoking</b> positive visions of the future, and co-planning to find a common goal
              </p>
            </div>
          </>,
          <>
            <a
              className="px-4 pt-1.5 pb-1  smFont orangeLink  linkPill"
              href="https://docs.google.com/presentation/d/1UCFV9zVZFa6sLrRXGBnYLK0zUK7A6kDZbFHJSmwe_Ag/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download the slides
            </a>
          </>,
        ],
      },
      // (Undifferentiated)
      thingsToConsider: {
        image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        content: [
          <>
            Offering generic information about vaccines may not be as effective as using targeted communication to
            address particular patient concerns.
          </>,
          <>
            <span>Use the</span>
            <LinkToAboutEAASE text={"EAASE Steps"} />
            <span>
              {" "}
              to structure a conversation that can help you differentiate your patient&apos;s hesitancy before
              responding.
            </span>
          </>,
          <>
            Remember to engage with your patient to better understand and identify their specific type or source of
            vaccine hesitancy.
          </>,
          <>
            Take your time, and don&apos;t aim for a &lsquo;yes&rsquo; in any single conversation. The goal is to become
            your patients&apos; ally.
          </>,
        ],
      },
      takeHome: {
        image: "/images/peopleIcons/Notepad_small.svg",
        content: [
          <>
            Take the time to learn about your patient&apos;s particular concerns about the COVID vaccines so that you
            can have a better conversation. The goal of these conversations is to <b>&#40;re&#41;affirm</b> that you are
            an ally; <b>validate</b> your patients&apos; experiences; and aim for <b>contemplation</b> rather than
            vaccine acceptance. Your status as a trusted healthcare advisor can make the difference.{" "}
          </>,
        ],
      },
    },
    // (undifferentiated)

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""], // Do we want tags here? I&apos;m guessing not...
        engage: {
          text: (
            <>
              Is there any reason behind your discomfort with the vaccines? Do you want to talk about it? Are you
              comfortable doing that?
            </>
          ),
          image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
        },

        affirm: {
          text: (
            <>
              I&apos;m glad we&apos;re having this conversation. I&apos;m really glad you&apos;re open to have this
              because it just shows that you&apos;ve got an open mind and you&apos;re willing to hear a little different
              side of things. I&apos;m not here to talk you into this or out of this. You&apos;re in charge here -
              we&apos;re just having a conversation.
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManBlackHair.svg",
        },

        ask: {
          text: (
            <>
              I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the different
              options that might be available to you. Do you think it might be okay if I tell you a little bit about
              what I know? As opposed to, maybe, what you&apos;re hearing about from other sources?
            </>
          ),
          image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
        },

        evoke: {
          text: (
            <>
              If you look around the world at the countries that have managed to get these vaccines into people&apos;s
              arms: they&apos;re getting back to normal life. They&apos;re able to &#91;worship/&#8203;socialize/&#8203;visit/be&#93;
              together. They&apos;re able to do those things. I know that not being able to
              &#91;worship/socialize/visit&#93; with the rest of your community has been really hard on you this last
              year, but we can do something about that.
            </>
          ),
          image: "/images/peopleIcons/doctorBlackWoman.svg",
        },
      },
      // (undifferentiated)

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    Is there any reason behind your discomfort with the vaccines? Do you want to talk about it? Are you
                    comfortable doing that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Let me make sure I understand you clearly. Are you saying, &lsquo;
                    <i>No, not ever, no matter what.</i>
                    &lsquo; Or are you more someone who&apos;s maybe on the fence and you want to kind of wait and see.
                    So more of a &lsquo;<i>maybe</i>&lsquo;, or &lsquo;<i>later</i>&lsquo;?
                  </>
                ),
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I&apos;m interested: Where did you hear about &#91;these theories/ideas&#93;? Could you tell me
                    more?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              // (undifferentiated)

              {
                text: (
                  <>
                    I wonder what your thoughts have been around your risk of COVID itself? Because right now we&apos;re
                    talking about potential risks with the vaccine. And I wonder if you&apos;ve thought about your
                    potential risks around COVID?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    I do want to challenge you a little bit there. Just to make sure we have the right information and
                    are on the same page.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    I&apos;m glad we&apos;re having this conversation. I&apos;m really glad you&apos;re open to have
                    this because it just shows that you&apos;ve got an open mind and you&apos;re willing to hear a
                    little different side of things. I&apos;m not here to talk you into this or out of this. You&apos;re
                    in charge here &mdash; we&apos;re just having a conversation.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I agree with you that the media coverage of this has been really challenging to follow. It seems
                    like every day there&apos;s something new and it contradicts what was said before, which can make it
                    even more difficult to tease out what&apos;s the truth. But together I think we can make some
                    progress and help you make the best decision for your health.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You&apos;re doing Internet research, and so am I. I&apos;m right there with you, and it&apos;s
                    really confusing, isn&apos;t it? Can we compare notes?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    You have probably done a lot of reading about this. Right? Lots of people these days are reading all
                    about these vaccines, huh? Lots of information out there. Lots of misinformation and partial
                    information out there. Kind of makes you shake your head, right? I&apos;ve been digging into it to,
                    and I&apos;m hoping to share what I&apos;ve found.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    It&apos;s been a desperately hard year or more, hasn&apos;t it? There&apos;s just so much unknown.
                    And in all that, it is absolutely reasonable to have questions about a vaccine. Normally, my job is
                    to work with you to let you know about the risks and the benefits. Right? We figure out the best
                    answer for you. Together. Now, when we&apos;re in a public health crisis like this one, we have to
                    go that extra step beyond figuring out what&apos;s best for you, and we&apos;ve got to figure out
                    what&apos;s best for your family too. What&apos;s best for your community too.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    If there are others in your community that want to chat through this with me, I totally understand
                    if they&apos;re getting information from other sources. But I&apos;m here for you, I&apos;m here for
                    the community. And like I said, I spent a lot of time trying to make sense of this information,
                    because I understand how confusing it can be.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I don&apos;t want to force you into anything, but I really would hope that we can work together to
                    keep you and your family safe and your community safe and get us where we all want to be in a year.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManYoung.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    Yeah. I think knowledge is power. I&apos;ve always felt that way. And when you and I have had visits
                    about other health concerns, I always try to give you those patient handouts because I want you to
                    be as informed as possible. So you can make a decision that&apos;s best aligned to your own values.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    You&apos;ve known me for a fair amount of time. You may not know how much of a science nerd I am,
                    but do you have a moment? Do you want me to outline for you how we got here so quickly? Because,
                    it&apos;s actually a cool science story.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteManGoatee.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So this &#91;concern&#93; is something I&apos;ve heard quite a bit. And because of that, I&apos;ve
                    done a fair bit of research in this space to make sure that I could effectively answer people&apos;s
                    questions and concerns. Is it okay if I share some of that research with you?
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                    different options that might be available to you. Do you think it might be okay if I tell you a
                    little bit about what I know? As opposed to, maybe, what you&apos;re hearing about from other
                    sources?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    The reason why this virus is so deadly is because we haven&apos;t seen it before. It&apos;s like
                    your home being broken into for the first time, OK? If you&apos;ve never had your home broken into
                    and you&apos;ve been concerned, the first time it happens is pretty devastating. Right? It&apos;s
                    kind of the same with the virus. When your body&apos;s never seen it before, it doesn&apos;t know
                    how to respond and you can lose everything. But with the vaccine, that&apos;s like installing the
                    full alarm system package and having the security company come and test it. Your body retains a
                    memory of what it saw. So if the real burglars show up, you&apos;re ready. And you didn&apos;t have
                    to lose everything. Just a sore arm, maybe.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    so, one of the things that we&apos;re seeing is more and more young people even previously healthy
                    people, getting severely ill from this disease. And so that&apos;s why when I&apos;m speaking to
                    somebody like you, that&apos;s why I wanted to bring it up because I can&apos;t imagine how I would
                    feel if I didn&apos;t do my best to protect somebody like you.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)
              {
                text: (
                  <>
                    Everyone was really terrified this time last year, and now, here we are a year later, and we&apos;ve
                    got vaccines. It&apos;s phenomenal that the science has been able to move forward at that rate.
                    It&apos;s continuing to move, and if there is any change that&apos;s needed, then they have the
                    ability to make those tweaks, which is really nice to know that we&apos;ll be able to protect
                    ourselves with boosters in the future if that&apos;s what it takes.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    It&apos;s great that we can talk like this &mdash; thanks for asking for my opinion. You know me and
                    how my job is to look after not just your physical health, but your mental health too, right? When
                    I&apos;m looking at what&apos;s good for you and your family&apos;s mental health, these vaccines
                    are the ticket back into feeling like ourselves again. A ticket back to normal.
                  </>
                ),
                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    If you look around the world at the countries that have managed to get these vaccines into
                    people&apos;s arms: they&apos;re getting back to normal life. They&apos;re able to
                    &#91;worship/socialize/visit/be&#93; together. They&apos;re able to do those things. I know that not
                    being able to &#91;worship/socialize/visit&#93; with the rest of your community has been really hard
                    on you this last year, but we can do something about that.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                    for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                    doing?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    If go back to large amounts of people getting sick, the other thing to think about is: &apos;do we
                    have enough space for them in hospital?&apos; We could wait to have enough people get sick and die
                    so that we build up the &ldquo;herd immunity&rdquo; that people talk about. But for me, the vaccines
                    get us to the same goal faster, sort of like a FastPass at Disneyland. A FastPass without all the
                    hospitalizations and deaths.
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Here&apos;s the thing, I think that we got so used to keeping ourselves safe, that we forgot that
                    our aim really needs to be not having to mask forever, not having to homeschool our kids forever,
                    not having to designate one person to go to the grocery store. We forgot how awesome normal was. And
                    the vaccines are what are bringing normal back to us.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Well, let me turn it around for you. What if no vaccine had ever been created for COVID? What does
                    the next five years look like? What does the next 10 years look like?
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorBlackWoman.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    It&apos;s long&ndash;COVID that I&apos;m worried about for you, specifically those lingering
                    symptoms, a brain fog that might last for the next year or longer. I would hate for that to happen.
                    So, that&apos;s the thing that I keep worrying about because you&apos;re at a bit higher risk for
                    those long&ndash;COVID effects than the average person.
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    I really worry that you would get a really bad run of it if you caught the virus. You would be a
                    very high risk for winding up in hospital, doing really badly, maybe even needing the ICU. People
                    that have been into ICU, they don&apos;t come out in great shape if they do come out. I&apos;d
                    rather we just protect you from that altogether. These vaccines do that.
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
              // (undifferentiated)

              {
                text: (
                  <>
                    What concerns me is that you could be the link in a chain for somebody else ending up in the ICU.
                    Whether that&apos;s your mom, or your dad, maybe a grandparent. Do you absolutely need this vaccine?
                    Maybe not, maybe it&apos;d be fine. But do we as a community need this vaccine? I think we do. It
                    stops the transmission chains and gets us safely back to normal.
                  </>
                ),
                featured: false,
                image: "/images/peopleIcons/doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    What if you got together with your unvaccinated friends over the weekend, and then you went home
                    Sunday. And on Monday, one of them gets admitted to hospital for COVID pneumonia. He&apos;s exposed
                    all of you to COVID. And not thinking about specifically where he got it from, how would you feel
                    then having been someone who could have prevented that?
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },

              {
                text: (
                  <>
                    Maybe you do it for your wife. Maybe you do it for your parents. But even if you don&apos;t do it
                    for you, what&apos;s your cost for &#91;the vaccine&#93;? Maybe a little gas money, and an hour or
                    two off work? I mean, most of us have plenty of time off anyway, right? I look at it that way. I see
                    it a little different from the skeptics that are out there. Sure, it&apos;s one more thing. Be
                    grumpy about it. You have every right to be grumpy. But go get it.
                  </>
                ),

                featured: true,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      //UNDIFFERENTIATED RESOURCES
      resources: [
        {
          label: <>Alberta Medical Association: Be A Vaccine Positive Clinic Toolkit</>,
          image: "",
          linkTitle: <>Conversation tools for discussing vaccines with patients.</>,
          link: "https://www.albertadoctors.org/about/COVID-19/vaccine-positive-clinic-toolkit/addressing-vaccine-hesitancy",
          description: (
            <>The Alberta Medical Association&apos;s &ldquo;Be A Vaccine Positive Clinic&rdquo; Toolkit includes proactive outreach resources, scripts, and other helpful guides for physicians to have vaccination conversations with their patients.</>
          ),
        },
        
        {
          label: <>Centre for Effective Practice: ProTCT Framework</>,
          image: "",
          linkTitle: <>ProTCT framework for COVID-19 vaccine discussion</>,
          link: "https://tools.cep.health/wp-content/uploads/2021/04/CEP_COVID-Framework_04-21_r1.pdf",
          description: (
            <>A review of the ProTCT framework to structure conversations with patients about the COVID-19 vaccines</>
          ),
        },

        {
          label: <>Centre for Effective Practice (CEP): Ensuring Patient Confidence in Vaccines</>,
          image: "",
          linkTitle: <>CEP Resources for Supporting Patient Confidence in Vaccines</>,
          link: "https://tools.cep.health/tool/covid-19-vaccines/#ensuring-patient-confidence-in-vaccines",
          description: <>A consolidated resource section organized by concern, issue, and topic related to COVID-19 vaccination.</>,
        },
        
        {
          label: <>CEP: COVID-19 Resource Centre</>,
          image: "",
          linkTitle: <>CEP&apos;s resource toolkit for COVID-19 information</>,
          link: "https://cep.health/toolkit/covid-19-resource-centre/",
          description: <>A database for COVID-19 information on a variety of topics, including vaccines.</>,
        },

        {
          label: <>19-to-Zero COVID-19 Resources</>,
          image: "",
          linkTitle: <>COVID-19 resource repository</>,
          link: "https://www.19tozero.ca/healthcare-worker-resources",
          description: <>A repository of resources for healthcare workers about COVID-19 vaccines.</>,
        },

        {
          label: <>19-to-Zero YouTube Channel</>,
          image: "",
          linkTitle: <>COVID-19 video resources</>,
          link: "https://www.youtube.com/channel/UC107yJWv6Hz9v4b3rPA4YZw/videos",
          description: <>A selection of video resources for both patients and providers on COVID-19 and vaccines.</>,
        },

        {
          label: <>CANVax Resources on COVID-19 Immunization</>,
          image: "",
          linkTitle: <>Resources related to COVID-19 vaccines</>,
          link: "https://canvax.ca/covid-19-resources-immunization",
          description: (
            <>A repository of resources for regional, national, and international sources on COVID-19 immunizations.</>
          ),
        },

        {
          label: <>US CDC: Vaccines for COVID-19 Information</>,
          image: "",
          linkTitle: <>Resources on vaccines for COVID-19 curated by the CDC</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html ",
          description: (
            <>A collection of resources on the COVID-19 vaccines for the general public and healthcare practitioners.</>
          ),
        },

        {
          label: <>ImmunizeBC: COVID-19 Vaccine Basics</>,
          image: "",
          linkTitle: <>Immunize BC repository of common COVID vaccine questions and answers </>,
          link: "https://immunizebc.ca/taxonomy/term/378",
          description: <>A list of common COVID-19 vaccine questions and answers.</>,
        },

        {
          label: <>Indigenous Primary Health Care Council: COVID-19 information</>,
          image: "",
          linkTitle: <>Indigenous Primary Care Council COVID information</>,
          link: "https://www.iphcc.ca/covid-19/",
          description: <>COVID-19 resources with an Indigenous focus.</>,
        },
      ],
    },
  },

  BadContentID: {
    tags: ["", ""],
    related: [""],
    overview: {
      tags: ["", ""],

      theySay: {
        image: "",
        content: [
          <>
            <div className="mt-4 emphFont text-red-700">Bad Path or ContentID</div>
            <div className="mt-4 baseFont text-red-700">
              Content for the selected hesitancy type was not found at the indicated path.
            </div>
            <div className="mt-4 baseFont text-red-700">
              <div>Please click the VH Guide logo at top to continue. </div>
              <div>Also, please check the path, as well as the appropriate section in contentPersonas.js</div>
              <div className="mt-4">We apologize for the inconveniece.</div>
            </div>
          </>,
        ],
      },
      // (BadContentID)
      thingsToConsider: {
        image: "",
        content: [<></>],
      },
      takeHome: {
        image: "",
        content: [<></>],
      },
    },

    advice: {
      tags: ["", ""],

      eaase: {
        tags: [""],
        engage: {
          text: (
            <>
              <div className="emphFont text-red-700">Bad Path or ContentID</div>
              <div className="mt-4 baseFont text-red-700">
                <div>Please click the VH Guide logo at top to continue. </div>
                <div>Also, please check the URL path and the appropriate section in contentPersonas.js</div>
                <div className="mt-4">We apologize for the inconveniece.</div>
              </div>
            </>
          ),
          image: "",
        },

        affirm: {
          text: <></>,
          image: "",
        },

        ask: {
          text: <></>,
          image: "",
        },

        evoke: {
          text: <></>,
          image: "",
        },
      },
      // (BadContentID)

      engage: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    <div className="emphFont text-red-700">Bad path or contentID</div>
                    <div className="mt-4 vsmFont text-red-700">
                      <div>Please check the path in branch.js and/or the appropriate section in contentPersonas.js</div>
                      <div>We apologize for the inconveniece.</div>
                    </div>
                  </>
                ),

                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      affirm: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    <div className="emphFont text-red-700">Bad path or contentID</div>
                    <div className="mt-4 vsmFont text-red-700">
                      <div>Please check the path in branch.js and/or the appropriate section in contentPersonas.js</div>
                      <div>We apologize for the inconveniece.</div>
                    </div>
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      ask: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    <div className="emphFont text-red-700">Bad path or contentID</div>
                    <div className="mt-4 vsmFont text-red-700">
                      <div>Please check the path in branch.js and/or the appropriate section in contentPersonas.js</div>
                      <div>We apologize for the inconveniece.</div>
                    </div>
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      share: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    <div className="emphFont text-red-700">Bad path or contentID</div>
                    <div className="mt-4 vsmFont text-red-700">
                      <div>Please check the path in branch.js and/or the appropriate section in contentPersonas.js</div>
                      <div>We apologize for the inconveniece.</div>
                    </div>
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      evoke: {
        tags: ["", ""],
        content: [
          {
            subheading: "",
            quotes: [
              {
                text: (
                  <>
                    <div className="emphFont text-red-700">Bad path or contentID</div>
                    <div className="mt-4 vsmFont text-red-700">
                      <div>Please check the path in branch.js and/or the appropriate section in contentPersonas.js</div>
                      <div>We apologize for the inconveniece.</div>
                    </div>
                  </>
                ),
                featured: false,
                image: "",
                fullStoryID: "",
                fullStoryLinkText: "",
              },
            ],
          },
        ],
      },
      //BadContentID
      resources: [
        {
          label: (
            <>
              <div className="emphFont text-red-700">Bad Path or ContentID</div>
              <div className="mt-4 baseFont text-red-700">
                <div>Please click the VH Guide logo at top to continue. </div>
                <div>Also, please check the URL path and the appropriate section in contentPersonas.js</div>
                <div className="mt-4">We apologize for the inconveniece.</div>
              </div>{" "}
            </>
          ),
          image: "",
          linkTitle: <></>,
          link: "https://",
          description: <></>,
        },
      ],
    },
  },
};
