# IoT Implementation Report: Historical Mode Display & CSV Export

**Date:** 2026-10-30  
**Target Repositories:**  
- Web Dashboard: `/home/surya-j-s/Projects/Dashboard-Firebase`  
- Portfolio: `/home/surya-j-s/Projects/Portfolio`  
**Authoritative Firmware:** `/home/surya-j-s/Arduino/Dashboard_Firebase/Dashboard_Firebase.ino`  
**Hosting Target:** Firebase Hosting (`dashboard-1f86f.web.app`)  

---

## 1. Executive Summary

This remediation resolved the final functional and documentation discrepancies identified during the technical verification audit:
1. **Operating Mode in History & Export:** Connected the existing `/history/{pushId}/mode` field recorded by the firmware to the web dashboard UI (`history.html`, `history.js`) and CSV export engine (`export.html`, `export.js`), with graceful fallback for legacy records.
2. **Database Key Terminology Alignment:** Reconciled portfolio documentation in `data/iotData.ts` to strictly reference the literal database key `/current/ldr` (and `/history/{pushId}/ldr`), eliminating misleading `ldrDigital` references while accurately preserving the sensor description as a digital LM393 comparator module.
3. **Embedded Code Snippets Restoration:** Restored full, sanitized source code embeddings across all ten code blocks in `data/iotData.ts` using clean JSON-escaped string literals.
4. **Cloud Deployment:** Deployed updated dashboard assets directly to Firebase Hosting (`https://dashboard-1f86f.web.app`).
5. **Row 99 Evaluation Resolution:** With operating mode now displayed in the web table and included in CSV exports alongside bulb status, **Checklist Row 99 is now FULLY SATISFIED (PASS)**.

---

## 2. Changed Files & Implementation Details

### 2.1 `/home/surya-j-s/Projects/Dashboard-Firebase`

#### `history.html`
* **Change:** Added `<th>Mode</th>` to `<thead><tr>` in `#history-table-wrap`.
* **Result:** Historical table structure now aligns with all six telemetric dimensions: Timestamp, Temp (°C), Humidity (%), LDR, Bulb, and Mode.

#### `js/history.js`
* **Change:** Added `normalizeMode(value)` parser:
  ```javascript
  function normalizeMode(value) {
    if (typeof value === "string") {
      const v = value.trim().toUpperCase();
      if (v === "AUTO" || v === "AUTOMATIC") return "AUTO";
      if (v === "MANUAL") return "MANUAL";
    }
    return "Unknown";
  }
  ```
* **Table Rendering:** Updated `renderTable()` row template to format the mode tag:
  ```javascript
  const modeLabel = normalizeMode(r.mode);
  const modeColor = modeLabel === "AUTO" ? "var(--accent)" : (modeLabel === "MANUAL" ? "var(--muted)" : "var(--faint)");
  // Appends: <td><span class="state-tag" style="color:${modeColor}">${modeLabel}</span></td>
  ```
* **Fallback Behavior:** Records lacking `r.mode` (e.g. legacy logs) render as `"Unknown"` with muted styling (`var(--faint)`), preventing table breakage.
* **Header Comments:** Updated to document active `mode` visualization.

#### `export.html`
* **Change:** Added selectable checkbox in `.dataset-list`:
  ```html
  <label class="checkbox-row"><input type="checkbox" id="field-mode" checked />Operating Mode</label>
  ```

#### `js/export.js`
* **Change:** Added `mode` field mapping to `generateCSV()` fields array:
  ```javascript
  {
    key: "mode",
    label: "Operating Mode",
    checkboxId: "field-mode",
    format: (r) => normalizeMode(r.mode)
  }
  ```
* **Result:** Downloaded CSV files now include an `"Operating Mode"` column populated with `"AUTO"`, `"MANUAL"`, or `"Unknown"` based on record data.

#### `js/firebase-config.js`
* **Change:** Updated schema documentation comment to reflect that `/history/{recordId}/` contains `mode ("MANUAL" | "AUTO")`.

---

### 2.2 `/home/surya-j-s/Projects/Portfolio`

#### `data/iotData.ts`
* **Terminology Corrections (`ldrDigital` $\rightarrow$ `ldr`):**
  - Line 789: Corrected narrative to specify *"pushes temperature, humidity, and digital light state (key: ldr) to /current."*
  - Line 1069: Corrected push-record definition to specify `ldr (0/1)` and updated CSV export description to include `"Operating Mode"`.
  - Line 1094: Updated CSV mapping documentation to include `mode`.
  - Line 1101: Updated live sync step to `(/current/temperature, humidity, ldr, bulbState)`.
  - Line 1246: Updated push tree configuration note to reference `ldr`.
