"use client";

import React, { useState, useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import { IOT_TASKS } from "@/data/iotData";

export function TaskNavigation() {
  const [activeTask, setActiveTask] = useState<string>("task-01");
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const taskIds = IOT_TASKS.map((t) => t.id);
    let animationFrameId: number;
    let ticking = false;

    const updateActiveTask = () => {
      const READING_OFFSET = 140; // Fixed offset in pixels matching sticky header + nav height
      let currentActive = taskIds[0];

      for (const id of taskIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top has passed or reached the reading line, select this section
          if (rect.top <= READING_OFFSET) {
            currentActive = id;
          }
        }
      }

      setActiveTask((prev) => (prev !== currentActive ? currentActive : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          updateActiveTask();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate active task immediately on mount
    updateActiveTask();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Ensure active nav item is scrolled into view in horizontal navigation bar on mobile
  useEffect(() => {
    if (navContainerRef.current) {
      const activeBtn = navContainerRef.current.querySelector(
        `[data-task-id="${activeTask}"]`
      );
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTask]);

  return (
    <nav className="sticky top-20 z-40 w-full glass-card rounded-2xl p-2 sm:p-3 border border-[var(--border)] bg-[#12151E]/90 backdrop-blur-md shadow-xl my-8">
      <div
        ref={navContainerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1"
      >
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)] shrink-0 border-r border-[var(--border)] mr-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Tasks Navigation</span>
        </div>

        {IOT_TASKS.map((task) => {
          const isActive = activeTask === task.id;

          return (
            <a
              key={task.id}
              data-task-id={task.id}
              href={`#${task.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTask(task.id);
                const el = document.getElementById(task.id);
                if (el) {
                  const offset = 140; // Offset for sticky header and nav
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? "bg-[var(--accent)] text-[var(--bg)] shadow-md scale-102"
                  : "bg-[var(--bg)]/80 text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40"
              }`}
            >
              <span className="font-mono text-[10px] opacity-80">
                Task {task.number}
              </span>
              <span className="truncate max-w-[140px] sm:max-w-none">
                {task.title.split("&")[0].split("—")[0].trim()}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
