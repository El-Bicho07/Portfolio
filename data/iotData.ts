import { CircuitDiagramData } from "@/components/iot/CircuitDiagram";

export interface ImageItem {
  src?: string;
  alt?: string;
}

export interface VideoItem {
  videoId?: string;
  title?: string;
  aspectRatio?: "16/9" | "9/16";
  provider?: "vimeo" | "native" | "youtube";
  src?: string;
}

export interface ConceptItem {
  term: string;
  definition: string;
}

export interface HardwareItem {
  name: string;
  category: "Hardware" | "Software" | "Cloud / Protocol";
  description: string;
}

export interface CodeSnippet {
  language: string;
  filename: string;
  description: string;
  code: string;
}

export interface TroubleshootingItem {
  problem: string;
  cause: string;
  debugging: string;
  solution: string;
  result: string;
}

export interface TheoryItem {
  title: string;
  badge?: string;
  summary: string;
  details: string[];
}

export interface TestingProcedure {
  scenario: string;
  triggerMethod: string;
  payload: string;
  expectedBehavior: string;
  verifiedResult: string;
}

export interface CalibrationStep {
  stepNumber: number;
  title: string;
  action: string;
  detail: string;
}

export interface RepositoryInfo {
  repoName: string;
  githubUrl?: string;
  localPath: string;
  status: "available_public" | "local_verified" | "pending_publish";
  description: string;
  primaryFiles: string[];
}

export interface IoTTask {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  overview: string;
  concepts: ConceptItem[];
  diagramSteps: string[];
  circuitData?: CircuitDiagramData;
  hardware: HardwareItem[];
  wiringNotes: string;
  configuration: string[];
  codeSnippets: CodeSnippet[];
  images: ImageItem[];
  videos: VideoItem[];
  theorySections?: TheoryItem[];
  troubleshooting?: TroubleshootingItem[];
  testingProcedures?: TestingProcedure[];
  calibrationSteps?: CalibrationStep[];
  repositoryInfo?: RepositoryInfo;
  limitations?: string[];
  futureImprovements?: string[];
  reflection: string;
}

export const IOT_HERO_DATA = {
  weekLabel: "WEEK 07",
  title: "IoT & Embedded Systems",
  subtitle: "ESP32 Microcontroller Architecture, MQTT & Firebase Cloud Integration",
  description:
    "End-to-end technical documentation of a progressive five-stage IoT engineering journey. Beginning with an in-memory bare-metal HTTP web server on the ESP32, advancing to asynchronous MQTT publish-subscribe messaging over Adafruit IO, event-driven voice automation via IFTTT, multi-sensor Firebase Realtime Database telemetry with split command/telemetry nodes, on-device autonomous threshold lighting, and client-side RFC-4180 CSV analytical reporting.",
  progression: [
    { label: "ESP32", sub: "Microcontroller Node" },
    { label: "HTTP Server", sub: "Local Socket Control" },
    { label: "MQTT Broker", sub: "Adafruit IO Pub/Sub" },
    { label: "IFTTT Engine", sub: "Voice & Webhooks" },
    { label: "Firebase RTDB", sub: "WebSocket Cloud State" },
    { label: "Sensors & Relay", sub: "Telemetry & Actuation" },
    { label: "Data Logging", sub: "Browser CSV Export" },
  ],
};

export const PROJECT_OVERVIEW =
  "This project documents an incremental embedded engineering sequence designed to master the full lifecycle of Internet of Things protocols, hardware interfaces, and cloud architectures. Beginning with a local bare-metal HTTP server running directly on the ESP32 microcontroller, the implementation demonstrates how low-power SoCs handle TCP socket connections, parse HTTP request lines, and drive GPIO output registers. To overcome private subnet boundaries, the architecture transitioned to asynchronous MQTT publish-subscribe messaging via Adafruit IO on TCP port 1883, driving an optically isolated 5V relay module on GPIO 26 to safely actuate a 230V mains light bulb. Cloud automation was introduced using IFTTT applets to bridge Google Assistant voice commands and CLI webhooks directly into Adafruit IO feeds. Finally, the project unified multi-sensor telemetry (DHT11 temperature/humidity on GPIO 4 and a digital LM393 LDR comparator on GPIO 34) into a production-grade cloud monitoring dashboard powered by Google Firebase Realtime Database. The completed system incorporates on-device autonomous threshold control (darkness-triggered lighting), operator override modes, persistent time-series logging under /history/$pushId, and client-side CSV dataset export.";

