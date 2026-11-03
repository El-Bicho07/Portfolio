# IoT Portfolio Evaluation Checklist

**Target Repository:** `git@github.com:El-Bicho07/Portfolio.git`  
**Commit Baseline:** Latest (incorporating Task 4 video `1242735151` & Task 5 CSV screenshot `v1793696513`)  
**Evaluation Standard:** `IoT Checklist - Evaluation.xlsx` (102 Discrete Evaluation Criteria Across Tasks 1–5)  
**Live Portfolio:** https://suryakumar-dev-portfolio.vercel.app/iot  
**Live Dashboard:** https://dashboard-1f86f.web.app  

---

## Evaluation Status Legend
- `[x] PASS` — The criterion is clearly present, accurate, and supported by concrete code, schema, or media evidence.
- `[~] PARTIAL` — Some of the requirement is satisfied, but supporting evidence or physical demonstration is incomplete.
- `[ ] FAIL` — The requirement is missing, demonstrably not implemented, or lacks essential physical media evidence.
- `[?] UNVERIFIED` — The requirement cannot be confirmed from the available repository, website, or media assets.

---

## Task 1 — ESP32 Web Server & HTML LED Control

- [x] PASS — **Row 3: Objective of the assignment and the problem being addressed**
  - **Evidence:** Portfolio `data/iotData.ts` (Task 1 overview & problem statement)
  - **Result / Finding:** Clearly states the objective: building a bare-metal embedded web server on the ESP32 to control GPIO 2 without external cloud dependencies.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 4: Basic concept of an ESP32 Web Server**
  - **Evidence:** Portfolio `data/iotData.ts` (Task 1 concepts & theory)
  - **Result / Finding:** Explains the ESP32 Web Server architecture, socket listening on TCP port 80, request parsing, and PROGMEM asset delivery.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 5: How the ESP32 and browser communicate over Wi-Fi**
  - **Evidence:** Portfolio `data/iotData.ts` (Task 1 Wi-Fi communication lifecycle)
  - **Result / Finding:** Detailed explanation of Station (STA) mode, 802.11 association, DHCP local IP assignment, TCP handshake, and HTTP GET request-response flow.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 6: Hardware components used**
  - **Evidence:** Portfolio `data/iotData.ts` (Hardware list & CircuitDiagram.tsx)
  - **Result / Finding:** Comprehensive itemization: ESP32 DevKit V1 (30-pin), onboard LED (GPIO 2), 220-ohm current-limiting resistor, micro-USB cable, and 2.4 GHz Wi-Fi AP.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 7: Circuit/wiring diagram**
  - **Evidence:** `components/iot/CircuitDiagram.tsx` (Task 1 SVG schematic)
  - **Result / Finding:** High-fidelity custom SVG electrical wiring diagram illustrating ESP32 GPIO 2 to LED anode, current-limiting resistor, and ground return rail.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 8: ESP32 pin connections**
  - **Evidence:** Portfolio pin matrix table & `CircuitDiagram.tsx`
  - **Result / Finding:** Pin interconnection table documenting GPIO 2 (Output, Push-Pull), GND, and 5V USB power supply.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 9: Complete Arduino/ESP32 source code**
  - **Evidence:** Portfolio code snippet (`Web_Page.ino`, 727 lines)
  - **Result / Finding:** Complete, non-truncated, sanitized C++ sketch (`WebServer.h`, `WiFi.h`) embedded in the portfolio.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 10: HTML interface developed for controlling the LED**
  - **Evidence:** Embedded PROGMEM string in `Web_Page.ino`
  - **Result / Finding:** Full HTML5/CSS3/JavaScript interface ('ESP32 LED Playground') featuring an animated cartoon robot with antenna and glowing chest core.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 11: How the webpage sends a command to the ESP32**
  - **Evidence:** Portfolio documentation and `Web_Page.ino` client script
  - **Result / Finding:** Explains asynchronous JavaScript `fetch('/on')` and `fetch('/off')` API calls triggering ESP32 route handlers without page reload.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 12: Photographs of the physical setup**
  - **Evidence:** Cloudinary media asset `IMG-20260923-WA0068.jpg`
  - **Result / Finding:** Physical workbench photograph showing the ESP32 DevKit V1 wired on a breadboard.
  - **Action Required:** None. Fully satisfied.

