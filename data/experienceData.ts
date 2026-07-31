export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "protosem-trainee",
    role: "Innovation Engineer Trainee",
    organization: "Protosem Innovation Program",
    period: "Ongoing",
    description:
      "Training under the Protosem Innovation Engineer program, focused on Python, ML foundations, and AI-assisted developer workflows.",
    highlights: [
      "Focused on Python application development and machine learning foundations.",
      "Utilizing AI-assisted developer tools and agentic workflows in practical sprints.",
      "Documenting learning-in-public logs and 5S workspace methodologies.",
    ],
    link: "/protosem",
    linkText: "View Protosem Log & Weekly Updates →",
  },
];
