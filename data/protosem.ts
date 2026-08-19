export interface ProtosemSection {
  subheading: string;
  text: string;
}

export interface ProtosemEntry {
  id: string;
  weekNumber: number | string;
  week: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  description?: string;
  detailReport?: string;
  notes?: string[];
  skillsUsed?: string[];
  sections?: ProtosemSection[];
  images?: string[];
}

export const PROTOSEM_ENTRIES: ProtosemEntry[] = [
  {
    id: "week-00",
    weekNumber: 0,
    week: "Week 0",
    date: "Jul 20-24, 2026",
    title: "16 Personalities & ZenPencils Resonance",
    summary:
      "Took the 16 Personalities test and identified as an Architect (INTJ-A). Reflected on Gavin Aung Than's ZenPencils comic #218 on procrastination and shared it publicly as part of the learning-in-public habit.",
    description:
      "Took the 16 Personalities test and identified as an Architect (INTJ-A). Reflected on Gavin Aung Than's ZenPencils comic #218 on procrastination and shared it publicly as part of the learning-in-public habit.",
    content:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    detailReport:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    notes: [
      "Completed 16 Personalities test & reflection.",
      "Explored ZenPencils quote comics & selected key inspiration.",
      "Shared public reflection for learning-in-public practice.",
    ],
    skillsUsed: [
      "16 Personalities",
      "Self Reflection",
      "ZenPencils",
      "Learning in Public",
    ],
    sections: [
      {
        subheading: "16 Personalities Test",
        text: "Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting.",
      },
      {
        subheading: "ZenPencils Reflection",
        text: 'For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
      },
    ],
    images: [],
  },
  {
    id: "week-01",
    weekNumber: 1,
    week: "Week 1",
    date: "Jul 27-31, 2026",
    title: "5S Workspace & Portfolio Build",
    summary:
      "Applied the 5S workspace methodology at Forge to organize the electrical shutter box. Afterwards, built and deployed a personal portfolio website using Next.js, Tailwind CSS, and Vercel.",
    description:
      "Applied the 5S workspace methodology at Forge to organize the electrical shutter box. Afterwards, built and deployed a personal portfolio website using Next.js, Tailwind CSS, and Vercel.",
    content:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    detailReport:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    notes: [
      "Implemented 5S workspace setup (Sort, Set in Order, Shine, Standardize, Sustain).",
      "Initialized Next.js + Tailwind CSS Obsidian portfolio shell.",
      "Established public home for Protosem weekly logs.",
    ],
    skillsUsed: [
      "5S Methodology",
      "Workspace Optimization",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
    ],
    sections: [
      {
        subheading: "5S Workspace Management",
        text: "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place.",
      },
      {
        subheading: "Portfolio Website Build",
        text: "Shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
      },
    ],
    images: [],
  },
  {
    id: "week-02",
    weekNumber: 2,
    week: "Week 2",
    date: "Aug 3-7, 2026",
    title: "Frugal Innovation, Algorithms & Block-Based Dev",
    summary:
      "Attended a frugal innovation orientation by Mukesh Sud, reviewed algorithms with TED-Ed Think Like a Coder, and explored Scratch and MIT App Inventor before closing with Applied Design Thinking.",
    description:
      "Attended a frugal innovation orientation by Mukesh Sud, reviewed algorithms with TED-Ed Think Like a Coder, and explored Scratch and MIT App Inventor before closing with Applied Design Thinking.",
    content:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    detailReport:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    notes: [
      "Frugal Innovation orientation session by Mukesh Sud.",
      "Algorithms & flowcharting via TED-Ed Think Like a Coder.",
      "Block-based development with Scratch & MIT App Inventor.",
      "Applied Design Thinking, Customer Discovery & Lean Startup.",
    ],
    skillsUsed: [
      "Frugal Innovation",
      "Algorithms",
      "Flowcharting",
      "Python",
      "Scratch",
      "MIT App Inventor",
      "Design Thinking",
      "Lean Startup",
    ],
    sections: [
      {
        subheading: "Frugal Innovation Orientation",
        text: "Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation.",
      },
      {
        subheading: "Algorithms & Python Basics",
        text: 'Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics.',
      },
      {
        subheading: "Block-Based Development with Scratch",
        text: "Explored Scratch, a block-based drag-and-drop platform for building animated scenes.",
      },
      {
        subheading: "Mobile App Building with MIT App Inventor",
        text: "Moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations.",
      },
      {
        subheading: "Applied Design Thinking",
        text: "Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.",
      },
    ],
    images: [],
  },
  {
    id: "week-03",
    weekNumber: 3,
    week: "Week 3",
    date: "Aug 10-14, 2026",
    title: "Electronics Basics, Systems Thinking & Fusion 360",
    summary:
      "Explored core electronics fundamentals, systems and design thinking frameworks, Fusion 360 3D CAD modeling, and a hands-on paper rocket team activity.",
    description:
      "Explored core electronics fundamentals, systems and design thinking frameworks, Fusion 360 3D CAD modeling, and a hands-on paper rocket team activity.",
    content:
      "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors. Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes. Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay. Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints. Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won. Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
    detailReport:
      "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors. Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes. Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay. Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints. Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won. Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
    notes: [
      "Covered core electronics fundamentals, components & motor types.",
      "Explored systems thinking & 3-phase design thinking framework.",
      "Learned Fusion 360 sketch, 3D tools & Lever Bracket modeling.",
      "Participated in paper rocket activity & clay model evaluation.",
    ],
    skillsUsed: [
      "Electronics Fundamentals",
      "Fusion 360",
      "Systems Thinking",
      "Design Thinking",
      "CAD/Clay Modeling",
      "Teamwork",
    ],
    sections: [
      {
        subheading: "Electronics Basics",
        text: "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors.",
      },
      {
        subheading: "Systems Thinking and Design Thinking",
        text: "Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes.",
      },
      {
        subheading: "Fusion 360 Basics",
        text: "Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay.",
      },
      {
        subheading: "Patterns and the Lever Bracket Tutorial",
        text: "Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints.",
      },
      {
        subheading: "Paper Rocket Team Activity",
        text: "Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won.",
      },
      {
        subheading: "Clay Model and Evaluation",
        text: "Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
      },
    ],
    images: [],
  },
];
