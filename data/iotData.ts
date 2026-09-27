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

export interface MediaItem {
  type: "image" | "video";
  src?: string;
  videoId?: string;
  title?: string;
  aspectRatio?: "16/9" | "9/16";
  provider?: "vimeo" | "native" | "youtube";
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

export interface IoTTask {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  overview: string;
  concepts: ConceptItem[];
  diagramSteps: string[];
  hardware: HardwareItem[];
  wiringNotes: string;
  configuration: string[];
  codeSnippets: CodeSnippet[];
  images: ImageItem[];
  videos: VideoItem[];
  limitations?: string[];
  futureImprovements?: string[];
  reflection: string;
}

export const IOT_HERO_DATA = {
  weekLabel: "WEEK 07",
  title: "IoT & Embedded Systems",
  subtitle: "From Prototype to Production",
  description:
    "Explored IoT and embedded systems through a series of ESP32-based assignments involving local HTTP web control, MQTT and Adafruit IO cloud integration, IFTTT event automation, Firebase Realtime Database dashboards, multi-sensor telemetry, relay control, time-series data logging, and CSV data export.",
  progression: [
    { label: "ESP32", sub: "Microcontroller Board" },
    { label: "HTTP Server", sub: "Local Web Control" },
    { label: "MQTT Broker", sub: "Adafruit IO Cloud" },
    { label: "IFTTT Engine", sub: "Event Automation" },
    { label: "Firebase RTDB", sub: "Cloud Dashboard" },
    { label: "Sensors & Relay", sub: "Hardware Telemetry" },
    { label: "Data Logging", sub: "CSV Analytics Export" },
  ],
};

export const FIREBASE_EVIDENCE_IMAGES: ImageItem[] = [
  { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-38-09.png" },
  { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485834/Screenshot_from_2026-09-27_10-38-58.png" },
  { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-39-10.png" },
  { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-39-51.png" },
  { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-39-58.png" },
];

export const IOT_TASKS: IoTTask[] = [
  {
    id: "task-01",
    number: "01",
    title: "ESP32 Web Server & HTML LED Control",
    subtitle: "Local Wi-Fi Embedded HTTP Server",
    overview:
      "Established a local Wi-Fi HTTP web server directly on the ESP32 microcontroller. The system hosts an interactive HTML interface in memory, allowing client web browsers connected to the same local network to toggle GPIO outputs and control an LED in real time without external cloud dependencies.",
    concepts: [
      {
        term: "ESP32",
        definition:
          "A low-cost, low-power system-on-a-chip (SoC) microcontroller with integrated Wi-Fi and dual-mode Bluetooth capabilities.",
      },
      {
        term: "Wi-Fi Networking",
        definition:
          "Wireless networking protocol enabling the ESP32 to join an existing Access Point (AP) or host its own local network.",
      },
      {
        term: "HTTP Protocol",
        definition:
          "An application-layer protocol for transmitting web documents over TCP sockets between client browsers and servers.",
      },
      {
        term: "Client/Server Architecture",
        definition:
          "A structure where client web browsers initiate requests to the ESP32 server, which executes local hardware commands and returns HTTP responses.",
      },
      {
        term: "Request/Response Cycle",
        definition:
          "The standard HTTP loop where GET/POST requests trigger GPIO state changes on the microcontroller and receive HTTP 200 status confirmations.",
      },
      {
        term: "REST-style Endpoints",
        definition:
          "Explicit URL routes (such as /led/on and /led/off) mapped to specific digital output functions on the hardware.",
      },
      {
        term: "GPIO (General-Purpose I/O)",
        definition:
          "Digital pins on the microcontroller configured via software to drive electrical signals HIGH (3.3V) or LOW (0V).",
      },
    ],
    diagramSteps: [
      "Client Web Browser",
      "HTTP Request (Wi-Fi)",
      "ESP32 Web Server",
      "GPIO Pin Control",
      "LED Light Output",
    ],
    hardware: [
      {
        name: "ESP32 Dev Board",
        category: "Hardware",
        description: "NodeMCU / DevKit v1 microcontroller board.",
      },
      {
        name: "Micro-USB Cable",
        category: "Hardware",
        description: "Provides 5V power and serial communication connection.",
      },
      {
        name: "Wi-Fi Router / AP",
        category: "Hardware",
        description: "2.4 GHz local wireless network access point.",
      },
      {
        name: "Arduino IDE",
        category: "Software",
        description: "Development environment for writing C++ microcontroller code.",
      },
      {
        name: "WiFi & WebServer Libraries",
        category: "Software",
        description: "ESP32 core networking libraries for socket handling.",
      },
    ],
    wiringNotes:
      "The ESP32 is powered via USB. For testing, the onboard blue LED attached to GPIO 2 was used. Alternatively, an external LED can be wired from GPIO 2 to a 220Ω current-limiting resistor, terminating at GND.",
    configuration: [
      "Configured Wi-Fi SSID and Password in the C++ header configuration.",
      "Initialized Serial Monitor at 115200 baud to retrieve the dynamically assigned local IP address.",
      "Configured HTTP server listening on standard port 80.",
      "Defined route handlers for HTTP GET '/' (serving HTML UI) and '/led/on' / '/led/off' endpoints.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_web_server.ino",
        description: "ESP32 HTTP Web Server Sketch with HTML UI",
        code: `#include <WiFi.h>
#include <WebServer.h>

// Placeholders for local Wi-Fi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

WebServer server(80);
const int ledPin = 2; // Onboard LED GPIO

void handleRoot() {
  String html = "<html><head><title>ESP32 LED Control</title>";
  html += "<style>body{font-family:sans-serif;text-align:center;padding-top:50px;background:#0a0b0e;color:#fff;}";
  html += ".btn{display:inline-block;padding:15px 30px;margin:10px;font-size:18px;color:#fff;border-radius:8px;text-decoration:none;}";
  html += ".on{background:#0284c7;}.off{background:#475569;}</style></head><body>";
  html += "<h1>ESP32 Local Web Control</h1>";
  html += "<a href='/led/on' class='btn on'>TURN ON</a>";
  html += "<a href='/led/off' class='btn off'>TURN OFF</a>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleLedOn() {
  digitalWrite(ledPin, HIGH);
  server.sendHeader("Location", "/");
  server.send(303);
}

void handleLedOff() {
  digitalWrite(ledPin, LOW);
  server.sendHeader("Location", "/");
  server.send(303);
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/led/on", handleLedOn);
  server.on("/led/off", handleLedOff);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
      },
    ],
    images: [
      { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485667/IMG-20260923-WA0068.jpg" },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618706", title: "VID-20260923-WA0069", aspectRatio: "16/9" },
    ],
    reflection:
      "Building an embedded HTTP web server on the ESP32 provided practical insight into low-level socket handling and client/server architecture on memory-constrained microcontrollers. Controlling physical GPIO pins via HTTP requests demonstrated how standard web protocols bridge software interfaces and physical electronic hardware.",
  },
  {
    id: "task-02",
    number: "02",
    title: "Adafruit IO Dashboard & MQTT Protocol",
    subtitle: "Cloud Telemetry & Remote Relay Control",
    overview:
      "Moved beyond local network boundaries by connecting the ESP32 to the Adafruit IO cloud platform using the MQTT protocol. This architecture enables secure bidirectional communication over the internet, allowing remote users to toggle an optocoupler-isolated relay module connected to a light bulb.",
    concepts: [
      {
        term: "MQTT Protocol",
        definition:
          "A lightweight publish-subscribe messaging protocol designed for resource-constrained IoT devices and low-bandwidth networks.",
      },
      {
        term: "MQTT Broker",
        definition:
          "The central cloud server (Adafruit IO) that receives published messages and distributes them to subscribed client nodes.",
      },
      {
        term: "Publisher / Subscriber",
        definition:
          "Decoupled roles where publishers send data to named topics and subscribers listen for state updates asynchronously.",
      },
      {
        term: "Topics & Feeds",
        definition:
          "Hierarchical string identifiers (e.g. username/feeds/relay-control) used by the broker to channel message traffic.",
      },
      {
        term: "Relay Isolation",
        definition:
          "An optocoupler mechanism that uses light signals to electrically isolate low-voltage ESP32 logic (3.3V) from higher voltage loads.",
      },
    ],
    diagramSteps: [
      "Adafruit IO Dashboard",
      "Adafruit IO Cloud Broker",
      "MQTT Protocol (TLS/TCP)",
      "ESP32 Microcontroller",
      "Relay Module (GPIO 4)",
      "Bulb / Load Output",
    ],
    hardware: [
      {
        name: "ESP32 Microcontroller",
        category: "Hardware",
        description: "NodeMCU ESP32 board handling MQTT subscriptions.",
      },
      {
        name: "5V Relay Module",
        category: "Hardware",
        description: "Single-channel optocoupler relay module.",
      },
      {
        name: "Light Bulb / Load",
        category: "Hardware",
        description: "Connected load circuit wired through relay COM/NO terminals.",
      },
      {
        name: "Adafruit IO Platform",
        category: "Cloud / Protocol",
        description: "Cloud MQTT broker and dashboard visualization service.",
      },
      {
        name: "Adafruit_MQTT Library",
        category: "Software",
        description: "Client library for managing MQTT socket connections and feeds.",
      },
    ],
    wiringNotes:
      "ESP32 GPIO 4 connects to the Relay Signal (IN) pin. Relay VCC connects to 5V (VIN), and GND connects to ESP32 GND. The load circuit is wired in series across the Relay Common (COM) and Normally Open (NO) screw terminals.",
    configuration: [
      "Created an Adafruit IO account and configured a new dashboard with a Toggle Switch block.",
      "Created a dedicated MQTT feed named 'relay-control'.",
      "Configured credentials in firmware using placeholders for IO_USERNAME and IO_KEY.",
      "Subscribed to 'relay-control' feed in ESP32 firmware to receive ON/OFF payload updates.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_adafruit_mqtt.ino",
        description: "ESP32 MQTT Subscriber Sketch for Adafruit IO Relay Control",
        code: `#include <WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

// Wi-Fi Credentials
const char* WLAN_SSID = "YOUR_WIFI_SSID";
const char* WLAN_PASS = "YOUR_WIFI_PASSWORD";

// Adafruit IO Credentials
#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883
#define AIO_USERNAME    "YOUR_ADAFRUIT_IO_USERNAME"
#define AIO_KEY         "YOUR_ADAFRUIT_IO_KEY"

WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);

// Setup Feed for Subscription
Adafruit_MQTT_Subscribe relayFeed = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/relay-control");

const int RELAY_PIN = 4;

void connectMQTT() {
  int8_t ret;
  if (mqtt.connected()) return;

  Serial.print("Connecting to MQTT... ");
  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) {
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 5 seconds...");
    mqtt.disconnect();
    delay(5000);
    retries--;
    if (retries == 0) while (1);
  }
  Serial.println("MQTT Connected!");
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }

  mqtt.subscribe(&relayFeed);
}

void loop() {
  connectMQTT();
  Adafruit_MQTT_Subscribe *subscription;
  while ((subscription = mqtt.readSubscription(2000))) {
    if (subscription == &relayFeed) {
      char *message = (char *)relayFeed.lastread;
      Serial.print("Received MQTT Message: ");
      Serial.println(message);

      if (strcmp(message, "ON") == 0 || strcmp(message, "1") == 0) {
        digitalWrite(RELAY_PIN, HIGH);
      } else if (strcmp(message, "OFF") == 0 || strcmp(message, "0") == 0) {
        digitalWrite(RELAY_PIN, LOW);
      }
    }
  }
}`,
      },
    ],
    images: [
      { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485668/IMG-20260923-WA0070.jpg" },
      { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485667/IMG-20260923-WA0071.jpg" },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618703", title: "VID-20260923-WA0072", aspectRatio: "16/9" },
    ],
    reflection:
      "Migrating from HTTP to MQTT highlighted the efficiency of publish-subscribe architectures for IoT applications. MQTT drastically reduces network overhead and power consumption compared to HTTP polling, while Adafruit IO provided a seamless bridge for cloud-to-device telemetry.",
  },
  {
    id: "task-03",
    number: "03",
    title: "IFTTT + Adafruit IO IoT Automation",
    subtitle: "Event-Driven Cloud Workflows",
    overview:
      "Integrated IFTTT (If This Then That) with Adafruit IO to establish event-driven IoT automations. By configuring HTTP webhooks and applets, external triggers automatically publish payload messages to Adafruit IO MQTT feeds, instructing the ESP32 to actuate connected hardware without human manual intervention.",
    concepts: [
      {
        term: "IoT Automation",
        definition:
          "Rules-based execution enabling interconnected devices to act automatically upon environmental triggers or cloud events.",
      },
      {
        term: "IFTTT",
        definition:
          "A web service that creates conditional chains of automated actions (Applets) across independent cloud services.",
      },
      {
        term: "Triggers & Actions",
        definition:
          "The initiating event ('If This') that executes a target service command ('Then That').",
      },
      {
        term: "Event-Driven Architecture",
        definition:
          "A pattern where software components process data in real time as explicit events occur, rather than polling on static intervals.",
      },
      {
        term: "Webhooks",
        definition:
          "Automated HTTP POST callbacks used to transfer payload data between web applications instantly upon event triggers.",
      },
    ],
    diagramSteps: [
      "Trigger Event (Webhook / Schedule)",
      "IFTTT Automation Engine",
      "Webhook / Adafruit IO Action",
      "Adafruit IO MQTT Feed",
      "ESP32 Microcontroller",
      "Relay / Actuator Output",
    ],
    hardware: [
      {
        name: "ESP32 Microcontroller",
        category: "Hardware",
        description: "NodeMCU board executing automated MQTT actions.",
      },
      {
        name: "Relay Module & Load",
        category: "Hardware",
        description: "Output load actuated via automated event commands.",
      },
      {
        name: "IFTTT Platform",
        category: "Cloud / Protocol",
        description: "Automation platform linking triggers to Adafruit IO webhooks.",
      },
      {
        name: "Adafruit IO Webhook Service",
        category: "Cloud / Protocol",
        description: "RESTful webhook endpoint updating Adafruit IO feeds.",
      },
    ],
    wiringNotes:
      "Retained hardware wiring from Task 2 (ESP32 GPIO 4 connected to 5V relay module and load circuit).",
    configuration: [
      "Created an IFTTT Applet with Webhooks as the trigger ('If This').",
      "Configured Adafruit IO as the target action ('Then That') mapping to feed 'relay-control'.",
      "Set webhook body payload to 'ON' when event fires.",
      "Tested webhook execution via curl/HTTP client to confirm automated feed update.",
    ],
    codeSnippets: [
      {
        language: "bash",
        filename: "ifttt_webhook_trigger.sh",
        description: "Sample HTTP Webhook Curl Request for IFTTT Trigger",
        code: `# Triggering IFTTT Webhook via HTTP POST
curl -X POST https://maker.ifttt.com/trigger/YOUR_EVENT_NAME/with/key/YOUR_IFTTT_KEY \\
  -H "Content-Type: application/json" \\
  -d '{"value1":"ON"}'`,
      },
    ],
    images: [
      { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790486672/Screenshot_from_2026-09-27_10-52-12.png" },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618705", title: "VID-20260923-WA0073", aspectRatio: "9/16" },
    ],
    reflection:
      "Integrating IFTTT with Adafruit IO demonstrated the power of webhooks and event-driven workflows in IoT. Decoupling hardware execution from cloud trigger engines makes it straightforward to introduce voice control or rule-based automation without changing embedded microcontroller firmware.",
  },
  {
    id: "task-04",
    number: "04",
    title: "Firebase IoT Monitoring Dashboard",
    subtitle: "Real-Time Cloud Telemetry & Responsive Web UI",
    overview:
      "Developed a full-stack IoT telemetry system where the ESP32 streams real-time environmental data (DHT11 temperature/humidity and LDR light level) to Google Firebase Realtime Database. A custom web dashboard visualizes the data instantly and provides bidirectional relay control.",
    concepts: [
      {
        term: "BaaS (Backend-as-a-Service)",
        definition:
          "Cloud model providing database, authentication, and hosting infrastructure out of the box.",
      },
      {
        term: "Firebase Realtime Database",
        definition:
          "A cloud-hosted NoSQL JSON database that synchronizes data across connected clients in real time via WebSockets.",
      },
      {
        term: "Authentication & Security",
        definition:
          "Token-based user authentication and security rules protecting database nodes against unauthorized access.",
      },
      {
        term: "DHT11 Sensor",
        definition:
          "Digital temperature and humidity sensor utilizing a capacitive humidity sensor and thermistor.",
      },
      {
        term: "LDR (Light Dependent Resistor)",
        definition:
          "Photoresistor whose resistance decreases as ambient light increases, read via ESP32 Analog-to-Digital Converter (ADC).",
      },
    ],
    diagramSteps: [
      "Sensors (DHT11 & LDR)",
      "ESP32 Microcontroller",
      "Firebase Realtime Database",
      "Web Dashboard Interface",
      "Remote User Browser",
    ],
    hardware: [
      {
        name: "ESP32 Development Board",
        category: "Hardware",
        description: "Main controller reading sensors and pushing telemetry.",
      },
      {
        name: "DHT11 Sensor",
        category: "Hardware",
        description: "Digital temperature (°C) and humidity (%) sensor.",
      },
      {
        name: "LDR Photoresistor",
        category: "Hardware",
        description: "Analog light sensor in resistor divider network.",
      },
      {
        name: "5V Relay & Bulb",
        category: "Hardware",
        description: "Actuator load controlled via dashboard UI.",
      },
      {
        name: "Firebase RTDB",
        category: "Cloud / Protocol",
        description: "Google Firebase cloud database for live JSON data sync.",
      },
      {
        name: "Next.js / Web Dashboard",
        category: "Software",
        description: "Custom frontend interface rendering live telemetry cards.",
      },
    ],
    wiringNotes:
      "DHT11 Data pin connects to ESP32 GPIO 14. LDR divider output connects to ADC pin GPIO 34. Relay Signal pin connects to GPIO 4.",
    configuration: [
      "Created Firebase Realtime Database project in production mode.",
      "Configured Firebase Security Rules allowing authenticated read/write access.",
      "Configured ESP32 firmware with Firebase project URL and API secret key.",
      "Pushed telemetry data to path '/sensorData' every 5 seconds.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_firebase_telemetry.ino",
        description: "ESP32 Sensor Telemetry & Firebase RTDB Integration",
        code: `#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <DHT.h>

#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"

#define API_KEY "YOUR_FIREBASE_API_KEY"
#define DATABASE_URL "YOUR_FIREBASE_DATABASE_URL"

#define DHTPIN 14
#define DHTTYPE DHT11
#define LDRPIN 34
#define RELAYPIN 4

DHT dht(DHTPIN, DHTTYPE);
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(RELAYPIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  int ldr = analogRead(LDRPIN);

  if (!isnan(t) && !isnan(h)) {
    Firebase.RTDB.setFloat(&fbdo, "/sensorData/temperature", t);
    Firebase.RTDB.setFloat(&fbdo, "/sensorData/humidity", h);
    Firebase.RTDB.setInt(&fbdo, "/sensorData/lightLevel", ldr);
    Serial.printf("Temp: %.1fC | Hum: %.1f%% | Light: %d\\n", t, h, ldr);
  }

  // Check remote relay command from Firebase
  if (Firebase.RTDB.getBool(&fbdo, "/appliances/bulbState")) {
    bool state = fbdo.to<bool>();
    digitalWrite(RELAYPIN, state ? HIGH : LOW);
  }

  delay(5000);
}`,
      },
    ],
    images: FIREBASE_EVIDENCE_IMAGES,
    videos: [],
    reflection:
      "Implementing Firebase Realtime Database provided an understanding of cloud-native data synchronization for embedded hardware. Operating a NoSQL real-time database allowed bidirectional communication, where sensor readings streamed to the web interface instantly while UI toggle state changes updated hardware outputs in real time.",
  },
  {
    id: "task-05",
    number: "05",
    title: "Firebase Logging, Automation & Data Export",
    subtitle: "Complete System Integration & CSV Analytics",
    overview:
      "Constructed the complete integrated IoT pipeline featuring dual operating modes (Manual control vs Automatic LDR-based threshold automation), continuous time-series logging to Firebase, historical record storage, and a browser-based CSV data export feature for offline analysis.",
    concepts: [
      {
        term: "Historical Logging",
        definition:
          "Persisting time-stamped sensor readings in structured cloud database paths for historical analysis.",
      },
      {
        term: "Threshold Automation",
        definition:
          "Automatic control logic where the ESP32 evaluates LDR analog light readings against a set threshold to trigger relay output.",
      },
      {
        term: "Dual Operating Modes",
        definition:
          "System behavior allowing manual user override from the web UI or automated sensor-driven decision logic.",
      },
      {
        term: "CSV Data Export",
        definition:
          "Transforming JSON database records into Comma-Separated Values format for analytical software like Excel or Python pandas.",
      },
    ],
    diagramSteps: [
      "DHT11 & LDR Sensors",
      "ESP32 Microcontroller",
      "Firebase Realtime Database & Relay",
      "Web Dashboard Interface",
      "Historical Records Store",
      "CSV Analytics Download",
    ],
    hardware: [
      {
        name: "Integrated ESP32 Prototype Kit",
        category: "Hardware",
        description: "ESP32 board, DHT11, LDR circuit, relay module, and bulb.",
      },
      {
        name: "Firebase Realtime Database",
        category: "Cloud / Protocol",
        description: "Cloud database storing real-time telemetry and historical log nodes.",
      },
      {
        name: "Web Dashboard & Export Utility",
        category: "Software",
        description: "Next.js dashboard with live log table and CSV export button.",
      },
    ],
    wiringNotes:
      "All sensor pins connected as in Task 4. Dual-mode automation logic executes inside the main firmware loop.",
    configuration: [
      "Created '/history' node in Firebase storing array of timestamped sensor logs.",
      "Configured UI mode selector ('manual' vs 'automatic') synced via Firebase path '/appliances/mode'.",
      "Set automatic light threshold value at 400 (ADC raw reading).",
      "Implemented client-side Blob generation for downloading CSV reports directly in browser.",
    ],
    codeSnippets: [
      {
        language: "javascript",
        filename: "exportToCSV.ts",
        description: "Client-side JSON to CSV Converter and Downloader",
        code: `export function downloadSensorDataCSV(dataArray: Array<{
  timestamp: string;
  temperature: number;
  humidity: number;
  lightLevel: number;
  bulbState: boolean;
  mode: string;
}>) {
  const headers = ["Timestamp", "Temperature (C)", "Humidity (%)", "Light Level (ADC)", "Bulb State", "Mode"];
  const rows = dataArray.map(row => [
    row.timestamp,
    row.temperature,
    row.humidity,
    row.lightLevel,
    row.bulbState ? "ON" : "OFF",
    row.mode
  ]);

  const csvContent = "data:text/csv;charset=utf-8," 
    + [headers.join(","), ...rows.map(e => e.join(","))].join("\\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", \`esp32_sensor_log_\${Date.now()}.csv\`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}`,
      },
    ],
    images: FIREBASE_EVIDENCE_IMAGES,
    videos: [
      { provider: "vimeo", videoId: "1230618704", title: "video_20260917_191717", aspectRatio: "9/16" },
    ],
    limitations: [
      "ESP32 ADC non-linearity at extreme voltage ranges requires software calibration curves for high precision.",
      "Free-tier Firebase Realtime Database concurrent connection limits and storage quota boundaries.",
      "Unencrypted local HTTP fallback when Wi-Fi connection drops.",
    ],
    futureImprovements: [
      "Implement HTTPS/TLS for all local endpoints and web sockets.",
      "Add persistent local storage (EEPROM / SPIFFS) for offline buffering during internet outages.",
      "Integrate deep sleep modes for battery-powered sensor nodes.",
    ],
    reflection:
      "Building the integrated logging and export system synthesized microcontroller firmware, cloud database architecture, and frontend data visualization. Designing both manual and automatic control modes highlighted the importance of fail-safes and user overrides in automated hardware systems.",
  },
];

export const OVERALL_REFLECTION =
  "The IoT & Embedded Systems module provided a hands-on progression from fundamental microcontroller GPIO manipulation to cloud-connected telemetry systems. Starting with local ESP32 HTTP web servers established the mechanics of client-server request cycles on embedded hardware. Moving to MQTT and Adafruit IO demonstrated lightweight publish-subscribe protocols for efficient cloud communication, while IFTTT integration highlighted event-driven workflows. Finally, constructing a full-stack Firebase dashboard with real-time sensor monitoring, threshold automation, and CSV logging demonstrated how hardware, cloud backends, and user interfaces unite into practical IoT solutions.";