- [~] PARTIAL — **Row 13: Screenshots of the web interface**
  - **Evidence:** Cloudinary image gallery (`IMG-20260923-WA0068.jpg`)
  - **Result / Finding:** A physical workbench photo is present, but an explicit screenshot of the rendered cartoon robot web UI in a browser is missing. Note: Original website source was lost during Windows-to-Ubuntu OS migration.
  - **Action Required:** If the ESP32 firmware is reflashed in the future, capture a browser screenshot of the 'ESP32 LED Playground' robot UI while connected to the ESP32 IP.

- [x] PASS — **Row 14: Video demonstrating LED ON/OFF control from the webpage**
  - **Evidence:** Vimeo video embed `1230618706` (16/9 aspect ratio)
  - **Result / Finding:** Functional embedded demonstration video showing webpage buttons being clicked and the physical ESP32 LED toggling in real time.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 15: Problems encountered and how they were solved**
  - **Evidence:** Portfolio `data/iotData.ts` troubleshooting accordion
  - **Result / Finding:** Three structured engineering issues documented: Headless IP discovery (resolved via Serial mDNS/DHCP log), PROGMEM memory overflow, and asynchronous UI desync.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 16: Brief reflection on what you learned**
  - **Evidence:** Portfolio `data/iotData.ts` reflection section
  - **Result / Finding:** Technical retrospective analyzing bare-metal socket constraints, SRAM vs. Flash trade-offs, and advantages of asynchronous DOM updates.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 17: All required files/code available in your repository**
  - **Evidence:** Git repository and local `/home/surya-j-s/Arduino/Web_Page/`
  - **Result / Finding:** Full source sketch `Web_Page.ino` is committed in the portfolio and verified in the local Arduino project folder.
  - **Action Required:** None. Fully satisfied.

## Task 2 — Adafruit IO Dashboard & MQTT

- [x] PASS — **Row 20: Purpose of Adafruit IO in an IoT system**
  - **Evidence:** Portfolio `data/iotData.ts` Task 2 overview and concepts
  - **Result / Finding:** Clearly explains Adafruit IO as a cloud MQTT broker providing persistent message queuing, decoupling edge devices from private subnets.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 21: Basic concept of MQTT**
  - **Evidence:** Portfolio `data/iotData.ts` MQTT conceptual module
  - **Result / Finding:** Details MQTT architecture: lightweight binary packet format over TCP port 1883, topic hierarchy, low bandwidth footprint, and keep-alive ping mechanisms.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 22: MQTT Publisher, Subscriber, and Broker identified**
  - **Evidence:** Portfolio `data/iotData.ts` roles definition
  - **Result / Finding:** Explicitly identifies Publisher (Adafruit IO cloud dashboard / toggle widget), Broker (`io.adafruit.com`), and Subscriber (ESP32 DevKit V1).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 23: Role of an MQTT Topic/Feed**
  - **Evidence:** Portfolio `data/iotData.ts` topic documentation
  - **Result / Finding:** Defines the role of MQTT topics as filtered message buses routing payload strings to subscribers without endpoint hardcoding.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 24: Hardware and software used**
  - **Evidence:** Portfolio hardware list and component matrix
  - **Result / Finding:** Itemizes ESP32 DevKit V1, 5V single-channel optocoupler relay module, 230V AC lamp and socket fixture, `AdafruitIO_WiFi` library, and Arduino IDE.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 25: Adafruit IO account created and documented**
  - **Evidence:** Portfolio documentation and Adafruit IO screenshots
  - **Result / Finding:** Adafruit IO account `Surya_ADA` documented and verified via 5 high-resolution console screenshots in the evidence gallery.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 26: Dashboard and feed configuration documented**
  - **Evidence:** Portfolio documentation and console screenshots
  - **Result / Finding:** Documents feed `esp` setup and dashboard switch block configuration with ON/OFF payload mappings.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 27: Communication flow between ESP32, MQTT, and Adafruit IO**
  - **Evidence:** Portfolio architecture diagram & textual flow
  - **Result / Finding:** Step-by-step communication pipeline: Dashboard toggle -> MQTT Publish to `Surya_ADA/feeds/esp` -> TCP port 1883 push -> `handleESPMessage()` -> Active-LOW GPIO 26.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 28: MQTT topic/feed structure used**
  - **Evidence:** Portfolio feed structure documentation
  - **Result / Finding:** Identifies exact feed topic `Surya_ADA/feeds/esp` and payload strings (`ON` / `OFF`, `1` / `0`).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 29: Complete ESP32 source code**
  - **Evidence:** Portfolio code snippet (`MQTT_Bulb.ino`, 170 lines)
  - **Result / Finding:** Complete, non-truncated, sanitized sketch using `AdafruitIO_WiFi.h` embedded in portfolio.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 30: Explanation of important code sections**
  - **Evidence:** Portfolio documentation and code walkthrough
  - **Result / Finding:** Explains `io.connect()`, `esp->onMessage(handleESPMessage)`, active-LOW relay inversion, and non-blocking `io.run()` packet processing in `loop()`.
  - **Action Required:** None. Fully satisfied.

