"use client";

import React from "react";
import { Zap, ShieldAlert, Cpu, Layers } from "lucide-react";

export interface PinConnection {
  pin: string;
  label: string;
  component: string;
  type: "Power" | "Ground" | "Digital I/O" | "Analog / Digital" | "AC Mains";
  notes: string;
}

export interface CircuitDiagramData {
  title: string;
  description: string;
  taskId: string;
  pinTable: PinConnection[];
}

interface CircuitDiagramProps {
  data: CircuitDiagramData;
}

export function CircuitDiagram({ data }: CircuitDiagramProps) {
  return (
    <div className="glass-card rounded-xl p-5 border border-[var(--border)] bg-[#12151E] space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-heading">
            <Zap className="w-4 h-4 text-[var(--accent)]" />
            <span>Electrical Wiring & Circuit Schematic</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-heading">
            {data.title}
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg)] px-3 py-1.5 rounded-lg border border-[var(--border)] self-start sm:self-auto flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Hardware Pin Map</span>
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        {data.description}
      </p>

      {/* SVG Schematic Canvas */}
      <div className="rounded-xl border border-[var(--border)] bg-[#07090D] p-4 overflow-x-auto">
        {data.taskId === "task-01" && <Task1Schematic />}
        {(data.taskId === "task-02" || data.taskId === "task-03") && (
          <Task2And3Schematic isTask3={data.taskId === "task-03"} />
        )}
        {(data.taskId === "task-04" || data.taskId === "task-05") && (
          <Task4And5Schematic isTask5={data.taskId === "task-05"} />
        )}
      </div>

      {/* Pin Connection Table */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h5 className="text-xs font-bold text-sky-400 uppercase tracking-wider font-heading">
            Pin Interconnection Matrix
          </h5>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[#0A0B0E]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#12151E] border-b border-[var(--border)] text-[10px] font-mono uppercase font-bold text-[var(--accent)]">
                <th className="py-2.5 px-3">ESP32 Pin</th>
                <th className="py-2.5 px-3">Connected Module</th>
                <th className="py-2.5 px-3">Module Terminal</th>
                <th className="py-2.5 px-3">Signal Type</th>
                <th className="py-2.5 px-3">Electrical Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]/60 text-xs text-[var(--text-secondary)] font-mono">
              {data.pinTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#12151E]/60 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-[var(--text-primary)]">
                    <span className="px-2 py-0.5 rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30">
                      {row.pin}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-[var(--text-primary)] font-sans">{row.component}</td>
                  <td className="py-2.5 px-3 text-sky-400">{row.label}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        row.type === "Power"
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          : row.type === "Ground"
                          ? "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                          : row.type === "AC Mains"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-[11px] font-sans text-slate-300">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* High-Voltage Safety Warning */}
      {(data.taskId === "task-02" ||
        data.taskId === "task-03" ||
        data.taskId === "task-04" ||
        data.taskId === "task-05") && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs leading-relaxed">
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <span>
            <strong>Galvanic Optical Isolation:</strong> The 5V single-channel relay module incorporates an
            onboard optocoupler (PC817). Control signals from ESP32 GPIO 26 toggle an internal infrared LED,
            phototransistor-coupling the trigger to the coil without electrical continuity to the 230V AC
            mains switching contacts (COM / NO).
          </span>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   TASK 1 SVG SCHEMATIC
   -------------------------------------------------------------------------- */
function Task1Schematic() {
  return (
    <svg viewBox="0 0 760 220" className="w-full min-w-[680px] h-auto font-mono text-[11px]">
      {/* Background Grid */}
      <defs>
        <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#252A3A" />
        </pattern>
      </defs>
      <rect width="760" height="220" fill="url(#grid1)" rx="10" />

      {/* ESP32 Block */}
      <rect x="40" y="30" width="220" height="160" rx="8" fill="#151926" stroke="#00E5FF" strokeWidth="1.5" />
      <text x="150" y="55" fill="#00E5FF" fontWeight="bold" textAnchor="middle" fontSize="13">
        ESP32 DevKit V1
      </text>
      <text x="150" y="72" fill="#7E8B9B" textAnchor="middle" fontSize="10">
        38-Pin Microcontroller Node
      </text>

      {/* ESP32 Pin Labels */}
      <circle cx="260" cy="95" r="4" fill="#00E5FF" />
      <text x="248" y="99" fill="#E2E8F0" textAnchor="end" fontSize="11" fontWeight="bold">
        GPIO 2
      </text>

      <circle cx="260" cy="145" r="4" fill="#94A3B8" />
      <text x="248" y="149" fill="#94A3B8" textAnchor="end" fontSize="11">
        GND
      </text>

      <circle cx="40" cy="110" r="4" fill="#F43F5E" />
      <text x="52" y="114" fill="#F43F5E" fontSize="11">
        USB 5V (VIN)
      </text>

      {/* Wire from GPIO 2 to Resistor */}
      <path d="M 260 95 L 360 95" stroke="#00E5FF" strokeWidth="2" fill="none" />
      <text x="310" y="85" fill="#00E5FF" textAnchor="middle" fontSize="9">
        Signal (3.3V)
      </text>

      {/* Resistor Block */}
      <rect x="360" y="85" width="70" height="20" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="395" y="99" fill="#38BDF8" textAnchor="middle" fontSize="10" fontWeight="bold">
        220 Ω
      </text>

      {/* Wire from Resistor to LED Anode */}
      <path d="M 430 95 L 500 95" stroke="#00E5FF" strokeWidth="2" fill="none" />

      {/* LED Block */}
      <circle cx="530" cy="95" r="24" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
      <polygon points="522,85 522,105 540,95" fill="#10B981" />
      <line x1="540" y1="83" x2="540" y2="107" stroke="#10B981" strokeWidth="2" />
      <text x="530" y="135" fill="#10B981" textAnchor="middle" fontSize="11" fontWeight="bold">
        LED (Green/Blue)
      </text>
      <text x="510" y="80" fill="#94A3B8" fontSize="9">
        Anode (+)
      </text>
      <text x="548" y="80" fill="#94A3B8" fontSize="9">
        Cathode (-)
      </text>

      {/* Return Wire from Cathode to ESP32 GND */}
      <path d="M 554 95 L 630 95 L 630 145 L 260 145" stroke="#94A3B8" strokeWidth="2" fill="none" />
      <text x="445" y="160" fill="#94A3B8" textAnchor="middle" fontSize="9">
        Common Ground Return
      </text>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   TASK 2 & 3 SVG SCHEMATIC (ESP32 + Optocoupler Relay + AC Mains)
   -------------------------------------------------------------------------- */
function Task2And3Schematic({ isTask3 }: { isTask3: boolean }) {
  return (
    <svg viewBox="0 0 760 250" className="w-full min-w-[680px] h-auto font-mono text-[11px]">
      <rect width="760" height="250" fill="#0A0D14" rx="10" />

      {/* ESP32 Controller */}
      <rect x="30" y="35" width="200" height="180" rx="8" fill="#151926" stroke="#00E5FF" strokeWidth="1.5" />
      <text x="130" y="60" fill="#00E5FF" fontWeight="bold" textAnchor="middle" fontSize="13">
        ESP32 DevKit V1
      </text>
      <text x="130" y="78" fill="#7E8B9B" textAnchor="middle" fontSize="10">
        {isTask3 ? "IFTTT Subscriber Node" : "MQTT Client Node"}
      </text>

      {/* ESP32 Pins */}
      <circle cx="230" cy="100" r="4" fill="#00E5FF" />
      <text x="218" y="104" fill="#E2E8F0" textAnchor="end" fontSize="11" fontWeight="bold">
        GPIO 26
      </text>

      <circle cx="230" cy="140" r="4" fill="#F43F5E" />
      <text x="218" y="144" fill="#F43F5E" textAnchor="end" fontSize="11">
        VIN (5V)
      </text>

      <circle cx="230" cy="180" r="4" fill="#94A3B8" />
      <text x="218" y="184" fill="#94A3B8" textAnchor="end" fontSize="11">
        GND
      </text>

      {/* 5V Relay Module Box */}
      <rect x="330" y="35" width="180" height="180" rx="8" fill="#1A1F2C" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="420" y="60" fill="#38BDF8" fontWeight="bold" textAnchor="middle" fontSize="12">
        5V Relay Module
      </text>
      <text x="420" y="76" fill="#7E8B9B" textAnchor="middle" fontSize="9">
        Active-LOW / Opto PC817
      </text>

      {/* Relay Input Pins */}
      <circle cx="330" cy="100" r="4" fill="#00E5FF" />
      <text x="342" y="104" fill="#00E5FF" fontSize="10">
        IN (Signal)
      </text>

      <circle cx="330" cy="140" r="4" fill="#F43F5E" />
      <text x="342" y="144" fill="#F43F5E" fontSize="10">
        VCC (5V)
      </text>

      <circle cx="330" cy="180" r="4" fill="#94A3B8" />
      <text x="342" y="184" fill="#94A3B8" fontSize="10">
        GND
      </text>

      {/* Interconnecting Logic Wires */}
      <path d="M 230 100 L 330 100" stroke="#00E5FF" strokeWidth="2" fill="none" />
      <path d="M 230 140 L 330 140" stroke="#F43F5E" strokeWidth="2" fill="none" />
      <path d="M 230 180 L 330 180" stroke="#94A3B8" strokeWidth="2" fill="none" />

      {/* Relay Output Terminals */}
      <circle cx="510" cy="110" r="4" fill="#F59E0B" />
      <text x="498" y="114" fill="#F59E0B" textAnchor="end" fontSize="10">
        COM
      </text>

      <circle cx="510" cy="160" r="4" fill="#F59E0B" />
      <text x="498" y="164" fill="#F59E0B" textAnchor="end" fontSize="10">
        NO
      </text>

      {/* Optical Isolation Barrier Line */}
      <line x1="430" y1="90" x2="430" y2="190" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 3" />
      <text x="430" y="202" fill="#F43F5E" textAnchor="middle" fontSize="8">
        Optical Barrier
      </text>

      {/* 230V AC Mains & Load Fixture */}
      <rect x="590" y="35" width="140" height="180" rx="8" fill="#1F1A15" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="660" y="60" fill="#F59E0B" fontWeight="bold" textAnchor="middle" fontSize="11">
        230V AC Fixture
      </text>

      {/* Light Bulb Icon */}
      <circle cx="660" cy="110" r="18" fill="#2E2313" stroke="#FBBF24" strokeWidth="1.5" />
      <text x="660" y="114" fill="#FBBF24" textAnchor="middle" fontSize="16">
        💡
      </text>
      <text x="660" y="145" fill="#E2E8F0" textAnchor="middle" fontSize="10">
        Mains Bulb
      </text>

      {/* AC Wires */}
      <path d="M 510 110 L 590 110" stroke="#F59E0B" strokeWidth="2" fill="none" />
      <path d="M 510 160 L 630 160 L 630 180 L 690 180" stroke="#F59E0B" strokeWidth="2" fill="none" />
      <text x="550" y="103" fill="#F59E0B" fontSize="9">
        Phase Hot
      </text>
      <text x="660" y="200" fill="#94A3B8" textAnchor="middle" fontSize="9">
        Neutral Return (AC)
      </text>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   TASK 4 & 5 SVG SCHEMATIC (ESP32 + DHT11 + Digital LM393 LDR + Relay)
   -------------------------------------------------------------------------- */
function Task4And5Schematic({ isTask5 }: { isTask5: boolean }) {
  return (
    <svg viewBox="0 0 760 280" className="w-full min-w-[680px] h-auto font-mono text-[11px]">
      <rect width="760" height="280" fill="#0A0D14" rx="10" />

      {/* ESP32 Controller Center */}
      <rect x="250" y="30" width="240" height="220" rx="8" fill="#151926" stroke="#00E5FF" strokeWidth="1.5" />
      <text x="370" y="55" fill="#00E5FF" fontWeight="bold" textAnchor="middle" fontSize="13">
        ESP32 DevKit V1
      </text>
      <text x="370" y="72" fill="#7E8B9B" textAnchor="middle" fontSize="9">
        {isTask5 ? "Integrated Telemetry & Automation Hub" : "Firebase Realtime Telemetry Hub"}
      </text>

      {/* Left Sensor Modules */}
      {/* 1. DHT11 Module */}
      <rect x="20" y="30" width="160" height="95" rx="6" fill="#10232E" stroke="#0284C7" strokeWidth="1.5" />
      <text x="100" y="50" fill="#38BDF8" fontWeight="bold" textAnchor="middle" fontSize="11">
        DHT11 Sensor
      </text>
      <text x="100" y="65" fill="#7E8B9B" textAnchor="middle" fontSize="8">
        Temp & Humidity
      </text>
      <circle cx="180" cy="85" r="3.5" fill="#0284C7" />
      <text x="170" y="89" fill="#E2E8F0" textAnchor="end" fontSize="9">
        DATA (GPIO 4)
      </text>

      {/* 2. Digital LDR Module */}
      <rect x="20" y="145" width="160" height="105" rx="6" fill="#1F2418" stroke="#84CC16" strokeWidth="1.5" />
      <text x="100" y="165" fill="#A3E635" fontWeight="bold" textAnchor="middle" fontSize="11">
        Digital LDR Module
      </text>
      <text x="100" y="180" fill="#7E8B9B" textAnchor="middle" fontSize="8">
        LM393 Comparator + Trimmer
      </text>
      <circle cx="180" cy="205" r="3.5" fill="#84CC16" />
      <text x="170" y="209" fill="#E2E8F0" textAnchor="end" fontSize="9">
        DO (GPIO 34)
      </text>

      {/* ESP32 Left Pin Labels */}
      <circle cx="250" cy="85" r="3.5" fill="#0284C7" />
      <text x="260" y="89" fill="#0284C7" fontSize="10" fontWeight="bold">
        GPIO 4
      </text>

      <circle cx="250" cy="205" r="3.5" fill="#84CC16" />
      <text x="260" y="209" fill="#84CC16" fontSize="10" fontWeight="bold">
        GPIO 34
      </text>

      {/* Wires from Sensors to ESP32 */}
      <path d="M 180 85 L 250 85" stroke="#0284C7" strokeWidth="2" fill="none" />
      <path d="M 180 205 L 250 205" stroke="#84CC16" strokeWidth="2" fill="none" />

      {/* ESP32 Right Output Pin Labels */}
      <circle cx="490" cy="110" r="3.5" fill="#00E5FF" />
      <text x="480" y="114" fill="#00E5FF" textAnchor="end" fontSize="10" fontWeight="bold">
        GPIO 26
      </text>

      <circle cx="490" cy="150" r="3.5" fill="#F43F5E" />
      <text x="480" y="154" fill="#F43F5E" textAnchor="end" fontSize="9">
        VIN (5V)
      </text>

      <circle cx="490" cy="190" r="3.5" fill="#94A3B8" />
      <text x="480" y="194" fill="#94A3B8" textAnchor="end" fontSize="9">
        GND
      </text>

      {/* Right Relay Module */}
      <rect x="560" y="55" width="170" height="170" rx="8" fill="#1A1F2C" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="645" y="78" fill="#38BDF8" fontWeight="bold" textAnchor="middle" fontSize="11">
        5V Relay Module
      </text>
      <text x="645" y="93" fill="#7E8B9B" textAnchor="middle" fontSize="8">
        Active-LOW / GPIO 26
      </text>

      {/* Relay Inputs */}
      <circle cx="560" cy="110" r="3.5" fill="#00E5FF" />
      <text x="572" y="114" fill="#00E5FF" fontSize="9">
        IN
      </text>
      <circle cx="560" cy="150" r="3.5" fill="#F43F5E" />
      <text x="572" y="154" fill="#F43F5E" fontSize="9">
        VCC
      </text>
      <circle cx="560" cy="190" r="3.5" fill="#94A3B8" />
      <text x="572" y="194" fill="#94A3B8" fontSize="9">
        GND
      </text>

      {/* Wires to Relay */}
      <path d="M 490 110 L 560 110" stroke="#00E5FF" strokeWidth="2" fill="none" />
      <path d="M 490 150 L 560 150" stroke="#F43F5E" strokeWidth="2" fill="none" />
      <path d="M 490 190 L 560 190" stroke="#94A3B8" strokeWidth="2" fill="none" />
    </svg>
  );
}