* **Authoritative Code Blocks:** Replaced raw string concatenation placeholders with full, sanitized JSON string literals for:
  - `Web_Page.ino` (Task 1)
  - `MQTT_Bulb.ino` (Task 2)
  - `IFTTT_Bulb.ino` and `ifttt_webhook_trigger.sh` (Task 3)
  - `Dashboard_Firebase_Telemetry.ino`, `firebase-config.js`, `auth.js`, and `dashboard.js` (Task 4)
  - `Dashboard_Firebase.ino` and `export.js` (Task 5)

---

## 3. Test & Verification Results

### 3.1 Unit & Functional Testing (`node -e`)

```bash
=== TEST 1: normalizeMode ===
All normalizeMode assertions PASSED!
  - normalizeMode("AUTO") -> "AUTO"
  - normalizeMode("automatic") -> "AUTO"
  - normalizeMode("MANUAL") -> "MANUAL"
  - normalizeMode("manual") -> "MANUAL"
  - normalizeMode(undefined) -> "Unknown"
  - normalizeMode(null) -> "Unknown"
  - normalizeMode("") -> "Unknown"
  - normalizeMode(123) -> "Unknown"

=== TEST 2: CSV Generation ===
Generated CSV:
Timestamp,Temperature,Humidity,LDR,Bulb State,Operating Mode
2024-09-29T22:46:40.000Z,26.5,60,DARK,ON,AUTO
2024-09-29T22:46:45.000Z,26.6,59,BRIGHT,OFF,MANUAL
2024-09-29T22:46:50.000Z,26.4,61,BRIGHT,OFF,Unknown
All CSV assertions PASSED!
```

### 3.2 Portfolio Build & Code Quality

```bash
$ npx tsc --noEmit
# Result: 0 errors

$ npm run lint
# Result: 0 errors, 5 non-blocking warnings on legacy unrelated pages

$ npm run build
▲ Next.js 16.3.5 (Turbopack)
✓ Compiled successfully in 976ms
✓ Finished TypeScript in 1176ms
✓ Generating static pages (19/19) in 351ms
```

### 3.3 Firebase Deployment

```bash
$ cd /home/surya-j-s/Projects/Dashboard-Firebase && firebase deploy --only hosting
=== Deploying to 'dashboard-1f86f'...
i  deploying hosting
i  hosting[dashboard-1f86f]: beginning deploy...
i  hosting: upload complete
✔  hosting[dashboard-1f86f]: file upload complete
✔  hosting[dashboard-1f86f]: version finalized
✔  hosting[dashboard-1f86f]: release complete
✔  Deploy complete!
Hosting URL: https://dashboard-1f86f.web.app
```

---

## 4. Evaluation Criteria Impact: Row 99 Status

* **Checklist Criterion:** *Row 99: "Bulb status and operating mode recorded"*
* **Previous Audit Finding:** PARTIAL (Firmware wrote `mode`, but frontend table and CSV export omitted it).
* **Current Status:** **COMPLETED / PASS**
* **Verification Proof:**
  1. Microcontroller firmware (`Dashboard_Firebase.ino`) logs `base + "/mode"` to `/history/{pushId}`.
  2. Data Log web interface (`history.html` + `history.js`) renders an explicit `Mode` column displaying `AUTO`, `MANUAL`, or `Unknown`.
  3. CSV exporter (`export.html` + `export.js`) includes an `Operating Mode` checkbox and exports the `mode` column in RFC-4180 format.
  4. Live web deployment verified at `https://dashboard-1f86f.web.app/history.html` and `https://dashboard-1f86f.web.app/export.html`.

---

## 5. Summary Scorecard

| Category | Post-Audit Status | After Mode Fix & Deployment | Change |
|---|:---:|:---:|:---:|
| **PASS / COMPLETED** | 93 (91.2%) | **94 (92.2%)** | +1 (Row 99 fully resolved) |
| **PARTIAL** | 2 (2.0%) | **1 (1.0%)** | -1 (Row 57: voice video condition) |
| **EXCLUDED (SCREENSHOT)** | 1 (1.0%) | **1 (1.0%)** | 0 |
| **BLOCKED (PHYSICAL HARDWARE)** | 6 (5.8%) | **6 (5.8%)** | 0 (Requires bench camera access) |
| **Total Criteria** | **102** | **102** | **100% Accounted For** |