- [ ] FAIL — **Row 31: Photographs of the hardware setup**
  - **Evidence:** Portfolio gallery inspection (Task 2)
  - **Result / Finding:** Gallery contains screenshots of Adafruit IO dashboard and video embed, but lacks a physical bench camera photograph showing the assembled 230V mains light bulb, relay, and ESP32 breadboard (hardware currently disassembled).
  - **Action Required:** Physical bench photo not feasible without physical hardware reassembly.

- [x] PASS — **Row 32: Screenshots of the Adafruit IO dashboard**
  - **Evidence:** 5 Cloudinary screenshots (`Screenshot_from_2026-10-07_19-44-xx.png`)
  - **Result / Finding:** High-resolution console screenshots showing feed `esp`, real-time data stream, toggle switch widget, and feed history.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 33: LED control through the cloud dashboard demonstrated**
  - **Evidence:** Dashboard screenshots and Vimeo video embed `1230618703`
  - **Result / Finding:** Demonstrates remote cloud switching: toggling Adafruit IO web switch updates physical relay state.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 34: Working demonstration video**
  - **Evidence:** Vimeo video embed `1230618703` (9/16 aspect ratio)
  - **Result / Finding:** Verified demonstration video showing physical relay and bulb switching in response to cloud dashboard interactions.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 35: Problems encountered during MQTT/cloud setup**
  - **Evidence:** Portfolio `data/iotData.ts` Task 2 troubleshooting
  - **Result / Finding:** Documents Active-LOW optocoupler relay inversion, TCP keep-alive socket drops, and GPIO floating boot glitch.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 36: Solutions implemented**
  - **Evidence:** Portfolio `data/iotData.ts` Task 2 troubleshooting
  - **Result / Finding:** Solutions documented: logical code inversion (`LOW = ON`), periodic `io.run()` servicing, and pre-configuring `digitalWrite(RELAY_PIN, HIGH)` before `pinMode`.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 37: Brief learning reflection**
  - **Evidence:** Portfolio `data/iotData.ts` Task 2 reflection
  - **Result / Finding:** Reflective analysis comparing stateless HTTP request-response overhead with stateful, persistent MQTT socket efficiency.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 38: All required files available in your repository**
  - **Evidence:** Git repository and local `/home/surya-j-s/Arduino/MQTT_Bulb/`
  - **Result / Finding:** Full source sketch `MQTT_Bulb.ino` is committed in the portfolio and verified in the local Arduino project folder.
  - **Action Required:** None. Fully satisfied.

## Task 3 — IFTTT + Adafruit IO IoT Automation

