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
      "Took the 16 Personalities test and explored ZenPencils (a comic site adapting real quotes into short visual stories). Picked one comic that resonated strongly and shared it publicly as part of the program's learning-in-public habit.",
    notes: [
      "Completed 16 Personalities test & reflection.",
      "Explored ZenPencils quote comics & selected key inspiration.",
      "Shared public reflection for learning-in-public practice.",
    ],
    detailReport:
      "Took the 16 Personalities test — came out as Architect (INTJ-A). For ZenPencils, picked the comic 'Procrastination,' based on Edgar Allan Poe's quote. It resonated because I'd been feeling tired and putting off my own work the week before — seeing it laid out in comic form made the pattern harder to ignore. Shared it publicly as part of the program's learning-in-public habit.",
    images: [], // No photos uploaded yet for Week 0
  },
  {
    id: "week-01",
    week: "Week 1 · Ongoing",
    date: "July 2026",
    title: "5S Workspace & Portfolio Build",
    description:
      "Introduced to the 5S workspace methodology (Sort, Set-in-order, Shine, Standardize, Sustain), rearranged and labeled the physical/digital workspace accordingly. In parallel, started building this portfolio site so Protosem work has a public home from day one.",
    notes: [
      "Implemented 5S workspace setup (Sort, Set-in-order, Shine, Standardize, Sustain).",
      "Initialized Next.js + Tailwind CSS Obsidian portfolio shell.",
      "Established public home for Protosem weekly logs.",
    ],
    detailReport:
      "5S workspace management was done at Forge — worked in a team clearing out the shutter box, where every electrical and other component needed to be sorted and labeled for easier access to tools. After that, built my own portfolio website — added the core content and hosted it on Vercel.",
    images: [], // No photos uploaded yet for Week 1
  },
];
