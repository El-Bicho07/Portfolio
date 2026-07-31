export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  badgeText?: string;
}

export interface SkillItem {
  name: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "Suryakumar",
  headline: "Suryakumar — Developer & AI-Assisted Builder",
  subtext: "Building software with AI-agentic workflows, not despite them. Based in Karaikudi, India.",
  location: "Karaikudi, India",
  role: "Developer & AI-Assisted Builder",
  tagline: "Building software with AI-agentic workflows, not despite them.",

  // Real About section copy
  whoIAm:
    "Student and developer based in Karaikudi, India, working primarily in Python and machine learning. Uses AI tooling deliberately—not to skip understanding, but to move faster while staying in control of the output.",
  howIWork:
    "Builds using AI agents across a few environments—Antigravity as primary IDE, Cursor, and Emergent for rapid builds. Has learned that agents will add unrequested features, so a real part of the process now is scope control—writing agent instructions that keep AI collaborators focused on exactly what's needed.",

  // Authentic Skills list (Python & ML prioritized)
  skills: [
    { name: "Python", category: "Primary Language" },
    { name: "Machine Learning", category: "Core Domain" },
    { name: "AI-Agent Tooling", category: "Antigravity & Cursor" },
    { name: "TypeScript", category: "Web Language" },
    { name: "JavaScript", category: "Web Language" },
    { name: "Next.js", category: "App Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git", category: "Version Control" },
  ],

  // Real Projects list (with exact GitHub repository links)
  projects: [
    {
      id: "habitflow",
      title: "HabitFlow",
      description:
        "Desktop-first habit tracker. React 19 + Vite 6 + Tailwind CSS v4, localStorage only (no backend), hosted on Vercel.",
      tags: ["React 19", "Vite 6", "Tailwind CSS v4", "localStorage"],
      githubUrl: "https://github.com/El-Bicho07/Habit_Tracker",
      badgeText: "Web App",
    },
    {
      id: "vestibule",
      title: "Vestibule",
      description:
        "React Native focus/app-blocker app with a calm, architectural brand. Currently in active QA.",
      tags: ["React Native", "Focus App", "Mobile UI"],
      githubUrl: "https://github.com/El-Bicho07/Vestibule-App",
      badgeText: "Active QA",
    },
    {
      id: "ipl-analytics",
      title: "IPL Player Auction Analytics Dashboard",
      description:
        "Streamlit + Plotly/Seaborn, built on a Kaggle dataset (2013–2022 IPL auctions). Multi-page architecture. Presented to an industry panel.",
      tags: ["Python", "Streamlit", "Plotly", "Kaggle Dataset"],
      githubUrl: "https://github.com/El-Bicho07/IPL_Dashboard",
      badgeText: "Analytics Dashboard",
    },
    {
      id: "repo-stack",
      title: "Repo Stack",
      description:
        "Built using Google AI Studio. Developer tool for codebase indexing and developer productivity workflows.",
      tags: ["Google AI Studio", "Python", "Dev Tooling"],
      githubUrl: "https://github.com/El-Bicho07/Repo-Stack",
      badgeText: "AI Tool",
    },
  ],
};
