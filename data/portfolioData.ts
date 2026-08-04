export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string; // Exact GitHub repository URL
  demoUrl?: string;
  badgeText?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "Suryakumar",
  headline: "Suryakumar — Developer & AI-Assisted Builder",
  roleTagline: "Building software with AI-agentic workflows, not despite them",
  subtext: "Building software with AI-agentic workflows, not despite them. Based in Karaikudi, India.",
  location: "Karaikudi, India",
  shortIntro:
    "Student and developer based in Karaikudi, India, working primarily in Python and machine learning. Uses AI tooling deliberately—not to skip understanding, but to move faster while staying in control of the output.",
  whoIAm:
    "Student and developer based in Karaikudi, India, working primarily in Python and machine learning. Uses AI tooling deliberately—not to skip understanding, but to move faster while staying in control of the output.",
  howIWork:
    "Builds using AI agents across Antigravity (primary IDE), Cursor, and Emergent for rapid builds. Writes precise agent instructions for strict scope control.",
  skills: [
    { name: "Python", category: "Primary Focus" },
    { name: "Machine Learning", category: "Core Domain" },
    { name: "TypeScript", category: "Web Development" },
    { name: "JavaScript", category: "Web Development" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git", category: "Tooling" },
  ] as Skill[],
  projects: [
    {
      id: "habitflow",
      title: "HabitFlow",
      description:
        "React 19 + Vite 6 + Tailwind CSS v4 habit tracker app built for daily routine tracking and streak monitoring.",
      tags: ["React 19", "Vite 6", "Tailwind CSS"],
      githubUrl: "https://github.com/El-Bicho07/Habit_Tracker",
      badgeText: "Web App",
    },
    {
      id: "vestibule",
      title: "Vestibule",
      description:
        "React Native focus and app-blocker application built to minimize digital distractions during deep work.",
      tags: ["React Native", "TypeScript", "Mobile"],
      githubUrl: "https://github.com/El-Bicho07/Vestibule-App",
      badgeText: "Mobile App",
    },
    {
      id: "ipl-dashboard",
      title: "IPL Player Auction Analytics Dashboard",
      description:
        "Streamlit + Plotly/Seaborn analytics dashboard for interactive IPL Kaggle dataset exploration and player evaluation.",
      tags: ["Python", "Streamlit", "Plotly", "Kaggle"],
      githubUrl: "https://github.com/El-Bicho07/IPL_Dashboard",
      badgeText: "Analytics",
    },
    {
      id: "repo-stack",
      title: "Repo Stack",
      description:
        "Developer productivity tool for codebase indexing and structured context extraction built using Google AI Studio.",
      tags: ["Python", "Google AI Studio", "CLI"],
      githubUrl: "https://github.com/El-Bicho07/Repo-Stack",
      badgeText: "Dev Tool",
    },
  ] as Project[],
};