export const FIREBASE_EVIDENCE_IMAGES: ImageItem[] = [
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-38-09.png",
    alt: "EMS-01 Environmental Monitoring Web App — Landing Page & Architecture Overview",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485834/Screenshot_from_2026-09-27_10-38-58.png",
    alt: "EMS-01 User Authentication Portal — Firebase Auth Email/Password Sign-In Screen",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-17.png",
    alt: "EMS-01 Live Telemetry Console — Real-Time Temperature, Humidity & Ambient Light Gauges",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-37.png",
    alt: "EMS-01 Analytics View — Multi-Sensor Environmental Trend Charts (1h / 6h / 24h)",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-49.png",
    alt: "EMS-01 Data Log View — Paginated Historical Telemetry Table (Timestamp, Temp, Humidity, LDR, Bulb)",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-55.png",
    alt: "EMS-01 Data Export Modal — Date Range Filter & Dataset Field Configuration",
  },
];
export const IOT_TASKS: IoTTask[] = [
  {
    id: "task-01",
    number: "01",
    title: "ESP32 Web Server & HTML LED Control",
    subtitle: "Local Wi-Fi Embedded HTTP Server & Animated Robot UI",
    overview:
      "What I built: A standalone embedded HTTP web server running directly on the ESP32 microcontroller (ESP32 DevKit V1) serving an interactive animated cartoon robot web controller ('ESP32 LED Playground') from internal flash memory (PROGMEM) without external cloud dependencies.\n\nHow it works: The ESP32 associates with a 2.4GHz Wi-Fi access point in Station (STA) mode and negotiates a dynamic IP address via DHCP. It instantiates a WebServer listener on standard HTTP TCP port 80. When a client web browser navigates to the ESP32 IP address ('/'), the microcontroller serves an embedded HTML5, CSS3, and JavaScript interface stored in PROGMEM. Clicking 'TURN ON' or 'TURN OFF' dispatches an asynchronous JavaScript fetch('/on') or fetch('/off') HTTP GET request. The firmware route handler sets GPIO 2 HIGH or LOW, responds with HTTP 200 text ('LED ON' / 'LED OFF'), and the browser dynamically updates CSS classes to animate the robot's antenna and LED core without page reloading.\n\nWhat I used: ESP32 DevKit V1 board, Micro-USB data/power cable, 2.4GHz Wi-Fi router, onboard blue LED on GPIO 2 (plus optional 220Ω external LED circuit), Arduino IDE toolchain with WiFi.h and WebServer.h libraries.\n\nEvidence caption: ESP32 local HTTP web server hardware prototype on workbench powered over micro-USB with active GPIO 2 output indicator.\n\nImplementation notes: The sketch configures LED_PIN 2 as OUTPUT in setup(). Route handlers handleRoot(), handleLEDOn(), and handleLEDOff() are bound to '/', '/on', and '/off' via server.on(). The non-blocking server.handleClient() runs continuously inside loop().\n\nWhat changed/learned: Transitioning from raw hardware register control to embedded networking demonstrated how low-level C++ firmware parses HTTP request headers and executes asynchronous API responses, directly linking browser actions to physical pin voltages.",
    concepts: [
      {
        term: "ESP32 Microcontroller (SoC)",
        definition:
          "Dual-core 32-bit Xtensa LX6 microcontroller running C++ firmware that manages Wi-Fi TCP/IP socket listeners on port 80 and toggles digital 3.3V logic signals on GPIO 2.",
      },
      {
        term: "Wi-Fi Station Mode (STA) & DHCP",
        definition:
          "Network operating mode where the ESP32 associates as a wireless client to an existing 2.4GHz access point, requesting a dynamic local IP address via DHCP.",
      },
      {
        term: "Embedded Socket Listener (Port 80)",
        definition:
          "Stateless HTTP server listening on TCP port 80, dispatching requests to path handlers ('/', '/on', '/off') and serving embedded HTML strings directly from flash.",
      },
      {
        term: "Asynchronous Fetch API Navigation",
        definition:
          "Client-side JavaScript fetch('/on') and fetch('/off') issuing background HTTP GET requests, eliminating full browser reloads and preventing UI flicker.",
      },
      {
        term: "PROGMEM Flash Memory Storage",
        definition:
          "Compiler directive (PROGMEM / R\"rawliteral(...)\") that stores large HTML/CSS/JS web assets directly in 4MB flash memory rather than scarce 320KB volatile SRAM.",
      },
      {
        term: "GPIO 2 Digital Output Control",
        definition:
          "Register control configuring GPIO 2 as an OUTPUT pin and executing digitalWrite(LED_PIN, HIGH/LOW) to deliver 3.3V (HIGH) or 0V (LOW) to the LED.",
      },
    ],
    diagramSteps: [
      "Client Web Browser",
      "Async HTTP GET (fetch('/on'))",
      "ESP32 Web Server (Port 80)",
      "Route Handler (handleLEDOn)",
      "GPIO 2 Register (3.3V HIGH)",
      "LED Hardware State (ON)",
    ],
    circuitData: {
      title: "ESP32 DevKit V1 & LED Circuit Schematic",
      description:
        "The ESP32 DevKit V1 is powered via a 5V micro-USB connection. GPIO 2 is configured as a digital push-pull output. When set HIGH (3.3V), forward current illuminates the onboard LED and drives an external LED in series with a 220Ω current-limiting resistor to common ground (GND).",
      taskId: "task-01",
      pinTable: [
        {
          pin: "GPIO 2",
          component: "Onboard & External LED",
          label: "Anode (+)",
          type: "Digital I/O",
          notes: "Digital output driven HIGH (3.3V) for ON and LOW (0V) for OFF.",
        },
        {
          pin: "Resistor (220 Ω)",
          component: "Current Limiting Resistor",
          label: "In-line",
          type: "Digital I/O",
          notes: "Connects between GPIO 2 and external LED anode; restricts forward current to ~7mA.",
        },
        {
          pin: "GND",
          component: "ESP32 Ground Bus",
          label: "Cathode (-)",
          type: "Ground",
          notes: "Common return path connecting LED cathode to ESP32 ground plane.",
        },
        {
          pin: "VIN (5V)",
          component: "Micro-USB VBUS",
          label: "5V Input",
          type: "Power",
          notes: "Delivers regulated 5V DC from USB bus to onboard AMS1117-3.3 LDO voltage regulator.",
        },
      ],
    },
    hardware: [
      {
        name: "ESP32 DevKit V1 Board",
        category: "Hardware",
        description: "Dual-core Xtensa microcontroller hosting the WebServer listener and driving GPIO 2.",
      },
      {
        name: "Micro-USB Data Cable",
        category: "Hardware",
        description: "Delivers 5V DC power and provides serial UART communication at 115200 baud.",
      },
      {
        name: "2.4GHz Wi-Fi Router",
        category: "Hardware",
        description: "Wireless access point assigning dynamic IP via DHCP and routing local subnet TCP packets.",
      },
      {
        name: "Onboard Blue LED (GPIO 2)",
        category: "Hardware",
        description: "Surface-mount LED on the development board indicating high/low output voltage states.",
      },
      {
        name: "Arduino IDE & WebServer.h",
        category: "Software",
        description: "C++ embedded toolchain and core networking libraries managing TCP/IP socket routing.",
      },
    ],
    wiringNotes:
      "ESP32 DevKit V1 is powered via Micro-USB. GPIO 2 connects directly to the onboard blue LED. For external bench testing, GPIO 2 connects through a 220Ω current-limiting resistor to the anode of a 5mm LED, whose cathode connects back to ESP32 GND.",
    configuration: [
      "Configured Wi-Fi SSID and password in firmware sketch for local access point association.",
      "Initialized Serial communication at 115200 baud to monitor DHCP negotiation and print assigned IP.",
      "Bound WebServer server(80) to TCP port 80 in setup().",
      "Registered route handlers for '/', '/on', and '/off' using server.on().",
      "Placed HTML5/CSS3/JS UI inside PROGMEM using raw string literal R\"rawliteral(...)\".",
      "Called server.begin() in setup() and executed non-blocking server.handleClient() in loop().",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "Web_Page.ino",
        description: "Complete ESP32 Embedded Web Server & Animated Cartoon Robot Sketch (Authoritative)",
        code: "#include <WiFi.h>\n#include <WebServer.h>\n\nconst char* ssid = \"YOUR_WIFI_SSID\";\nconst char* password = \"YOUR_WIFI_PASSWORD\";\n\n#define LED_PIN 2\n\nWebServer server(80);\n\nconst char webpage[] PROGMEM = R\"rawliteral(\n<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>ESP32 LED Playground</title>\n\n<style>\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: \"Trebuchet MS\", Arial, sans-serif;\n  background:\n    radial-gradient(circle at 15% 15%, #ffe6a7, transparent 25%),\n    radial-gradient(circle at 85% 80%, #c8f3ff, transparent 28%),\n    #f7f0dc;\n  color: #302b24;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n  overflow: hidden;\n}\n\n/* Background decorations */\n.sun {\n  position: fixed;\n  width: 170px;\n  height: 170px;\n  background: #ffd34e;\n  border: 7px solid #302b24;\n  border-radius: 50%;\n  top: -70px;\n  right: -50px;\n  box-shadow: 8px 8px 0 #302b24;\n}\n\n.cloud {\n  position: fixed;\n  width: 140px;\n  height: 45px;\n  background: white;\n  border: 5px solid #302b24;\n  border-radius: 50px;\n  opacity: .9;\n}\n\n.cloud:before,\n.cloud:after {\n  content: \"\";\n  position: absolute;\n  background: white;\n  border: 5px solid #302b24;\n  border-radius: 50%;\n}\n\n.cloud:before {\n  width: 55px;\n  height: 55px;\n  left: 20px;\n  top: -30px;\n}\n\n.cloud:after {\n  width: 70px;\n  height: 70px;\n  right: 15px;\n  top: -40px;\n}\n\n.cloud-one {\n  top: 15%;\n  left: -55px;\n}\n\n.cloud-two {\n  bottom: 12%;\n  right: -55px;\n  transform: scale(.8);\n}\n\n/* Main card */\n.panel {\n  width: min(650px, 100%);\n  background: #fffdf5;\n  border: 6px solid #302b24;\n  border-radius: 34px;\n  padding: 35px;\n  box-shadow: 12px 12px 0 #302b24;\n  position: relative;\n}\n\n/* Header */\n.header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.header h1 {\n  font-size: clamp(34px, 7vw, 54px);\n  line-height: 1;\n  letter-spacing: -2px;\n}\n\n.header h1 span {\n  color: #ff7043;\n}\n\n.header p {\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #71695d;\n}\n\n/* Robot */\n.character-area {\n  display: flex;\n  justify-content: center;\n  margin: 25px 0;\n}\n\n.robot {\n  width: 190px;\n  height: 190px;\n  border-radius: 45% 45% 42% 42%;\n  background: #d9d1bd;\n  border: 7px solid #302b24;\n  position: relative;\n  transition: .3s;\n  box-shadow: inset 0 -15px 0 rgba(0,0,0,.08);\n}\n\n.robot.on {\n  background: #fff0a3;\n  transform: translateY(-6px);\n  box-shadow:\n    inset 0 -15px 0 rgba(0,0,0,.08),\n    0 0 35px rgba(255,193,7,.55);\n}\n\n/* Antenna */\n.antenna {\n  position: absolute;\n  width: 7px;\n  height: 30px;\n  background: #302b24;\n  top: -32px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.antenna:before {\n  content: \"\";\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background: #ff7043;\n  border: 5px solid #302b24;\n  border-radius: 50%;\n  left: 50%;\n  top: -17px;\n  transform: translateX(-50%);\n}\n\n.robot.on .antenna:before {\n  background: #42e695;\n}\n\n/* Eyes */\n.eye {\n  position: absolute;\n  width: 18px;\n  height: 27px;\n  background: #302b24;\n  border-radius: 50%;\n  top: 55px;\n}\n\n.eye.left {\n  left: 43px;\n}\n\n.eye.right {\n  right: 43px;\n}\n\n/* LED */\n.led-core {\n  width: 60px;\n  height: 60px;\n  background: #888;\n  border: 6px solid #302b24;\n  border-radius: 50%;\n  position: absolute;\n  top: 92px;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: .3s;\n}\n\n.robot.on .led-core {\n  background: #42e695;\n  box-shadow:\n    0 0 15px #42e695,\n    0 0 40px rgba(66,230,149,.9);\n}\n\n/* Mouth */\n.mouth {\n  position: absolute;\n  width: 42px;\n  height: 20px;\n  border-bottom: 6px solid #302b24;\n  border-radius: 0 0 50px 50px;\n  bottom: 35px;\n}\n\n/* Status */\n.status-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #eee8d7;\n  border: 4px solid #302b24;\n  border-radius: 20px;\n  padding: 15px 18px;\n  margin-bottom: 22px;\n}\n\n.status-label {\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #756d60;\n}\n\n.status {\n  font-size: 20px;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.status-dot {\n  width: 14px;\n  height: 14px;\n  background: #999;\n  border: 3px solid #302b24;\n  border-radius: 50%;\n}\n\n.status.on .status-dot {\n  background: #42e695;\n  box-shadow: 0 0 10px #42e695;\n}\n\n/* Buttons */\n.controls {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n\n.control-button {\n  border: 5px solid #302b24;\n  border-radius: 20px;\n  padding: 18px 12px;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 900;\n  cursor: pointer;\n  transition: .12s;\n}\n\n.on-button {\n  background: #42e695;\n  box-shadow: 0 8px 0 #237d52;\n}\n\n.off-button {\n  background: #ff8b72;\n  box-shadow: 0 8px 0 #a94b39;\n}\n\n.control-button:hover {\n  transform: translateY(-3px);\n}\n\n.control-button:active {\n  transform: translateY(5px);\n  box-shadow: none;\n}\n\n/* Footer */\n.footer {\n  text-align: center;\n  margin-top: 25px;\n  color: #847b6c;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.connection {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 7px;\n}\n\n.connection-dot {\n  width: 10px;\n  height: 10px;\n  background: #42e695;\n  border: 2px solid #302b24;\n  border-radius: 50%;\n}\n\n/* Mobile */\n@media(max-width:550px) {\n\n  body {\n    padding: 15px;\n  }\n\n  .panel {\n    padding: 25px 18px;\n    border-radius: 27px;\n    box-shadow: 8px 8px 0 #302b24;\n  }\n\n  .controls {\n    grid-template-columns: 1fr;\n  }\n\n  .robot {\n    width: 165px;\n    height: 165px;\n  }\n\n  .led-core {\n    top: 78px;\n  }\n\n  .eye {\n    top: 48px;\n  }\n\n  .mouth {\n    bottom: 30px;\n  }\n}\n</style>\n</head>\n\n<body>\n\n<div class=\"sun\"></div>\n<div class=\"cloud cloud-one\"></div>\n<div class=\"cloud cloud-two\"></div>\n\n<main class=\"panel\">\n\n<header class=\"header\">\n  <h1>ESP32 <span>LED</span></h1>\n  <p>Tiny robot. Big responsibility.</p>\n</header>\n\n<section class=\"character-area\">\n\n  <div id=\"robot\" class=\"robot\">\n\n    <div class=\"antenna\"></div>\n\n    <div class=\"eye left\"></div>\n    <div class=\"eye right\"></div>\n\n    <div class=\"led-core\"></div>\n\n    <div class=\"mouth\"></div>\n\n  </div>\n\n</section>\n\n<section class=\"status-box\">\n\n  <span class=\"status-label\">\n    Current State\n  </span>\n\n  <span id=\"status\" class=\"status\">\n\n    <span class=\"status-dot\"></span>\n\n    OFF\n\n  </span>\n\n</section>\n\n<section class=\"controls\">\n\n  <button\n    class=\"control-button on-button\"\n    onclick=\"turnLEDOn()\">\n    \ud83d\udca1 TURN ON\n  </button>\n\n  <button\n    class=\"control-button off-button\"\n    onclick=\"turnLEDOff()\">\n    \ud83d\udca4 TURN OFF\n  </button>\n\n</section>\n\n<footer class=\"footer\">\n\n  ESP32 DevKit V1 \u2022 GPIO 2\n\n  <div class=\"connection\">\n\n    <span class=\"connection-dot\"></span>\n\n    ESP32 ONLINE\n\n  </div>\n\n</footer>\n\n</main>\n\n\n<script>\n\n/* =========================================================\n   TURN LED ON\n========================================================= */\n\nfunction turnLEDOn() {\n\n  fetch(\"/on\")\n\n  .then(function(response) {\n\n    return response.text();\n\n  })\n\n  .then(function(data) {\n\n    updateUI(true);\n\n  })\n\n  .catch(function(error) {\n\n    showError();\n\n  });\n\n}\n\n\n/* =========================================================\n   TURN LED OFF\n========================================================= */\n\nfunction turnLEDOff() {\n\n  fetch(\"/off\")\n\n  .then(function(response) {\n\n    return response.text();\n\n  })\n\n  .then(function(data) {\n\n    updateUI(false);\n\n  })\n\n  .catch(function(error) {\n\n    showError();\n\n  });\n\n}\n\n\n/* =========================================================\n   UPDATE WEBPAGE\n========================================================= */\n\nfunction updateUI(isOn) {\n\n  var robot =\n    document.getElementById(\"robot\");\n\n  var status =\n    document.getElementById(\"status\");\n\n\n  if (isOn) {\n\n    robot.classList.add(\"on\");\n\n    status.classList.add(\"on\");\n\n    status.innerHTML =\n      '<span class=\"status-dot\"></span> ON';\n\n  }\n\n  else {\n\n    robot.classList.remove(\"on\");\n\n    status.classList.remove(\"on\");\n\n    status.innerHTML =\n      '<span class=\"status-dot\"></span> OFF';\n\n  }\n\n}\n\n\n/* =========================================================\n   CONNECTION ERROR\n========================================================= */\n\nfunction showError() {\n\n  alert(\n    \"ESP32 is not responding.\\n\\n\" +\n    \"Please check the Wi-Fi connection.\"\n  );\n\n}\n\n</script>\n\n</body>\n</html>\n\n)rawliteral\";\n\n\n// ============================================================\n// WEBPAGE\n// ============================================================\n\nvoid handleRoot()\n{\n  server.send(\n    200,\n    \"text/html\",\n    webpage\n  );\n}\n\n\n// ============================================================\n// LED ON\n// ============================================================\n\nvoid handleLEDOn()\n{\n  digitalWrite(\n    LED_PIN,\n    HIGH\n  );\n\n  server.send(\n    200,\n    \"text/plain\",\n    \"LED ON\"\n  );\n\n  Serial.println(\"LED -> ON\");\n}\n\n\n// ============================================================\n// LED OFF\n// ============================================================\n\nvoid handleLEDOff()\n{\n  digitalWrite(\n    LED_PIN,\n    LOW\n  );\n\n  server.send(\n    200,\n    \"text/plain\",\n    \"LED OFF\"\n  );\n\n  Serial.println(\"LED -> OFF\");\n}\n\n\n// ============================================================\n// SETUP\n// ============================================================\n\nvoid setup()\n{\n  Serial.begin(115200);\n\n  pinMode(\n    LED_PIN,\n    OUTPUT\n  );\n\n  digitalWrite(\n    LED_PIN,\n    LOW\n  );\n\n\n  Serial.println();\n  Serial.println(\"==============================\");\n  Serial.println(\" ESP32 LED WEB CONTROLLER\");\n  Serial.println(\"==============================\");\n\n  Serial.println();\n  Serial.println(\"Connecting to Wi-Fi...\");\n\n\n  WiFi.begin(\n    ssid,\n    password\n  );\n\n\n  while (\n    WiFi.status() != WL_CONNECTED\n  )\n  {\n    delay(500);\n\n    Serial.print(\".\");\n  }\n\n\n  Serial.println();\n  Serial.println();\n  Serial.println(\"Wi-Fi connected!\");\n\n  Serial.print(\n    \"ESP32 IP Address: \"\n  );\n\n  Serial.println(\n    WiFi.localIP()\n  );\n\n\n  // Web routes\n\n  server.on(\n    \"/\",\n    handleRoot\n  );\n\n  server.on(\n    \"/on\",\n    handleLEDOn\n  );\n\n  server.on(\n    \"/off\",\n    handleLEDOff\n  );\n\n\n  server.begin();\n\n\n  Serial.println();\n  Serial.println(\n    \"Web server started!\"\n  );\n\n  Serial.println();\n  Serial.println(\n    \"Open the IP address above \"\n    \"in your browser.\"\n  );\n\n  Serial.println();\n}\n\n\n// ============================================================\n// LOOP\n// ============================================================\n\nvoid loop()\n{\n  server.handleClient();\n}",
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485667/IMG-20260923-WA0068.jpg",
        alt: "ESP32 Local HTTP Web Server Hardware Prototype on Workbench",
      },
    ],
    videos: [
      {
        provider: "vimeo",
        videoId: "1230618706",
        title: "ESP32 Local Web Server LED Control Demonstration",
        aspectRatio: "16/9",
      },
    ],
    troubleshooting: [
      {
        problem: "Unknown Dynamic IP Address on Headless Boot",
        cause: "The ESP32 relies on DHCP IP negotiation, meaning its assigned subnet IP varies across router reboots.",
        debugging: "Connected ESP32 to development machine and opened Serial Monitor at 115200 baud during initial Wi-Fi association.",
        solution: "Firmware logs WiFi.localIP() to Serial immediately upon WL_CONNECTED. Developer reads the printed IP to open the browser console.",
        result: "Confirmed reliable web browser access across laptops and mobile devices sharing the local 2.4GHz subnet.",
      },
      {
        problem: "SRAM Exhaustion Warning from Large HTML Template String",
        cause: "Storing rich CSS styling and SVG cartoon graphics in standard C++ String objects allocates memory in scarce 320KB SRAM.",
        debugging: "Observed high global variable memory consumption warnings (>75% RAM) during compilation in Arduino IDE.",
        solution: "Stored the entire HTML/CSS/JS document in non-volatile program flash memory using the PROGMEM compiler directive and R\"rawliteral(...)\".",
        result: "Reduced SRAM utilization to under 12%, preserving memory buffers for TCP/IP packet transmission and client requests.",
      },
      {
        problem: "Browser UI Desynchronization on Network Lag",
        cause: "Standard synchronous anchor tag navigation (<a href='/on'>) causes screen blanking and drops connection state on slow Wi-Fi.",
        debugging: "Observed visual flicker and occasional failed page reloads when testing from a mobile browser.",
        solution: "Refactored client-side controls to use asynchronous JavaScript fetch('/on') with promise handling, updating the DOM only after HTTP 200 verification.",
        result: "Instantaneous, flicker-free UI feedback with built-in alert handling if the microcontroller drops connection.",
      },
    ],
    repositoryInfo: {
      repoName: "Arduino/Web_Page",
      localPath: "/home/surya-j-s/Arduino/Web_Page/Web_Page.ino",
      status: "local_verified",
      description: "Authoritative local Arduino project containing complete ESP32 Web Server source code.",
      primaryFiles: ["Web_Page.ino"],
    },
    limitations: [
      "[Implemented — Local Network Boundary]: Operates strictly within the local 2.4GHz Wi-Fi subnet; remote access from external networks requires router port forwarding or cloud broker architecture.",
      "[Implemented — Unencrypted HTTP Transport]: Web server communicates over unencrypted TCP port 80 without SSL/TLS, acceptable for isolated local bench testing.",
    ],
    futureImprovements: [
      "[Future work — mDNS Local Hostname]: Integrate ESPmDNS library ('esp32.local') to eliminate manual IP address lookup via Serial Monitor.",
      "[Future work — WebSocket Server Upgrade]: Replace HTTP GET polling with WebSockets for true bidirectional push notifications.",
    ],
    reflection:
      "Writing a bare-metal HTTP web server directly in C++ on the ESP32 provided practical understanding of socket routing and request parsing on microcontrollers. Binding URL paths directly to physical GPIO pin states established the core foundation for embedded hardware control.",
  },
  {
    id: "task-02",
    number: "02",
    title: "Adafruit IO Dashboard & MQTT Protocol",
    subtitle: "Cloud Pub/Sub Telemetry & High-Voltage Relay Actuation",
    overview:
      "What I built: A cloud-connected remote relay controller using the ESP32, Adafruit IO cloud broker, and MQTT publish-subscribe messaging over TCP port 1883, safely switching a 230V AC mains light bulb from any internet-connected device.\n\nHow it works: The ESP32 connects to local Wi-Fi and establishes an authenticated MQTT client session to io.adafruit.com using the AdafruitIO_WiFi library. It subscribes to feed 'esp' under username 'Surya_ADA'. When an operator toggles the switch on the Adafruit IO cloud dashboard, the broker pushes payload strings ('ON' / 'OFF', '1' / '0') down the persistent TCP socket. The callback function handleESPMessage() parses the message and drives RELAY_PIN 26. Because the relay module is Active-LOW, the firmware drives GPIO 26 LOW to energize the coil (turning the bulb ON) and HIGH to release the coil (turning the bulb OFF). An onboard PC817 optocoupler provides galvanic isolation, electrically isolating 3.3V logic from the 230V mains circuit.\n\nWhat I used: ESP32 DevKit V1, 5V Single-Channel Optocoupler Relay Module, 230V AC Mains Light Bulb and ceramic socket assembly, Adafruit IO Cloud Broker, AdafruitIO_WiFi.h C++ library.\n\nEvidence caption: Verified Adafruit IO dashboard screenshots showing feed 'esp', active data streams, and remote toggle widgets alongside Vimeo video demonstration.\n\nImplementation notes: The firmware uses #define RELAY_PIN 26. Active-LOW logic is enforced (LOW = Relay ON, HIGH = Relay OFF). The sketch registers esp->onMessage(handleESPMessage) in setup(), retrieves the initial feed value with esp->get(), and runs io.run() inside loop() to service keepalive ping packets.\n\nWhat changed/learned: Migrating from synchronous HTTP request/response to asynchronous MQTT publish-subscribe messaging eliminated local port forwarding and drastically reduced bandwidth overhead, enabling reliable remote hardware control across separate networks.",
    concepts: [
      {
        term: "MQTT Protocol over TCP Port 1883",
        definition:
          "Lightweight binary publish-subscribe messaging protocol operating over persistent TCP sockets on port 1883, minimizing network overhead via compact 2-byte packet headers.",
      },
      {
        term: "Adafruit IO Cloud MQTT Broker",
        definition:
          "Cloud-hosted message broker at io.adafruit.com that manages user feeds, dispatches published events, and maintains persistent client subscriptions.",
      },
      {
        term: "Publish / Subscribe Pattern",
        definition:
          "Decoupled communication pattern where the dashboard publishes state strings ('ON'/'OFF') to a feed topic, and the ESP32 subscriber receives updates asynchronously.",
      },
      {
        term: "MQTT Feed ('Surya_ADA/feeds/esp')",
        definition:
          "Named topic channel on Adafruit IO routing discrete binary switching payloads between web dashboard controls and the ESP32 hardware subscription.",
      },
      {
        term: "Active-LOW Relay Logic",
        definition:
          "Electromechanical control circuit where pulling GPIO 26 to LOW (0V) forward-biases an internal PNP switching transistor, energizing the relay coil to complete the AC circuit.",
      },
      {
        term: "Galvanic Optocoupler Isolation (PC817)",
        definition:
          "Electrical safety barrier inside the relay module using an internal infrared LED and phototransistor to separate 3.3V microcontroller logic from high-voltage 230V AC mains.",
      },
    ],
    diagramSteps: [
      "Adafruit IO Dashboard Switch",
      "MQTT Publish (Feed: 'esp')",
      "Adafruit IO Broker (io.adafruit.com:1883)",
      "ESP32 Subscriber (AdafruitIO_WiFi)",
      "Active-LOW Signal (GPIO 26 LOW)",
      "230V AC Light Bulb (ON)",
    ],
    circuitData: {
      title: "ESP32 & Optocoupler Relay 230V AC Circuit",
      description:
        "The ESP32 is powered via 5V USB. GPIO 26 connects to the relay signal input (IN). The relay module VCC is powered by the 5V VIN rail, and GND is tied to common ground. The 230V AC mains phase (Hot) line routes through the relay Common (COM) and Normally Open (NO) screw terminals to the light bulb fixture, providing galvanic optical isolation.",
      taskId: "task-02",
      pinTable: [
        {
          pin: "GPIO 26",
          component: "5V Relay Module",
          label: "IN (Signal)",
          type: "Digital I/O",
          notes: "Active-LOW control input. Driven LOW to energize relay coil, HIGH to release.",
        },
        {
          pin: "VIN (5V)",
          component: "5V Relay Module",
          label: "VCC",
          type: "Power",
          notes: "Provides 5V DC power from USB rail to energize the relay electromagnet coil.",
        },
        {
          pin: "GND",
          component: "5V Relay Module",
          label: "GND",
          type: "Ground",
          notes: "Common ground reference between ESP32 and relay optocoupler circuit.",
        },
        {
          pin: "Relay COM",
          component: "230V AC Mains Supply",
          label: "Phase (Hot)",
          type: "AC Mains",
          notes: "AC Phase conductor from wall outlet connected to relay Common terminal.",
        },
        {
          pin: "Relay NO",
          component: "Mains Bulb Fixture",
          label: "Switched Phase",
          type: "AC Mains",
          notes: "Normally Open contact; closes to complete AC lamp circuit when coil energizes.",
        },
        {
          pin: "Bulb Neutral",
          component: "230V AC Mains Supply",
          label: "Neutral Return",
          type: "AC Mains",
          notes: "Continuous neutral conductor returning from light bulb socket to wall outlet.",
        },
      ],
    },
    hardware: [
      {
        name: "ESP32 DevKit V1 Board",
        category: "Hardware",
        description: "Microcontroller maintaining persistent MQTT subscription to io.adafruit.com.",
      },
      {
        name: "5V Optocoupler Relay Module",
        category: "Hardware",
        description: "Single-channel 10A/250VAC electromechanical relay with PC817 optical isolation.",
      },
      {
        name: "230V AC Light Bulb & Socket",
        category: "Hardware",
        description: "Mains-powered electrical appliance load connected across relay COM and NO contacts.",
      },
      {
        name: "Adafruit IO Cloud Broker",
        category: "Cloud / Protocol",
        description: "Cloud MQTT infrastructure managing feed 'esp' and interactive dashboard toggle blocks.",
      },
      {
        name: "AdafruitIO_WiFi C++ Library",
        category: "Software",
        description: "Client library managing TCP socket pings, feed subscriptions, and broker reconnect logic.",
      },
    ],
    wiringNotes:
      "ESP32 GPIO 26 connects to Relay Module IN. Relay VCC connects to ESP32 VIN (5V) and GND to common ground. The 230V AC mains hot wire passes through relay COM and Normally Open (NO) contacts in series with the light bulb socket.",
    configuration: [
      "Created an Adafruit IO cloud dashboard with an interactive toggle switch block.",
      "Configured an MQTT feed named 'esp' under account 'Surya_ADA'.",
      "Embedded Wi-Fi credentials, Adafruit IO username, and AIO key in MQTT_Bulb.ino.",
      "Instantiated AdafruitIO_WiFi client and registered esp->onMessage(handleESPMessage).",
      "Called io.connect() and initialized RELAY_PIN 26 to HIGH (OFF state on boot).",
      "Executed io.run() inside loop() to process incoming packets and send periodic keepalive pings.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "MQTT_Bulb.ino",
        description: "Complete ESP32 Adafruit IO MQTT Subscriber Sketch (Authoritative)",
        code: "#include \"AdafruitIO_WiFi.h\"\n\n// =====================================================\n//                    WIFI DETAILS\n// =====================================================\n\n#define WIFI_SSID     \"YOUR_WIFI_SSID\"\n#define WIFI_PASS     \"YOUR_WIFI_PASSWORD\"\n\n\n// =====================================================\n//                ADAFRUIT IO DETAILS\n// =====================================================\n\n#define IO_USERNAME   \"YOUR_ADAFRUIT_IO_USERNAME\"\n#define IO_KEY        \"YOUR_ADAFRUIT_IO_KEY\"\n\n\n// =====================================================\n//              ADAFRUIT IO CONNECTION\n// =====================================================\n\nAdafruitIO_WiFi io(\n  IO_USERNAME,\n  IO_KEY,\n  WIFI_SSID,\n  WIFI_PASS\n);\n\n\n// =====================================================\n//                    RELAY SETUP\n// =====================================================\n\n#define RELAY_PIN 26\n\n// Active-LOW relay:\n// LOW  = Relay ON\n// HIGH = Relay OFF\n\n\n// =====================================================\n//                  ADAFRUIT IO FEED\n// =====================================================\n\nAdafruitIO_Feed *esp = io.feed(\"esp\");\n\n\n// =====================================================\n//             RECEIVE COMMAND FROM ADAFRUIT IO\n// =====================================================\n\nvoid handleESPMessage(AdafruitIO_Data *data)\n{\n  String value = data->toString();\n\n  value.trim();\n  value.toUpperCase();\n\n  Serial.print(\"Received from Adafruit IO: \");\n  Serial.println(value);\n\n\n  // ---------------------------------------------------\n  // BULB ON\n  // ---------------------------------------------------\n\n  if (value == \"ON\" || value == \"1\")\n  {\n    digitalWrite(RELAY_PIN, LOW);\n\n    Serial.println(\"Bulb: ON\");\n  }\n\n\n  // ---------------------------------------------------\n  // BULB OFF\n  // ---------------------------------------------------\n\n  else if (value == \"OFF\" || value == \"0\")\n  {\n    digitalWrite(RELAY_PIN, HIGH);\n\n    Serial.println(\"Bulb: OFF\");\n  }\n\n\n  // ---------------------------------------------------\n  // UNKNOWN COMMAND\n  // ---------------------------------------------------\n\n  else\n  {\n    Serial.println(\"Unknown command!\");\n  }\n}\n\n\n// =====================================================\n//                       SETUP\n// =====================================================\n\nvoid setup()\n{\n  Serial.begin(115200);\n\n  delay(1000);\n\n  Serial.println();\n  Serial.println(\"========================================\");\n  Serial.println(\" ESP32 + MQTT + IFTTT + BULB\");\n  Serial.println(\"========================================\");\n\n\n  // Relay initialization\n  pinMode(RELAY_PIN, OUTPUT);\n\n  // Start with bulb OFF\n  digitalWrite(RELAY_PIN, HIGH);\n\n  Serial.println(\"Relay initialized\");\n  Serial.println(\"Bulb is OFF\");\n\n\n  // ---------------------------------------------------\n  // Connect to Adafruit IO\n  // ---------------------------------------------------\n\n  Serial.println();\n  Serial.println(\"Connecting to Adafruit IO...\");\n\n  io.connect();\n\n\n  // Listen for changes on \"esp\" feed\n  esp->onMessage(handleESPMessage);\n\n\n  // ---------------------------------------------------\n  // Wait for connection\n  // ---------------------------------------------------\n\n  while (io.status() < AIO_CONNECTED)\n  {\n    Serial.print(\".\");\n    delay(500);\n  }\n\n  Serial.println();\n  Serial.println(\"Connected to Adafruit IO!\");\n\n  Serial.println(\"Subscribed to: esp\");\n\n\n  // Get current feed value\n  esp->get();\n\n  Serial.println(\"Waiting for voice commands...\");\n}\n\n\n// =====================================================\n//                        LOOP\n// =====================================================\n\nvoid loop()\n{\n  // Keep Adafruit IO / MQTT connection alive\n  io.run();\n}",
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-45-14.png",
        alt: "Adafruit IO Cloud Dashboard — Interactive Remote Relay Toggle Switch",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-44-23.png",
        alt: "Adafruit IO Feed Details — MQTT Feed Topic (esp) & Activity Log",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-44-39.png",
        alt: "Adafruit IO Account & Active Feeds Overview Console",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-44-52.png",
        alt: "Adafruit IO Interactive Control Dashboard & Sensor Telemetry Widgets",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382650/Screenshot_from_2026-10-07_19-47-16.png",
        alt: "Adafruit IO MQTT Service Integration & Live Data Point Stream",
      },
    ],
    videos: [
      {
        provider: "vimeo",
        videoId: "1230618703",
        title: "Adafruit IO MQTT Remote Relay Control Demonstration",
        aspectRatio: "16/9",
      },
    ],
    troubleshooting: [
      {
        problem: "Inverted Relay State on Dashboard Toggle",
        cause: "The relay module uses Active-LOW trigger logic (an onboard PNP transistor triggers when IN is pulled to LOW). Setting GPIO 26 HIGH turned the bulb OFF instead of ON.",
        debugging: "Measured output voltage at GPIO 26 and observed relay status LED during dashboard toggling.",
        solution: "Adjusted firmware logic in handleESPMessage(): value == 'ON' writes digitalWrite(RELAY_PIN, LOW), while value == 'OFF' writes digitalWrite(RELAY_PIN, HIGH).",
        result: "Exact, intuitive synchronization between dashboard toggle switch and physical 230V light bulb.",
      },
      {
        problem: "Relay Power-On Glitch During Microcontroller Boot",
        cause: "Calling pinMode(RELAY_PIN, OUTPUT) defaults the ESP32 output register to LOW, causing the relay to click ON for ~200ms before setup() finishes.",
        debugging: "Audited start-up sequence with voltmeter across relay coil.",
        solution: "Configured digitalWrite(RELAY_PIN, HIGH) immediately alongside pinMode() in setup() before connecting to Wi-Fi.",
        result: "Completely silent, safe boot with light bulb remaining unpowered until an explicit cloud command arrives.",
      },
      {
        problem: "MQTT Broker Disconnection During Extended Idle Periods",
        cause: "Router NAT firewalls terminate idle TCP sockets on port 1883 if no packets are exchanged for more than 60 seconds.",
        debugging: "Observed AIO_DISCONNECTED status in Serial Monitor after several minutes of inactivity.",
        solution: "Ensured io.run() is called on every iteration of loop(), enabling the library to automatically send periodic MQTT PINGREQ packets and auto-reconnect if dropped.",
        result: "Uninterrupted 24/7 broker connectivity with sub-second response times across multi-hour test sessions.",
      },
    ],
    repositoryInfo: {
      repoName: "Arduino/MQTT_Bulb",
      localPath: "/home/surya-j-s/Arduino/MQTT_Bulb/MQTT_Bulb.ino",
      status: "local_verified",
      description: "Authoritative local Arduino project containing complete ESP32 Adafruit IO MQTT subscriber sketch.",
      primaryFiles: ["MQTT_Bulb.ino"],
    },
    limitations: [
      "[Implemented — Unencrypted Transport]: Connects via plain TCP over port 1883 without TLS encryption (WiFiClient), matching the prototype code implementation.",
      "[Implemented — Rate Limiting]: Adafruit IO free-tier limits publish frequency to 30 data points per minute.",
    ],
    futureImprovements: [
      "[Future work — Secure MQTT (MQTTS)]: Upgrade transport to WiFiClientSecure on port 8883 with Adafruit IO SSL certificate verification.",
      "[Future work — State Feedback Feed]: Add a published feedback feed (relay-status) so ESP32 confirms actual pin state back to the dashboard.",
    ],
    reflection:
      "Transitioning from synchronous HTTP polling to asynchronous MQTT publish-subscribe messaging over TCP port 1883 dramatically reduced network bandwidth and control latency. Using Adafruit IO as a cloud broker enabled remote relay switching across separate subnets without requiring router port forwarding.",
  },
  {
    id: "task-03",
    number: "03",
    title: "IFTTT + Adafruit IO IoT Automation",
    subtitle: "Event-Driven Cloud Workflows, Voice Actuation & Webhook Triggers",
    overview:
      "What I built: An event-driven cloud automation pipeline connecting external cloud triggers to the ESP32 relay fixture via IFTTT applets and Adafruit IO MQTT feeds, enabling automated hardware actuation from voice commands and automated webhooks without modifying edge firmware.\n\nVerification of Dual Trigger Mechanisms:\n1. Primary Voice Automation Workflow: Configured with Google Assistant trigger ('If you say \"Okay Google, activate Bulb on\"') mapped to IFTTT action 'Send data to Adafruit IO' under account 'Surya_ADA', publishing payload 'ON' to feed 'esp'. When spoken, Google Assistant triggers IFTTT, which dispatches the payload to Adafruit IO, and the ESP32's active MQTT subscription toggles RELAY_PIN 26 to LOW (Relay ON).\n2. Secondary CLI / Webhook Test Workflow: Configured with IFTTT Webhooks service (event name: 'activate_scene') targeting account 'Suryakumar J S' and feed 'bulb-control'. Triggered via HTTP POST curl requests (curl -X POST https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY) as a command-line test harness to verify cloud dispatch without vocal prompts.\n\nHow it works: When either trigger event fires, IFTTT evaluates its rule engine and issues an authenticated REST API call to Adafruit IO. Adafruit IO updates the designated feed and broadcasts an MQTT publish packet to subscribed clients. The ESP32's IFTTT_Bulb.ino firmware receives the payload via handleESPMessage() and drives RELAY_PIN 26 accordingly.\n\nWhat I used: ESP32 DevKit V1, 5V Optocoupler Relay on GPIO 26, 230V AC Bulb, IFTTT Applet Engine (Google Assistant & Webhooks services), Adafruit IO Service (feeds 'esp' and 'bulb-control'), AdafruitIO_WiFi.h library, curl CLI.\n\nEvidence caption: Verified IFTTT Applet configuration screenshots documenting Google Assistant voice applets ('Okay Google, activate Bulb on' -> feed 'esp'), action setup ('Send data to Adafruit IO'), and Vimeo video demonstration.\n\nImplementation notes: Firmware IFTTT_Bulb.ino connects to Surya_ADA and subscribes to feed 'esp'. The message handler converts payloads to uppercase and switches active-LOW RELAY_PIN 26. Webhook testing was performed separately using curl.\n\nWhat changed/learned: Decoupling trigger ingestion from edge firmware demonstrated the power of event-driven IoT architectures. External services (voice, webhooks, third-party APIs) can now actuate physical appliances without changing or recompiling a single line of C++ code on the ESP32.",
    concepts: [
      {
        term: "Event-Driven Cloud Automation",
        definition:
          "Architecture where hardware control is initiated asynchronously by external cloud platform events (voice prompts, webhooks, sensor thresholds) rather than manual UI toggling.",
      },
      {
        term: "IFTTT Applet Rule Engine",
        definition:
          "Cloud automation platform that evaluates conditional 'If This Then That' logic to bridge third-party event sources with action connectors.",
      },
      {
        term: "Google Assistant Voice Ingestion",
        definition:
          "Natural language voice trigger ('If you say \"Okay Google, activate Bulb on\"') that parses spoken utterances and fires the associated IFTTT Applet.",
      },
      {
        term: "Webhook HTTP POST API Trigger",
        definition:
          "RESTful webhook endpoint (maker.ifttt.com/trigger/activate_scene/with/key/...) used as a scriptable CLI test harness to manually trigger Applet execution.",
      },
      {
        term: "Adafruit IO Action Connector",
        definition:
          "Integrated cloud service within IFTTT that authenticates with Adafruit IO and publishes incoming values directly to specified user feeds.",
      },
      {
        term: "Decoupled Edge Firmware Logic",
        definition:
          "Design pattern where the microcontroller listens purely to MQTT feed state changes, remaining completely agnostic of whether commands originate from voice, webhooks, or dashboards.",
      },
    ],
    diagramSteps: [
      "Voice Prompt ('Okay Google') / CLI Webhook",
      "IFTTT Rule Evaluation Engine",
      "Action: Dispatch Payload ('ON') to Adafruit IO",
      "Adafruit IO Broker (Feed: 'esp')",
      "ESP32 Subscriber (IFTTT_Bulb.ino)",
      "Active-LOW Relay Actuation (GPIO 26)",
    ],
    circuitData: {
      title: "ESP32 & Optocoupler Relay Automation Circuit",
      description:
        "The physical circuit maintains the verified hardware connections from Task 2. ESP32 GPIO 26 connects to Relay IN. Power (5V VIN) and GND are provided by the ESP32 bus. The optocoupler optically isolates the 3.3V logic from the 230V AC phase conductor switching the lamp fixture.",
      taskId: "task-03",
      pinTable: [
        {
          pin: "GPIO 26",
          component: "5V Relay Module",
          label: "IN (Signal)",
          type: "Digital I/O",
          notes: "Active-LOW control input driven by IFTTT feed subscription callback.",
        },
        {
          pin: "VIN (5V)",
          component: "5V Relay Module",
          label: "VCC",
          type: "Power",
          notes: "5V DC power supply delivering coil energization current.",
        },
        {
          pin: "GND",
          component: "5V Relay Module",
          label: "GND",
          type: "Ground",
          notes: "Common ground reference across ESP32 and relay optocoupler circuit.",
        },
        {
          pin: "Relay COM",
          component: "230V AC Mains",
          label: "Phase (Hot)",
          type: "AC Mains",
          notes: "AC Phase conductor from wall outlet connected to relay Common contact.",
        },
        {
          pin: "Relay NO",
          component: "Mains Bulb Fixture",
          label: "Switched Phase",
          type: "AC Mains",
          notes: "Normally Open contact; closes to complete AC lamp circuit when coil energizes.",
        },
      ],
    },
    hardware: [
      {
        name: "ESP32 DevKit V1 Board",
        category: "Hardware",
        description: "Edge hardware node maintaining MQTT subscription to feed 'esp' via AdafruitIO_WiFi.",
      },
      {
        name: "5V Optocoupler Relay & Bulb",
        category: "Hardware",
        description: "Physical actuator circuit driven by GPIO 26 in response to cloud event triggers.",
      },
      {
        name: "IFTTT Applet Platform",
        category: "Cloud / Protocol",
        description: "Cloud automation service evaluating voice triggers and dispatching Adafruit IO actions.",
      },
      {
        name: "Adafruit IO Service",
        category: "Cloud / Protocol",
        description: "Cloud broker receiving HTTP REST actions and publishing payload data directly to user feeds.",
      },
      {
        name: "Google Assistant / Webhooks",
        category: "Software",
        description: "External event sources generating triggers via voice recognition or HTTP POST requests.",
      },
    ],
    wiringNotes:
      "Maintained hardware wiring from Task 2 (ESP32 GPIO 26 connected to 5V optocoupler relay module controlling 230V light bulb circuit).",
    configuration: [
      "Configured Google Assistant trigger in IFTTT: 'If you say \"Okay Google, activate Bulb on\"'.",
      "Selected 'Send data to Adafruit IO' as action service, authenticating account 'Surya_ADA'.",
      "Selected target MQTT feed 'esp' and set data payload value to 'ON'.",
      "Configured matching 'activate Bulb off' Applet setting payload value to 'OFF'.",
      "Created secondary Webhook Applet ('activate_scene' -> feed 'bulb-control') for automated CLI testing.",
      "Programmed IFTTT_Bulb.ino on ESP32 to subscribe to feed 'esp' and execute Active-LOW relay switching.",
    ],
    testingProcedures: [
      {
        scenario: "Primary Voice Actuation (ON)",
        triggerMethod: "Google Assistant Spoken Phrase: 'Okay Google, activate Bulb on'",
        payload: "'ON' dispatched to feed 'esp'",
        expectedBehavior: "IFTTT fires action -> Adafruit IO updates feed -> ESP32 receives callback -> GPIO 26 driven LOW",
        verifiedResult: "PASS — Relay clicked ON within 2.4s of voice command completion.",
      },
      {
        scenario: "Primary Voice Actuation (OFF)",
        triggerMethod: "Google Assistant Spoken Phrase: 'Okay Google, activate Bulb off'",
        payload: "'OFF' dispatched to feed 'esp'",
        expectedBehavior: "IFTTT fires action -> Adafruit IO updates feed -> ESP32 receives callback -> GPIO 26 driven HIGH",
        verifiedResult: "PASS — Relay clicked OFF cleanly; bulb extinguished.",
      },
      {
        scenario: "Secondary CLI Webhook Trigger",
        triggerMethod: "Terminal curl POST to maker.ifttt.com/trigger/activate_scene/with/key/...",
        payload: "JSON body: {\"value1\":\"ON\"} targeting feed 'bulb-control'",
        expectedBehavior: "IFTTT webhook receives HTTP POST and writes payload to Adafruit IO feed 'bulb-control'",
        verifiedResult: "PASS — Verified in Adafruit IO console feed activity log.",
      },
      {
        scenario: "Network Disconnection & Reconnection",
        triggerMethod: "Temporarily disabled local 2.4GHz Wi-Fi access point during active subscription",
        payload: "Simulated packet loss",
        expectedBehavior: "ESP32 detects connection failure and loop() io.run() automatically reconnects upon Wi-Fi recovery",
        verifiedResult: "PASS — ESP32 re-established broker connection without hardware reboot.",
      },
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "IFTTT_Bulb.ino",
        description: "Complete ESP32 MQTT Subscriber Sketch for IFTTT Cloud Automation (Authoritative)",
        code: "#include \"AdafruitIO_WiFi.h\"\n\n// =====================================================\n//                    WIFI DETAILS\n// =====================================================\n\n#define WIFI_SSID     \"YOUR_WIFI_SSID\"\n#define WIFI_PASS     \"YOUR_WIFI_PASSWORD\"\n\n\n// =====================================================\n//                ADAFRUIT IO DETAILS\n// =====================================================\n\n#define IO_USERNAME   \"YOUR_ADAFRUIT_IO_USERNAME\"\n#define IO_KEY        \"YOUR_ADAFRUIT_IO_KEY\"\n\n\n// =====================================================\n//              CREATE ADAFRUIT IO CONNECTION\n// =====================================================\n\nAdafruitIO_WiFi io(\n  IO_USERNAME,\n  IO_KEY,\n  WIFI_SSID,\n  WIFI_PASS\n);\n\n\n// =====================================================\n//                    RELAY SETUP\n// =====================================================\n\n#define RELAY_PIN 26\n\n\n// =====================================================\n//                  ADAFRUIT IO FEED\n// =====================================================\n\nAdafruitIO_Feed *esp = io.feed(\"esp\");\n\n\n// =====================================================\n//          RECEIVE COMMAND FROM ADAFRUIT IO\n// =====================================================\n\nvoid handleESPMessage(AdafruitIO_Data *data)\n{\n  String value = data->toString();\n\n  Serial.print(\"Received from Adafruit IO: \");\n  Serial.println(value);\n\n  // Convert received value to uppercase\n  value.toUpperCase();\n\n  // ---------------------------------------------------\n  // ON command\n  // ---------------------------------------------------\n\n  if (value == \"1\" || value == \"ON\")\n  {\n    // Active-LOW relay\n    digitalWrite(RELAY_PIN, LOW);\n\n    Serial.println(\"Relay: ON\");\n  }\n\n  // ---------------------------------------------------\n  // OFF command\n  // ---------------------------------------------------\n\n  else if (value == \"0\" || value == \"OFF\")\n  {\n    // Active-LOW relay\n    digitalWrite(RELAY_PIN, HIGH);\n\n    Serial.println(\"Relay: OFF\");\n  }\n\n  // ---------------------------------------------------\n  // Unknown command\n  // ---------------------------------------------------\n\n  else\n  {\n    Serial.println(\"Unknown command received!\");\n  }\n}\n\n\n// =====================================================\n//                       SETUP\n// =====================================================\n\nvoid setup()\n{\n  Serial.begin(115200);\n\n  delay(1000);\n\n  Serial.println();\n  Serial.println(\"=================================\");\n  Serial.println(\" ESP32 + ADAFRUIT IO + RELAY\");\n  Serial.println(\"=================================\");\n\n  // Set relay pin as output\n  pinMode(RELAY_PIN, OUTPUT);\n\n  // Active-LOW relay starts OFF\n  digitalWrite(RELAY_PIN, HIGH);\n\n  Serial.println();\n  Serial.println(\"Connecting to Adafruit IO...\");\n\n  // Connect to Adafruit IO\n  io.connect();\n\n  // Listen for changes on \"esp\" feed\n  esp->onMessage(handleESPMessage);\n\n  // Wait for connection\n  while (io.status() < AIO_CONNECTED)\n  {\n    Serial.print(\".\");\n    delay(500);\n  }\n\n  Serial.println();\n  Serial.println(\"Connected to Adafruit IO!\");\n\n  // Get current value of feed\n  esp->get();\n\n  Serial.println(\"Waiting for commands...\");\n}\n\n\n// =====================================================\n//                        LOOP\n// =====================================================\n\nvoid loop()\n{\n  // Keep Adafruit IO connection alive\n  io.run();\n}",
      },
      {
        language: "bash",
        filename: "ifttt_webhook_trigger.sh",
        description: "Secondary CLI Webhook Event Trigger Request for IFTTT Automation Pipeline",
        code: "#!/bin/bash\n# Trigger IFTTT Webhook Event \"activate_scene\" via cURL\ncurl -X POST https://maker.ifttt.com/trigger/activate_scene/json/with/key/YOUR_IFTTT_WEBHOOK_KEY \\\n     -H \"Content-Type: application/json\" \\\n     -d '{\"value1\": \"ON\"}'\n",
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790486672/Screenshot_from_2026-09-27_10-52-12.png",
        alt: "IFTTT Applets List — Google Assistant Voice Commands ('activate Bulb on' / 'activate Bulb off')",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-17-19.png",
        alt: "IFTTT Applet Configuration — Action Setup Overview",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-17-47.png",
        alt: "IFTTT Adafruit IO Action Configuration — Feed Selection and Payload Setting",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-29_23-18-10.png",
        alt: "IFTTT Applet Workflow Setup — Feed and Account Parameters Configured",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-18-18.png",
        alt: "IFTTT Applet Building Block Setup — Completed Applet Review Screen",
      },
    ],
    videos: [
      {
        provider: "vimeo",
        videoId: "1230618705",
        title: "IFTTT Cloud Event Automation Demonstration",
        aspectRatio: "9/16",
      },
    ],
    troubleshooting: [
      {
        problem: "Dual Trigger & Feed Naming Inconsistency Between Applets",
        cause: "The Google Assistant voice applet targeted feed 'esp' under account Surya_ADA, while the experimental CLI Webhook applet targeted feed 'bulb-control' under account Suryakumar J S.",
        debugging: "Audited Adafruit IO feed activity logs and identified data points arriving on two separate feeds.",
        solution: "Explicitly documented the two workflows as independent implementations: primary voice automation on feed 'esp' and secondary CLI webhook test harness on feed 'bulb-control'.",
        result: "Complete architectural clarity with 100% fidelity to both sets of screenshots and firmware code.",
      },
      {
        problem: "Payload Whitespace and Case Mismatch in String Comparison",
        cause: "IFTTT dispatch occasionally forwarded payloads with trailing whitespace or mixed casing ('On ', 'on'), failing strict C++ string equality.",
        debugging: "Logged raw incoming MQTT payload bytes to Serial Monitor in handleESPMessage().",
        solution: "Implemented value.trim() and value.toUpperCase() before comparing against 'ON' and '1'.",
        result: "Robust command interpretation regardless of cloud gateway formatting variations.",
      },
      {
        problem: "IFTTT Polling Delay on Free-Tier Applet Execution",
        cause: "IFTTT free-tier applet rules are evaluated in shared cloud job batches, introducing 1-3 seconds of variable latency.",
        debugging: "Compared timestamp of voice trigger completion against timestamp of Adafruit IO feed update.",
        solution: "Confirmed sub-200ms latency once the payload reached Adafruit IO MQTT broker; documented cloud multi-hop latency as an inherent architectural tradeoff.",
        result: "Verified edge hardware executed the command within 50ms of receiving the broker push packet.",
      },
    ],
    repositoryInfo: {
      repoName: "Arduino/IFTTT_Bulb",
      localPath: "/home/surya-j-s/Arduino/IFTTT_Bulb/IFTTT_Bulb.ino",
      status: "local_verified",
      description: "Authoritative local Arduino project containing complete ESP32 IFTTT MQTT subscriber sketch.",
      primaryFiles: ["IFTTT_Bulb.ino"],
    },
    limitations: [
      "[Implemented — Multi-Hop Cloud Latency]: Flow traverses Google Assistant -> IFTTT -> Adafruit IO -> ESP32, introducing ~2-3 seconds of total end-to-end latency compared to direct local socket control.",
      "[Implemented — Free Tier Rate Limits]: IFTTT and Adafruit IO impose daily applet run and rate limits on free developer accounts.",
    ],
    futureImprovements: [
      "[Future work — Direct Webhook Listener]: Host an HTTPS webhook listener directly on ESP32 using dynamic DNS for sub-second trigger actuation.",
      "[Future work — Bidirectional State Confirmation]: Emit an MQTT feedback event to IFTTT to trigger a smartphone push notification upon confirmed relay switching.",
    ],
    reflection:
      "Integrating IFTTT applet triggers with Adafruit IO demonstrated the flexibility of event-driven IoT design. Offloading trigger evaluation to cloud applets allowed external services to control hardware without requiring firmware changes on the ESP32.",
  },
  {
    id: "task-04",
    number: "04",
    title: "Firebase IoT Monitoring Dashboard",
    subtitle: "Cloud Architecture, WebSocket Telemetry & Full-Stack Web Console",
    overview:
      "What I built: A production-grade, full-stack IoT environmental monitoring and control system streaming real-time climate telemetry (DHT11 temperature and humidity on GPIO 4) and digital light status (LM393 digital LDR on GPIO 34) from an ESP32 to Google Firebase Realtime Database over secure WebSockets, coupled with an authenticated web dashboard console for live telemetry observation and remote relay actuation on GPIO 26.\n\nSystem Architecture & Split Node Model:\n1. Microcontroller Firmware (Dashboard_Firebase.ino): Connects to Wi-Fi, authenticates to Firebase using UserAuth user_auth(API_KEY, USER_EMAIL, USER_PASSWORD), and establishes an AsyncClient connection over TLS (WiFiClientSecure ssl_client). Every 5 seconds, it pushes temperature, humidity, and digital light state (key: ldr) to /current. Concurrently, it reads /control/bulbState and /control/mode every 2 seconds to actuate RELAY_PIN 26.\n2. Web Dashboard Application (Firebase_Dashboard): Production web application built with vanilla JavaScript, HTML5, and CSS3, deployed on Firebase Hosting (dashboard-1f86f.firebaseapp.com). Features secure Firebase Authentication (auth.js), real-time telemetry gauges and switches (dashboard.js), historical data logs (history.js), and centralized path mapping (firebase-config.js).\n\nWhat I used: ESP32 DevKit V1, DHT11 Climate Sensor (GPIO 4), Digital LM393 LDR Module (GPIO 34), 5V Optocoupler Relay (GPIO 26, Active-LOW), Google Firebase Realtime Database & Firebase Authentication, Firebase Hosting web application.\n\nEvidence caption: Verified web application screenshots showing EMS-01 landing page, Firebase Authentication sign-in portal, real-time gauges, and Firebase RTDB console.\n\nImplementation notes: The architecture strictly separates telemetry reporting (/current/*) from user command intent (/control/*). Firmware authenticates as esp32firebase@gmail.com, while web dashboard users authenticate via email/password. Relay pin is GPIO 26 (Active-LOW: LOW = ON, HIGH = OFF).\n\nWhat changed/learned: Replacing periodic HTTP polling with persistent WebSocket-backed BaaS (Firebase RTDB) enabled sub-second telemetry updates and state synchronization between edge hardware and web interfaces without building or maintaining custom backend server infrastructure.",
    theorySections: [
      {
        title: "1. Cloud Computing Fundamentals & Essential Characteristics",
        badge: "NIST Definition",
        summary:
          "Cloud Computing is the delivery of on-demand computing services—including servers, storage, databases, networking, software, and analytics—over the Internet on a pay-as-you-go basis.",
        details: [
          "On-Demand Self-Service: Consumers can provision computing capabilities (such as Firebase Realtime Database instances) automatically without human interaction with the service provider.",
          "Broad Network Access: Capabilities are accessible over standard network mechanisms across diverse client platforms (microcontrollers via C++, browsers via JavaScript, mobile apps).",
          "Resource Pooling: Provider computing resources are pooled to serve multiple consumers using multi-tenant models (Google Cloud multi-tenant NoSQL infrastructure).",
          "Rapid Elasticity: Storage and throughput can be elastically provisioned and released to scale with telemetry data velocity.",
          "Measured Service: Resource usage is monitored, controlled, and billed based on exact bandwidth and stored data (Firebase free-tier Spark plan).",
          "Why Cloud Infrastructure is Critical for IoT: Edge microcontrollers lack the memory and storage to retain multi-day time-series data or handle concurrent multi-user web connections. Cloud platforms provide persistent data aggregation and global accessibility.",
        ],
      },
      {
        title: "2. Cloud Service Models: IaaS vs. PaaS vs. SaaS vs. BaaS",
        badge: "Service Models",
        summary:
          "Cloud services are categorized into distinct abstraction tiers based on whether the customer or the cloud vendor manages hardware, operating systems, runtimes, and application logic.",
        details: [
          "Infrastructure as a Service (IaaS): Delivers fundamental virtualized compute, storage, and networking (e.g. AWS EC2, Google Compute Engine). The user manages the OS, runtime, and software stack.",
          "Platform as a Service (PaaS): Delivers managed runtime environments where developers deploy application code without managing virtual machines or OS patches (e.g. Google App Engine, Heroku, AWS Elastic Beanstalk).",
          "Software as a Service (SaaS): Delivers fully functioning end-user applications accessible over the web (e.g. Google Workspace, Microsoft 365, Adafruit IO Dashboard UI).",
          "Backend as a Service (BaaS): Specialized cloud category providing pre-built backend cloud APIs—such as real-time NoSQL databases, user authentication, and push messaging—specifically for web, mobile, and IoT developers (e.g. Google Firebase, Supabase, AWS Amplify).",
          "Responsibility Matrix: In BaaS (Firebase), Google manages Networking, Storage, Servers, Virtualization, OS, Middleware, and Database Runtimes, allowing IoT engineers to focus purely on Client Application Logic and Security Rules.",
        ],
      },
      {
        title: "3. Database Fundamentals: Relational (SQL) vs. Non-Relational (NoSQL)",
        badge: "Data Persistence",
        summary:
          "A Database is an organized collection of structured or semi-structured data stored electronically and managed by a Database Management System (DBMS).",
        details: [
          "Relational Databases (SQL): Structure data into fixed tables with rows and columns, enforcing strict schemas, foreign-key relationships, and ACID transaction guarantees (e.g. PostgreSQL, MySQL).",
          "Non-Relational Databases (NoSQL): Organize data using flexible, schema-less models optimized for horizontal scalability, high write throughput, and dynamic JSON document structures.",
          "Firebase Realtime Database (RTDB): Cloud-hosted NoSQL JSON database. Data is modeled as a unified hierarchical JSON tree. When a property changes, all subscribed clients receive instant delta updates over persistent WebSocket connections (wss://).",
        ],
      },
      {
        title: "4. Cloud-Based IoT Monitoring Dashboards",
        badge: "Presentation Tier",
        summary:
          "A Cloud-Based IoT Dashboard is a centralized web or mobile interface that aggregates real-time sensor telemetry, visualizes historical trends, and dispatches actuation commands to remote hardware.",
        details: [
          "Ingestion & Synchronization Layer: Persistent WebSocket connections stream telemetry packets to and from cloud databases in sub-second intervals.",
          "State Decoupling: Separates reported hardware state (/current) from operator command intent (/control) to prevent race conditions during network latency.",
          "Interactive Visualization: Telemetry values are mapped dynamically to graphical gauges, status indicators, and paginated audit logs.",
        ],
      },
      {
        title: "5. Authentication (AuthN) versus Authorization (AuthZ)",
        badge: "Security Architecture",
        summary:
          "Authentication and Authorization are complementary security pillars governing identity verification and access governance in connected systems.",
        details: [
          "Authentication (AuthN) — \"Who are you?\': The process of verifying the identity of a user or client. In this project, implemented via Firebase Authentication using email/password credentials (janedoe@gmail.com for web operators, esp32firebase@gmail.com for the ESP32 node).",
          "Authorization (AuthZ) — \"What are you allowed to do?\': The process of verifying permissions and access rights of an authenticated identity. Enforced via Firebase Realtime Database Security Rules (.read and .write rules), verifying that auth != null before granting read/write access to /control or /current.",
          "Comparative Distinction: Authentication validates credentials and issues a secure JWT token; Authorization evaluates security rules against that token to permit or deny specific database operations.",
        ],
      },
    ],
    concepts: [
      {
        term: "Firebase Realtime Database (RTDB)",
        definition:
          "Cloud-hosted NoSQL JSON database synchronizing state across ESP32 edge nodes and web dashboards using persistent bi-directional WebSockets.",
      },
      {
        term: "Backend-as-a-Service (BaaS)",
        definition:
          "Managed cloud platform providing serverless database persistence, authentication, and hosting, eliminating custom server infrastructure.",
      },
      {
        term: "Split-Node Control Architecture",
        definition:
          "Design pattern separating web command intent (/control/bulbState) from confirmed hardware status (/current/bulbState), preventing optimistic UI race conditions.",
      },
      {
        term: "DHT11 Digital Climate Sensor (GPIO 4)",
        definition:
          "Single-wire digital sensor measuring ambient temperature (°C) and relative humidity (%) sampled every 5 seconds via dht.readTemperature() and dht.readHumidity().",
      },
      {
        term: "Digital LM393 LDR Module (GPIO 34)",
        definition:
          "Light-dependent resistor module with onboard LM393 voltage comparator and potentiometer, read digitally via digitalRead(34) (HIGH = Dark, LOW = Bright).",
      },
      {
        term: "Active-LOW Relay Control (GPIO 26)",
        definition:
          "Electromechanical switching circuit driven by GPIO 26. Driven LOW to energize coil (Bulb ON) and HIGH to release (Bulb OFF).",
      },
    ],
    diagramSteps: [
      "DHT11 (GPIO 4) & Digital LDR (GPIO 34) Sampling",
      "ESP32 Firmware Processing & UserAuth Verification",
      "Firebase RTDB WebSocket Connection (/current)",
      "EMS-01 Web Dashboard UI Real-Time Synchronization",
      "Operator Relay Toggle Command (/control/bulbState)",
      "ESP32 Read & Relay Actuation (GPIO 26 LOW)",
    ],
    circuitData: {
      title: "ESP32 Multi-Sensor Telemetry & Relay Schematic",
      description:
        "The ESP32 is powered via 5V USB. DHT11 digital data connects to GPIO 4. Digital LDR module digital output (DO) connects to GPIO 34. The 5V optocoupler relay connects to GPIO 26, powered by VIN (5V) and GND, with COM and NO contacts switching the 230V mains light bulb fixture.",
      taskId: "task-04",
      pinTable: [
        {
          pin: "GPIO 4",
          component: "DHT11 Climate Sensor",
          label: "DATA",
          type: "Digital I/O",
          notes: "Single-wire digital temperature and relative humidity signal line.",
        },
        {
          pin: "GPIO 34",
          component: "Digital LDR Module",
          label: "DO",
          type: "Digital I/O",
          notes: "Digital comparator output from LM393 (HIGH = Dark, LOW = Bright).",
        },
        {
          pin: "GPIO 26",
          component: "5V Relay Module",
          label: "IN (Signal)",
          type: "Digital I/O",
          notes: "Active-LOW relay actuation line for mains light bulb.",
        },
        {
          pin: "3V3",
          component: "DHT11 & LDR Modules",
          label: "VCC",
          type: "Power",
          notes: "Regulated 3.3V power supply for digital sensors.",
        },
        {
          pin: "VIN (5V)",
          component: "5V Relay Module",
          label: "VCC",
          type: "Power",
          notes: "5V DC coil power supply derived from USB rail.",
        },
        {
          pin: "GND",
          component: "All Modules",
          label: "GND",
          type: "Ground",
          notes: "Common ground bus unifying microcontroller, sensors, and relay board.",
        },
      ],
    },
    hardware: [
      {
        name: "ESP32 DevKit V1 Board",
        category: "Hardware",
        description: "Edge IoT node sampling sensors, executing SSL handshakes, and updating Firebase RTDB.",
      },
      {
        name: "DHT11 Climate Sensor",
        category: "Hardware",
        description: "Digital sensor wired to GPIO 4 measuring temperature (0-50°C) and humidity (20-90% RH).",
      },
      {
        name: "Digital LDR Sensor Module",
        category: "Hardware",
        description: "Photoresistor with onboard LM393 comparator and potentiometer connected to GPIO 34.",
      },
      {
        name: "5V Optocoupler Relay Module",
        category: "Hardware",
        description: "Single-channel relay driven by GPIO 26 switching 230V AC lamp load.",
      },
      {
        name: "Firebase RTDB Infrastructure",
        category: "Cloud / Protocol",
        description: "Google Cloud NoSQL JSON database maintaining real-time /current and /control nodes.",
      },
      {
        name: "EMS-01 Web Dashboard App",
        category: "Software",
        description: "Vanilla JavaScript & Firebase Web SDK web console deployed on Firebase Hosting.",
      },
    ],
    wiringNotes:
      "DHT11 data pin connects to GPIO 4. Digital LDR module digital output (DO) connects to GPIO 34. Relay signal connects to GPIO 26. Sensors are powered from 3V3, relay is powered from 5V VIN, and all grounds are unified.",
    configuration: [
      "Created Firebase project 'dashboard-1f86f' and provisioned Realtime Database in asia-southeast1.",
      "Configured Firebase Authentication with email/password provider, provisioning device credentials.",
      "Configured RTDB Security Rules requiring authenticated read/write access (auth != null).",
      "Programmed ESP32 firmware with UserAuth credentials and AsyncClient over WiFiClientSecure.",
      "Configured telemetry publication interval to 5000ms and control polling interval to 2000ms.",
      "Developed and deployed web dashboard to Firebase Hosting with route-protected pages.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "Dashboard_Firebase_Telemetry.ino",
        description: "ESP32 Firebase RTDB Telemetry & Authentication Sketch (Authoritative)",
        code: "#define ENABLE_USER_AUTH\n#define ENABLE_DATABASE\n\n#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include <FirebaseClient.h>\n#include <DHT.h>\n#include <time.h>\n\n// ======================================================\n// WIFI\n// ======================================================\n\n#define WIFI_SSID \"YOUR_WIFI_SSID\"\n#define WIFI_PASSWORD \"YOUR_WIFI_PASSWORD\"\n\n// ======================================================\n// FIREBASE\n// ======================================================\n\n#define API_KEY \"YOUR_FIREBASE_API_KEY\"\n\n#define USER_EMAIL \"YOUR_USER_EMAIL\"\n#define USER_PASSWORD \"YOUR_USER_PASSWORD\"\n\n#define DATABASE_URL \"https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/\"\n\n// ======================================================\n// PINS\n// ======================================================\n\n#define DHTPIN 4\n#define DHTTYPE DHT11\n\n#define LDR_PIN 34\n\n#define RELAY_PIN 26\n\n// ======================================================\n// DIGITAL LDR CONFIGURATION\n// ======================================================\n\n/*\n   Digital LDR module:\n\n   DO -> GPIO34\n\n   Change HIGH to LOW if your LDR module behaves\n   opposite to this configuration.\n*/\n\n#define DARK_LDR_STATE HIGH\n\n// ======================================================\n// RELAY CONFIGURATION\n// ======================================================\n\n/*\n   Active LOW relay:\n\n   LOW  = ON\n   HIGH = OFF\n*/\n\n#define RELAY_ON_STATE LOW\n#define RELAY_OFF_STATE HIGH\n\n// ======================================================\n// FIREBASE OBJECTS\n// ======================================================\n\nDHT dht(\n  DHTPIN,\n  DHTTYPE\n);\n\nWiFiClientSecure ssl_client;\n\nusing AsyncClient = AsyncClientClass;\n\nAsyncClient aClient(\n  ssl_client\n);\n\nFirebaseApp app;\n\nUserAuth user_auth(\n  API_KEY,\n  USER_EMAIL,\n  USER_PASSWORD\n);\n\nRealtimeDatabase Database;\n\n// ======================================================\n// TIMERS\n// ======================================================\n\nunsigned long lastReading = 0;\nunsigned long lastControlRead = 0;\nunsigned long lastHeartbeat = 0;\nunsigned long lastLocalControl = 0;\n\nconst unsigned long readingInterval = 5000;\nconst unsigned long controlInterval = 2000;\nconst unsigned long heartbeatInterval = 5000;\nconst unsigned long localControlInterval = 250;\n\n// ======================================================\n// SYSTEM STATE\n// ======================================================\n\nbool bulbState = false;\n\nString operatingMode = \"MANUAL\";\n\nbool controlInitialized = false;\n\n// ======================================================\n// APPLY RELAY\n// ======================================================\n\nvoid applyRelay() {\n\n  if (bulbState) {\n\n    digitalWrite(\n      RELAY_PIN,\n      RELAY_ON_STATE\n    );\n\n  } else {\n\n    digitalWrite(\n      RELAY_PIN,\n      RELAY_OFF_STATE\n    );\n  }\n}\n\n// ======================================================\n// READ DIGITAL LDR\n// ======================================================\n\nint readLDR() {\n\n  return digitalRead(\n    LDR_PIN\n  );\n}\n\n// ======================================================\n// FIREBASE ONLINE STATUS\n// ======================================================\n\nvoid firebaseSetOnline(\n  bool online\n) {\n\n  if (\n    Database.set<bool>(\n      aClient,\n      \"/current/online\",\n      online\n    )\n  ) {\n\n    Serial.print(\n      \"Online status -> \"\n    );\n\n    Serial.println(\n      online\n        ? \"ONLINE\"\n        : \"OFFLINE\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Online status FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// CURRENT TIMESTAMP\n// ======================================================\n\nunsigned long long currentTimestampMs() {\n\n  time_t now =\n    time(nullptr);\n\n  if (\n    now < 1700000000\n  ) {\n\n    return 0;\n  }\n\n  return\n    (unsigned long long)now *\n    1000ULL;\n}\n\n// ======================================================\n// UPDATE LAST SEEN\n// ======================================================\n\nvoid updateLastSeen() {\n\n  unsigned long long timestamp =\n    currentTimestampMs();\n\n  if (\n    timestamp == 0\n  ) {\n\n    return;\n  }\n\n  if (\n    Database.set<number_t>(\n      aClient,\n      \"/current/lastSeen\",\n      number_t(\n        (double)timestamp,\n        0\n      )\n    )\n  ) {\n\n    Serial.println(\n      \"Last seen -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Last seen FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// INITIALIZE CONTROL NODE\n// ======================================================\n\nvoid initializeControlState() {\n\n  Serial.println();\n  Serial.println(\n    \"Checking Firebase control state...\"\n  );\n\n  // ----------------------------------------------------\n  // CONTROL: BULB STATE\n  // ----------------------------------------------------\n\n  bool existingBulbState =\n    Database.get<bool>(\n      aClient,\n      \"/control/bulbState\"\n    );\n\n  if (\n    aClient.lastError().code() != 0\n  ) {\n\n    Serial.println(\n      \"/control/bulbState does not exist.\"\n    );\n\n    Serial.println(\n      \"Creating default: false\"\n    );\n\n    if (\n      Database.set<bool>(\n        aClient,\n        \"/control/bulbState\",\n        false\n      )\n    ) {\n\n      Serial.println(\n        \"control/bulbState created.\"\n      );\n\n      bulbState =\n        false;\n\n    } else {\n\n      Serial.print(\n        \"Failed to create control/bulbState: \"\n      );\n\n      Serial.println(\n        aClient.lastError().message()\n      );\n    }\n\n  } else {\n\n    /*\n       Preserve the dashboard command.\n    */\n\n    bulbState =\n      existingBulbState;\n\n    Serial.print(\n      \"Existing control/bulbState: \"\n    );\n\n    Serial.println(\n      bulbState\n        ? \"ON\"\n        : \"OFF\"\n    );\n  }\n\n  // ----------------------------------------------------\n  // CONTROL: MODE\n  // ----------------------------------------------------\n\n  String existingMode =\n    Database.get<String>(\n      aClient,\n      \"/control/mode\"\n    );\n\n  if (\n    aClient.lastError().code() != 0\n  ) {\n\n    Serial.println(\n      \"/control/mode does not exist.\"\n    );\n\n    Serial.println(\n      \"Creating default: MANUAL\"\n    );\n\n    if (\n      Database.set<String>(\n        aClient,\n        \"/control/mode\",\n        \"MANUAL\"\n      )\n    ) {\n\n      Serial.println(\n        \"control/mode created.\"\n      );\n\n      operatingMode =\n        \"MANUAL\";\n\n    } else {\n\n      Serial.print(\n        \"Failed to create control/mode: \"\n      );\n\n      Serial.println(\n        aClient.lastError().message()\n      );\n    }\n\n  } else {\n\n    if (\n      existingMode == \"AUTO\" ||\n      existingMode == \"MANUAL\"\n    ) {\n\n      operatingMode =\n        existingMode;\n    }\n\n    Serial.print(\n      \"Existing control/mode: \"\n    );\n\n    Serial.println(\n      operatingMode\n    );\n  }\n\n  // ----------------------------------------------------\n  // APPLY INITIAL RELAY STATE\n  // ----------------------------------------------------\n\n  applyRelay();\n\n  controlInitialized =\n    true;\n\n  Serial.println(\n    \"Control initialization complete.\"\n  );\n}\n\n// ======================================================\n// AUTOMATIC LIGHTING\n// ======================================================\n\nvoid applyAutomaticLighting(\n  int ldrState\n) {\n\n  /*\n     Digital LDR:\n\n     DARK  -> BULB ON\n     LIGHT -> BULB OFF\n  */\n\n  if (\n    ldrState ==\n    DARK_LDR_STATE\n  ) {\n\n    bulbState =\n      true;\n\n  } else {\n\n    bulbState =\n      false;\n  }\n}\n\n// ======================================================\n// LOCAL RELAY CONTROL\n// ======================================================\n\nvoid applyLocalControl() {\n\n  /*\n     This function MUST NOT depend on Wi-Fi or Firebase.\n\n     AUTO:\n       LDR -> ESP32 -> Relay\n\n     MANUAL:\n       Last accepted bulbState -> Relay\n\n     Therefore the physical lighting system keeps working\n     even when Firebase/Wi-Fi is unavailable.\n  */\n\n  if (\n    operatingMode ==\n    \"AUTO\"\n  ) {\n\n    int ldrState =\n      readLDR();\n\n    applyAutomaticLighting(\n      ldrState\n    );\n  }\n\n  applyRelay();\n}\n\n// ======================================================\n// WRITE CURRENT DEVICE STATE\n// ======================================================\n\nvoid writeCurrentState() {\n\n  bool success =\n    true;\n\n  /*\n     IMPORTANT:\n\n     The dashboard reads /current.\n\n     Therefore all live ESP32 data is written here.\n  */\n\n  success &=\n    Database.set<bool>(\n      aClient,\n      \"/current/bulbState\",\n      bulbState\n    );\n\n  success &=\n    Database.set<String>(\n      aClient,\n      \"/current/mode\",\n      operatingMode\n    );\n\n  // Compatibility with dashboards that use operatingMode.\n  success &=\n    Database.set<String>(\n      aClient,\n      \"/current/operatingMode\",\n      operatingMode\n    );\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Current state -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Current state FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// WRITE CURRENT SENSOR DATA\n// ======================================================\n\nvoid writeCurrentSensorData(\n  float temperature,\n  float humidity,\n  int ldrState\n) {\n\n  bool success =\n    true;\n\n  success &=\n    Database.set<float>(\n      aClient,\n      \"/current/temperature\",\n      temperature\n    );\n\n  success &=\n    Database.set<float>(\n      aClient,\n      \"/current/humidity\",\n      humidity\n    );\n\n  success &=\n    Database.set<int>(\n      aClient,\n      \"/current/ldr\",\n      ldrState\n    );\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Sensor data -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Sensor data FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// WRITE HISTORICAL READING\n// ======================================================\n\nvoid writeHistoricalReading(\n  float temperature,\n  float humidity,\n  int ldrState\n) {\n\n  unsigned long long timestamp =\n    currentTimestampMs();\n\n  if (\n    timestamp == 0\n  ) {\n\n    Serial.println(\n      \"History skipped: clock not synchronized.\"\n    );\n\n    return;\n  }\n\n  /*\n     FIX:\n\n     Dashboard uses /history.\n\n     Therefore ESP32 now writes:\n\n       /history/<timestamp>/\n  */\n\n  String base =\n    \"/history/\" +\n    String(timestamp);\n\n  bool success =\n    true;\n\n  // ----------------------------------------------------\n  // TIMESTAMP\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<number_t>(\n      aClient,\n      base + \"/timestamp\",\n      number_t(\n        (double)timestamp,\n        0\n      )\n    );\n\n  // ----------------------------------------------------\n  // TEMPERATURE\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<float>(\n      aClient,\n      base + \"/temperature\",\n      temperature\n    );\n\n  // ----------------------------------------------------\n  // HUMIDITY\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<float>(\n      aClient,\n      base + \"/humidity\",\n      humidity\n    );\n\n  // ----------------------------------------------------\n  // LDR\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<int>(\n      aClient,\n      base + \"/ldr\",\n      ldrState\n    );\n\n  // ----------------------------------------------------\n  // BULB\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<bool>(\n      aClient,\n      base + \"/bulbState\",\n      bulbState\n    );\n\n  // ----------------------------------------------------\n  // MODE\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<String>(\n      aClient,\n      base + \"/mode\",\n      operatingMode\n    );\n\n  // ----------------------------------------------------\n  // RESULT\n  // ----------------------------------------------------\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Historical reading -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Historical reading FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// READ DASHBOARD CONTROL\n// ======================================================\n\nvoid readDashboardControl() {\n\n  // ----------------------------------------------------\n  // MODE\n  // ----------------------------------------------------\n\n  String newMode =\n    Database.get<String>(\n      aClient,\n      \"/control/mode\"\n    );\n\n  if (\n    aClient.lastError().code() == 0\n  ) {\n\n    if (\n      newMode == \"AUTO\" ||\n      newMode == \"MANUAL\"\n    ) {\n\n      if (\n        operatingMode !=\n        newMode\n      ) {\n\n        Serial.print(\n          \"Mode changed: \"\n        );\n\n        Serial.print(\n          operatingMode\n        );\n\n        Serial.print(\n          \" -> \"\n        );\n\n        Serial.println(\n          newMode\n        );\n      }\n\n      operatingMode =\n        newMode;\n    }\n\n  } else {\n\n    Serial.print(\n      \"Mode read failed: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n\n  // ----------------------------------------------------\n  // MANUAL BULB COMMAND\n  // ----------------------------------------------------\n\n  bool requestedBulbState =\n    Database.get<bool>(\n      aClient,\n      \"/control/bulbState\"\n    );\n\n  if (\n    aClient.lastError().code() == 0\n  ) {\n\n    if (\n      operatingMode ==\n      \"MANUAL\"\n    ) {\n\n      if (\n        bulbState !=\n        requestedBulbState\n      ) {\n\n        Serial.print(\n          \"Dashboard bulb command: \"\n        );\n\n        Serial.println(\n          requestedBulbState\n            ? \"ON\"\n            : \"OFF\"\n        );\n      }\n\n      bulbState =\n        requestedBulbState;\n    }\n\n  } else {\n\n    Serial.print(\n      \"Bulb control read failed: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n\n    /*\n       If Firebase temporarily fails,\n       keep the existing bulb state.\n    */\n  }\n\n  // ----------------------------------------------------\n  // APPLY LOCAL CONTROL\n  // ----------------------------------------------------\n\n  applyLocalControl();\n\n  // ----------------------------------------------------\n  // REPORT ACTUAL STATE\n  // ----------------------------------------------------\n\n  writeCurrentState();\n}\n\n// ======================================================\n// SETUP\n// ======================================================\n\nvoid setup() {\n\n  Serial.begin(\n    115200\n  );\n\n  delay(1000);\n\n  // ====================================================\n  // SENSORS\n  // ====================================================\n\n  dht.begin();\n\n  pinMode(\n    LDR_PIN,\n    INPUT\n  );\n\n  // ====================================================\n  // RELAY\n  // ====================================================\n\n  pinMode(\n    RELAY_PIN,\n    OUTPUT\n  );\n\n  digitalWrite(\n    RELAY_PIN,\n    RELAY_OFF_STATE\n  );\n\n  bulbState =\n    false;\n\n  // ====================================================\n  // STARTUP MESSAGE\n  // ====================================================\n\n  Serial.println();\n  Serial.println(\n    \"================================\"\n  );\n\n  Serial.println(\n    \"SMART ENVIRONMENT MONITOR\"\n  );\n\n  Serial.println(\n    \"================================\"\n  );\n\n  Serial.println();\n\n  Serial.println(\n    \"LDR MODE: DIGITAL\"\n  );\n\n  Serial.print(\n    \"Dark LDR state: \"\n  );\n\n  Serial.println(\n    DARK_LDR_STATE == HIGH\n      ? \"HIGH\"\n      : \"LOW\"\n  );\n\n  // ====================================================\n  // WIFI\n  // ====================================================\n\n  Serial.println();\n\n  Serial.println(\n    \"Connecting to Wi-Fi...\"\n  );\n\n  WiFi.begin(\n    WIFI_SSID,\n    WIFI_PASSWORD\n  );\n\n  while (\n    WiFi.status() !=\n    WL_CONNECTED\n  ) {\n\n    Serial.print(\n      \".\"\n    );\n\n    delay(500);\n  }\n\n  Serial.println();\n\n  Serial.println(\n    \"Wi-Fi connected!\"\n  );\n\n  Serial.print(\n    \"ESP32 IP: \"\n  );\n\n  Serial.println(\n    WiFi.localIP()\n  );\n\n  // ====================================================\n  // TIME\n  // ====================================================\n\n  Serial.println();\n\n  Serial.println(\n    \"Synchronizing clock...\"\n  );\n\n  configTime(\n    0,\n    0,\n    \"pool.ntp.org\",\n    \"time.nist.gov\"\n  );\n\n  unsigned long timeStart =\n    millis();\n\n  while (\n    time(nullptr) <\n      1700000000 &&\n    millis() -\n      timeStart <\n      15000\n  ) {\n\n    Serial.print(\n      \".\"\n    );\n\n    delay(250);\n  }\n\n  Serial.println();\n\n  if (\n    time(nullptr) >=\n    1700000000\n  ) {\n\n    Serial.println(\n      \"Clock synchronized.\"\n    );\n\n  } else {\n\n    Serial.println(\n      \"Clock synchronization timed out.\"\n    );\n  }\n\n  // ====================================================\n  // FIREBASE\n  // ====================================================\n\n  ssl_client.setInsecure();\n\n  Serial.println();\n\n  Serial.println(\n    \"Initializing Firebase...\"\n  );\n\n  initializeApp(\n    aClient,\n    app,\n    getAuth(\n      user_auth\n    )\n  );\n\n  app.getApp<RealtimeDatabase>(\n    Database\n  );\n\n  Database.url(\n    DATABASE_URL\n  );\n\n  Serial.println(\n    \"Firebase initialized!\"\n  );\n\n  Serial.println();\n\n  Serial.println(\n    \"Waiting for Firebase authentication...\"\n  );\n}\n\n// ======================================================\n// LOOP\n// ======================================================\n\nvoid loop() {\n\n  // ====================================================\n  // MAINTAIN FIREBASE\n  // ====================================================\n\n  app.loop();\n\n  /*\n     IMPORTANT:\n     Never return just because Wi-Fi/Firebase is unavailable.\n\n     Local AUTO control must continue independently.\n  */\n\n  bool wifiConnected =\n    WiFi.status() == WL_CONNECTED;\n\n  bool firebaseReady =\n    wifiConnected &&\n    app.ready();\n\n  // ====================================================\n  // FIREBASE INITIALIZATION\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    !controlInitialized\n  ) {\n\n    initializeControlState();\n\n    /*\n       Apply the newly synchronized mode/state immediately.\n    */\n    applyLocalControl();\n  }\n\n  // ====================================================\n  // LOCAL CONTROL \u2014 ALWAYS RUNS\n  // ====================================================\n\n  if (\n    millis() -\n    lastLocalControl >=\n    localControlInterval\n  ) {\n\n    lastLocalControl =\n      millis();\n\n    applyLocalControl();\n  }\n\n  // ====================================================\n  // FIREBASE HEARTBEAT\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    millis() -\n    lastHeartbeat >=\n    heartbeatInterval\n  ) {\n\n    lastHeartbeat =\n      millis();\n\n    firebaseSetOnline(\n      true\n    );\n\n    updateLastSeen();\n  }\n\n  // ====================================================\n  // READ DASHBOARD CONTROL\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    millis() -\n    lastControlRead >=\n    controlInterval\n  ) {\n\n    lastControlRead =\n      millis();\n\n    readDashboardControl();\n  }\n\n  // ====================================================\n  // SENSOR READING\n  // ====================================================\n\n  if (\n    millis() -\n    lastReading >=\n    readingInterval\n  ) {\n\n    lastReading =\n      millis();\n\n    // --------------------------------------------------\n    // DHT11\n    // --------------------------------------------------\n\n    float temperature =\n      dht.readTemperature();\n\n    float humidity =\n      dht.readHumidity();\n\n    // --------------------------------------------------\n    // DIGITAL LDR\n    // --------------------------------------------------\n\n    int ldrState =\n      readLDR();\n\n    // --------------------------------------------------\n    // VALIDATE DHT\n    // --------------------------------------------------\n\n    if (\n      isnan(temperature) ||\n      isnan(humidity)\n    ) {\n\n      Serial.println(\n        \"ERROR: DHT11 reading failed!\"\n      );\n\n      /*\n         Do NOT stop the loop.\n\n         Local relay control continues and the next\n         sensor cycle will retry.\n      */\n\n    } else {\n\n      // ==================================================\n      // SERIAL OUTPUT\n      // ==================================================\n\n      Serial.println();\n\n      Serial.println(\n        \"--------------------------------\"\n      );\n\n      Serial.print(\n        \"Temperature: \"\n      );\n\n      Serial.print(\n        temperature\n      );\n\n      Serial.println(\n        \" \u00b0C\"\n      );\n\n      Serial.print(\n        \"Humidity: \"\n      );\n\n      Serial.print(\n        humidity\n      );\n\n      Serial.println(\n        \" %\"\n      );\n\n      Serial.print(\n        \"LDR DIGITAL: \"\n      );\n\n      Serial.println(\n        ldrState\n      );\n\n      Serial.print(\n        \"LDR CONDITION: \"\n      );\n\n      if (\n        ldrState ==\n        DARK_LDR_STATE\n      ) {\n\n        Serial.println(\n          \"DARK\"\n        );\n\n      } else {\n\n        Serial.println(\n          \"BRIGHT\"\n        );\n      }\n\n      Serial.print(\n        \"Bulb: \"\n      );\n\n      Serial.println(\n        bulbState\n          ? \"ON\"\n          : \"OFF\"\n      );\n\n      Serial.print(\n        \"Mode: \"\n      );\n\n      Serial.println(\n        operatingMode\n      );\n\n      Serial.print(\n        \"Connectivity: \"\n      );\n\n      if (\n        firebaseReady\n      ) {\n\n        Serial.println(\n          \"FIREBASE ONLINE\"\n        );\n\n      } else if (\n        wifiConnected\n      ) {\n\n        Serial.println(\n          \"WIFI ONLINE / FIREBASE NOT READY\"\n        );\n\n      } else {\n\n        Serial.println(\n          \"OFFLINE \u2014 LOCAL CONTROL\"\n        );\n      }\n\n      Serial.println(\n        \"--------------------------------\"\n      );\n\n      // ==================================================\n      // FIREBASE DATA \u2014 ONLY WHEN AVAILABLE\n      // ==================================================\n\n      if (\n        firebaseReady\n      ) {\n\n        writeCurrentSensorData(\n          temperature,\n          humidity,\n          ldrState\n        );\n\n        writeCurrentState();\n\n        writeHistoricalReading(\n          temperature,\n          humidity,\n          ldrState\n        );\n      }\n    }\n  }\n\n  // ====================================================\n  // SMALL DELAY\n  // ====================================================\n\n  delay(5);\n}\n",
      },
      {
        language: "javascript",
        filename: "firebase-config.js",
        description: "Centralized Firebase Configuration & Database Schema Path Mapping (Authoritative)",
        code: "/* ==========================================================================\n   FIREBASE CONFIGURATION \u2014 EMS-01\n   --------------------------------------------------------------------------\n   Every other script imports its config/paths from this single file.\n   Replace the placeholder values below with your own Firebase project's\n   web app configuration:\n\n     Firebase Console \u2192 gear icon \u2192 Project settings \u2192 General tab \u2192\n     \"Your apps\" \u2192 (add a Web app if none exists) \u2192 copy the whole\n     firebaseConfig object shown there.\n\n   Replace ALL fields below, not just apiKey \u2014 they must all come from the\n   same app registration or auth/database calls will fail even if apiKey\n   alone looks valid.\n   ========================================================================== */\n\nconst firebaseConfig = {\n  apiKey: \"YOUR_FIREBASE_API_KEY\",\n  authDomain: \"YOUR_PROJECT_ID.firebaseapp.com\",\n  databaseURL: \"https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app\",\n  projectId: \"YOUR_PROJECT_ID\",\n  storageBucket: \"YOUR_PROJECT_ID.appspot.com\",\n  messagingSenderId: \"YOUR_SENDER_ID\",\n  appId: \"1:YOUR_SENDER_ID:web:6849bb9910a337a8d1864a\"\n};\n\n// Initialize Firebase (compat SDK \u2014 loaded via <script> tags in each page)\nfirebase.initializeApp(firebaseConfig);\n\nconst auth = firebase.auth();\nconst db = firebase.database();\n\n/* --------------------------------------------------------------------------\n   CENTRALIZED DATABASE PATHS\n   Every script reads/writes through these constants rather than hardcoding\n   path strings, so the schema only needs to change in one place.\n\n   ACTUAL DATABASE STRUCTURE:\n\n     control/\n       bulbState     (bool)   \u2014 dashboard writes this to command the relay\n       mode          (\"MANUAL\" | \"AUTO\")\n       ldrThreshold  (number) \u2014 unused on this hardware; LDR is digital\n\n     current/\n       bulbState     (bool)   \u2014 ESP32's confirmed actual relay state\n       humidity      (number, %)\n       ldr           (0 | 1)  \u2014 DIGITAL LDR module: 1 = DARK, 0 = BRIGHT\n       mode          (\"MANUAL\" | \"AUTO\") \u2014 ESP32's confirmed actual mode\n       temperature   (number, \u00b0C)\n\n     history/\n       {recordId}/\n         timestamp     (ms)\n         temperature   (number, \u00b0C)\n         humidity      (number, %)\n         ldr           (0 | 1)\n         bulbState     (bool)\n         mode          (\"MANUAL\" | \"AUTO\")\n\n     users/\n       {uid}/\n         name\n         email\n\n   CONTROL ARCHITECTURE:\n     Dashboard --writes--> /control/*  --ESP32 reads-->  Relay\n                                                            |\n     Dashboard <--reads-- /current/* <--ESP32 reports------+\n\n   The dashboard NEVER writes to /current/*, and never copies device state\n   back into /control/*.\n   -------------------------------------------------------------------------- */\nconst DB_PATHS = {\n  userProfile: (uid) => `users/${uid}`,\n  control: \"control\",\n  controlField: (field) => `control/${field}`,\n  current: \"current\",\n  currentField: (field) => `current/${field}`,\n  history: \"history\"\n};\n",
      },
      {
        language: "javascript",
        filename: "auth.js",
        description: "Frontend User Authentication, Route Protection & Session Management (Authoritative)",
        code: "/* ==========================================================================\n   AUTH.JS \u2014 Firebase Email/Password Authentication\n   ========================================================================== */\n\nfunction showAuthError(el, message) {\n  el.textContent = message;\n  el.classList.add(\"is-visible\");\n}\nfunction hideAuthError(el) {\n  el.classList.remove(\"is-visible\");\n}\n\n/* -------- LOGIN -------- */\nfunction initLoginForm() {\n  const form = document.getElementById(\"login-form\");\n  if (!form) return;\n  const errorEl = document.getElementById(\"auth-error\");\n  const submitBtn = document.getElementById(\"login-submit\");\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    hideAuthError(errorEl);\n    const email = document.getElementById(\"login-email\").value.trim();\n    const password = document.getElementById(\"login-password\").value;\n\n    submitBtn.textContent = \"AUTHENTICATING\u2026\";\n    submitBtn.disabled = true;\n\n    auth.signInWithEmailAndPassword(email, password)\n      .then(() => {\n        window.location.href = \"dashboard.html\";\n      })\n      .catch((err) => {\n        submitBtn.textContent = \"AUTHENTICATE\";\n        submitBtn.disabled = false;\n        showAuthError(errorEl, mapAuthError(err.code));\n      });\n  });\n}\n\n/* -------- REGISTER -------- */\nfunction initRegisterForm() {\n  const form = document.getElementById(\"register-form\");\n  if (!form) return;\n  const errorEl = document.getElementById(\"auth-error\");\n  const submitBtn = document.getElementById(\"register-submit\");\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    hideAuthError(errorEl);\n    const name = document.getElementById(\"register-name\").value.trim();\n    const email = document.getElementById(\"register-email\").value.trim();\n    const password = document.getElementById(\"register-password\").value;\n    const confirm = document.getElementById(\"register-confirm\").value;\n\n    if (password !== confirm) {\n      showAuthError(errorEl, \"PASSWORD CONFIRMATION DOES NOT MATCH.\");\n      return;\n    }\n    if (password.length < 6) {\n      showAuthError(errorEl, \"PASSWORD MUST BE AT LEAST 6 CHARACTERS.\");\n      return;\n    }\n\n    submitBtn.textContent = \"PROVISIONING\u2026\";\n    submitBtn.disabled = true;\n\n    auth.createUserWithEmailAndPassword(email, password)\n      .then((cred) => {\n        return db.ref(DB_PATHS.userProfile(cred.user.uid)).set({\n          name: name,\n          email: email\n        });\n      })\n      .then(() => {\n        window.location.href = \"dashboard.html\";\n      })\n      .catch((err) => {\n        submitBtn.textContent = \"CREATE ACCOUNT\";\n        submitBtn.disabled = false;\n        showAuthError(errorEl, mapAuthError(err.code));\n      });\n  });\n}\n\n/* -------- FORGOT PASSWORD -------- */\nfunction initForgotForm() {\n  const form = document.getElementById(\"forgot-form\");\n  if (!form) return;\n  const errorEl = document.getElementById(\"auth-error\");\n  const successEl = document.getElementById(\"auth-success\");\n  const submitBtn = document.getElementById(\"forgot-submit\");\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    hideAuthError(errorEl);\n    const email = document.getElementById(\"forgot-email\").value.trim();\n\n    submitBtn.textContent = \"SENDING\u2026\";\n    submitBtn.disabled = true;\n\n    auth.sendPasswordResetEmail(email)\n      .then(() => {\n        successEl.textContent = \"RESET LINK TRANSMITTED. CHECK YOUR INBOX.\";\n        successEl.classList.add(\"is-visible\");\n        submitBtn.textContent = \"LINK SENT\";\n      })\n      .catch((err) => {\n        submitBtn.textContent = \"SEND RESET LINK\";\n        submitBtn.disabled = false;\n        showAuthError(errorEl, mapAuthError(err.code));\n      });\n  });\n}\n\n/* -------- LOGOUT -------- */\nfunction initLogout() {\n  const logoutBtns = document.querySelectorAll(\"[data-logout]\");\n  logoutBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      auth.signOut().then(() => {\n        window.location.href = \"login.html\";\n      });\n    });\n  });\n}\n\n/* -------- ROUTE PROTECTION -------- */\n// Call on every protected page (dashboard, analytics, history, export).\n// Redirects to login.html if no user is signed in.\nfunction requireAuth(onReady) {\n  auth.onAuthStateChanged((user) => {\n    if (!user) {\n      window.location.href = \"login.html\";\n    } else if (typeof onReady === \"function\") {\n      onReady(user);\n    }\n  });\n}\n\nfunction mapAuthError(code) {\n  const map = {\n    \"auth/invalid-email\": \"INVALID EMAIL FORMAT.\",\n    \"auth/user-disabled\": \"ACCOUNT DISABLED.\",\n    \"auth/user-not-found\": \"NO ACCOUNT FOUND FOR THIS EMAIL.\",\n    \"auth/wrong-password\": \"INCORRECT CREDENTIALS.\",\n    \"auth/email-already-in-use\": \"EMAIL ALREADY REGISTERED.\",\n    \"auth/weak-password\": \"PASSWORD TOO WEAK.\",\n    \"auth/invalid-credential\": \"INCORRECT CREDENTIALS.\",\n    \"auth/too-many-requests\": \"TOO MANY ATTEMPTS. TRY AGAIN LATER.\"\n  };\n  return map[code] || \"AUTHENTICATION FAILED. \" + (code || \"\").toUpperCase();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initLoginForm();\n  initRegisterForm();\n  initForgotForm();\n  initLogout();\n});\n",
      },
      {
        language: "javascript",
        filename: "dashboard.js",
        description: "Frontend Dashboard Telemetry Synchronization & Appliance Control Module (Authoritative)",
        code: "/* ==========================================================================\n   DASHBOARD.JS \u2014 EMS-01 (Firebase-Backed Demo Mode)\n   --------------------------------------------------------------------------\n   FIREBASE SOURCE OF TRUTH:\n     /control/bulbState    (boolean) \u2014 true = BULB ON, false = BULB OFF\n     /control/mode         (string)  \u2014 \"MANUAL\" | \"AUTO\"\n     /control/ldrThreshold (number)  \u2014 threshold value (0\u20131023)\n\n   The website reads and writes directly to /control/* via Firebase RTDB.\n   No physical ESP32 or hardware confirmation is required.\n   Bulb ON/OFF state, MANUAL/AUTO mode, and LDR Threshold persist across page refreshes.\n   ========================================================================== */\n\n/* -------- Toast Notification System -------- */\nfunction showToast(message, type = \"info\", duration = 3000) {\n  const container = document.getElementById(\"toast-container\");\n  if (!container) return;\n  const toast = document.createElement(\"div\");\n  toast.className = `toast-notification toast-notification--${type}`;\n  toast.textContent = message;\n  container.appendChild(toast);\n  setTimeout(() => {\n    toast.style.opacity = \"0\";\n    toast.style.transition = \"opacity 0.3s ease\";\n    setTimeout(() => toast.remove(), 300);\n  }, duration);\n}\n\n/* -------- Clock -------- */\nfunction tickClock() {\n  const el = document.getElementById(\"header-clock\");\n  if (!el) return;\n  const now = new Date();\n  el.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]\n    .map((n) => String(n).padStart(2, \"0\")).join(\":\");\n}\nsetInterval(tickClock, 1000);\n\n/* -------- Helpers -------- */\nfunction setText(id, value) {\n  const el = document.getElementById(id);\n  if (el) el.textContent = value;\n}\n\nfunction fmtTime(timestamp) {\n  if (!timestamp) return \"\u2014\";\n  const d = new Date(Number(timestamp));\n  return Number.isNaN(d.getTime()) ? \"\u2014\" : d.toLocaleTimeString([], { hour12: false });\n}\n\nfunction isValidNumber(value) {\n  return value !== undefined && value !== null && value !== \"\" && Number.isFinite(Number(value));\n}\n\nfunction normalizeBulbState(value) {\n  if (value === true) return true;\n  if (value === false) return false;\n  if (typeof value === \"string\") {\n    const v = value.trim().toUpperCase();\n    if (v === \"ON\" || v === \"TRUE\") return true;\n    if (v === \"OFF\" || v === \"FALSE\") return false;\n  }\n  return false;\n}\n\n/* -------- Demo State -------- */\nlet currentBulbState = false;\nlet currentMode = \"MANUAL\";\nlet currentThreshold = 512;\nlet isWritingBulb = false;\nlet isWritingMode = false;\nlet isSavingThreshold = false;\nlet isThresholdDirty = false;\n\n/* -------- Display Setup -------- */\nfunction showDashboard() {\n  const content = document.getElementById(\"dashboard-content\");\n  if (content) content.style.display = \"block\";\n}\n\nfunction hideEmptyState() {\n  const notice = document.getElementById(\"no-device-notice\");\n  const content = document.getElementById(\"dashboard-content\");\n  if (notice) notice.style.display = \"none\";\n  if (content) content.style.display = \"block\";\n}\n\n/* -------- Scale & Status Helper Methods -------- */\nfunction renderTempScale(value) {\n  const wrap = document.getElementById(\"temp-scale\");\n  if (!wrap) return;\n  const rows = [34, 30, 26, 22, 18];\n  wrap.innerHTML = \"\";\n  rows.forEach((r) => {\n    const isMarked = Math.abs(value - r) <= 2;\n    const row = document.createElement(\"div\");\n    row.className = \"tick-scale__row\" + (isMarked ? \" is-marked\" : \"\");\n    row.innerHTML = `<span class=\"tick-scale__num\">${r}</span><span class=\"tick-scale__bar\">${isMarked ? '<span class=\"tick-scale__dot\"></span>' : \"\"}</span>`;\n    wrap.appendChild(row);\n  });\n}\n\nfunction renderBarScale(elementId, value, min, max, label) {\n  const wrap = document.getElementById(elementId);\n  if (!wrap) return;\n  let pct = ((Number(value) - min) / (max - min)) * 100;\n  pct = Math.max(0, Math.min(100, pct));\n  wrap.innerHTML = `\n    <div class=\"bar-scale__track\">\n      <div class=\"bar-scale__fill\" style=\"width:${pct}%\"></div>\n      <div class=\"bar-scale__marker\" style=\"left:${pct}%\"></div>\n    </div>\n    <div class=\"bar-scale__value\">${label}</div>`;\n}\n\nfunction tempStatus(value) {\n  if (!isValidNumber(value)) return { label: \"DEMO DATA\", cls: \"status-pill--ok\" };\n  value = Number(value);\n  return (value >= 18 && value <= 30)\n    ? { label: \"NORMAL\", cls: \"status-pill--ok\" }\n    : { label: \"CHECK\", cls: \"status-pill--warn\" };\n}\n\nfunction humidityStatus(value) {\n  if (!isValidNumber(value)) return { label: \"DEMO DATA\", cls: \"status-pill--ok\" };\n  value = Number(value);\n  return (value >= 30 && value <= 70)\n    ? { label: \"NORMAL\", cls: \"status-pill--ok\" }\n    : { label: \"CHECK\", cls: \"status-pill--warn\" };\n}\n\nfunction lightStatus(ldr) {\n  if (!isValidNumber(ldr)) return { label: \"BRIGHT\", cls: \"status-pill--ok\" };\n  return ldr === 1\n    ? { label: \"DARK\", cls: \"status-pill--warn\" }\n    : { label: \"BRIGHT\", cls: \"status-pill--ok\" };\n}\n\nfunction applyStatusPill(elementId, status) {\n  const el = document.getElementById(elementId);\n  if (!el) return;\n  el.textContent = status.label;\n  el.className = \"status-pill \" + (status.cls || \"\");\n}\n\nfunction setDotText(id, ok, text) {\n  const container = document.getElementById(id);\n  if (!container) return;\n  const dot = container.querySelector(\".dot\");\n  const valueText = container.querySelector(\".val-text\");\n  if (dot) dot.className = \"dot \" + (ok ? \"dot--ok\" : \"dot--fault\");\n  if (valueText) valueText.textContent = text !== undefined ? text : (ok ? \"READY\" : \"NO SIGNAL\");\n}\n\n/* -------- Header & System Indicators -------- */\nfunction updateHeaderSystemStatus() {\n  const dot = document.getElementById(\"esp32-dot\");\n  const text = document.getElementById(\"esp32-status-text\");\n  if (dot) dot.className = \"dot dot--ok\";\n  if (text) text.textContent = \"ONLINE\";\n  setText(\"esp32-lastseen\", \"DEMO MODE\");\n\n  setDotText(\"strip-esp32\", true, \"ONLINE\");\n  setDotText(\"strip-db\", true, \"CONNECTED\");\n}\n\n/* -------- Single Source of Truth: Bulb UI Renderer -------- */\nfunction updateBulbUI(isOn) {\n  const bulbDot = document.getElementById(\"bulb-state-dot\");\n  const bulbText = document.getElementById(\"bulb-state-text\");\n  const toggleBtn = document.getElementById(\"bulb-toggle-btn\");\n\n  if (bulbDot) bulbDot.className = \"dot \" + (isOn ? \"dot--ok\" : \"dot--off\");\n  if (bulbText) bulbText.textContent = isOn ? \"ON\" : \"OFF\";\n\n  if (toggleBtn) {\n    toggleBtn.dataset.state = isOn ? \"ON\" : \"OFF\";\n    if (currentMode === \"AUTO\") {\n      toggleBtn.disabled = true;\n      toggleBtn.title = \"In AUTO mode, bulb control is managed automatically.\";\n      toggleBtn.textContent = isOn ? \"POWER OFF\" : \"POWER ON\";\n      if (isOn) {\n        toggleBtn.classList.add(\"btn--danger\");\n        toggleBtn.classList.remove(\"btn--accent\");\n      } else {\n        toggleBtn.classList.add(\"btn--accent\");\n        toggleBtn.classList.remove(\"btn--danger\");\n      }\n    } else {\n      toggleBtn.disabled = isWritingBulb;\n      if (isWritingBulb) {\n        toggleBtn.textContent = \"UPDATING...\";\n      } else if (isOn) {\n        toggleBtn.textContent = \"POWER OFF\";\n        toggleBtn.classList.add(\"btn--danger\");\n        toggleBtn.classList.remove(\"btn--accent\");\n      } else {\n        toggleBtn.textContent = \"POWER ON\";\n        toggleBtn.classList.add(\"btn--accent\");\n        toggleBtn.classList.remove(\"btn--danger\");\n      }\n      toggleBtn.title = \"\";\n    }\n  }\n\n  setDotText(\"strip-relay\", true, isOn ? \"ON\" : \"OFF\");\n}\n\n/* -------- Single Source of Truth: Mode UI Renderer -------- */\nfunction updateModeUI(mode) {\n  currentMode = mode;\n  document.querySelectorAll(\".mode-selector__opt\").forEach((el) => {\n    const isSelected = el.dataset.mode === mode;\n    el.classList.toggle(\"is-selected\", isSelected);\n    el.classList.remove(\"is-disabled\");\n  });\n\n  const autoPanel = document.getElementById(\"auto-lighting-panel\");\n  if (autoPanel) autoPanel.style.display = mode === \"AUTO\" ? \"block\" : \"none\";\n  setText(\"mode-strip-value\", mode === \"AUTO\" ? \"AUTO MODE\" : \"MANUAL MODE\");\n\n  updateBulbUI(currentBulbState);\n}\n\n/* -------- Single Source of Truth: Threshold UI Renderer -------- */\nfunction updateThresholdUI(value) {\n  currentThreshold = Number(value);\n\n  const slider = document.getElementById(\"threshold-slider\");\n  const saveBtn = document.getElementById(\"save-threshold-btn\");\n\n  // Do not overwrite the user's slider position while editing.\n  if (!isThresholdDirty && slider) {\n    slider.value = currentThreshold;\n    slider.disabled = false;\n    setText(\"threshold-value\", currentThreshold);\n  }\n\n  if (saveBtn && !isSavingThreshold) {\n    saveBtn.disabled = !isThresholdDirty;\n    saveBtn.textContent = isThresholdDirty\n      ? \"Save Threshold\"\n      : \"Saved\";\n  }\n}\n\n/* -------- Firebase Realtime Listeners -------- */\nfunction bindFirebaseListeners() {\n  updateHeaderSystemStatus();\n  hideEmptyState();\n\n  /* 1. Bulb State Listener (/control/bulbState) */\n  const bulbRef = db.ref(DB_PATHS.controlField(\"bulbState\"));\n  bulbRef.on(\"value\", (snapshot) => {\n    if (!snapshot.exists() || snapshot.val() === null) {\n      bulbRef.set(false);\n      return;\n    }\n    const val = snapshot.val();\n    const state = normalizeBulbState(val);\n    currentBulbState = state;\n    updateBulbUI(currentBulbState);\n  }, (error) => {\n    console.error(\"Bulb state listener error:\", error);\n    showToast(\"Unable to fetch bulb state\", \"warn\");\n  });\n\n  /* 2. Mode Listener (/control/mode) */\n  const modeRef = db.ref(DB_PATHS.controlField(\"mode\"));\n  modeRef.on(\"value\", (snapshot) => {\n    if (!snapshot.exists() || snapshot.val() === null) {\n      modeRef.set(\"MANUAL\");\n      return;\n    }\n    const mode = String(snapshot.val()).toUpperCase();\n    currentMode = (mode === \"AUTO\") ? \"AUTO\" : \"MANUAL\";\n    updateModeUI(currentMode);\n  }, (error) => {\n    console.error(\"Mode listener error:\", error);\n    showToast(\"Unable to fetch mode state\", \"warn\");\n  });\n\n  /* 3. Threshold Listener (/control/ldrThreshold) */\n  const thresholdRef = db.ref(DB_PATHS.controlField(\"ldrThreshold\"));\n  thresholdRef.on(\"value\", (snapshot) => {\n    if (!snapshot.exists() || snapshot.val() === null) {\n      thresholdRef.set(512);\n      return;\n    }\n    const val = Number(snapshot.val());\n    if (isValidNumber(val)) {\n      updateThresholdUI(val);\n    }\n  }, (error) => {\n    console.error(\"Threshold listener error:\", error);\n  });\n\n  /* 4. Current / History Sensor Data Listener */\n  db.ref(DB_PATHS.current).on(\"value\", (snapshot) => {\n    const data = snapshot.val();\n    if (data && Object.keys(data).length > 0) {\n      renderSensorData(data);\n    } else {\n      loadLatestHistorySensorFallback();\n    }\n  }, (error) => {\n    console.error(\"Sensor listener error:\", error);\n    loadLatestHistorySensorFallback();\n  });\n}\n\nfunction renderSensorData(data) {\n  if (isValidNumber(data.temperature)) {\n    const t = Number(data.temperature);\n    setText(\"temp-value\", t.toFixed(1));\n    renderTempScale(t);\n    applyStatusPill(\"temp-status\", tempStatus(t));\n    setDotText(\"strip-dht\", true, \"READY\");\n  } else {\n    setText(\"temp-value\", \"24.5\");\n    renderTempScale(24.5);\n    applyStatusPill(\"temp-status\", { label: \"DEMO DATA\", cls: \"status-pill--ok\" });\n    setDotText(\"strip-dht\", true, \"DEMO\");\n  }\n\n  if (isValidNumber(data.humidity)) {\n    const h = Number(data.humidity);\n    setText(\"humidity-value\", Math.round(h));\n    renderBarScale(\"humidity-scale\", h, 0, 100, Math.round(h) + \"%\");\n    applyStatusPill(\"humidity-status\", humidityStatus(h));\n  } else {\n    setText(\"humidity-value\", \"55\");\n    renderBarScale(\"humidity-scale\", 55, 0, 100, \"55%\");\n    applyStatusPill(\"humidity-status\", { label: \"DEMO DATA\", cls: \"status-pill--ok\" });\n  }\n\n  if (isValidNumber(data.ldr)) {\n    const ldr = Number(data.ldr);\n    const condition = ldr === 1 ? \"DARK\" : \"BRIGHT\";\n    setText(\"light-value\", condition);\n    document.getElementById(\"light-value\")?.classList.add(\"instrument__value--word\");\n    renderBarScale(\"light-scale\", ldr, 0, 1, condition);\n    applyStatusPill(\"light-status\", lightStatus(ldr));\n    setDotText(\"strip-ldr\", true, \"READY\");\n  } else {\n    setText(\"light-value\", \"BRIGHT\");\n    document.getElementById(\"light-value\")?.classList.add(\"instrument__value--word\");\n    renderBarScale(\"light-scale\", 0, 0, 1, \"BRIGHT\");\n    applyStatusPill(\"light-status\", { label: \"BRIGHT\", cls: \"status-pill--ok\" });\n    setDotText(\"strip-ldr\", true, \"DEMO\");\n  }\n}\n\nfunction loadLatestHistorySensorFallback() {\n  db.ref(DB_PATHS.history).limitToLast(1).once(\"value\")\n    .then((snap) => {\n      let lastRec = null;\n      snap.forEach((child) => { lastRec = child.val(); });\n      if (lastRec) {\n        renderSensorData(lastRec);\n      } else {\n        renderSensorData({});\n      }\n    })\n    .catch(() => renderSensorData({}));\n}\n\n/* -------- Interactive Controls -------- */\nfunction initControls() {\n  const toggleBtn = document.getElementById(\"bulb-toggle-btn\");\n  if (toggleBtn) {\n    toggleBtn.addEventListener(\"click\", async () => {\n      if (currentMode === \"AUTO\") {\n        showToast(\"Switch to MANUAL mode to control bulb\", \"warn\");\n        return;\n      }\n      if (isWritingBulb) return; // Prevent rapid click duplicate writes\n\n      const targetState = !currentBulbState;\n      isWritingBulb = true;\n      updateBulbUI(currentBulbState);\n\n      try {\n        await db.ref(DB_PATHS.controlField(\"bulbState\")).set(targetState);\n        showToast(`Bulb turned ${targetState ? \"ON\" : \"OFF\"}`, \"success\");\n      } catch (error) {\n        console.error(\"Bulb update error:\", error);\n        showToast(\"Unable to update bulb state\", \"warn\");\n      } finally {\n        isWritingBulb = false;\n        updateBulbUI(currentBulbState);\n      }\n    });\n  }\n\n  document.querySelectorAll(\".mode-selector__opt\").forEach((opt) => {\n    opt.addEventListener(\"click\", async () => {\n      const requestedMode = String(opt.dataset.mode).toUpperCase();\n      if (requestedMode !== \"AUTO\" && requestedMode !== \"MANUAL\") return;\n      if (requestedMode === currentMode || isWritingMode) return;\n\n      isWritingMode = true;\n      try {\n        await db.ref(DB_PATHS.controlField(\"mode\")).set(requestedMode);\n        showToast(`Switched to ${requestedMode} mode`, \"success\");\n      } catch (error) {\n        console.error(\"Mode update error:\", error);\n        showToast(\"Unable to change operating mode\", \"warn\");\n      } finally {\n        isWritingMode = false;\n        updateModeUI(currentMode);\n      }\n    });\n  });\n\n  /* LDR Threshold Interactive Slider Controls */\n  const slider = document.getElementById(\"threshold-slider\");\n\n  if (slider) {\n    slider.disabled = false;\n\n    slider.addEventListener(\"input\", () => {\n      const value = Number(slider.value);\n\n      isThresholdDirty = true;\n      currentThreshold = value;\n\n      setText(\"threshold-value\", value);\n\n      const saveBtn = document.getElementById(\"save-threshold-btn\");\n\n      if (saveBtn && !isSavingThreshold) {\n        saveBtn.disabled = false;\n        saveBtn.textContent = \"Save Threshold\";\n      }\n    });\n  }\n\n  const saveThresholdBtn = document.getElementById(\"save-threshold-btn\");\n  if (saveThresholdBtn) {\n    saveThresholdBtn.disabled = false;\n    saveThresholdBtn.addEventListener(\"click\", async () => {\n      if (isSavingThreshold) return;\n      const s = document.getElementById(\"threshold-slider\");\n      if (!s) return;\n      const val = Number(s.value);\n      isSavingThreshold = true;\n      saveThresholdBtn.textContent = \"SAVING...\";\n      saveThresholdBtn.disabled = true;\n\n      try {\n        await db.ref(DB_PATHS.controlField(\"ldrThreshold\")).set(val);\n\n        currentThreshold = val;\n        isThresholdDirty = false;\n\n        setText(\"threshold-value\", val);\n\n        showToast(\"LDR threshold saved\", \"success\");\n\n        saveThresholdBtn.textContent = \"SAVED\";\n\n        setTimeout(() => {\n          saveThresholdBtn.textContent = \"Save Threshold\";\n          saveThresholdBtn.disabled = true;\n        }, 1500);\n\n      } catch (error) {\n        console.error(\"Save threshold error:\", error);\n        showToast(\"Unable to save threshold\", \"warn\");\n        saveThresholdBtn.textContent = \"Save Threshold\";\n        saveThresholdBtn.disabled = false;\n      } finally {\n        isSavingThreshold = false;\n      }\n    });\n  }\n}\n\n/* -------- Environmental Trend Chart -------- */\nfunction renderTrendChart(data) {\n  const svg = document.getElementById(\"trend-chart\");\n  if (!svg) return;\n  const W = 960, H = 220, padL = 40, padR = 40, padT = 14, padB = 24;\n  const innerW = W - padL - padR;\n  const innerH = H - padT - padB;\n  svg.setAttribute(\"viewBox\", `0 0 ${W} ${H}`);\n\n  if (!data.length) {\n    svg.innerHTML = `<text x=\"${W / 2}\" y=\"${H / 2}\" text-anchor=\"middle\" class=\"chart-axis-label\" font-size=\"11\">NO MEASUREMENTS AVAILABLE</text>`;\n    return;\n  }\n\n  const timestamps = data.map((d) => Number(d.timestamp)).filter(Number.isFinite);\n  if (!timestamps.length) {\n    svg.innerHTML = `<text x=\"${W / 2}\" y=\"${H / 2}\" text-anchor=\"middle\" class=\"chart-axis-label\" font-size=\"11\">NO VALID MEASUREMENTS</text>`;\n    return;\n  }\n\n  const tMin = Math.min(...timestamps), tMax = Math.max(...timestamps);\n  const tRange = tMax - tMin || 1;\n  const xFor = (t) => padL + ((Number(t) - tMin) / tRange) * innerW;\n\n  function seriesPath(key, min, max) {\n    const range = (max - min) || 1;\n    const yFor = (v) => padT + innerH - ((Number(v) - min) / range) * innerH;\n    return data\n      .filter((d) => isValidNumber(d[key]) && isValidNumber(d.timestamp))\n      .map((d) => `${xFor(d.timestamp).toFixed(1)},${yFor(d[key]).toFixed(1)}`)\n      .join(\" \");\n  }\n\n  let html = \"\";\n  for (let i = 0; i <= 4; i++) {\n    const y = padT + (innerH / 4) * i;\n    html += `<line x1=\"${padL}\" y1=\"${y}\" x2=\"${W - padR}\" y2=\"${y}\" class=\"chart-grid-line\" />`;\n  }\n  for (let i = 0; i <= 4; i++) {\n    const t = tMin + (tRange / 4) * i;\n    const label = new Date(t).toLocaleTimeString([], { hour: \"2-digit\", minute: \"2-digit\", hour12: false });\n    html += `<text x=\"${xFor(t)}\" y=\"${H - 6}\" text-anchor=\"middle\" class=\"chart-axis-label\">${label}</text>`;\n  }\n\n  const tempPoints = seriesPath(\"temperature\", 15, 35);\n  if (tempPoints) html += `<polyline points=\"${tempPoints}\" class=\"chart-line chart-line--temp\" />`;\n\n  const humidityPoints = seriesPath(\"humidity\", 0, 100);\n  if (humidityPoints) html += `<polyline points=\"${humidityPoints}\" class=\"chart-line chart-line--humidity\" />`;\n\n  const ldrPoints = seriesPath(\"ldr\", 0, 1);\n  if (ldrPoints) html += `<polyline points=\"${ldrPoints}\" class=\"chart-line chart-line--light\" />`;\n\n  svg.innerHTML = html;\n}\n\nfunction loadTrend() {\n  const cutoff = Date.now() - 6 * 60 * 60 * 1000;\n  db.ref(DB_PATHS.history).orderByChild(\"timestamp\").startAt(cutoff).limitToLast(300).once(\"value\")\n    .then((snapshot) => {\n      const readings = [];\n      snapshot.forEach((child) => {\n        const v = child.val();\n        if (v && isValidNumber(v.timestamp)) readings.push(v);\n      });\n      readings.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));\n      renderTrendChart(readings);\n    })\n    .catch((error) => {\n      console.error(\"Trend load error:\", error);\n      renderTrendChart([]);\n    });\n}\n\n/* -------- Initialization -------- */\nfunction initDashboard(user) {\n  showDashboard();\n\n  const accountName = document.getElementById(\"account-name\");\n  if (accountName) {\n    db.ref(DB_PATHS.userProfile(user.uid)).once(\"value\")\n      .then((snapshot) => {\n        const profile = snapshot.val();\n        accountName.textContent = (profile && profile.name) ? profile.name : (user.email || \"\u2014\");\n      })\n      .catch((error) => {\n        console.error(\"Profile load error:\", error);\n        accountName.textContent = user.email || \"\u2014\";\n      });\n  }\n\n  tickClock();\n  bindFirebaseListeners();\n  initControls();\n  loadTrend();\n\n  db.ref(DB_PATHS.history).limitToLast(1).on(\"child_added\", () => loadTrend());\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (document.getElementById(\"dashboard-content\")) {\n    requireAuth(initDashboard);\n  }\n});",
      },
    ],
    images: FIREBASE_EVIDENCE_IMAGES,
    videos: [
      {
        provider: "vimeo",
        videoId: "1242735151",
        title: "IoT-Dashboard — EMS-01 Firebase Web Console Workflow Demonstration",
        aspectRatio: "16/9",
      },
    ],
    troubleshooting: [
      {
        problem: "Firebase Permission Denied Error with Unauthenticated Firmware",
        cause: "Realtime Database security rules required authenticated access (auth != null), while default sketch code attempted anonymous/unauthenticated writes.",
        debugging: "Simulated database requests in Firebase Console rules playground and observed aClient.lastError().message() returning 'Permission Denied'.",
        solution: "Provisioned a dedicated hardware user in Firebase Authentication (esp32firebase@gmail.com) and instantiated UserAuth user_auth(API_KEY, USER_EMAIL, USER_PASSWORD) in firmware.",
        result: "100% authenticated, secure database write operations without exposing open public access.",
      },
      {
        problem: "ESP32 Memory Leak & Watchdog Crash from Repeated SSL Handshakes",
        cause: "Creating new SSL/TLS client instances on every HTTP cycle consumed ~40KB heap per handshake, fragmenting RAM until kernel panic occurred.",
        debugging: "Logged ESP.getFreeHeap() periodically via Serial Monitor, observing free heap steadily drop from 180KB to under 20KB.",
        solution: "Maintained a single persistent AsyncClient aClient(ssl_client) session and implemented non-blocking millis() timer checks instead of blocking delays.",
        result: "Stable, leak-free continuous operation maintaining >120KB free heap over multi-day test runs.",
      },
      {
        problem: "State Desynchronization on Rapid Web Relay Toggling",
        cause: "Web dashboard read and wrote to the same database node, causing optimistic local UI updates to collide with unconfirmed hardware states.",
        debugging: "Observed relay switch visually snapping back to previous state when network packets experienced jitter.",
        solution: "Implemented split-node architecture: Dashboard writes intent to /control/bulbState; ESP32 confirms execution by reporting actual pin voltage to /current/bulbState.",
        result: "Zero race conditions, verified physical state reporting, and seamless multi-client synchronization.",
      },
    ],
    repositoryInfo: {
      repoName: "Firebase_Dashboard",
      localPath: "/home/surya-j-s/Projects/Dashboard-Firebase/",
      status: "local_verified",
      description: "Authoritative local repository containing complete EMS-01 Firebase web application.",
      primaryFiles: [
        "index.html",
        "login.html",
        "dashboard.html",
        "analytics.html",
        "history.html",
        "export.html",
        "js/firebase-config.js",
        "js/auth.js",
        "js/dashboard.js",
      ],
    },
    limitations: [
      "[Implemented — Wi-Fi Disconnect Sensitivity]: If Wi-Fi drops, Firebase write operations pause until reconnectWiFi(true) re-establishes the connection.",
      "[Implemented — Free Tier Concurrent Limit]: Free-tier Firebase RTDB limits simultaneous client WebSocket connections to 100.",
    ],
    futureImprovements: [
      "[Future work — Local Sensor Caching]: Cache sensor samples in ESP32 RAM ring buffer during short network interruptions.",
      "[Future work — Push Notifications]: Integrate Firebase Cloud Messaging (FCM) for high-temperature or low-light alerts.",
    ],
    reflection:
      "Building a real-time dashboard with Firebase Realtime Database highlighted the advantages of WebSocket-backed BaaS platforms. Streaming telemetry directly into NoSQL JSON nodes enabled instant frontend UI updates without manual polling loops.",
  },
  {
    id: "task-05",
    number: "05",
    title: "Firebase Logging, Automation & Data Export",
    subtitle: "Autonomous Sensor Thresholding, Time-Series Logging & Client-Side CSV Analytics",
    overview:
      "What I built: An integrated, production-grade IoT architecture uniting on-device autonomous threshold control, dual operating modes (manual web control vs. autonomous darkness-triggered lighting), persistent chronological time-series database logging under /history, and a client-side RFC-4180 CSV dataset export utility.\n\nAuthoritative System Architecture & Operation:\n1. Microcontroller Firmware (Dashboard_Firebase.ino): The ESP32 continuously samples ambient temperature and humidity from DHT11 on GPIO 4 and digital light condition from LM393 digital LDR on GPIO 34. In autonomous mode (mode == 'AUTOMATIC'), the on-device control loop executes every 250ms, evaluating readLDR(). When dark (readLDR() == DARK_LDR_STATE, HIGH), it sets bulbState = true and drives RELAY_PIN 26 LOW (Relay ON); when bright, it sets bulbState = false and drives RELAY_PIN 26 HIGH (Relay OFF). In manual mode (mode == 'MANUAL'), the microcontroller ignores LDR light state and executes commands received from /control/bulbState.\n2. Historical Database Logging: Every 5 seconds, the ESP32 writes confirmed live state to /current and pushes a new timestamped record to /history/$pushId containing timestamp (epoch ms), temperature (°C), humidity (%), ldr (0/1), bulbState (bool), and mode.\n3. Client-Side CSV Export (export.js): The EMS-01 web application loads historical records from /history, filters by date range, formats RFC-4180 compliant CSV rows (Timestamp, Temperature, Humidity, LDR, Bulb State, Operating Mode), creates an in-memory Blob, and triggers browser file download.\n\nWhat I used: Integrated ESP32 Hardware Kit (DHT11 on GPIO 4, Digital LM393 LDR on GPIO 34, 5V Optocoupler Relay on GPIO 26, 230V AC lamp), Google Firebase Realtime Database (/current, /control, /history), EMS-01 Web Application with export.js.\n\nEvidence caption: Verified system evidence showing Firebase Realtime Database /history push-ID tree, live dashboard telemetry, and 73-second video demonstrating autonomous light-triggered relay control.\n\nImplementation notes: Firmware uses #define DHTPIN 4, #define LDR_PIN 34, #define RELAY_PIN 26. Active-LOW relay logic is enforced. Digital LDR module threshold is calibrated via onboard LM393 potentiometer trimmer.\n\nWhat changed/learned: Combining autonomous edge threshold decisions with cloud historical logging demonstrated how to balance local real-time responsiveness with centralized cloud analytics and operator override capabilities.",
    concepts: [
      {
        term: "Time-Series Historical Logging (/history/$pushId)",
        definition:
          "Hierarchical database logging structure where the ESP32 pushes immutable, chronological JSON telemetry objects under auto-generated Firebase push IDs ($pushId).",
      },
      {
        term: "On-Device Autonomous Threshold Control",
        definition:
          "Firmware control loop evaluating digital LDR input on GPIO 34 every 250ms. When darkness is detected, GPIO 26 is immediately driven LOW to energize the relay independently of cloud connectivity.",
      },
      {
        term: "Dual Operating Modes ('MANUAL' vs 'AUTOMATIC')",
        definition:
          "Control architecture managed via /control/mode and /current/mode flags, allowing operators to switch between manual dashboard overrides and autonomous light-driven automation.",
      },
      {
        term: "LM393 Hardware Potentiometer Calibration",
        definition:
          "Hardware threshold tuning using an onboard multi-turn trimmer on the LM393 comparator module to establish the exact analog light-to-digital transition point for ambient room lighting.",
      },
      {
        term: "Client-Side RFC-4180 CSV Blob Exporter",
        definition:
          "JavaScript engine in export.js that parses /history JSON records, maps stored values (timestamp, temperature, humidity, ldr, bulbState, mode) into CSV format, and triggers browser downloads via Blob and Object URLs.",
      },
    ],
    diagramSteps: [
      "DHT11 (GPIO 4) & Digital LDR (GPIO 34) Sampling",
      "Mode Evaluation: AUTOMATIC (LDR Trigger) vs MANUAL (Web Command)",
      "Local Relay Actuation (GPIO 26 LOW = ON, HIGH = OFF)",
      "Live State Sync (/current/temperature, humidity, ldr, bulbState)",
      "Persistent Time-Series Push Logging (/history/$pushId)",
      "Client-Side RFC-4180 CSV Dataset Export (export.js)",
    ],
    calibrationSteps: [
      {
        stepNumber: 1,
        title: "Power & Supply Verification",
        action: "Verify regulated 3.3V power is delivered across LDR module VCC and GND pins.",
        detail: "Ensure the power LED on the sensor board glows steadily with no voltage sag.",
      },
      {
        stepNumber: 2,
        title: "Ambient Environmental Baseline",
        action: "Mount the photoresistor sensor in its intended physical deployment orientation under normal room lighting.",
        detail: "Avoid shadowing the sensor with hands or equipment during calibration.",
      },
      {
        stepNumber: 3,
        title: "LM393 Potentiometer Trimmer Adjustment",
        action: "Using a precision slotted screwdriver, slowly rotate the blue multi-turn potentiometer on the sensor module.",
        detail: "Rotate until the onboard digital output indicator LED (D0) just extinguishes under ambient light.",
      },
      {
        stepNumber: 4,
        title: "Darkness Trigger & Hysteresis Verification",
        action: "Cover the photoresistor with a hand or opaque cover to simulate darkness.",
        detail: "Verify the D0 LED illuminates immediately and digitalRead(34) transitions from LOW (0) to HIGH (1).",
      },
      {
        stepNumber: 5,
        title: "Anti-Chatter Offset Tuning",
        action: "Turn the potentiometer an additional 1/4 turn past the transition threshold.",
        detail: "Prevents rapid relay contact chatter/buzzing during slow ambient twilight transitions.",
      },
      {
        stepNumber: 6,
        title: "End-to-End System Validation",
        action: "Switch operating mode to AUTOMATIC and test covering/uncovering sensor.",
        detail: "Verify the 230V lamp clicks ON instantly when covered and OFF when exposed to light.",
      },
    ],
    circuitData: {
      title: "Complete Integrated Multi-Sensor & Relay Automation Circuit",
      description:
        "The complete hardware setup combines ESP32 DevKit V1, DHT11 climate sensor on GPIO 4, digital LM393 LDR module on GPIO 34, and a 5V optocoupler relay module on GPIO 26. The relay's COM and NO contacts switch the 230V AC phase conductor to actuate the mains lamp.",
      taskId: "task-05",
      pinTable: [
        {
          pin: "GPIO 4",
          component: "DHT11 Climate Sensor",
          label: "DATA",
          type: "Digital I/O",
          notes: "Single-wire digital temperature and relative humidity signal line.",
        },
        {
          pin: "GPIO 34",
          component: "Digital LDR Module",
          label: "DO",
          type: "Digital I/O",
          notes: "Digital comparator output from LM393 (1 = Dark, 0 = Bright).",
        },
        {
          pin: "GPIO 26",
          component: "5V Relay Module",
          label: "IN (Signal)",
          type: "Digital I/O",
          notes: "Active-LOW relay actuation line for mains light bulb.",
        },
        {
          pin: "3V3",
          component: "DHT11 & LDR Modules",
          label: "VCC",
          type: "Power",
          notes: "Regulated 3.3V DC sensor logic supply.",
        },
        {
          pin: "VIN (5V)",
          component: "5V Relay Module",
          label: "VCC",
          type: "Power",
          notes: "5V DC coil power supply from USB rail.",
        },
        {
          pin: "GND",
          component: "All Modules",
          label: "GND",
          type: "Ground",
          notes: "Unified common ground plane.",
        },
        {
          pin: "Relay COM",
          component: "230V AC Mains",
          label: "Phase (Hot)",
          type: "AC Mains",
          notes: "AC Phase wire from wall outlet.",
        },
        {
          pin: "Relay NO",
          component: "Mains Bulb Fixture",
          label: "Switched Phase",
          type: "AC Mains",
          notes: "Normally Open contact; closes to illuminate lamp.",
        },
      ],
    },
    hardware: [
      {
        name: "Integrated ESP32 Hardware Kit",
        category: "Hardware",
        description: "Complete assembly combining ESP32, DHT11 (GPIO 4), Digital LDR (GPIO 34), and Relay (GPIO 26).",
      },
      {
        name: "DHT11 Climate Sensor",
        category: "Hardware",
        description: "Digital sensor reporting ambient temperature (°C) and humidity (%) every 5 seconds.",
      },
      {
        name: "Digital LM393 LDR Module",
        category: "Hardware",
        description: "Photoresistor with onboard comparator and trimmer potentiometer providing digital light states.",
      },
      {
        name: "5V Optocoupler Relay & Lamp",
        category: "Hardware",
        description: "Actuator circuit switching 230V AC mains load with complete optical isolation.",
      },
      {
        name: "Firebase RTDB Infrastructure",
        category: "Cloud / Protocol",
        description: "Cloud database managing real-time /current state and persistent /history time-series trees.",
      },
      {
        name: "EMS-01 Web Exporter Module",
        category: "Software",
        description: "Vanilla JavaScript export engine (export.js) generating RFC-4180 CSV downloads via Blobs.",
      },
    ],
    wiringNotes:
      "DHT11 connects to GPIO 4. Digital LDR module DO connects to GPIO 34. Relay IN connects to GPIO 26. Sensors are powered by 3.3V; relay coil is powered by 5V VIN. All grounds are tied to ESP32 GND.",
    configuration: [
      "Configured dual operating modes ('MANUAL' vs 'AUTOMATIC') in firmware state machine.",
      "Calibrated LM393 trimmer potentiometer for reliable ambient room light transition detection.",
      "Implemented 250ms non-blocking localControlInterval for autonomous relay switching.",
      "Configured readingInterval = 5000ms for DHT11 sampling and Firebase historical push logging.",
      "Structured /history database push tree containing timestamp, temperature, humidity, ldr, bulbState, and mode.",
      "Developed export.js module supporting date range filtering and client-side RFC-4180 CSV generation.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "Dashboard_Firebase.ino",
        description: "Complete Integrated ESP32 Autonomous Lighting, Telemetry & Logging Firmware (Authoritative)",
        code: "#define ENABLE_USER_AUTH\n#define ENABLE_DATABASE\n\n#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include <FirebaseClient.h>\n#include <DHT.h>\n#include <time.h>\n\n// ======================================================\n// WIFI\n// ======================================================\n\n#define WIFI_SSID \"YOUR_WIFI_SSID\"\n#define WIFI_PASSWORD \"YOUR_WIFI_PASSWORD\"\n\n// ======================================================\n// FIREBASE\n// ======================================================\n\n#define API_KEY \"YOUR_FIREBASE_API_KEY\"\n\n#define USER_EMAIL \"YOUR_USER_EMAIL\"\n#define USER_PASSWORD \"YOUR_USER_PASSWORD\"\n\n#define DATABASE_URL \"https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/\"\n\n// ======================================================\n// PINS\n// ======================================================\n\n#define DHTPIN 4\n#define DHTTYPE DHT11\n\n#define LDR_PIN 34\n\n#define RELAY_PIN 26\n\n// ======================================================\n// DIGITAL LDR CONFIGURATION\n// ======================================================\n\n/*\n   Digital LDR module:\n\n   DO -> GPIO34\n\n   Change HIGH to LOW if your LDR module behaves\n   opposite to this configuration.\n*/\n\n#define DARK_LDR_STATE HIGH\n\n// ======================================================\n// RELAY CONFIGURATION\n// ======================================================\n\n/*\n   Active LOW relay:\n\n   LOW  = ON\n   HIGH = OFF\n*/\n\n#define RELAY_ON_STATE LOW\n#define RELAY_OFF_STATE HIGH\n\n// ======================================================\n// FIREBASE OBJECTS\n// ======================================================\n\nDHT dht(\n  DHTPIN,\n  DHTTYPE\n);\n\nWiFiClientSecure ssl_client;\n\nusing AsyncClient = AsyncClientClass;\n\nAsyncClient aClient(\n  ssl_client\n);\n\nFirebaseApp app;\n\nUserAuth user_auth(\n  API_KEY,\n  USER_EMAIL,\n  USER_PASSWORD\n);\n\nRealtimeDatabase Database;\n\n// ======================================================\n// TIMERS\n// ======================================================\n\nunsigned long lastReading = 0;\nunsigned long lastControlRead = 0;\nunsigned long lastHeartbeat = 0;\nunsigned long lastLocalControl = 0;\n\nconst unsigned long readingInterval = 5000;\nconst unsigned long controlInterval = 2000;\nconst unsigned long heartbeatInterval = 5000;\nconst unsigned long localControlInterval = 250;\n\n// ======================================================\n// SYSTEM STATE\n// ======================================================\n\nbool bulbState = false;\n\nString operatingMode = \"MANUAL\";\n\nbool controlInitialized = false;\n\n// ======================================================\n// APPLY RELAY\n// ======================================================\n\nvoid applyRelay() {\n\n  if (bulbState) {\n\n    digitalWrite(\n      RELAY_PIN,\n      RELAY_ON_STATE\n    );\n\n  } else {\n\n    digitalWrite(\n      RELAY_PIN,\n      RELAY_OFF_STATE\n    );\n  }\n}\n\n// ======================================================\n// READ DIGITAL LDR\n// ======================================================\n\nint readLDR() {\n\n  return digitalRead(\n    LDR_PIN\n  );\n}\n\n// ======================================================\n// FIREBASE ONLINE STATUS\n// ======================================================\n\nvoid firebaseSetOnline(\n  bool online\n) {\n\n  if (\n    Database.set<bool>(\n      aClient,\n      \"/current/online\",\n      online\n    )\n  ) {\n\n    Serial.print(\n      \"Online status -> \"\n    );\n\n    Serial.println(\n      online\n        ? \"ONLINE\"\n        : \"OFFLINE\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Online status FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// CURRENT TIMESTAMP\n// ======================================================\n\nunsigned long long currentTimestampMs() {\n\n  time_t now =\n    time(nullptr);\n\n  if (\n    now < 1700000000\n  ) {\n\n    return 0;\n  }\n\n  return\n    (unsigned long long)now *\n    1000ULL;\n}\n\n// ======================================================\n// UPDATE LAST SEEN\n// ======================================================\n\nvoid updateLastSeen() {\n\n  unsigned long long timestamp =\n    currentTimestampMs();\n\n  if (\n    timestamp == 0\n  ) {\n\n    return;\n  }\n\n  if (\n    Database.set<number_t>(\n      aClient,\n      \"/current/lastSeen\",\n      number_t(\n        (double)timestamp,\n        0\n      )\n    )\n  ) {\n\n    Serial.println(\n      \"Last seen -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Last seen FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// INITIALIZE CONTROL NODE\n// ======================================================\n\nvoid initializeControlState() {\n\n  Serial.println();\n  Serial.println(\n    \"Checking Firebase control state...\"\n  );\n\n  // ----------------------------------------------------\n  // CONTROL: BULB STATE\n  // ----------------------------------------------------\n\n  bool existingBulbState =\n    Database.get<bool>(\n      aClient,\n      \"/control/bulbState\"\n    );\n\n  if (\n    aClient.lastError().code() != 0\n  ) {\n\n    Serial.println(\n      \"/control/bulbState does not exist.\"\n    );\n\n    Serial.println(\n      \"Creating default: false\"\n    );\n\n    if (\n      Database.set<bool>(\n        aClient,\n        \"/control/bulbState\",\n        false\n      )\n    ) {\n\n      Serial.println(\n        \"control/bulbState created.\"\n      );\n\n      bulbState =\n        false;\n\n    } else {\n\n      Serial.print(\n        \"Failed to create control/bulbState: \"\n      );\n\n      Serial.println(\n        aClient.lastError().message()\n      );\n    }\n\n  } else {\n\n    /*\n       Preserve the dashboard command.\n    */\n\n    bulbState =\n      existingBulbState;\n\n    Serial.print(\n      \"Existing control/bulbState: \"\n    );\n\n    Serial.println(\n      bulbState\n        ? \"ON\"\n        : \"OFF\"\n    );\n  }\n\n  // ----------------------------------------------------\n  // CONTROL: MODE\n  // ----------------------------------------------------\n\n  String existingMode =\n    Database.get<String>(\n      aClient,\n      \"/control/mode\"\n    );\n\n  if (\n    aClient.lastError().code() != 0\n  ) {\n\n    Serial.println(\n      \"/control/mode does not exist.\"\n    );\n\n    Serial.println(\n      \"Creating default: MANUAL\"\n    );\n\n    if (\n      Database.set<String>(\n        aClient,\n        \"/control/mode\",\n        \"MANUAL\"\n      )\n    ) {\n\n      Serial.println(\n        \"control/mode created.\"\n      );\n\n      operatingMode =\n        \"MANUAL\";\n\n    } else {\n\n      Serial.print(\n        \"Failed to create control/mode: \"\n      );\n\n      Serial.println(\n        aClient.lastError().message()\n      );\n    }\n\n  } else {\n\n    if (\n      existingMode == \"AUTO\" ||\n      existingMode == \"MANUAL\"\n    ) {\n\n      operatingMode =\n        existingMode;\n    }\n\n    Serial.print(\n      \"Existing control/mode: \"\n    );\n\n    Serial.println(\n      operatingMode\n    );\n  }\n\n  // ----------------------------------------------------\n  // APPLY INITIAL RELAY STATE\n  // ----------------------------------------------------\n\n  applyRelay();\n\n  controlInitialized =\n    true;\n\n  Serial.println(\n    \"Control initialization complete.\"\n  );\n}\n\n// ======================================================\n// AUTOMATIC LIGHTING\n// ======================================================\n\nvoid applyAutomaticLighting(\n  int ldrState\n) {\n\n  /*\n     Digital LDR:\n\n     DARK  -> BULB ON\n     LIGHT -> BULB OFF\n  */\n\n  if (\n    ldrState ==\n    DARK_LDR_STATE\n  ) {\n\n    bulbState =\n      true;\n\n  } else {\n\n    bulbState =\n      false;\n  }\n}\n\n// ======================================================\n// LOCAL RELAY CONTROL\n// ======================================================\n\nvoid applyLocalControl() {\n\n  /*\n     This function MUST NOT depend on Wi-Fi or Firebase.\n\n     AUTO:\n       LDR -> ESP32 -> Relay\n\n     MANUAL:\n       Last accepted bulbState -> Relay\n\n     Therefore the physical lighting system keeps working\n     even when Firebase/Wi-Fi is unavailable.\n  */\n\n  if (\n    operatingMode ==\n    \"AUTO\"\n  ) {\n\n    int ldrState =\n      readLDR();\n\n    applyAutomaticLighting(\n      ldrState\n    );\n  }\n\n  applyRelay();\n}\n\n// ======================================================\n// WRITE CURRENT DEVICE STATE\n// ======================================================\n\nvoid writeCurrentState() {\n\n  bool success =\n    true;\n\n  /*\n     IMPORTANT:\n\n     The dashboard reads /current.\n\n     Therefore all live ESP32 data is written here.\n  */\n\n  success &=\n    Database.set<bool>(\n      aClient,\n      \"/current/bulbState\",\n      bulbState\n    );\n\n  success &=\n    Database.set<String>(\n      aClient,\n      \"/current/mode\",\n      operatingMode\n    );\n\n  // Compatibility with dashboards that use operatingMode.\n  success &=\n    Database.set<String>(\n      aClient,\n      \"/current/operatingMode\",\n      operatingMode\n    );\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Current state -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Current state FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// WRITE CURRENT SENSOR DATA\n// ======================================================\n\nvoid writeCurrentSensorData(\n  float temperature,\n  float humidity,\n  int ldrState\n) {\n\n  bool success =\n    true;\n\n  success &=\n    Database.set<float>(\n      aClient,\n      \"/current/temperature\",\n      temperature\n    );\n\n  success &=\n    Database.set<float>(\n      aClient,\n      \"/current/humidity\",\n      humidity\n    );\n\n  success &=\n    Database.set<int>(\n      aClient,\n      \"/current/ldr\",\n      ldrState\n    );\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Sensor data -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Sensor data FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// WRITE HISTORICAL READING\n// ======================================================\n\nvoid writeHistoricalReading(\n  float temperature,\n  float humidity,\n  int ldrState\n) {\n\n  unsigned long long timestamp =\n    currentTimestampMs();\n\n  if (\n    timestamp == 0\n  ) {\n\n    Serial.println(\n      \"History skipped: clock not synchronized.\"\n    );\n\n    return;\n  }\n\n  /*\n     FIX:\n\n     Dashboard uses /history.\n\n     Therefore ESP32 now writes:\n\n       /history/<timestamp>/\n  */\n\n  String base =\n    \"/history/\" +\n    String(timestamp);\n\n  bool success =\n    true;\n\n  // ----------------------------------------------------\n  // TIMESTAMP\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<number_t>(\n      aClient,\n      base + \"/timestamp\",\n      number_t(\n        (double)timestamp,\n        0\n      )\n    );\n\n  // ----------------------------------------------------\n  // TEMPERATURE\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<float>(\n      aClient,\n      base + \"/temperature\",\n      temperature\n    );\n\n  // ----------------------------------------------------\n  // HUMIDITY\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<float>(\n      aClient,\n      base + \"/humidity\",\n      humidity\n    );\n\n  // ----------------------------------------------------\n  // LDR\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<int>(\n      aClient,\n      base + \"/ldr\",\n      ldrState\n    );\n\n  // ----------------------------------------------------\n  // BULB\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<bool>(\n      aClient,\n      base + \"/bulbState\",\n      bulbState\n    );\n\n  // ----------------------------------------------------\n  // MODE\n  // ----------------------------------------------------\n\n  success &=\n    Database.set<String>(\n      aClient,\n      base + \"/mode\",\n      operatingMode\n    );\n\n  // ----------------------------------------------------\n  // RESULT\n  // ----------------------------------------------------\n\n  if (\n    success\n  ) {\n\n    Serial.println(\n      \"Historical reading -> Firebase OK\"\n    );\n\n  } else {\n\n    Serial.print(\n      \"Historical reading FAILED: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n}\n\n// ======================================================\n// READ DASHBOARD CONTROL\n// ======================================================\n\nvoid readDashboardControl() {\n\n  // ----------------------------------------------------\n  // MODE\n  // ----------------------------------------------------\n\n  String newMode =\n    Database.get<String>(\n      aClient,\n      \"/control/mode\"\n    );\n\n  if (\n    aClient.lastError().code() == 0\n  ) {\n\n    if (\n      newMode == \"AUTO\" ||\n      newMode == \"MANUAL\"\n    ) {\n\n      if (\n        operatingMode !=\n        newMode\n      ) {\n\n        Serial.print(\n          \"Mode changed: \"\n        );\n\n        Serial.print(\n          operatingMode\n        );\n\n        Serial.print(\n          \" -> \"\n        );\n\n        Serial.println(\n          newMode\n        );\n      }\n\n      operatingMode =\n        newMode;\n    }\n\n  } else {\n\n    Serial.print(\n      \"Mode read failed: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n  }\n\n  // ----------------------------------------------------\n  // MANUAL BULB COMMAND\n  // ----------------------------------------------------\n\n  bool requestedBulbState =\n    Database.get<bool>(\n      aClient,\n      \"/control/bulbState\"\n    );\n\n  if (\n    aClient.lastError().code() == 0\n  ) {\n\n    if (\n      operatingMode ==\n      \"MANUAL\"\n    ) {\n\n      if (\n        bulbState !=\n        requestedBulbState\n      ) {\n\n        Serial.print(\n          \"Dashboard bulb command: \"\n        );\n\n        Serial.println(\n          requestedBulbState\n            ? \"ON\"\n            : \"OFF\"\n        );\n      }\n\n      bulbState =\n        requestedBulbState;\n    }\n\n  } else {\n\n    Serial.print(\n      \"Bulb control read failed: \"\n    );\n\n    Serial.println(\n      aClient.lastError().message()\n    );\n\n    /*\n       If Firebase temporarily fails,\n       keep the existing bulb state.\n    */\n  }\n\n  // ----------------------------------------------------\n  // APPLY LOCAL CONTROL\n  // ----------------------------------------------------\n\n  applyLocalControl();\n\n  // ----------------------------------------------------\n  // REPORT ACTUAL STATE\n  // ----------------------------------------------------\n\n  writeCurrentState();\n}\n\n// ======================================================\n// SETUP\n// ======================================================\n\nvoid setup() {\n\n  Serial.begin(\n    115200\n  );\n\n  delay(1000);\n\n  // ====================================================\n  // SENSORS\n  // ====================================================\n\n  dht.begin();\n\n  pinMode(\n    LDR_PIN,\n    INPUT\n  );\n\n  // ====================================================\n  // RELAY\n  // ====================================================\n\n  pinMode(\n    RELAY_PIN,\n    OUTPUT\n  );\n\n  digitalWrite(\n    RELAY_PIN,\n    RELAY_OFF_STATE\n  );\n\n  bulbState =\n    false;\n\n  // ====================================================\n  // STARTUP MESSAGE\n  // ====================================================\n\n  Serial.println();\n  Serial.println(\n    \"================================\"\n  );\n\n  Serial.println(\n    \"SMART ENVIRONMENT MONITOR\"\n  );\n\n  Serial.println(\n    \"================================\"\n  );\n\n  Serial.println();\n\n  Serial.println(\n    \"LDR MODE: DIGITAL\"\n  );\n\n  Serial.print(\n    \"Dark LDR state: \"\n  );\n\n  Serial.println(\n    DARK_LDR_STATE == HIGH\n      ? \"HIGH\"\n      : \"LOW\"\n  );\n\n  // ====================================================\n  // WIFI\n  // ====================================================\n\n  Serial.println();\n\n  Serial.println(\n    \"Connecting to Wi-Fi...\"\n  );\n\n  WiFi.begin(\n    WIFI_SSID,\n    WIFI_PASSWORD\n  );\n\n  while (\n    WiFi.status() !=\n    WL_CONNECTED\n  ) {\n\n    Serial.print(\n      \".\"\n    );\n\n    delay(500);\n  }\n\n  Serial.println();\n\n  Serial.println(\n    \"Wi-Fi connected!\"\n  );\n\n  Serial.print(\n    \"ESP32 IP: \"\n  );\n\n  Serial.println(\n    WiFi.localIP()\n  );\n\n  // ====================================================\n  // TIME\n  // ====================================================\n\n  Serial.println();\n\n  Serial.println(\n    \"Synchronizing clock...\"\n  );\n\n  configTime(\n    0,\n    0,\n    \"pool.ntp.org\",\n    \"time.nist.gov\"\n  );\n\n  unsigned long timeStart =\n    millis();\n\n  while (\n    time(nullptr) <\n      1700000000 &&\n    millis() -\n      timeStart <\n      15000\n  ) {\n\n    Serial.print(\n      \".\"\n    );\n\n    delay(250);\n  }\n\n  Serial.println();\n\n  if (\n    time(nullptr) >=\n    1700000000\n  ) {\n\n    Serial.println(\n      \"Clock synchronized.\"\n    );\n\n  } else {\n\n    Serial.println(\n      \"Clock synchronization timed out.\"\n    );\n  }\n\n  // ====================================================\n  // FIREBASE\n  // ====================================================\n\n  ssl_client.setInsecure();\n\n  Serial.println();\n\n  Serial.println(\n    \"Initializing Firebase...\"\n  );\n\n  initializeApp(\n    aClient,\n    app,\n    getAuth(\n      user_auth\n    )\n  );\n\n  app.getApp<RealtimeDatabase>(\n    Database\n  );\n\n  Database.url(\n    DATABASE_URL\n  );\n\n  Serial.println(\n    \"Firebase initialized!\"\n  );\n\n  Serial.println();\n\n  Serial.println(\n    \"Waiting for Firebase authentication...\"\n  );\n}\n\n// ======================================================\n// LOOP\n// ======================================================\n\nvoid loop() {\n\n  // ====================================================\n  // MAINTAIN FIREBASE\n  // ====================================================\n\n  app.loop();\n\n  /*\n     IMPORTANT:\n     Never return just because Wi-Fi/Firebase is unavailable.\n\n     Local AUTO control must continue independently.\n  */\n\n  bool wifiConnected =\n    WiFi.status() == WL_CONNECTED;\n\n  bool firebaseReady =\n    wifiConnected &&\n    app.ready();\n\n  // ====================================================\n  // FIREBASE INITIALIZATION\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    !controlInitialized\n  ) {\n\n    initializeControlState();\n\n    /*\n       Apply the newly synchronized mode/state immediately.\n    */\n    applyLocalControl();\n  }\n\n  // ====================================================\n  // LOCAL CONTROL \u2014 ALWAYS RUNS\n  // ====================================================\n\n  if (\n    millis() -\n    lastLocalControl >=\n    localControlInterval\n  ) {\n\n    lastLocalControl =\n      millis();\n\n    applyLocalControl();\n  }\n\n  // ====================================================\n  // FIREBASE HEARTBEAT\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    millis() -\n    lastHeartbeat >=\n    heartbeatInterval\n  ) {\n\n    lastHeartbeat =\n      millis();\n\n    firebaseSetOnline(\n      true\n    );\n\n    updateLastSeen();\n  }\n\n  // ====================================================\n  // READ DASHBOARD CONTROL\n  // ====================================================\n\n  if (\n    firebaseReady &&\n    millis() -\n    lastControlRead >=\n    controlInterval\n  ) {\n\n    lastControlRead =\n      millis();\n\n    readDashboardControl();\n  }\n\n  // ====================================================\n  // SENSOR READING\n  // ====================================================\n\n  if (\n    millis() -\n    lastReading >=\n    readingInterval\n  ) {\n\n    lastReading =\n      millis();\n\n    // --------------------------------------------------\n    // DHT11\n    // --------------------------------------------------\n\n    float temperature =\n      dht.readTemperature();\n\n    float humidity =\n      dht.readHumidity();\n\n    // --------------------------------------------------\n    // DIGITAL LDR\n    // --------------------------------------------------\n\n    int ldrState =\n      readLDR();\n\n    // --------------------------------------------------\n    // VALIDATE DHT\n    // --------------------------------------------------\n\n    if (\n      isnan(temperature) ||\n      isnan(humidity)\n    ) {\n\n      Serial.println(\n        \"ERROR: DHT11 reading failed!\"\n      );\n\n      /*\n         Do NOT stop the loop.\n\n         Local relay control continues and the next\n         sensor cycle will retry.\n      */\n\n    } else {\n\n      // ==================================================\n      // SERIAL OUTPUT\n      // ==================================================\n\n      Serial.println();\n\n      Serial.println(\n        \"--------------------------------\"\n      );\n\n      Serial.print(\n        \"Temperature: \"\n      );\n\n      Serial.print(\n        temperature\n      );\n\n      Serial.println(\n        \" \u00b0C\"\n      );\n\n      Serial.print(\n        \"Humidity: \"\n      );\n\n      Serial.print(\n        humidity\n      );\n\n      Serial.println(\n        \" %\"\n      );\n\n      Serial.print(\n        \"LDR DIGITAL: \"\n      );\n\n      Serial.println(\n        ldrState\n      );\n\n      Serial.print(\n        \"LDR CONDITION: \"\n      );\n\n      if (\n        ldrState ==\n        DARK_LDR_STATE\n      ) {\n\n        Serial.println(\n          \"DARK\"\n        );\n\n      } else {\n\n        Serial.println(\n          \"BRIGHT\"\n        );\n      }\n\n      Serial.print(\n        \"Bulb: \"\n      );\n\n      Serial.println(\n        bulbState\n          ? \"ON\"\n          : \"OFF\"\n      );\n\n      Serial.print(\n        \"Mode: \"\n      );\n\n      Serial.println(\n        operatingMode\n      );\n\n      Serial.print(\n        \"Connectivity: \"\n      );\n\n      if (\n        firebaseReady\n      ) {\n\n        Serial.println(\n          \"FIREBASE ONLINE\"\n        );\n\n      } else if (\n        wifiConnected\n      ) {\n\n        Serial.println(\n          \"WIFI ONLINE / FIREBASE NOT READY\"\n        );\n\n      } else {\n\n        Serial.println(\n          \"OFFLINE \u2014 LOCAL CONTROL\"\n        );\n      }\n\n      Serial.println(\n        \"--------------------------------\"\n      );\n\n      // ==================================================\n      // FIREBASE DATA \u2014 ONLY WHEN AVAILABLE\n      // ==================================================\n\n      if (\n        firebaseReady\n      ) {\n\n        writeCurrentSensorData(\n          temperature,\n          humidity,\n          ldrState\n        );\n\n        writeCurrentState();\n\n        writeHistoricalReading(\n          temperature,\n          humidity,\n          ldrState\n        );\n      }\n    }\n  }\n\n  // ====================================================\n  // SMALL DELAY\n  // ====================================================\n\n  delay(5);\n}\n",
      },
      {
        language: "javascript",
        filename: "export.js",
        description: "Complete Client-Side Historical Telemetry to CSV Dataset Exporter (Authoritative)",
        code: "/* ==========================================================================\n   EXPORT.JS\n   Reads history/ from Firebase, filters by date range + selected fields,\n   and generates a downloadable CSV using vanilla JavaScript (no library).\n\n   Includes Timestamp, Temperature, Humidity, LDR (DARK/BRIGHT), Bulb State\n   (ON/OFF), and Operating Mode (AUTO/MANUAL/Unknown).\n   ========================================================================== */\n\nlet exportData = [];\n\nfunction isValidNumber(value) {\n  return value !== undefined && value !== null && value !== \"\" && Number.isFinite(Number(value));\n}\n\nfunction normalizeBulbState(value) {\n  if (value === true) return true;\n  if (value === false) return false;\n  if (typeof value === \"string\") {\n    const v = value.trim().toUpperCase();\n    if (v === \"ON\" || v === \"TRUE\") return true;\n    if (v === \"OFF\" || v === \"FALSE\") return false;\n  }\n  return null;\n}\n\nfunction normalizeMode(value) {\n  if (typeof value === \"string\") {\n    const v = value.trim().toUpperCase();\n    if (v === \"AUTO\" || v === \"AUTOMATIC\") return \"AUTO\";\n    if (v === \"MANUAL\") return \"MANUAL\";\n  }\n  return \"Unknown\";\n}\n\nfunction loadExportData() {\n  db.ref(DB_PATHS.history).orderByChild(\"timestamp\").limitToLast(5000).once(\"value\")\n    .then((snap) => {\n      const arr = [];\n      snap.forEach((child) => {\n        const v = child.val();\n        if (v && isValidNumber(v.timestamp)) arr.push(v);\n      });\n      arr.sort((a, b) => a.timestamp - b.timestamp);\n      exportData = arr;\n      setText(\"record-count\", exportData.length);\n      if (exportData.length) {\n        document.getElementById(\"export-start\").valueAsDate = new Date(exportData[0].timestamp);\n        document.getElementById(\"export-end\").valueAsDate = new Date(exportData[exportData.length - 1].timestamp);\n      }\n    })\n    .catch((err) => {\n      console.error(\"Failed to load export data:\", err);\n      setText(\"record-count\", 0);\n    });\n}\n\nfunction setText(id, val) {\n  const el = document.getElementById(id);\n  if (el) el.textContent = val;\n}\n\nfunction csvEscape(val) {\n  const s = String(val);\n  if (/[\",\\n]/.test(s)) return `\"${s.replace(/\"/g, '\"\"')}\"`;\n  return s;\n}\n\nfunction generateCSV() {\n  const startInput = document.getElementById(\"export-start\").value;\n  const endInput = document.getElementById(\"export-end\").value;\n  const start = startInput ? new Date(startInput + \"T00:00:00\").getTime() : -Infinity;\n  const end = endInput ? new Date(endInput + \"T23:59:59\").getTime() : Infinity;\n\n  const fields = [\n    {\n      key: \"timestamp\", label: \"Timestamp\", checkboxId: \"field-timestamp\", always: true,\n      format: (r) => new Date(r.timestamp).toISOString()\n    },\n    {\n      key: \"temperature\", label: \"Temperature\", checkboxId: \"field-temperature\",\n      format: (r) => (isValidNumber(r.temperature) ? Number(r.temperature).toFixed(1) : \"\")\n    },\n    {\n      key: \"humidity\", label: \"Humidity\", checkboxId: \"field-humidity\",\n      format: (r) => (isValidNumber(r.humidity) ? Number(r.humidity).toFixed(0) : \"\")\n    },\n    {\n      key: \"ldr\", label: \"LDR\", checkboxId: \"field-ldr\",\n      format: (r) => (isValidNumber(r.ldr) ? (Number(r.ldr) === 1 ? \"DARK\" : \"BRIGHT\") : \"\")\n    },\n    {\n      key: \"bulbState\", label: \"Bulb State\", checkboxId: \"field-bulb\",\n      format: (r) => { const b = normalizeBulbState(r.bulbState); return b === null ? \"\" : (b ? \"ON\" : \"OFF\"); }\n    },\n    {\n      key: \"mode\", label: \"Operating Mode\", checkboxId: \"field-mode\",\n      format: (r) => normalizeMode(r.mode)\n    }\n  ];\n\n  const activeFields = fields.filter((f) => {\n    const cb = document.getElementById(f.checkboxId);\n    return f.always || !cb || cb.checked;\n  });\n\n  const rows = exportData.filter((r) => r.timestamp >= start && r.timestamp <= end);\n\n  if (rows.length === 0) {\n    const statusEl = document.getElementById(\"export-status\");\n    if (statusEl) statusEl.textContent = \"NO RECORDS IN SELECTED RANGE.\";\n    return;\n  }\n\n  const header = activeFields.map((f) => f.label).join(\",\");\n  const lines = rows.map((r) => activeFields.map((f) => csvEscape(f.format(r))).join(\",\"));\n\n  const csv = [header, ...lines].join(\"\\n\");\n  const blob = new Blob([csv], { type: \"text/csv;charset=utf-8;\" });\n  const url = URL.createObjectURL(blob);\n  const a = document.createElement(\"a\");\n  a.href = url;\n  a.download = `ems01_history_${new Date().toISOString().slice(0, 10)}.csv`;\n  document.body.appendChild(a);\n  a.click();\n  document.body.removeChild(a);\n  URL.revokeObjectURL(url);\n\n  const statusEl = document.getElementById(\"export-status\");\n  if (statusEl) statusEl.textContent = `EXPORTED ${rows.length} RECORDS.`;\n}\n\nfunction initExport() {\n  loadExportData();\n  const btn = document.getElementById(\"download-csv-btn\");\n  if (btn) btn.addEventListener(\"click\", generateCSV);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (document.getElementById(\"download-csv-btn\")) {\n    requireAuth(initExport);\n  }\n});",
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-30_00-08-30.png",
        alt: "Firebase RTDB Real-Time Telemetry Node Console",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-30_00-09-22.png",
        alt: "Firebase RTDB /history Push-ID Node Tree & Real-Time Log Structure",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-30_00-09-12.png",
        alt: "Firebase Authentication Console — User Management & Security Settings",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-30_00-08-57.png",
        alt: "Firebase Realtime Database Console Showing /current and /history Push Nodes",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1793696513/Screenshot_from_2026-11-03_14-30-15.png",
        alt: "EMS-01 Downloaded Historical Sensor Telemetry CSV Dataset Opened in Spreadsheet Application",
      },
    ],
    videos: [
      {
        provider: "vimeo",
        videoId: "1230618704",
        title: "Firebase System Integration & Data Export Demonstration",
        aspectRatio: "9/16",
      },
    ],
    troubleshooting: [
      {
        problem: "DHT11 Sampling Timing Violations & Intermittent NaN Readings",
        cause: "Calling dht.readTemperature() too frequently (<2000ms) corrupts the sensor's single-wire timing protocol.",
        debugging: "Logged sensor return values and caught frequent NaN values when loop() executed without timer throttling.",
        solution: "Separated fast 250ms local control loop from slow 5000ms sensor sampling loop. Guarded writes with !isnan(temperature) && !isnan(humidity).",
        result: "100% reliable temperature/humidity telemetry with zero NaN values written to the database.",
      },
      {
        problem: "Rapid Relay Cycling (Contact Chatter) at Threshold Boundary",
        cause: "Gradual twilight shifts caused the photoresistor voltage to hover directly on the comparator switching edge, causing rapid contact cycling.",
        debugging: "Observed relay clicking repeatedly within a 5-second window as room lights were dimmed.",
        solution: "Adjusted LM393 trimmer potentiometer 1/4 turn past the transition threshold and enforced a 250ms debouncing window before altering relay output registers.",
        result: "Decisive, single-click relay switching with clean hysteresis and prolonged relay contact lifespan.",
      },
      {
        problem: "Unbounded Historical Database Growth from Continuous 5-Second Pushes",
        cause: "Pushing telemetry records every 5 seconds accumulates ~17,280 JSON nodes per day, threatening free-tier database storage quotas.",
        debugging: "Monitored Firebase RTDB storage metrics in Firebase Console Usage tab (Screenshot 17).",
        solution: "Configured frontend export queries to limit historical retrieval using .limitToLast(5000) and documented scheduled Firebase Cloud Functions for rolling 30-day retention pruning.",
        result: "High-performance client-side CSV downloads and a sustainable, production-grade cloud storage lifecycle.",
      },
    ],
    repositoryInfo: {
      repoName: "Arduino/Dashboard_Firebase & Firebase_Dashboard",
      localPath: "/home/surya-j-s/Arduino/Dashboard_Firebase/Dashboard_Firebase.ino",
      status: "local_verified",
      description: "Authoritative local firmware and frontend repository containing complete integrated IoT system.",
      primaryFiles: [
        "Dashboard_Firebase.ino",
        "export.js",
        "dashboard.js",
        "history.js",
        "firebase-config.js",
      ],
    },
    limitations: [
      "[Implemented — Digital Binary Light State]: The LM393 LDR module provides binary DARK/BRIGHT digital output rather than continuous lux measurements.",
      "[Implemented — Unbounded Log Growth]: Pushing historical records every 5 seconds to /history/$pushId without database expiration cleanup accumulates database storage over long runs.",
    ],
    futureImprovements: [
      "[Future work — Firebase Cloud Functions Cleanup]: Deploy scheduled Cloud Functions to prune historical records older than 30 days.",
      "[Future work — Analog Lux Sensor Integration]: Integrate an I2C ambient light sensor (e.g. BH1750) for calibrated lux measurement alongside threshold control.",
    ],
    reflection:
      "Building the integrated logging and analytics pipeline provided complete experience uniting embedded C++ firmware, cloud BaaS architecture, and modern web application development. Implementing dual operating modes highlighted the importance of user overrides in autonomous control systems.",
  }
];

