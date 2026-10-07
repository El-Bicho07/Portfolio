"use client";

import React from "react";
import { Layers } from "lucide-react";

export function ProgressionMatrix() {
  const matrixData = [
    {
      task: "Task 01",
      title: "ESP32 Web Server",
      protocol: "Local HTTP (TCP Port 80)",
      hardware: "ESP32 Board + LED (GPIO 2)",
      purpose: "Local Command Control",
      capability: "Bare-metal C++ embedded web server serving HTML UI from flash",
    },
    {
      task: "Task 02",
      title: "Adafruit IO Dashboard",
      protocol: "MQTT (Plain TCP Port 1883)",
      hardware: "5V Relay + 230V Bulb (GPIO 4)",
      purpose: "Remote Off-Network Actuation",
      capability: "Asynchronous pub/sub messaging across subnets via cloud broker",
    },
    {
      task: "Task 03",
      title: "IFTTT + Adafruit IO",
      protocol: "IFTTT Webhook Applet",
      hardware: "ESP32 Relay Circuit (GPIO 4)",
      purpose: "Event-Driven Cloud Automation",
      capability: "Voice/Scene triggers ('Activate scene' -> 'bulb-control' feed)",
    },
    {
      task: "Task 04",
      title: "Firebase Telemetry UI",
      protocol: "Firebase RTDB (WebSockets)",
      hardware: "DHT11 (GPIO 14) + LDR (GPIO 34)",
      purpose: "Live Multi-Sensor Telemetry",
      capability: "Sub-second NoSQL JSON cloud streaming & Next.js UI dashboard",
    },
    {
      task: "Task 05",
      title: "Logging & CSV Analytics",
      protocol: "Firebase /history + Next.js Blob",
      hardware: "Integrated ESP32 Prototype Kit",
      purpose: "Dual-Mode Threshold Control",
      capability: "On-device light setpoint (400 ADC) & browser CSV dataset export",
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
