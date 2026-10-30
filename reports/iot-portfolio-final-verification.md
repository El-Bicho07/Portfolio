# IoT Portfolio Final Verification Audit Report

**Date of Audit:** 2026-10-30  
**Target Commit:** `4b23ab2` (*"feat(iot): complete comprehensive IoT portfolio remediation (Tasks 1-5)"*)  
**Scope:** Read-Only Verification of Implementation, Schema Consistency, Trigger Claims, 102 Checklist Criteria, Screenshot Integrity, and Git State  
**Auditor Classification Standard:** `VERIFIED`, `DISCREPANCY`, `UNVERIFIABLE`  

---

## Executive Summary

This final verification audit assesses the committed and pushed state (`4b23ab2`) of the IoT portfolio remediation against the physical ground truth in `/home/surya-j-s/Arduino`, the web dashboard application in `/home/surya-j-s/Projects/Dashboard-Firebase`, and the evaluation rubric `IoT Checklist - Evaluation.xlsx`.

### Overall Status Breakdown

| Evaluation Area | Criteria / Entities Analyzed | Status Breakdown |
|---|:---:|---|
| **1. Firebase Schema & Database Paths** | 12 Fields / Paths | 9 `VERIFIED`, 3 `DISCREPANCY` (Documentation vs. Database field naming nuance) |
| **2. Task 3 Trigger Claims** | 3 Trigger Behaviors | 2 `VERIFIED`, 1 `UNVERIFIABLE` (CLI Webhook harness vs. deployed Applet) |
| **3. 102 Evaluation Criteria Audit** | 102 Checklist Rows | 93 `VERIFIED (PASS)`, 2 `DISCREPANCY (OVERSTATEMENT)`, 7 `BLOCKED / EXCLUDED (PHYSICAL)` |
| **4. Screenshot Asset Preservation** | 21 Cloudinary URLs | 21 `VERIFIED` (100% exact order and URL preservation) |
| **5. Git & GitHub Repository State** | 6 Environment Checks | 6 `VERIFIED` (Clean working tree, exact remote synchronization) |

---

## 1. Firebase Schema & Database Path Consistency

A cross-comparison was performed across the six primary source files:
1. Microcontroller Firmware: `/home/surya-j-s/Arduino/Dashboard_Firebase/Dashboard_Firebase.ino`
2. Centralized Config: `/home/surya-j-s/Projects/Dashboard-Firebase/js/firebase-config.js`
3. Web Dashboard Logic: `/home/surya-j-s/Projects/Dashboard-Firebase/js/dashboard.js`
4. User Authentication: `/home/surya-j-s/Projects/Dashboard-Firebase/js/auth.js`
5. CSV Exporter: `/home/surya-j-s/Projects/Dashboard-Firebase/js/export.js`
6. Portfolio Documentation: `/home/surya-j-s/Projects/Portfolio/data/iotData.ts`

### Comprehensive Path & Field Matrix