- [x] PASS — **Row 41: Objective of the IoT automation**
  - **Evidence:** Portfolio `data/iotData.ts` Task 3 overview & concepts
  - **Result / Finding:** Documents objective of cloud event-driven automation: triggering physical appliances through voice assistants and webhooks without firmware alteration.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 42: Basic concept of IoT automation**
  - **Evidence:** Portfolio `data/iotData.ts` automation concepts
  - **Result / Finding:** Explains event-driven architecture, decoupled cloud brokers, and conditional rule execution engines.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 43: What IFTTT is and why it is used**
  - **Evidence:** Portfolio `data/iotData.ts` IFTTT conceptual card
  - **Result / Finding:** Defines IFTTT as a multi-cloud middleware orchestration platform connecting disparate web services via standardized webhooks and OAuth connectors.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 44: Trigger → Action concept explained**
  - **Evidence:** Portfolio `data/iotData.ts` Trigger-Action framework
  - **Result / Finding:** Details the 'This' (Google Assistant voice utterance / Webhook POST) to 'That' (Adafruit IO feed update) event pipeline.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 45: Role of Adafruit IO in the automation**
  - **Evidence:** Portfolio `data/iotData.ts` Adafruit IO action documentation
  - **Result / Finding:** Explains Adafruit IO's role as the downstream action target, converting RESTful cloud dispatches into MQTT broker push packets for edge hardware.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 46: Hardware and software used**
  - **Evidence:** Portfolio hardware and software inventory
  - **Result / Finding:** Itemizes ESP32 DevKit V1, 5V relay module on GPIO 26, 230V bulb, IFTTT Applet service, Google Assistant, Adafruit IO, and `AdafruitIO_WiFi.h`.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 47: IFTTT Applet/workflow created and documented**
  - **Evidence:** 4 Cloudinary screenshots (`Screenshot_from_2026-09-29_23-17-xx.png`)
  - **Result / Finding:** Documents Applet configuration: Google Assistant voice trigger linked to Adafruit IO 'Send data to feed' action.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 48: Trigger used identified**
  - **Evidence:** Portfolio documentation and verified screenshots
  - **Result / Finding:** Explicitly identifies primary trigger ('If You say "activate Bulb on"') and secondary CLI test trigger (Webhook `activate_scene`).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 49: Action performed identified**
  - **Evidence:** Portfolio documentation and verified screenshots
  - **Result / Finding:** Identifies action performed: publishing payload string 'ON' or 'OFF' to Adafruit IO feed 'esp'.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 50: How the trigger reaches the IoT system**
  - **Evidence:** Portfolio multi-hop architecture flow
  - **Result / Finding:** Documents data traversal: Spoken voice -> Google Cloud Speech API -> IFTTT Applet -> HTTPS POST -> Adafruit IO REST API -> MQTT broker -> ESP32 socket -> GPIO 26.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 51: Communication/data-flow diagram**
  - **Evidence:** `CircuitDiagram.tsx` and Task 3 architecture flow
  - **Result / Finding:** Custom SVG wiring schematic and data-flow pipeline diagram integrated into the portfolio UI.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 52: ESP32 source code**
  - **Evidence:** Portfolio code snippet (`IFTTT_Bulb.ino`, 149 lines)
  - **Result / Finding:** Complete, non-truncated, sanitized C++ sketch for ESP32 MQTT subscription to feed 'esp' embedded in portfolio.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 53: Screenshots of the IFTTT configuration**
  - **Evidence:** 4 Cloudinary screenshots (`Screenshot_from_2026-09-29_23-17-xx.png`)
  - **Result / Finding:** Verified screenshots showing trigger phrase definition, action service selection, feed parameter assignment, and completed Applet review screen.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 54: Screenshots of the Adafruit IO dashboard/feed**
  - **Evidence:** Screenshots in Task 2 & Task 3 evidence galleries
  - **Result / Finding:** Adafruit IO console screenshots documenting live feed 'esp' and incoming data history.
  - **Action Required:** None. Fully satisfied.

- [ ] FAIL — **Row 55: Photographs of the working prototype**
  - **Evidence:** Portfolio gallery inspection (Task 3)
  - **Result / Finding:** No still workbench photograph of the physical working prototype setup for Task 3 is present in the evidence gallery (hardware disassembled).
  - **Action Required:** Physical bench photo not feasible without physical hardware reassembly.

