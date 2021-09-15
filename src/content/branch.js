import React from "react";

// Put names between <> and </> (JSX fragment tags). But set empty name values as "". (<></> is not falsy, it's a JSX constructor object)

export const branch = [
  {
    branchName: "Concerned about the vaccines",
    branchNameShort: "Concerned about vaccines",
    // branchNameShort is for narrower screens (<510px in width)
    branchNameShortest: "Concerned about vaccines",
    // branchNameShortest is for the navbar pull-down menus
    linkToDetails: false,
    topic: [
      {
        topicName: (
          <>
            <b>Safety and science</b> concerns
          </>
        ),
        topicNameShort: (
          <>
            <b>Safety and science</b> concerns
          </>
        ),
        topicNameAsTitle: <>Safety and Science Concerns</>,
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: <>Concerns about the science</>,
            subtopicNameShort: <>Concerns about the science</>,
            subtopicNameAsTitle: <>Concerns About the Science</>,
            contentID: "ScienceConcerns",
          },
          {
            subtopicName: <>Worried that mRNA vaccines could alter their DNA</>,
            subtopicNameShort: <>Worried about DNA/mRNA</>,
            subtopicNameAsTitle: <>Worried That mRNA Vaccines Could Alter Their DNA</>,
            contentID: "mRNAConcerns",
          },

          {
            subtopicName: <>Medically complex</>,
            subtopicNameShort: <>Medically complex</>,
            subtopicNameAsTitle: <>Medically Complex</>,
            contentID: "MedicallyComplex",
          },
          {
            subtopicName: <>Reproductive or fitness impacts from the vaccines</>,
            subtopicNameShort: <>Reproductive or fitness impacts</>,
            subtopicNameAsTitle: <>Reproductive or Fitness Impacts From the Vaccines</>,
            contentID: "ReproductiveEffects",
          },
          {
            subtopicName: <>Side effects of the vaccines</>,
            subtopicNameShort: <>Side effects</>,
            subtopicNameAsTitle: <>Side Effects of the Vaccines</>,
            contentID: "SideEffects",
          },
        ],
      },

      {
        topicName: (
          <>
            Influenced by <b>rumours, conspiracies, or misinformation</b>
          </>
        ),
        topicNameShort: (
          <>
            Influenced by <b>conspiracies</b>
          </>
        ),
        topicNameAsTitle: <>Influenced by Rumours, Conspiracies, or Misinformation</>,
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
            Conflict with <b>personal or political values</b>
          </>
        ),
        topicNameShort: (
          <>
            Conflict with <b>values or politics</b>
          </>
        ),
        topicNameAsTitle: <>Conflict with Personal or Political Values</>,
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: <>Vaccines go against natural lifestyle or alternative medicine</>,
            subtopicNameShort: <>Naturalist / alternative medicine</>,
            subtopicNameAsTitle: <>Vaccines Go Against Natural Lifestyle or Alternative Medicine</>,
            contentID: "Naturalist",
          },
          {
            subtopicName: <>Politics and government involvement with vaccines</>,
            subtopicNameShort: <>Politics and government involvement</>,
            subtopicNameAsTitle: <>Politics and Government Involvement with Vaccines</>,
            contentID: "PoliticalSkeptic",
          },
        ],
      },

      {
        topicName: (
          <>
            <b>Religious or moral</b> objections to the vaccines
          </>
        ),
        topicNameShort: (
          <>
            <b>Religious or moral</b> objections
          </>
        ),
        topicNameAsTitle: <>Religious or Moral Objections to the Vaccines</>,
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "Religious" }],
      },

      {
        topicName: (
          <>
            <b>Traumatized</b> by previous healthcare experiences
          </>
        ),
        topicNameShort: (
          <>
            <b>Traumatized</b> by health system
          </>
        ),
        topicNameAsTitle: <>Traumatized by Previous Healthcare Experiences</>,
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: <>Individual or personal negative experience</>,
            subtopicNameShort: <>Personal trauma</>,
            subtopicNameAsTitle: <>Individual or Personal Negative Experience</>,
            contentID: "PersonalTrauma",
          },
          {
            subtopicName: <>Community, group, or historical trauma</>,
            subtopicNameShort: <>Group historical trauma</>,
            subtopicNameAsTitle: <>Community, Group, or Historical Trauma</>,
            contentID: "GroupTrauma",
          },
        ],
      },

      {
        topicName: (
          <>
            Afraid of <b>needles</b>
          </>
        ),
        topicNameShort: (
          <>
            Afraid of <b>needles</b>
          </>
        ),
        topicNameAsTitle: <>Afraid of Needles</>,
        linkToDetails: true,
        subtopic: [{ subtopicName: "", subtopicNameShort: "", contentID: "NeedlePhobia" }],
      },
    ],
  },

  {
    branchName: "Unconcerned about the pandemic",
    branchNameShort: "Unconcerned about the pandemic",
    branchNameShortest: "Unconcerned about pandemic",
    linkToDetails: true,
    topic: [
      {
        topicName: <></>,
        topicNameShort: <></>,
        topicNameAsTitle: <></>,
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: <>No concerns about the pandemic</>,
            subtopicNameShort: <>No concerns about COVID</>,
            subtopicNameAsTitle: <>No Concerns About the Pandemic</>,
            contentID: "Unconcerned",
          },
        ],
      },
    ],
  },

  {
    branchName: "Undifferentiated vaccine hesitancies",
    branchNameShort: "Undifferentiated hesitancy",
    branchNameShortest: "Undifferentiated hesitancy",
    linkToDetails: true,
    topic: [
      {
        topicName: <></>,
        topicNameShort: <></>,
        topicNameAsTitle: <></>,
        linkToDetails: false,
        subtopic: [
          {
            subtopicName: <></>,
            subtopicNameShort: <></>,
            subtopicNameAsTitle: <>Undifferentiated Vaccine Hesitancies</>,
            contentID: "Undifferentiated",
          },
        ],
      },
    ],
  },

];
