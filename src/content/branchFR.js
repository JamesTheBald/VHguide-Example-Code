import React from "react";

// Put names between <> and </> (JSX fragment tags). But set empty name values as "". (<></> is not falsy, it's a JSX constructor object)

export const branchFR = [
  {
    branchName: "Hésitations vaccinales particulières",
    branchNameShort: "Hésitations particulières",
    // branchNameShort is for narrower screens (<510px in width)
    branchNameShortest: "Hésitations particulières",
    // branchNameShortest is for the navbar pull-down menus
    linkToDetails: false,

    topic: [
      {
        topicName: (
          <>
            Inquiétudes liées <strong>à la sécurité et à la science</strong>
          </>
        ),
        topicNameShort: (
          <>
            Inquiétudes <b>de sécurité et de science</b>
          </>
        ),
        topicNameAsTitle: "Inquiétudes liées à la sécurité et à la science",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Inquiétudes liées à la science",
            subtopicNameShort: "Inquiétudes liées à la science",
            subtopicNameAsTitle: "Inquiétudes liées à la science",
            contentID: "ScienceConcerns",
          },
          {
            subtopicName: "Inquiétudes au sujet de l’altération de l’ADN par les vaccins à base d’ARNm",
            subtopicNameShort: "Inquiétudes liées à l’ADN et de l’ARNm",
            // subtopicNameShort: "Inquiétudes au sujet de l’ADN et de l’ARNm",
            subtopicNameAsTitle: "Inquiétudes au sujet de l’altération de l’ADN par les vaccins à base d’ARNm",
            contentID: "mRNAConcerns",
          },

          {
            subtopicName: "Complexité médicale",
            subtopicNameShort: "Complexité médicale",
            subtopicNameAsTitle: "Complexité médicale",
            contentID: "MedicallyComplex",
          },
          {
            subtopicName: "Inquiétudes en matière de grossesse, de fertilité ou de reproduction",
            // 
            subtopicNameShort: "Effets sur la reproduction", // Should this have the "forme physique" part?
            subtopicNameAsTitle: "Inquiétudes en matière de grossesse, de fertilité ou de reproduction",
            contentID: "ReproductiveEffects",
          },
          {
            subtopicName: "Effets secondaires des vaccins",
            subtopicNameShort: "Effets secondaires",
            subtopicNameAsTitle: "Effets secondaires des vaccins",
            contentID: "SideEffects",
          },
        ],
      },

      {
        topicName: (
          <>
            Sous l’influence <strong>de rumeurs, de complots ou de mésinformation</strong>
          </>
        ),
        topicNameShort: (
          <>
            Sous l’influence <strong>de complots</strong>
          </>
        ),
        topicNameAsTitle: "Sous l’influence de rumeurs, de complots ou de mésinformation",
        linkToDetails: true,
        subtopic: [
          {
            subtopicName: "Sous l’influence de complots",
            subtopicNameShort: "Sous l’influence de complots",
            subtopicNameAsTitle: "Sous l’influence de complots",
            contentID: "Conspiracies",
          },
        ],
      },

      {
        topicName: (
          <>
            Conflit avec <strong>les valeurs personnelles ou politiques</strong>
          </>
        ),
        topicNameShort: (
          <>
            Conflit avec <strong>les valeurs ou la politique</strong>
          </>
        ),
        topicNameAsTitle: "Conflit avec les valeurs personnelles ou politiques",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Vaccins à l’encontre du mode de vie naturel ou de la médecine douce",
            subtopicNameShort: "Naturaliste, médecine douce",
            subtopicNameAsTitle: "Vaccins à l’encontre du mode de vie naturel ou de la médecine douce",
            contentID: "Naturalist",
          },
          {
            subtopicName: "Rôle de la politique et du gouvernement dans les vaccins",
            subtopicNameShort: "Rôle de la politique et du gouvernement",
            subtopicNameAsTitle: "Rôle de la politique et du gouvernement dans les vaccins",
            contentID: "PoliticalSkeptic",
          },
        ],
      },

      {
        topicName: (
          <>
            Objections <b>religieuses ou morales</b> aux vaccins
          </>
        ),
        topicNameShort: (
          <>
            Objections <b>religieuses ou morales</b>
          </>
        ),
        topicNameAsTitle: "Objections religieuses ou morales aux vaccins",
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "Religious" }],
      },

      {
        topicName: (
          <>
            <b>Traumatisme</b> découlant d’anciennes expériences en soins de santé
          </>
        ),
        topicNameShort: (
          <>
            <b>Traumatisme</b> du système de santé
            {/* <b>Traumatisme</b> découlant du système de santé */}
          </>
        ),
        topicNameAsTitle: "Traumatisme découlant d’anciennes expériences en soins de santé",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Expérience individuelle ou personnelle négative",
            subtopicNameShort: "Traumatisme personnel",
            subtopicNameAsTitle: "Expérience individuelle ou personnelle négative",
            contentID: "PersonalTrauma",
          },
          {
            subtopicName: "Traumatisme communautaire, collectif ou historique",
            subtopicNameShort: "Traumatisme collectif historique",
            subtopicNameAsTitle: "Traumatisme communautaire, collectif ou historique",
            contentID: "GroupTrauma",
          },
        ],
      },

      {
        topicName: (
          <>
            Peur des <b>aiguilles</b>
          </>
        ),
        topicNameShort: (
          <>
            Peur des <b>aiguilles</b>
          </>
        ),
        topicNameAsTitle: "Peur des aiguilles",
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "NeedlePhobia" }],
      },
    ],
  },

  {
    branchName: "Hésitations vaccinales indifférenciées",
    branchNameShort: "Hésitations indifférenciées",
    branchNameShortest: "Hésitations indifférenciées",
    linkToDetails: true,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "",
            subtopicNameShort: "Hésitations indifférenciées",
            subtopicNameAsTitle: "Hésitations vaccinales indifférenciées",
            contentID: "Undifferentiated",
          },
        ],
      },
    ],
  },

  {
    branchName: "Aucune inquiétude au sujet de la pandémie",
    branchNameShort: "Aucune inquiétude re COVID",
    branchNameShortest: "Aucune inquiétude au sujet de la pandémie",
    linkToDetails: true,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Aucune inquiétude au sujet de la pandémie",
            subtopicNameShort: "Aucune inquiétude re COVID",
            subtopicNameAsTitle: "Aucune inquiétude au sujet de la pandémie",
            contentID: "Unconcerned",
          },
        ],
      },
    ],
  },

  {
    branchName: "Hésitations vaccinales pédiatrique",
    branchNameShort: "Hésitations vaccinales pédiatrique",
    branchNameShortest: "Hésitations vaccinales pédiatrique",
    linkToDetails: true,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Hésitations vaccinales pédiatrique",
            subtopicNameShort: "Hésitations vaccinales pédiatrique",
            subtopicNameAsTitle: "Hésitations vaccinales pédiatrique",
            contentID: "Pediatrics",
          },
        ],
      },
    ],
  },

  {
    branchName: "Exemptions médicales",
    branchNameShort: "Exemptions médicales",
    branchNameShortest: "Exemptions médicales",
    linkToDetails: false,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Exemptions médicales",
            subtopicNameShort: "Exemptions médicales",
            subtopicNameAsTitle: "Exemptions médicales",
            contentID: "MedicalExemptions",
          },
        ],
      },
    ],
  },
];