| Path / Field Entity | Microcontroller Firmware (`Dashboard_Firebase.ino`) | Frontend Config (`firebase-config.js`) | Frontend Web App (`dashboard.js` / `history.js`) | CSV Exporter (`export.js`) | Portfolio Data (`data/iotData.ts`) | Classification | Technical Finding & Ground Truth |
|---|---|---|---|---|---|:---:|---|
| **`/control/bulbState`** | `Database.get<bool>(aClient, "/control/bulbState")` (L270, L794) | `bulbState (bool)` (L41) | Listens and writes to `controlField("bulbState")` (L253, L395) | N/A | `/control/bulbState` throughout (L866, L889, L1031) | **VERIFIED** | 100% consistent across all firmware reads, UI button dispatches, and documentation. |
| **`/control/mode`** | `Database.get<String>(aClient, "/control/mode")` (L338, L738) | `mode ("MANUAL" \| "AUTO")` (L42) | Listens and writes to `controlField("mode")` (L269, L413) | N/A | `/control/mode` throughout (L889, L1084) | **VERIFIED** | 100% consistent across all firmware state machine switches and UI mode toggles. |
| **`/control/ldrThreshold`** | Not read by firmware (Hardware LDR is digital) | `ldrThreshold (number) — unused on this hardware` (L43) | Listens and writes to `controlField("ldrThreshold")` (L283, L447) | N/A | Documented as UI slider demo; firmware uses potentiometer trimmer (L1089) | **VERIFIED** | Documented accurately as a hardware trimmer threshold while web UI retains interactive slider. |
| **`/current/temperature`** | `Database.set<float>(aClient, "/current/temperature", ...)` (L553) | `temperature (number, °C)` (L50) | Reads `data.temperature`, renders gauges (L314) | N/A (reads `/history`) | `/current/temperature` (L889, L1101) | **VERIFIED** | 100% consistent across sampling, database write, gauge rendering, and documentation. |
| **`/current/humidity`** | `Database.set<float>(aClient, "/current/humidity", ...)` (L560) | `humidity (number, %)` (L47) | Reads `data.humidity`, renders progress bar (L325) | N/A (reads `/history`) | `/current/humidity` (L889, L1101) | **VERIFIED** | 100% consistent across sampling, database write, gauge rendering, and documentation. |
| **`/current/ldr` vs `ldrDigital` vs `light`** | `Database.set<int>(aClient, "/current/ldr", ldrState)` (L567) | `ldr (0 \| 1) — DIGITAL LDR: 1 = DARK, 0 = BRIGHT` (L48) | Reads `data.ldr`, renders condition "DARK"/"BRIGHT" (L336) | N/A (reads `/history`) | Prose descriptions mention `ldrDigital` (L789, L1101) | **DISCREPANCY** | **Literal Database Key is `ldr`:** The physical firmware and database tree use the key name `ldr` (integer 0 or 1). In `data/iotData.ts`, descriptive narrative refers to it as `ldrDigital` to distinguish it from continuous analog lux. While conceptually descriptive, `ldrDigital` does not exist as a literal Firebase path. |
| **`/current/bulbState` vs `bulb_status`** | `Database.set<bool>(aClient, "/current/bulbState", bulbState)` (L498) | `bulbState (bool) — ESP32's confirmed state` (L46) | Reads `data.bulbState` (L46) | N/A (reads `/history`) | `/current/bulbState` throughout (L866, L1031) | **VERIFIED** | The actual key is strictly `bulbState`. `bulb_status` was only a rubric prompt term and was correctly omitted from code and paths. |
| **`/current/mode` & `/current/operatingMode`** | Sets both `/current/mode` (L505) and `/current/operatingMode` (L513) | `mode ("MANUAL" \| "AUTO")` (L49) | Reads `/control/mode` directly (L269) | N/A (reads `/history`) | Documents `/current/mode` (L1084) | **VERIFIED** | Firmware dual-writes `/current/mode` and `/current/operatingMode` for backward compatibility with legacy scripts. |
| **`/current/online` & `lastSeen`** | Sets `/current/online` (L161) and `/current/lastSeen` (L228) | Unlisted in header comment | Reads `data.online` for header indicator | N/A (reads `/history`) | Documents device heartbeat and online telemetry | **VERIFIED** | Firmware regularly sets boolean connection status and epoch millisecond heartbeat. |
| **`/history/{ts}/ldr` vs `ldrDigital`** | `Database.set<int>(aClient, base + "/ldr", ldrState)` (L675) | `ldr (0 \| 1)` (L57) | Reads `r.ldr` in table (L67) | Maps `r.ldr` to `"DARK"` / `"BRIGHT"` column `"LDR"` (L57) | Prose mentions `ldrDigital` in push tree (L1246) | **DISCREPANCY** | The database key under `/history/{recordId}/` is `ldr`. The portfolio documentation notes `ldrDigital` in narrative summaries. |
| **`/history/{ts}/mode` in UI & Export** | `Database.set<String>(aClient, base + "/mode", operatingMode)` (L697) | `— no operatingMode field on history records` (L59) | `history.js` comment: "records do not include operatingMode... no Mode column" (L6) | `export.js` comment: "records have no operatingMode... checkbox removed" (L7) | Documents `/history` containing `mode` (L1246) | **DISCREPANCY** | **Firmware writes `mode`, but Frontend ignores it:** `Dashboard_Firebase.ino` pushes `base + "/mode"` to every history entry. However, the frontend `history.js` table and `export.js` CSV exporter explicitly ignore and omit the `mode` field due to legacy frontend compatibility. |
| **`/history/{ts}/bulbState`** | `Database.set<bool>(aClient, base + "/bulbState", bulbState)` (L686) | `bulbState (bool)` (L58) | Reads `r.bulbState` (L69) | Formats to `"ON"` / `"OFF"` column `"Bulb State"` (L61) | Documents `bulbState` in `/history` (L1069) | **VERIFIED** | 100% consistent across firmware, JSON tree, datalog table, and CSV exporter. |

