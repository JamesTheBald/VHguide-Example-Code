// Hi Nicole, please just translate the text that's within either double quotes (" ") or jsx fragments (<> </>)
// Also, anything after double slash (like this line) is just a message to you, not part of the text to translate.

const contentPersonas = {
  ScienceConcerns: {
    related: ["Conspiracies", "mRNAConcerns", "Naturalist"], // So please translate these 3 words but ignore the next few lines
    overview: {
      theySay: [
        <>
          “I don't trust it at my age. I don't know what will come down the road, what it will do to me three to five
          years from now.”;
        </>,
        <>“Will this be a yearly vaccine? What about boosters?”;</>,
        <>“I don't trust anyone about this. We're being treated like guinea pigs.”;</>,
        <>“We don't know the long-term side effects of this.”;</>,
        <>“I want to see the statistics of what percent we actually need to reach ‘herd immunity’. ”;</>,
        <>“It's scary. You're being filled with unknown things. There's not enough data.”;</>,
        <>“You can still get COVID even if you are vaccinated. Why bother getting the vaccine then?”;</>,
        <>“I already had COVID, why would I need to get a vaccine?”;</>,
      ],

      thingsToConsider: [
        // Nicole: The <strong> tags below just mean that that text is shown in bold on the website.
        <>
          <strong>Don't rush into the science.</strong> Consider your patient's willingness to hear, and capacity to
          understand, statistics and data.
        </>,
        <>
          <strong>Ask permission to share</strong> the science before jumping into the facts.
        </>,
        <>
          <strong>Consider using simple, relatable metaphors to explain</strong> the vaccine development process and the
          vaccines' mechanisms of action.
        </>,
      ],

      takeHome: [
        <>
          As a trusted health care professional you can reassure your patient that the science behind the vaccines is
          sound. Your recommendation carries significant weight when a patient is considering whether to get a vaccine.
        </>,
        <>
          <strong>Ask permission to share</strong> the science before jumping into the facts!
        </>,
      ],
    },

    advice: {
      eaase: {
        engage: (
          <>
            It sounds like you've been doing a lot of research and reading about the vaccines. I have been, too. Can we
            compare our notes and what we’ve learned about them?
          </>
        ),
        affirm: (
          <>
            I appreciate where you're coming from, and I don't know if I’ll be able to get all the answers for you
            today. But let’s see what we can get through now, together.
          </>
        ),
        ask: (
          <>
            So it's not about any corners being cut. It's really more that we dropped everything else and poured money
            and resources into it. When it comes to regulatory waiting times, we didn't remove the red tape, we just got
            some sharper scissors to cut through the red tape and protect people as fast as possible.
          </>
        ),
        evoke: <>What if no vaccine had ever been created for COVID? What do the next five years look like for you?</>,
      },

      engage: {
        quotes: [
          <>
            It sounds like you've been doing a lot of research and reading about the vaccines. I have been, too. Can we
            compare our notes and what we've learned about them?
          </>,

          <>
            Let me ask you, is it something specific with the vaccines or how they were made, or is it just more
            vaccination overall?
          </>,

          <>
            What sorts of things worry you about the vaccines? What information would you need to feel safe or confident
            in getting one?
          </>,
        ],
      },

      affirm: {
        quotes: [
          <>
            I appreciate where you're coming from, and I don't know if I’ll be able to get all the answers for you
            today. But let’s see what we can get through now, together.
          </>,

          <>
            The media coverage of this has been really challenging to follow, eh? It seems like every day there's
            something new and it contradicts what was said before, which can make it even more difficult to tease out
            what's the truth.
          </>,

          <>
            The information changes quickly, and I can see how, for folks who aren’t as familiar with vaccines and
            haven't studied diseases, it looks like we're flipping and flopping all over the place and we don't know
            what the heck we're doing. But I think my job in working with you as a patient is to think about what's in
            the best interest of you and your health.
          </>,
        ],
      },

      ask: {
        quotes: [
          <>Can I share with you what I know about the vaccines and a little more about the science behind them?</>,

          <>
            Would you be interested in hearing from me about how the vaccines work? You've known me for a fair amount of
            time. You may not know how much of a science nerd I am, but do you have a moment? I can outline how we got
            here so quickly? Because, it's actually a cool science story.
          </>,
        ],
      },

      share: {
        quotes: [
          <>
            So do you remember Ebola and another virus called MERS, M-E-R-S? We love our acronyms in science! But,
            researchers were actually looking at mRNA technology to fight those two conditions but they disappeared too
            quickly, so the mRNA technology was put on the shelf...
          </>,

          <>
            Can I personally vouch for every CEO of every big pharma company? Can I personally vouch that no one in
            history has ever done something shady to try and make money? Absolutely I can't. And yet in my work, every
            single day I see people's whose lives are changed for the better, as a result of drug therapies developed by
            pharmaceutical companies. I see people who live longer, fuller lives because we're able to use the
            medications that are out there. And the vaccine is one of those drugs – longer, fuller lives for all of us.
            Better lives. Lives without masks and distancing and restrictions.
          </>,

          <>
            You don't trust the pharmaceutical industry. And that's fair because let's face it – the number one threat
            to evidence-based practice right now is deliberate distortion of entire literatures by the pharmaceutical
            industry. So I don't blame you for not trusting Big Pharma. I don't either. On the other hand, the doubt
            about vaccines was created by a guy who basically committed a fraud for his own profit [source]. So you got
            to be alert for scams on both sides of this.
          </>,

          <>
            So I guess [hearing about serious side effects from the vaccine] is like seeing a news story about an
            airplane crash. Even though it happens incredibly rarely, the media make sure you know about it. It’s been
            like this with the vaccine ever since it was approved. Everybody's very interested, rightfully so, in how
            things go, every little twist and turn. It all gets reported on. But all the reporting on very rare events,
            combined with us being cooped up, all that makes people anxious. So I'm wondering whether maybe if we could
            find a reliable source from one of the regulatory agencies or something to talk about safety. It might be
            worthwhile thinking about that.
          </>,

          // Nicole: The text between the <i> </i> tags below is in italics on the website

          <>
            The mRNA technology has been developed over many years. I know people freak out and they go,{" "}
            <i>‘Oh, my gosh. This is less than a year and we got a vaccine. That's not possible.’</i> But, this sort of
            mRNA approach has been in development for decades. So, we were able to sort of piggyback onto earlier work.
          </>,

          <>
            Around the world, hundreds of millions of people have had these vaccines. In terms of the development, they
            went faster than they've ever gone before to go from ‘<i>what's the virus?</i>’ to, ‘
            <i>how do we build a vaccine for it?</i>’. That's true. But they actually didn't skip any steps. I looked
            into it. The reason they were able to go faster, is that they actually invested more than they've ever
            invested before. And they work together in ways that they've never done before.
          </>,

          <>
            Regular vaccines work by showing your immune system one kind of spike and it learns to make antibodies
            against THAT kind of spike. But if you show it a spike that's a little different, your immune system has to
            think harder about it. But the mRNA uses a different approach to vaccines. It doesn't show your immune
            system one view of the virus and say 'good luck.' It gives your immune system the tools to be able to figure
            out that what it's seeing is LIKE the old one, but not exactly the old one. Instead of being handed a hammer
            that hammers down a single kind of nail, the mRNA vaccines give you more of a tool belt. Your immune system
            can say, 'Okay well it's like that old one, but it's not the same.' It helps your immune system attack the
            newer stuff too.
          </>,

          <>
            It's true, a vaccinated person might still get COVID. Unlikely, but you might. What I'm seeing - and what
            the data is saying – is that people who get the vaccine, and who then get a breakthrough case, they don't
            suffer nearly as badly. Not nearly as sick. Not in the hospital, and not recovering with long COVID.
          </>,

          <>
            The vaccine does keep most people from getting COVID, but some people get it anyway. On the up side, those
            people that get it anyway, they're not as sick for as long. They don't end up in the hospital and on
            ventilators nearly as much. And you know, they're not getting long COVID either. They're not the people who
            get 'better' and then six months later, still can't climb a flight of stairs.
          </>,

          <>
            What we're seeing with the unvaccinated people is that they're filling the ICUs. They make the vast majority
            of the people in ICU but they're a real minority when it comes to the whole population. That tells you
            something, right? Yeah you can still get it, but you're not going to end up being wrecked from it.
          </>,

          <>
            I've been working in this job for 20 years and we make lots of recommendations today that differ from when I
            started — because we have a commitment to lifelong learning and adapting our advice based on new research.
          </>,

          <>
            The tricky part with COVID is we don't have time to sit back and do more research before we make our next
            recommendation — we have to act fast. But the new research and guidance is always grounded in our
            longstanding knowledge about vaccines and immunity in general — so it's not just pulled out of a hat.
          </>,

          <>
            We're learning as we go forward, and we're trying to be as safe as we can. So, we’ve learned from some very
            rare events. 1 in 100,000 events. So, one person out of 100,000 gets a blood clot. It’s very small numbers
            but we're taking it really seriously. By comparison your chances, as a Canadian, of dying in a traffic
            accident – which is a chance we take every time we get in a car – that chance is 1 in 20,000. I hope that
            putting it in that context helps.
          </>,

          <>
            I've had my vaccine...[
            <i>Share your experience of the vaccination process and/or side effects here.</i>] I really didn’t have any
            reservations about having the vaccine personally. I was actually quite excited to get it! I know that the
            science sounds new and modern when they talk about this mRNA vaccine and how it works in a different way
            compared to the previous way that vaccines have been made, but it has given us some real advantages.
          </>,

          <>
            If we have increased volumes of people getting sick, the other thing to think about is: do we have enough
            space for them in hospital? We could wait to have enough people get sick and die, and enough people get sick
            and not die, so that we build up the ‘herd immunity’ that people talk about. But for me, the vaccines get us
            to the same end point faster, sort of like a FastPass at Disneyland. A FastPass without all the
            hospitalizations and deaths.
          </>,

          <>
            We want to keep people out of the ICU. Those ICU teams are really struggling. There's nurses and respiratory
            therapists who've worked through all their weekends and evenings. They've had their vacations canceled.
            They're just bloody exhausted.
          </>,

          <>
            The vaccines will help ease pressure off hospitals so people can have surgeries again. At the shallow end of
            the pool you've got folks who need hip replacements and they've been waiting for a year. A year. In pain.
            Waiting to be able to walk again. And that's the shallow end. At the deep end of the pool you've got people
            whose kids need surgery, or who roll up with a heart attack or a burst appendix, and things are going slow
            or not happening. Heart attack and slow. Appendix and slow. These aren't words that go together well. At
            least not for the patient. If we get enough people vaccinated that we can knock down enough
            hospitalizations, that lady can get her hip replacement and the ambulance can get the heart attack straight
            into surgery. You're right, we're not gonna make COVID go away, but if we can just knock it down enough that
            can have huge impacts for others.
          </>,

          <>
            If a large portion of the population don’t get the vaccine, this could mean working from home, our kids in
            and out of school, no social activities, et cetera, for the next several years. Which feels kind of gross to
            me.
          </>,

          <>
            The vaccine developers were able to move quickly because the government gave them a lot of money. Usually
            these trials take a long time because they are very expensive but for COVID, that financial risk was taken
            away and that's a big part of what shortened the time.
          </>,
        ],

        subheading: "'I already had COVID, why do I need to get the vaccine?'",

        moreQuotes: [
          <>
            My daughter just learned to drive — I taught her to begin with. She picked up all my bad and lazy habits.
            Then I had a professional teach her and she's a great driver now, and I pay less on insurance for her too. A
            vaccine after the infection is like that professional ‘tutoring’ to help your body be really good at
            fighting off COVID.
          </>,

          <>
            We do have some emerging real-world data on patients who have been sick with COVID and we are specifically
            looking at whether these folks might be able to have just a single dose of vaccine to ‘boost’ their immunity
            to better levels in the longer term.
          </>,

          <>
            In comparing the antibodies on patients post-vaccine versus post illness we see a better immunity from the
            vaccine — likely because the body is not so busy with being sick in the vaccine group, so it can focus its
            attention on building more antibodies instead of trying not to die!
          </>,

          <>
            I know, you think your immune system should be able to do it alone. If what you are saying is true then you
            would chose to not wash your hands after using the bathroom, or wash your produce before eating it, or not
            refrigerate your eggs because your immune system just needs to ‘figure out’ how to fight off E.coli and
            salmonella. But I bet you wash your hands and use your fridge, right? When Dr. Semmelweis first proposed in
            the 1900s that washing hands would reduce infections everyone thought he was crazy. But I bet you are glad I
            wash my hands in the office when I see you now!
          </>,
        ],
      },

      evoke: {
        quotes: [
          <>What if no vaccine had ever been created for COVID? What would the next five years look like for you?</>,

          <>
            I hear you wondering, ‘<i>oh, it's still kind of new. It's experimental.</i>’’ We have a lot of data today,
            but we’ll have even more as the weeks go by and more people get the vaccine. And I promise I will dig it up
            for you. And I'll tell you what I know and what I don't know at that point. And maybe we'll make a decision
            together then.
          </>,

          <>
            When was the last time you paid such close attention to scientific research related to health
            recommendations? I would argue we are all just a little freaked out right now and so this can sometimes be
            an outlet for that fear.
          </>,
          <>
            I see you as a leader within your community, and if I can help you understand where I'm coming from with
            this, I honestly feel like with the right information, we can help many, many people. If you can partner
            with me, I'm more than willing to have a look through your literature, and we can figure out where some of
            the information on that is coming from, and hopefully help you to understand, and make the best choice for
            you, and your family, and your community.
          </>,
        ],
      },

      resources: [
        {
          label: <>CanVax - How do the mRNA vaccines work?</>,
          // Nicole: Please don't translate the following line (linkTitle)
          linkTitle: <>Educational video from CanVax</>,
          link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
          description: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
        },

        {
          label: <>University of Waterloo - mRNA vaccine myths factsheet</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>mRNA vaccine myths factsheet for patients</>,
          link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
          description: (
            <>
              A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA
              vaccines. (2021)
            </>
          ),
        },

        {
          label: <>The Long Road to the mRNA vaccines</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>CIHR Website and Timeline</>,
          link: "https://cihr-irsc.gc.ca/e/52424.html",
          description: <>CIHR's overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
        },

        {
          label: <>Safety of the COVID-19 Vaccines</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>WHO website and infographics</>,
          link: "https://www.who.int/news-room/feature-stories/detail/safety-of-covid-19-vaccines",
          description: (
            <>
              WHO's overview page looking at the safety of the COVID-19 vaccines. Patient-appropriate, with infographics
              and videos. (March 2021)
            </>
          ),
        },

        {
          label: <>COVID-19 Vaccine Frequently Asked Questions</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>ImmunizeBC Vaccine FAQ Page</>,
          link: "https://immunizebc.ca/covid-19-vaccine-frequently-asked-questions",
          description: (
            <>
              ImmunizeBC's FAQ page for the COVID-19 vaccines. Includes sections on safety, allergies, and side effects.
              (Updated regularly, 2021).
            </>
          ),
        },

        {
          label: <>How Pfizer Makes Its Covid-19 Vaccine</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>New York Times news article</>,
          link: "https://www.nytimes.com/interactive/2021/health/pfizer-coronavirus-vaccine.html",
          description: (
            <>Detailed examination of how Pfizer produces the mRNA vaccines. New York Times article. (April 2021).</>
          ),
        },

        {
          label: <>Is the COVID-19 vaccine safe?</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>Johns Hopkins Medicine web resource</>,
          link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/is-the-covid19-vaccine-safe",
          description: (
            <>Hopkins Medicine fact page and resources for exploring the safety of the COVID-19 vaccines. (May 2021).</>
          ),
        },

        {
          label: <>How did you convince others? (Twitter)</>,
          // Please don't translate the following line (linkTitle)
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
    overview: {
      theySay: [
        <>“I’ve heard that the mRNA vaccines will alter my DNA.”;</>,
        <>“I am not willing to have anything injected into my body that could potentially rewrite my DNA.”;</>,
        <>“Will my cells be permanently reprogrammed?”;</>,
      ],

      thingsToConsider: [
        <>Affirm with the patient that this concern is shared by others.</>,
        <>Use clear metaphors and straight forward analogies to explain how the mRNA vaccines work.</>,
      ],
      takeHome: [
        <>
          The mRNA vaccines are safe and never interact with a patient's DNA. Using clear metaphors to explain how these
          vaccines work can help your patient feel more informed and comfortable about these types of vaccines.
        </>,
      ],
    },

    advice: {
      eaase: {
        engage: (
          <>
            Maybe if you don't mind, you can share with me what's behind your concerns about what the vaccine might do
            to you?
          </>
        ),

        affirm: (
          <>
            I get that there’s a lot of discussion out there about how the vaccines work and some of it can be
            concerning. Sometimes it can be difficult to make sense of something so new and so different from what we’ve
            had before.
          </>
        ),

        ask: (
          <>
            So this concern about DNA is something I've heard quite a bit. And because of that, I've looking into this
            quite a bit to make sure that I could effectively answer people's questions and concerns. Is it okay if I
            share some of the vaccine science with you?
          </>
        ),

        evoke: (
          <>
            Would you feel safer if you could get a vaccine without the mRNA? There are other vaccine options we can
            explore.
          </>
        ),
      },

      engage: {
        quotes: [
          <>
            Maybe if you don't mind, you can share with me what's behind your concerns about what the vaccine might do
            to you?
          </>,

          <>
            I do want to challenge you a little bit there. Just to make sure we have the right information and are on
            the same page.
          </>,
        ],
      },

      affirm: {
        subheading: "",
        quotes: [
          <>
            I get that there’s a lot of discussion out there about how the vaccines work and some of it can be
            concerning. Sometimes it can be difficult to make sense of something so new and so different from what we’ve
            had before.
          </>,

          <>
            I mean it's a really complex thing, right? Just like you, I've been learning about the vaccines as well. And
            it's something that's so new to everyone I think we're all just trying to figure out what's going on.
          </>,
        ],
      },

      ask: {
        subheading: "",
        quotes: [
          <>
            So this concern about DNA is something I've heard quite a bit. And because of that, I've looking into this
            quite a bit to make sure that I could effectively answer people's questions and concerns. Is it okay if I
            share some of the vaccine science with you?
          </>,

          <>
            I have kind of a cool analogy I like to use to help people understand how mRNA works. Can I share it with
            you? Imagine if the chef from your favourite restaurant could come over to your house and make your
            favourite dish...
          </>,
        ],
      },

      share: {
        quotes: [
          <>
            I know there's lots of information out there, but you can take this one to the bank: the vaccine does not
            change your DNA. There are other things we might not know yet, but that one we know for sure. That one is
            absolutely true.
          </>,

          <>
            I really wish we had the technology to alter DNA. Honestly, it would be a wondrous thing if we did because
            you know what? We'd be curing cancer right, left, and center. We just don't have the ability to alter DNA.
            It just doesn't exist. We really just need to use the technology we do have to protect you from getting so
            sick.
          </>,

          <>
            These mRNA vaccines are different than traditional vaccines, because they don't expose you to any of the
            real virus. Instead, the bit of mRNA that's in the vaccines is like a recipe book for this bit of protein
            that we want your cells to make.
          </>,

          <>
            What's really cool about these mRNA vaccines that makes them even better than other vaccines is that they go
            into your cell and they make your cell produce those little spiky things that you see in all the COVID
            pictures. Those spikes are how COVID attaches onto your cells in your body and how it starts attacking you.
            So, instead of having COVID attack you, and take over your cells, the mRNA from the vaccine goes inside your
            cell, and it tells your cell to create just that same little spiky thing. None of the virus itself, just the
            little spiky thing. And then your body's like, ‘<i>Oh, what's this spiky thing? This looks bad</i>’, and it
            starts to develop an immune response.
          </>,

          <>
            The great thing about these vaccines is it's easy to tweak them so they're effective against different
            strains. They can tweak a little spike protein here, and a spike protein there, because of how the mRNA
            technology works. It's like when you're ordering a car today rather than 50 years ago. Today you just go
            online and order a different color and as many, or as few, different options as you want. 50 years ago with
            a car, you just took whatever car you got. his technology is all about being nimble and responding to the
            variants.
          </>,
        ],
      },

      evoke: {
        quotes: [
          <>
            By now, we have seen that these vaccines are safe and effective in so many people around the world, and that
            they simply do not mess with people's DNA. It makes sense to have concerns about new things like this, but I
            can assure you that these vaccines will not interfere with your DNA, and that they are a safe choice.
          </>,

          <>
            What we're trying to do as physicians and healthcare providers in general is help people to see that the
            more we do this one last thing of getting vaccinated, the more likely we are to avoid these restrictions
            coming back and disrupting our lives again.
          </>,
        ],
      },

      resources: [
        {
          label: <>CanVax - How do the mRNA vaccines work?</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>Educational video from CanVax</>,
          link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
          description: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
        },

        {
          label: <>University of Waterloo - mRNA vaccine myths factsheet</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>mRNA vaccine myths factsheet for patients</>,
          link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
          description: (
            <>
              A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA
              vaccines. (2021)
            </>
          ),
        },

        {
          label: <>The Long Road to the mRNA vaccines</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>CIHR Website and Timeline</>,
          link: "https://cihr-irsc.gc.ca/e/52424.html",
          description: <>CIHR's overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
        },

        {
          label: <>Understanding the mRNA vaccines</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>US CDC website and infographics</>,
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html",
          description: (
            <>
              US CDC's website for patients and public to better understand the mRNA vaccines, including infographics on
              how they work and links to information on their development. (March 2021)
            </>
          ),
        },

        {
          label: <>How the COVID vaccine can save your life (comic)</>,
          // Please don't translate the following line (linkTitle)
          linkTitle: <>Interactive comic looking at COVID vaccines</>,
          link: "https://projects.nj.com/vaccine-comic/",
          description: <>A graphic novel/comic strip looking at the mRNA vaccines. (February 2021)</>,
        },
      ],
    },
  },
};
