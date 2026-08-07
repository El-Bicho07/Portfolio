export interface ProtosemUpdate {
  id: string;
  week: string;
  date: string;
  title: string;
  description: string;
  notes?: string[];
  images?: string[]; // Array of image relative paths e.g. ["/protosem/photo.jpg"]
  detailReport?: string; // Full detailed report text for modal view
}

export const PROTOSEM_UPDATES: ProtosemUpdate[] = [
  {
    id: "week-00",
    week: "Week 0 · Kickoff",
    date: "July 2026",
    title: "16 Personalities & ZenPencils Resonance",
    description:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    notes: [
      "Completed 16 Personalities test & reflection.",
      "Explored ZenPencils quote comics & selected key inspiration.",
      "Shared public reflection for learning-in-public practice.",
    ],
    detailReport:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    images: [],
  },
  {
    id: "week-01",
    week: "Week 1 · Ongoing",
    date: "July 2026",
    title: "5S Workspace & Portfolio Build",
    description:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    notes: [
      "Implemented 5S workspace setup (Sort, Set in Order, Shine, Standardize, Sustain).",
      "Initialized Next.js + Tailwind CSS Obsidian portfolio shell.",
      "Established public home for Protosem weekly logs.",
    ],
    detailReport:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    images: [],
  },
  {
    id: "week-02",
    week: "Week 2 · Innovation & Design Thinking",
    date: "August 2026",
    title: "Frugal Innovation, Algorithms & Block-Based Dev",
    description:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    notes: [
      "Frugal Innovation orientation session by Mukesh Sud.",
      "Algorithms & flowcharting via TED-Ed Think Like a Coder.",
      "Block-based development with Scratch & MIT App Inventor.",
      "Applied Design Thinking, Customer Discovery & Lean Startup.",
    ],
    detailReport:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    images: [],
  },
];
