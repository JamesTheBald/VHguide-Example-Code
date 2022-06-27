import React from "react";

export const pediatricsContentBI = [
  //LOWERING THE TEMPERATURE

  // Path names for doctor icon images:
  //   doctorBlackManBeard.svg
  //   doctorBlackWoman.svg
  //   doctorMuslimWomanYellowHeadCover.svg
  //   doctorWhiteManBlackHair.svg
  //   doctorWhiteManGoatee.svg
  //   doctorWhiteManYoung.svg
  //   doctorWhiteWomanBrownHairGlasses.svg
  //   doctorWhiteWomanDarkBrownHair.svg

  // <>
  // apostrophe'  &apos;
  // left quotation mark  &lsquo;
  // right quotation mark   &rsquo;
  // italics  <i> </i>
  // bold   <strong> </strong>
  // dash &mdash;
  // </>

  {
    title: { EN: "", FR: "" },
    content: [
      {
        subheading: {
          EN: (
            <>
              <span>Long-Term Effects / </span>
              <span className="whitespace-nowrap">Data</span>
            </>
          ),
          FR: (
            <>
              <span>Effets ou données </span>
              <span className="whitespace-nowrap">à long terme</span>
            </>
          ),
        },

        cliniciansHearing: [
          {
            text: {
              EN: (
                <>
                  I&apos;m double vaccinated - I did the right thing. I&apos;m just not convinced that my 11 year old
                  should have it. I don&apos;t want to put that stuff in them just in case there are long-term effects.
                </>
              ),
              FR: (
                <>
                  J’ai eu deux doses de vaccin. J’ai fait ce que j’avais à faire. Je ne suis pas convaincue que mon
                  enfant de 11 ans devrait se faire vacciner par contre. Je ne veux pas que ces substances soient
                  injectées dans son corps si jamais il y avait des effets à long terme.
                </>
              ),
            },
            featured: true,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  I&apos;m okay with being vaccinated, but my kid&apos;s young and healthy. They&apos;ve got 25, 35
                  years before they have to worry about diseases that come with getting old. I don&apos;t want them to
                  get some weird reaction that speeds this up.
                </>
              ),
              FR: (
                <>
                  Pour moi, la vaccination, ce n’était pas un problème, mais mon enfant est jeune et en santé. Il a 25 à
                  35 années avant de commencer à s’inquiéter des maladies qui se manifestent en vieillissant. Je ne veux
                  pas qu’il ait une drôle de réaction susceptible d’accélérer ce processus.
                </>
              ),
            },
            featured: false,
            image: "doctorBlackManBeard.svg",
          },
        ],

        cliniciansSaying: [
          // Long-term effects / Long-term data
          {
            text: {
              EN: (
                <>
                  You&apos;re right, we don&apos;t have that long term data right now. The clinical trials with kids are
                  still going on the teams are collecting lots of data. Now, the initial results we&apos;ve seen have
                  shown two key things: a great safety profile and really strong efficacy. The vaccines are safe and
                  they&apos;re effective at protecting kids from the virus. It&apos;s those initial results that have
                  been the basis of the authorizations and approvals. We&apos;ll learn more as the studies continue, but
                  we know its safe and its efficacious right now.
                </>
              ),
              FR: (
                <>
                  Vous avez raison en ce sens que nous n’avons pas de données à long terme en ce moment. Les essais
                  cliniques faisant appel à des enfants se poursuivent et les équipes recueillent beaucoup de données.
                  Cela dit, les premiers résultats obtenus jusqu’à maintenant ont permis de conclure deux choses : les
                  vaccins sont très sûrs et les vaccins sont très efficaces. Les vaccins sont sûrs et ils sont efficaces
                  pour protéger les enfants du virus. Les autorisations et les approbations sont fondées sur ces
                  premiers résultats. On va en savoir plus à mesure que les études se poursuivent, mais pour l’instant,
                  on sait que les vaccins sont sûrs et efficaces.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I hear you about the lack of long-term data on side effects. And that can give you pause. If
                  you&apos;re thinking along those lines, then you&apos;ll also want to consider the other long-term
                  data that we don&apos;t have. We <strong>don&apos;t</strong> know what happens to the development of a
                  kid who&apos;s had COVID. What are the developmental effects of getting the disease, unvaccinated? We
                  know that we&apos;ve got long-haulers &mdash; people who just can&apos;t get over COVID. They&apos;ve
                  got headaches and focus problems and all that &mdash; how does THAT affect development? We also know
                  that people who&apos;ve had COVID are more prone to blood clots and strokes and that sort of thing. We
                  know about those risks, but the bottom line is that, just like we don&apos;t know about the long-term
                  effects of being vaccinated, we can&apos;t say what the long-term effects of getting COVID are on a
                  young body. It&apos;s a balance you&apos;ve got to strike, but for me it comes back to being safer in
                  the moment.
                </>
              ),
              FR: (
                <>
                  Je comprends ce que vous voulez dire à propos du manque de données à long terme sur les effets
                  secondaires. Je vous le concède. Si vos pensées vont dans ce sens, vous voudrez alors considérer les
                  autres données à long terme dont on ne dispose toujours pas. On se sait pas comment le développement
                  d’un enfant qui attrape la COVID peut être touché. Quels sont les effets de la maladie sur le
                  développement de l’enfant non vacciné? On sait que dans certains cas, la maladie traîne en longueur.
                  Il y a des personnes qui ne peuvent pas se débarrasser de la COVID. Elles ont des maux de tête, des
                  troubles de concentration et ainsi de suite. Quels EN SERONT LES EFFETS sur leur développement? On
                  sait aussi que les personnes qui ont eu la COVID sont plus susceptibles d’avoir des caillots sanguins,
                  des accidents vasculaires cérébraux et des choses comme ça. On connaît ces risques et au bout du
                  compte, tout comme on ne connaît pas les effets à long terme des vaccins, on ne connaît pas les effets
                  à long terme de la COVID sur le corps d’un enfant. Il faut trouver un juste équilibre, mais pour moi,
                  l’important, c’est de jouer sûr en ce moment.
                </>
              ),
            },
            featured: false,
            image: "doctorWhiteManBlackHair.svg",
          },
          // Long-term effects / Long-term data
          {
            text: {
              EN: (
                <>
                  Whatever decision you make, you&apos;re still a good parent. What&apos;s important is that you&apos;re
                  thinking about how best to protect your kid(s). Whatever that decision is at this point, I want to
                  continue this dialogue with you and your kid(s).
                </>
              ),
              FR: (
                <>
                  Peu importe la décision que vous prendrez, vous serez toujours un bon parent. L’important, c’est de
                  choisir la meilleure manière de protéger vos enfants. Peu importe la décision que vous prendrez à ce
                  stade-ci, je veux poursuivre ce dialogue avec vous et vos enfants.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  We vaccinate children for more than a dozen diseases routinely. For more than a century we&apos;ve
                  been doing it, and for more than a century the health of the whole population has gotten steadily
                  better. Now, not every disease we vaccinate kids for is immediately life threatening. So, just because
                  COVID isn&apos;t as deadly in children, doesn&apos;t mean that we shouldn&apos;t vaccinate them
                  against it.
                </>
              ),
              FR: (
                <>
                  Les enfants se font constamment vacciner pour plus d’une dizaine de maladies. La vaccination existe
                  depuis plus d’un siècle, et cela fait plus d’un siècle que la santé de l’ensemble de la population
                  s’améliore progressivement. Vous savez, les maladies contre lesquelles les enfants sont vaccinés ne
                  sont pas toutes instantanément mortelles. Donc, ce n’est pas parce que la COVID n’est pas mortelle
                  chez les enfants qu’on ne devrait pas les faire vacciner en conséquence.
                </>
              ),
            },
            featured: true,
            image: "",
          },
          // Long-term effects / Long-term data

          {
            text: {
              EN: (
                <>
                  Because of these authorizations and approvals for the vaccines in children, the world is gaining tons
                  of experience with this vaccine in just a few months. It&apos;s going to take some time to accumulate
                  data from the whole experience, but I will continue to look at it. It&apos;s part of my job to tell
                  you exactly where the studies are at, and be able to tell you whether the vaccines continue to be a
                  safe option for your kid(s).
                </>
              ),
              FR: (
                <>
                  Grâce aux autorisations et aux approbations vaccinales chez les enfants, le monde accumule énormément
                  d’expérience par rapport au vaccin contre la COVID en quelques mois seulement. Il va falloir du temps
                  pour accumuler les données de toute cette histoire, mais je vais continuer de suivre les progrès. Dans
                  le cadre de mes fonctions, j’ai la responsabilité de vous dire où en sont exactement les études, et de
                  vous dire si les vaccins continuent à être sûrs pour vos enfants.{" "}
                </>
              ),
            },
            featured: false,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  I don&apos;t think you need to rush on making a decision about vaccinating your children. Maybe just
                  let this conversation settle down, and then, I am totally happy to book another appointment to discuss
                  this decision more. If there is something that you want to read about it, please let me know, I am
                  happy to share my resources. Just think about it. Maybe just reflect on the things that we have
                  discussed.
                </>
              ),
              FR: (
                <>
                  Je pense que vous n’avez pas besoin de prendre une décision trop rapide sur la vaccination de vos
                  enfants. Peut-être que vous devriez bien absorber cette conversation et après ça, il me fera plaisir
                  de vous donner un autre rendez-vous pour rediscuter de votre décision. Si vous voulez lire sur un
                  sujet en particulier, dites-le-moi et je partagerai mes ressources avec vous volontiers. Prenez le
                  temps d’y penser. Réfléchissez à ce dont nous venons de discuter.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // Long-term effects / Long-term data

          {
            text: {
              EN: (
                <>
                  I know that your kids are too young to get the vaccine right now, but by the time they hit five, we
                  will have more on how safe it is. So, I&apos;d like to wait and see what happens and talk again. Does
                  that work for you?
                </>
              ),
              FR: (
                <>
                  Je sais que vos enfants sont trop jeunes pour se faire vacciner pour l’instant, mais d’ici à ce qu’ils
                  aient cinq ans, on en saura plus sur l’aspect sécuritaire des vaccins. J’aimerais donc attendre de
                  voir ce qui va se passer, puis en rediscuter. Qu’en pensez-vous?
                </>
              ),
            },
            featured: false,
            image: "doctorBlackWoman.svg",
          },
        ],
      },

      {
        subheading: {
          EN: (
            <>
              <span>Developmental / </span>
              <span className="whitespace-nowrap">Puberty Concerns</span>
            </>
          ),
          FR: (
            <>
              <span>Problèmes en matière de développement </span>
              <span className="whitespace-nowrap">ou de puberté</span>
            </>
          ),
        },

        cliniciansHearing: [
          {
            text: {
              EN: (
                <>
                  I just don&apos;t think my kid(s) should have it at their age. They&apos;re just starting to develop,
                  and I don&apos;t want to put that stuff in them just in case it affects them.
                </>
              ),
              FR: (
                <>
                  Je ne pense tout simplement pas que mes enfants devraient se faire vacciner à l’âge qu’ils ont. Leur
                  développement ne fait que commencer et je ne veux pas que ces substances leur soient injectées si
                  jamais il y avait des effets néfastes.
                </>
              ),
            },
            featured: false,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  You can&apos;t tell me that this isn&apos;t going to impact our kids&apos; puberty or fertility. You
                  don&apos;t have the evidence yet.
                </>
              ),
              FR: (
                <>
                  Ne me dites pas que les vaccins n’auront pas d’effets sur la puberté ou la fertilité de nos enfants.
                  Vous n’avez toujours pas de preuves.
                </>
              ),
            },
            featured: true,
            image: "",
          },
        ],

        cliniciansSaying: [
          {
            text: {
              EN: (
                <>
                  We have lots of experience now with the vaccines&apos; safety for kids 12 and up and adults as well.
                  I&apos;m personally not concerned about puberty being affected, especially knowing the relationship
                  between our immune systems and puberty. They work quite differently.
                </>
              ),
              FR: (
                <>
                  On a beaucoup d’expérience maintenant pour ce qui est de la sécurité des enfants de 12 ans et plus et
                  des adultes. Personnellement, je ne m’inquiète pas des effets des vaccins sur la puberté, surtout
                  puisque je connais le lien entre notre système immunitaire et la puberté. Ils ne fonctionnent pas du
                  tout de la même manière.
                </>
              ),
            },
            featured: false,
            image: "doctorMuslimWomanYellowHeadCover.svg",
          },

          {
            text: {
              EN: (
                <>
                  The vaccine component only stays in the body for a relatively short period of time. So if you&apos;re
                  thinking they&apos;re going to be hitting puberty anytime in the next few years, the actual vaccine is
                  long gone. It&apos;s out of the system and it&apos;s just the memory of the antibodies that&apos;s
                  remaining.
                </>
              ),
              FR: (
                <>
                  La composante du vaccin ne reste dans le corps que pendant une période relativement courte. Donc, si
                  vous pensez que vos enfants atteindront le stade de la puberté dans quelques années, le vaccin ne sera
                  plus dans leur corps depuis longtemps. Il ne sera plus dans son système. Tout ce qui restera, ce sera
                  la mémoire des anticorps.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // Developmental / Puberty Concerns
          {
            text: {
              EN: (
                <>
                  In terms of fertility, if we look at how these vaccines work and how long the actual vaccine and its
                  ingredients stay in your system, we have good data to show that it only stays in the muscle and in the
                  lymph nodes for roughly seven days. The spike protein that your body makes from this vaccine stays
                  only for a few weeks, and it&apos;s out of your system. I hear you, that there is so much
                  misinformation saying that these vaccines are going to stay in your system for years and they may
                  accumulate in the ovaries, or other organs. I&apos;ve got to say that if you look strictly at the
                  science, this is not what we see.
                </>
              ),
              FR: (
                <>
                  Pour ce qui est de la fertilité, si on se penche sur la façon dont ces vaccins fonctionnent et qu’on
                  s’arrête à penser pendant combien de temps le vaccin et ses ingrédients restent vraiment dans votre
                  système, nous avons de bonnes données qui indiquent qu’ils restent dans les muscles et les nœuds
                  lymphoïdes pendant environ sept jours. La protéine S que fabrique notre corps à partir de ces vaccins
                  ne reste là que pendant quelques semaines, puis elle sort de notre système. Je sais ce que vous voulez
                  dire. Il y a tellement de désinformation au sujet de ces vaccins, à savoir qu’ils vont rester dans
                  notre système pendant des années et qu’ils peuvent s’accumuler dans les ovaires et d’autres organes.
                  Mais je dois vous dire que si on regarde ça purement du point de vue scientifique, ce n’est pas le
                  cas.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
      },

      {
        subheading: {
          EN: "COVID Is Low-Risk In Children",
          FR: "La COVID présente peu de risques pour les enfants",
        },
        cliniciansHearing: [
          {
            text: {
              EN: (
                <>
                  I think that the risks of vaccine side effects outweigh the risks of what would happen if my kid just
                  got COVID. I don&apos;t want to inject my kid when they&apos;re going to be fine from this disease
                  anyway.
                </>
              ),
              FR: (
                <>
                  Je pense que les risques d’effets secondaires de la vaccination l’emportent sur les risques liés à la
                  COVID si mon enfant finissait par l’attraper. Je ne veux pas que mon enfant se fasse vacciner quand je
                  sais que cette maladie ne lui fera pas de mal de toute façon.
                </>
              ),
            },
            featured: true,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  But I just don&apos;t see the need for kids to get vaccinated - I&apos;m pretty sure they&apos;ve all
                  had COVID at this point anyway.
                </>
              ),
              FR: (
                <>
                  Mais je ne vois pas pourquoi les enfants se feraient vacciner. Je suis pas mal certaine qu’ils ont à
                  peu près tous attrapé la COVID à ce stade-ci de toute façon.
                </>
              ),
            },
            featured: false,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  Why are we even bothering vaccinating kids when the death rate is so low, and they just don&apos;t get
                  that sick from it?
                </>
              ),
              FR: (
                <>
                  Pourquoi est-ce qu’on se soucie de faire vacciner les enfants de toute façon quand on sait que le taux
                  de mortalité est tellement faible et qu’ils ne tombent pas vraiment malades?
                </>
              ),
            },
            featured: false,
            image: "doctorWhiteManGoatee.svg",
          },
        ],

        cliniciansSaying: [
          {
            text: {
              EN: (
                <>
                  I think we have to ask ourselves: is COVID-19 an important disease in children? I think the answer to
                  that is an emphatic &lsquo;yes!&rsquo; We know that children are at lower risk of severe outcomes than
                  adults so I don&apos;t want to oversell it. But kids are getting severe COVID-19 and passing away from
                  this disease in many settings. So children are at lower risk, but not at no risk.
                </>
              ),
              FR: (
                <>
                  Je pense qu’il faut se poser cette question : est-ce que la COVID-19 est une maladie importante chez
                  les enfants? Je pense que la réponse est un « oui » catégorique! On sait que les risques de
                  répercussions graves sur les enfants sont plus faibles que pour les adultes. Je ne veux donc pas
                  exagérer la situation. Mais dans bien des endroits, il y a des enfants qui ont de graves cas de
                  COVID-19 et qui en meurent. Alors effectivement, les risques sont moins grands chez les enfants, mais
                  il y a tout de même des risques.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  Unfortunately, here in North America, we have just gone through another massive wave. That wave has
                  quite significantly increased the chances your kid(s) have been exposed to COVID in the community. For
                  me, it&apos;s safe to say at this point in time that it&apos;s not an &lsquo;if&rsquo;, it&apos;s a
                  &lsquo;when&rsquo; an unvaccinated child will get COVID. For me that ups the ante. If they&apos;re
                  very likely to get COVID but very unlikely to get significant side effects from the vaccines, then by
                  all means we should be vaccinating children.
                </>
              ),
              FR: (
                <>
                  Malheureusement, ici en Amérique du Nord, on vient juste de traverser une autre vague importante de
                  cette maladie. En raison de cette vague, les chances que vos enfants aient été exposés à la COVID ont
                  beaucoup augmenté. Quant à moi, je pense qu’en ce moment, il ne faut pas se demander « si » un enfant
                  non vacciné va attraper la COVID, mais plutôt « à quel moment » il va l’attraper. Pour moi, ça veut
                  dire que la barre est plus haute. S’il est très probable que les enfants attrapent la COVID, mais très
                  peu probable qu’ils aient d’importants effets secondaires en raison des vaccins, alors on devrait
                  vraiment faire vacciner les enfants.
                </>
              ),
            },
            featured: false,
            image: "doctorWhiteManYoung.svg",
          },
          // COVID is low-risk in children
          {
            text: {
              EN: (
                <>
                  I know you have some very young kid(s) at home. We know that children under 1 who get a COVID
                  infection are at the same risk for hospitalization as people who are 30-39 years old. So, they&apos;re
                  particularly vulnerable. The good news is that by providing vaccination for older kids in the same
                  house you can help protect your infant under the age of one.
                </>
              ),
              FR: (
                <>
                  Je sais que vous avez de jeunes enfants chez vous. On sait que les enfants de moins d’un an qui sont
                  infectés par la COVID courent les mêmes risques d’hospitalisation que les personnes de 30 à 39 ans.
                  Ils sont donc particulièrement vulnérables. La bonne nouvelle, c’est qu’en faisant vacciner les
                  enfants plus âgés qui vivent sous votre toit, vous aidez à protéger votre enfant de moins d’un an.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  For me an important thing to think about is the social effects COVID has had on children&apos;s lives.
                  I think we would all want our kids to start behaving normally and interacting with each other, going
                  to parties and everything else that goes along with that. Vaccination is a key to that more normal way
                  of growing up.
                </>
              ),
              FR: (
                <>
                  Selon moi, c’est important de penser aux effets sociaux de la COVID sur la vie des enfants. Je pense
                  qu’on aimerait tous que nos enfants reprennent le cours normal de leur vie et de leurs activités, et
                  tout le reste. La vaccination joue un grand rôle dans la normalité de la vie des enfants.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // COVID is low-risk in children
          {
            text: {
              EN: (
                <>
                  I&apos;ve heard the data that 99% or so of kids are just fine, but some of the kids aren&apos;t fine.
                  These are kids who were otherwise healthy but are ending up in the hospital, or have long COVID (or
                  MIS-C) and are unwell for weeks or months. I don&apos;t want that being my kid and I don&apos;t want
                  it to be your kid either. We can get there. With the vaccine its totally preventable.
                </>
              ),
              FR: (
                <>
                  J’ai entendu dire que pour environ 99 % des enfants, ça se passe bien, mais que pour certains autres,
                  ce n’est pas le cas. Il s’agit là d’enfants qui étaient en santé et qui ont dû être hospitalisés, ou
                  qui ont le syndrome post-COVID-19 (ou le syndrome inflammatoire multisystémique) et qui sont malades
                  pendant des semaines ou des mois. Je ne veux pas que ça arrive à mon enfant, et que ça arrive à votre
                  enfant. On peut surmonter tout ça. C’est une situation tout à fait évitable grâce au vaccin.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I think that you need to consider familial protection as well. Kids have a big impact on family. A
                  child who&apos;s not vaccinated could bring COVID into the house, could even bring it into
                  grandma&apos;s house.
                </>
              ),
              FR: (
                <>
                  Je pense que vous devez aussi tenir compte de la protection de votre famille. Les enfants ont de
                  grandes incidences sur la famille. L’enfant qui n’est pas vacciné pourrait amener la COVID chez lui,
                  ou même chez sa grand-mère.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // COVID is low-risk in children
          {
            text: {
              EN: (
                <>
                  You know how kids are at school right, wearing each other&apos;s clothes and wiping snot on their
                  sleeve, and then swapping sweaters and all that good stuff. Kids are great spreaders of disease, and I
                  also feel so sorry for the school teachers who have had to deal with so many outbreaks. The vaccine is
                  there to help out with that.
                </>
              ),
              FR: (
                <>
                  Vous savez ce que font les enfants à l’école. Ils portent les vêtements des autres, essuient leur
                  morve sur leurs manches, s’échangent les chandails et font d’autres choses du genre. Les enfants
                  propagent beaucoup les maladies, et je plains énormément les enseignants qui ont dû faire face à tant
                  d’éclosions. Les vaccins existent pour aider avec ça.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I think at the beginning of the pandemic, a lot of the communication that went out said: &lsquo;COVID
                  is not a problem for kids, it&apos;s a problem for older people&rsquo;. I think that this statement
                  has turned out not to be true, especially with the Delta variant. My colleagues from pediatrics keep
                  telling me how, within the last few months (late 2021), there are so many more kids coming to the
                  hospital sick with COVID. I understand that we are seeing some children die from COVID-19. Is the risk
                  of dying from COVID-19 higher for an 80-year-old? Yes. On the other hand, as a parent, you can argue
                  that one child death from something that is preventable is one too many.
                </>
              ),
              FR: (
                <>
                  Je pense qu’au début de la pandémie, grand nombre des communications affirmaient que la COVID n’était
                  pas un problème pour les enfants, mais plutôt pour les adultes. Je pense que ça s’est révélé faux,
                  surtout pour ce qui est du variant Delta. Mes collègues de pédiatrie me disent à quel point au cours
                  des derniers mois (vers la fin de 2021), il y a eu beaucoup plus d’enfants malades de la COVID à
                  l’hôpital. Je sais que certains enfants sont morts de la COVID-19. Est-ce que le risque de mourir de
                  cette maladie est plus grand pour une personne de 80 ans? Oui. Par contre, en tant que parent, je peux
                  vous dire que le décès d’un seul enfant d’une maladie qui est évitable, c’est un décès de trop.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // COVID is low-risk in children
          {
            text: {
              EN: (
                <>
                  I&apos;m very happy to share a resource with you that compares the number of kids who have died from
                  COVID-19 compared to the number of kids that have died from other diseases that we vaccinate for. We
                  vaccinate for measles, right? Remember, when [your children] were 18 months old, they got their
                  measles vaccine, the MMR, and chicken pox, right? When we look at the numbers for bad stuff happening
                  with COVID-19 infection compared to other things we already vaccinate our kids for, COVID-19 is the
                  most serious of all.
                </>
              ),
              FR: (
                <>
                  Il me fait plaisir de partager une ressource avec vous qui compare le nombre d’enfants qui sont morts
                  de la COVID-19 au nombre d’enfants qui sont morts d’autres maladies pour lesquelles il existe des
                  vaccins. Il y a un vaccin contre la rougeole, n’est-ce pas? Vous vous souvenez, quand [vos enfants]
                  ont eu 18 mois, ils se sont fait vacciner contre la rougeole, les oreillons, la rubéole et la
                  varicelle, n’est-ce pas? Quand on jette un coup d’œil aux chiffres des mauvaises choses qui découlent
                  de la COVID-19 et qu’on les compare à d’autres maladies pour lesquelles nos enfants sont vaccinés, les
                  résultats de la COVID-19 sont les pires.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
      },

      {
        subheading: {
          EN: "Vaccination Is Too Risky For My Kids",
          FR: "La vaccination est trop risquée pour mon enfant",
        },
        cliniciansHearing: [
          {
            text: {
              EN: (
                <>
                  There&apos;s just hundreds of thousands of red flags that are coming up on the Internet, you know and
                  nobody&apos;s looking into all these safety signals issues from the vaccines. There&apos;s no way
                  I&apos;m giving that to my kid.
                </>
              ),
              FR: (
                <>
                  Il y a des centaines de milliers de signaux d’alarme dans Internet, et personne n’a le temps de tous
                  les analyser. Il est hors de question que je donne ces substances à mon enfant.
                </>
              ),
            },
            featured: false,
            image: "",
          },

          {
            text: {
              EN: <>I think it needs to be proven that this is safe before we start giving it to children.</>,
              FR: (
                <>
                  Je pense qu’ils doivent prouver que les vaccins sont sûrs avant de commencer à les donner aux enfants.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  This is just too new. I don&apos;t want to subject my kids to the vaccines if we don&apos;t know
                  what&apos;s going to happen to them.
                </>
              ),
              FR: (
                <>
                  Les vaccins sont trop nouveaux. Je ne veux pas assujettir mes enfants aux vaccins si on ne sait pas ce
                  qui risque de leur arriver.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],

        cliniciansSaying: [
          {
            text: {
              EN: (
                <>
                  I know that a lot of people are uncomfortable about giving the vaccine to their kids. I get it. I
                  totally empathize. I think it&apos;s also worthwhile considering the risks that unvaccinated kids pose
                  to grandparents or older relatives. The risks they present to people in your family who are unwell or
                  have other conditions. If your kids remain unvaccinated, you will have to constantly ask yourself,
                  &lsquo;is it worth the risk of seeing them?&rsquo;.
                </>
              ),
              FR: (
                <>
                  Je sais que beaucoup de personnes n’aiment pas l’idée de faire vacciner leurs enfants. Je comprends
                  ça. Je sympathise avec eux. Je pense qu’il vaut aussi la peine de tenir compte des risques que posent
                  les enfants non vaccinés aux grands-parents et aux membres de la famille plus âgés. Il y a les risques
                  qu’ils présentent aux membres de votre famille qui ne sont pas en santé, qui sont malades. Si vos
                  enfants ne se font pas vacciner, vous allez constamment vous demander s’il vaut la peine de prendre le
                  risque de les voir.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I guess in all this we&apos;re trying to find a balance between the benefits of the vaccines in
                  protecting our kids, and the potential risk of side effects. Finding that balance, for me, is about
                  looking at both how likely is it for your kid to get COVID, AND how likely they&apos;re going to be to
                  pass it onto others. Kids are good spreaders of this disease and that&apos;s why we&apos;re focusing
                  on them at this stage of the game.
                </>
              ),
              FR: (
                <>
                  Dans tout ça, je pense qu’on doit essayer de trouver un juste équilibre entre les avantages des
                  vaccins pour la protection de nos enfants et les risques des effets secondaires. Pour moi, cet
                  équilibre exige de tenir compte dans quelle mesure vos enfants sont susceptibles d’attraper la COVID,
                  ET dans quelle mesure ils sont susceptibles de la transmettre à d’autres. Les enfants propagent cette
                  maladie rapidement et c’est pourquoi nous nous concentrons sur eux en ce moment.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // Vaccination is too risky for my kids
          {
            text: {
              EN: (
                <>
                  I&apos;m totally happy to talk about this again. I just want to leave something with you, and
                  it&apos;s the idea that there are no risk-free choices. By choosing not to be vaccinated or to get
                  vaccinated at this point, there are risks that come with both choices. And regardless of how we feel,
                  at the end of the day, whatever we choose to do, no choice in our life is risk free.
                </>
              ),
              FR: (
                <>
                  Il me fait plaisir de reprendre cette discussion. Je veux conclure en vous disant qu’au bout du
                  compte, aucun des choix ne comporte pas de risques. Que vous décidiez de ne pas vous faire vacciner ou
                  de vous faire vacciner, à ce stade-ci, chacun des deux choix comporte des risques. Et peu importe ce
                  qu’on en pense, il est important de reconnaître que malgré la décision prise, aucune des décisions
                  qu’on prend dans la vie n’est sans risque.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  You&apos;ve got to ask yourself: &lsquo;what is the risk for my kid on either side of the coin:, no
                  vaccine, or vaccine&rsquo;, right? The risk for unvaccinated kids having bad COVID outcomes is
                  generally lower. But as COVID becomes endemic in the schools, and as it mutates, there are certainly
                  risks for complications.
                </>
              ),
              FR: (
                <>
                  Vous devez vous demander : « Quels sont les risques pour mon enfant, des deux côtés de la médaille. Je
                  le fais vacciner ou non »? Le risque que les enfants non vaccinés aient de mauvaises séquelles de la
                  COVID est généralement moins grand. Mais à mesure que la COVID devient endémique dans les écoles et
                  que le virus subit des mutations, il y aura certainement des risques de complications.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // Vaccination is too risky for my kids
          {
            text: {
              EN: (
                <>
                  With the vaccine, we give kids a controlled exposure so that their bodies develop the appropriate
                  immunity. That way when they get exposed to a larger dose of COVID or the next variant &mdash; a
                  variant which may affect kids&apos; hearts much, much worse than Delta, then they&apos;ve got some
                  level of protection there, just like we do for many flu viruses.
                </>
              ),
              FR: (
                <>
                  Les vaccins permettent aux enfants d’être exposés à la maladie de manière contrôlée, ce qui permet à
                  leur corps de développer l’immunité adéquate. Ainsi, quand ils seront exposés à une plus grande dose
                  de COVID ou au prochain variant – un variant qui pourrait toucher le cœur des enfants, bien pire que
                  le Delta – ils auront un certain degré de protection, comme c’est le cas pour les nombreux virus de la
                  grippe.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I don&apos;t have small children now, but I had them once upon a time. Did I worry when my 17-year-old
                  son went for his vaccination? Yes! I&apos;d just spent a week reviewing all the data that was coming
                  out, and what it said was that this boy of mine was the perfect person to get myocarditis from mRNA
                  vaccination. Of course I was worried. I understand why you&apos;re worried. But for me, the risk of
                  him getting COVID was worse than that worry.
                </>
              ),
              FR: (
                <>
                  Je n’ai pas de jeunes enfants en ce moment, mais j’en ai déjà eu. Est-ce que je me suis inquiété quand
                  mon fils de 17 ans est allé se faire vacciner? Oui! J’ai passé une semaine à réviser toutes les
                  données qui étaient publiées, ce qui m’a fait comprendre que mon garçon était un candidat parfait à la
                  myocardite résultant d’un vaccin à ARNm. C’est certain que j’étais inquiet. Je comprends votre
                  inquiétude, mais pour moi, le risque qu’il attrape la COVID était pire que cette inquiétude.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
      },

      {
        subheading: {
          EN: "Rushed Approval Of The Vaccines For Children",
          FR: "Approbation rapide des vaccins pour les enfants",
        },
        cliniciansHearing: [
          {
            text: {
              EN: <>I think the approval/authorization for kids was rushed.</>,
              FR: <>Je pense que l’approbation ou l’autorisation des vaccins pour les enfants s’est faite trop vite.</>,
            },
            featured: false,
            image: "",
          },

          {
            text: {
              EN: (
                <>
                  They&apos;re kind of making this stuff up. It&apos;s just happening way too quickly for me to be able
                  to say, yeah, this is a good thing for my kids.
                </>
              ),
              FR: (
                <>
                  Ils inventent des histoires. Les choses se passent beaucoup trop vite pour que je puisse dire que
                  c’est une bonne chose pour mes enfants.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],

        cliniciansSaying: [
          {
            text: {
              EN: (
                <>
                  We certainly haven&apos;t seen any safety signals and there&apos;s been a lot of children around the
                  world that have been vaccinated ahead of us here in Canada, so we certainly haven&apos;t been thrown
                  any surprises, which is great to see.
                </>
              ),
              FR: (
                <>
                  On n’a certainement pas vu de signaux négatifs pour ce qui est de la sûreté des vaccins et beaucoup
                  d’enfants du monde entier ont été vaccinés avant nous ici au Canada. On n’a donc pas eu de surprises,
                  ce qui est bon à savoir.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          {
            text: {
              EN: (
                <>
                  I think, in general when we&apos;re trying to make these decisions with kids, we ask ourselves:
                  &lsquo;Do we know enough? Do we know enough about the vaccine, and how the vaccine works in kids five
                  to 11?&rsquo;. You know what? I think we know enough. We know that it was tested in 3000 kids that
                  they followed for 12 weeks. Every serious side effect that happens in vaccine studies throughout
                  history comes up within six weeks. The side effects we have seen in kids of this age are fewer than
                  the side effects that older kids get, and the serious side effects have not been seen in the five to
                  nine age group.
                </>
              ),
              FR: (
                <>
                  Je pense qu’en général, quand on essaie de prendre ces décisions avec les enfants, on se demande : «
                  Est-ce qu’on en sait assez? Est-ce qu’on en sait assez sur le vaccin et sur la manière dont le vaccin
                  fonctionne chez les enfants de cinq à onze ans »? Alors, vous savez quoi? Je pense qu’on en sait
                  assez. On sait que le vaccin a été testé chez 3 000 enfants qui ont été suivis pendant 12 semaines. En
                  six semaines, tous les effets secondaires susceptibles de surgir dans les études de vaccins ont le
                  temps de se manifester. Les effets secondaires que nous avons vus chez les enfants de ce groupe d’âge
                  sont moins prononcés que ceux des enfants plus âgés, et aucun effet secondaire grave n’a été aperçu
                  dans le groupe d’âge des cinq à neuf ans.
                </>
              ),
            },
            featured: false,
            image: "",
          },
          // Rushed approval of the vaccines for children
          {
            text: {
              EN: (
                <>
                  Do we know everything that we can about this vaccine? No. But if you&apos;re asking me personally if
                  we know enough about them to move forward with protecting the five- to eleven-year-olds so they can
                  hopefully stay in school, socialize with their friends? I think we know enough. So, if you&apos;re
                  asking for my professional opinion, and my personal opinion based on my own family experience, then on
                  both accounts, I recommend it.
                </>
              ),
              FR: (
                <>
                  Est-ce qu’on sait tout ce qu’on peut savoir sur ce vaccin? Non. Mais si vous me demandez
                  personnellement si on en sait assez pour aller de l’avant avec la protection des enfants de cinq à
                  onze ans pour qu’ils puissent, espérons-le, aller à l’école et socialiser avec leurs amis? Je pense
                  qu’on en sait assez. Donc si vous me demandez mon opinion professionnelle, et mon opinion en fonction
                  de l’expérience de ma propre famille, je le recommande dans les deux sens.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
      },

      {
        subheading: {
          EN: <>Virus &lsquo;Shedding&rsquo;</>,
          FR: <>Excrétion virale</>,
        },
        cliniciansHearing: [
          {
            text: {
              EN: (
                <>
                  What about this whole virus &lsquo;shedding&rsquo; thing? I don&apos;t want my kids passing the virus
                  to me, our family, or their friends.
                </>
              ),
              FR: (
                <>
                  Qu’en est-il de cette histoire d’excrétion virale? Je ne veux pas que mes enfants me transmettent le
                  virus ou qu’ils le transmettent aux autres membres de notre famille ou à leurs amis.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
        // Virus Shedding
        cliniciansSaying: [
          {
            text: {
              EN: (
                <>
                  <i>(On the vaccine and shedding)</i> I&apos;ve had other patients ask me about this as well. You may
                  have heard this happening with a vaccine for a totally different virus, called the rotavirus. That
                  vaccine actually contains the live virus, but the [mRNA COVID vaccines] don&apos;t contain any part of
                  the virus. So when you or your kids get the vaccine, you won&apos;t be shedding any virus. That&apos;s
                  not how these vaccines work.
                </>
              ),
              FR: (
                <>
                  (Au sujet du vaccin et de l’excrétion virale) D’autres patients m’ont posé cette question aussi. Vous
                  avez peut-être entendu parler de ça dans le cas d’un vaccin pour un virus complètement différent,
                  appelé le rotavirus. En fait, ce vaccin contient le virus actif, mais les [vaccins contre la COVID à
                  ARNm] ne contiennent aucune partie du virus. Donc si vous vous faites vacciner ou si vos enfants se
                  font vacciner, il n’y aura pas d’excrétion virale. Ces vaccins ne fonctionnent pas comme ça.
                </>
              ),
            },
            featured: false,
            image: "",
          },
        ],
      },
    ],
  },
];