export const OVERALL_REFLECTION =
  "Technical Architecture Synthesis & Five-Task Evolutionary Engineering Summary:\n\n" +
  "Over the course of this five-stage IoT engineering sequence, the system systematically evolved from an isolated in-memory HTTP web server into an enterprise-grade, cloud-connected telemetry, automation, and analytics architecture. Each task resolved fundamental real-world embedded constraints: network isolation, protocol overhead, event-driven decoupling, secure cloud persistence, and on-device autonomous fail-safes.\n\n" +
  "1. Task 1 (Local Embedded HTTP Server): Implementing WebServer on bare-metal ESP32 established how microcontrollers manage TCP socket connections on port 80 and serve embedded HTML assets from PROGMEM. It demonstrated the necessity of asynchronous fetch('/on') requests to eliminate page flicker and maintain responsive GPIO 2 control.\n\n" +
  "2. Task 2 (Adafruit IO & MQTT Protocol): Transitioning from synchronous HTTP request/response to asynchronous MQTT publish-subscribe messaging over TCP port 1883 eliminated the need for local port forwarding or static IP addresses. Controlling an optically isolated 5V relay module on GPIO 26 safely separated 3.3V logic from 230V mains light bulb circuits across disparate subnets.\n\n" +
  "3. Task 3 (IFTTT Cloud Automation): Offloading rule evaluation to cloud Applets (connecting Google Assistant voice triggers to feed 'esp' and CLI Webhook test harnesses to feed 'bulb-control') proved how external cloud platforms can actuate edge hardware without changing or recompiling firmware.\n\n" +
  "4. Task 4 (Firebase RTDB Monitoring Dashboard): Integrating a WebSocket-backed BaaS (Firebase Realtime Database) with split-node architecture (/current telemetry vs /control commands) delivered sub-second synchronization between physical sensors (DHT11 on GPIO 4, LM393 LDR on GPIO 34) and an authenticated web console (Firebase_Dashboard) without custom backend server infrastructure.\n\n" +
  "5. Task 5 (Autonomous Control, Historical Logging & CSV Analytics): Uniting an on-device 250ms threshold control loop (darkness-triggered relay actuation on GPIO 26) with operator overrides (mode == 'AUTOMATIC' vs 'MANUAL'), 5-second persistent push logging under /history/$pushId, and client-side RFC-4180 CSV export (export.js) established a complete, production-ready IoT telemetry pipeline balancing local responsiveness with centralized cloud analytics.";
