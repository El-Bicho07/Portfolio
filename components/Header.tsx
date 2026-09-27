"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/data/siteConfig";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTabActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-heading text-lg sm:text-xl font-extrabold tracking-wider text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          </span>
          <span>
            SURYAKUMAR<span className="text-[var(--accent)]">.DEV</span>
          </span>
        </Link>

        {/* Desktop Navigation Tabs (8 tabs in exact order) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const active = isTabActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-xs lg:text-sm uppercase tracking-widest font-semibold transition-all duration-200 ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent)] rounded-full glow-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-md border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-muted)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-300 shadow-sm"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--accent)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[var(--border)] px-4 pt-3 pb-6 space-y-2 mt-2 transition-all">
          {NAV_ITEMS.map((item) => {
            const active = isTabActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                  active
                    ? "bg-[var(--accent-muted)] text-[var(--accent)] border-l-4 border-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 text-xs uppercase tracking-widest font-bold rounded-lg bg-[var(--accent)] text-[var(--bg)] font-semibold shadow-md"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
