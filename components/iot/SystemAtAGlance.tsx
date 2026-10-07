"use client";

import React from "react";
import {
  Cpu,
  Globe,
  Radio,
  Zap,
  Database,
  FileSpreadsheet,
  ArrowRight,
  Activity,
  Sliders,
} from "lucide-react";

export function SystemAtAGlance() {
  const nodes = [
    {
      id: "esp32",
      number: "01",
      name: "ESP32 SoC",
      sub: "Microcontroller Node",
      icon: Cpu,
      tag: "Hardware Edge",
    },
    {
      id: "http",
      number: "02",
      name: "Local HTTP Server",
      sub: "Port 80 TCP Listener",
      icon: Globe,
      tag: "Local Socket",
    },
    {
      id: "mqtt",
      number: "03",
      name: "MQTT / Adafruit IO",
      sub: "Port 1883 Pub/Sub Broker",
      icon: Radio,
      tag: "Cloud Pub/Sub",
    },
    {
      id: "ifttt",
      number: "04",
      name: "IFTTT Engine",
      sub: "Event Automation Applet",
      icon: Zap,
      tag: "Cloud Event",
    },
    {
      id: "firebase",
      number: "05",
      name: "Firebase RTDB",
      sub: "NoSQL WebSocket State",
      icon: Database,
      tag: "Cloud Telemetry",
    },
    {
      id: "export",
      number: "06",
      name: "Logging & CSV",
      sub: "Browser Dataset Download",
      icon: FileSpreadsheet,
      tag: "Data Analytics",
    },
  ];

  return (
    <section className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] bg-[#12151E] space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
            <Activity className="w-4 h-4 text-[var(--accent)]" />
            <span>System Architecture at a Glance</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[var(--text-primary)]">
            End-to-End Node Pipeline & Protocol Routing
          </h2>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg)] px-3 py-1.5 rounded-lg border border-[var(--border)] self-start sm:self-auto">
          6 Architectural Stages
        </span>
      </div>

      {/* Unified Pipeline Flow Strip (Mobile horizontally scrollable) */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase font-bold text-[var(--text-secondary)]">
          System Node Sequence
        </span>
        <div className="overflow-x-auto pb-3 pt-1 scrollbar-thin">
          <div className="flex items-center gap-3 min-w-[760px]">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={node.id}>
                  <div className="flex-1 p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] space-y-2 hover:border-[var(--accent)]/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                        {node.number}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30">
                        {node.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                        {node.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-[var(--text-secondary)] block truncate">
                      {node.sub}
                    </span>
                  </div>

                  {idx < nodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] shrink-0 opacity-40" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Separation of Control Paths vs Telemetry Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Control Path Card */}
        <div className="p-4 rounded-xl bg-[#0E1017] border border-[var(--border)] space-y-3">
          <div className="flex items-center justify-between border-b border-[var(--border)]/60 pb-2.5">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-sky-400" />
              <h3 className="text-xs font-bold font-heading text-sky-400 uppercase tracking-wider">
                Control & Actuation Path
              </h3>
            </div>
            <span className="text-[10px] font-mono text-sky-400/80 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              Downstream
            </span>
          </div>

          <div className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Local HTTP:</strong> Web browser GET `/led/on` $\rightarrow$ ESP32 GPIO 2 (LED).
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Cloud MQTT:</strong> Adafruit IO Dashboard $\rightarrow$ Topic `relay-control` $\rightarrow$ ESP32 GPIO 4 (Relay).
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Event Automation:</strong> IFTTT `If Activate scene` $\rightarrow$ Adafruit IO `bulb-control` (`ON`) $\rightarrow$ ESP32 Relay.
              </span>
            </div>
          </div>
        </div>

        {/* Telemetry / Data Path Card */}
        <div className="p-4 rounded-xl bg-[#0E1017] border border-[var(--border)] space-y-3">
          <div className="flex items-center justify-between border-b border-[var(--border)]/60 pb-2.5">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-bold font-heading text-emerald-400 uppercase tracking-wider">
                Telemetry & Analytics Path
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Upstream
            </span>
          </div>

          <div className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Sensor Sampling:</strong> DHT11 (GPIO 14) + LDR Analog (GPIO 34 ADC) sampled every 5s.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Firebase RTDB:</strong> WebSocket stream to `/sensorData` & `/history/$pushId`.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span>
                <strong className="text-[var(--text-primary)]">Dataset Analytics:</strong> Next.js dashboard parses `/history` JSON into downloadable CSV files.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