- [x] PASS — **Row 56: Video demonstrating the complete automation**
  - **Evidence:** Vimeo video embed `1230618705` (9/16 aspect ratio)
  - **Result / Finding:** Verified demonstration video showing Google Assistant voice command triggering the IFTTT workflow and switching the physical lamp.
  - **Action Required:** None. Fully satisfied.

- [~] PARTIAL — **Row 57: Automation tested under different conditions**
  - **Evidence:** Portfolio Task 3 testing matrix & Vimeo video
  - **Result / Finding:** A 4-scenario testing matrix is documented in `data/iotData.ts`, but video evidence physically demonstrates only the nominal online voice activation condition.
  - **Action Required:** Supplementary video clips for edge conditions omitted per resource availability.

- [x] PASS — **Row 58: Problems and their solutions documented**
  - **Evidence:** Portfolio `data/iotData.ts` Task 3 troubleshooting
  - **Result / Finding:** Documents 3 engineering challenges: Applet feed naming mismatch (`esp` vs `bulb-control`), payload whitespace/case mismatches, and multi-hop cloud latency.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 59: What you learned about cloud-based automation**
  - **Evidence:** Portfolio `data/iotData.ts` reflection section
  - **Result / Finding:** Detailed learning reflection on decoupling trigger ingestion from embedded firmware and event-driven cloud orchestration.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 60: Brief reflection on the assignment**
  - **Evidence:** Portfolio `data/iotData.ts` assignment reflection
  - **Result / Finding:** Synthesizes architectural advantages, limitations of free-tier rate limits, and multi-hop latency tradeoffs.
  - **Action Required:** None. Fully satisfied.

## Task 4 — Firebase IoT Monitoring Dashboard

