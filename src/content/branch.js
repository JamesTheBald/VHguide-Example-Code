import React from "react";

// Put names between <> and </> (JSX fragment tags). But set empty name values as "". (<></> is not falsy, it's a JSX constructor object)

export const branch = [
  {
    branchName: "Specific vaccine hesitancies",
    branchNameShort: "Specific vaccine hesitancies",
    // branchNameShort is for narrower screens (<510px in width)
    branchNameShortest: "Specific vaccine hesitancies",
    // branchNameShortest is for the navbar pull-down menus
    linkToDetails: false,
    topic: [
      {
        topicName: (
          <>
            <strong>Safety and science</strong> concerns
          </>
        ),
        topicNameShort: (
          <>
            <strong>Safety &amp; science</strong> concerns
          </>
        ),
        topicNameAsTitle: "Safety and Science Concerns",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Concerns about the science",
            subtopicNameShort: "Concerns about the science",
            subtopicNameAsTitle: "Concerns About the Science",
            contentID: "ScienceConcerns",
          },
          {
            subtopicName: "Worried that mRNA vaccines could alter their DNA",
            subtopicNameShort: "Worried about DNA/mRNA",
            subtopicNameAsTitle: "Worried That mRNA Vaccines Could Alter Their DNA",
            contentID: "mRNAConcerns",
          },

          {
            subtopicName: "Medically complex",
            subtopicNameShort: "Medically complex",
            subtopicNameAsTitle: "Medically Complex",
            contentID: "MedicallyComplex",
          },
          {
            subtopicName: "Reproductive or fitness impacts from the vaccines",
            subtopicNameShort: "Reproductive / fitness impacts",
            subtopicNameAsTitle: "Reproductive or Fitness Impacts From the Vaccines",
            contentID: "ReproductiveEffects",
          },
          {
            subtopicName: "Side effects of the vaccines",
            subtopicNameShort: "Side effects",
            subtopicNameAsTitle: "Side Effects of the Vaccines",
            contentID: "SideEffects",
          },
        ],
      },

      {
        topicName: (
          <>
            Influenced by <strong>rumours, conspiracies, or misinformation</strong>
          </>
        ),
        topicNameShort: (
          <>
            Influenced by <strong>conspiracies</strong>
          </>
        ),
        topicNameAsTitle: "Influenced by Rumours, Conspiracies, or Misinformation",
        linkToDetails: true,
        subtopic: [
          {
            subtopicName: "Influenced by conspiracies",
            subtopicNameShort: "Influenced by conspiracies",
            subtopicNameAsTitle: "Influenced by Rumours, Conspiracies, or Misinformation",
            contentID: "Conspiracies",
          },
        ],
      },

      {
        topicName: (
          <>
            Conflict with <strong>personal or political values</strong>
          </>
        ),
        topicNameShort: (
          <>
            Conflicting <strong>values or politics</strong>
          </>
        ),
        topicNameAsTitle: "Conflict with Personal or Political Values",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Vaccines go against natural lifestyle or alternative medicine",
            subtopicNameShort: "Naturalist/alternative medicine",
            subtopicNameAsTitle: "Vaccines Go Against Natural Lifestyle or Alternative Medicine",
            contentID: "Naturalist",
          },
          {
            subtopicName: "Politics and government involvement with vaccines",
            subtopicNameShort: "Politics and govt involvement",
            subtopicNameAsTitle: "Politics and Government Involvement with Vaccines",
            contentID: "PoliticalSkeptic",
          },
        ],
      },

      {
        topicName: (
          <>
            <strong>Religious or moral</strong> objections to the vaccines
          </>
        ),
        topicNameShort: (
          <>
            <strong>Religious or moral</strong> objections
          </>
        ),
        topicNameAsTitle: "Religious or Moral Objections to the Vaccines",
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "Religious" }],
      },

      {
        topicName: (
          <>
            <strong>Traumatized</strong> by previous healthcare experiences
          </>
        ),
        topicNameShort: (
          <>
            <strong>Traumatized</strong> by health system
          </>
        ),
        topicNameAsTitle: "Traumatized by Previous Healthcare Experiences",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Individual or personal negative experience",
            subtopicNameShort: "Personal trauma",
            subtopicNameAsTitle: "Individual or Personal Negative Experience",
            contentID: "PersonalTrauma",
          },
          {
            subtopicName: "Community, group, or historical trauma",
            subtopicNameShort: "Group historical trauma",
            subtopicNameAsTitle: "Community, Group, or Historical Trauma",
            contentID: "GroupTrauma",
          },
        ],
      },

      {
        topicName: (
          <>
            Afraid of <strong>needles</strong>
          </>
        ),
        topicNameShort: (
          <>
            Afraid of <strong>needles</strong>
          </>
        ),
      topicNameAsTitle:   "Afraid of Needles",
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "NeedlePhobia" }],
      },
    ],
  },

  {
    branchName: "Undifferentiated vaccine hesitancies",
    branchNameShort: "Undifferentiated hesitancies",
    branchNameShortest: "Undifferentiated hesitancies",
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
            subtopicNameShort: "Undifferentiated Hesitancies",
            subtopicNameAsTitle: "Undifferentiated Vaccine Hesitancies",
            contentID: "Undifferentiated",
          },
        ],
      },
    ],
  },

  {
    branchName: "No concerns about the pandemic",
    branchNameShort: "No concerns about the pandemic",
    branchNameShortest: "No concerns about the pandemic",
    linkToDetails: true,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "No concerns about the pandemic",
            subtopicNameShort: "No concerns about COVID",
            subtopicNameAsTitle: "No Concerns About the Pandemic",
            contentID: "Unconcerned",
          },
        ],
      },
    ],
  },

  {
    branchName: "Pediatric vaccine hesitancies",
    branchNameShort: "Pediatric vaccine hesitancies",
    branchNameShortest: "Pediatric hesitancies",
    linkToDetails: true,
    topic: [
      {
        topicName: "",
        topicNameShort: "",
        topicNameAsTitle: "",
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: "Pediatric Vaccine Hesitancies",
            subtopicNameShort: "Pediatric Hesitancies",
            subtopicNameAsTitle: "Pediatric Vaccine Hesitancies",
            contentID: "Pediatrics",
          },
        ],
      },
    ],
  },
];
