import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface ContactCardItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  actionText: string;
  icon: React.ReactNode;
}

export default function ContactPage() {
  const contactLinks: ContactCardItem[] = [
    {
      id: "email",
      title: "Email",
      subtitle: "Suryakumar2007jsk@gmail.com",
      href: "mailto:Suryakumar2007jsk@gmail.com",
      actionText: "Send Email",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      subtitle: "www.linkedin.com/in/suryakumar-jayakumar-68214432a",
      href: "https://www.linkedin.com/in/suryakumar-jayakumar-68214432a",
      actionText: "Connect on LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
        </svg>
      ),
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "github.com/El-Bicho07",
      href: "https://github.com/El-Bicho07",
      actionText: "View GitHub Profile",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto">
      {/* Header */}
      <RevealOnScroll delayMs={0}>
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] text-xs uppercase tracking-widest font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Professional Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Get In <span className="text-gradient-accent">Touch</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Feel free to connect via email, LinkedIn, or GitHub for software development opportunities and project collaborations.
          </p>
        </div>
      </RevealOnScroll>

      {/* 3 Contact Link Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactLinks.map((item, idx) => (
          <RevealOnScroll key={item.id} delayMs={150 * (idx + 1)}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card rounded-2xl p-7 border border-[var(--border)] flex flex-col justify-between h-full hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-heading text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)]/50 flex items-center justify-between text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                <span>{item.actionText}</span>
                <span>→</span>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