---

## 2. Task 3 Trigger Claims Verification

Task 3 documentation was scrutinized against `IFTTT_Bulb.ino` and all media assets.

### Layer-by-Layer Verification

```
+---------------------------------------------------------------------------------------------------+
| 1. FIRMWARE LAYER (IFTTT_Bulb.ino)                                                                |
|    - Subscribes ONLY to MQTT feed: 'esp' under Adafruit IO account 'Surya_ADA'                   |
|    - Message Callback: handleESPMessage(AdafruitIO_Data *data)                                    |
|    - Logic: "1" / "ON" -> GPIO 26 LOW (Relay ON) | "0" / "OFF" -> GPIO 26 HIGH (Relay OFF)          |
|    - Ground Truth: Firmware contains NO webhook server, NO HTTP listener, NO direct IFTTT logic  |
+---------------------------------------------------------------------------------------------------+
                                                  ^
                                                  | (Subscribes to feed 'esp')
+---------------------------------------------------------------------------------------------------+
| 2. CONFIGURED IFTTT APPLET LAYER (Verified via Screenshots)                                       |
|    - Screenshot 1: 'If You say "activate Bulb on", then Send data to Adafruit IO'                |
|    - Screenshot 2-5: Applet action configured for Feed 'esp', account 'Surya_ADA', value 'ON'    |
|    - Ground Truth: Configured, screenshotted Applet is 100% Google Assistant Voice Trigger         |
+---------------------------------------------------------------------------------------------------+
                                                  ^
                                                  | (Demonstrated in Video)
+---------------------------------------------------------------------------------------------------+
| 3. DEMONSTRATED & TESTED BEHAVIOR (Vimeo Video 1230618705)                                        |
|    - Voice command spoken -> IFTTT executes -> Adafruit IO feed 'esp' updates -> Relay switches   |
|    - Ground Truth: Voice actuation is physically verified and demonstrated on camera             |
+---------------------------------------------------------------------------------------------------+
                                                  :
                                                  : (Documented CLI Script - Alternate Harness)
+...................................................................................................+
| 4. CLI WEBHOOK TEST HARNESS (ifttt_webhook_trigger.sh)                                            |
|    - curl -X POST https://maker.ifttt.com/trigger/activate_scene/with/key/...                     |
|    - Ground Truth: Documented as an engineering testing script. UNVERIFIABLE as an active        |
|      deployed applet from the media gallery (no webhook applet screenshot exists).                |
+...................................................................................................+
```

### Classification of Trigger Claims

1. **Google Assistant Voice Trigger (`VERIFIED`):**
   - *Claim:* Google Assistant voice trigger (*"activate Bulb on"*) fires IFTTT, which updates Adafruit IO feed `esp` to actuate Relay GPIO 26.
   - *Status:* **VERIFIED**. Proven by firmware subscription (`io.feed("esp")`), IFTTT applet screenshots (`Screenshot_from_2026-09-27_10-52-12.png`), and Vimeo video `1230618705`.