- [x] PASS — **Row 63: Objective of the Firebase IoT monitoring system**
  - **Evidence:** Portfolio `data/iotData.ts` Task 4 overview & concepts
  - **Result / Finding:** Documents objective: multi-sensor environmental telemetry streaming (DHT11, LM393 LDR) to Google Firebase RTDB and authenticated web dashboard control.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 64: Basic concept of Cloud Computing**
  - **Evidence:** Portfolio Theory Module 1 (`data/iotData.ts`)
  - **Result / Finding:** Comprehensive NIST cloud computing definition covering on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 65: IaaS, PaaS, SaaS, and BaaS explained**
  - **Evidence:** Portfolio Theory Module 2 (`data/iotData.ts`)
  - **Result / Finding:** Detailed breakdown of IaaS, PaaS, SaaS, and BaaS models with cloud responsibility matrix and IoT architectural mappings.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 66: What a Cloud Platform is**
  - **Evidence:** Portfolio Theory Module 2 & 4 (`data/iotData.ts`)
  - **Result / Finding:** Explains managed cloud platforms as turnkey infrastructure providing scalable compute, identity management, and persistent real-time storage.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 67: What a Database is**
  - **Evidence:** Portfolio Theory Module 3 (`data/iotData.ts`)
  - **Result / Finding:** Comprehensive comparative analysis: Relational (SQL, ACID, fixed schemas) vs. Non-Relational (NoSQL, JSON document/key-value, horizontal scalability).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 68: Firebase Realtime Database explained**
  - **Evidence:** Portfolio Theory Module 3 & Task 4 overview
  - **Result / Finding:** Explains Firebase Realtime Database: cloud-hosted NoSQL JSON tree with bidirectional WebSocket synchronization and sub-second update latency.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 69: What a Cloud-Based Dashboard is**
  - **Evidence:** Portfolio Theory Module 4 (`data/iotData.ts`)
  - **Result / Finding:** Defines Cloud-Based IoT Dashboards: presentation tier, persistent WebSocket synchronization layer, and separation of command intent from hardware state.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 70: Authentication and the purpose of a login system**
  - **Evidence:** Portfolio Theory Module 5 (`data/iotData.ts`)
  - **Result / Finding:** Explains user authentication, session security, credential hashing, and device access control via Firebase Auth.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 71: Difference between Authentication and Authorization**
  - **Evidence:** Portfolio Theory Module 5 (`data/iotData.ts`)
  - **Result / Finding:** Rigorous distinction: Authentication (AuthN - 'Who are you?') vs. Authorization (AuthZ - 'What are you allowed to do?') with Firebase Security Rules examples.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 72: Firebase project setup documented**
  - **Evidence:** Portfolio documentation and console screenshots
  - **Result / Finding:** Documents Firebase project `dashboard-1f86f` setup, Southeast Asia region hosting, and database initialization.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 73: Firebase Authentication configuration documented**
  - **Evidence:** Portfolio documentation & `auth.js` source code
  - **Result / Finding:** Documents Firebase Authentication email/password provider, user onboarding, and device service account provisioning.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 74: Realtime Database structure documented**
  - **Evidence:** Portfolio documentation, `firebase-config.js`, and firmware
  - **Result / Finding:** Documents split-node JSON tree: telemetry under `/current/` (`temperature`, `humidity`, `ldr`, `bulbState`, `mode`) and control under `/control/` (`bulbState`, `mode`).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 75: Database/data-flow architecture**
  - **Evidence:** `CircuitDiagram.tsx` and Task 4 split-node architecture diagram
  - **Result / Finding:** Detailed data-flow architecture diagram illustrating bidirectional WebSocket communication between ESP32, Firebase RTDB, and web console.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 76: Complete dashboard source code**
  - **Evidence:** Embedded code snippets in portfolio (`iotData.ts`)
  - **Result / Finding:** Complete source code embedded: `Dashboard_Firebase_Telemetry.ino` (1353 lines), `firebase-config.js` (81 lines), `auth.js` (161 lines), `dashboard.js` (583 lines).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 77: Screenshots of the login page**
  - **Evidence:** Cloudinary screenshot `Screenshot_from_2026-09-27_10-38-58.png`
  - **Result / Finding:** High-resolution screenshot of the authenticated EMS-01 user login portal.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 78: Screenshots of the Firebase database**
  - **Evidence:** Cloudinary screenshot `Screenshot_from_2026-09-30_00-08-57.png`
  - **Result / Finding:** Firebase console screenshot showing `/current` and `/history` real-time JSON database nodes.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 79: Screenshots of the working dashboard**
  - **Evidence:** Cloudinary screenshots `10-38-09.png`, `00-08-30.png`, `00-09-12.png`
  - **Result / Finding:** Screenshots showing live telemetry instrument gauges, system status strips, and user management tables.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 80: Video demonstrating webpage workflow**
  - **Evidence:** Vimeo video embed `1242735151` ('IoT-Dashboard', 58s duration, 16/9 aspect ratio)
  - **Result / Finding:** Working video demonstration showing user authentication, real-time sensor gauge updates, and remote relay toggle workflow on `dashboard-1f86f.web.app`.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 81: Problems encountered and their solutions**
  - **Evidence:** Portfolio `data/iotData.ts` Task 4 troubleshooting
  - **Result / Finding:** Documents 3 engineering challenges: Firebase permission denied (Auth token expiration), TLS handshake heap exhaustion, and command race conditions.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 82: Brief reflection on the assignment**
  - **Evidence:** Portfolio `data/iotData.ts` Task 4 reflection
  - **Result / Finding:** In-depth engineering retrospective on WebSocket-backed BaaS advantages over polling and split-node command/telemetry decoupling.
  - **Action Required:** None. Fully satisfied.

## Task 5 — Firebase Logging, Automation & Data Export

