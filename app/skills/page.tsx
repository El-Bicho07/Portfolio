import React from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface SkillCard {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export default function SkillsPage() {
  const skills: SkillCard[] = [
    {
      name: "PYTHON",
      category: "Primary Focus",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.88 2C6.88 2 7.2 4.18 7.2 4.18V6.44H12.06V7.12H5.25C5.25 7.12 2 6.74 2 11.83C2 16.92 4.79 16.63 4.79 16.63H6.45V14.33C6.45 11.95 8.52 11.95 8.52 11.95H13.25C13.25 11.95 15.22 12.05 15.22 10.02V4.18C15.22 4.18 15.48 2 11.88 2ZM9.37 3.53C9.88 3.53 10.29 3.94 10.29 4.45C10.29 4.96 9.88 5.37 9.37 5.37C8.86 5.37 8.45 4.96 8.45 4.45C8.45 3.94 8.86 3.53 9.37 3.53Z"
            fill="#38BDF8"
          />
          <path
            d="M12.12 22C17.12 22 16.8 19.82 16.8 19.82V17.56H11.94V16.88H18.75C18.75 16.88 22 17.26 22 12.17C22 7.08 19.21 7.37 19.21 7.37H17.55V9.67C17.55 12.05 15.48 12.05 15.48 12.05H10.75C10.75 12.05 8.78 11.95 8.78 13.98V19.82C8.78 19.82 8.52 22 12.12 22ZM14.63 20.47C14.12 20.47 13.71 20.06 13.71 19.55C13.71 19.04 14.12 18.63 14.63 18.63C15.14 18.63 15.55 19.04 15.55 19.55C15.55 20.06 15.14 20.47 14.63 20.47Z"
            fill="#818CF8"
          />
        </svg>
      ),
    },
    {
      name: "MACHINE LEARNING",
      category: "Core Domain",
      icon: (
        <svg className="w-14 h-14 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
          <path strokeLinecap="round" strokeWidth="2" d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      ),
    },
    {
      name: "TYPESCRIPT",
      category: "Web Language",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 16.5H13.5V11H15.5V9.5H9.5V11H11.5V16.5ZM19.2 11.2C18.6 10.7 17.7 10.4 16.8 10.4C16 10.4 15.4 10.6 15 10.9C14.6 11.2 14.4 11.7 14.4 12.2C14.4 12.8 14.6 13.2 15 13.5C15.4 13.8 16.2 14.1 17.2 14.4C18.2 14.7 18.9 15.1 19.3 15.5C19.7 15.9 19.9 16.5 19.9 17.2C19.9 18.1 19.5 18.8 18.8 19.3C18.1 19.8 17.1 20 15.9 20C14.8 20 13.8 19.7 13 19.1V17.4C13.9 18.1 14.9 18.5 16 18.5C16.8 18.5 17.4 18.3 17.8 18C18.2 17.7 18.4 17.2 18.4 16.7C18.4 16.1 18.2 15.7 17.8 15.4C17.4 15.1 16.6 14.8 15.6 14.5C14.6 14.2 13.9 13.8 13.5 13.4C13.1 13 12.9 12.4 12.9 11.7C12.9 10.8 13.3 10.1 14 9.6C14.7 9.1 15.7 8.9 16.9 8.9C17.9 8.9 18.8 9.1 19.6 9.6L19.2 11.2Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "JAVASCRIPT",
      category: "Web Language",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.5 17.2C12.5 18.2 12.1 18.8 11.2 19.2C10.3 19.6 9.2 19.5 8.2 19.1V17.3C8.9 17.6 9.6 17.8 10.2 17.8C10.7 17.8 11 17.6 11 17.2C11 16.8 10.7 16.5 9.9 16.2C8.9 15.8 8.3 15.4 7.9 14.9C7.5 14.4 7.3 13.7 7.3 12.9C7.3 11.8 7.7 11 8.5 10.4C9.3 9.8 10.4 9.6 11.6 9.7C12.5 9.7 13.3 9.9 14 10.3L13.3 11.8C12.7 11.5 12.1 11.3 11.5 11.3C10.9 11.3 10.6 11.5 10.6 11.8C10.6 12.1 10.9 12.4 11.7 12.7C12.7 13.1 13.4 13.5 13.8 14C14.2 14.5 14.4 15.2 14.4 16.1C14.4 16.5 14.3 16.9 14.1 17.3M19.8 14.5V19.4H17.8V14.8C17.8 14.2 17.7 13.7 17.4 13.4C17.1 13.1 16.6 12.9 16 12.9C15.4 12.9 14.9 13.1 14.5 13.5V19.4H12.5V9.9H14.5V11.2C15.1 10.3 16 9.8 17.2 9.8C18 9.8 18.6 10 19.1 10.5C19.6 11 19.8 11.7 19.8 12.6V14.5Z" fill="#000000" />
        </svg>
      ),
    },
    {
      name: "NEXT.JS",
      category: "App Framework",
      icon: (
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeWidth="2" d="M9 16V8l8 9V8" />
        </svg>
      ),
    },
    {
      name: "TAILWIND CSS",
      category: "Styling System",
      icon: (
        <svg className="w-14 h-14 text-[#06B6D4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "GIT",
      category: "Version Control",
      icon: (
        <svg className="w-14 h-14 text-[#F05032]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.53 10.61l-8.14-8.14a2.76 2.76 0 00-3.9 0L7.42 4.54l2.45 2.45c.61-.21 1.32-.07 1.8.41.49.49.62 1.22.41 1.83l2.36 2.36c.61-.21 1.34-.08 1.83.41.68.68.68 1.79 0 2.47a1.75 1.75 0 01-2.47 0 1.77 1.77 0 01-.41-1.83l-2.22-2.22v5.71c.29.13.54.34.72.61.46.68.32 1.6-.32 2.11a1.75 1.75 0 01-2.47 0c-.68-.68-.68-1.79 0-2.47.27-.27.62-.43 1-.48v-5.78c-.38-.05-.73-.21-1-.48a1.77 1.77 0 01-.41-1.83L6.03 5.92 2.47 9.48a2.76 2.76 0 000 3.9l8.14 8.14c1.08 1.08 2.82 1.08 3.9 0l7.02-7.02c1.07-1.07 1.07-2.81 0-3.89z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 space-y-10">
      {/* Page Title with Portfolio Base Accent Vertical Bar */}
      <RevealOnScroll delayMs={0}>
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-10 sm:h-12 bg-[var(--accent)] rounded-full glow-accent" />
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-[var(--text-primary)] uppercase">
            Skills
          </h1>
        </div>
      </RevealOnScroll>

      {/* Grid of Dark Square Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {skills.map((skill, idx) => (
          <RevealOnScroll key={skill.name} delayMs={40 * (idx + 1)}>
            <div className="glass-card rounded-2xl p-6 border border-[var(--border)] bg-[#12151E] flex flex-col items-center justify-center space-y-5 hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 shadow-xl group aspect-square">
              <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {skill.icon}
              </div>
              <div className="text-center space-y-0.5">
                <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors uppercase block">
                  {skill.name}
                </span>
                <span className="text-[9px] text-[var(--text-secondary)] block">
                  {skill.category}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
