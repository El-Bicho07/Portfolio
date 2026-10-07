"use client";

import React, { useState, useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import { IOT_TASKS } from "@/data/iotData";

export function TaskNavigation() {
  const [activeTask, setActiveTask] = useState<string>("task-01");
  const navContainerRef = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef<boolean>(false);

  useEffect(() => {
    const taskIds = IOT_TASKS.map((t) => t.id);
    let animationFrameId: number;

    const updateActiveTask = () => {
      // If user recently clicked a nav item, let click handler maintain state until scroll finishes
      if (isClickingRef.current) return;

      const READING_LINE = 160; // Reading line threshold in pixels from top of viewport
      let currentActive = taskIds[0];

      // Check if user is at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        currentActive = taskIds[taskIds.length - 1];
      } else {
        // Iterate task sections to find the one closest to or passing the reading line
        for (const id of taskIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= READING_LINE) {
              currentActive = id;
            }
          }
        }
      }

      setActiveTask((prev) => (prev !== currentActive ? currentActive : prev));
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateActiveTask);
    };

    // Calculate active task immediately on mount
    updateActiveTask();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ensure active nav item is scrolled into view inside the horizontal nav bar on mobile
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

  const handleTaskClick = (e: React.MouseEvent, taskId: string) => {
    e.preventDefault();
    isClickingRef.current = true;
    setActiveTask(taskId);

    const el = document.getElementById(taskId);
    if (el) {
      const HEADER_OFFSET = 140; // Sticky header + navigation offset
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Reset click lock after smooth scroll completes
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav className="sticky top-20 z-40 w-full glass-card rounded-2xl p-2 sm:p-3 border border-[var(--border)] bg-[#12151E]/90 backdrop-blur-md shadow-xl my-8">
      <div
        ref={navContainerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1"
      >
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)] shrink-0 border-r border-[var(--border)] mr-1 font-heading">
          <Layers className="w-3.5 h-3.5" />
          <span>Task Navigation</span>
        </div>

        {IOT_TASKS.map((task) => {
          const isActive = activeTask === task.id;

          return (
            <a
              key={task.id}
              data-task-id={task.id}
              href={`#${task.id}`}
              onClick={(e) => handleTaskClick(e, task.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? "bg-[var(--accent)] text-[var(--bg)] shadow-md scale-102"
                  : "bg-[var(--bg)]/80 text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40"
              }`}
            >
              <span className="font-mono text-[10px] opacity-80">
                Task {task.number}
              </span>
              <span className="truncate max-w-[140px] sm:max-w-none font-heading">
                {task.title.split("&")[0].split("—")[0].trim()}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