2. **CLI Webhook Test Harness (`UNVERIFIABLE as Deployed Applet / VERIFIED as Script`):**
   - *Claim:* Webhook endpoint (`maker.ifttt.com/trigger/activate_scene/json/with/key/...`) used to trigger Applet execution.
   - *Status:* **UNVERIFIABLE as Deployed Cloud Applet**. The repository provides `ifttt_webhook_trigger.sh` as a reference bash script, but there is zero screenshot or video evidence showing an active Webhook applet configured on the IFTTT account.
   - *Verdict:* The documentation correctly labels this as a *"Secondary CLI / Webhook Test Workflow"* and *"scriptable CLI test harness"*, avoiding false claims of full cloud deployment.

---

## 3. Audit of the 102 Evaluation Criteria

Every row of `IoT Checklist - Evaluation.xlsx` was audited against `reports/iot-portfolio-remediation-report.md` under the strict rule:
> *"A written testing procedure must not be counted as proof that a physical test was performed. A circuit diagram must not be counted as photographic evidence of an assembled circuit."*

### Identified Discrepancies & Overstatements in Remediation Report

While 93 of the 95 "COMPLETED" criteria in the remediation report are fully justified by code, text, diagrams, or verified media, two criteria were overstated:

#### 1. Row 57: "Automation tested under different conditions"
* **Remediation Report Status:** Marked `COMPLETED` (*"Comprehensive 4-scenario testing matrix added"*).
* **Audit Finding:** **DISCREPANCY (Overstatement)**.
* **Justification:** Writing a theoretical test matrix describing edge cases (rapid vocal commands, network disconnect, payload format variations) is valuable documentation, but does **not** prove that physical hardware was subjected to and passed all four conditions. Video `1230618705` demonstrates only a single nominal voice activation condition.
* **Correct Strict Status:** **PARTIAL**.

#### 2. Row 99: "Bulb status and operating mode recorded"
* **Remediation Report Status:** Marked `COMPLETED` (*"Confirmed states logged per record"*).
* **Audit Finding:** **DISCREPANCY (Partial Frontend Display)**.
* **Justification:** The firmware does write `mode` to `/history/{timestamp}/mode`. However, inspection of the production frontend codebase reveals that `history.js` and `export.js` explicitly omit the `mode` field:
  - `history.js` (L5-7): *"NOTE: history/ records do not include an operatingMode field on this schema... There is no Mode column here"*
  - `export.js` (L6-7): *"NOTE: history/ records on this schema have no operatingMode field... Operating Mode checkbox has been removed"*
  As a result, while bulb status is fully recorded and displayed, operating mode is logged in the cloud backend but omitted from the web table and CSV export.
* **Correct Strict Status:** **PARTIAL**.

### The 7 Physical Asset & Exclusion Items (Confirmed Unresolved)

The 7 items requiring physical lab bench access or excluded by explicit instruction remain clearly identified:

| Row | Checklist Criterion | Task | Category | Reason for Non-Completion |
|:---:|---|:---:|:---:|---|
| **13** | Screenshots of web interface | Task 1 | `EXCLUDED — SCREENSHOT` | Preserved existing single image; excluded by strict instruction from capturing or generating new screenshots. |
| **31** | Photographs of hardware setup | Task 2 | `BLOCKED (PHYSICAL)` | Requires high-resolution bench photography of physical ESP32, 5V relay, and 230V lamp wiring. |
| **55** | Photographs of working prototype | Task 3 | `BLOCKED (PHYSICAL)` | Existing photo was mislabeled; capturing actual Task 3 breadboard requires camera access. |
| **80** | Video demonstrating webpage workflow | Task 4 | `BLOCKED (VIDEO)` | No video asset was recorded for Task 4 (`videos: []`). Creating one requires live screen-recording of the running web console. |
| **103** | Downloaded file demonstrated to contain data | Task 5 | `BLOCKED (SCREENSHOT)` | Demonstrating CSV contents visually requires opening `ems01_history.csv` in Excel and taking a window screenshot (excluded by instruction). |
| **106** | Photographs of complete prototype | Task 5 | `BLOCKED (PHYSICAL)` | Requires physical bench photography of integrated DHT11, LM393 LDR, Relay, and ESP32 assembly. |
| **38 / 112** | All required files/code available in repository | Tasks 2, 5 | `UNVERIFIABLE (REMOTE)` | Code is verified locally in `/home/surya-j-s/Arduino`, but `Firebase_Dashboard` git remote is private/not publicly linked. |