- [x] PASS — **Row 85: Objective of the complete IoT system**
  - **Evidence:** Portfolio `data/iotData.ts` Task 5 overview & concepts
  - **Result / Finding:** Defines objective of full IoT system: combining multi-sensor telemetry, on-device autonomous threshold logic, dual operating modes, cloud logging, and CSV analytics.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 86: Final system architecture documented**
  - **Evidence:** `CircuitDiagram.tsx` and Task 5 6-stage architecture pipeline
  - **Result / Finding:** Complete 6-stage end-to-end architecture pipeline documented from edge sensor acquisition to client-side CSV dataset export.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 87: DHT11 Temperature and Humidity Monitoring demonstrated**
  - **Evidence:** Live dashboard, firmware `Dashboard_Firebase.ino`, and Vimeo video `1230618704`
  - **Result / Finding:** Sampling of DHT11 on GPIO 4 verified in firmware, live on dashboard, and visually proven in video demonstration.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 88: LDR-based Light Level Monitoring demonstrated**
  - **Evidence:** Live dashboard, firmware `Dashboard_Firebase.ino`, and Vimeo video `1230618704`
  - **Result / Finding:** Digital LM393 comparator LDR module on GPIO 34 verified: transitions between DARK (1) and BRIGHT (0) proven in video and database.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 89: Manual Bulb Control implemented**
  - **Evidence:** Live dashboard `dashboard-1f86f.web.app` and `dashboard.js`
  - **Result / Finding:** Manual bulb toggle switch driving `/control/bulbState` verified and functional in MANUAL mode.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 90: Automatic Bulb Control using LDR implemented**
  - **Evidence:** Firmware `Dashboard_Firebase.ino` (L450-480) and video `1230618704`
  - **Result / Finding:** 250ms on-device autonomous control loop: covering LDR energizes Active-LOW relay (GPIO 26 LOW = Bulb ON); uncovering turns it OFF.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 91: Manual / Automatic Mode implemented and documented**
  - **Evidence:** Firmware state machine, `dashboard.js`, and live web app
  - **Result / Finding:** Dual operating modes (`AUTOMATIC` vs `MANUAL`) implemented: in AUTO, LDR overrides web switch; in MANUAL, operator controls relay directly.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 92: Logic used for automatic lighting explained**
  - **Evidence:** Portfolio documentation and `Dashboard_Firebase.ino` logic
  - **Result / Finding:** Details edge decision logic: `readLDR() == DARK_LDR_STATE` (HIGH) actuates relay without requiring cloud round-trip latency.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 93: LDR threshold/calibration method documented**
  - **Evidence:** Portfolio `data/iotData.ts` 6-step calibration guide
  - **Result / Finding:** Comprehensive 6-step LM393 potentiometer trimmer calibration procedure documenting electrical threshold tuning for ambient lighting transitions.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 94: Historical data logging in Firebase implemented**
  - **Evidence:** Firmware `writeHistoricalReading()` and Firebase RTDB `/history`
  - **Result / Finding:** ESP32 pushes timestamped JSON telemetry records to `/history/$pushId` every 5 seconds.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 95: Database structure used for logs documented**
  - **Evidence:** Portfolio documentation and `firebase-config.js` schema
  - **Result / Finding:** Documented historical JSON schema: `timestamp`, `temperature`, `humidity`, `ldr`, `bulbState`, and `mode`.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 96: Timestamped sensor readings recorded**
  - **Evidence:** Firebase console screenshot `00-08-57.png` and `history.html`
  - **Result / Finding:** Epoch millisecond timestamps logged with 5-second cadence and formatted to local date-time strings.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 97: Temperature and humidity values recorded**
  - **Evidence:** Firebase RTDB `/history` and `history.html` paginated table
  - **Result / Finding:** Numeric temperature (°C) and relative humidity (%) values recorded and displayed across 39 pages of data logs.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 98: LDR/light-level values recorded**
  - **Evidence:** Firebase RTDB `/history` and `history.html` table
  - **Result / Finding:** Digital LDR values (0/1) recorded in database and rendered as 'DARK' or 'BRIGHT' status pills in table.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 99: Bulb status and operating mode recorded**
  - **Evidence:** Firmware `Dashboard_Firebase.ino`, `history.js`, and `export.js`
  - **Result / Finding:** Both `bulbState` and `mode` recorded in Firebase RTDB, displayed in dedicated table columns on `history.html`, and exported in CSV.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 100: Historical data displayed on the dashboard**
  - **Evidence:** Live deployed Data Log console `https://dashboard-1f86f.web.app/history.html`
  - **Result / Finding:** Paginated, reverse-chronological historical measurement table displaying all 6 columns.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 101: Graph/chart for recorded sensor data included (if implemented)**
  - **Evidence:** Live deployed Analytics console `https://dashboard-1f86f.web.app/analytics.html`
  - **Result / Finding:** Interactive Chart.js time-series trend graphs displaying temperature, humidity, and light level curves over 1h/6h/24h windows.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 102: CSV data download implemented**
  - **Evidence:** Live deployed Export console `https://dashboard-1f86f.web.app/export.html` and `export.js`
  - **Result / Finding:** Client-side RFC-4180 CSV export engine with start/end date filtering, field selection checkboxes, Blob generation, and download trigger.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 103: Downloaded file demonstrated to contain the recorded data**
  - **Evidence:** Cloudinary screenshot `Screenshot_from_2026-11-03_14-30-15.png`
  - **Result / Finding:** High-resolution screenshot displaying the downloaded `ems01_history.csv` file opened in a spreadsheet application, verifying all exported columns (Timestamp, Temperature, Humidity, LDR, Bulb State, Operating Mode) with live recorded sensor data.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 104: Screenshots of the Firebase log data**
  - **Evidence:** Cloudinary screenshot `Screenshot_from_2026-09-30_00-08-57.png`
  - **Result / Finding:** Firebase console screenshot showing `/history` push-ID node tree and logged telemetry fields.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 105: Screenshots of the dashboard and data visualization**
  - **Evidence:** Cloudinary screenshots `00-08-30.png`, `00-09-22.png`, `00-09-12.png`
  - **Result / Finding:** Multi-view dashboard screenshots showing overview instrument gauges, historical data log tables, and analytics trends.
  - **Action Required:** None. Fully satisfied.

