import React from "react";
import { FiExternalLink } from "react-icons/fi";

import EaaseHoverPopupEN from "./EaaseHoverPopupEN";
import EaaseHoverPopupFR from "./EaaseHoverPopupFR";

export const contentPersonasBI = {
  // Put copy content inside <> and </> instead of double quotes (except for LinkText).
  // Be sure to put double quotes around all URL addresses. e.g. href="https://www.cdc.gov/"

  // Catalog of contentIDs:
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
  // Pediatrics
  // MedicalExemptions
  // BadContentID

  // File names for doctor icon images, with approximate total site usage count:
  //  ..doctorBlackManBeard.svg   count = 28
  //  ..doctorBlackWoman.svg      count = 29
  //  ..doctorMuslimWomanYellowHeadCover.svg 32
  //  ..doctorWhiteManBlackHair.svg       26
  //  ..doctorWhiteManGoatee.svg          25
  //  ..doctorWhiteManYoung.svg           21
  //  ..doctorWhiteWomanBrownHairGlasses.svg  24
  //  ..doctorWhiteWomanDarkBrownHair.svg 25
  // TO-DO: balance the number of these, ensure their locations are random

  // OLD NOTES:
  // Anything with square brackets is an 'array', holding multiple elements (all unlabeled peers).
  // Be sure to put a comma at the end of each line, unless it's blank or ends with { or [
  // Note that blank lines or extra spaces between items have no effect.
  // Please break up any long strings with zero-width spaces (&#8203;) for better word wrapping

  ScienceConcerns: {
    // location: [0, 0, 0],  // branch number, topic number, subtopic number - per branch.js

    related: ["Conspiracies", "mRNAConcerns", "Naturalist"], // put contentIDs of related topic here
    overview: {
      theySay: {
        image: "Hesitancy Group 3.svg",
        content: {
          EN: [
            <>
              &ldquo;I don&apos;t trust it at my age. I don&apos;t know what will come down the road, what it will do to
              me three to five years from now.&rdquo;
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
            <>&ldquo;You can still get COVID even if you are vaccinated. Why bother getting the vaccine then?&rdquo;</>,
            <>&ldquo;I already had COVID, why would I need to get a vaccine?&rdquo;</>,
          ],
          FR: [
            <>
              « À mon âge, je n’ai pas confiance à ça. Je ne sais pas ce qui va se passer plus tard, ce que ça va me
              faire dans trois à cinq ans. »
            </>,
            <>« Est-ce que ça va être un vaccin annuel? Faudra-t-il des vaccins de rappel? »</>,
            <>« Je ne fais confiance à personne à ce sujet. Ils nous prennent pour des cobayes. »</>,
            <>« On ne connaît pas les effets secondaires à long terme de ces vaccins. »</>,
            <>« Je veux voir les statistiques quant au pourcentage à atteindre pour avoir l’immunité collective. »</>,
            <>« Ça me fait peur. On nous injecte des substances inconnues. Les données sont insuffisantes. »</>,
            <>« On peut attraper la COVID même si on a été vacciné. Alors, à quoi bon se faire vacciner? »</>,
            <>« J’ai déjà eu la COVID. Pourquoi est-ce que je me ferais vacciner? »</>,
          ],
        },
      },

      thingsToConsider: {
        image: "doctorMuslimWomanYellowHeadCover.svg",
        content: {
          EN: [
            <>
              <strong>Don&apos;t rush into the science.</strong> Consider your patient&apos;s willingness to hear, and
              capacity to understand, statistics and data.
            </>,
            <>
              <strong>Ask permission to share</strong> the science before jumping into the facts.
            </>,
            <>
              <strong>Consider using simple, relatable metaphors to explain</strong> the vaccine development process and
              the vaccines&apos; mechanisms of action.
            </>,
          ],
          FR: [
            <>
              <strong>Ne vous mettez pas à expliquer les aspects scientifiques trop vite.</strong> Tâchez de déterminer
              dans quelle mesure votre patient est prêt à entendre parler de la science, sa capacité à comprendre les
              faits scientifiques, les statistiques et les données.
            </>,
            <>
              <strong>Demandez la permission de lui faire part d’information</strong> scientifique avant de vous lancer
              dans les faits.
            </>,
            <>
              <strong>Considérez la possibilité d’utiliser des métaphores simples et pertinentes pour expliquer</strong>{" "}
              le processus de développement des vaccins et les mécanismes d’action des vaccins.
            </>,
          ],
        },
      },

      // (ScienceConcerns)
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              As a trusted health care professional you can reassure your patient that the science behind the vaccines
              is sound. Your recommendation carries significant weight when a patient is considering whether to get a
              vaccine.
            </>,
            <>
              <strong>Ask permission to share</strong> the science before jumping into the facts!
            </>,
          ],
          FR: [
            <>
              À titre de professionnel de la santé de confiance, vous pouvez rassurer votre patient en lui affirmant que
              la science derrière les vaccins est solide. Votre recommandation a beaucoup de poids quand un patient
              essaie de décider s’il va se faire vacciner ou non.
            </>,
            <>
              <strong>Demandez la permission de lui faire part d’information</strong> sur la science avant de vous
              lancer dans les faits!
            </>,
          ],
        },
      },
    },
    // },

    // (ScienceConcerns)

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                It sounds like you&apos;ve been doing a lot of research and reading about the vaccines. I have been,
                too. Can we compare our notes and what we&apos;ve learned about them?
              </>
            ),
            FR: (
              <>
                J’ai l’impression que vous avez fait beaucoup de recherche et que vous avez lu au sujet des vaccins. Moi
                aussi. Peut-être qu’on pourrait comparer ce qu’on a appris à leur sujet?
              </>
            ),
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I appreciate where you&apos;re coming from, and I don&apos;t know if I&apos;ll be able to get all the
                answers for you today. But let&apos;s see what we can get through now, together.
              </>
            ),
            FR: (
              <>
                Je comprends votre point de vue et je ne sais pas si je vais pouvoir vous donner toutes les réponses
                aujourd’hui. Mais voyons les questions auxquelles on peut trouver des réponses ensemble dès maintenant.
              </>
            ),
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                So it&apos;s not about any corners being cut. It&apos;s really more that we dropped everything else and
                poured money and resources into it. When it comes to regulatory waiting times, we didn&apos;t remove the
                red tape, we just got some sharper scissors to cut through the red tape and protect people as fast as
                possible.
              </>
            ),
            FR: (
              <>
                Cela ne veut pas dire qu’ils ont bâclé la tâche. C’est plutôt parce qu’ils ont laissé tomber tous les
                autres projets et injecté de l’argent et des ressources dans ce projet. Pour ce qui est des attentes
                réglementaires, la bureaucratie n’a pas été éliminée. Ils se sont seulement frayé un chemin plus
                rapidement dans tout ça afin de protéger les gens le plus vite possible.
              </>
            ),
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: <>What if no vaccine had ever been created for COVID? What do the next five years look like for you?</>,
            FR: (
              <>
                Et si aucun vaccin n’avait été créé contre la COVID? À quoi vos cinq prochaines années
                ressembleraient-elles?
              </>
            ),
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // (ScienceConcerns)
      engage: {
        content: [
          // Each item (between { }) should be either a subheading or a list of quotes, but not both.
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      It sounds like you&apos;ve been doing a lot of research and reading about the vaccines. I have
                      been, too. Can we compare our notes and what we&apos;ve learned about them?
                    </>
                  ),
                  FR: (
                    <>
                      J’ai l’impression que vous avez fait beaucoup de recherche et que vous avez lu au sujet des
                      vaccins. Moi aussi. Peut-être qu’on pourrait comparer ce qu’on a appris à leur sujet?
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Let me ask you, is it something specific with the vaccines or how they were made, or is it just
                      more vaccination overall?
                    </>
                  ),

                  FR: (
                    <>
                      J’aimerais savoir s’il y a quelque chose de précis au sujet des vaccins ou de leur fabrication qui
                      vous inquiète, ou si c’est la vaccination dans son ensemble qui vous tracasse?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      What sorts of things worry you about the vaccines? What information would you need to feel safe or
                      confident in getting one?
                    </>
                  ),
                  FR: (
                    <>
                      Quelles sortes de choses vous inquiètent au sujet des vaccins, au juste? De quelle information
                      auriez-vous besoin pour vous sentir à l’aise ou en confiance d’en avoir un?
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I appreciate where you&apos;re coming from, and I don&apos;t know if I&apos;ll be able to get all
                      the answers for you today. But let&apos;s see what we can get through now, together.
                    </>
                  ),
                  FR: (
                    <>
                      Je comprends votre point de vue et je ne sais pas si je vais pouvoir vous donner toutes les
                      réponses aujourd’hui. Mais voyons les questions auxquelles on peut trouver des réponses ensemble
                      dès maintenant.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The media coverage of this has been really challenging to follow, eh? It seems like every day
                      there&apos;s something new and it contradicts what was said before, which can make it even more
                      difficult to tease out what&apos;s the truth.
                    </>
                  ),
                  FR: (
                    <>
                      La couverture médiatique entourant les vaccins est vraiment difficile à suivre, n’est-ce pas? On
                      dirait qu’il y a quelque chose de nouveau tous les jours, qui contredit ce qui a été dit avant, ce
                      qui peut être encore plus difficile de trouver la vérité.
                    </>
                  ),
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The information changes quickly, and I can see how, for folks who aren&apos;t as familiar with
                      vaccines and haven&apos;t studied diseases, it looks like we&apos;re flipping and flopping all
                      over the place and we don&apos;t know what the heck we&apos;re doing. But I think my job in
                      working with you as a patient is to think about what&apos;s in the best interest of you and your
                      health.
                    </>
                  ),
                  FR: (
                    <>
                      L’information évolue vite et je peux comprendre comment les personnes qui ne connaissent pas les
                      vaccins et qui n’ont pas étudié les maladies ont l’impression qu’on change constamment d’idée et
                      qu’on ne sait pas ce qu’on fait. Mais je pense que mon rôle avec vous, mon patient, c’est de
                      penser à ce qu’il y a de mieux à faire pour vous et votre santé.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Can I share with you what I know about the vaccines and a little more about the science behind
                      them?
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que je peux vous faire part de ce que je sais sur les vaccins et vous parler un peu de la
                      science derrière les vaccins?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Would you be interested in hearing from me about how the vaccines work? You&apos;ve known me for a
                      fair amount of time. You may not know how much of a science nerd I am, but do you have a moment? I
                      can outline how we got here so quickly? Because, it&apos;s actually a cool science story.
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que ça vous intéresserait que je vous explique un peu comment les vaccins fonctionnent? Ça
                      fait un bon bout de temps que vous me connaissez. Vous ne savez peut-être pas à quel point je suis
                      mordu des sciences, mais avez-vous quelques instants pour qu’on en parle? Je pourrais vous
                      expliquer comment on en est arrivés là si vite? Parce qu’en fait, du point de vue scientifique,
                      c’est une histoire plutôt géniale.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      So do you remember Ebola and another virus called MERS, M-E-R-S? We love our acronyms in science!
                      But, researchers were actually looking at mRNA technology to fight those two conditions but they
                      disappeared too quickly, so the mRNA technology was put on the shelf...
                    </>
                  ),
                  FR: (
                    <>
                      Vous souvenez-vous du virus Ebola et d’un autre virus appelé SRMO, le syndrome respiratoire du
                      Moyen-Orient? Les scientifiques adorent les acronymes! En fait, les chercheurs faisaient des
                      recherches sur la technologie de l’ARNm pour combattre ces deux virus, mais ils ont disparu
                      tellement vite que la technologie de l’ARNm a été reléguée aux oubliettes.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "redTapemRNA",
                fullStoryLinkText: { EN: "Read the full story", FR: "" },
                // <div className="flex">
                //   <div className="pr-2 ">Read the full story</div>
                //   {/* <BsArrowRight size="24" /> */}
                // </div>
              },

              {
                text: {
                  EN: (
                    <>
                      Can I personally vouch for every CEO of every big pharma company? Can I personally vouch that no
                      one in history has ever done something shady to try and make money? Absolutely I can&apos;t. And
                      yet in my work, every single day I see people&apos;s whose lives are changed for the better, as a
                      result of drug therapies developed by pharmaceutical companies. I see people who live longer,
                      fuller lives because we&apos;re able to use the medications that are out there. And the vaccine is
                      one of those drugs – longer, fuller lives for all of us. Better lives. Lives without masks and
                      distancing and restrictions.
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que je peux me porter garant de tous les chefs de la direction de toutes les grandes
                      entreprises pharmaceutiques? Est-ce que je peux affirmer que personne au fil de l’histoire n’a
                      fait quelque chose de croche pour essayer de faire de l’argent? Absolument pas. Et pourtant, dans
                      le cadre de mes fonctions, je vois tous les jours des personnes dont la vie a changé en mieux
                      grâce aux médicaments mis au point par les entreprises pharmaceutiques. Je vois des gens qui
                      vivent plus longtemps et qui ont des vies plus remplies grâce aux médicaments qui existent. Et le
                      vaccin fait partie de ces médicaments. Il permet à tous de vivre plus longtemps et d’avoir une vie
                      plus remplie, une meilleure vie. Une vie sans masque, sans distanciation physique et sans
                      restrictions.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You don&apos;t trust the pharmaceutical industry. And that&apos;s fair because let&apos;s face it
                      – the number one threat to evidence-based practice right now is deliberate distortion of entire
                      literatures by the pharmaceutical industry. So I don&apos;t blame you for not trusting Big Pharma.
                      I don&apos;t either. On the other hand, the doubt about vaccines was created by a guy who
                      basically committed a fraud for his own profit [source]. So you got to be alert for scams on both
                      sides of this.
                    </>
                  ),
                  FR: (
                    <>
                      Vous n’avez pas confiance en l’industrie pharmaceutique. Je peux vous comprendre parce qu’en fait,
                      la menace numéro un à la pratique factuelle en ce moment, c’est la déformation intentionnelle de
                      toute la documentation produite par l’industrie pharmaceutique. Je ne vous reproche donc pas de ne
                      pas faire confiance aux grandes entreprises pharmaceutiques. C’est la même chose pour moi. Cela
                      dit, le doute à l’égard des vaccins a été semé par un homme qui a, pour ainsi dire, fait de la
                      fraude pour son propre profit [source]. Il faut donc être à l’affût des arnaques des deux côtés de
                      la médaille.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      So I guess [hearing about serious side effects from the vaccine] is like seeing a news story about
                      an airplane crash. Even though it happens incredibly rarely, the media make sure you know about
                      it. It&apos;s been like this with the vaccine ever since it was approved. Everybody&apos;s very
                      interested, rightfully so, in how things go, every little twist and turn. It all gets reported on.
                      But all the reporting on very rare events, combined with us being cooped up, all that makes people
                      anxious. So I&apos;m wondering whether maybe if we could find a reliable source from one of the
                      regulatory agencies or something to talk about safety. It might be worthwhile thinking about that.
                    </>
                  ),
                  FR: (
                    <>
                      Donc, j’imagine que [d’entendre parler des graves effets secondaires du vaccin], c’est comme
                      écouter la nouvelle d’un écrasement d’avion. Même si ça se produit très peu souvent, les médias se
                      font un devoir de nous en parler. C’est ce qui se passe avec le vaccin depuis qu’il a été
                      approuvé. Tout le monde s’intéresse, non sans raison, à ce qui se passe et à toutes les tournures
                      que prend la situation. Il y a tout plein de reportages à ce sujet. Mais tous les reportages
                      portent sur les événements qui se produisent très rarement. Quand on ajoute ça au fait qu’on ne
                      peut pas trop sortir, tout ça, ça rend les gens anxieux. Alors je me demande si on peut peut-être
                      trouver une source fiable d’un des organismes règlementaires ou quelque chose du genre pour parler
                      de l’innocuité du vaccin. Ça pourrait valoir la peine d’en parler.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
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
                  FR: (
                    <>
                      Il a fallu de nombreuses années pour mettre au point la technologie de l’ARNm. Je sais que les
                      gens paniquent et se disent :{" "}
                      <i> « Oh, ma foi. On a eu en vaccin en moins d’un an. C’est pas possible. »</i> Mais ça fait des
                      décennies que ce genre d’approche à base d’ARNm est en développement. On a donc pu profiter de
                      travaux qui étaient déjà faits.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
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
                  FR: (
                    <>
                      Des centaines de millions de personnes se sont fait vacciner dans le monde entier. Le processus de
                      développement de ces vaccins s’est fait plus vite qu’à l’habitude quand les scientifiques sont
                      passés de « <i>c’est quoi ce virus?</i> » à «{" "}
                      <i>comment peut-on faire un vaccin contre ce virus?</i> ». C’est vrai. Mais aucune étape n’a été
                      brûlée. Je me suis penché là-dessus. La raison pour laquelle ils ont pu aller plus vite, c’est
                      parce que les investissements ont été plus grands qu’ils ne l’avaient jamais été. Et ils ont
                      travaillé ensemble, comme cela n’a jamais été le cas avant.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Regular vaccines work by showing your immune system one kind of spike and it learns to make
                      antibodies against THAT kind of spike. But if you show it a spike that&apos;s a little different,
                      your immune system has to think harder about it. But the mRNA uses a different approach to
                      vaccines. It doesnapos;t show your immune system one view of the virus and say &apos;good
                      luck.&apos; It gives your immune system the tools to be able to figure out that what it&apos;s
                      seeing is LIKE the old one, but not exactly the old one. Instead of being handed a hammer that
                      hammers down a single kind of nail, the mRNA vaccines give you more of a tool belt. Your immune
                      system can say, &apos;Okay well it&apos;s like that old one, but it&apos;s not the same.&apos; It
                      helps your immune system attack the newer stuff too.
                    </>
                  ),
                  FR: (
                    <>
                      Les vaccins ordinaires montrent à votre système immunitaire une sorte de spicule, et le système
                      apprend à faire des anticorps contre CE genre de spicule. Mais si on lui montre un spicule un peu
                      différent, le système immunitaire doit y penser plus fort. L’approche de l’ARNm en matière de
                      vaccination est différente. Elle ne montre pas une simple vue du virus à votre système immunitaire
                      pour finir par lui dire « bonne chance ». Elle donne à votre système immunitaire les outils
                      nécessaires pour qu’il sache que ce qu’il voit, c’est COMME l’ancien, mais que ce n’est pas tout à
                      fait l’ancien. Au lieu de vous donner un marteau qui martèle une seule sorte de clou, les vaccins
                      à ARNm vous donnent plutôt une ceinture à outils. Votre système immunitaire peut alors dire : «
                      Alors, c’est comme l’ancien, mais ce n’est pas l’ancien ». Il aide votre système immunitaire à
                      s’attaquer à ce qu’il y a de plus nouveau aussi.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      It&apos;s true, a vaccinated person might still get COVID. Unlikely, but you might. What I&apos;m
                      seeing - and what the data is saying – is that people who get the vaccine, and who then get a
                      breakthrough case, they don&apos;t suffer nearly as badly. Not nearly as sick. Not in the
                      hospital, and not recovering with long COVID.
                    </>
                  ),
                  FR: (
                    <>
                      C’est vrai qu’une personne vaccinée peut quand même attraper la COVID. C’est peu probable, mais
                      c’est quand même possible. Ce que je vois – et ce que les données nous racontent – c’est que les
                      personnes vaccinées qui finissent par l’attraper sont loin de souffrir autant. Elles sont beaucoup
                      moins malades. Elles ne sont pas hospitalisées et elles ne souffrent pas du syndrome post-COVID.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The vaccine does keep most people from getting COVID, but some people get it anyway. On the up
                      side, those people that get it anyway, they&apos;re not as sick for as long. They don&apos;t end
                      up in the hospital and on ventilators nearly as much. And you know, they&apos;re not getting long
                      COVID either. They&apos;re not the people who get &apos;better&apos; and then six months later,
                      still can&apos;t climb a flight of stairs.
                    </>
                  ),
                  FR: (
                    <>
                      Le vaccin empêche la plupart des gens d’attraper la COVID, mais certaines personnes finissent par
                      l’avoir quand même. Par contre, les personnes qui l’attrapent quand même ne sont pas malades aussi
                      longtemps. Elles n’aboutissent pas à l’hôpital et n’ont pas autant besoin d’être branchées à un
                      respirateur. Et vous savez, elles ne souffrent pas du syndrome post-COVID aussi. Elles ne font pas
                      partie des personnes qui « récupèrent », mais qui ne sont toujours pas capables de monter un
                      escalier six mois plus tard.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What we&apos;re seeing with the unvaccinated people is that they&apos;re filling the ICUs. They
                      make the vast majority of the people in ICU but they&apos;re a real minority when it comes to the
                      whole population. That tells you something, right? Yeah you can still get it, but you&apos;re not
                      going to end up being wrecked from it.
                    </>
                  ),
                  FR: (
                    <>
                      Ce qui arrive chez les personnes non vaccinées, c’est qu’elles remplissent les unités de soins
                      intensifs. Elles représentent la grande majorité des personnes aux soins intensifs, mais c’est
                      tout de même une minorité par rapport à l’ensemble de la population. Ça veut dire quelque chose,
                      non? Oui, vous pouvez toujours l’attraper, mais vous ne serez pas autant amoché.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been working in this job for 20 years and we make lots of recommendations today that
                      differ from when I started &mdash; because we have a commitment to lifelong learning and adapting
                      our advice based on new research.
                    </>
                  ),
                  FR: (
                    <>
                      Ça fait 20 ans que j’exerce ma profession et de nos jours, on fait beaucoup de recommandations qui
                      diffèrent de celles qu’on faisait dans le temps parce qu’on apprend toujours quelque chose de
                      nouveau et qu’on adapte nos conseils en fonction des nouvelles recherches.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The tricky part with COVID is we don&apos;t have time to sit back and do more research before we
                      make our next recommendation &mdash; we have to act fast. But the new research and guidance is
                      always grounded in our longstanding knowledge about vaccines and immunity in general &mdash; so
                      it&apos;s not just pulled out of a hat.
                    </>
                  ),
                  FR: (
                    <>
                      Ce qui est difficile avec la COVID, c’est qu’on n’a pas le temps d’attendre et de pousser nos
                      recherches plus loin avant de faire la prochaine recommandation. Il faut agir vite. Mais les
                      nouvelles recherches et les nouveaux conseils sont toujours enracinés dans nos anciennes
                      connaissances des vaccins et de l’immunité en général. Rien ne se fait au hasard.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      We&apos;re learning as we go forward, and we&apos;re trying to be as safe as we can. So,
                      we&apos;ve learned from some very rare events. 1 in 100,000 events. So, one person out of 100,000
                      gets a blood clot. It&apos;s very small numbers but we&apos;re taking it really seriously. By
                      comparison your chances, as a Canadian, of dying in a traffic accident – which is a chance we take
                      every time we get in a car – that chance is 1 in 20,000. I hope that putting it in that context
                      helps.
                    </>
                  ),
                  FR: (
                    <>
                      On apprend au fur et à mesure qu’on avance, et on essaie de faire en sorte que la situation soit
                      la plus sûre possible. On a donc appris à partir d’événements très rares. Un événement sur 100
                      000. Ça veut dire qu’une personne sur 100 000 va avoir un caillot sanguin. C’est un très petit
                      nombre, mais on prend ça très au sérieux. On peut comparer ça à vos chances, en tant que Canadien,
                      de mourir d’un accident de la route – un risque qu’on prend chaque fois qu’on va en voiture –
                      cette chance étant d’une sur 20 000. J’espère que ce genre de comparaison vous aide à mieux
                      comprendre.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve had my vaccine...[
                      <i>Share your experience of the vaccination process and/or side effects here.</i>] I really
                      didn&apos;t have any reservations about having the vaccine personally. I was actually quite
                      excited to get it! I know that the science sounds new and modern when they talk about this mRNA
                      vaccine and how it works in a different way compared to the previous way that vaccines have been
                      made, but it has given us some real advantages.
                    </>
                  ),
                  FR: (
                    <>
                      J’ai déjà été vacciné… [{" "}
                      <i>
                        Faites part de votre expérience du point de vue du processus de vaccination et/ou des effets
                        secondaires ici.
                      </i>
                      ] Personnellement, je n’ai pas hésité à recevoir le vaccin. En fait, j’avais plutôt hâte de
                      l’avoir! Je sais que la science semble nouvelle et moderne quand ils parlent de ce vaccin à ARNm
                      et de son fonctionnement comparativement aux vaccins traditionnels, mais ça nous a donné de vrais
                      avantages.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      If we have increased volumes of people getting sick, the other thing to think about is: do we have
                      enough space for them in hospital? We could wait to have enough people get sick and die, and
                      enough people get sick and not die, so that we build up the &lsquo;herd immunity&rsquo; that
                      people talk about. But for me, the vaccines get us to the same end point faster, sort of like a
                      FastPass at Disneyland. A FastPass without all the hospitalizations and deaths.
                    </>
                  ),
                  FR: (
                    <>
                      Si le nombre de personnes qui tombent malades augmente tout le temps, il faut se demander : «
                      Est-ce qu’on aura assez de place pour eux à l’hôpital? » On pourrait toujours attendre qu’il y ait
                      suffisamment de personnes qui tombent malades et meurent, ou suffisamment de personnes malades qui
                      ne meurent pas afin d’atteindre l’immunité collective dont les gens parlent. Mais à mon avis, les
                      vaccins nous amèneront au même point, mais plus vite, un peu comme le FastPass à Disneyland. Un
                      FastPass sans toutes les hospitalisations et les décès.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      We want to keep people out of the ICU. Those ICU teams are really struggling. There&apos;s nurses
                      and respiratory therapists who&apos;ve worked through all their weekends and evenings.
                      They&apos;ve had their vacations canceled. They&apos;re just bloody exhausted.
                    </>
                  ),
                  FR: (
                    <>
                      Il ne faut pas engorger les unités de soins intensifs. Les équipes des soins intensifs n’ont pas
                      la vie facile. Les infirmières et les inhalothérapeutes qui travaillent pendant toutes leurs fins
                      de semaine et leurs soirées, dont les vacances ont été annulées, sont tout simplement épuisés.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The vaccines will help ease pressure off hospitals so people can have surgeries again. At the
                      shallow end of the pool you&apos;ve got folks who need hip replacements and they&apos;ve been
                      waiting for a year. A year. In pain. Waiting to be able to walk again. And that&apos;s the shallow
                      end. At the deep end of the pool you&apos;ve got people whose kids need surgery, or who roll up
                      with a heart attack or a burst appendix, and things are going slow or not happening. Heart attack
                      and slow. Appendix and slow. These aren&apos;t words that go together well. At least not for the
                      patient. If we get enough people vaccinated that we can knock down enough hospitalizations, that
                      lady can get her hip replacement and the ambulance can get the heart attack straight into surgery.
                      You&apos;re right, we&apos;re not gonna make COVID go away, but if we can just knock it down
                      enough that can have huge impacts for others.
                    </>
                  ),
                  FR: (
                    <>
                      Les vaccins vont aider à désengorger les hôpitaux et permettre aux médecins de faire les
                      chirurgies nécessaires. D’un côté, il y a des personnes qui attendent un remplacement de la hanche
                      depuis un an. Un an. Ces personnes souffrent. Elles attendent de pouvoir recommencer à marcher.
                      Ça, c’est un côté de la médaille. Et de l’autre côté, il y a des gens dont les enfants doivent se
                      faire opérer, ou des personnes qui font une crise cardiaque ou une appendicite, et les choses
                      bougent lentement, ou pas du tout. Une crise cardiaque, et les choses vont lentement. Une
                      appendicite, et les choses vont lentement. Ces mots ne vont pas bien ensemble. Du moins, pas pour
                      le patient. Si suffisamment de personnes se font vacciner au point d’éviter assez
                      d’hospitalisations, une certaine dame, par exemple, pourrait se faire remplacer la hanche, ou les
                      ambulanciers pourraient amener le patient qui vient d’avoir une crise cardiaque directement à
                      l’hôpital pour se faire opérer. Vous avez raison en ce sens que la COVID ne va pas s’en aller,
                      mais si on peut éviter suffisamment de cas, ça pourrait avoir un énorme impact sur d’autres
                      personnes.
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      If a large portion of the population don&apos;t get the vaccine, this could mean working from
                      home, our kids in and out of school, no social activities, et cetera, for the next several years.
                      Which feels kind of gross to me.
                    </>
                  ),
                  FR: (
                    <>
                      Si une grande partie de la population ne se fait pas vacciner, les gens pourraient être obligés de
                      travailler à la maison, les enfants ne seraient pas toujours en classe, il n’y aurait pas
                      d’activités sociales, etc. pendant plusieurs années. Ce qui est effrayant à mon avis.
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The vaccine developers were able to move quickly because the government gave them a lot of money.
                      Usually these trials take a long time because they are very expensive but for COVID, that
                      financial risk was taken away and that&apos;s a big part of what shortened the time.
                    </>
                  ),
                  FR: (
                    <>
                      Les responsables du développement des vaccins ont réussi à faire vite parce que le gouvernement
                      leur a octroyé des sommes importantes. En général, la mise à l’essai des vaccins prend du temps
                      parce que ça coûte très cher, mais dans le cas de la COVID, le risque financier lié à la recherche
                      avait été éliminé, ce qui explique en grande partie pourquoi les essais se sont faits plus
                      rapidement.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },

          {
            subheading: {
              EN: "'I already had COVID, why do I need to get the vaccine?'",
              FR: "« J’ai déjà eu la COVID. Pourquoi est-ce que je me ferais vacciner? »",
            },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      My daughter just learned to drive &mdash; I taught her to begin with. She picked up all my bad and
                      lazy habits. Then I had a professional teach her and she&apos;s a great driver now, and I pay less
                      on insurance for her too. A vaccine after the infection is like that professional
                      &lsquo;tutoring&rsquo; to help your body be really good at fighting off COVID.
                    </>
                  ),
                  FR: (
                    <>
                      Ma fille vient tout juste d’apprendre à conduire. C’est moi qui lui ai montré au début. Elle a
                      donc pris toutes mes mauvaises manières. Ensuite, un professionnel lui a donné des cours de
                      conduite et maintenant, elle conduit très bien. Ses assurances coûtent moins cher, aussi. La
                      vaccination après l’infection, c’est comme cet « enseignement » professionnel. Elle aide votre
                      corps à bien combattre la COVID.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      We do have some emerging real-world data on patients who have been sick with COVID and we are
                      specifically looking at whether these folks might be able to have just a single dose of vaccine to
                      &lsquo;boost&rsquo; their immunity to better levels in the longer term.
                    </>
                  ),
                  FR: (
                    <>
                      Des données du monde réel commencent à sortir à propos des patients qui ont été atteints de la
                      COVID, et des études sont effectuées pour voir s’il serait possible de ne leur donner qu’une seule
                      dose de vaccin pour améliorer leur immunité à plus long terme.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              // (ScienceConcerns)
              {
                text: {
                  EN: (
                    <>
                      In comparing the antibodies on patients post-vaccine versus post illness we see a better immunity
                      from the vaccine &mdash; likely because the body is not so busy with being sick in the vaccine
                      group, so it can focus its attention on building more antibodies instead of trying not to die!
                    </>
                  ),
                  FR: (
                    <>
                      Quand on compare les anticorps des patients qui ont eu le vaccin par opposition à ceux qui ont eu
                      la maladie, on constate que l’immunité est meilleure dans le cas du vaccin, probablement parce que
                      le corps du groupe de personnes vaccinées n’est pas occupé à combattre la maladie, ce qui lui
                      permet de fabriquer plus d’anticorps au lieu d’essayer de survivre!
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I know, you think your immune system should be able to do it alone. If what you are saying is true
                      then you would chose to not wash your hands after using the bathroom, or wash your produce before
                      eating it, or not refrigerate your eggs because your immune system just needs to &lsquo;figure
                      out&rsquo; how to fight off E.coli and salmonella. But I bet you wash your hands and use your
                      fridge, right? When Dr. Semmelweis first proposed in the 1900s that washing hands would reduce
                      infections everyone thought he was crazy. But I bet you are glad I wash my hands in the office
                      when I see you now!
                    </>
                  ),
                  FR: (
                    <>
                      Je sais que vous pensez que votre système immunitaire devrait être capable de combattre seul. Si
                      ce que vous dites était vrai, alors vous décideriez aussi de ne pas vous laver les mains après
                      être allé aux toilettes, ou vous ne laveriez pas vos fruits et légumes avant de les manger, ou
                      vous ne mettriez pas vos œufs au réfrigérateur parce que votre système immunitaire devrait
                      simplement arriver à comprendre comment combattre le E. coli et la salmonelle par lui-même. Mais
                      je serais prêt à parier que vous vous lavez les mains et que vous réfrigérez vos aliments, non? La
                      première fois que le Dr Semmelweis a suggéré, dans les années 1900, que le lavage des mains
                      réduirait les infections, tout le monde pensait qu’il était fou. Mais je suis certain que vous
                      êtes content que je me lave les mains avant de vous recevoir dans mon cabinet!
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (ScienceConcerns)
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      What if no vaccine had ever been created for COVID? What would the next five years look like for
                      you?
                    </>
                  ),
                  FR: (
                    <>
                      Et si aucun vaccin n’avait été créé contre la COVID? À quoi vos cinq prochaines années
                      ressembleraient-elles?
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I hear you wondering, &lsquo;<i>oh, it&apos;s still kind of new. It&apos;s experimental.</i>
                      &rsquo; We have a lot of data today, but we&apos;ll have even more as the weeks go by and more
                      people get the vaccine. And I promise I will dig it up for you. And I&apos;ll tell you what I know
                      and what I don&apos;t know at that point. And maybe we&apos;ll make a decision together then.
                    </>
                  ),
                  FR: (
                    <>
                      Je vous entends penser : « <i>Oh, mais c’est encore assez nouveau. C’est expérimental.</i>' » On a
                      beaucoup de données en ce moment, mais on en aura encore plus à mesure que les semaines passeront
                      et que de plus en plus de personnes se feront vacciner. Et je vous promets de trouver cette
                      information pour vous. Et je vous dirai ce que je saurai et ce que je ne saurai pas à ce
                      moment-là. Et peut-être qu’on prendra une décision ensemble rendu là.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      When was the last time you paid such close attention to scientific research related to health
                      recommendations? I would argue we are all just a little freaked out right now and so this can
                      sometimes be an outlet for that fear.
                    </>
                  ),
                  FR: (
                    <>
                      À quand remonte la dernière fois que vous avez porté tant d’attention à la recherche scientifique
                      concernant les recommandations de santé? Je dirais qu’on a tous un peu peur en ce moment, et que
                      c’est parfois comme ça qu’on exprime notre peur.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I see you as a leader within your community, and if I can help you understand where I&apos;m
                      coming from with this, I honestly feel like with the right information, we can help many, many
                      people. If you can partner with me, I&apos;m more than willing to have a look through your
                      literature, and we can figure out where some of the information on that is coming from, and
                      hopefully help you to understand, and make the best choice for you, and your family, and your
                      community.
                    </>
                  ),
                  FR: (
                    <>
                      Je vois que vous êtes un leader dans votre communauté et si je peux vous aider à comprendre ce que
                      je sais, je crois qu’avec la bonne information, on pourra aider bien des personnes. Si vous pouvez
                      faire équipe avec moi, il me fera plaisir de jeter un coup d’œil à votre documentation pour
                      déterminer d’où vient vraiment l’information que vous avez et, espérons-le, vous aider à la
                      comprendre et à faire les meilleurs choix pour vous, votre famille et votre communauté.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (ScienceConcerns Resources)
    resources: [
      {
        title: {
          EN: <>CanVax - How do the mRNA vaccines work?</>,
          FR: <>CanVax - Comment fonctionnent les vaccins à base d’ARNm contre la COVID-19?</>,
        },
        linkText: { EN: <>Educational video from CanVax</>, FR: <>Vidéo éducative de CanVax</> },
        link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
        // Note: link can be either a string (as above) or an object (as below, if there's both a French site and an English one).
        // link: {
        //   EN: "https://www.canada.ca/en/public-health/services/vaccination-children.html",
        //   FR: "https://www.canada.ca/fr/sante-publique/services/vaccinations-pour-enfants.html ",
        // },

        description: {
          EN: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
          FR: <>Vidéo de 30 secondes de CanVax sur YouTube sur le fonctionnement des vaccins à ARNm. (2021)</>,
        },
      },

      {
        title: {
          EN: <>University of Waterloo - mRNA vaccine myths factsheet</>,
          FR: <>Université de Waterloo - Fiche sur les mythes entourant les vaccins à ARNm</>,
        },
        linkText: {
          EN: <>mRNA vaccine myths factsheet for patients</>,
          FR: <>Fiche sur les mythes entourant les vaccins à ARNm à l’intention des patients</>,
        },
        link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
        description: {
          EN: (
            <>
              A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA
              vaccines. (2021)
            </>
          ),
          FR: (
            <>
              Brève fiche d’information destinée aux patients au sujet de certains des mythes et idées fausses
              concernant les vaccins à ARNm. (2021)
            </>
          ),
        },
      },

      {
        title: { EN: <>The Long Road to the mRNA vaccines</>, FR: <>Le long chemin vers les vaccins à ARNm</> },
        linkText: { EN: <>CIHR Website and Timeline</>, FR: <>Site Web des IRSC et chronologie</> },
        link: "https://cihr-irsc.gc.ca/e/52424.html",
        description: {
          EN: <>CIHR&apos;s overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
          FR: <>Aperçu et chronologie des IRSC concernant le développement des vaccins à ARNm. (avril 2021)</>,
        },
      },
      {
        title: { EN: <>Safety of the COVID-19 Vaccines</>, FR: <>L’innocuité des vaccins contre la COVID-19</> },
        linkText: { EN: <>WHO website and infographics</>, FR: <>Site Web et infographie de l’OMS</> },
        link: "https://www.who.int/news-room/feature-stories/detail/safety-of-covid-19-vaccines",
        description: {
          EN: (
            <>
              WHO&apos;s overview page looking at the safety of the COVID-19 vaccines. Patient-appropriate, with
              infographics and videos. (March 2021)
            </>
          ),
          FR: (
            <>
              Aperçu de l’Organisation mondiale de la santé concernant l’innocuité des vaccins contre la COVID-19.
              Information destinée aux patients, avec infographie et vidéos. (mars 2021)
            </>
          ),
        },
      },
      {
        title: {
          EN: <>COVID-19 Vaccine Frequently Asked Questions</>,
          FR: <>COVID-19 Vaccine Frequently Asked Questions</>,
        },
        linkText: { EN: <>ImmunizeBC Vaccine FAQ Page</>, FR: <>Page des FAQ d’ImmunizeBC sur les vaccins</> },
        link: "https://immunizebc.ca/covid-19-vaccine-frequently-asked-questions",
        description: {
          EN: (
            <>
              ImmunizeBC&apos;s FAQ page for the COVID-19 vaccines. Includes sections on safety, allergies, and side
              effects. (Updated regularly, 2021).
            </>
          ),
          FR: (
            <>
              FAQ d’ImmunizeBC sur les vaccins contre la COVID-19, comprenant des sections sur l’innocuité, les
              allergies et les effets secondaires. (mis à jour régulièrement, 2021)
            </>
          ),
        },
      },
      {
        title: { EN: <>How Pfizer Makes Its Covid-19 Vaccine</>, FR: <>How Pfizer Makes Its Covid-19 Vaccine</> },
        linkText: { EN: <>New York Times news article</>, FR: <>Article du New York Times</> },
        link: "https://www.nytimes.com/interactive/2021/health/pfizer-coronavirus-vaccine.html",
        description: {
          EN: <>Detailed examination of how Pfizer produces the mRNA vaccines. New York Times article. (April 2021).</>,
          FR: (
            <>
              Information détaillée sur la façon dont Pfizer produit les vaccins à ARNm. Article du New York Times.
              (avril 2021)
            </>
          ),
        },
      },
      {
        title: { EN: <>Is the COVID-19 vaccine safe?</>, FR: <>Is the COVID-19 vaccine safe?</> },
        linkText: { EN: <>Johns Hopkins Medicine web resource</>, FR: <>Ressources Web de Johns Hopkins Medicine</> },
        link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/is-the-covid19-vaccine-safe",

        description: {
          EN: (
            <>Hopkins Medicine fact page and resources for exploring the safety of the COVID-19 vaccines. (May 2021).</>
          ),
          FR: (
            <>
              Faits et ressources publiés dans Hopkins Medicine au sujet de l’innocuité des vaccins contre la COVID-19.
              (mai 2021)
            </>
          ),
        },
      },
      {
        title: { EN: <>How did you convince others? (Twitter)</>, FR: <>How did you convince others? (Twitter)</> },
        linkText: { EN: <>Twitter thread</>, FR: <>Fil de discussion Twitter</> },
        link: "https://twitter.com/DoYouEvenLif/status/1405265498166595585?s=20",
        description: {
          EN: (
            <>
              Twitter thread about hesitancy discussions and effective counselling strategies for others. Use Twitter at
              your own risk. (June 2021).
            </>
          ),
          FR: (
            <>
              Fil de discussion Twitter sur les hésitations et les stratégies de counseling efficaces pour autrui.
              L’utilisation de Twitter se fait aux risques de l’utilisateur. (juin 2021)
            </>
          ),
        },
      },
    ],
  },

  mRNAConcerns: {
    related: [""],
    overview: {
      image: "",

      theySay: {
        image: "Hesitancy Group 3.svg",
        content: {
          EN: [
            <>&ldquo;I&apos;ve heard that the mRNA vaccines will alter my DNA.&rdquo;</>,
            <>
              &ldquo;I am not willing to have anything injected into my body that could potentially rewrite my
              DNA.&rdquo;
            </>,
            <>&ldquo;Will my cells be permanently reprogrammed?&rdquo;</>,
          ],
          FR: [
            <>« J’ai entendu dire que les vaccins à ARNm vont modifier mon ADN. »</>,
            <>« Je ne veux pas d’injections dans mon corps qui pourraient modifier mon ADN. »</>,
            <>« Est-ce que mes cellules vont être reprogrammées en permanence? »</>,
          ],
        },
      },

      thingsToConsider: {
        image: "doctorBlackManBeard.svg",
        content: {
          EN: [
            <>Affirm with the patient that this concern is shared by others.</>,
            <>Use clear metaphors and straight forward analogies to explain how the mRNA vaccines work.</>,
          ],
          FR: [
            <>Affirmez au patient qu’il n’est pas le seul à se soucier de ça.</>,
            <>
              Utilisez des métaphores et des analogies claires et directes pour expliquer le fonctionnement des vaccins
              à ARNm.
            </>,
          ],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              The mRNA vaccines are safe and never interact with a patient&apos;s DNA. Using clear metaphors to explain
              how these vaccines work can help your patient feel more informed and comfortable about these types of
              vaccines.
            </>,
          ],
          FR: [
            <>
              Les vaccins à ARNm sont sûrs et n’agissent jamais sur l’ADN d’un patient. L’utilisation de métaphores
              claires pour expliquer le fonctionnement de ces vaccins peut aider votre patient à se sentir mieux informé
              et plus à l’aise avec ces types de vaccins.
            </>,
          ],
        },
      },
    },
    // (mRNAConcerns)
    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                Maybe if you don&apos;t mind, you can share with me what&apos;s behind your concerns about what the
                vaccine might do to you?
              </>
            ),
            FR: (
              <>
                Si ça ne vous dérange pas, j’aimerais que vous me fassiez part de vos inquiétudes à propos de ce que le
                vaccin pourrait vous faire?
              </>
            ),
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I get that there&apos;s a lot of discussion out there about how the vaccines work and some of it can be
                concerning. Sometimes it can be difficult to make sense of something so new and so different from what
                we&apos;ve had before.
              </>
            ),
            FR: (
              <>
                Je sais qu’il y a beaucoup de discussions au sujet du fonctionnement des vaccins, et certaines des
                discussions peuvent être inquiétantes. Il peut parfois être difficile de donner un sens à quelque chose
                de si nouveau et différent de ce que nous avons vu par le passé.
              </>
            ),
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                So this concern about DNA is something I&apos;ve heard quite a bit. And because of that, I&apos;ve
                looking into this quite a bit to make sure that I could effectively answer people&apos;s questions and
                concerns. Is it okay if I share some of the vaccine science with you?
              </>
            ),
            FR: (
              <>
                Donc, cette inquiétude au sujet de l’ADN, j’en ai entendu souvent parler. J’ai donc fait pas mal de
                recherche à ce sujet pour pouvoir bien répondre aux questions et aux inquiétudes des gens. Est-ce que je
                peux vous faire part de certains faits scientifiques au sujet des vaccins?
              </>
            ),
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                Would you feel safer if you could get a vaccine without the mRNA? There are other vaccine options we can
                explore.
              </>
            ),
            FR: (
              <>
                Est-ce que vous vous sentiriez mieux si vous pouviez avoir un vaccin sans ARNm? On peut explorer
                d’autres options de vaccins.
              </>
            ),
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // (mRNAConcerns)
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Maybe if you don&apos;t mind, you can share with me what&apos;s behind your concerns about what
                      the vaccine might do to you?
                    </>
                  ),
                  FR: (
                    <>
                      Si ça ne vous dérange pas, j’aimerais que vous me fassiez part de vos inquiétudes à propos de ce
                      que le vaccin pourrait vous faire?
                    </>
                  ),
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I do want to challenge you a little bit there. Just to make sure we have the right information and
                      are on the same page.
                    </>
                  ),
                  FR: (
                    <>
                      Je vais oser vous contredire un peu ici. Je veux faire en sorte que vous ayez la bonne
                      information, histoire d’être sur la même longueur d’onde.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I get that there&apos;s a lot of discussion out there about how the vaccines work and some of it
                      can be concerning. Sometimes it can be difficult to make sense of something so new and so
                      different from what we&apos;ve had before.
                    </>
                  ),
                  FR: (
                    <>
                      Je sais qu’il y a beaucoup de discussions au sujet du fonctionnement des vaccins, et certaines des
                      discussions peuvent être inquiétantes. Il peut parfois être difficile de donner un sens à quelque
                      chose de si nouveau et différent de ce que nous avons vu par le passé.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I mean it&apos;s a really complex thing, right? Just like you, I&apos;ve been learning about the
                      vaccines as well. And it&apos;s something that&apos;s so new to everyone I think we&apos;re all
                      just trying to figure out what&apos;s going on.
                    </>
                  ),
                  FR: (
                    <>
                      Je veux dire, c’est vraiment complexe, non? Tout comme vous, je me suis fait un devoir d’en savoir
                      plus au sujet des vaccins. C’est tellement nouveau pour tout le monde, je pense qu’on essaie tous
                      de déterminer ce qui se passe vraiment.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      So this concern about DNA is something I&apos;ve heard quite a bit. And because of that, I&apos;ve
                      looking into this quite a bit to make sure that I could effectively answer people&apos;s questions
                      and concerns. Is it okay if I share some of the vaccine science with you?
                    </>
                  ),
                  FR: (
                    <>
                      Donc, cette inquiétude au sujet de l’ADN, j’en ai entendu souvent parler. J’ai fait pas mal de
                      recherche à ce sujet pour pouvoir bien répondre aux questions et aux inquiétudes des gens. Est-ce
                      que je peux vous faire part de certains faits scientifiques au sujet des vaccins?
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              //LONGQUOTE below
              {
                text: {
                  EN: (
                    <>
                      I have kind of a cool analogy I like to use to help people understand how mRNA works. Can I share
                      it with you? Imagine if the chef from your favourite restaurant could come over to your house and
                      make your favourite dish...
                    </>
                  ),
                  FR: (
                    <>
                      J’ai une bonne analogie qui aide les gens à comprendre le fonctionnement de l’ARNm. Est-ce que je
                      peux vous en faire part? Imaginez-vous si le chef de votre restaurant préféré venait chez vous et
                      vous faisait votre repas préféré…
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "chefAnalogy",
                fullStoryLinkText: { EN: "Read the full story", FR: "Lire l'histoire complète" },
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I know there&apos;s lots of information out there, but you can take this one to the bank: the
                      vaccine does not change your DNA. There are other things we might not know yet, but that one we
                      know for sure. That one is absolutely true.
                    </>
                  ),
                  FR: (
                    <>
                      Je sais qu’il existe beaucoup d’information à ce sujet, mais croyez-en ma parole : le vaccin ne
                      modifie pas votre ADN. Il y a peut-être d’autres choses qu’on ne sait toujours pas, mais c’est
                      certain que le vaccin ne modifie pas l’ADN. C’est ce qu’il y a de plus vrai.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I really wish we had the technology to alter DNA. Honestly, it would be a wondrous thing if we did
                      because you know what? We&apos;d be curing cancer right, left, and center. We just don&apos;t have
                      the ability to alter DNA. It just doesn&apos;t exist. We really just need to use the technology we
                      do have to protect you from getting so sick.
                    </>
                  ),
                  FR: (
                    <>
                      J’aimerais bien que la technologie permettant de modifier l’ADN existe. Vraiment, ce serait génial
                      parce que si cette technologie existait, vous savez quoi? On pourrait guérir le cancer sous toutes
                      ses formes. On n’est pas capable de modifier l’ADN. Ça n’existe franchement pas. Il faut tout
                      simplement se servir des technologies qu’on a déjà pour vous empêcher de devenir tellement malade.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // (mRNAConcerns)
              {
                text: {
                  EN: (
                    <>
                      These mRNA vaccines are different than traditional vaccines, because they don&apos;t expose you to
                      any of the real virus. Instead, the bit of mRNA that&apos;s in the vaccines is like a recipe book
                      for this bit of protein that we want your cells to make.
                    </>
                  ),
                  FR: (
                    <>
                      Les vaccins à ARNm sont très différents des vaccins traditionnels parce qu’ils ne vous exposent
                      pas au vrai virus. En fait, le petit peu d’ARNm qui se trouve dans les vaccins ressemble à un
                      livre de recettes en ce sens qu’il faut que la protéine dise à vos cellules quoi faire.
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },

              //LONGQUOTE below
              {
                text: {
                  EN: (
                    <>
                      What&apos;s really cool about these mRNA vaccines that makes them even better than other vaccines
                      is that they go into your cell and they make your cell produce those little spiky things that you
                      see in all the COVID pictures. Those spikes are how COVID attaches onto your cells in your body
                      and how it starts attacking you. So, instead of having COVID attack you, and take over your cells,
                      the mRNA from the vaccine goes inside your cell, and it tells your cell to create just that same
                      little spiky thing. None of the virus itself, just the little spiky thing. And then your
                      body&apos;s like, &lsquo;
                      <i>Oh, what&apos;s this spiky thing? This looks bad</i>&rsquo;, and it starts to develop an immune
                      response.
                    </>
                  ),
                  FR: (
                    <>
                      L’aspect intéressant des vaccins à ARNm, et qui les rend même meilleurs que les autres vaccins,
                      c’est le fait qu’ils pénètrent dans votre cellule et font en sorte que celle-ci produise ces
                      petites sortes de piquants que vous voyez dans toutes les photos de COVID. C’est grâce à ces
                      piquants que la COVID se fixe aux cellules de votre corps. C’est comme ça que la maladie commence
                      à vous attaquer. Donc, au lieu que la COVID vous attaque et prenne le dessus sur vos cellules,
                      l’ARNm de votre vaccin pénètre dans votre cellule, puis lui dit de créer cette même petite forme à
                      piquants. Il ne crée pas le virus, seulement la petite forme à piquants. Et là, votre corps se dit
                      : « <i>Oh, c’est quoi cette chose à piquants? Je pense que c’est mauvais</i> », et il se met à
                      développer une réponse immunitaire.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "spikyVaccines",
                fullStoryLinkText: { EN: "Read the full story", FR: "" },
              },

              {
                text: {
                  EN: (
                    <>
                      The great thing about these vaccines is it&apos;s easy to tweak them so they&apos;re effective
                      against different strains. They can tweak a little spike protein here, and a spike protein there,
                      because of how the mRNA technology works. It&apos;s like when you&apos;re ordering a car today
                      rather than 50 years ago. Today you just go online and order a different color and as many, or as
                      few, different options as you want. 50 years ago with a car, you just took whatever car you got.
                      his technology is all about being nimble and responding to the variants.
                    </>
                  ),
                  FR: (
                    <>
                      Ce qui est super à propos de ces vaccins, c’est qu’il est facile de les modifier légèrement pour
                      qu’ils puissent être efficaces contre différentes souches virales. Ils peuvent modifier un peu la
                      protéine de spicule par ici et par là, parce que c’est comme ça que fonctionne la technologie de
                      l’ARNm. C’est comme quand on commande une voiture de nos jours, comparativement à il y a 50 ans.
                      Aujourd’hui, vous pouvez aller en ligne et commander une couleur différente et autant d’options ou
                      aussi peu d’options que vous le désirez. Il y a 50 ans, quand les gens s’achetaient une voiture,
                      ils la prenaient comme elle était. Cette technologie donne de la souplesse et permet de réagir aux
                      variants.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (mRNAConcerns)
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      By now, we have seen that these vaccines are safe and effective in so many people around the
                      world, and that they simply do not mess with people&apos;s DNA. It makes sense to have concerns
                      about new things like this, but I can assure you that these vaccines will not interfere with your
                      DNA, and that they are a safe choice.
                    </>
                  ),
                  FR: (
                    <>
                      Maintenant, on sait que ces vaccins sont sûrs et efficaces pour tellement de personnes de par le
                      monde. Chose certaine, ils ne compromettent pas l’ADN des gens. C’est normal de s’inquiéter de
                      quelque chose d’aussi nouveau, mais je vous assure que ces vaccins n’agiront pas sur votre ADN et
                      qu’ils sont un choix sécuritaire.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What we&apos;re trying to do as physicians and healthcare providers in general is help people to
                      see that the more we do this one last thing of getting vaccinated, the more likely we are to avoid
                      these restrictions coming back and disrupting our lives again.
                    </>
                  ),
                  FR: (
                    <>
                      Les médecins et les professionnels de la santé en général essaient d’aider les gens à comprendre
                      que plus de personnes vont se faire vacciner, plus on sera susceptibles d’éviter les restrictions
                      à l’avenir et la perturbation de notre vie.
                    </>
                  ),
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (mRNAConcerns Resources)
    resources: [
      {
        title: {
          EN: <>CanVax - How do the mRNA vaccines work?</>,

          FR: <>CanVax - Comment fonctionnent les vaccins à base d’ARNm contre la COVID-19?</>,
        },
        linkText: { EN: <>Educational video from CanVax</>, FR: <>Vidéo éducative de CanVax</> },
        link: "https://canvax.ca/how-do-covid-19-mrna-vaccines-work",
        description: {
          EN: <>30 second YouTube video from CanVax about how the mRNA vaccines work. (2021)</>,
          FR: <>Vidéo de 30 secondes de CanVax sur YouTube sur le fonctionnement des vaccins à ARNm. (2021)</>,
        },
      },

      {
        title: {
          EN: <>University of Waterloo - mRNA vaccine myths factsheet</>,

          FR: <>Université de Waterloo - fiche sur les mythes entourant les vaccins à ARNm</>,
        },
        linkText: {
          EN: <>mRNA vaccine myths factsheet for patients</>,
          FR: <>Fiche sur les mythes entourant les vaccins à ARNm à l’intention des patients</>,
        },
        link: "https://tools.cep.health/wp-content/uploads/2021/01/mRNA-Vaccine-Myths.jpg",
        description: {
          EN: (
            <>
              A short and patient-focused factsheet looking at some common myths and misconceptions about the mRNA
              vaccines. (2021)
            </>
          ),
          FR: (
            <>
              Brève fiche d’information destinée aux patients au sujet de certains mythes et idées fausses concernant
              les vaccins à ARNm. (2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>The Long Road to the mRNA vaccines</>,

          FR: <>Le long chemin vers les vaccins à ARNm</>,
        },
        linkText: { EN: <>CIHR Website and Timeline</>, FR: <>Site Web des IRSC et chronologie</> },
        link: "https://cihr-irsc.gc.ca/e/52424.html",
        description: {
          EN: <>CIHR&apos;s overview and timeline of the development of the mRNA vaccines. (April 2021)</>,
          FR: <>Aperçu et chronologie des IRSC concernant le développement des vaccins à ARNm. (avril 2021)</>,
        },
      },
      {
        title: {
          EN: <>Understanding the mRNA vaccines</>,

          FR: <>Understanding the mRNA vaccines</>,
        },
        linkText: { EN: <>US CDC website and infographics</>, FR: <>Site Web et infographie du CDC américain</> },
        link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html",
        description: {
          EN: (
            <>
              US CDC&apos;s website for patients and public to better understand the mRNA vaccines, including
              infographics on how they work and links to information on their development. (March 2021)
            </>
          ),
          FR: (
            <>
              Site Web du CDC américain pour aider les patients et le grand public à mieux comprendre les vaccins à
              ARNm, comprenant de l’infographie expliquant le fonctionnement de ces vaccins et des liens d’information
              sur leur développement. (mars 2021)
            </>
          ),
        },
      },
      {
        title: {
          EN: <>How the COVID vaccine can save your life (comic)</>,

          FR: <>How the COVID vaccine can save your life (comic)</>,
        },
        linkText: {
          EN: <>Interactive comic looking at COVID vaccines</>,
          FR: <>Bande dessinée interactive sur les vaccins contre la COVID</>,
        },
        link: "https://projects.nj.com/vaccine-comic/",
        description: {
          EN: <>A graphic novel/comic strip looking at the mRNA vaccines. (February 2021)</>,
          FR: <>Bande dessinée interactive au sujet des vaccins à ARNm. (février 2021)</>,
        },
      },
    ],
  },

  MedicallyComplex: {
    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
            <>
              &ldquo;With all of my conditions and medications, I&apos;m not sure taking the vaccine is the right thing
              for me.&rdquo;
            </>,
            <>&ldquo;If I catch COVID and die, then I die.&rdquo;</>,
            <>&ldquo;I&apos;m worried about the vaccine interacting with my medications.&rdquo;</>,
          ],
          FR: [
            <>
              « Avec toutes les maladies que j’ai et les médicaments que je prends, je ne suis pas sûre que le vaccin
              est bon pour moi. »
            </>,
            <>« Si j’attrape la COVID et que j’en meurs, alors ce sera ça. »</>,
            <>« Je m’inquiète de l’interaction du vaccin avec mes médicaments. »</>,
          ],
        },
      },

      thingsToConsider: {
        image: "doctorBlackWoman.svg",
        content: {
          EN: [
            <>
              Consider discussing your patient&apos;s specific co-morbidities/medications with a specialist who can
              advise on the best course of action.
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
          FR: [
            <>
              Considérez la possibilité de discuter des facteurs de comorbidité et des médicaments de votre patiente
              avec un spécialiste qui vous indiquera la meilleure marche à suivre.
            </>,
            <>
              Encouragez les patients à voir que le fait de refuser le vaccin pourrait empirer les maladies dont ils
              souffrent déjà ou leur donner de la difficulté à les combattre.
            </>,
            <>
              Communiquez avec votre patiente pour voir comment elle se sent. Après de longues conversations au sujet
              des troubles de santé, il serait peut-être préférable de discuter des vaccins lors d’un autre rendez-vous.
            </>,
          ],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              As a trusted healthcare counsellor you can remind your medically complex patient that you are working
              together to optimize their health outcomes. Consider discussing the importance of this vaccine to keep
              treatment plans on track and lower the risk of long&ndash;term health implications.
            </>,
          ],
          FR: [
            <>
              À titre de professionnel de la santé de confiance, vous pouvez rappeler à votre patiente au dossier
              médical complexe que votre but, c’est d’optimiser sa santé. Considérez la possibilité de discuter de
              l’importance de ce vaccin pour que ses plans de traitement continuent dans la bonne voie et pour diminuer
              le risque d’effets à long terme sur la santé de votre patiente.
            </>,
          ],
        },
      },
    },
    // (MedicallyComplex)
    advice: {
      eaase: {
        engage: {
          text: {
            EN: <>I know this is yet another thing, but I really hope you&apos;re not giving up on me.</>,
            FR: <>Je sais que ça s’ajoute à tout le reste, mais j’espère vraiment que vous ne perdez pas espoir.</>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I can understand that you would feel overwhelmed. You certainly do have a lot on your plate, and
                that&apos;s why we end up having so many conversations. It&apos;s you and me working to maximize your
                quality of life as much as we can. You know I&apos;d rather have you on no medications at all, but we
                need to protect you, get you living the best life you can.
              </>
            ),
            FR: (
              <>
                Je comprends que vous avez l’impression d’être dépassée par les événements. Je sais qu’il se passe
                beaucoup de choses dans votre vie et c’est pour ça qu’on finit par avoir tellement de conversations.
                Vous et moi, on travaille ensemble pour maximiser votre qualité de vie dans la plus grande mesure
                possible. Vous savez qu’en réalité, je préférerais que vous ne preniez aucun médicament, mais il faut
                qu’on vous protège pour que vous ayez la meilleure qualité de vie possible.
              </>
            ),
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                Whatever you&apos;ve read about the different vaccines, I can tell you that all of them are preventing
                people from being hospitalized or dying. That&apos;s the sort of protection that we&apos;re getting.
                I&apos;d really much rather that you didn&apos;t have a new health problem from COVID on your hands.
              </>
            ),
            FR: (
              <>
                Peu importe ce que vous lisez au sujet des divers vaccins, je peux vous dire que tous les vaccins
                empêchent les gens d’être hospitalisés ou de mourir. C’est le genre de protection qu’ils nous procurent.
                Je ne veux vraiment pas que vous ayez d’autres troubles de santé à cause de la COVID.
              </>
            ),
          },
          image: "doctorBlackWoman.svg",
        },
        // (MedicallyComplex)
        evoke: {
          text: {
            EN: (
              <>
                I guess when it comes to COVID, my major concern is when you&apos;ve got someone with the medical
                problems you have, I really worry that you would get a really bad run of it if you caught the virus. You
                would be a very high risk for winding up in hospital, doing really badly, maybe even needing the ICU.
                People that have been into ICU, they don&apos;t; come out in great shape if they do come out. I&apos;d
                rather we just protect you from that altogether. These vaccines do that.
              </>
            ),
            FR: (
              <>
                En matière de COVID, ma plus grande inquiétude dans le cas de personnes qui ont des troubles médicaux
                comme vous, c’est que vous soyez très malade si jamais vous attrapez le virus. Le risque que vous
                aboutissiez à l’hôpital est grand, ou le risque que vous soyez très malade et peut-être même que vous
                soyez admise aux soins intensifs. Les personnes qui ont dû passer par les soins intensifs, quand elles
                en sortent ou si elles en sortent, elles ne sont pas en très bon état. J’aimerais mieux que vous soyez
                protégée contre tout ça. Ces vaccins vous protègent.
              </>
            ),
          },
          image: "doctorWhiteWomanBrownHairGlasses.svg",
        },
      },

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: <>I know this is yet another thing, but I really hope you&apos;re not giving up on me.</>,
                  FR: (
                    <>Je sais que ça s’ajoute à tout le reste, mais j’espère vraiment que vous ne perdez pas espoir.</>
                  ),
                },

                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I know you have a lot on your plate, but let&apos;s chat about why the vaccine is really important
                      for you and your health.
                    </>
                  ),
                  FR: (
                    <>
                      Je sais qu’il se passe beaucoup de choses dans votre vie, mais parlons quand même du vaccin et des
                      raisons pour lesquelles il est vraiment important pour vous et votre santé.
                    </>
                  ),
                },
                // (MedicallyComplex)
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: <>I hear you&apos;re worried about drug interactions. Let&apos;s explore that a little bit.</>,
                  FR: (
                    <>
                      Je sais que vous vous inquiétez de l’interaction du vaccin avec vos médicaments. Discutons-en un
                      peu.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I can understand that you would feel overwhelmed. You certainly do have a lot on your plate, and
                      that&apos;s why we end up having so many conversations. It&apos;s you and me working to maximize
                      your quality of life as much as we can. You know I&apos;d rather have you on no medications at
                      all, but we need to protect you, get you living the best life you can.
                    </>
                  ),
                  FR: (
                    <>
                      Je sais que vous avez l’impression d’être dépassée par les événements. Je sais qu’il se passe
                      beaucoup de choses dans votre vie et c’est pour ça qu’on finit par avoir tellement de
                      conversations. Vous et moi, on travaille ensemble pour maximiser votre qualité de vie dans la plus
                      grande mesure possible. Vous savez qu’en réalité, je préférerais que vous ne preniez aucun
                      médicament, mais il faut qu’on vous protège pour que vous ayez la meilleure qualité de vie
                      possible.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I can appreciate your concern about drug interactions with the vaccine. I want to make sure you
                      feel as comfortable as possible about taking this vaccine. I&apos;m here to help you get there.
                    </>
                  ),
                  FR: (
                    <>
                      Je peux comprendre votre inquiétude au sujet de l’interaction du vaccin avec vos médicaments. Je
                      veux que vous soyez à l’aise le plus possible d’accepter ce vaccin. Je vais vous aider à en
                      arriver là.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Right, there is a lot you&apos;re dealing with, health-wise. You&apos;re not the first patient of
                      mine to express these concerns.
                    </>
                  ),
                  FR: (
                    <>
                      Effectivement, vous avez beaucoup de choses à gérer du point de vue de la santé. Vous n’êtes pas
                      ma première patiente à s’inquiéter de tout ça.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      What specifically about your condition(s) or medication(s) makes you concerned about the vaccine?
                    </>
                  ),
                  FR: (
                    <>
                      Plus précisément, quels aspects de votre état ou de vos médicaments vous inquiètent du point de
                      vue vaccinal?
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been doing a lot of reading on the vaccines and people like yourself. People with other
                      health concerns who are taking a few different types of medications. Would you be up for hearing
                      what I&apos;ve found relating to your conditions?
                    </>
                  ),
                  FR: (
                    <>
                      J’ai beaucoup lu au sujet des vaccins et des personnes comme vous, des personnes qui ont d’autres
                      troubles de santé et qui prennent divers types de médicaments. Est-ce que vous aimeriez que je
                      vous parle de ce que j’ai appris au sujet de votre état?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Whatever you&apos;ve read about the different vaccines, I can tell you that all of them are
                      preventing people from being hospitalized or dying. That&apos;s the sort of protection that
                      we&apos;re getting. I&apos;d really much rather that you didn&apos;t have a new health problem
                      from COVID on your hands.
                    </>
                  ),
                  FR: (
                    <>
                      Peu importe ce que vous lisez au sujet des divers vaccins, je peux vous dire que tous les vaccins
                      empêchent les gens d’être hospitalisés ou de mourir. C’est le genre de protection qu’ils nous
                      procurent. Je ne veux vraiment pas que vous ayez d’autres troubles de santé à cause de la COVID.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      It has been a great relief over the last couple of months when folks like you have said, &lsquo;
                      <i>you know what? I just got vaccinated, and I&apos;m feeling really good about that</i>&rsquo;. I
                      tell them, &lsquo;
                      <i>Oh, that&apos;s great. That&apos;s really good news to know that you&apos;re protected.</i>
                      &rsquo;. That&apos;s really what I&apos;d like for you as my patient is to try and get you as
                      protected as we can.
                    </>
                  ),
                  FR: (
                    <>
                      Ces derniers mois, c’est avec beaucoup de soulagement que j’ai parlé avec des personnes comme vous
                      qui m’ont dit : « <i>Vous savez quoi? Je viens de me faire vacciner et je n’ai aucun regret</i> ».
                      Je leur réponds : « <i>Oh, c’est super, ça. C’est formidable de savoir que vous êtes protégé</i>{" "}
                      ». C’est vraiment ce que je veux pour vous, ma patiente, c’est de vous offrir la meilleure
                      protection possible.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I really don&apos;t want you to get COVID because I think the reaction that you could have with
                      your health issues would be pretty significant.
                    </>
                  ),
                  FR: (
                    <>
                      Je ne veux vraiment pas que vous attrapiez la COVID parce que je pense qu’avec vos problèmes de
                      santé, votre réaction pourrait être assez grave.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (MedicallyComplex)
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      While I see that medication interactions with the vaccine are a concern for you, the flip side of
                      that concern for me is the long-term impact of COVID for you. It&apos;s long-COVID that I&apos;m
                      worried about for you, specifically those lingering symptoms, a brain fog that might last for the
                      next year or longer. I would hate for that to happen. So, that&apos;s the thing that I keep
                      worrying about because you&apos;re at a bit higher risk for those long-COVID effects than the
                      average person.
                    </>
                  ),
                  FR: (
                    <>
                      D’un côté, je comprends que vous vous inquiétez de l’interaction du vaccin avec vos médicaments,
                      mais d’un autre côté, ce qui m’inquiète vraiment, ce sont les effets à long terme de la COVID sur
                      vous. Ce qui m’inquiète dans votre cas, c’est le syndrome post-COVID, les symptômes qui durent
                      longtemps, un brouillard cérébral qui pourrait durer pendant un an ou plus. Je ne voudrais
                      vraiment pas que ça vous arrive. Donc, c’est ça qui m’inquiète le plus parce que vos risques de
                      syndrome post-COVID sont un peu plus élevés que ceux de la personne moyenne.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Could I possibly have a conversation with your pharmacist, I&apos;m sure you know your pharmacist
                      better than you know me, and see whether they might be able to set aside one of their doses for
                      you so that you don&apos;t have to go to one of these big centers? Do you think that&apos;s
                      something that we would be able to work with?
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que je pourrais m’entretenir avec votre pharmacien? Je suis certaine que vous le connaissez
                      mieux que vous me connaissez et je pourrais lui demander d’en mettre une dose de côté pour vous
                      afin de vous éviter d’aller dans un des grands centres? Qu’en pensez-vous?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (MedicallyComplex)
              {
                text: {
                  EN: (
                    <>
                      So, I&apos;ve been reading letters from specialists caring for patients who are on medications to
                      change the way that their immune system works. Some of those patients are able to receive the
                      vaccine if they jump off the medication before the vaccine. So it is still possible to give the
                      vaccine in certain situations, but there&apos;s got to be a gap in the immunosuppressants that you
                      take when you receive the vaccine. You have to kind of reduce the dulling down of the immune
                      system so that the immune system can recognize the thing that&apos;s presented in the vaccine.
                      Then you can go back on your medication again. So, I can always investigate the best way forward
                      by having a chat with your specialist and making sure that we&apos;re making the right decisions.
                    </>
                  ),
                  FR: (
                    <>
                      J’ai lu des lettres de spécialistes qui s’occupent de patients qui doivent prendre des médicaments
                      pour changer la façon dont leur système immunitaire fonctionne. Certains de ces patients sont
                      capables de recevoir le vaccin s’ils cessent de prendre leurs médicaments avant de se faire
                      vacciner. Donc, c’est toujours possible de donner le vaccin dans certaines situations, mais il
                      doit y avoir un certain répit entre les immunodépresseurs et le vaccin. Il faut ni plus ni moins
                      freiner l’amenuisement du système immunitaire pour qu’il puisse reconnaître ce que le vaccin lui
                      présente. Après ça, vous pouvez recommencer à prendre vos médicaments. Je pourrais donc
                      m’entretenir avec votre spécialiste pour connaître la meilleure manière de procéder et pour
                      prendre de bonnes décisions.
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Some of these newer treatments, I&apos;m not an expert on, so I like to talk to your specialist to
                      make sure that we&apos;re not causing trouble by just going ahead with the vaccine. There&apos;s a
                      helpline available to me where I can phone a specialist and we run through your case and talk
                      about your medications and come up with the best plan.
                    </>
                  ),
                  FR: (
                    <>
                      Pour certains des nouveaux traitements, je ne suis pas expert et c’est pourquoi j’aimerais parler
                      avec votre spécialiste pour que le vaccin ne cause pas de problèmes. J’ai accès à une ligne
                      d’assistance téléphonique me permettant de discuter avec un spécialiste, de lui expliquer votre
                      situation, de lui parler de vos médicaments et de préparer le meilleur plan possible dans votre
                      cas.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (MedicallyComplex)
              {
                text: {
                  EN: (
                    <>
                      I guess when it comes to COVID, my major concern is when you&apos;ve got someone with the medical
                      problems you have, I really worry that you would get a really bad run of it if you caught the
                      virus. You would be a very high risk for winding up in hospital, doing really badly, maybe even
                      needing the ICU. People that have been into ICU, they don&apos;t come out in great shape if they
                      do come out. I&apos;d rather we just protect you from that altogether. These vaccines do that.
                    </>
                  ),
                  FR: (
                    <>
                      En matière de COVID, ma plus grande inquiétude dans le cas de personnes qui ont des troubles
                      médicaux comme vous, c’est que vous soyez très malade si jamais vous attrapez le virus. Le risque
                      que vous aboutissiez à l’hôpital est grand, ou le risque que vous soyez très malade et peut-être
                      même que vous soyez admise aux soins intensifs. Les personnes qui ont dû passer par les soins
                      intensifs, quand elles en sortent ou si elles en sortent, elles ne sont pas en très bon état.
                      J’aimerais mieux que vous soyez protégée contre tout ça. Ces vaccins vous protègent.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I mean, say, COVID kills you, okay? It&apos;s over. But what if it doesn&apos;t? What if you catch
                      COVID, and you survive? I&apos;ve certainly got lots of patients in my own practice that are these
                      long-haulers that you&apos;ll have heard about on the radio and the news. The people who end up
                      with these longstanding problems. Which would mean taking what you&apos;re dealing with just now
                      and making it even worse. Even harder for you to get through day-to-day stuff because of fatigue,
                      and breathlessness. It just seems like given all the efforts that you&apos;re making with your
                      health, it just seems a really simple thing to do to protect you, and prevent you from ending up
                      in that sort of position. It&apos;s really just about keeping you as safe as we can and everyone
                      else around you.
                    </>
                  ),
                  FR: (
                    <>
                      Alors, supposons que la COVID finisse par vous tuer. Votre vie est finie et c’est tout. Mais si
                      vous n’en mourez pas? Si vous attrapez la COVID et que vous survivez? Je dois avouer que j’ai
                      beaucoup de patients qui souffrent des effets à long terme de la COVID dont on entend parler à la
                      radio et aux nouvelles. Il y a des personnes qui finissent par avoir des problèmes à long terme.
                      Ça s’ajouterait donc à votre état de santé actuel et ça empirerait les choses. Ce serait encore
                      plus dur pour vous de traverser votre journée parce que vous seriez fatiguée et à bout de souffle.
                      Moi, je pense qu’à la lumière de tous les efforts que vous faites pour votre santé, la chose la
                      plus simple à faire serait de vous protéger pour vous empêcher d’en arriver là. C’est vraiment une
                      question de vous tenir loin des dangers, tout comme les personnes qui vous entourent.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (MedicallyComplex)
              {
                text: {
                  EN: (
                    <>
                      Don&apos;t forget that it&apos;s much easier for your friends and family to be able to come visit
                      you confidently knowing that you&apos;re protected, that they don&apos;t have to worry about
                      making you sick, and for me to see you as well.
                    </>
                  ),
                  FR: (
                    <>
                      N’oubliez pas qu’il sera beaucoup plus facile pour vos amis et les membres de votre famille de
                      vous rendre visite sans souci s’ils savent que vous êtes protégée. Ils n’auront pas à s’inquiéter
                      de vous rendre malade, et vos rendez-vous ici seront plus simples aussi.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      One way of thinking about it is that the vaccine is, in some ways, more important than most of
                      your other medications really. They&apos;re all kind of &lsquo;small print&rsquo; in comparison to
                      this really big issue. Protecting you from COVID-19 is that important.
                    </>
                  ),
                  FR: (
                    <>
                      Une façon de voir le vaccin, c’est que d’une certaine manière, il est plus important que la
                      plupart de vos autres médicaments. Ce sont de « petits caractères », ni plus ni moins,
                      comparativement à ce vrai gros problème. Vous protéger contre la COVID-19, c’est important à ce
                      point-là.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (MedicallyComplex Resources)
    resources: [
      {
        title: {
          EN: (
            <>Alberta Health Services: Counselling Immunocompromised Individuals on the use of mRNA COVID-19 Vaccines</>
          ),
          FR: (
            <>Alberta Health Services: Counselling Immunocompromised Individuals on the use of mRNA COVID-19 Vaccines</>
          ),
        },
        linkText: {
          EN: <>Interim Information for Health Care Providers Completing Risk Assessments</>,
          FR: <>Information provisoire à l’intention des professionnels de la santé évaluant les risques</>,
        },
        link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-counselling-immunocompromised-individuals-mrna.pdf",
        description: {
          EN: (
            <>
              An informational guide for health professionals on how to discuss the mRNA vaccines with immunocompromised
              patients. (February 2021)
            </>
          ),
          FR: (
            <>
              Guide destiné aux professionnels de la santé pour savoir comment discuter des vaccins à ARNm avec les
              patients immunodéficients. (février 2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: (
            <>
              Canadian Rheumatology Association&apos;s Recommendation on Covid-19 Vaccination in Persons with Autoimmune
              Rheumatic Disease
            </>
          ),
          FR: (
            <>
              Recommandation de la Société canadienne de rhumatologie sur la vaccination contre la COVID-19 chez les
              personnes atteintes de maladies rhumatologiques auto-immunes
            </>
          ),
        },
        linkText: {
          EN: <>Interim Recommendations for Healthcare Providers from the CRA</>,
          FR: <>Recommandations provisoires de la SCR à l’intention des professionnels de la santé</>,
        },
        link: "https://rheum.ca/wp-content/uploads/2021/05/FINAL-V2-CRA-Recommendation-on-COVID-19-Vaccination_May-2021.pdf",
        description: {
          EN: (
            <>
              Advisory and recommendations from the CRA on COVID-19 vaccination in persons with autoimmune rheumatic
              disease (Updated May 2021)
            </>
          ),
          FR: (
            <>
              Conseils et recommandations de la SCR sur la vaccination contre la COVID-19 chez les personnes atteintes
              de maladies rhumatologiques auto-immunes. (mis à jour en mai 2021)
            </>
          ),
        },
      },
      // (MedicallyComplex Resources)
      {
        title: {
          EN: <>Crohn&apos;s and Colitis Canada: COVID-19 Vaccines and IBD</>,

          FR: <>Crohn et Colite Canada : Les vaccins contre la COVID-19 et les MII</>,
        },
        linkText: {
          EN: <>Recommendations on the use of COVID-19 vaccines in individuals with IBD/Crohn&apos;s/Colitis</>,
          FR: (
            <>
              Recommandations au sujet des vaccins contre la COVID-19 chez les personnes atteintes de MII, de la maladie
              de Crohn ou de colite
            </>
          ),
        },
        link: "https://crohnsandcolitis.ca/About-Crohn-s-Colitis/COVID-19-and-IBD/Vaccines",
        description: {
          EN: (
            <>
              The Crohn&apos;s and Colitis Canada COVID-19 and IBD Task Force present their recommendations and
              justifications for why the COVID-19 vaccines should be administered to patients with IBD at the earliest
              available opportunity. (Updated May 2021)
            </>
          ),
          FR: (
            <>
              Le groupe de travail sur les MII et la COVID-19 de Crohn et Colite Canada présente ses recommandations et
              ses justifications expliquant pourquoi les vaccins contre la COVID-19 devraient être donnés aux patients
              atteints de MII dès que possible. (mis à jour en mai 2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>Cancer Care Alberta: COVID-19 and Cancer Treatment</>,

          FR: <>Cancer Care Alberta: COVID-19 and Cancer Treatment</>,
        },
        linkText: {
          EN: <>Information for Patients and Families</>,
          FR: <>Information à l’intention des patients et des familles</>,
        },
        link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-cancer-treatment-info-pf.pdf",
        description: {
          EN: (
            <>
              Information on COVID-19 and COVID-19 vaccination for patients undergoing cancer treatments. (Updated April
              2021)
            </>
          ),
          FR: (
            <>
              Information sur la COVID-19 et la vaccination contre la COVID-19 destinée aux patients subissant des
              traitements contre le cancer. (mis à jour en avril 2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>I&apos;ve heard about people having allergic reactions to the vaccine. What are they allergic to?</>,

          FR: <>I've heard about people having allergic reactions to the vaccine. What are they allergic to?</>,
        },
        linkText: {
          EN: <>Video from the Ontario Hospital Association</>,
          FR: <>Vidéo de l’Ontario Hospital Association</>,
        },
        link: "https://www.youtube.com/watch?v=eWbaME_F750&list=PL2zzFmCbIz4eE5JUlT2ODFU2KnjCVG7D6",
        description: {
          EN: (
            <>
              Dr. Zainab Abdurrahman explains the possible allergens that cause rare allergic reactions in some people
              who receive a COVID-19 vaccine. (March 2021).
            </>
          ),
          FR: (
            <>
              La Dr Zainab Abdurrahman explique les allergènes qui seraient susceptibles de causer de rares réactions
              allergiques chez certaines personnes qui se font vacciner contre la COVID-19. (mars 2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>COVID-19 Vaccines for People with Underlying Medical Conditions</>,

          FR: <>COVID-19 Vaccines for People with Underlying Medical Conditions</>,
        },
        linkText: { EN: <>US CDC website and factsheet</>, FR: <>Site Web et fiche d’information du CDC américain</> },
        link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations/underlying-conditions.html",
        description: {
          EN: (
            <>
              US CDC overview and examination of COVID-19 vaccine considerations for those with underlying medical
              conditions. (Updated, June 2021)
            </>
          ),
          FR: (
            <>
              Aperçu et examen du CDC américain des considérations concernant le vaccin contre la COVID-19 pour les
              personnes atteintes de maladies sous-jacentes. (mis à jour en juin 2021)
            </>
          ),
        },
      },
    ],
  },

  ReproductiveEffects: {
    // edit this from ContentID to the specific name for this persona type. No duplication!

    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 2.svg",
        content: {
          EN: "",
          FR: [<></>, <></>, <></>],
        },
        // The content for Overview-TheySay is in its own component <ReproductiveOverviewTheySayBI /> so useContext can be used.
      },

      thingsToConsider: {
        image: "doctorWhiteWomanBrownHairGlasses.svg",
        content: {
          EN: [
            <>
              Draw attention to the fact that <b>vaccines are a normal part of prenatal care</b>.
            </>,
            <>
              Emphasize that the <b>safety of the vaccines has been demonstrated</b> in both clinical trials and vaccine
              roll out in pregnant populations.
            </>,
            <>
              <b>Draw attention to the benefits of vaccination shared</b> between mother and unborn child (e.g. passive
              immunity).
            </>,
            <>
              Emphasize that
              <a
                className="ml-1.5 orangeUnderline"
                href="https://www.ajog.org/article/S0002-9378(21)00991-1/fulltext"
                rel="noopener noreferrer"
                target="_blank"
              >
                pregnant patients <FiExternalLink className="inline" size={18} />
              </a>{" "}
              and very
              <a
                className="ml-1.5 orangeUnderline"
                href="https://www.publications.aap.org/neoreviews/article/22/5/e284/180665/Perinatal-SARS-CoV-2-Infection-and-Neonatal-COVID"
                rel="noopener noreferrer"
                target="_blank"
              >
                young children <FiExternalLink className="inline" size={18} />
              </a>{" "}
              are at particularly <b>high risk for COVID-19 complications.</b>
            </>,
          ],
          // Reproductive
          FR: [
            <>
              Mentionnez le fait que les <b>vaccins représentent un aspect normal des soins prénataux.</b>
            </>,
            <>
              Mettez l’accent sur le fait que la <b>sécurité des vaccins a été prouvée</b>, tant dans le cadre d’essais
              cliniques que dans le cadre de la vaccination réelle des femmes enceintes.
            </>,
            <>
              Faites mention des <b>bienfaits de la vaccination qui sont partagés entre la mère et l’enfant à naître</b>
              (l’immunité passive, autrement dit).
            </>,
            <>
              Mettez l’accent sur le fait que
              <a
                className="ml-1.5 orangeUnderline"
                href="https://www.ajog.org/article/S0002-9378(21)00991-1/fulltext"
                rel="noopener noreferrer"
                target="_blank"
              >
                les patientes enceintes <FiExternalLink className="inline" size={18} />
              </a>{" "}
              et
              <a
                className="ml-1.5 orangeUnderline"
                href="https://www.publications.aap.org/neoreviews/article/22/5/e284/180665/Perinatal-SARS-CoV-2-Infection-and-Neonatal-COVID"
                rel="noopener noreferrer"
                target="_blank"
              >
                les très jeunes enfants <FiExternalLink className="inline" size={18} />
              </a>
              , plus particulièrement, <b>présentent des risques élevés de complications attribuables à la COVID-19.</b>
            </>,
          ],
        },
      },
      // Reproductive
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <ul>
              <li className="listClass">
                With pregnant patients,{" "}
                <b>place extra emphasis on the patient’s autonomy and self-determination over their bodies.</b> Take
                time to validate their concerns, and prioritize having the patient return to you for care throughout the
                course of their pregnancy.
              </li>
              <li className="listClass">
                <b>As a clinician, you are a key part of your patient’s support network.</b> Emphasize your role during
                their pregnancy, and your interest in protecting the health of them and their child in the best way
                possible.
              </li>
              <li className="listClass">
                <b>Avoid taking a ‘presumptive’ approach about vaccination.</b> Be prepared to have multiple
                conversations, and take the time to understand and validate your patients’ concerns. Especially with
                pregnant patients, prioritize the development of your long-term patient-provider relationship.
              </li>
            </ul>,
          ],
          FR: [
            <>
              Dans le cas des patientes enceintes,{" "}
              <b>
                prenez soin de mentionner que la patiente est maître d’elle-même et qu’elle a le droit de prendre des
                décisions par rapport à son propre corps.
              </b>{" "}
              Prenez le temps de valider ses inquiétudes et demandez-lui de revenir vous voir pendant sa grossesse, en
              n’oubliant pas de mentionner que les suivis sont très importants.
            </>,
            <>
              À titre de clinicien ou de clinicienne,{" "}
              <b>vous jouez un rôle clé dans le réseau de soutien de votre patiente</b>. Expliquez-lui bien votre rôle
              pendant sa grossesse et votre intérêt à protéger sa santé et celle de son enfant de la meilleure manière
              qui soit.
            </>,
            <>
              <b>Évitez l’approche « présomptive » en matière de vaccination.</b> Préparez-vous à avoir plus d’une
              conversation et prenez le temps de comprendre et de valider les inquiétudes de vos patients. Surtout dans
              le cas de vos patientes enceintes, priorisez le développement de la relation que vous allez entretenir
              avec ces patientes à long terme.
            </>,
          ],
        },
      },
    },

    advice: {
      // Reproductive
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                It’s completely normal to have worries or concerns at this time. You (and your partner) want to make
                sure you have a healthy pregnancy and baby. Let’s chat some more about your concerns around the
                vaccines.
              </>
            ),
            FR: (
              <>
                C’est tout à fait normal d’avoir des inquiétudes à ce stade-ci. Vous (et votre partenaire) voulez vous
                assurer d’avoir une grossesse et un bébé en santé. Parlons un peu plus de vos inquiétudes au sujet des
                vaccins.
              </>
            ),
          },
          image: "doctorWhiteManYoung.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I just want to underline that this is your body and your choice and completely respect whatever decision
                you make. I want to highlight that I absolutely respect this as your decision. On my end, my job is to
                help you make an informed decision, and to support you through this pregnancy.
              </>
            ),
            FR: (
              <>
                J’ajoute tout de même qu’il s’agit de votre corps et que c’est votre choix, et que je vais tout à fait
                respecter votre décision. Je réitère que je respecte absolument votre décision. De mon côté, mon travail
                consiste à vous aider à prendre une décision éclairée et à vous aider pendant cette grossesse.
              </>
            ),
          },
          image: "doctorBlackWoman.svg",
        },
        // Reproductive
        ask: {
          text: {
            EN: (
              <>
                Fertility concerns are something I've been hearing quite a bit from my other patients. And because of
                that, I've done a fair bit of research in this space to make sure that I could effectively answer
                people's questions and concerns. Can I share what I've been telling my other patients?
              </>
            ),
            FR: (
              <>
                Les inquiétudes en matière de fertilité font souvent surface chez mes autres patientes. J’ai donc fait
                pas mal de recherche à ce sujet pour pouvoir bien répondre à leurs questions et inquiétudes. Est-ce que
                je peux vous faire part de ce que je dis à mes autres patientes?
              </>
            ),
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
        // Reproductive
        evoke: {
          text: {
            EN: (
              <>
                I’m happy to have this conversation again about the vaccines. It's not something you have to decide this
                minute, but while you're making a decision and throughout the pregnancy, you want to make sure that you
                have all those extra layers of protection. You and your baby won't have that extra layer of protection
                if you don’t get vaccinated, and I think that's really important. But I obviously I respect the choices
                that you make.
              </>
            ),
            FR: (
              <>
                Il me fait plaisir de vous reparler de la vaccination. Vous n’avez pas à prendre votre décision tout de
                suite, mais quand vous prendrez votre décision et pendant votre grossesse, vous voudrez vous assurer
                d’avoir tous les degrés de protection supplémentaires possibles. Si vous ne vous faites pas vacciner,
                vous et votre bébé ne bénéficierez pas de ce degré de protection supplémentaire, et je crois que c’est
                très important. Mais chose certaine, je respecte votre choix.
              </>
            ),
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // Reproductive
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Do you, or your partner have any specific concerns [about vaccination] that I can try to address?
                      We can also have your partner come in with you for your next appointment, so that we can discuss
                      it together.
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que vous, ou votre partenaire avez des inquiétudes particulières [au sujet de la
                      vaccination] auxquelles je peux essayer de répondre? Votre partenaire pourrait se joindre à nous
                      au prochain rendez-vous pour qu’on puisse en discuter ensemble.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      It’s completely normal to have worries or concerns at this time. You (and your partner) want to
                      make sure you have a healthy pregnancy and baby. Let’s chat some more about your concerns around
                      the vaccines.
                    </>
                  ),
                  FR: (
                    <>
                      C’est tout à fait normal d’avoir des inquiétudes à ce stade-ci. Vous (et votre partenaire) voulez
                      vous assurer d’avoir une grossesse et un bébé en santé. Parlons un peu plus de vos inquiétudes au
                      sujet des vaccins.{" "}
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      We hear a lot of information from our friends and family, especially when it comes to pregnancy
                      and babies. But a lot of this can be misinformation too. Was there something specific you were
                      told that made you concerned about the vaccines?
                    </>
                  ),
                  FR: (
                    <>
                      Vous allez entendre toutes sortes d’information de la part de vos amis et des membres de votre
                      famille, surtout en ce qui a trait à la grossesse et aux bébés. Mais souvent, il peut s’agir de
                      désinformation ou d’information erronée. Avez-vous entendu parler de quelque chose en particulier
                      qui suscite des inquiétudes au sujet des vaccins?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Reproductive
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      These are really common concerns that most of our pregnant patients have. We're trying to make a
                      decision, not only for ourselves, but for our babies to whom we feel a huge responsibility.
                    </>
                  ),
                  FR: (
                    <>
                      Il s’agit là d’inquiétudes courantes chez la plupart de nos patientes enceintes. On essaie de
                      prendre une décision pas seulement pour nous-mêmes, mais aussi pour nos bébés envers lesquels on a
                      une énorme responsabilité.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I know as a parent myself that the most important thing is protecting our kids. That's what life
                      becomes all about. So yeah, I can see how that would make you nervous, but, honestly, what I can
                      tell you is that I'm really worried about you and your baby remaining unvaccinated and
                      unprotected.
                    </>
                  ),
                  FR: (
                    <>
                      Je suis un parent moi aussi, et je sais que ce qui nous importe le plus, c’est de protéger nos
                      enfants. C’est l’histoire de notre vie. Alors oui, je peux comprendre que le vaccin peut provoquer
                      de la nervosité, mais à vrai dire, ce qui m’inquiète beaucoup, c’est le fait que vous et votre
                      bébé n’êtes pas vaccinés et protégés.{" "}
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I just want to underline that this is your body and your choice and completely respect whatever
                      decision you make. I want to highlight that I absolutely respect this as your decision. On my end,
                      my job is to help you make an informed decision, and to support you through this pregnancy.
                    </>
                  ),
                  FR: (
                    <>
                      J’ajoute tout de même qu’il s’agit de votre corps et que c’est votre choix, et que je vais tout à
                      fait respecter votre décision. Je réitère que je respecte absolument votre décision. De mon côté,
                      mon travail consiste à vous aider à prendre une décision éclairée et à vous aider pendant cette
                      grossesse.{" "}
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I know we've talked before about your plans to ensure fertility, and that's informed other kinds
                      of decisions we've made along the way [e.g. birth control, sexual performance], and stuff like
                      that, right? So I get where you're coming from in that regard, and that's very important to you.
                    </>
                  ),
                  FR: (
                    <>
                      Je sais qu’on a déjà discuté de vos plans pour assurer votre fertilité, ce qui a eu des incidences
                      sur les décisions qui ont été prises au fil du temps [comme la contraception, la performance
                      sexuelle], et des choses comme ça, n’est-ce pas? Je comprends donc ce que vous ressentez et je
                      sais que c’est très important pour vous.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      We have good data now [on pregnancy, COVID-19, and vaccinations]. We actually have studies about
                      these things. Do you want me to go through those and tell you what the researchers found? Or I can
                      send them to you and we can talk through them when I see you again in a few weeks?
                    </>
                  ),
                  FR: (
                    <>
                      En ce moment, il existe de bonnes données [sur la grossesse, la COVID-19 et les vaccins]. Des
                      études ont été faites à ce sujet. Voulez-vous qu’on en parle et qu’on discute des résultats de
                      recherche? Sinon, je peux vous envoyer de l’information à ce sujet et on pourra en discuter à
                      votre prochain rendez-vous, dans quelques semaines?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      Fertility concerns are something I've been hearing quite a bit from my other patients. And because
                      of that, I've done a fair bit of research in this space to make sure that I could effectively
                      answer people's questions and concerns. Can I share what I've been telling my other patients?
                    </>
                  ),
                  FR: (
                    <>
                      Les inquiétudes en matière de fertilité font souvent surface chez mes autres patientes. J’ai donc
                      fait pas mal de recherche à ce sujet pour pouvoir bien répondre à leurs questions et inquiétudes.
                      Est-ce que je peux vous faire part de ce que je dis à mes autres patientes?
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      share: {
        content: [
          {
            subheading: {
              EN: "Safety in Pregnancy, Miscarriage Concerns, & Side Effects",
              FR: "Sécurité de la grossesse, possibilité de fausse couche et effets secondaires",
            },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I do think we have to correctly analyze the data that's there, and so far there is no evidence
                      that miscarriage rates are increased at all in people who are vaccinated.
                    </>
                  ),
                  FR: (
                    <>
                      Je pense qu’il faut prendre le temps de bien analyser les données qui existent et jusqu’à
                      maintenant, rien ne prouve qu’il y ait des taux de fausse couche accrus chez les femmes vaccinées.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      If you're worried about miscarriage in particular, we’re starting to look at more long term data
                      now, and there are a couple of things that we are quite sure about. The data have not shown any
                      increase in miscarriage rates. And if we look at the numbers, there have been hundreds of millions
                      of COVID-19 vaccinations given around the world, and lots of those people have had healthy
                      pregnancies or gotten pregnant shortly thereafter.
                    </>
                  ),
                  FR: (
                    <>
                      Si c’est le risque de fausse couche qui vous inquiète plus particulièrement, on commence à avoir
                      des données à plus long terme, et il y a certaines choses dont on n’est pas certains. Selon les
                      données, les taux de fausses couches n’ont pas augmenté. Et quand on se penche sur les chiffres,
                      il faut se dire que des centaines de millions de vaccins contre la COVID-19 ont été donnés de par
                      le monde, et qu’un grand nombre des femmes vaccinées ont eu une grossesse sans problème ou sont
                      tombées enceintes peu après avoir été vaccinées.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Although there are still some unknowns, there's a lot that is known about the vaccines, in terms
                      of how they work and their safety, even in pregnant patients. So you're right that we haven't had
                      these vaccines as long as some others, but there is a lot that we do know about how these vaccines
                      work and some of their potential side effects. I have to say, some of these side effects that
                      people are bringing up on social media are just not plausible. Like, scientifically, it's not
                      possible for them to happen.
                    </>
                  ),
                  FR: (
                    <>
                      Même si certains faits sont toujours inconnus, on en sait tout de même beaucoup sur les vaccins, à
                      savoir comment ils fonctionnent et s’ils sont sécuritaires, même pour les personnes enceintes.
                      Vous avez raison en ce sens que ces vaccins n’existent pas depuis aussi longtemps que d’autres
                      types de vaccins, mais on en sait quand même beaucoup sur le fonctionnement de ces vaccins et sur
                      certains de leurs effets secondaires potentiels. Je dois avouer que certains des effets
                      secondaires dont il est question dans les médias sociaux ne sont tout simplement pas plausibles.
                      Du point de vue scientifique, ces effets secondaires ne peuvent pas se produire.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      The side effects that we are noticing in pregnant women are no different or more severe than in
                      the rest of the population. They are self-limiting, so they go away on their own, and are not
                      dangerous to the baby or to you.
                    </>
                  ),
                  FR: (
                    <>
                      Les effets secondaires qu’on remarque chez les femmes enceintes ne diffèrent pas ou ne sont pas
                      plus graves que ceux observés dans le reste de la population. Ils disparaissent spontanément et{" "}
                      <b>ne sont pas</b> dangereux, pour l’enfant et pour la mère.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Tens and tens of thousands of women are getting successfully pregnant after the COVID vaccine.
                      They&apos;re not just having no trouble getting pregnant, their pregnancies are going smoothly
                      too. In the randomized trials, there was even a bunch of people who got pregnant. So we even saw
                      that early on, that it wasn&apos;t stopping fertility, but now we have 100,000 plus people in{" "}
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafepregnancyregistry.html"
                        className="orangeLink underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        a registry in the US being followed
                        <FiExternalLink className="ml-1 inline" size={18} />
                      </a>
                      . And we don&apos;t see any signals whatsoever of concern for mom or baby.
                    </>
                  ),
                  FR: (
                    <>
                      Des dizaines et des dizaines de milliers de femmes ont réussi à tomber enceintes après avoir été
                      vaccinées contre la COVID-19. Elles n’ont pas eu de difficulté à tomber enceintes et leur
                      grossesse se déroule bien. Des études aléatoires ont permis de constater qu’il y avait même
                      beaucoup de femmes qui tombaient enceintes. C’est donc quelque chose qu’on a constaté dès les
                      débuts, que le vaccin ne nuisait pas à la fertilité. En ce moment, plus de 100 000 personnes
                      inscrites à
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafepregnancyregistry.html"
                        className="orangeLink underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        un registre font l’objet d’un suivi aux États-Unis
                        <FiExternalLink className="ml-1 inline" size={18} />
                      </a>
                      , et rien ne laisse croire que le vaccin est à la source d’inquiétudes pour la mère ou son bébé.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      These vaccines have been studied in pregnant people, and millions of pregnant people worldwide
                      have been vaccinated. We do have good safety data about the vaccines in pregnant populations – we
                      know there's no increased risk of fetal malformations, and they don't cause premature delivery or
                      miscarriage. The side effects that you might get would be the same as if you weren't pregnant, so
                      the typical flu-like side effects in the first 48 hours after the vaccine.
                    </>
                  ),
                  FR: (
                    <>
                      Ces vaccins ont été étudiés chez des femmes enceintes, et des millions de personnes enceintes ont
                      été vaccinées dans le monde entier. Il existe de bonnes données sur la sécurité des vaccins pour
                      les femmes enceintes. On sait qu’il n’y a pas de risques accrus de malformation fœtale, et on sait
                      aussi que le vaccin ne provoque pas d’accouchement prématuré ou de fausses couches. Les effets
                      secondaires que vous pourriez éprouver seraient les mêmes que si vous n’étiez pas enceinte. Il
                      s’agit d’effets secondaires s’apparentant à la grippe pendant les 48 premières heures suivant
                      l’injection du vaccin.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
            ],
          },

          {
            subheading: { EN: "Passive Immunity", FR: "Immunité passive" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      This is not new; we've been using non-live vaccines in pregnant patients for decades. The safety
                      has been demonstrated, and outcomes for the mothers and babies are good. From my perspective, and
                      what we've seen from the science, is that getting the vaccine and having a stronger immune system
                      will be a huge benefit, because you will transfer your antibodies to your child for months, even
                      after they're born.
                    </>
                  ),
                  FR: (
                    <>
                      Ce n’est pas nouveau. On utilise des vaccins non vivants chez les femmes enceintes depuis des
                      décennies. Leur sécurité a été prouvée, et les résultats sont bons, tant pour la mère que pour le
                      bébé. De mon point de vue, et d’après mes connaissances de la science, le fait de se faire
                      vacciner se traduit par un meilleur système immunitaire, ce qui est un énorme avantage parce que
                      vous allez transférer vos anticorps à votre enfant pendant des mois, même après sa naissance.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      It's been standard practice to vaccinate moms-to-be for the flu, and whooping cough as well. The
                      idea is that the mom can pass along her protection to the newborn. And so we think the rationale
                      is really similar for COVID. What we see in the research is that the vaccine itself does not cross
                      the placenta. So the baby is not affected by the vaccine, but mom can give her protection to the
                      baby. So mom is doing this incredible thing for the baby, which is using her immune system to
                      protect the newborn. And I can't imagine any sort of mom-to-be who wouldn't want to hand off a
                      shield to her baby.
                    </>
                  ),
                  FR: (
                    <>
                      Il est pratique courante de vacciner les futures mamans contre la grippe et contre la coqueluche.
                      Cette pratique repose sur le principe que la mère peut alors transmettre la protection que ces
                      vaccins lui procurent à son nouveau-né. L’injection du vaccin contre la COVID repose donc sur un
                      principe semblable. D’après les recherches qui ont été effectuées, en soi, le vaccin ne traverse
                      pas le placenta. Par conséquent, le vaccin ne nuit pas au bébé, mais cela dit, la mère peut
                      transmettre sa protection à l’enfant. La mère se trouve donc à faire un geste incroyable pour son
                      bébé, en ce sens qu’elle se sert de son système immunitaire pour protéger le nouveau-né. Et je ne
                      peux pas m’imaginer qu’une future maman ne veut pas donner un bouclier à son bébé.
                    </>
                  ),
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      The important thing to remember is that this is going to help you provide ongoing protection as
                      your baby’s immune system develops. You're going to be giving your immune system to your baby for
                      their first year of life, so they have this passive immunity they’ll get from you. So you want to
                      have your immune system be as strong as it can be. And you do that by eating well, sleeping well,
                      and by making sure you've been vaccinated.
                    </>
                  ),
                  FR: (
                    <>
                      Il est important de se rappeler que le vaccin va vous aider à fournir une protection continue à
                      mesure que le système immunitaire de votre bébé se développe. Vous allez transmettre votre système
                      immunitaire à votre bébé pendant la première année de sa vie. C’est ce qu’on appelle l’immunité
                      passive. C’est pourquoi il faut que votre système immunitaire soit le plus fort possible. Bien
                      manger, bien dormir et vous faire vacciner vous aident à renforcer votre système immunitaire.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      The vaccine itself won’t pass through the placenta or in your breastmilk. Only the antibodies
                      will, and it will be very much the same as any other illness you've had where you’ve produced
                      antibodies to fight it off. All those antibodies go through your breast milk and to the placenta
                      as well. So it’s a really amazing immune function that our own bodies provide for your baby and
                      for you as a new mom.
                    </>
                  ),
                  FR: (
                    <>
                      En soi, le vaccin n’atteindra pas le placenta ou le lait maternel. Seuls les anticorps les
                      atteindront, et ces anticorps ressembleront aux autres maladies que vous avez eues, pour
                      lesquelles vous avez produit des anticorps afin de les combattre. Tous ces anticorps vont dans
                      votre lait maternel et dans votre placenta. C’est donc vraiment une fonction immunitaire
                      incroyable que votre corps produit, pour votre bébé et pour vous-même en tant que nouvelle maman.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
          // Reproductive
          {
            subheading: { EN: "High-Risk Population", FR: "Population à risque élevé" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Your risk as a pregnant person of getting really ill – ill enough to go to the hospital –is really
                      high. Like one in 10 people in hospital [during 2022 Omicron wave] are pregnant women. And the
                      risk of you ending up on a breathing tube in the ICU fighting for your and your baby's life is
                      actually a number between one and 3%, so that's very high as well. I want to share these risks
                      with you because you are considered a very vulnerable part of the population at this point.
                    </>
                  ),
                  FR: (
                    <>
                      En tant que femme enceinte, votre risque de tomber très malade – assez malade pour aller à
                      l’hôpital – est très élevé. À l’hôpital, une personne sur dix [pendant la vague du variant Omicron
                      en 2022] est une femme enceinte. Et le risque que vous aboutissiez aux soins intensifs avec une
                      sonde d’intubation à lutter pour votre vie et celle de votre bébé s’établit entre un et trois pour
                      cent, ce qui est un taux très élevé aussi. Je tiens à vous faire part de ces risques parce que
                      vous faites partie d’un segment très vulnérable de la population en ce moment.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      With pregnancy specifically, you have an increased risk of having severe illness [from COVID
                      infection], so you have about a 10 to 15% chance of hospitalization – a much higher risk of
                      intensive care unit stay. If you were to get very sick and be in the hospital, you have a
                      significantly higher chance of having a preterm delivery, where your baby would have to be born
                      early. You would have to have a prolonged stay in the hospital. Most patients with COVID will get
                      milder illnesses and do just fine, but for you, it carries an increased risk to both you and your
                      pregnancy.
                    </>
                  ),
                  FR: (
                    <>
                      En tant que femme enceinte, votre risque de tomber très malade – assez malade pour aller à
                      l’hôpital – est très élevé. À l’hôpital, une personne sur dix [pendant la vague du variant Omicron
                      en 2022] est une femme enceinte. Et le risque que vous aboutissiez aux soins intensifs avec une
                      sonde d’intubation à lutter pour votre vie et celle de votre bébé s’établit entre un et trois pour
                      cent, ce qui est un taux très élevé aussi. Je tiens à vous faire part de ces risques parce que
                      vous faites partie d’un segment très vulnérable de la population en ce moment.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      So the vaccine specifically is recommended in pregnancy, because we know that it reduces your
                      chance of getting COVID, reduces your chance of hospitalization, and thereby protects your baby
                      from having growth difficulties and being born early.
                    </>
                  ),
                  FR: (
                    <>
                      Donc, le vaccin est particulièrement recommandé pendant la grossesse parce qu’on sait qu’il
                      diminue votre risque d’attraper la COVID, réduit vos possibilités d’hospitalisation et protège,
                      par le fait même, votre bébé de difficultés de croissance et de naissance prématurée.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      During the pandemic we've actually seen a whole bunch of unvaccinated, pregnant moms ending up
                      very, very sick. This has actually become a big priority in my practice to make sure that moms who
                      are expecting are definitely getting vaccinated. Because of course, if we can protect them, then
                      we're protecting two lives, aren't we?
                    </>
                  ),
                  FR: (
                    <>
                      Pendant la pandémie, beaucoup de femmes enceintes non vaccinées ont été très, très malades. Donc
                      pour ma clinique, c’est devenu une priorité de faire en sorte que les femmes enceintes se fassent
                      vacciner. Si on peut protéger la mère, en réalité, on protège deux vies, n’est-ce pas?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I do need to underline that there are actually risks to not being vaccinated. Real risks that I’d
                      like you to take into account as you make your decision. If I can help you be clear on those risks
                      as well, then you’ll be making the best decision possible.
                    </>
                  ),
                  FR: (
                    <>
                      Je tiens à préciser que le fait de ne pas être vaccinée vous fait courir des risques. Ce sont des
                      risques réels dont j’aimerais que vous teniez compte dans votre décision. Si je peux vous aider à
                      mieux comprendre ces risques, vous pourrez alors prendre la meilleure décision qui soit.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I’m happy to have this conversation again about the vaccines. It's not something you have to
                      decide this minute, but while you're making a decision and throughout the pregnancy, you want to
                      make sure that you have all those extra layers of protection. You and your baby won't have that
                      extra layer of protection if you don’t get vaccinated, and I think that's really important. But I
                      obviously I respect the choices that you make.
                    </>
                  ),
                  FR: (
                    <>
                      Il me fait plaisir de vous reparler de la vaccination. Vous n’avez pas à prendre votre décision
                      tout de suite, mais quand vous prendrez votre décision et pendant votre grossesse, vous voudrez
                      vous assurer d’avoir tous les degrés de protection supplémentaires possibles. Si vous ne vous
                      faites pas vacciner, vous et votre bébé ne bénéficierez pas de ce degré de protection
                      supplémentaire, et je crois que c’est très important. Mais chose certaine, je respecte votre
                      choix.
                    </>
                  ),
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Reproductive

              // MISSING ENGLISH VERSION OF THIS QUOTE:
              // Je tiens à dire clairement que pour s’assurer d’avoir des bébés en santé, il faut que les mamans soient en santé. Et on aide les mères à fabriquer des anticorps contre la COVID, qui a bouleversé notre monde, et à donner ces anticorps – cette protection, ce bouclier – à son bébé.
              //
              //
              {
                text: {
                  EN: (
                    <>
                      Are you applying the same scrutiny that you're applying now to these vaccines to [other health
                      products or medications] that you are using? Because I hear what you're saying – you've clearly
                      done your research. But what I'm also hearing you say is that you've shifted gears in how you do
                      your own research in this instance. Why the difference with these vaccines in particular?
                    </>
                  ),
                  FR: (
                    <>
                      Est-ce que vous examinez d’aussi près que ces vaccins [les autres produits de santé ou
                      médicaments] que vous prenez? Je comprends ce que vous me dites. Il est évident que vous avez fait
                      des recherches. Mais ce que je comprends aussi, c’est que vous ne faites pas vos recherches de la
                      même manière qu’avant. Pourquoi vous y prenez-vous d’une autre manière avec ces vaccins?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I've got my point of view and you've got yours, so how about we walk away from this, and when you
                      come back in two or four weeks for your next prenatal exam, why don't we each think about it and
                      we'll pick this back up again?
                    </>
                  ),
                  FR: (
                    <>
                      J’ai mon point de vue et vous avez le vôtre, alors pourquoi ne pas arrêter d’en parler, et à votre
                      prochain examen prénatal, dans deux à quatre semaines, on pourra reprendre la discussion après
                      avoir réfléchi davantage?
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      Well, I'm totally happy to talk about this again. I just want to leave something for you. And it's
                      the concept of there are no risk free choices. By choosing not to be vaccinated, or to get
                      vaccinated, at this point, there are risks that come with either choice. Regardless of how we
                      feel, at the end of the day, it’s important to acknowledge that whatever we choose to do, neither
                      choice is risk free.
                    </>
                  ),
                  FR: (
                    <>
                      Eh bien, il me fait plaisir de reprendre cette discussion. Je veux seulement vous donner matière à
                      réflexion. Je veux vous dire qu’aucun choix n’est sans risques. Que vous décidiez de ne pas vous
                      faire vacciner, ou de vous faire vacciner, à ce stade-ci, chacun des deux choix comporte des
                      risques. Peu importe ce qu’on en pense, au bout du compte, il est important de reconnaître que
                      malgré la décision prise, aucune des décisions n’est sans risques.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I appreciate that you are extra concerned about getting vaccinated at this stage in your
                      pregnancy. So bundle up, mask up, stay at home as much as you can. And then come back and see me
                      at the next trimester and we’ll discuss it again then.
                    </>
                  ),
                  FR: (
                    <>
                      À ce stade-ci de votre grossesse, je comprends que vous ayez beaucoup d’inquiétudes au sujet de la
                      vaccination. Alors, emmitouflez-vous, portez un masque et restez chez vous le plus possible. Puis
                      on pourra en rediscuter au prochain trimestre de votre grossesse.
                    </>
                  ),
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      What more could a mother want than to pass on immunity to their baby who is helpless in every way,
                      and so you have a chance to help protect them by getting immunized?
                    </>
                  ),
                  FR: (
                    <>
                      Qu’est-ce qu’une mère pourrait souhaiter de plus que de transmettre l’immunité à son bébé sans
                      défense quand vous avez la possibilité d’aider à le protéger en vous faisant immuniser?
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Reproductive
              {
                text: {
                  EN: (
                    <>
                      I mean one thing that perhaps I can help you with a little bit is in understanding how things
                      [e.g., adverse vaccine events] are reported scientifically. This tends to be something that
                      non-medical people have some challenges with. I certainly haven't seen any good evidence that
                      suggests the kinds of outcomes you’re describing, but I'd be happy to look at the sources you’re
                      working with, and tell you how I would interpret things. I’d also be able to share evidence-based
                      statements from scientific bodies that I can find for you, if you'd like.
                    </>
                  ),
                  FR: (
                    <>
                      Une chose que je pourrais peut-être vous aider à mieux comprendre, c’est la façon dont les choses
                      [comme les effets indésirables du vaccin] sont rapportées, scientifiquement parlant. Les personnes
                      qui ne font pas partie du milieu médical semblent avoir des difficultés dans ce sens. Il est
                      certain que je n’ai pas vu de preuves fiables qui laissent croire que les effets que vous décrivez
                      sont réels, mais il me fera plaisir de jeter un coup d’œil aux sources que vous utilisez et de
                      vous dire comment je les interpréterais. Aussi, si vous le voulez, je pourrais vous présenter des
                      sources scientifiques que je trouverai pour vous.
                    </>
                  ),
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    //REPRODUCTIVE Resources
    resources: [
      {
        title: {
          EN: <>Pregnancy, fertility and the COVID-19 vaccine</>,
          FR: <>Pregnancy, fertility and the COVID-19 vaccine</>,
        },
        linkText: { EN: <>FAQ page from Sunnybrook Hospital</>, FR: <>FAQ page from Sunnybrook Hospital</> },
        link: "https://health.sunnybrook.ca/babies-newborns/pregnancy-fertility-covid-19-vaccine-faq/",
        description: {
          EN: <>FAQ from Sunnybrook Hospital obstetrics and fertility specialists about the COVID vaccines</>,
          FR: (
            <>
              FAQ de spécialistes en obstétrique et en fertilité de l’hôpital Sunnybrook au sujet des vaccins contre la
              COVID
            </>
          ),
        },
      },
      // Reproductive - Resources
      {
        // Preliminary Findings of ...
        title: {
          EN: <>mRNA Covid-19 Vaccine Safety in Pregnant Persons</>,

          FR: <>Preliminary Findings of mRNA Covid-19 Vaccine Safety in Pregnant Persons</>,
        },
        linkText: {
          EN: <>NEJM peer-reviewed publication (2021)</>,
          FR: <>Publication de 2021 du NEJM révisée</>,
        },
        link: "https://www.nejm.org/doi/full/10.1056/nejmoa2104983",
        description: {
          EN: (
            <>
              2021 NEJM peer-reviewed publication examining preliminary safety findings of COVID-19 vaccines in
              pregnancy populations.
            </>
          ),
          FR: (
            <>
              Publication de 2021 du NEJM révisée par des pairs portant sur les constatations préliminaires en matière
              de sécurité des vaccins contre la COVID-19 chez les femmes enceintes
            </>
          ),
        },
      },
      // Reproductive - Resources
      {
        title: {
          EN: <>Correspondence - Receipt of mRNA Covid-19 Vaccines and Risk of Spontaneous Abortion</>,
          FR: <>Correspondance – Receipt of mRNA Covid-19 Vaccines and Risk of Spontaneous Abortion</>,
        },
        linkText: {
          EN: <>NEJM correspondence article (2021)</>,
          FR: <>Correspondance du NEJM (2021)</>,
        },
        link: "https://www.nejm.org/doi/full/10.1056/NEJMc2113891",
        description: {
          EN: (
            <>
              New England Journal of Medicine correspondence about miscarraige risk after mRNA vaccination against
              COVID-19
            </>
          ),
          FR: (
            <>
              Correspondance du New England Journal of Medicine au sujet des risques de fausse couche après avoir reçu
              un vaccin à ARNm contre la COVID-19
            </>
          ),
        },
      },

      {
        title: {
          EN: <>Spontaneous Abortion Following COVID-19 Vaccination During Pregnancy</>,
          FR: <>Spontaneous Abortion Following COVID-19 Vaccination During Pregnancy</>,
        },
        linkText: { EN: <>JAMA letter, published 2021</>, FR: <>Lettre de l’American Medical Association (2021)</> },
        link: "https://jamanetwork.com/journals/jama/fullarticle/2784193",
        description: {
          EN: <>Journal of the American Medical Association letter about miscarriage and COVID-19 vaccines</>,
          FR: (
            <>Lettre de l’American Medical Association au sujet des fausses couches et des vaccins contre la COVID-19</>
          ),
        },
      },
      // Reproductive - Resources
      {
        title: {
          EN: <>COVID-19 Vaccines, Fertility and Menstruation</>,
          FR: <>COVID-19 Vaccines, Fertility and Menstruation</>,
        },
        linkText: { EN: <>19 to Zero video</>, FR: <>Vidéo de 19 to Zero</> },
        link: "https://www.youtube.com/watch?v=aFZ757WXNRE",
        description: {
          EN: (
            <>
              Dr. Stephanie Elliott and Dr. Fiona Mattatall talk COVID-19 vaccines and what it means for fertility and
              menstruation.
            </>
          ),
          FR: (
            <>
              Vidéo de 19 to Zero : Les docteures Stephanie Elliott et Fiona Mattatall s’entretiennent des vaccins
              contre la COVID-19 et de ce qu’ils représentent en matière de fertilité et de menstruation.
            </>
          ),
        },
      },
      // Reproductive - Resources
      {
        title: {
          EN: <>Vaccines, pregnancy and fertility telephone town hall</>,
          FR: <>Vaccines, pregnancy and fertility telephone town hall</>,
        },
        linkText: {
          EN: <>Archived audio recording of Townhall conversation</>,
          FR: <>L’enregistrement archivé de cette entretien</>,
          // Translation from Google Translate
        },
        link: "https://www.alberta.ca/article-vaccines-pregnancy-and-fertility-telephone-town-hall.aspx",
        description: {
          EN: (
            <>
              Dr. Deena Hinshaw held a conversation about COVID-19 vaccines, pregnancy, and both female and male
              fertility on October 27, 2021. This is an archived recording of this event.
            </>
          ),
          FR: (
            <>
              La docteure Deena Hinshaw s’est entretenue des vaccins contre la COVID-19, de la grossesse et de la
              fertilité des femmes et des hommes le 27 octobre 2021. Ce lien mène à l’enregistrement archivé de cet
              entretien.
            </>
          ),
        },
      },
      // Reproductive - Resources
      {
        title: {
          EN: <>Calgary Health Foundation: Live Q&amp;A, COVID-19 vaccine</>,
          FR: <>Calgary Health Foundation: Live Q&amp;A, COVID-19 vaccine</>,
        },
        linkText: { EN: <>Video archive of Q&amp;A</>, FR: <>Archives vidéo</> },
        // Translation from Google Translate
        link: "https://www.calgaryhealthfoundation.ca/events/live-qa-covid-19-vaccine/",
        description: {
          EN: (
            <>
              Q&amp;A video from Live session with public health and obstetrics health specialists about the COVID
              vaccines and fertility/pregnancy
            </>
          ),
          FR: (
            <>
              Vidéo avec questions et réponses d’une séance en direct tenue avec des spécialistes en santé publique et
              en obstétrique au sujet des vaccins contre la COVID, de la fertilité et de la grossesse{" "}
            </>
          ),
        },
      },

      {
        title: {
          EN: <>US CDC: V-safe COVID-19 Vaccine Pregnancy Registry</>,
          FR: <>US CDC: V-safe COVID-19 Vaccine Pregnancy Registry</>,
        },
        linkText: { EN: <>Link</>, FR: <>lien Web</> },
        // Translation from Google Translate

        link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafepregnancyregistry.html",
        description: {
          EN: <>US CDC’s V-safe COVID-19 Vaccine Pregnancy Registry.</>,
          FR: <>Registre v-safe des grossesses du CDC américain pour les vaccins contre la COVID-19</>,
        },
      },
    ],
  },

  SideEffects: {
    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
            <>&ldquo;I hear that the side effects from the second dose are really bad.&rdquo;</>,
            <>
              &ldquo;My &#91;friend/family member&#93; had a really bad reaction after they got the vaccine. I am
              worried about that for me.&rdquo;
            </>,
            <>
              &ldquo;I&apos;ve been hearing about these blood clot and heart issues and worry about how safe these
              vaccines are.&rdquo;
            </>,
            <>&ldquo;We don&apos;t know what the long-term effects will be.&rdquo;</>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      thingsToConsider: {
        image: "doctorWhiteWomanBrownHairGlasses.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Beyond the evidence that major side effects from the vaccines are very rare, your patient likely needs
              personal reassurance. Reaffirming that most minor &lsquo;side effects&rsquo; are, in fact, evidence that
              the vaccine and the patient&apos;s immune system are working, can help make the difference.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                Which side effects worry you the most with the vaccines? Can you tell me what you think will happen if
                you get vaccinated?
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I&apos;ve definitely been hearing these concerns among some of my patients. I&apos;m glad you&apos;re
                thinking about all of the risks and benefits of getting the vaccine or not.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                Sometimes people get their immune response mixed up with a side effect. We want your body to mount as
                strong an immune response as it can to the vaccine. Does that make sense? Because we want your immune
                system to do its job, right? That&apos;s not a side effect, that&apos;s THE effect.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                Something to think about here is your risk of getting COVID. Because if you got COVID, obviously you
                could have much even more significant symptoms, right? I mean you could get super sick from that. Much
                sicker than you might feel from a side effect.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
      },

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Which side effects worry you the most with the vaccines? Can you tell me what you think will
                      happen if you get vaccinated?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Have you had any friends or family members who have received a vaccine? How have their experiences
                      been with it?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Can you share with me why specifically you feel nervous about the vaccines? Is there something
                      making you particularly anxious about vaccination?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve definitely been hearing these concerns among some of my patients. I&apos;m glad
                      you&apos;re thinking about all of the risks and benefits of getting the vaccine or not.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      You are not alone! Being anxious about potential side effects has definitely made others hesitate
                      to get the vaccine right away, too. It is scary when we hear people have had bad side effects from
                      a vaccine, or any medication for that matter.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      There&apos;s been a lot of media coverage about blood clots and the vaccines and some of this has
                      been quite confusing.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      You&apos;re right, what you&apos;re describing &#91;e.g., follow-up flu-like symptoms&#93; is
                      really common. Feeling some flu-like symptoms after getting a vaccine is certainly not unusual.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I can understand why you aren&apos;t excited about potentially feeling a bit sick or flu-like for
                      a few days after getting your vaccine.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I&apos;m really glad you got that first shot &mdash; that means you already have some immunity and
                      some protection. And I can understand why you&apos;re concerned that the second one will have
                      worse side effects.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I appreciate that you are looking into and weighing the risks as well as the benefits of getting
                      the vaccine. Everyone has been very closely following and monitoring the &#91;e.g., blood
                      clot/myocarditis&#93; issue, and it makes sense to have concerns about that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      There have been conversations about a certain side effects &#91;e.g. blood clots,
                      myocarditis&#93;. Do you want to look at that information with me? We can discuss it together.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Having the full picture can sometimes make these things a little bit less scary. Can I discuss the
                      benefits and risks of the vaccines with you?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Sometimes people get their immune response mixed up with a side effect. We want your body to mount
                      as strong an immune response as it can to the vaccine. Does that make sense? Because we want your
                      immune system to do its job, right? That&apos;s not a side effect, that&apos;s <i>THE</i> effect.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              //SECOND DOSE STUFF STARTS HERE. MAYBE SUB-HEADING IT LATER.
              {
                text: {
                  EN: (
                    <>
                      &#91;<i>On the importance of the second dose</i>&#93; When the virus can get in to more people
                      &mdash; even if they don&apos;t get really sick &mdash; it gets a chance to mutate. That&apos;s
                      how variants happen and that&apos;s why we keep prolonging the end of this pandemic &mdash; so the
                      more complete protection we have the safer we all will be.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      We know that getting the first dose gets you some protection, but we know that protection
                      isn&apos;t as strong, and won&apos;t last as long. Getting the second dose will give your immune
                      system that kick in the backside, that reminder to know what it&apos;s actually dealing with so
                      that it remembers, and you will be protected for longer.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      The side effects are actually a sign that your immune system has caught on and is fired up. So
                      that&apos;s not saying something&apos;s wrong with the vaccine. That&apos;s actually saying
                      it&apos;s doing its job. Now, the reason there have been a few blood clots is because for a few
                      people, a very few, your immune system produces sort of a weird antibody. Everybody produces
                      different antibodies, slightly different ones...
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "sideEffectsStory",
                fullStoryLinkText: { EN: "Read the full story", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      One of my colleagues was talking about how he&apos;d been talking to some infectious disease
                      doctors who were just over the moon when they got sore arms from their vaccines because, for them,
                      it showed that it was doing something. They saw it as a desired effect, not a side effect!
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Honestly, the thing is, and I&apos;ve been saying this about vaccines for years, you kind of want
                      to feel crummy because it tells you that your immune system is doing its job. Your immune
                      system&apos;s paying attention. Your immune system is reacting to that vaccine the way it should.
                      Imagine what you&apos;d feel like if it was the real thing and not the vaccine?!
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Now, if you ask me, &lsquo;
                      <i>how can you know this isn&apos;t going to have a problem 10 years down the line?</i>&rsquo;, I
                      don&apos;t. I can&apos;t tell you with 100% certainty. But I can explain how the vaccine works,
                      and vaccines have a really strong track record. They&apos;re certainly better than getting a bad
                      case of the disease they&apos;re preventing.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      So I guess &#91;the blood clots&#93; are like seeing a news story about an airplane crash. Even
                      though it happens incredibly rarely, the media make sure you know about it. It&apos;s been like
                      this with the vaccine ever since it was authorized. Everybody&apos;s very interested, rightfully
                      so, in how things go, every little twist and turn. It all gets reported on. But all the reporting
                      on very rare events, combined with us being cooped up, all that makes people anxious. So I&apos;m
                      wondering whether maybe if we could find a reliable source from one of the regulatory agencies or
                      something to talk about safety. It might be worthwhile thinking about that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I get that those stories about side effects can be really scary. But if we look at the statistics
                      behind it, the chances of anything bad happening are just so tiny. The chances of us wearing masks
                      forever and homeschooling our kids forever if we don&apos;t get vaccinated is much higher and much
                      more real.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve had my vaccine. I had a little bit of a headache initially for the first day when I had
                      it and then achy for two days. I couldn&apos;t sleep well. And I was a little bit tired for around
                      about a week and it all settled down. I didn&apos;t really have any reservations about having the
                      vaccine personally. I was actually quite excited to get it really.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Around the world, medical professionals have given this vaccine to hundreds of millions of people
                      now. This is probably the most watched, most followed medical intervention in the history of
                      mankind, and we know the side effects inside and out, and I can promise you that there are no side
                      effects affecting sexual function. There&apos;s just no side effects in that regard.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      In my world, I see guys every day that need Viagra, but they don&apos;t need Viagra because they
                      took a vaccine. They need Viagra because they got other problems. Maybe they have high blood
                      pressure or they got diabetes and those sort of things, but that&apos;s got nothing to do with the
                      vaccine.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      You want it to do something. You don&apos;t want to have nothing happen. It&apos;s actually
                      promising that it&apos;s working and that your immune system is now going to recognize COVID and
                      give you that protection against hospitalization and death that we know these vaccines primarily
                      give people.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, my &#91;friend/relative&#93; is quite athletic and they&apos;re &#91;younger&#93;, this is a
                      true story. And they got COVID and it laid them low. And they have been having chest pain ever
                      since, and they had to actually go see a cardiologist. And the cardiologist said their heart was
                      fine, but you know, they weren&apos;t really able to get back to biking for weeks and weeks. So
                      just seeing that in my own &#91;friend/relative&#93; I was like, &lsquo;
                      <i>Oof, I just don&apos;t want to risk that.</i>&rsquo; I&apos;d rather have the side effects from
                      the vaccine than roll the dice with getting the real disease.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Something to think about here is your risk of getting COVID. Because if you got COVID, obviously
                      you could have much even more significant symptoms, right? I mean you could get super sick from
                      that. Much sicker than you might feel from a side effect.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Are you kidding me? So every single day, about 20 times a day, you pop open a cigarette pack. A
                      pack that says: &lsquo;this thing will kill you&rsquo;. And you&apos;ve been doing that for 20
                      years and now you&apos;re going to stand there and tell me that you&apos;re afraid of a one in a
                      million chance of a severe adverse event? You&apos;re afraid of that when your cigarette package
                      tells you you&apos;re definitely going to die from those things? This is the time you&apos;re
                      going to be worried about a potential side effect?!
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      &#91;When coordinating vaccination around life events&#93; I mean you could get the first shot and
                      see how you feel. Then with the second shot, you can postpone it if you wanted since you&apos;re
                      at a little bit higher risk of feeling a bit flu-like for a couple days. That would be reasonable.
                      I mean my first recommendation would be to do them both as soon as you can just because COVID is
                      such a bad disease.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    //SIDEEFFECTS RESOURCES
    resources: [
      {
        title: {
          EN: <>How to explain side effects without scaring patients</>,

          FR: <></>,
        },
        linkText: { EN: <>General advice to clinicians</>, FR: <></> },
        link: "https://www.singlecare.com/blog/explain-side-effects/",
        description: {
          EN: <>Advice to clinicians on how to discuss side effects with patients. (Feb 2020)</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Five Ways to Communicate Risk So That Patients Understand</>,

          FR: <></>,
        },
        linkText: { EN: <>AAFP Article</>, FR: <></> },
        link: "https://www.aafp.org/fpm/2018/1100/p28.html",
        description: {
          EN: (
            <>
              Tips on how to communicate risks in understandable, patient-friendly ways. From the American Academy of
              Family Medicine. (2018)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Are there long-term side effects caused by mRNA COVID-19 vaccines? How do we know?</>,

          FR: <></>,
        },
        linkText: { EN: <>FAQ page from ImmunizeBC</>, FR: <></> },
        link: "https://immunizebc.ca/ask-us/questions/are-there-long-term-side-effects-caused-mrna-covid-19-vaccines-how-do-we-know",
        description: {
          EN: (
            <>ImmunizeBC examines the question of long-term side effects from COVID-19 vaccines. (Updated, June 2021)</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Alberta Health: Myocarditis and/or Pericarditis following COVID-19 Vaccines</>,

          FR: <></>,
        },
        linkText: { EN: <>Medical advisory from Alberta Health for Medical Professionals</>, FR: <></> },
        link: "https://www.alberta.ca/assets/documents/health-QA-myocarditis-and-pericarditis-following-covid.pdf",
        description: {
          EN: (
            <>
              Alberta Health compiled information on myocarditis and pericarditis following COVID vaccination. Targeted
              for medical professionals. (Updated, July 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Alberta Health: COVID-19 Vaccine - Care After Immunization</>,

          FR: <></>,
        },
        linkText: { EN: <>Information about side effects and care after COVID-19 vaccination</>, FR: <></> },
        link: "https://myhealth.alberta.ca/health/pages/conditions.aspx?Hwid=custom.ab_imm_covid19vaccine_ac",
        description: { EN: <> (Updated, July 2021)</>, FR: <></> },
      },

      {
        title: {
          EN: <>Mixing Vaccines Provides Strong Protection: NYTimes Article</>,

          FR: <></>,
        },
        linkText: { EN: <>NYTimes Article: Mixing Pfizer and Astra Zeneca Provides Strong Protection</>, FR: <></> },
        link: "https://www.nytimes.com/2021/06/28/health/mixing-pfizer-astrazeneca-results.html",
        description: {
          EN: (
            <>
              {" "}
              Media coverage with links to studies showing that mixing vaccine types provides strong immunity. (June
              2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>MayoClinic - COVID-19: Long-term effects</>,

          FR: <></>,
        },
        linkText: { EN: <>MayoClinic Info on Long-COVID</>, FR: <></> },
        link: "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-long-term-effects/art-20490351",
        description: {
          EN: <>MayoClinic&apos;s infopage on the long-term effects of COVID and long-COVID. (May 2021)</>,
          FR: <></>,
        },
      },
    ],
  },

  Conspiracies: {
    related: ["PoliticalSkeptic", "ScienceConcerns", "Unconcerned"],
    overview: {
      theySay: {
        image: "Hesitancy Group 3.svg",
        content: {
          EN: [
            <>
              &ldquo;I don&apos;t trust the government telling me what I need to do when they haven&apos;t led us down
              the right road, in my view, to this day.&rdquo;
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
              &ldquo;All these reports are coming out on the CDC website that report horrible side effects after people
              get the vaccine. Why isn&apos;t this being reported? Why would I trust doctors and not the CDC?&rdquo;
            </>,
            <>&ldquo;Why haven&apos;t we been using Ivermectin to help treat COVID?&rdquo;</>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      thingsToConsider: {
        image: "doctorBlackManBeard.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              There&apos;s a firehose of information out there and it can be difficult to understand. Working with your
              patient, as an equal, you can review that information together and come to a mutual understanding that
              meets their health goals.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // conspiracies
    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                It&apos;s been a really hard year for me as a physician and for my colleagues. And yeah, my own personal
                experience has been seeing a lot of sick patients, a lot of scared patients when they&apos;ve become
                contacts &#91;of cases&#93; and stuff. And I hear you, you&apos;re saying that hasn&apos;t really been
                your experience. So what do you think is the end game &#91;for pharmaceutical companies&#93;, aside from
                making money off of the vaccines? Talk to me a little bit about what you think the benefit is for pharma
                in creating this whole situation. How are they winning?
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I hear you, that you don&apos;t trust the government on this, but I&apos;ve been doing my own research,
                because I&apos;m with you on this issue. I think they haven&apos;t earned our trust all the way around,
                right? So that&apos;s why I&apos;ve been doing my reading. I&apos;ve been making sure that I&apos;m
                fully up to date, so I can provide the right advice to the people I really care for.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked
                together for &#91;<i>x amount of time</i>&#93;, so I&apos;m hoping you might appreciate that I look at
                this vaccine with a different lens than what you&apos;ve heard in the media.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManYoung.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face and
                have some of that comradery with your colleagues. You mentioned your kids going back to school in a
                normal way. What would you be willing to pay for that? What would you be willing to give for that?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
      },
      // conspiracies
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      It&apos;s been a really hard year for me as a physician and for my colleagues. And yeah, my own
                      personal experience has been seeing a lot of sick patients, a lot of scared patients when
                      they&apos;ve become contacts &#91;of cases&#93; and stuff. And I hear you, you&apos;re saying that
                      hasn&apos;t really been your experience. So what do you think is the end game &#91;for
                      pharmaceutical companies&#93;, aside from making money off of the vaccines? Talk to me a little
                      bit about what you think the benefit is for pharma in creating this whole situation. How are they
                      winning?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I think I&apos;m hearing you say that when it comes to COVID-19, it&apos;s all very much black or
                      white. Either, I&apos;m all wrong as a physician, as a scientist, and you have it all right. And
                      if I&apos;m wrong then it&apos;s a total sham and it&apos;s made up and it&apos;s entirely about
                      government control. Or it&apos;s got to be the other way around and you&apos;re all wrong and that
                      would not be a comfortable position for you, I can imagine. I think, maybe, it&apos;s not quite so
                      black and white. I certainly don&apos;t think you&apos;re all wrong, but maybe you don&apos;t
                      think I&apos;m totally wrong either.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I hear you, that you don&apos;t trust the government on this, but I&apos;ve been doing my own
                      research, because I&apos;m with you on this issue. I think they haven&apos;t earned our trust all
                      the way around, right? So that&apos;s why I&apos;ve been doing my reading. I&apos;ve been making
                      sure that I&apos;m fully up to date, so I can provide the right advice to the people I really care
                      for.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
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
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      This concern is something I&apos;ve heard quite a bit from my patients. And I can see why people
                      are thinking about it. So, because of that, I&apos;ve done a fair bit of research in this space to
                      make sure that I could effectively answer people&apos;s questions and concerns.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      The media coverage of this has been really challenging to follow, eh? It seems like every day
                      there&apos;s something new and it contradicts what was said before, which can make it even more
                      difficult to tease out what&apos;s helpful.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      It sounds like you&apos;re really concerned about the government and other people making decisions
                      for you and that it&apos;s almost like your decision-making &#91;is being hindered&#93; by the
                      government and public health, is that fair?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked
                      together for &#91;x amount of time&#93;, so I&apos;m hoping you might appreciate that I look at
                      this vaccine with a different lens than what you&apos;ve heard in the media.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      You&apos;re doing Internet research, and so am I. I&apos;m right there with you, and it&apos;s
                      really confusing, isn&apos;t it? Can we compare notes?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
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
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // conspiracies
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Can I personally vouch for every CEO of every Big Pharma company? Can I personally vouch that no
                      one in history has ever done something shady to try and make money? Absolutely I can&apos;t. And
                      yet in my work, every single day I see people&apos;s whose lives are changed for the better, as a
                      result of drug therapies developed by pharmaceutical companies. I see people who live longer,
                      fuller lives because we&apos;re able to use the medications that are out there. And the vaccine is
                      one of those drugs &mdash; longer, fuller lives for all of us. Better lives. Lives without masks
                      and distancing and restrictions.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I remember that you were concerned about FDA approval before you took any vaccine. We know the FDA
                      has explicitly come out and said &lsquo;
                      <a
                        className="ml-1.5 orangeUnderline"
                        href="https://www.fda.gov/consumers/consumer-updates/why-you-should-not-use-ivermectin-treat-or-prevent-covid-19"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        do not use ivermectin for COVID-19 <FiExternalLink className="inline" size={18} />
                      </a>
                      &rsquo;, and it is definitely not approved for anything related to COVID. But they are doing
                      research on this right now, there are trials ongoing. They are not ignoring the anecdotes, or
                      trying to suppress research &ndash; let&apos;s just wait until that research is done before we
                      start taking unapproved drugs.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      As far as these vaccines go, I don&apos;t necessarily need you to trust &#91;politicians&#93;, but
                      I do think you should trust me. These are good vaccines. They keep people from dying from the
                      virus.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Well, it sounds like, you&apos;ve done a lot of research on Ivermectin. The thing I have concerns
                      about is that there&apos;s research saying that repurposing drugs that were invented to treat
                      something else doesn&apos;t always work. I know there&apos;s a lot of people that are hoping
                      Ivermectin will work with COVID. But it certainly wasn&apos;t designed for that. With the vaccines
                      you don&apos;t have to hope that something will work. We know that it works. And that it&apos;s
                      safe. Which, given what I&apos;ve read about the folks who are taking veterinary grade Ivermectin,
                      I&apos;m really concerned that you can say it&apos;s safe. I&apos;m thinking you might actually do
                      more harm than good.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The problem with these Adverse Event websites (e.g. CDC VAERS) is that they are completely
                      unfiltered. Any bad thing that happened to anyone, a week or six weeks after they got a vaccine
                      gets put in there. If you take 100,000 people at random, don&apos;t give them a vaccine, just say
                      &apos;
                      <i>Okay today&apos;s the day we&apos;re going to pay attention to you</i>,&apos; I guarantee
                      30,000 of them within a day or two are going to have a sniffle, a headache, a miscarriage,
                      something. If you follow 100,000 people over time, something is bound to happen randomly. Or if it
                      isn&apos;t randomly, it certainly doesn&apos;t have anything to do with the thing you said you
                      were paying attention to. What this means is that a lot of the information on those sites is
                      noise. The reason it&apos;s collected is to see if there&apos;s a pattern developing out of the
                      noise. Not, &apos;did somebody somewhere have this after a vaccine,&apos; but &apos;did more
                      people in a given week who got the vaccine have this than people who didn&apos;t get the
                      vaccine.&apos;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      As doctors we&apos;ve taken the idea of using Ivermectin seriously enough to do proper scientific
                      controlled studies on it. There&apos;s a reason we don&apos;t prescribe it for COVID, and
                      it&apos;s because it doesn&apos;t work. There have been a dozen studies. At most, a couple of them
                      have shown, kind of, maybe, sort of, if-you-squint-you-can-see-a-shape in the cloud, that
                      Ivermectin might help. A little. Most of them have found no benefit. I mean if you&apos;re really
                      determined to believe it would help, you can jigg the numbers and can sort of convince yourself,
                      but you&apos;re looking for shapes in the clouds. And why look in the clouds for signs when the
                      vaccine works and is safe? They&apos;re both medicine. They&apos;re both an intervention from
                      outside. But one of them definitely works and the other, well, you&apos;re looking at clouds.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      When you get the injection, it comes with a needle that has an opening less than a millimeter
                      wide. We make microchips all the time. We don&apos;t make them that small. There has to be some
                      degree, of faith, I guess, in that regard. Look at the needles they use to inject the microchips
                      into dogs &mdash; we&apos;re talking about almost 3 millimeters wide to fit the chip. We just
                      don&apos;t have chips small enough to fit into these vaccine syringes.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
              // conspiracies
              {
                text: {
                  EN: (
                    <>
                      I get to see lots of people, lots of different experiences, and have a different perspective than
                      the average person who just knows the people in their family and immediate surroundings. What I
                      know is that lots and lots of people got sick, and a small percentage of people got very, very
                      sick. You&apos;re exactly right. The problem is that a small percentage of a large number of
                      people piles up, and every case that ends up in the intensive care unit stays there for three
                      weeks, on average, and of those, probably about 30&#37; of them die.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      &#91;<i>If patient brings up adverse event reports.</i>&#93; You are comparing this vaccine to
                      other vaccines &mdash; the more appropriate comparison is the deaths from a vaccine to the deaths
                      and impact of the disease it is protecting us from. The vaccines for COVID have also been studied
                      in much higher numbers of people than any other vaccine and have been rolled out to more people
                      than any other vaccine &mdash; so it makes sense that we would see more adverse outcomes &#91;than
                      with other vaccines&#93;.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // conspiracies
              {
                text: {
                  EN: (
                    <>
                      So do you remember Ebola and another virus called MERS, M-E-R-S? We love our acronyms in science!
                      But, researchers were actually looking at mRNA technology to fight those two conditions but they
                      disappeared too quickly, so the mRNA technology was put on the shelf...
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "redTapemRNA",
                fullStoryLinkText: { EN: "Read the full story", FR: "" },
              },
            ],
          },
        ],
      },
      // conspiracies
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face
                      and have some of that comradery with your colleagues. You mentioned your kids going back to school
                      in a normal way. What would you be willing to pay for that? What would you be willing to give for
                      that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                      for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                      doing?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              // conspiracies
              {
                text: {
                  EN: (
                    <>
                      You understand the pandemic based on your sources &#91;of truth&#93;, but what would have to
                      happen in your immediate vicinity to convince you to rely on something other than those sources?
                      If, for example, say someone you were close to actually got sick enough to need to be in ICU and
                      intubated, would that change your opinion? Hypothetically?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I see what you&apos;re saying. Well, if I was going to put my evil thinking cap on, if I was
                      trying to create a situation where absolutely everyone would want to get a vaccine, I
                      wouldn&apos;t give them something similar to what we&apos;ve seen before, like the flu. I&apos;d
                      go big. I&apos;d be like, &lsquo;
                      <i>
                        Okay, Im going to create something that&apos;s going to make everyone&apos;s skin turn purple
                      </i>
                      &rsquo;, and the only way to fix it is by taking a vaccine. Because no one wants to walk around
                      looking purple and it would be really visible. I also wouldn&apos;t have the disease kill anyone
                      because you can&apos;t sell a vaccine to someone who is already dead. So I guess if that was their
                      &#91;e.g., pharmaceutical companies&apos;/the government&apos;s&#93; real objective, they maybe
                      didn&apos;t come up with the right disease.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // conspiracies
              {
                text: {
                  EN: (
                    <>
                      What if someone within your circle &#91;of family or friends&#93; got vaccinated, maybe for some
                      other reason? Maybe they&apos;ve got some underlying problems and their physician put out a case
                      for them that changed their mind. Hypothetically, if someone you knew had gotten a COVID vaccine,
                      would that nudge you away from where you&apos;re at right now?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      Tell me what you would have to hear or see or which person you would need to stand up and speak in
                      favour of vaccines, for you to switch from this clearly, really hard &lsquo;no&rsquo; over to a
                      &lsquo;maybe&rsquo;?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // conspiracies
              {
                text: {
                  EN: (
                    <>
                      After all these years of working together, would you include information that you receive from me
                      as credible?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I think what I&apos;ve heard you say here is that if we talk about this in hypotheticals you see
                      some situations where you could potentially change your mind.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (Conspiracies)
    resources: [
      {
        title: {
          EN: <>How to take on COVID conspiracy theories</>,

          FR: <></>,
        },
        linkText: { EN: <>Financial Times news article</>, FR: <></> },
        link: "https://www.ft.com/content/6660cb80-8c11-476a-b107-e0193fa975f9",
        description: {
          EN: (
            <>News article examining the spread of misinformation, and some advice on how to counter it. (Feb 2021)</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Winning Hearts and Minds</>,

          FR: <></>,
        },
        linkText: { EN: <>Johns Hopkins University interview</>, FR: <></> },
        link: "https://hub.jhu.edu/2021/06/30/winning-hearts-and-minds/",
        description: {
          EN: (
            <>
              Interview with public health expert Jennifer Nuzzo of JHU about vaccine hesitancy conversations. (June
              2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>To counter conspiracy theories, boost well-being</>,

          FR: <></>,
        },
        linkText: { EN: <>Nature journal blog article</>, FR: <></> },
        link: "https://www.nature.com/articles/d41586-020-03130-6",
        description: {
          EN: (
            <>Expert on countering misinformation looks at various approaches to these conversations. (November 2020)</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Six rules of engagement</>,

          FR: <></>,
        },
        linkText: { EN: <>The Conversation news article</>, FR: <></> },
        link: "https://theconversation.com/ive-been-talking-to-conspiracy-theorists-for-20-years-here-are-my-six-rules-of-engagement-143132",
        description: {
          EN: <>Discussion looking at how to engage with misinformation and conspiracies. (July 2020)</>,
          FR: <></>,
        },
      },
    ],
  },

  Naturalist: {
    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
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
              &ldquo;I&apos;ve heard that some &#40;supplements/probiotics/remedies&#41; can help prevent or minimize
              the symptoms from COVID.&rdquo;
            </>,

            <>
              &ldquo;I had chicken pox at 8, shingles at 38 and I&apos;m still living. I don&apos;t see the need to get
              vaccinated.&rdquo;
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorWhiteManGoatee.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Remember that the goal for you and your patient is mutual&#58; to maximize their health and wellbeing.
              Help your patient see that vaccines can leverage their natural immunity and ultimately promote longevity.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                So when you say &lsquo;natural&rsquo;, I just want to make sure we&apos;re on the same page about that,
                because I know we&apos;re on the same page about our end goal. We both want you to be well. So just help
                me understand what you mean by natural as it relates to the vaccine.
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I know that after all these years working together that your health and your ability to live a long,
                healthy life has always been a big part of what defines you. Is that what you would say if you were
                describing yourself?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanBrownHairGlasses.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                So, mRNA is something that is in our bodies already. We all make it as part of how we make protein and
                so I just want to reassure you that that&apos;s not some unnatural thing. It&apos;s something that
                triggers your own body to make the proteins that you then make antibodies for.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                I guess the concern I have, is that the COVID infection itself may not be natural either. And so we
                might have to take special pains to keep you protected from it. And I can&apos;t think of a more natural
                way to protect yourself than the vaccine, right?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      So when you say &lsquo;natural&rsquo;, I just want to make sure we&apos;re on the same page about
                      that, because I know we&apos;re on the same page about our end goal. We both want you to be well.
                      So just help me understand what you mean by natural as it relates to the vaccine.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: <>Can you tell me more about what you mean by &lsquo;natural immunity&rsquo;? </>,
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What kinds of medications or medical products do you feel comfortable using to &lsquo;boost your
                      immunity&rsquo;? Are there any specific ingredients you do not feel comfortable taking?{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I know that after all these years working together that your health and your ability to live a
                      long, healthy life has always been a big part of what defines you. Is that what you would say if
                      you were describing yourself?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I see how getting the vaccine might feel like it&apos;s not the same kind of thing as what
                      you&apos;ve been doing to keep yourself healthy normally, I get that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I think what can happen when we&#39;re in a situation like we are with COVID right now is
                      oftentimes when we&apos;ve lived a really healthy life and we&apos;ve done everything we can to be
                      as healthy as we can, we start to get nervous about things that are new. We can get a feeling like
                      these new medicines might disrupt our normal, healthy routines.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You know I have your back. I want you to achieve your goals. I want you to be healthy just like
                      you want to be healthy. I think we&apos;re the same there.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I think for a young, healthy person like you, the likelihood is that COVID is not going to kill
                      you. I&apos;m not here to lie to you. You know I have your back.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                      different options that might be available to you to. Do you think it might be okay if I tell you a
                      little bit about what I know, as opposed to maybe what you&apos;re hearing about from other
                      sources?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Would you be interested at all in hearing from me about how the vaccines work? We&apos;ve worked
                      together for &#91;<i>x amount of time</i>&#93;, so I&apos;m hoping you might appreciate that I
                      look at this vaccine with a different lens than what you&apos;ve heard from some of your other
                      sources.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I think that the vaccine that we have today is very safe and it&apos;s actually very simple.
                      It&apos;s hard to make, but it&apos;s very simple. So, there&apos;s not a lot of extra chemicals
                      in there. There are no other ingredients in the vaccine, other than the fatty stuff they use to
                      allow us to inject it.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I&apos;d like to give you another way to think about the vaccines. I&apos;m not saying you&apos;re
                      thinking is wrong, but I&apos;m just giving you another way to think about them. A vaccine is a
                      teacher. Your immune system is one of the most amazing learning machines in the known universe.
                      The vaccine just stands in front of your genius immune system and shows it a piece of the virus,
                      and says: &lsquo;
                      <i>Hey, this is the bad stuff. This is what you want to attack.</i>&rsquo; And off your immune
                      system goes!
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Can I give you another way to think about the vaccines? The vaccine is like a cop &mdash; a
                      homicide detective. When it goes into your arm it&apos;s like giving the bad guy&apos;s glove to
                      the police dog to sniff. Your immune system is that attack dog. The vaccine goes in and waves the
                      suspect&apos;s glove in front of the attack dog. It&apos;s like the vaccine is saying: &lsquo;
                      <i>This is what you&apos;re after.</i>&rsquo; And once your immune system has that scent,
                      it&apos;s on a mission!
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      <i>Amount</i> is the key word with anything you&apos;re putting in your body. Now, there are some
                      things that are so poisonous that any amount is the wrong amount. Plutonium &#91;which is
                      radioactive&#93; is so toxic that even the tiniest amount will make you sick. Let me give you
                      another example of selenium. One reason we don&apos;t want coal mines is because they put selenium
                      into the water at a level that will, even though it&apos;s only millionths of a gram, will kill
                      the fish, make people sick, can&apos;t use the water, ruin people&apos;s wells. So selenium is
                      pretty toxic in those amounts. But here&apos;s the funny thing: if you have no selenium,
                      you&apos;ll die. That&apos;s why you find selenium in multivitamins. It&apos;s amount that&apos;s
                      key.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      …I&apos;m not worried about propylene glycol. Yeah they use it in windshield washer fluid.
                      That&apos;s not because it&apos;s toxic, that&apos;s because it doesn&apos;t freeze. And remember
                      they have to keep the vaccines in a freezer. It&apos;s an antifreeze that is safe for people in
                      tiny amounts. And the amounts we&apos;re talking about here &#91;in the vaccines&#93; are insanely
                      tiny.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      It&apos;s leveraging your natural immunity, it&apos;s giving your natural immune system a hint as
                      to what COVID looks like, and getting your natural immune system ready for it. So of all the
                      options, I just feel like it&apos;s pretty natural one, really.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So your immune system is kind of like your language system. If you don&apos;t learn a language, if
                      you don&apos;t learn to read when you&apos;re young, you can do it when you&apos;re older, but
                      you&apos;re never good at it. You&apos;ll never be a native speaker. You&apos;ll never be a good
                      reader if you don&apos;t learn it when you&apos;re little, because that&apos;s when your brain is
                      primed to learn this stuff. And when you&apos;re young is when your immune system is primed to
                      learn this stuff too. Now that&apos;s not great news for people like me in our sixties who are
                      getting the vaccine. And that&apos;s why if you read this stuff, you&apos;ll see people my age
                      just don&apos;t develop the immune response. We get some, but we just don&apos;t develop the
                      immune response that younger people do because we&apos;re too far past that, what we call it, a
                      critical period. That&apos;s what the language teachers talk about. We&apos;re too far past that.
                      I mean, I could learn Mandarin. I&apos;ve learned a few words, but I&apos;ll never be an actual
                      Mandarin speaker. If I&apos;d started when I was 10. I could have been. And your immune system
                      works that way. It&apos;s an avid learner.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The vaccine doesn&apos;t stay in your body forever. It&apos;s just like any kind of medication you
                      take, like a pill you take by mouth. It doesn&apos;t stay in your body forever. It gets flushed
                      out of your body in a few days, naturally.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I guess the concern I have, is that the COVID infection itself may not be natural either. And so
                      we might have to take special pains to keep you protected from it. And I can&apos;t think of a
                      more natural way to protect yourself than the vaccine, right?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I hear you, but I guess I can&apos;t quite follow what&apos;s natural in all this. It&apos;s
                      natural when you get appendicitis to let it explode and potentially get in big trouble from that.
                      It&apos;s arguably unnatural to have a surgeon cut it out. But for sure you would want that. And I
                      think there&apos;s other kinds of medical inventions that you would want to take advantage of if
                      you really needed it. COVID-19 is one of the moments where we all really need it. Our natural
                      immune response just needs a kick from the vaccine. That&apos;s much less invasive than surgery
                      for an appendix.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      But what does concern me is that you could be the link in a chain for somebody else ending up in
                      the ICU. Whether that&apos;s your friends, or your family members. Do you absolutely need this
                      vaccine? Maybe not, maybe it&apos;d be fine. But do we as a community need this vaccine? I think
                      we do. The vaccine helps stop the transmission chains and gets us back to normal, natural life.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (Naturalist)
    resources: [
      {
        title: {
          EN: <>Association of Accredited Naturopathic Medical Colleges Statement on COVID Vaccination (US)</>,

          FR: <></>,
        },
        linkText: { EN: <>Link to AANMC statement</>, FR: <></> },
        link: "https://aanmc.org/featured-articles/aanmc-statement-on-covid-19-vaccination/",
        description: {
          EN: <>AANMC issued a strong statement that all community members receive COVID vaccines. (January 2021)</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>The COVID Choice</>,

          FR: <></>,
        },
        linkText: { EN: <>NDs for Vaccines article</>, FR: <></> },
        link: "https://ndsforvaccines.com/the-covid-choice/",
        description: {
          EN: (
            <>
              Naturopathic doctors discuss the choice to get the COVID vaccine, with various approaches and
              considerations. (December 2020)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Holistic Vaccine Support</>,

          FR: <></>,
        },
        linkText: { EN: <>Blog article from an ND</>, FR: <></> },
        link: "https://www.drdianaquinn.com/blog/4ltwwd8s9657e93wr37xcx7ma7tj2w",
        description: {
          EN: (
            <>
              Naturopathic doctor discusses the various considerations for COVID vaccination. Approachable blog post for
              CAM-oriented patients. (January 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Opinion Article: I believe in natural health, but I also got my COVID-19 vaccine</>,

          FR: <></>,
        },
        linkText: { EN: <>Op-Ed in The Globe and Mail</>, FR: <></> },
        link: "https://www.theglobeandmail.com/opinion/article-healthy-skepticism-doesnt-necessarily-mean-rejecting-mainstream/",
        description: {
          EN: (
            <>
              Author and patient committed to natural health explains why they decided to get the COVID vaccine. (July
              2021)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  PoliticalSkeptic: {
    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 2.svg",
        content: {
          EN: [
            <>&ldquo;I&apos;m not going to let the government have control over what goes into my body.&rdquo;</>,
            <>
              &ldquo;This virus has been completely politicized. If you want me to trust the science, you have to take
              the politics out of it.&rdquo;
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
          FR: [<></>, <></>, <></>],
        },
      },
      thingsToConsider: {
        image: "doctorBlackManBeard.svg",
        content: {
          EN: [
            <>Emphasize patient autonomy and validate deliberations about the vaccines.</>,
            <>Situate yourself as a neutral source of truth and open to exploring their concerns.</>,
            <>Offer to explore facts and sources together.</>,
            <>
              Focus on personal benefits of getting vaccinated &#40;e.g. travel, socializing, recreational activities,
              etc.&#41;.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              After over a year of undergoing lockdowns and forced closures, it&apos;s time patients feel empowered to
              take their health into their own hands. You can help your patient evaluate options for and against
              vaccination, and discuss what both possibilities mean for their freedom and independence.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // PoliticalSkeptic
    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                I really want us to go back to how things were in 2019. For me, the best tool for us to get back there
                is the vaccine because once we&apos;re all protected with the vaccine then we will be able to resume our
                normal lives. What are your thoughts?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanBrownHairGlasses.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                It sounds like you&apos;re really concerned about the government and other people making decisions for
                you and that it&apos;s almost like your ability to make decisions &#91;is being hindered&#93; by the
                government and public health, is that fair?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                I find it nutty these days: as quickly as you&apos;ve made a decision, all the information changes. And
                I can see for folks who haven&apos;t studied vaccines and haven&apos;t studied diseases, that it looks
                like the government is flipping and flopping all over the place and they don&apos;t know what the heck
                they&apos;re doing. But there&apos;s a difference between that high level government stuff – the school
                and business closures and all that. There&apos;s a difference between that stuff and what you and I are
                talking about right now.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                I know you love to &#91;go
                travelling/&#8203;camping/&#8203;outdoors/&#8203;clubbing/&#8203;dining/&#8203;etc.&#93;. And I&apos;m
                pretty sure you&apos;d rather be able to work face to face and have some of that comradery with your
                colleagues. I&apos;m pretty sure you&apos;d rather have your kids back to school in a normal way. What
                would you be willing to pay for that? What would you be willing to give for that?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // PoliticalSkeptic
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I think on the one hand, I&apos;m hearing you say that you&apos;re very much black or white around
                      this. It&apos;s either I have it all wrong as a physician, as a scientist, and you have it all
                      right. That this is a sham and it&apos;s made up and the whole thing is about government control.
                      Or it&apos;s got to be the other way around, that you&apos;re all wrong and everyone had good
                      intentions towards one another. All &apos;kum-bye-yah&apos; and nice. I think there&apos;s some
                      room in between those. Some grey. And I can understand that if it&apos;s black and white, you
                      would need to win. But I&apos;m not here to try to win. I&apos;m here as your doctor. I&apos;m not
                      part of the government. I&apos;m here to talk about the grey in between. Where some of it is a
                      sham, for sure, and some of it is really effective. Can we have that conversation?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I really want us to go back to how things were in 2019. For me, the best tool for us to get back
                      there is the vaccine because once we&apos;re all protected with the vaccine then we will be able
                      to resume our normal lives. What are your thoughts?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      It sounds like you&apos;re really concerned about the government and other people making decisions
                      for you and that it&apos;s almost like your ability to make decisions &#91;is being hindered&#93;
                      by the government and public health, is that fair?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, I hear you that you don&apos;t trust the government on this. I&apos;m with you on that.
                      It&apos;s why I&apos;ve been doing my own research, because I&apos;m with you. I don&apos;t think
                      they&apos;ve earned our trust, right? So, I&apos;ve been making sure that I&apos;m fully up to
                      date, so I can provide the advice that I want to provide to the people I really care for.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // PoliticalSkeptic
              {
                text: {
                  EN: (
                    <>
                      What I&apos;m hearing is that you want to get back to normal life, is that right? You want to be
                      able to enjoy those activities that you enjoyed all of your life without being encumbered by
                      physical distancing and masking. Is that what I&apos;m hearing?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: { EN: <></>, FR: <></> },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I find it nutty these days: as quickly as you&apos;ve made a decision, all the information
                      changes. And I can see for folks who haven&apos;t studied vaccines and haven&apos;t studied
                      diseases, that it looks like the government is flipping and flopping all over the place and they
                      don&apos;t know what the heck they&apos;re doing. But there&apos;s a difference between that high
                      level government stuff &mdash; the school and business closures and all that. There&apos;s a
                      difference between that stuff and what you and I are talking about right now. Are they getting
                      some of those high-level calls wrong? Probably. But when it comes to the vaccines, I can tell
                      you&apos;re they&apos;re 100% on track. My job is to work with you to think about what&apos;s in
                      the best interest of you and your health. And I can tell you that the vaccines are in your best
                      interests and very good for your health.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What we&apos;re trying to do as physicians is to help people to see that the more we do this one
                      last thing of getting vaccinated, the more quickly we can start to peel off all those restrictions
                      and get back to a sense of normal, like before COVID.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },
              // PoliticalSkeptic
              {
                text: {
                  EN: (
                    <>
                      Here&apos;s what I&apos;ve learned. Around the world, hundreds of millions of people have had
                      these vaccines. In terms of the development, yes they went pretty quickly from &lsquo;
                      <i>what is this virus?</i>
                      &rsquo; to, &lsquo;<i>let&apos;s build a vaccine for it</i>&rsquo;. But they actually didn&apos;t
                      skip any steps. I looked into it.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "quickDevelopment",
                fullStoryLinkText: { EN: "Read the full story", FR: "" },
              },
            ],
          },
        ],
      },
      // PoliticalSkeptic
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I know you love to &#91;go
                      travelling/&#8203;camping/&#8203;outdoors/&#8203;clubbing/&#8203;dining/&#8203;etc.&#93;. And
                      I&apos;m pretty sure you&apos;d rather be able to work face to face and have some of that
                      comradery with your colleagues. I&apos;m pretty sure you&apos;d rather have your kids back to
                      school in a normal way. What would you be willing to pay for that? What would you be willing to
                      give for that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                      for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                      doing?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              // PoliticalSkeptic
              {
                text: {
                  EN: (
                    <>
                      You&apos;re right, you could look at the people getting the vaccine as sheep. Just following what
                      the government is saying. But in this case I&apos;m not the government, I&apos;m telling you that
                      this is a really good idea. But you could still just see everyone who&apos;s doing it as a sheep.
                      That&apos;s fair. My follow up question would be: Who are the group that&apos;s not getting the
                      vaccines following? Aren&apos;t they just sheep of a different colour? We all have to put some
                      faith in things, I get it. And I&apos;m offering you some perspectives that you can put some faith
                      in. I&apos;m your doctor, not the government. You don&apos;t have to put any stock in what I say,
                      but I&apos;m hoping you&apos;ll consider it alongside the other ideas you&apos;re following.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So I think, it sounds to me if you knew that it would be clearly the path to getting you back to
                      &#91;social activities&#93;, and getting the kids back to school, and getting normal again, then
                      it&apos;s time. Then it&apos;s time for you to say, &lsquo;<i>Okay, I see the benefit here</i>
                      &rsquo;. And until then you&apos;re living sort of like a hermit and it&apos;s not a good bargain
                      in your mind right now.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (PoliticalSkeptic)
    resources: [
      {
        title: { EN: <>A Guide to Global COVID-19 Vaccine Efforts</>, FR: <></> },
        linkText: { EN: <>Council on Foreign Relations Backgrounder</>, FR: <></> },
        link: "https://www.cfr.org/backgrounder/guide-global-covid-19-vaccine-efforts",
        description: {
          EN: (
            <>CFR backgrounder looking at the development of the vaccines and who was involved. (Updated, June 2021)</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: (
            <>
              Organization for Economic Co-operation and Development (OECD): Enhancing public trust in COVID-19
              vaccination: The role of governments
            </>
          ),
          FR: <></>,
        },
        linkText: { EN: <>OECD Policy Responses to COVID-19</>, FR: <></> },
        link: "https://www.oecd.org/coronavirus/policy-responses/enhancing-public-trust-in-covid-19-vaccination-the-role-of-governments-eae0ec5a/",
        description: {
          EN: (
            <>
              OECD overview of the role of governments globally in vaccination programs and efforts, including building
              trust with the public. (May 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: { EN: <>Focus Group: Vaccine hesitancy conversation</>, FR: <></> },
        linkText: { EN: <>YouTube video</>, FR: <></> },
        link: "https://youtu.be/lSD_dSAFFwU",
        description: {
          EN: (
            <>
              Focus group discussion with a US-based Republican pollster and vaccine hesitant individuals who changed
              their mind about the vaccine. (March 2021)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  Religious: {
    // Moral or Religious Objections

    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 3.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorBlackWoman.svg",
        content: {
          EN: [
            <>Emphasize that taking a vaccination is a moral act &#40;e.g. an act of neighbourly love&#41;.</>,
            <>
              Emphasize that religious authorities around the world have declared the vaccines and vaccination to be
              morally acceptable and advisable.
            </>,
            <>Consider highlighting the shared values between the vaccine scientists and the religious community.</>,
            <>Emphasize vaccination as a key part to getting back to worshipping in person.</>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      // Moral or Religious Objections

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              The majority of religious leaders and organizations have come out in favour of the COVID-19 vaccines.
              Remind patients that these vaccines can help us return to normal life, including being able to worship
              together in person.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                I&apos;m interested &mdash; can you tell me what your specific &#91;e.g.
                denomination/sect/community&#93; says about the vaccine? Can you tell me what you&apos;ve heard so I can
                better understand that and how it relates to your health?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I think when we have that place where we feel a sense of comfort in our &#91;e.g. faith/community&#93;,
                it can be really difficult when we get advice that doesn&apos;t necessarily align with what we&apos;re
                hearing from public health.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair",
        },
        ask: {
          text: {
            EN: (
              <>
                Would you be willing to let me send you some resources about this topic? Some patient resources that may
                help paint a picture about how these vaccines align with the teachings of your religion.{" "}
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        // Moral or Religious Objections

        evoke: {
          text: {
            EN: (
              <>
                I look at being vaccinated as a service to my patients and to my family and to my community. It&apos;s
                something I can do to keep them safe. So that&apos;s maybe another way to look at it alongside the other
                teachings from your faith.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // Moral or Religious Objections
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;m interested &mdash; can you tell me what your specific &#91;e.g.
                      denomination/&#8203;sect/&#8203;community&#93; says about the vaccine? Can you tell me what
                      you&apos;ve heard so I can better understand that and how it relates to your health?{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Can you share some of the details about why your &#91;e.g.
                      imam/&#8203;minister/&#8203;priest/&#8203;officiant&#93; said the vaccine is a problem? Can we
                      talk about that a little bit more? Are there other viewpoints from the same religion that
                      you&apos;re aware of?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
                    <>
                      Can you tell me more about why you think the vaccine goes against your religion? Can we talk about
                      that a little bit more?{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I am also a &#91;e.g. Muslim/&#8203;Christian/&#8203;Jew/&#8203;Hindu/&#8203;Sikh/&#8203;community
                      member&#93;, and I like to stay informed about the teachings. I haven&apos;t heard or read about
                      any teachings that are against immunization. Can you share a little more about what you&apos;ve
                      heard?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I think when we have that place where we feel a sense of comfort in our &#91;e.g.
                      faith/community&#93;, it can be really difficult when we get advice that doesn&apos;t necessarily
                      align with what we&apos;re hearing from public health.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I know that you&apos;re &#91;e.g. Jewish/&#8203;Christian/&#8203;Muslim/&#8203;etc.&#93;. And
                      having known you for the past few years, I know that you&apos;re following all the teachings. That
                      is important to you and I can completely appreciate that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      So, I appreciate having concerns about how the vaccines were developed, and wondering if those go
                      against your faith.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
                    <>
                      I don&apos;t want you to feel disconnected from your &#91;e.g. faith/community&#93; at all. I also
                      don&apos;t want you to get COVID because I think the reaction that you could have could be pretty
                      significant.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Would you be willing to let me send you some resources about this topic? Some patient resources
                      that may help paint a picture about how these vaccines align with the teachings of your religion.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
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
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
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
                      with some nuances. So maybe I can send that to you and then we can have a follow-up conversation
                      to discuss it in some more detail if you feel the need for that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So I&apos;m &#91;e.g. Christian/Jewish/Muslim/Hindu/Sikh/First Nations&#93; myself, although I
                      must admit I&apos;m maybe not the best example. But I always reflect back to those kind of base
                      teachings: the idea that we do to others as we would have done to ourselves, and to make sure
                      we&apos;re conducting ourselves in a way that serves our communities.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Moral or Religious Objections
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I look at being vaccinated as a service to my patients and to my family and to my community.
                      It&apos;s something I can do to keep them safe. So that&apos;s maybe another way to look at it
                      alongside the other teachings from your faith.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, what if we did have an option that was not at all connected to this important issue for you?
                      What if that was no longer a concern? Would you be interested in getting a vaccine if we had one
                      that would be okay by your &#91;e.g. faith/community&#93;?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
                    <>
                      I guess thinking more broadly, the risk to you and your neighbors, all of your other &#91;e.g.
                      church/community members&#93;, and your friends, and your family from this virus is... It&apos;s
                      quite huge.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      It&apos;s always hard to think about, but for me, if &#91;e.g.
                      God/&#8203;Allah/&#8203;Jaweh/&#8203;etc.&#93; really did feel that we shouldn&apos;t be
                      vaccinating people, I can&apos;t see how we would have managed to get as far as we have with
                      medical science to be able to get to the point where we can protect people. Medical science feels,
                      to me, like an extension of that divine will.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
                    <>
                      If you look around the world to the countries that have managed to get these vaccines into
                      people&apos;s arms: they&apos;re getting back to normal life. They&apos;re able to worship
                      together as you would like to be able to do. I know that not being able to worship with the rest
                      of your community has been really hard on you this last year.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      The path forward is by protecting as many in our population as we can. Someone in a leadership
                      role like yourself or your community leader, can help ensure as many people as possible are
                      protected. You can lead by example and allow us to help those neighbours to get their businesses
                      back up and running.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Well &#91;e.g. God/&#8203;Yahweh/&#8203;Allah/&#8203;the Creator/&#8203;etc&#93; helped those
                      people who made the vaccine, and helped them make it really fast. And you know, it&apos;s like
                      this obviously has a divine hand in it, because look at how effective it is and how fast it&apos;s
                      been developed. For me, &#91;e.g. God/&#8203;Yahweh/&#8203;Allah/&#8203;etc&#93; works through
                      scientists and doctors.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Moral or Religious Objections
              {
                text: {
                  EN: (
                    <>
                      &#91;Regarding the use of fetal stem cells in vaccine development&#93; We&apos;ve heard about how
                      some of the metals used in cell phones come from war-torn areas and there are children who are
                      being enslaved and all these terrible things. Does that mean that we should just all throw away
                      our cell phones? I mean it&apos;s a good question. We should think about this stuff. But
                      there&apos;s also a lot of good that has come of having this technology. We just need to think
                      about maybe reforming the way that they&apos;re made, and that&apos;s a long process and a
                      different process. But right now, the emergency is telling us that the most important thing is to
                      protect each other and get back to normal. The vaccines will help us do that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      If there are others in your community that want to chat through this with me, I totally understand
                      if they&apos;re getting information from other sources. But I&apos;m here for you, I&apos;m here
                      for the community. And like I said, I spent a lot of time trying to make sense of this
                      information, because I understand how confusing it can be.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (Religious)
    resources: [
      {
        title: {
          EN: (
            <>
              Canadian Conference of Catholic Bishops - Note on Ethical Concerns Related to Currently Approved COVID-19
              Vaccines
            </>
          ),
          FR: <></>,
        },
        linkText: { EN: <>CCCB Statement on COVID vaccines</>, FR: <></> },
        link: "https://www.cccb.ca/wp-content/uploads/2021/03/CLARIFICATION-CCCB-Statement-on-COVID-19-Vaccine-Choice-9-March-2021-EN.pdf",
        description: {
          EN: (
            <>
              CCCB issued a statement in support of vaccination and the ethical dimensions of the COVID vaccines, in
              alignment with the Vatican and the Holy See, in March 2021. This is their statement. (March 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: (
            <>
              Congregation For the Doctrine of the Faith - Vatican: Note on the morality of using some anti-Covid-19
              vaccines
            </>
          ),

          FR: <></>,
        },
        linkText: { EN: <>Vatican Statement Supporting COVID-19 Vaccination</>, FR: <></> },
        link: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20201221_nota-vaccini-anticovid_en.html",
        description: {
          EN: (
            <>
              The Vatican issued a statement in support of COVID vaccines, examining the ethical considerations of their
              development and the choice to vaccinate. (December 2020)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Berkley Forum: Religion, Bioethics, and COVID-19 Vaccination</>,

          FR: <></>,
        },
        linkText: { EN: <>Editorial Forum with multiple perspectives</>, FR: <></> },
        link: "https://berkleycenter.georgetown.edu/posts/religion-bioethics-and-covid-19-vaccination",
        description: {
          EN: (
            <>
              Editorial forum and report addressing faithful engagement with COVID vaccination, and multiple
              perspectives from multiple faith and health leaders. (February 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Imam&apos;s Roundtable: COVID-19 Vaccines in the Muslim Community</>,

          FR: <></>,
        },
        linkText: { EN: <>YouTube video - virtual discussion</>, FR: <></> },
        link: "https://youtu.be/wP-7tvq8P18",
        description: {
          EN: (
            <>
              Virtual roundtable/webinar to address Muslim community&apos;s questions about the COVID-19 vaccine, per
              Cleveland Clinic in the US. (March 2021)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  PersonalTrauma: {
    // Personal Trauma

    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
            <>&ldquo;Last time I went to &#91;e.g. a clinic, hospital&#93; it didn&apos;t go well.&rdquo;</>,
            <>&ldquo;Doctors and nurses haven&apos;t treated me well when I&apos;ve needed their help.&rdquo;</>,
            <>&ldquo;I get really anxious in hospitals or clinics. I don&apos;t know if I can get vaccinated.&rdquo;</>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorWhiteManYoung.svg",
        content: {
          EN: [
            <>Ask the patient what they would need to feel safe to get the vaccine.</>,
            <>Differentiate your role as a vaccine advocate from larger healthcare/governmental systems.</>,
            <>
              Acknowledge and affirm the validity of personal past traumas/social anxiety that may affect willingness to
              get vaccinated.
            </>,
            <>Offer to help arrange alternative locations for receiving a vaccine.</>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Remember that despite previous negative experiences with bigger healthcare systems, this patient chooses
              to seek your health advice. Work with your patient as a team member to find ways to promote feelings of
              safety around getting the vaccine.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // Personal Trauma

    advice: {
      eaase: {
        engage: {
          text: {
            EN: <>What do you need to feel safe about getting vaccinated?</>,
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I know hospitals/clinics can be scary places and waiting can be frustrating. Going through the steps to
                actually get a vaccine can be challenging for so many reasons. I want to reassure you that we can work
                together to make this as easy a process as possible.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                I&apos;d like to try and see whether we can move past how things have gone, and focus on protecting you.
                Let&apos;s just forget the system. They can do what they want to do, but we want to make sure that we
                protect you because I really would worry that if you caught COVID, you would do quite badly.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                Can we arrange to have you get this somewhere else? More and more places have the vaccines available
                every day. Maybe we can find one that makes you feel more comfortable and safe.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // Personal Trauma

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: { EN: <>What do you need to feel safe about getting vaccinated?</>, FR: <></> },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      So, you&apos;re talking about a bad experience with the vaccine? In the past, did you have a bad
                      reaction or a bad experience getting the vaccine?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              {
                text: { EN: <>What part about getting the vaccine worries you the most?</>, FR: <></> },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I know things have gone wrong in &#91;other healthcare settings&#93;. And it&apos;s been tough.
                      I&apos;m sorry about that. But I&apos;d like to think I have your back on this. You&apos;ve known
                      me for a long time, and I think we&apos;ve done a pretty decent job of keeping you healthy, and I
                      wouldn&apos;t lie to you. Hopefully, you feel that way, that I&apos;m pretty honest. I just really
                      want to get you protected.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I know hospitals/clinics can be scary places and waiting can be frustrating. Going through the
                      steps to actually get a vaccine can be challenging for so many reasons. I want to reassure you
                      that we can work together to make this as easy a process as possible.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I hear you, that you don&apos;t trust the &#91;other healthcare settings&#93; to have your back on
                      this. They haven&apos;t earned your trust, right? And it&apos;s because they haven&apos;t earned
                      your trust that I&apos;ve been doing my reading. I&apos;ve been making sure that I&apos;m fully up
                      to date, so I can provide trustworthy advice to the people I really care for. I&apos;ve got your
                      back.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                      different options that might be available to you. Do you think it might be okay if I tell you a
                      little bit about what I know, as opposed to maybe what you&apos;re hearing about from other
                      sources?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;d like to try and see whether we can move past how things have gone, and focus on
                      protecting you. Let&apos;s just forget the system. They can do what they want to do, but we want
                      to make sure that we protect you because I really would worry that if you caught COVID, you would
                      do quite badly. I&apos;d be quite worried about you, phoning you every day at the very least to
                      check in on you, and just worry that you&apos;d end up in hospital or worse.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Personal Trauma

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Can we arrange to have you get this somewhere else? More and more places have the vaccines
                      available every day. Maybe we can find one that makes you feel more comfortable and safe.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I hear you: your past experiences have seen you lose so much. Your home, your culture. And
                      governments have been the problem. You have every reason to mistrust what the government is saying
                      with the vaccine. But I&apos;m hoping that you don&apos;t see me as part of the government because
                      I&apos;m not. This is about you and me finding the best things for your health, and the health of
                      your family. I&apos;ve been doing research &mdash; for everyone like you in my practice &mdash;
                      and that research is telling me that these vaccines aren&apos;t just safe, they are so much safer
                      than running the risk of not taking them. Choosing to vaccinate gives you power over the system.
                      It lets you take your freedom back into your own hands, and I think, from how we know one another,
                      having the power to decide what happens to you and your family is important to you.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // Personal Trauma

    resources: [
      {
        title: {
          EN: <>International Society for Traumatic Stress Studies: What is medical trauma?</>,

          FR: <></>,
        },
        linkText: { EN: <>Fact sheet (patient-facing language)</>, FR: <></> },
        link: "https://istss.org/ISTSS_Main/media/Documents/Public-Facing-Fact-Sheet-2.pdf",
        description: {
          EN: <>A public fact sheet examining medical trauma and coping advice for patients. (2020)</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Top tips to deal with challenging situations: doctor–patient interactions</>,

          FR: <></>,
        },
        linkText: { EN: <>Breathe (Medical Journal): 2017 article</>, FR: <></> },
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5467659/",
        description: {
          EN: (
            <>
              An article examining challenging situations in doctor–patient interactions, how they might be better
              managed. (June 2017)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>To Overcome Vaccine Hesitancy, We Need a Better Patient Experience</>,

          FR: <></>,
        },
        linkText: { EN: <>Harvard Business Review Editorial</>, FR: <></> },
        link: "https://hbr.org/2021/01/to-overcome-vaccine-hesitancy-we-need-a-better-patient-experience",
        description: {
          EN: (
            <>
              Editorial article looking at considerations surrounding the vaccination experience, both before, during,
              and after. (January 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Anxiety Canada: A Tool for Dealing with Anxiety Around Vaccination</>,

          FR: <></>,
        },
        linkText: { EN: <>The CARD Tool for Patients</>, FR: <></> },
        link: "https://www.anxietycanada.com/wp-content/uploads/2020/04/CARD-for-Individuals.pdf",
        description: {
          EN: (
            <>
              An easy-to-use tool for patients with generalized anxiety – fears of fainting or appearing in public –
              around the vaccination process that helps them develop specific strategies in four domains. (April 2020)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  GroupTrauma: {
    // Group Trauma

    related: [""],
    overview: {
      theySay: {
        image: "Hesitancy Group 2.svg",
        content: {
          EN: [
            <>
              &ldquo;I can&apos;t see how we as &#91;minorities/First Nations&#93; can rush into taking anything that
              was developed so quickly. I can&apos;t go on the fact that the government is saying it&apos;s safe.&rdquo;
            </>,
            <>&ldquo;I won&apos;t be used as a guinea pig for white people.&rdquo;</>,
            <>
              &ldquo;How do you know that white folks won&apos;t get one vaccine and &#91;my minority group&#93; will
              get a different one?&rdquo;
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorWhiteWomanBrownHairGlasses.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },
      // Group Trauma

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Community, group, and historical traumas are complex matters to tease apart and address. As a trusted
              health counsellor, you can be a figure within the healthcare system who can acknowledge these traumas and
              create more positive experiences for this patient moving forward. Work with your patient to find ways that
              promote feelings of safety towards getting a vaccine.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    advice: {
      eaase: {
        engage: {
          text: {
            EN: <>What would you need in order to feel safe about getting vaccinated?</>,
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I hear what you&apos;re saying. It does seem kind of funny that suddenly they &#91;i.e. the
                government/public health&#93; are interested in protecting you and your people, whereas where have they
                been all these years? Am I understanding that right?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanBrownHairGlasses.svg",
        },
        ask: {
          text: {
            EN: (
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
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                ...You have every reason to mistrust what the government is saying with the vaccine. But I&apos;m hoping
                that you don&apos;t see me as part of the government, because I&apos;m not. This is about you and me
                finding the best things for your health, and the health of your family...
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
      },
      // Group Trauma

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: <>What would you need in order to feel safe about getting vaccinated?</>,
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I&apos;m not trying to strong-arm you into anything here. Tell me where your lingering concerns
                      are and I just want to hear from you for a moment.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      I&apos;m curious – in your community, have you seen many examples of people who have been
                      vaccinated? How do you feel about their choice to do so?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I hear what you&apos;re saying. It does seem kind of funny that suddenly they &#91;i.e. the
                      government/public health&#93; are interested in protecting you and your people, whereas where have
                      they been all these years? Am I understanding that right?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, I understand that your community has been treated very poorly by the system. Experiments and
                      outright abuse. That&apos;s all very real for you and it affected everyone in your community.
                      I&apos;m hoping we can have a conversation about vaccines while also acknowledging that past. This
                      conversation is between you and me, not the bigger system. This is you and me having a
                      conversation.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      This pandemic has unearthed some of the bigger issues you&apos;re bringing up for a lot of people.
                      It&apos;s opened people&apos;s eyes, I think. You&apos;re not alone in mistrusting motives here,
                      that&apos;s for sure. I guess one of the reasons I raised the idea of the vaccine for you, is that
                      one of the ways that&apos;s opened people&apos;s eyes, is that we&apos;ve seen different
                      communities be disproportionately affected by the virus.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I hear you, that you don&apos;t trust the government on this, but I guess what I&apos;m suggesting
                      is that, I&apos;ve been doing my own research because I&apos;m with you. I don&apos;t think the
                      government has earned any of our trust, right? So that&apos;s why I&apos;ve been doing my reading.
                      I&apos;ve been making sure that I&apos;m up to date, so I can provide the best advice to the
                      people I really care for.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I guess you can say I&apos;m part of the system, but I think you&apos;ve learned that I&apos;m
                      here for you, that I&apos;m looking out for you.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Would you mind if I share my thoughts on why the vaccines might be particularly good and important
                      for you and your community?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                      different options that might be available to you. Do you think it might be okay if I tell you a
                      little bit about what I know, as opposed to maybe what you&apos;re hearing about from other
                      sources?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      For me, getting the vaccine wasn&apos;t so much about me, as it was about you. I got vaccinated so
                      I could be here for you. I took it so I can be safe when I&apos;m around you. And I think maybe
                      it&apos;s a bit like that in your community too. You might be a bit on the &apos;maybe&apos; side,
                      but when it is about protecting the community &mdash; protecting the Elders and their knowledge.
                      When it comes to that, you&apos;re really taking it for them. So you can be there for them.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      From my point of view, I totally understand there is a mistrust with the system. The health system
                      hasn&apos;t exactly been known to put the health and interests of Indigenous people first over the
                      last couple centuries. But I know that not only do the vaccines keep me safe, they also keep my
                      community and my Elders safe. I have a Cree Elder who I know well and she has been vaccinated. I
                      struggled with my own questions about the vaccine but have chosen to do it, and my M&eacute;tis
                      Grandmother in Manitoba got hers 3 weeks ago. I feel that colonization has taken enough away from
                      us, that I can&apos;t risk not doing my part to preserve the culture and knowledge we have left
                      with our Elders especially.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      With the vaccine rollout, part of it is trying to acknowledge those historical injustices and to
                      provide something that&apos;s more equitable. So, one of the reasons Indigenous communities are
                      being prioritized for the vaccine is to move us towards that more just place. You could see it as
                      being at the front of a weird line, I guess, but I can tell you that I&apos;ve got non-Indigenous
                      patients desperate to get their shots, and so it&apos;s a line that lots of people want to be at
                      the front of. For me, the way things are rolling out is a real, good faith effort to improve
                      equity and right some of those historical wrongs.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // Group Trauma
              {
                text: {
                  EN: (
                    <>
                      So, the vaccine priority list isn&apos;t just about who&apos;s most at risk – which people in your
                      community are. It&apos;s also about making decisions that help address historical damage and
                      address inequalities. Public health people are thinking about those factors too when they make up
                      the priority lists.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      And I guess from my perspective, I want to do everything I can to protect your community. Now,
                      clearly, it&apos;s not in my power to fix everything, although I would like to. There are some
                      things that are in my power and I want to do that to protect my patients and the communities that
                      I care for. For me, when I see under-served communities, under-resourced communities, take the
                      brunt of this pandemic, I want to move heaven and earth to get them vaccinated first.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // Group Trauma
              {
                text: {
                  EN: (
                    <>
                      It makes me angry knowing they can do such rapid vaccine development now - why don&apos;t they do
                      this for TB? Why don&apos;t they do this for malaria? Now, that we know this is possible, I want
                      to see them do it for all sorts of conditions that are killing people in marginal communities. But
                      as far as these &#91;COVID&#93; vaccines go, I don&apos;t necessarily need you to trust them, but
                      I do think you should trust me. These are good vaccines. They stop people from dying from the
                      virus.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I think you and your community should be relatively front of the line in Canada, but already in
                      Canada, millions of people are vaccinated. And hundreds of millions of people around the world are
                      vaccinated. We know these vaccines are good, we know that they work, we know that they&apos;re
                      safe. And now I want to take that knowledge and make sure it benefits the people that I care so
                      much for.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // Group Trauma

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I hear you. Your past experiences have seen you lose so much: Your home, your culture. And
                      governments have been the problem. You have every reason to mistrust what the government is saying
                      with the vaccine. But I&apos;m hoping that you don&apos;t see me as part of the government,
                      because I&apos;m not. This is about you and me finding the best things for your health, and the
                      health of your family. I&apos;ve been doing research &mdash; for everyone like you in my practice
                      &mdash; and that research is telling me that these vaccines aren&apos;t just safe, they are so
                      much safer than running the risk of not taking them. Choosing to vaccinate gives you power over
                      the system. It lets you take your freedom back into your own hands, and I think, from how we know
                      one another, having the power to decide what happens to you and your family is important to you.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
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
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      As members of minority groups, we always seem to get less out of things that go on. I want us at
                      the forefront of this. I want to make sure that &#91;our community&#93; is represented. I&apos;m
                      going by faith that these people won&apos;t do us wrong. I&apos;m holding them accountable.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // Group Trauma

    resources: [
      {
        title: {
          EN: <>BC Centres for Disease Control: Indigenous Community Resources</>,

          FR: <></>,
        },
        linkText: { EN: <>BC CDC Resources Page</>, FR: <></> },
        link: "http://www.bccdc.ca/health-info/diseases-conditions/covid-19/indigenous-community-resources",
        description: {
          EN: (
            <>
              BC Centres for Disease Control Indigenous Community Resources offers a wide array of resource materials
              for providers working with Indigenous communities regarding vaccination.
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Morning Star Lodge: Protecting Our Home Fires COVID-19 Resources</>,

          FR: <></>,
        },
        linkText: { EN: <>Morning Star Lodge COVID-19 Pandemic Resources for Indigenous Communities</>, FR: <></> },
        link: "https://www.indigenoushealthlab.com/protecting-our-home-fires",
        description: {
          EN: (
            <>
              Morning Star Lodge, an Indigenous community-based health research organization, has a wealth of resources
              available for building vaccine confidence in Indigenous communities. This includes YouTube videos, fact
              sheets, and more.
            </>
          ),
          FR: <></>,
        },
      },
      // Group Trauma
      {
        title: {
          EN: <>Women&apos;s College Hospital - Maad&apos;ookiing Mshkiki: Sharing Medicine</>,

          FR: <></>,
        },
        linkText: { EN: <>Resources for Indigenous, Métis, and Inuit Communities Page</>, FR: <></> },
        link: "https://www.womenscollegehospital.ca/research,-education-and-innovation/maadookiing-mshkiki%E2%80%94sharing-medicine",
        description: {
          EN: (
            <>
              Consolidated resources co-developed by First Nations, Inuit and Métis Healthcare Professionals,
              Traditional Practitioners and Trusted Community Members (2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: (
            <>
              NBCNews Editorial: I&apos;m a Black doctor who didn&apos;t trust the Covid vaccine. Here&apos;s what
              changed my mind.
            </>
          ),

          FR: <></>,
        },
        linkText: { EN: <>NBCNews Article</>, FR: <></> },
        link: "https://www.nbcnews.com/think/opinion/i-m-black-doctor-who-didn-t-trust-covid-vaccine-ncna1255085",
        description: {
          EN: (
            <>
              An editorial looking at a doctor&apos;s personal experience changing her perspective and choice to get
              vaccinated. Considerations for the conversations and how to approach doubt and uncertainty. (January 2021)
            </>
          ),
          FR: <></>,
        },
      },
      // Group Trauma
      {
        title: {
          EN: <>AMA: Impact of COVID-19 on minoritized and marginalized communities</>,

          FR: <></>,
        },
        linkText: { EN: <>Resource list from the AMA</>, FR: <></> },
        link: "https://www.ama-assn.org/delivering-care/health-equity/impact-covid-19-minoritized-and-marginalized-communities",
        description: {
          EN: (
            <>
              Collected resource list from the American Medical Association looking at the disproprotionate impacts of
              COVID-19 on marginalized communities. (Updated, October 2020)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>World Economic Forum: How a history of medical racism may fuel mistrust in COVID-19 vaccines</>,

          FR: <></>,
        },
        linkText: { EN: <>WEF Article</>, FR: <></> },
        link: "https://www.weforum.org/agenda/2020/12/how-a-history-of-medical-racism-may-fuel-mistrust-in-covid-19-vaccines/",
        description: {
          EN: (
            <>
              An article looking at a history of medical racism and how it may impact vaccine confidence, from the World
              Economic Forum. (December 2020)
            </>
          ),
          FR: <></>,
        },
      },
      // Group Trauma
      {
        title: {
          EN: (
            <>
              Indigenous Primary Health Care Council: COVID-19 Resources for First Nations, Inuit, and Métis communities
            </>
          ),

          FR: <></>,
        },
        linkText: { EN: <>Resources Page</>, FR: <></> },
        link: "https://www.iphcc.ca/covid-19/",
        description: {
          EN: (
            <>
              Patient-facing FAQ and concerns list about COVID-19 vaccines, tailored to common Indigenous patient
              concerns. From IPHCC. (February 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: (
            <>
              Indigenous Primary Health Care Council: Engaging Indigenous Communities With COVID-19 Vaccine
              Implementation (Report)
            </>
          ),

          FR: <></>,
        },
        linkText: { EN: <>Online report here</>, FR: <></> },
        link: "https://www.iphcc.ca/publications/resources/COVID19/Engaging-Indigenous-Communities-with-COVID-19/",
        description: {
          EN: (
            <>
              A report looking at providing guidance on communication/engagement strategies and culturally safe
              practices/policies for vaccine implementation for Indigenous people in Ontario. (2021)
            </>
          ),
          FR: <></>,
        },
      },
    ],

    // resources: [

    //   {
    //     title: { EN: <>BC Centres for Disease Control: Indigenous Community Resources</>,
    //     image: "",
    //     linkText: { EN:<>BC CDC Resources Page</>,
    //     link: "https://www.bccdc.ca/health-info/diseases-conditions/covid-19/indigenous-community-resources",
    //     description: {EN: (
    //       <>
    //         BC Centres for Disease Control Indigenous Community Resources offers a wide array of resource materials for providers working with Indigenous communities regarding vaccination.
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: <>Morning Star Lodge: Protecting Our Home Fires COVID-19 Resources</>,
    //     image: "",
    //     linkText: { EN:<>Morning Star Lodge COVID-19 Pandemic Resources for Indigenous Communities</>,
    //     link: "https://www.indigenoushealthlab.com/protecting-our-home-fires",
    //     description: {EN: (
    //       <>
    //         Morning Star Lodge, an Indigenous community-based health research organization, has a wealth of resources available for building vaccine confidence in Indigenous communities. This includes YouTube videos, fact sheets, and more.
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: (
    //       <>
    //         NBCNews Editorial: I&apos;m a Black doctor who didn&apos;t trust the Covid vaccine. Here&apos;s what
    //         changed my mind.
    //       </>
    //     ),
    //     image: "",
    //     linkText: { EN:<>NBCNews Article</>,
    //     link: "https://www.nbcnews.com/think/opinion/i-m-black-doctor-who-didn-t-trust-covid-vaccine-ncna1255085",
    //     description: {EN: (
    //       <>
    //         An editorial looking at a doctor&apos;s personal experience changing her perspective and choice to get
    //         vaccinated. Considerations for the conversations and how to approach doubt and uncertainty. (January 2021)
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: <>AMA: Impact of COVID-19 on minoritized and marginalized communities</>,
    //     image: "",
    //     linkText: { EN:<>Resource list from the AMA</>,
    //     link: "https://www.ama-assn.org/delivering-care/health-equity/impact-covid-19-minoritized-and-marginalized-communities",
    //     description: {EN: (
    //       <>
    //         Collected resource list from the American Medical Association looking at the disproprotionate impacts of
    //         COVID-19 on marginalized communities. (Updated, October 2020)
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: <>World Economic Forum: How a history of medical racism may fuel mistrust in COVID-19 vaccines</>,
    //     image: "",
    //     linkText: { EN:<>WEF Article</>,
    //     link: "https://www.weforum.org/agenda/2020/12/how-a-history-of-medical-racism-may-fuel-mistrust-in-covid-19-vaccines/",
    //     description: {EN: (
    //       <>
    //         An article looking at a history of medical racism and how it may impact vaccine confidence, from the World
    //         Economic Forum. (December 2020)
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: <>Indigenous Primary Health Care Council: COVID-19 Vaccine – Common Beliefs Explored</>,
    //     image: "",
    //     linkText: { EN:<>Appendix (PDF) here</>,
    //     link: "https://",
    //     description: {EN: (
    //       <>
    //         Patient-facing FAQ and concerns list about COVID-19 vaccines, tailored to common Indigenous patient
    //         concerns. From IPHCC. (February 2021)
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },

    //   {
    //     title: { EN: (
    //       <>
    //         Indigenous Primary Health Care Council: Engaging Indigenous Communities With COVID-19 Vaccine
    //         Implementation (Report)
    //       </>
    //     ),
    //     image: "",
    //     linkText: { EN: <>Online report here</>,
    //     link: "https://www.iphcc.ca/publications/resources/COVID19/Engaging-Indigenous-Communities-with-COVID-19/",
    //     description: {EN: (
    //       <>
    //         A report looking at providing guidance on communication/engagement strategies and culturally safe
    //         practices/policies for vaccine implementation for Indigenous people in Ontario. (2021)
    //       </>
    //     ),
    //   FR: <></>,
    // },
    //   },
    // ],
  },

  NeedlePhobia: {
    tags: ["needle", "injection", "shots", "pain", "fear", "faint"],
    related: [""],
    overview: {
      tags: ["overview", "needle", "injection", "shots", "pain", "fear", "faint"],
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
            <>&ldquo;I really hate needles.&rdquo;</>,
            <>
              &ldquo;I&apos;m worried about getting the shot because I get really nervous when I see a needle.&rdquo;
            </>,
            <>&ldquo;I once fainted after I got a vaccine&rdquo;</>,
            <>
              &ldquo;Even if you just say words like &apos;injection&apos; or &apos;blood work&apos;, my stomach turns
              to ice.&rdquo;
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorWhiteWomanDarkBrownHair.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Fears around needles can be challenging for patients in all aspects of healthcare, including with
              bloodwork and other routine vaccinations. Helping your patient address the source of their anxieties
              around needles &#40;e.g. pain, fainting, etc.&#41; &mdash; and exploring various options for the setting
              and context of vaccination &mdash; can make the vaccines seem more approachable and acceptable.
            </>,
            <>
              It is important to consider multiple ways in which people with a fear of needles might have more positive
              experiences when getting the vaccine, such as: not rushing them through the appointment, making your
              immunization room as comfortable and supportive as possible. Spending even an extra 10 minutes with
              someone can be worth it in the long run.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // (NeedlePhobia)

    advice: {
      tags: ["overview", "needle", "injection", "shots", "pain", "fear", "faint"],

      eaase: {
        engage: {
          text: {
            EN: (
              <>
                So, what I&apos;m hearing is if, for example, this fear that we&apos;re talking is not there, you would
                get COVID vaccine? Do you have any other concerns or questions about the vaccine before we address your
                fear of needles?
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I feel for you because to tell the truth, I have a little bit of fear of needles as well and I&apos;m a
                doctor! But we can address this.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                Would you be open to hearing about some solutions we could use to make you feel more comfortable about
                getting a vaccine?
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                What if &#91;the needle&#93; part wasn&apos;t there anymore? Not to say that we can get there, but what
                if we could change the environment and the way the vaccine is delivered?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
      },
      // (NeedlePhobia)

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      So, what I&apos;m hearing is if, for example, this fear that we&apos;re talking is not there, you
                      would get COVID vaccine? Do you have any other concerns or questions about the vaccine before we
                      address your fear of needles?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, it sounds that you&apos;re not against the vaccine, but it&apos;s just that like it&apos;s the
                      fear of getting the needle was bothering you. Can you tell me more about this fear?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Oh, I&apos;m sorry to hear that. Was there a time when this might have really upset you maybe when
                      you were a child or is it something that has kind of got worse over time?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I feel for you because to tell the truth, I have a little bit of fear of needles as well and
                      I&apos;m a doctor! But we can address this.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "", // Add image path
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I understand your fear of needles, and I do remember it&apos;s always hard for us to get bloodwork
                      done for that reason.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      You&apos;re actually speaking to someone who had the same problem themselves, believe it or not,
                      which is a terrible quality to have in a doctor. I remember myself when I was younger I actually
                      fainted after a vaccine. So I guess maybe I can give you some strategies that I&apos;ve tried to
                      help me get over this. It might be something to think about.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Would you be open to hearing about some solutions we could use to make you feel more comfortable
                      about getting a vaccine?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              }, // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
              // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.

              {
                text: {
                  EN: (
                    <>
                      There are a lot of different options for people with needle sensitivity. Would you like to explore
                      these together?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              }, // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
              // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.
            ],
          },
        ],
      },
      // (NeedlePhobia)

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Because there are a lot of other people like yourself, many places have set up what they call
                      &lsquo;low-stimulus&rsquo; or &lsquo;sensory-friendly&rsquo; clinics where they take special
                      measures to help reduce any potential pain or distress associated with vaccination. I think we
                      should set up an appointment for you at one of these locations.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You should know that, for the vaccine, the needle is much smaller than the needles for bloodwork.
                      And you can look away when they give you the injection and you probably won&apos;t even feel it.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg", // Add image path
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>It&apos;s a super tiny needle. I didn&apos;t even notice it when I went in and got my vaccine.</>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, there are some people that do have what we call &lsquo;syncope&rsquo; in relation to a needle.
                      And that&apos;s a condition where your blood pressure drops. And sometimes if that happens most
                      times for you, there are little tips and tricks that I learned along the way that I could share.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (NeedlePhobia)

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      What if &#91;the needle&#93; part wasn&apos;t there anymore? Not to say that we can get there, but
                      what if we could change the environment and the way the vaccine is delivered?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      If you wanted can certainly find a picture of the needle they use to show you. It&apos;s really
                      quite tiny. The other thing to think about is all the needles that you might have to have if you
                      ever caught COVID. I wouldn&apos;t want you to have to go through all that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I know you&apos;re scared of the needles, but some of that other &#91;COVID symptoms&#93; can be
                      pretty significant, too, even if you just have a mild case.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What if we got &#91;a trusted clinician at the clinic/office&#93; to do it with us? All right? And
                      we did it here in the office? If I could get the vaccine here, would you consider getting it done
                      here?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What we&apos;ll do is we&apos;ll have you come into the office. I&apos;m going to give you
                      something for the anxiety. We&apos;re going to let that kick in, and then &#91;a trusted clinician
                      at the clinic/office&#93; is going to sit with you. We&apos;re going to do all the things to make
                      this a forgettable experience.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, I think we could talk to some behavioral consultants in our clinic. Maybe we could put you in
                      contact with them to talk about some of the strategies for how to overcome this fear. Do you think
                      you&apos;re interested in that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
              },
              // To add more quotes to this section, copy one of the quote blocks above, paste it here, and change the content.
              // Be sure to copy everything from curly brace { to curly brace }, and to separate the quote blocks with a comma.
            ],
          },
        ],
      },
    },
    // (NeedlePhobia)

    resources: [
      {
        title: {
          EN: <>How patients can overcome needle phobia and get the COVID vaccine</>,
          FR: <></>,
        },
        image: "",
        // image: "/assets/screenshots/How patients can overcome needle phobia and get the COVID vaccine.png",
        linkText: { EN: <>Article from Open Access Government</>, FR: <></> },
        link: "https://www.openaccessgovernment.org/patients-covid-19-vaccination-needle-phobia/103163/",
        // Be sure that URLs do NOT include the https://
        description: {
          EN: (
            <>
              A physician explores what can be done to help patients who refuse the COVID-19 vaccination due to needle
              phobia. (April 2021)
            </>
          ),
          FR: <></>,
        },
        // Open question: Should we add tags to resources, so individual resources are findable in a search?
        // Or close enough to get them to the resources page?
      },
      {
        title: {
          EN: <>NHS: Overcoming your needle phobia (fear of needles)</>,
          FR: <></>,
        },
        image: "", // path for screenshot image
        // image: "/assets/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
        linkText: { EN: <>Article from Guy&apos;s and St Thomas&apos; NHS Foundation Trust</>, FR: <></> },
        link: "https://www.guysandstthomas.nhs.uk/resources/patient-information/all-patients/overcoming-your-fear-of-needles.pdf",
        description: {
          EN: (
            <>
              A leaflet from the NHS explaining needle phobia and providing practical advice on how to overcome it.
              Patient-facing. (2017)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Alberta Health Services: Commitment to Comfort - For Providers</>,
          FR: <></>,
        },
        image: "", // path for screenshot image
        // image: "/assets/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
        linkText: { EN: <>PDF Handout for Providers</>, FR: <></> },
        link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-commitment-comfort-vaccine-orientation.pdf",
        description: {
          EN: (
            <>
              A PDF summary document for providers on easing pain and distress before, during and after immunization
              (March 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Alberta Health Services: Commitment to Comfort - For Patients</>,
          FR: <></>,
        },
        image: "", // path for screenshot image
        // image: "/assets/screenshots/Overcoming your needle phobia (fear of needles) (PDF).png", // path for screenshot image
        linkText: { EN: <>PDF Handout for Patients</>, FR: <></> },
        link: "https://www.albertahealthservices.ca/assets/info/ppih/if-ppih-covid-19-commitment-comfort-vaccine-client-summary.pdf",
        description: {
          EN: <>A PDF summary document for patients on how to improve comfort during immunizations (March 2021)</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>ImmunizeBC: Managing Needle Fears</>,

          FR: <></>,
        },
        linkText: { EN: <>Advice page from ImmunizeBC on needle fears</>, FR: <></> },
        link: "https://immunizebc.ca/adults-managing-needle-fears",
        description: {
          EN: (
            <>
              Short advice page from ImmunizeBC on needle phobia and how to manage it for COVID-19 vaccination. (May
              2021)
            </>
          ),
          FR: <></>,
        },
      },

      // To add more resource linsk to this section, copy one of the resource link blocks above, paste it here, and change the content.
      // Be sure to copy everything from curly brace { to curly brace }, and to separate the resource link blocks with a comma.
    ],
  },

  Unconcerned: {
    related: ["Conspiracies", "mRNAConcerns", "Naturalist"], // put contentIDs of related topic here
    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },

      thingsToConsider: {
        image: "doctorMuslimWomanYellowHeadCover.svg",
        content: {
          EN: [
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
          FR: [<></>, <></>, <></>],
        },
      },

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              For patients who have not had COVID affect them or their social groups, it can be difficult to understand
              the severity of the disease and the toll it has taken. Taking the time to explain your perspective as a
              healthcare professional can help shed light on what might be the &lsquo;hidden effects&rsquo; of the
              pandemic on the patient&apos;s community.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // (Unconcerned)
    advice: {
      eaase: {
        engage: {
          text: {
            EN: <>Could you tell me a little bit more about your understanding of COVID and its severity?</>,

            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I understand that you might not see the effects of COVID in everyday life. Maybe if you&apos;re looking
                around, you&apos;re not seeing anyone who gets really sick. That would make it more difficult to see the
                impact that COVID is having out there in the community. But, certainly, in town here, there&apos;s lots
                of people who have been really sick with it.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },
        ask: {
          text: {
            EN: (
              <>
                Having seen a lot of patients in the community, I have a different perspective of the pandemic, which
                may not necessarily align with your views of COVID. Could I share my experience&#40;s&#41; with you?
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackManBeard.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                What does concern me is that, you could be the link in a chain for somebody else ending up in the ICU.
                Whether that&apos;s your mom, or someone in your family who is not quite as fit as you. Do you
                absolutely need this vaccine? Maybe not, maybe you&apos;d be fine. But do we, the people in your
                community, need this vaccine? I think we do.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
      },
      // (Unconcerned)
      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: <>Could you tell me a little bit more about your understanding of COVID and its severity?</>,
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
              {
                text: { EN: <>Can we talk through your information? Can you show me your sources?</>, FR: <></> },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I understand that you might not see the effects of COVID in everyday life. Maybe if you&apos;re
                      looking around, you&apos;re not seeing anyone who gets really sick. That would make it more
                      difficult to see the impact that COVID is having out there in the community. But, certainly, in
                      town here, there&apos;s lots of people who have been really sick with it.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I can see that someone as healthy as you may not be concerned about COVID. Sometimes it&apos;s
                      hard to make sense of the numbers and impacts without seeing the individual cases and people who
                      had the disease.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Here&apos;s the thing, I think that we have all gotten so used to keeping ourselves safe, that
                      we&apos;ve forgotten that our aim really needs to be not having to mask forever, not having to
                      homeschool our kids forever, not having to designate one person to go to the grocery store.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, I think I&apos;m hearing that you don&apos;t feel there&apos;s any benefit for you in the
                      getting the vaccine. You&apos;re already giving up so much, and you&apos;re asking &lsquo;
                      <i>why do I have to do one more thing for the world?</i>&rsquo; Especially when it doesn&apos;t
                      even feel like it&apos;s even going to help you?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Having seen a lot of patients in the community, I have a different perspective of the pandemic,
                      which may not necessarily align with your views of COVID. Could I share my experience&#40;s&#41;
                      with you?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackManBeard.svg",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      There are a lot of reasons why natural or herd immunity aren&apos;t the best approaches to getting
                      out of this pandemic. Would you like to hear what some of those reasons are?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      So there are people like you and me that were in the ICU, and it is totally preventable by getting
                      a vaccine that&apos;s like a flu shot. Part of our trouble now is trying to convince the public
                      that COVID is in fact, different, and it is very different than other diseases like the flu. This
                      is something that is way more transmittable. It has a higher severity rate, and it really
                      overwhelmed health systems around the world. And look at us, we were in lockdowns because of this
                      darn thing. So the way out of this is to get people, like you and me, vaccinated. But unless
                      enough of us do it, we&apos;re going to go back to &#91;lockdowns, restrictions, etc.&#93;.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (Unconcerned)
              {
                text: {
                  EN: (
                    <>
                      I&apos;ll be honest with you, the people who are unhealthy and are at higher risk of bad outcomes
                      from COVID infection, there&apos;s no question that COVID is more of a concern there. But we
                      definitely are seeing younger and completely healthy people end up in the intensive care unit, and
                      it&apos;s just a total disaster. It&apos;s so avoidable, that&apos;s the crazy part. It just
                      doesn&apos;t need to happen.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
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
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // (Unconcerned)
              {
                text: {
                  EN: (
                    <>
                      The bottom line is that I know there&apos;s lots of confusion, there&apos;s lots of different
                      messaging, and there are people out there that are saying completely opposite things from me, and
                      they&apos;re saying that this is a natural thing that should be allowed to run its course.
                      What&apos;ll happen? Just look at &#91;e.g. <i>early 2021: Ontario, Quebec, India</i>&#93; their
                      intensive care units were full. So, this is just different. This is different because this thing
                      is way more infectious. There&apos;s no immunity in the population, so it spreads like wildfire,
                      and these guys that are saying that we need natural immunity, the problem with that is that
                      there&apos;s just massive numbers of people that are going to be sick and fill intensive care
                      units. What do you say we do then?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      From what I saw in the countries that took the approach of what you probably loosely refer to as
                      &lsquo;herd immunity&rsquo;, the initial thought when this all started was, if we let people get
                      it, then eventually we&apos;ll have enough immunity in the population to deal with this and it
                      will run its course. In the fullness of time, this turned out to be the wrong approach. What they
                      &#91;e.g. politicians&#93; weren&apos;t aware of was that COVID is a disease that can affect many
                      different people in many different ways. Getting to herd immunity without the vaccines is going to
                      cost a lot of lives and make a lot of people very sick. &#91;
                      <i>Reference India&apos;s wave of COVID in early 2021; Reference long COVID, etc.</i>&#93;.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (Unconcerned)
              {
                text: {
                  EN: (
                    <>
                      So, natural immunity assumes that a lot of people will get sick. A lot of them, you&apos;re right,
                      it&apos;ll be a sniffle and the flu. But 30% of them will go to hospital. We know that for sure.
                      Do we have space for them in hospital? Are we okay with a portion of them dying? I guess you could
                      say that rolling the dice with natural immunity gets us to the same point as the vaccines. But
                      without the vaccines we get there a lot more slowly.That&apos;s extra time waiting for people to
                      die, and working from home, and our kids out of school. Which, for me, isn&apos;t the kind of
                      waiting game I&apos;m comfortable with.{" "}
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (Unconcerned)
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Let me paint a different picture for you. What if you &#91;and your social group&#93; all got
                      together to hang out and then you went home Sunday. All of you have taken the decision to Thelma
                      and Louise it over the cliff and not get vaccinated. What if you found out on the Monday that
                      &#91;your friend/&#8203;family member&#93; got admitted to hospital for COVID pneumonia and had
                      exposed all of you to COVID? And if you didn&apos;t know where he got it from, how would you feel
                      not knowing if you maybe passed it on to them? How would you feel knowing you could have prevented
                      that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What does concern me is that, you could be the link in a chain for somebody else ending up in the
                      ICU. Whether that&apos;s your mom, or someone in your family who is not quite as fit as you. Do
                      you absolutely need this vaccine? Maybe not, maybe you&apos;d be fine. But do we, the people in
                      your community, need this vaccine? I think we do. This is our way to build immunity. It stops the
                      transmission chains and gets us to normal.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },
              // (Unconcerned)
              {
                text: {
                  EN: (
                    <>
                      For me, it&apos;s important to get vaccinated, not just to keep yourself safe, but also to keep
                      people around you safe. I&apos;m sure you want to visit with your
                      &#91;children/&#8203;grandchildren/&#8203;parents/&#8203;friends&#93;. That community, that&apos;s
                      a pretty good reason to do it, no? It&apos;s just not our own responsibility to our own health.
                      It&apos;s also about our responsibility to our families and the community around us.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You mentioned being able to &#91;do activities&#93;. You mentioned being able to work face to face
                      and have some of that comradery with your colleagues. You mentioned your kids going back to school
                      in a normal way. What would you be willing to pay for that? What would you be willing to give for
                      that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    // (Unconcerned)

    resources: [
      {
        title: {
          EN: <>Understanding herd immunity</>,

          FR: <></>,
        },
        linkText: { EN: <>Nature: Human Behaviour (Journal) article</>, FR: <></> },
        link: "https://www.immunize.ca/sites/default/files/resources/s41562-017-0056_0.pdf",
        description: {
          EN: (
            <>
              Journal article examining the importance of communicating the concept of herd immunity in vaccine
              advocacy. (2017)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Similarities and Differences Between COVID and the Flu</>,

          FR: <></>,
        },
        linkText: { EN: <>US CDC comparison between COVID and Influenza</>, FR: <></> },
        link: "https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm ",
        description: {
          EN: (
            <>
              A comparison between COVID and the Flu, and how it affects the infectious window, vulnerable populations,
              and complications (Updated, June 2021)
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Forbes Op-Ed: If Herd Immunity Is Your Plan to Beat COVID, You Need A Plan B.</>,

          FR: <></>,
        },
        linkText: { EN: <>Forbes Op-Ed by Infectious Diseases Doctor</>, FR: <></> },
        link: "https://www.forbes.com/sites/coronavirusfrontlines/2021/04/23/if-herd-immunity-is-your-plan-to-beat-covid-you-need-a-plan-b/",
        description: {
          EN: (
            <>
              A discussion of the challenges of reaching herd immunity, and why vaccines are critical even if those
              thresholds are lofty. (April 2021)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  Undifferentiated: {
    related: [""],
    overview: {
      theySay: {
        image: "Presentation.svg",
        content: {
          EN: [
            <>
              <p>
                Below you can download a slide deck that outlines approaches for any vaccine hesitancy conversation. The
                slides describe successful approaches to:
              </p>
              <ul className="ml-5 mxs:ml-10 list-disc">
                <li>
                  <strong>Resetting</strong> your expectations for the conversation
                </li>
                <li>
                  <strong>Engaging</strong> openly
                </li>
                <li>
                  <strong>Affirming</strong> your patient&apos;s concerns and starting points
                </li>
                <li>
                  <strong>Asking</strong> permission, then <strong>sharing</strong> your own information or perspectives
                </li>
                <li>
                  <strong>Evoking</strong> positive visions of the future, and co-planning to find a common goal
                </li>
              </ul>
            </>,
            <>
              <a
                className="px-4 pt-1.5 pb-1  smFont orangeLink underline"
                href="https://docs.google.com/presentation/d/1UCFV9zVZFa6sLrRXGBnYLK0zUK7A6kDZbFHJSmwe_Ag/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Download the Slides</span>
                <FiExternalLink className="ml-1 inline" size={18} />
              </a>
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      // (Undifferentiated)
      thingsToConsider: {
        image: "doctorMuslimWomanYellowHeadCover.svg",
        content: {
          EN: [
            <>
              Offering generic information about vaccines may not be as effective as using targeted communication to
              address particular patient concerns.
            </>,
            <>
              <div className="relative">
                <span>Use the</span>
                <EaaseHoverPopupEN
                  eaaseTextClass="mx-1.5 orangeUnderline"
                  eaaseBoxClass="absolute  md:right-0 mxl:right-10  top-10  w-full mxs:w-100 sm:w-120 md:w-120 lg:w-140  shadow-gray"
                />
                <span>
                  to structure a conversation that can help you differentiate your patient&apos;s hesitancy before
                  responding.
                </span>
              </div>
            </>,
            <>
              Remember to engage with your patient to better understand and identify their specific type or source of
              vaccine hesitancy.
            </>,
            <>
              Take your time, and don&apos;t aim for a &lsquo;yes&rsquo; in any single conversation. The goal is to
              become your patients&apos; ally.
            </>,
          ],
          FR: [
            <></>,
            <>
              <div className="relative">
                <span>Use the</span>
                <EaaseHoverPopupFR
                  eaaseTextClass="mx-1.5 orangeUnderline"
                  eaaseBoxClass="absolute  md:right-0 mxl:right-10  top-10  w-full mxs:w-100 sm:w-120 md:w-120 lg:w-140  shadow-gray"
                />
                <span>
                  to structure a conversation that can help you differentiate your patient&apos;s hesitancy before
                  responding. (TEMP FRENCH)
                </span>
              </div>
            </>,
            <></>,
          ],
        },
      },
      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              Take the time to learn about your patient&apos;s particular concerns about the COVID vaccines so that you
              can have a better conversation. The goal of these conversations is to <strong>&#40;re&#41;affirm</strong>{" "}
              that you are an ally; <strong>validate</strong> your patients&apos; experiences; and aim for{" "}
              <strong>contemplation</strong> rather than vaccine acceptance. Your status as a trusted healthcare advisor
              can make the difference.
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },
    // (undifferentiated)

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                Is there any reason behind your discomfort with the vaccines? Do you want to talk about it? Are you
                comfortable doing that?
              </>
            ),
            FR: <></>,
          },
          image: "doctorMuslimWomanYellowHeadCover.svg",
        },

        affirm: {
          text: {
            EN: (
              <>
                I&apos;m glad we&apos;re having this conversation. I&apos;m really glad you&apos;re open to have this
                because it just shows that you&apos;ve got an open mind and you&apos;re willing to hear a little
                different side of things. I&apos;m not here to talk you into this or out of this. You&apos;re in charge
                here - we&apos;re just having a conversation.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManBlackHair.svg",
        },

        ask: {
          text: {
            EN: (
              <>
                I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the different
                options that might be available to you. Do you think it might be okay if I tell you a little bit about
                what I know? As opposed to, maybe, what you&apos;re hearing about from other sources?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },

        evoke: {
          text: {
            EN: (
              <>
                If you look around the world at the countries that have managed to get these vaccines into people&apos;s
                arms: they&apos;re getting back to normal life. They&apos;re able to
                &#91;worship/&#8203;socialize/&#8203;visit/be&#93; together. They&apos;re able to do those things. I
                know that not being able to &#91;worship/socialize/visit&#93; with the rest of your community has been
                really hard on you this last year, but we can do something about that.
              </>
            ),
            FR: <></>,
          },
          image: "doctorBlackWoman.svg",
        },
      },
      // (undifferentiated)

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      Is there any reason behind your discomfort with the vaccines? Do you want to talk about it? Are
                      you comfortable doing that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Let me make sure I understand you clearly. Are you saying, &lsquo;
                      <i>No, not ever, no matter what.</i>
                      &rsquo; Or are you more someone who&apos;s maybe on the fence and you want to kind of wait and
                      see. So more of a &lsquo;<i>maybe</i>&rsquo;, or &lsquo;<i>later</i>&rsquo;?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I&apos;m interested: Where did you hear about &#91;these theories/ideas&#93;? Could you tell me
                      more?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },

              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      I wonder what your thoughts have been around your risk of COVID itself? Because right now
                      we&apos;re talking about potential risks with the vaccine. And I wonder if you&apos;ve thought
                      about your potential risks around COVID?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      I do want to challenge you a little bit there. Just to make sure we have the right information and
                      are on the same page.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorMuslimWomanYellowHeadCover.svg",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I&apos;m glad we&apos;re having this conversation. I&apos;m really glad you&apos;re open to have
                      this because it just shows that you&apos;ve got an open mind and you&apos;re willing to hear a
                      little different side of things. I&apos;m not here to talk you into this or out of this.
                      You&apos;re in charge here &mdash; we&apos;re just having a conversation.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I agree with you that the media coverage of this has been really challenging to follow. It seems
                      like every day there&apos;s something new and it contradicts what was said before, which can make
                      it even more difficult to tease out what&apos;s the truth. But together I think we can make some
                      progress and help you make the best decision for your health.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You&apos;re doing Internet research, and so am I. I&apos;m right there with you, and it&apos;s
                      really confusing, isn&apos;t it? Can we compare notes?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      You have probably done a lot of reading about this. Right? Lots of people these days are reading
                      all about these vaccines, huh? Lots of information out there. Lots of misinformation and partial
                      information out there. Kind of makes you shake your head, right? I&apos;ve been digging into it
                      to, and I&apos;m hoping to share what I&apos;ve found.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      It&apos;s been a desperately hard year or more, hasn&apos;t it? There&apos;s just so much unknown.
                      And in all that, it is absolutely reasonable to have questions about a vaccine. Normally, my job
                      is to work with you to let you know about the risks and the benefits. Right? We figure out the
                      best answer for you. Together. Now, when we&apos;re in a public health crisis like this one, we
                      have to go that extra step beyond figuring out what&apos;s best for you, and we&apos;ve got to
                      figure out what&apos;s best for your family too. What&apos;s best for your community too.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      If there are others in your community that want to chat through this with me, I totally understand
                      if they&apos;re getting information from other sources. But I&apos;m here for you, I&apos;m here
                      for the community. And like I said, I spent a lot of time trying to make sense of this
                      information, because I understand how confusing it can be.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I don&apos;t want to force you into anything, but I really would hope that we can work together to
                      keep you and your family safe and your community safe and get us where we all want to be in a
                      year.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      Yeah. I think knowledge is power. I&apos;ve always felt that way. And when you and I have had
                      visits about other health concerns, I always try to give you those patient handouts because I want
                      you to be as informed as possible. So you can make a decision that&apos;s best aligned to your own
                      values.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      I know you mentioned before that the &#91;US FDA&#93; approval would change your opinion about the
                      vaccine. Now that the Pfizer mRNA vaccine has FDA approval, how are you feeling about vaccination
                      and the safety of the vaccines?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              {
                text: {
                  EN: (
                    <>
                      You&apos;ve known me for a fair amount of time. You may not know how much of a science nerd I am,
                      but do you have a moment? Do you want me to outline for you how we got here so quickly? Because,
                      it&apos;s actually a cool science story.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManGoatee.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So this &#91;concern&#93; is something I&apos;ve heard quite a bit. And because of that, I&apos;ve
                      done a fair bit of research in this space to make sure that I could effectively answer
                      people&apos;s questions and concerns. Is it okay if I share some of that research with you?
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      I&apos;ve been doing quite a lot of reading and research myself about these vaccines and the
                      different options that might be available to you. Do you think it might be okay if I tell you a
                      little bit about what I know? As opposed to, maybe, what you&apos;re hearing about from other
                      sources?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      The reason why this virus is so deadly is because we haven&apos;t seen it before. It&apos;s like
                      your home being broken into for the first time, OK? If you&apos;ve never had your home broken into
                      and you&apos;ve been concerned, the first time it happens is pretty devastating. Right? It&apos;s
                      kind of the same with the virus. When your body&apos;s never seen it before, it doesn&apos;t know
                      how to respond and you can lose everything. But with the vaccine, that&apos;s like installing the
                      full alarm system package and having the security company come and test it. Your body retains a
                      memory of what it saw. So if the real burglars show up, you&apos;re ready. And you didn&apos;t
                      have to lose everything. Just a sore arm, maybe.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So, one of the things that we&apos;re seeing is more and more young people even previously healthy
                      people, getting severely ill from this disease. And so that&apos;s why when I&apos;m speaking to
                      somebody like you, that&apos;s why I wanted to bring it up because I can&apos;t imagine how I
                      would feel if I didn&apos;t do my best to protect somebody like you.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanDarkBrownHair.svg",
                fullStoryID: "",
              },
              // (undifferentiated)
              {
                text: {
                  EN: (
                    <>
                      Everyone was really terrified this time last year, and now, here we are a year later, and
                      we&apos;ve got vaccines. It&apos;s phenomenal that the science has been able to move forward at
                      that rate. It&apos;s continuing to move, and if there is any change that&apos;s needed, then they
                      have the ability to make those tweaks, which is really nice to know that we&apos;ll be able to
                      protect ourselves with boosters in the future if that&apos;s what it takes.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      It&apos;s great that we can talk like this &mdash; thanks for asking for my opinion. You know me
                      and how my job is to look after not just your physical health, but your mental health too, right?
                      When I&apos;m looking at what&apos;s good for you and your family&apos;s mental health, these
                      vaccines are the ticket back into feeling like ourselves again. A ticket back to normal.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      You look at these people very sick or dying in hospitals in places where they aren&apos;t getting
                      vaccinated &ndash; they are saying they wished they had gotten the vaccine. You don&apos;t see
                      people who did get the vaccine saying they wished they were still unvaccinated. I don&apos;t want
                      you to be one of the folks in the hospital saying &lsquo;
                      <i>I wish I had gotten the vaccine when I could have</i>&rsquo;.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I see a big parallel between school zone speed signs and getting vaccinated. You can say,
                      &ldquo;Well, I can go 100km&#47;h in a school zone because I&apos;m probably not going to get
                      caught and I&apos;m a free person. Those little kids down there, well, they just have to take
                      responsibility for themselves!&rdquo; You can say that, but the fact is you might get caught
                      &ndash; you might get sick. The fact is, we live in a society where people have give up some
                      freedoms to be part of the group. We have speed zones in schools because we&apos;re trying to
                      protect the kids &ndash; the next generation of us &ndash; because they&apos;re not that savvy
                      yet. With COVID, we&apos;re all taking our shots so we can keep our kids safe, creating a kind of
                      &lsquo;school zone&rsquo; by reducing the amount of virus in the community because they can&apos;t
                      get the vaccines yet.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      If you look around the world at the countries that have managed to get these vaccines into
                      people&apos;s arms: they&apos;re getting back to normal life. They&apos;re able to
                      &#91;worship/&#8203;socialize/&#8203;visit/&#8203;be&#93; together. They&apos;re able to do those
                      things. I know that not being able to &#91;worship/&#8203;socialize/&#8203;visit&#93; with the
                      rest of your community has been really hard on you this last year, but we can do something about
                      that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManBlackHair.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      So let me ask you, picture yourself a year from now. And let&apos;s forget about the COVID vaccine
                      for a second. Picture yourself a year from now. What do you want to be able to say you&apos;re
                      doing?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      If go back to large amounts of people getting sick, the other thing to think about is: &apos;do we
                      have enough space for them in hospital?&apos; We could wait to have enough people get sick and die
                      so that we build up the &ldquo;herd immunity&rdquo; that people talk about. But for me, the
                      vaccines get us to the same goal faster, sort of like a FastPass at Disneyland. A FastPass without
                      all the hospitalizations and deaths.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Here&apos;s the thing, I think that we got so used to keeping ourselves safe, that we forgot that
                      our aim really needs to be not having to mask forever, not having to homeschool our kids forever,
                      not having to designate one person to go to the grocery store. We forgot how awesome normal was.
                      And the vaccines are what are bringing normal back to us.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Well, let me turn it around for you. What if no vaccine had ever been created for COVID? What does
                      the next five years look like? What does the next 10 years look like?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      It&apos;s long&ndash;COVID that I&apos;m worried about for you, specifically those lingering
                      symptoms, a brain fog that might last for the next year or longer. I would hate for that to
                      happen. So, that&apos;s the thing that I keep worrying about because you&apos;re at a bit higher
                      risk for those long&ndash;COVID effects than the average person.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      I really worry that you would get a really bad run of it if you caught the virus. You would be a
                      very high risk for winding up in hospital, doing really badly, maybe even needing the ICU. People
                      that have been into ICU, they don&apos;t come out in great shape if they do come out. I&apos;d
                      rather we just protect you from that altogether. These vaccines do that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
              // (undifferentiated)

              {
                text: {
                  EN: (
                    <>
                      What concerns me is that you could be the link in a chain for somebody else ending up in the ICU.
                      Whether that&apos;s your mom, or your dad, maybe a grandparent. Do you absolutely need this
                      vaccine? Maybe not, maybe it&apos;d be fine. But do we as a community need this vaccine? I think
                      we do. It stops the transmission chains and gets us safely back to normal.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      What if you got together with your unvaccinated friends over the weekend, and then you went home
                      Sunday. And on Monday, one of them gets admitted to hospital for COVID pneumonia. He&apos;s
                      exposed all of you to COVID. And not thinking about specifically where he got it from, how would
                      you feel then having been someone who could have prevented that?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },

              {
                text: {
                  EN: (
                    <>
                      Maybe you do it for your wife. Maybe you do it for your parents. But even if you don&apos;t do it
                      for you, what&apos;s your cost for &#91;the vaccine&#93;? Maybe a little gas money, and an hour or
                      two off work? I mean, most of us have plenty of time off anyway, right? I look at it that way. I
                      see it a little different from the skeptics that are out there. Sure, it&apos;s one more thing. Be
                      grumpy about it. You have every right to be grumpy. But go get it.
                    </>
                  ),
                  FR: <></>,
                },
                featured: true,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    //UNDIFFERENTIATED RESOURCES
    resources: [
      {
        title: {
          EN: <>Alberta Medical Association: Be A Vaccine Positive Clinic Toolkit</>,

          FR: <></>,
        },
        linkText: { EN: <>Conversation tools for discussing vaccines with patients.</>, FR: <></> },
        link: "https://www.albertadoctors.org/about/COVID-19/vaccine-positive-clinic-toolkit/addressing-vaccine-hesitancy",
        description: {
          EN: (
            <>
              The Alberta Medical Association&apos;s &ldquo;Be A Vaccine Positive Clinic&rdquo; Toolkit includes
              proactive outreach resources, scripts, and other helpful guides for physicians to have vaccination
              conversations with their patients.
            </>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Centre for Effective Practice: ProTCT Framework</>,

          FR: <></>,
        },
        linkText: { EN: <>ProTCT framework for COVID-19 vaccine discussion</>, FR: <></> },
        link: "https://tools.cep.health/wp-content/uploads/2021/04/CEP_COVID-Framework_04-21_r1.pdf",
        description: {
          EN: (
            <>A review of the ProTCT framework to structure conversations with patients about the COVID-19 vaccines</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>Centre for Effective Practice (CEP): Ensuring Patient Confidence in Vaccines</>,

          FR: <></>,
        },
        linkText: { EN: <>CEP Resources for Supporting Patient Confidence in Vaccines</>, FR: <></> },
        link: "https://tools.cep.health/tool/covid-19-vaccines/#ensuring-patient-confidence-in-vaccines",
        description: {
          EN: (
            <>A consolidated resource section organized by concern, issue, and topic related to COVID-19 vaccination.</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>CEP: COVID-19 Resource Centre</>,

          FR: <></>,
        },
        linkText: { EN: <>CEP&apos;s resource toolkit for COVID-19 information</>, FR: <></> },
        link: "https://cep.health/toolkit/covid-19-resource-centre/",
        description: {
          EN: <>A database for COVID-19 information on a variety of topics, including vaccines.</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>19-to-Zero COVID-19 Resources</>,

          FR: <></>,
        },
        linkText: { EN: <>COVID-19 resource repository</>, FR: <></> },
        link: "https://www.19tozero.ca/healthcare-worker-resources",
        description: {
          EN: <>A repository of resources for healthcare workers about COVID-19 vaccines.</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>19-to-Zero YouTube Channel</>,

          FR: <></>,
        },
        linkText: { EN: <>COVID-19 video resources</>, FR: <></> },
        link: "https://www.youtube.com/channel/UC107yJWv6Hz9v4b3rPA4YZw/videos",
        description: {
          EN: <>A selection of video resources for both patients and providers on COVID-19 and vaccines.</>,
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>CANVax Resources on COVID-19 Immunization</>,

          FR: <></>,
        },
        linkText: { EN: <>Resources related to COVID-19 vaccines</>, FR: <></> },
        link: "https://canvax.ca/covid-19-resources-immunization",
        description: {
          EN: (
            <>A repository of resources for regional, national, and international sources on COVID-19 immunizations.</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>US CDC: Vaccines for COVID-19 Information</>,

          FR: <></>,
        },
        linkText: { EN: <>Resources on vaccines for COVID-19 curated by the CDC</>, FR: <></> },
        link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html ",
        description: {
          EN: (
            <>A collection of resources on the COVID-19 vaccines for the general public and healthcare practitioners.</>
          ),
          FR: <></>,
        },
      },

      {
        title: {
          EN: <>ImmunizeBC: COVID-19 Vaccine Basics</>,

          FR: <></>,
        },
        linkText: { EN: <>Immunize BC repository of common COVID vaccine questions and answers </>, FR: <></> },
        link: "https://immunizebc.ca/taxonomy/term/378",
        description: { EN: <>A list of common COVID-19 vaccine questions and answers.</>, FR: <></> },
      },

      {
        title: {
          EN: <>Indigenous Primary Health Care Council: COVID-19 information</>,

          FR: <></>,
        },
        linkText: { EN: <>Indigenous Primary Care Council COVID information</>, FR: <></> },
        link: "https://www.iphcc.ca/covid-19/",
        description: { EN: <>COVID-19 resources with an Indigenous focus.</>, FR: <></> },
      },
    ],
  },

  Pediatrics: {
    related: [""],

    overview: {
      theySay: {
        image: "Hesitancy Group 1.svg",
        content: {
          EN: "",
          // The content for Overview-TheySay is in its own component <PediatricsOverviewTheySay /> so useContext can be used.

          FR: [<></>, <></>, <></>],
        },
      },

      // ACTUAL content for Pediatrics:
      thingsToConsider: {
        image: "doctorMuslimWomanYellowHeadCover.svg",
        content: {
          EN: (
            <div key={123}>
              {/* Need a key here because the thingsToConsider.content.map may be run upon first load, before content
               has been loaded and indices assigned  */}
              <div className="mt-3 relative">
                <div>
                  Conversations with the parents of younger children eligible for the vaccine are likely to be
                  emotionally charged, and come in a variety of forms. These include:
                </div>
                <ul className="pl-5 sm:pl-10 pt-3 list-disc">
                  <li key={0}>Unvaccinated parents unwilling to vaccinate their children,</li>
                  <li key={1}>Vaccinated parents hesitant to vaccinate their children, and</li>
                  <li key={2}>Unvaccinated children who want to be vaccinated contrary to parental wishes.</li>
                </ul>
              </div>
              <div>Consider consulting your College&apos;s standards of practice related to vaccinating minors.</div>
            </div>
          ),
          FR: (
            <div key={123}>
              {/* Need a key here because the thingsToConsider.content.map may be run upon first load  */}
              <div className="mt-3 relative">
                <div>
                  Les conversations avec les parents d’enfants plus jeunes étant admissibles au vaccin risquent d’être
                  chargées en émotions et de prendre plusieurs formes. En voici des exemples :
                </div>
                <ul className="pl-5 sm:pl-10 pt-3 list-disc">
                  <li key={0}>des parents non vaccinés qui ne veulent pas que leurs enfants se fassent vacciner;,</li>
                  <li key={1}>des parents vaccinés qui hésitent à faire vacciner leurs enfants; et</li>
                  <li key={2}>
                    les enfants non vaccinés qui veulent se faire vacciner, contre la volonté de leurs parents.
                  </li>
                </ul>
              </div>
              <div>
                Au besoin, consultez les normes d’exercice de votre collège des médecins en matière de vaccination des
                mineurs..
              </div>
            </div>
          ),
        },
      },
      // ACTUAL content for Pediatrics

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              <div className="pb-2">
                <strong>Empathize with patients.</strong> The pandemic, and conversations about vaccines, may cause
                anger, fear, stress, and anxiety. Meet your patient where they&apos;re at emotionally, and acknowledge
                and address these emotions.
              </div>
              <div className="pb-2">
                <strong>Extend the conversation.</strong> Talking about childhood vaccination may require multiple
                sessions. Keep the door open for future appointments where patients and their children can have their
                concerns heard and addressed.
              </div>
              <div className="pb-2">
                <strong>Address complacency.</strong> The pandemic has tested everyone&apos;s capacity to push through
                this challenging time and make hard decisions. By discussing the risks and benefits of not just the
                vaccine, but those related to COVID-19 infection for children, you can help parents avoid being
                complacent.
              </div>
            </>,
          ],
          FR: [
            <>
              <div className="pb-2">
                <strong>Faites preuve d’empathie envers les patients.</strong> La pandémie et les conversations sur les
                vaccins peuvent provoquer de la colère, de la peur, du stress et de l’anxiété. Déterminez les émotions
                de votre patient, reconnaissez-les et gérez-les.
              </div>
              <div className="pb-2">
                <strong>Poussez la conversation plus loin.</strong> Il se peut que les discussions sur la vaccination
                des enfants doivent se faire en plusieurs temps. Considérez la possibilité de faire revenir vos patients
                et leurs enfants pour les écouter parler davantage de leurs inquiétudes et en discuter.
              </div>
              <div className="pb-2">
                <strong>Gérez la complaisance.</strong> La pandémie a mis à l’épreuve la capacité de chacun à foncer
                pendant cette période difficile et à prendre de dures décisions. En discutant des risques et des
                avantages non seulement du vaccin, mais aussi de ceux liés à l’infection de la COVID-19 par les enfants,
                vous pouvez aider les parents à ne pas devenir complaisants.
              </div>
            </>,
          ],
        },
      },
    },

    // Dummy content for Pediatrics.
    advice: {
      // (The next sections are replaced by pediatricsPanels.js, which draws content from /content/pediatricsContentBI.js)
      eaase: {
        engage: { text: "", image: "" },
        affirm: { text: "", image: "" },
        ask: { text: "", image: "" },
        evoke: { text: "", image: "" },
      },

      engage: {
        //
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [{ text: { EN: <></>, FR: <></> }, featured: false, image: "", fullStoryID: "" }],
          },
        ],
      },
      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [{ text: { EN: <></>, FR: <></> }, featured: false, image: "", fullStoryID: "" }],
          },
        ],
      },
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [{ text: { EN: <></>, FR: <></> }, featured: false, image: "", fullStoryID: "" }],
          },
        ],
      },
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [{ text: { EN: <></>, FR: <></> }, featured: false, image: "", fullStoryID: "" }],
          },
        ],
      },
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [{ text: { EN: <></>, FR: <></> }, featured: false, image: "", fullStoryID: "" }],
          },
        ],
      },
    },
    // ACTUAL content for Pediatrics
    resources: [
      {
        title: {
          EN: <>Vaccines for Children: Deciding to vaccinate</>,
          FR: <>Vaccination des enfants : Choisir de faire vacciner son enfant</>,
          // image: "", // No image files yet - the code is not in place for images (e.g. screenshots) for Resources
        },
        linkText: {
          EN: <>Government of Canada - Vaccines for children: Deciding to vaccinate</>,
          FR: <>Gouvernement du Canada - Vaccination des enfants : Choisir de faire vacciner son enfant</>,
        },
        link: {
          EN: "https://www.canada.ca/en/public-health/services/vaccination-children.html",
          FR: "https://www.canada.ca/fr/sante-publique/services/vaccinations-pour-enfants.html",
        },
        description: {
          EN: <>Health Canada website on childhood vaccines, including COVID-19 vaccination (2021)</>,
          FR: (
            <>
              Site Web de Santé Canada sur les vaccins pour enfants, y compris la vaccination contre la COVID-19 (2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>COVID-19 Vaccine Information Sheet: For children (age 5-11)</>,

          FR: <>Fiche d’information sur la vaccination contre la COVID-19 : Pour les enfants (âgés de 5 à 11 ans) </>,
        },
        linkText: {
          EN: <>Ontario Ministry of Health - COVID-19 Vaccine For Children</>,
          FR: <>Ministère de la Santé de l’Ontario - Vaccination contre la COVID-19 pour les enfants et les jeunes</>,
        },
        link: {
          EN: "https://www.health.gov.on.ca/en/pro/programs/publichealth/coronavirus/docs/vaccine/COVID-19_vaccine_info_sheet_kids_5_11.pdf",
          FR: "https://covid-19.ontario.ca/fr/vaccination-contre-la-covid-19-pour-les-enfants-et-les-jeunes",
        },
        description: {
          EN: (
            <>
              An information sheet from the Ontario Ministry of Health outlining considerations and preparation
              strategies for parents/guardians of children 5-11 (2021)
            </>
          ),
          FR: (
            <>
              Fiche d’information du ministère de la Santé de l’Ontario sur les considérations et les stratégies de
              préparation destinées aux parents et aux tuteurs d’enfants âgés de 5 à 11 ans (2021)
            </>
          ),
        },
      },

      {
        title: {
          EN: <>COVID Vaccine: What parents need to know</>,
          FR: <>COVID Vaccine: What parents need to know</>,
        },
        linkText: {
          EN: <>John Hopkins Medicine - COVID Vaccine: What Parents Need to Know</>,
          FR: <>John Hopkins Medicine - COVID Vaccine: What Parents Need to Know</>,
        },
        link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/covid19-vaccine-what-parents-need-to-know",
        description: {
          EN: (
            <>
              An article written by pediatricians answering common parental/guardian questions about the COVID-19
              vaccines for their children. *Please note this is a US source. In Canada, the Pfizer-BioNTech has been
              approved for children age 5-11, and the Pfizer-BioNTech and Moderna vaccines have been approved for
              children age 12 and older (2021).
            </>
          ),
          FR: (
            <>
              Article rédigé par des pédiatres présentant des réponses aux questions les plus souvent posées par les
              parents et les tuteurs au sujet des vaccins contre la COVID-19 pour leurs enfants *Veuillez noter qu’il
              s’agit d’une source américaine. Au Canada, le vaccin de Pfizer-BioNTech a été approuvé pour les enfants
              âgés de 5 à 11 ans, et les vaccins de Pfizer-BioNTech et de Moderna ont été approuvés pour les enfants de
              12 ans et plus (2021).{" "}
            </>
          ),
        },
      },

      {
        title: {
          EN: <>Children and the COVID-19 Vaccine</>,
          FR: <>Children and the COVID-19 Vaccine</>,
        },
        linkText: {
          EN: <>BC CDC - Children and COVID-19 Vaccination</>,
          FR: <>BC CDC - Children and COVID-19 Vaccination</>,
        },
        link: "http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-vaccine/vaccines-children",
        description: {
          EN: (
            <>
              Webpage which includes vaccine benefits for children, strategies for addressing needle phobia, and a
              review of the vaccine approval process.{" "}
            </>
          ),
          FR: (
            <>
              Page Web présentant les avantages des vaccins pour enfants, les stratégies pour gérer la peur des
              aiguilles et un résumé du processus d’approbation des vaccins
            </>
          ),
        },
      },
    ],
  },

  MedicalExemptions: {
    related: [""],

    overview: {
      theySay: {
        image: "Hesitancy Group 2.svg",
        content: {
          EN: [
            // This section is custom, and is in medExemptOverviewTheySayContentBI.js
            <></>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },

      // MedicalExemptions:
      thingsToConsider: {
        image: "doctorMuslimWomanYellowHeadCover.svg",
        content: {
          EN: [
            <div>
              With exemption discussions, <strong>be upfront with what you are willing to offer to patients.</strong>{" "}
              Don&apos;t build expectations when an exemption isn't warranted.
            </div>,
            <div>
              Try to <strong>avoid opening a space for negotiations</strong> &mdash; don't get into a debate about
              facts. Focus the conversation on your responsibility to your patient's health and your professional
              standards.
            </div>,
            <div>
              Patients who request exemptions most likely have other sources of hesitancy or fears, and{" "}
              <strong>these conversations are good opportunities to explore these concerns</strong>.
            </div>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      // MedicalExemptions

      takeHome: {
        image: "Notepad_small.svg",
        content: {
          EN: [
            <>
              <ul className="pl-5 list-disc">
                <li className="">
                  <strong>Clearly outline the criteria for medical exemptions</strong>, and then move the conversation
                  to other potential sources of the patient's hesitancy.
                </li>
                <li className="">
                  <strong>Affirm and support patients' fears</strong>, particularly if they have had a bad experience
                  with previous doses of the vaccine.
                </li>
                <li className="">
                  As with all other hesitancy conversations,{" "}
                  <strong>trust is at the foundation of these conversations</strong>.
                </li>
                <li className="">
                  If you need to reject a request for an exemption,{" "}
                  <strong>move very quickly to discuss what you can do for your patient</strong>.
                </li>
              </ul>
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    // MedicalExemptions

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                Aside from what the medical criteria are, and why you think you need an exemption, what’s going on in
                the back of your mind in terms of vaccination?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanDarkBrownHair.svg",
        },
        affirm: {
          text: {
            EN: (
              <>
                I get that you want some more time to think about whether or not they’re right for you. That makes good
                sense to me. That sounds like a very natural and human thing, and very understandable.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManGoatee.svg",
        },
        // MedicalExemptions
        ask: {
          text: {
            EN: (
              <>
                Can I share the general criteria of medical exemptions with you, so we can review whether or not these
                apply to your situation?
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteManYoung.svg",
        },
        evoke: {
          text: {
            EN: (
              <>
                I think the relationship we have is built on the trust and respect that we have for each other. I always
                try to work in good conscience and follow scientific principles and recommendations. So, for me to write
                something that I don't believe is correct, and that violates my professional standards, that’s not
                something I’m willing to do.
              </>
            ),
            FR: <></>,
          },
          image: "doctorWhiteWomanBrownHairGlasses.svg",
        },
      },
      // MedicalExemptions Advice Content

      engage: {
        //
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      &ldquo;Okay, so which vaccine component were you concerned that you might be allergic to? This
                      allergy is news to me. So, what I think I'm hearing is that you really don't want the vaccine and
                      you'd like me to sign an exemption for you? Do you believe that there's a medical reason for that,
                      or is there actually something else going on? I'd like to explore your worries a little bit
                      further so that we can understand if there’s something that really would impact your ability to
                      get the vaccine. Aside from what the medical criteria are, and why you think you need an
                      exemption, what's going on in the back of your mind in terms of vaccination? The next bit is for
                      us to unpack each of your concerns, and then I would propose that we spend some time going through
                      them just to make sure that I fully understand your perspective on those concerns . I really do
                      care about you and I want to understand where you're coming from.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Allergy", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;So, what I think I'm hearing is that you really don't want the vaccine and you'd like me to
                      sign an exemption for you? Do you believe that there's a medical reason for that, or is there
                      actually something else going on? I'd like to explore your worries a little bit further so that we
                      can understand if there’s something that really would impact your ability to get the
                      vaccine.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      Aside from what the medical criteria are, and why you think you need an exemption, what's going on
                      in the back of your mind in terms of vaccination? The next bit is for us to unpack each of your
                      concerns, and then I would propose that we spend some time going through them just to make sure
                      that I fully understand your perspective on those concerns . I really do care about you and I want
                      to understand where you're coming from.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteWomanBrownHairGlasses.svg",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      The next bit is for us to unpack each of your concerns, and then I would propose that we spend
                      some time going through them just to make sure that I fully understand your perspective on those
                      concerns. I really do care about you and I want to understand where you're coming from.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
            ],
          },
        ],
      },
      // MedicalExemptions

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I’m concerned about how you're coping and how you're doing, and I want to talk more about
                      that. But what I can't do is write a letter describing a medical exemption because you have stress
                      or anxiety related to vaccination.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Mental Health", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I can understand that you are feeling a ton of mental distress around getting vaccinated.
                      However, mental distress about having the vaccine doesn't actually qualify you for an exemption.
                      Exemptions are in place to say “if I have this vaccine, it will cause my physical health to
                      deteriorate” and so there are very few things that fit in that category.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Mental Health", FR: "" },
              },
              // MedicalExemptions

              {
                text: {
                  EN: (
                    <>
                      &ldquo;It must feel really scary if you feel that the government is trying to use vaccination to
                      control people, or if you believe that the science is not valid. Let's talk about those feelings
                      of fear now.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Politics", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;[If patient had a bad experience with previous doses] I can understand that you would be
                      worried about getting another dose of the vaccine. I get that you want some more time to think
                      about whether or not they’re right for you. That makes good sense to me. That sounds a natural and
                      very human thing, and very understandable.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Allergy", FR: "" },
              },
            ],
          },
        ],
      },

      // MedicalExemptions
      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I wonder if you're more concerned about other aspects of the vaccine, apart from the
                      allergy issue that you’ve raised. Is there anything in particular that you've heard that you're
                      worried about?&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Allergy", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      Can I share the general criteria of medical exemptions with you, so we can review whether or not
                      these apply to your situation?
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
            ],
          },
        ],
      },

      // MedicalExemptions
      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      For me it's really hard to put my stamp on something that's not 100% true. It's not in keeping
                      with my professional duties. The College has been really clear to me and other physicians that if
                      we are writing something that's inaccurate, that's an offense. I could lose my license, and I want
                      to be able to be here for you and all of my other patients in the future. So that's not something
                      that I am able to do at all. I just want to be super clear about how the medical exemptions work
                      and my position on them.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorBlackWoman.svg",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      If you take a look at what has been approved by Health Canada, the provincial government, and by
                      our College of Physicians and Surgeons, you see that there have to be valid reasons for an
                      exemption. It's not as simple as you tell me you need an exemption and then I just comply with
                      that.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      When I sign off on an exemption, I'm actually taking legal liability for the outcome of that
                      exemption letter, and I think a lot of patients don't understand that. They might think ‘it only
                      took two seconds for a doc to sign something,’ but there's a lot that goes behind that, and so I
                      just want to give you some clarity there.
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "doctorWhiteManYoung.svg",
                fullStoryID: "",
                label: { EN: "", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;Generally, people who have allergies to the vaccine ingredients (e.g., PEG) would know this
                      already, because those ingredients are very commonly used in a whole bunch of other products we
                      see everyday. If you think you have one of these allergies, I would like to refer you to an
                      allergist.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Allergy", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I've been seeing people like yourself, who see vaccine mandates as an infringement on
                      rights, but I have also seen people who are angry that that they can't go to work because they're
                      vulnerable with medical conditions, and I’ve seen people who are depressed because they can't
                      leave their houses because of restrictions and COVID. I see a lot of healthcare workers who are
                      really upset because they’re dealing with a large amount of stress at work. So I’m seeing your
                      side, and a lot of the other sides of the issue.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Politics", FR: "" },
              },
            ],
          },
        ],
      },

      // MedicalExemptions
      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I understand that you're frustrated with me because I’m not giving you what you think you
                      want or need right now. But I would really appreciate if you could just take a moment and reflect
                      on the last 20 years of your medical care that we have managed together as a team. Do you feel
                      like I have acted in your best interest for the last 20 years? Rather than thinking that I’ve
                      somehow changed – who I am or how I practice medicine – I’m hoping you can see that I always have
                      your best interests at heart, and I’m always going to give you the best health advice I
                      can.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Do me a favour", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I think the relationship we have is built on the trust and respect that we have for each
                      other. I always try to work in good conscience and follow scientific principles and
                      recommendations. So, for me to write something that I don't believe is correct, and that violates
                      my professional standards, that’s not something I’m willing to do.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Do me a favour", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I can see why you feel that a vaccine mandate is an infringement on your rights. From my
                      perspective as a healthcare provider, I see it very differently. I have seen very sick patients
                      and very sick family members, and believe the vaccines can help protect these people. And that’s
                      why I agree with making medical exemptions only available for very specific reasons.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Politics", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;Whether you choose to get the vaccine or not, I can still help you with the anxiety aspects
                      of the social isolation you’re feeling. I still want to talk about how you can get back some of
                      those social connections that might help with your anxiety. We can start strategizing about
                      getting some of that social connection that will help you with your mood, even with the
                      restrictions that are in place today. I think that's ultimately what we need to look for, instead
                      of a medical exemption.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Mental Health", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      &ldquo;But let's talk a little bit about where you're at from a mental health perspective and
                      think about setting up a consult with a mental health specialist who can offer good support for
                      you. Who can sit with you and work you through some of this anxiety and stress and potentially
                      help you make a plan towards vaccinations. So, we're not talking about an exemption, but instead a
                      bit of a window of opportunity to help you be calmer and feel better about getting the
                      vaccine.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Mental Health", FR: "" },
              },
              {
                text: {
                  EN: (
                    <>
                      &ldquo;Only if there's a true allergy can I write an exemption. And the only way we would know if
                      you have any true allergies is if you've had testing for one of the two products in the vaccines.
                      I will need to refer you out to an allergist to get that testing done.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Allergy", FR: "" },
              },
              // MedicalExemptions
              {
                text: {
                  EN: (
                    <>
                      &ldquo;I know that you have strong religious convictions, and you're diametrically opposed to
                      anything that you believe has been researched in a way that conflicts with your faith. I
                      appreciate that you're a person of conviction. Given what you are suggesting then, will you
                      research everything that we talk about when it comes to your healthcare with the same level of
                      rigor? Because I need to understand this as we plan options for your future care.&rdquo;
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
                label: { EN: "Religion", FR: "" },
              },
            ],
          },
        ],
      },
    },
    // MedicalExemptions
    resources: [
      {
        title: {
          EN: <>College of Physicians and Surgeons of Alberta</>,
          FR: <></>,
        },
        linkText: { EN: <>Guidance for physicians: Requests for COVID-19 vaccination exemptions</>, FR: <></> },
        link: "https://cpsa.ca/wp-content/uploads/2021/09/Guidance-for-Physicians-COVID19-Vaccine-Exemption.pdf",
        description: {
          EN: (
            <>
              Guidance document outlining using professional judgement when writing exemptions, managing challenging
              interactions, and setting up exemption expectations with patients
            </>
          ),
          FR: <></>,
        },
      },
      {
        title: {
          EN: <>CPSA</>,

          FR: <></>,
        },
        linkText: { EN: <>Exemption Requests: Patient FAQs</>, FR: <></> },
        link: "https://cpsa.ca/wp-content/uploads/2021/09/Vaccine-exemption-public-FAQ.pdf",
        description: {
          EN: (
            <>
              FAQ for patients on exemption eligibility, and the role of physicians in using professional discretion to
              provide exemptions
            </>
          ),
          FR: <></>,
        },
      },
      {
        title: {
          EN: <>College of Physicians and Surgeons BC</>,

          FR: <></>,
        },
        linkText: { EN: <>How to verify a legitimate COVID-19 vaccine exemption or deferral</>, FR: <></> },
        link: "https://www.cpsbc.ca/news/how-verify-legitimate-covid-19-vaccine-exemption-or-deferral",
        description: {
          EN: <>Includes link to exemption and deferral form, with lists of valid exemption conditions</>,
          FR: <></>,
        },
      },
      {
        title: {
          EN: <>Ontario Ministry of Health</>,

          FR: <></>,
        },
        linkText: { EN: <>Medical Exemptions to COVID-19 Vaccination</>, FR: <></> },
        link: "https://health.gov.on.ca/en/pro/programs/publichealth/coronavirus/docs/vaccine/medical_exemptions_to_vaccination.pdf",
        description: {
          EN: <>Offers guidance to medical staff on when a medical exemption is warranted</>,
          FR: <></>,
        },
      },
      {
        title: {
          EN: <>National Advisory Committee on Immunization (NACI)</>,

          FR: <></>,
        },
        linkText: { EN: <>Recommendations on COVID-19</>, FR: <></> },
        link: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-26-covid-19-vaccine.html",
        description: {
          EN: (
            <>
              Information about NACI COVID vaccine recommendations for healthcare providers. (Current as of January
              2022)
            </>
          ),
          FR: <></>,
        },
      },
    ],
  },

  BadContentID: {
    related: [""],
    overview: {
      theySay: {
        image: "",
        content: {
          EN: [
            <>
              <div className="mt-4 emphFont text-red-700">Bad Path or ContentID</div>
              <div className="mt-4 baseFont text-red-700">
                Content for the selected hesitancy type was not found at the indicated path.
              </div>
              <div className="mt-4 baseFont text-red-700">
                <div>Please click the VH Guide logo at top to continue. </div>
                <div>Also, please check the path, as well as the appropriate section in contentPersonasBI.js</div>
                <div className="mt-4">We apologize for the inconveniece.</div>
              </div>
            </>,
          ],
          FR: [<></>, <></>, <></>],
        },
      },
      // (BadContentID)
      thingsToConsider: {
        image: "",
        content: {
          EN: [<></>],
          FR: [<></>, <></>, <></>],
        },
      },
      takeHome: {
        image: "",
        content: {
          EN: [<></>],
          FR: [<></>, <></>, <></>],
        },
      },
    },

    advice: {
      eaase: {
        engage: {
          text: {
            EN: (
              <>
                <div className="emphFont text-red-700">Bad Path or ContentID</div>
                <div className="mt-4 baseFont text-red-700">
                  <div>Please click the VH Guide logo at top to continue. </div>
                  <div>Also, please check the URL path and the appropriate section in contentPersonasBI.js</div>
                  <div className="mt-4">We apologize for the inconveniece.</div>
                </div>
              </>
            ),
            FR: <></>,
          },
          image: "",
        },

        affirm: {
          text: { EN: <></>, FR: <></> },
          image: "",
        },

        ask: {
          text: { EN: <></>, FR: <></> },
          image: "",
        },

        evoke: {
          text: { EN: <></>, FR: <></> },
          image: "",
        },
      },
      // (BadContentID)

      engage: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      <div className="emphFont text-red-700">Bad path or contentID</div>
                      <div className="mt-4 vsmFont text-red-700">
                        <div>
                          Please check the path in branch.js and/or the appropriate section in contentPersonasBI.js
                        </div>
                        <div>We apologize for the inconveniece.</div>
                      </div>
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      affirm: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      <div className="emphFont text-red-700">Bad path or contentID</div>
                      <div className="mt-4 vsmFont text-red-700">
                        <div>
                          Please check the path in branch.js and/or the appropriate section in contentPersonasBI.js
                        </div>
                        <div>We apologize for the inconveniece.</div>
                      </div>
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      ask: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      <div className="emphFont text-red-700">Bad path or contentID</div>
                      <div className="mt-4 vsmFont text-red-700">
                        <div>
                          Please check the path in branch.js and/or the appropriate section in contentPersonasBI.js
                        </div>
                        <div>We apologize for the inconveniece.</div>
                      </div>
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      share: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      <div className="emphFont text-red-700">Bad path or contentID</div>
                      <div className="mt-4 vsmFont text-red-700">
                        <div>
                          Please check the path in branch.js and/or the appropriate section in contentPersonasBI.js
                        </div>
                        <div>We apologize for the inconveniece.</div>
                      </div>
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
      // (BadContentID)

      evoke: {
        content: [
          {
            subheading: { EN: "", FR: "" },
            quotes: [
              {
                text: {
                  EN: (
                    <>
                      <div className="emphFont text-red-700">Bad path or contentID</div>
                      <div className="mt-4 vsmFont text-red-700">
                        <div>
                          Please check the path in branch.js and/or the appropriate section in contentPersonasBI.js
                        </div>
                        <div>We apologize for the inconveniece.</div>
                      </div>
                    </>
                  ),
                  FR: <></>,
                },
                featured: false,
                image: "",
                fullStoryID: "",
              },
            ],
          },
        ],
      },
    },
    //BadContentID
    resources: [
      {
        title: {
          EN: (
            <>
              <div className="emphFont text-red-700">Bad Path or ContentID</div>
              <div className="mt-4 baseFont text-red-700">
                <div>Please click the VH Guide logo at top to continue. </div>
                <div>Also, please check the URL path and the appropriate section in contentPersonasBI.js</div>
                <div className="mt-4">We apologize for the inconveniece.</div>
              </div>
            </>
          ),

          FR: <></>,
        },
        linkText: { EN: <></>, FR: <></> },
        link: "https://",
        description: { EN: <></>, FR: <></> },
      },
    ],
  },
};