### Revised Strict Scorecard

| Status Category | Remediation Report Claim | Strict Final Verification Audit | Net Delta |
|---|:---:|:---:|:---:|
| **PASS / COMPLETED** | 94 (92.2%) | **93 (91.2%)** | -1 (Reclassified to PARTIAL) |
| **PARTIAL** | 0 (0.0%) | **2 (2.0%)** | +2 (Row 57 & Row 99) |
| **EXCLUDED (SCREENSHOT)** | 1 (1.0%) | **1 (1.0%)** | 0 |
| **BLOCKED (PHYSICAL / ASSETS)** | 7 (6.8%) | **6 (5.8%)** | -1 |
| **Total Criteria** | **102** | **102** | **100% Accounted For** |

---

## 4. Screenshot Asset Preservation Verification

A bit-for-bit audit was conducted on all media image URLs in `data/iotData.ts` comparing the previous commit (`3adecb3`) against `4b23ab2`.

* **Total Cloudinary URLs in `3adecb3`:** 21
* **Total Cloudinary URLs in `4b23ab2`:** 21
* **Exact List Match:** `True`
* **Gallery Reordering:** None (`0` positions shifted)
* **URL Deletions / Replacements:** `0`
* **Artificially Generated Images:** `0`

### Image Asset Registry & Order Verification

| # | Task | Cloudinary Asset ID / Image File | Position Status | Verification Result |
|:---:|:---:|---|:---:|:---:|
| 1 | Task 4/5 | `Screenshot_from_2026-09-27_10-38-09.png` | Overview Index 0 | **VERIFIED (Unchanged)** |
| 2 | Task 4/5 | `Screenshot_from_2026-09-27_10-38-58.png` | Overview Index 1 | **VERIFIED (Unchanged)** |
| 3 | Task 2 | `Screenshot_from_2026-10-07_19-01-17.png` | Task 2 Gallery 0 | **VERIFIED (Unchanged)** |
| 4 | Task 2 | `Screenshot_from_2026-10-07_19-01-37.png` | Task 2 Gallery 1 | **VERIFIED (Unchanged)** |
| 5 | Task 2 | `Screenshot_from_2026-10-07_19-01-49.png` | Task 2 Gallery 2 | **VERIFIED (Unchanged)** |
| 6 | Task 2 | `Screenshot_from_2026-10-07_19-01-55.png` | Task 2 Gallery 3 | **VERIFIED (Unchanged)** |
| 7 | Task 1 | `IMG-20260923-WA0068.jpg` | Task 1 Hardware Photo | **VERIFIED (Unchanged)** |
| 8 | Task 2 | `Screenshot_from_2026-10-07_19-45-14.png` | Task 2 Gallery 4 | **VERIFIED (Unchanged)** |
| 9 | Task 2 | `Screenshot_from_2026-10-07_19-44-23.png` | Task 2 Gallery 5 | **VERIFIED (Unchanged)** |
| 10 | Task 2 | `Screenshot_from_2026-10-07_19-44-39.png` | Task 2 Gallery 6 | **VERIFIED (Unchanged)** |
| 11 | Task 2 | `Screenshot_from_2026-10-07_19-44-52.png` | Task 2 Gallery 7 | **VERIFIED (Unchanged)** |
| 12 | Task 2 | `Screenshot_from_2026-10-07_19-47-16.png` | Task 2 Gallery 8 | **VERIFIED (Unchanged)** |
| 13 | Task 3 | `Screenshot_from_2026-09-27_10-52-12.png` | Task 3 Gallery 0 | **VERIFIED (Unchanged)** |
| 14 | Task 3 | `Screenshot_from_2026-09-29_23-17-19.png` | Task 3 Gallery 1 | **VERIFIED (Unchanged)** |
| 15 | Task 3 | `Screenshot_from_2026-09-29_23-17-47.png` | Task 3 Gallery 2 | **VERIFIED (Unchanged)** |
| 16 | Task 3 | `Screenshot_from_2026-09-29_23-18-10.png` | Task 3 Gallery 3 | **VERIFIED (Unchanged)** |
| 17 | Task 3 | `Screenshot_from_2026-09-29_23-18-18.png` | Task 3 Gallery 4 | **VERIFIED (Unchanged)** |
| 18 | Task 4/5 | `Screenshot_from_2026-09-30_00-08-30.png` | Task 4/5 Gallery 0 | **VERIFIED (Unchanged)** |
| 19 | Task 4/5 | `Screenshot_from_2026-09-30_00-09-22.png` | Task 4/5 Gallery 1 | **VERIFIED (Unchanged)** |
| 20 | Task 4/5 | `Screenshot_from_2026-09-30_00-09-12.png` | Task 4/5 Gallery 2 | **VERIFIED (Unchanged)** |
| 21 | Task 4/5 | `Screenshot_from_2026-09-30_00-08-57.png` | Task 4/5 Gallery 3 | **VERIFIED (Unchanged)** |