- [ ] FAIL — **Row 106: Photographs of the complete prototype**
  - **Evidence:** Portfolio gallery inspection (Task 5)
  - **Result / Finding:** Missing physical workbench camera photograph showing the complete integrated prototype (ESP32, DHT11, LM393 LDR, Relay, 230V lamp; hardware currently disassembled).
  - **Action Required:** Physical bench photo not feasible without physical hardware reassembly.

- [x] PASS — **Row 107: Video demonstrating the complete system**
  - **Evidence:** Vimeo video embed `1230618704` (73 seconds, 9/16 aspect ratio)
  - **Result / Finding:** Comprehensive working video demonstration: LDR coverage triggering automatic lighting, DHT11 sampling, and web dashboard synchronization.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 108: Problems encountered and solutions implemented**
  - **Evidence:** Portfolio `data/iotData.ts` Task 5 troubleshooting
  - **Result / Finding:** Documents 3 engineering challenges: DHT11 2-second timing constraint, comparator hysteresis contact chatter during twilight, and unbounded RTDB log storage growth.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 109: Limitations of the current prototype explained**
  - **Evidence:** Portfolio `data/iotData.ts` limitations section
  - **Result / Finding:** Explains prototype limitations: binary 1-bit light quantization (DARK/BRIGHT vs continuous lux) and lack of automatic database TTL log pruning.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 110: Possible future improvements suggested**
  - **Evidence:** Portfolio `data/iotData.ts` future improvements section
  - **Result / Finding:** Proposes scheduled Firebase Cloud Functions for 30-day log purging and upgrading to an I2C ambient lux sensor (BH1750).
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 111: Final learning reflection included**
  - **Evidence:** Portfolio `data/iotData.ts` final learning reflection
  - **Result / Finding:** Comprehensive final reflection and 5-task engineering synthesis analyzing the evolutionary progression from local HTTP to cloud automation and analytics.
  - **Action Required:** None. Fully satisfied.

- [x] PASS — **Row 112: All source code and project files available in the repository**
  - **Evidence:** Git repository and local `/home/surya-j-s/Arduino/Dashboard_Firebase/`
  - **Result / Finding:** Complete 1353-line `Dashboard_Firebase.ino` firmware and 143-line `export.js` available in portfolio code blocks and local repositories.
  - **Action Required:** None. Fully satisfied.
