"use client";

import React from "react";
import { Layers } from "lucide-react";

export function ProgressionMatrix() {
  const matrixData = [
    {
      task: "Task 01",
      title: "ESP32 Web Server",
      protocol: "Local HTTP (TCP Port 80)",
      hardware: "ESP32 DevKit V1 + LED (GPIO 2)",
      purpose: "Local Subnet Command Control",
      capability: "Bare-metal C++ embedded web server serving animated robot UI from flash with async fetch('/on')",
    },
    {
      task: "Task 02",
      title: "Adafruit IO Dashboard",
      protocol: "MQTT over TCP (Port 1883)",
      hardware: "5V Opto Relay + 230V AC Bulb (GPIO 26)",
      purpose: "Remote Off-Network Relay Actuation",
      capability: "Asynchronous pub/sub over persistent socket via AdafruitIO_WiFi library & Active-LOW relay logic",
    },
    {
      task: "Task 03",
      title: "IFTTT + Adafruit IO",
      protocol: "Google Assistant & Webhooks",
      hardware: "ESP32 Relay Fixture (GPIO 26)",
      purpose: "Event-Driven Cloud Automation",
      capability: "Voice commands ('Okay Google, activate Bulb on') & CLI Webhook test harness driving feed 'esp'",
    },
    {
      task: "Task 04",
      title: "Firebase Telemetry UI",
      protocol: "Firebase RTDB (WSS/TLS WebSockets)",
      hardware: "DHT11 (GPIO 4) + Digital LDR (GPIO 34) + Relay (GPIO 26)",
      purpose: "Real-Time Telemetry & Web Dashboard",
      capability: "Authenticated BaaS with split nodes (/current telemetry vs /control commands) & auth.js/dashboard.js",
    },
    {
      task: "Task 05",
      title: "Logging & CSV Analytics",
      protocol: "Firebase /history + Client Blob",
      hardware: "Integrated Prototype (DHT11 + LM393 LDR + Relay)",
      purpose: "Dual-Mode Control & Data Export",
      capability: "On-device autonomous threshold logic, 5s time-series push logging & client-side RFC-4180 CSV exporter",
    },
  ];

  return (
    <section className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] bg-[#12151E] space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
            <Layers className="w-4 h-4 text-[var(--accent)]" />
            <span>Task Progression Matrix</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[var(--text-primary)]">
            Incremental Capability Evolution Across Tasks
          </h2>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg)] px-3 py-1.5 rounded-lg border border-[var(--border)] self-start sm:self-auto">
          Tasks 01 – 05 Comparison
        </span>
      </div>

      {/* Table Container with Horizontal Scroll on Mobile */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[#0A0B0E]">
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-[#12151E] border-b border-[var(--border)] text-[11px] font-mono uppercase font-bold text-[var(--accent)]">
              <th className="py-3 px-4">Task</th>
              <th className="py-3 px-4">Protocol / Platform</th>
              <th className="py-3 px-4">Hardware Focus</th>
              <th className="py-3 px-4">Data / Control Purpose</th>
              <th className="py-3 px-4">New Capability</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]/60 text-xs text-[var(--text-secondary)]">
            {matrixData.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#12151E]/50 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-[var(--text-primary)] whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 text-[10px] mr-2">
                    {row.task}
                  </span>
                  <span className="text-[11px] block sm:inline text-[var(--text-secondary)]">
                    {row.title}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-300 whitespace-nowrap">
                  {row.protocol}
                </td>
                <td className="py-3.5 px-4 text-[var(--text-primary)]">{row.hardware}</td>
                <td className="py-3.5 px-4 text-sky-400 font-medium">{row.purpose}</td>
                <td className="py-3.5 px-4 leading-relaxed">{row.capability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