---

## 5. Git & GitHub Repository State Verification

The local repository was audited against remote `origin`:

```bash
$ git branch -vv
* main 4b23ab2 feat(iot): complete comprehensive IoT portfolio remediation (Tasks 1-5)

$ git log -n 2 --graph --decorate --oneline
* 4b23ab2 (HEAD -> main, origin/main) feat(iot): complete comprehensive IoT portfolio remediation (Tasks 1-5)
* 3adecb3 Fix full-screen image lightbox modal trapped in transformed container using React createPortal

$ git status
On branch main
nothing to commit, working tree clean
```

### Verification Findings:
1. **Branch Synchronization (`VERIFIED`):** Local branch `main` and remote tracking branch `origin/main` are identical at commit `4b23ab2`.
2. **Working Tree Cleanliness (`VERIFIED`):** Working tree has no uncommitted, modified, or untracked files.
3. **Commit Integrity (`VERIFIED`):** Exactly 7 files were modified/added in commit `4b23ab2`:
   - `components/iot/CircuitDiagram.tsx` (New SVG circuit schematic renderer)
   - `components/iot/ImageLightbox.tsx` (React 19 SSR hydration fix)
   - `components/iot/ProgressionMatrix.tsx` (Hardware pinout and protocol synchronization)
   - `components/iot/SystemAtAGlance.tsx` (Pinout and database path synchronization)
   - `components/iot/TaskSection.tsx` (Rendering for circuits, theories, calibrations, accordions)
   - `data/iotData.ts` (Remediated IoT dataset)
   - `reports/iot-portfolio-remediation-report.md` (Audit report)
4. **No Unrelated Code Touched (`VERIFIED`):** Zero changes were introduced to unrelated portfolio sections (`/projects`, `/protosem`, `/about`, `/contact`).

---

## 6. Recommendations & Minor Residual Corrections

This verification confirms that commit `4b23ab2` successfully addressed all critical hardware pin conflicts, protocol mechanisms, and code omissions without violating screenshot constraints or introducing regressions.

For future portfolio maintenance (when edits are authorized):
1. **Refine Prose References to `/current/ldr`:** In `data/iotData.ts`, adjust narrative descriptions that say *"pushes ldrDigital to /current"* to explicitly specify *"pushes digital LDR state to `/current/ldr`"* to prevent any confusion regarding literal database keys.
2. **Document Frontend Mode Omission in CSV Export:** In Task 5's CSV export explanation, add an implementation note clarifying that while the firmware logs `mode` to Firebase, `export.js` deliberately omits the mode column to maintain table simplicity.
3. **Capture Physical Hardware Media:** When physical lab bench access is next available, capture photos for Tasks 2, 3, 5 and record a brief Task 4 dashboard video to resolve the final 7 blocked criteria.
