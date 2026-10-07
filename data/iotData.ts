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
  subtitle: "ESP32 Microcontroller Architecture, MQTT & Firebase Cloud Integration",
  description:
    "Documentation of an incremental IoT engineering project exploring embedded system design with the ESP32. Moves from a local bare-metal HTTP web server to asynchronous MQTT publish-subscribe messaging on Adafruit IO, event-driven cloud triggers via IFTTT, multi-sensor Firebase Realtime Database telemetry, automated relay actuation, and client-side CSV dataset export.",
  progression: [
    { label: "ESP32", sub: "Microcontroller Node" },
    { label: "HTTP Server", sub: "Local Socket Control" },
    { label: "MQTT Broker", sub: "Adafruit IO Pub/Sub" },
    { label: "IFTTT Engine", sub: "Event-Driven Triggers" },
    { label: "Firebase RTDB", sub: "WebSocket Cloud State" },
    { label: "Sensors & Relay", sub: "Telemetry & Actuation" },
    { label: "Data Logging", sub: "Browser CSV Export" },
  ],
};

export const PROJECT_OVERVIEW =
  "This project documents an incremental engineering workflow designed to build practical experience in embedded systems and Internet of Things protocols. Beginning with a local HTTP server running directly on the ESP32 microcontroller, the implementation establishes how embedded hardware handles TCP socket connections and toggles GPIO output registers. As system requirements expanded to remote networks, the architecture migrated to asynchronous MQTT publish-subscribe messaging through Adafruit IO over TCP port 1883, enabling off-network relay switching. Cloud automation was introduced using IFTTT applets to convert external events (such as 'Activate scene') into published feed commands. Finally, the project unified multi-sensor telemetry (DHT11 temperature/humidity and LDR light level) into a full-stack dashboard powered by Google Firebase Realtime Database, incorporating automated threshold control (400 ADC units setpoint), dual operating modes, persistent time-series logging under /history/$pushId, and client-side CSV dataset export.";


export const FIREBASE_EVIDENCE_IMAGES: ImageItem[] = [
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485835/Screenshot_from_2026-09-27_10-38-09.png",
    alt: "Firebase Web Dashboard User Authentication & Login Screen",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485834/Screenshot_from_2026-09-27_10-38-58.png",
    alt: "Next.js IoT Monitoring Landing Page & Real-Time Overview",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-17.png",
    alt: "Firebase Realtime Database Multi-Sensor Node Console (/sensorData)",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-37.png",
    alt: "Next.js Live Telemetry Monitoring Gauges & Temperature Display",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-49.png",
    alt: "Firebase Realtime Database Appliance Control State Node (/appliances)",
  },
  {
    src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379942/Screenshot_from_2026-10-07_19-01-55.png",
    alt: "Next.js Dashboard Interactive Relay Toggle Control Widget",
  },
];

export const IOT_TASKS: IoTTask[] = [
  {
    id: "task-01",
    number: "01",
    title: "ESP32 Web Server & HTML LED Control",
    subtitle: "Local Wi-Fi Embedded HTTP Server",
    overview:
      "What I built: A standalone HTTP web server running directly on the ESP32 microcontroller without external cloud services, providing browser-based control over an LED connected to GPIO 2.\n\nHow it works: The ESP32 connects to a local 2.4GHz Wi-Fi access point in Station (STA) mode and obtains an IP address via DHCP. It instantiates a TCP socket listener on HTTP port 80. When a client browser requests the root path ('/'), the server sends an embedded HTML UI stored in flash memory. Clicking buttons sends HTTP GET requests to '/led/on' or '/led/off'. The firmware handler parses the URL path, writes HIGH or LOW to the GPIO 2 output register, and returns an HTTP 303 redirect back to '/'.\n\nWhat I used: ESP32 Dev Board, Micro-USB cable, 2.4GHz Wi-Fi router, Arduino IDE with WiFi.h and WebServer.h C++ libraries.\n\nEvidence caption: ESP32 local HTTP web server hardware prototype connected over micro-USB with onboard LED output indicator.\n\nImplementation notes: GPIO 2 is configured as OUTPUT in setup(). The web server route handlers (handleRoot, handleLedOn, handleLedOff) are registered with server.on() before server.begin(). Non-blocking server.handleClient() runs inside loop().\n\nWhat changed/learned: Building a bare-metal HTTP server demonstrated how embedded microcontrollers manage socket connections and HTTP headers directly in C++, connecting web URL paths to physical hardware pin voltages.",
    concepts: [
      {
        term: "ESP32 Microcontroller",
        definition:
          "Dual-core 32-bit SoC board running C++ firmware that manages Wi-Fi TCP/IP socket connections and drives 3.3V logic signals on GPIO 2 to control hardware.",
      },
      {
        term: "Wi-Fi Station Mode (STA)",
        definition:
          "Wireless configuration where the ESP32 associates with a local access point, receives a dynamic IP address via DHCP, and joins the local subnet.",
      },
      {
        term: "Embedded HTTP Web Server",
        definition:
          "Stateless HTTP server listening on TCP port 80, serving HTML strings from flash memory and executing GPIO handlers on '/led/on' and '/led/off' GET routes.",
      },
      {
        term: "Client/Server Architecture",
        definition:
          "Request-response model where a client web browser issues HTTP requests to the ESP32's IP address, and the ESP32 parses headers to change physical pin output registers.",
      },
      {
        term: "GPIO Pin Control",
        definition:
          "Hardware register control using pinMode(2, OUTPUT) and digitalWrite(2, HIGH/LOW) to set physical pin voltage to 3.3V (HIGH) or 0V (LOW).",
      },
    ],
    diagramSteps: [
      "Client Web Browser",
      "HTTP GET Request (/led/on)",
      "ESP32 Web Server (Port 80)",
      "GPIO Register (GPIO 2)",
      "LED Hardware State (HIGH/LOW)",
    ],
    hardware: [
      {
        name: "ESP32 Dev Board",
        category: "Hardware",
        description: "Microcontroller board running embedded C++ firmware and socket server handlers.",
      },
      {
        name: "Micro-USB Cable",
        category: "Hardware",
        description: "Delivers regulated 5V power and serial UART communication at 115200 baud.",
      },
      {
        name: "Local 2.4GHz Wi-Fi Router",
        category: "Hardware",
        description: "Access point providing local IP address assignment and subnet packet routing.",
      },
      {
        name: "Arduino IDE Toolchain",
        category: "Software",
        description: "Development environment for sketch compilation, flashing, and serial monitoring.",
      },
      {
        name: "WiFi & WebServer C++ Headers",
        category: "Software",
        description: "ESP32 platform libraries for TCP/IP network connection and HTTP route mapping.",
      },
    ],
    wiringNotes:
      "The ESP32 dev board receives 5V power via micro-USB. Output verification uses the onboard LED connected to GPIO 2. An optional external LED connects in series with a 220Ω current-limiting resistor between GPIO 2 and GND.",
    configuration: [
      "Defined Wi-Fi SSID and password macros in firmware for local router association.",
      "Initialized Serial communication at 115200 baud to output connection status and assigned IP address.",
      "Instantiated WebServer object bound to HTTP port 80.",
      "Registered path handlers for '/' (serving HTML UI), '/led/on' (GPIO 2 HIGH), and '/led/off' (GPIO 2 LOW).",
      "Called server.begin() in setup() and server.handleClient() in loop().",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_web_server.ino",
        description: "ESP32 Embedded HTTP Web Server & HTML Controller Sketch",
        code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

WebServer server(80);
const int ledPin = 2;

void handleRoot() {
  String html = "<html><head><title>ESP32 Local Web Control</title>";
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
      { src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790485667/IMG-20260923-WA0068.jpg", alt: "ESP32 Local HTTP Web Server Hardware Prototype on Workbench" },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618706", title: "ESP32 Local Web Server LED Control Demonstration", aspectRatio: "16/9" },
    ],
    limitations: [
      "[Implemented — Local Network Boundary]: HTTP web server operates strictly within the local Wi-Fi subnet; controlling the device from outside the network requires port forwarding or cloud proxies.",
      "[Implemented — Unencrypted Transport]: Serves plain-text HTTP over port 80 without SSL/TLS encryption.",
    ],
    futureImprovements: [
      "[Future work — HTTPS Migration]: Implement HTTPS using server certificates on ESP32 to encrypt web server traffic.",
      "[Future work — mDNS Local Hostname]: Add mDNS responder ('esp32.local') to eliminate manual IP address lookup.",
    ],
    reflection:
      "Writing a bare-metal HTTP web server directly in C++ on the ESP32 provided practical understanding of socket routing and request parsing on microcontrollers. Binding URL paths directly to physical GPIO pin states established the core foundation for embedded hardware control.",
  },
  {
    id: "task-02",
    number: "02",
    title: "Adafruit IO Dashboard & MQTT Protocol",
    subtitle: "Cloud Telemetry & Remote Relay Control",
    overview:
      "What I built: A cloud-connected remote relay controller using the ESP32, Adafruit IO, and MQTT protocol to safely switch a 230V mains light bulb from any internet-connected device.\n\nHow it works: Instead of acting as an HTTP server, the ESP32 connects as an MQTT client (Adafruit_MQTT_Client) over an unencrypted TCP socket on port 1883 (WiFiClient) to io.adafruit.com. It subscribes to the feed topic username/feeds/relay-control. When a user toggles the switch on the Adafruit IO cloud dashboard, the broker pushes payload strings ('ON' or 'OFF') down the persistent TCP socket. The ESP32's subscription loop parses the message and drives GPIO 4 HIGH or LOW. GPIO 4 signals a 5V optocoupler relay module, electrically isolating the 3.3V microcontroller while switching the high-voltage light bulb circuit.\n\nWhat I used: ESP32 Dev Board, 5V Optocoupler Relay Module, 230V Mains Light Bulb & Socket assembly, Adafruit IO cloud broker, Adafruit_MQTT C++ library.\n\nEvidence caption: Hardware circuit setup showing ESP32 wired to the 5V relay module and mains light bulb load, with Adafruit IO dashboard control.\n\nImplementation notes: Unencrypted TCP port 1883 is used via WiFiClient. GPIO 4 is connected to relay input IN. High-voltage AC hot wire passes through relay terminals COM and NO. The loop uses mqtt.readSubscription(2000) to listen for incoming feed updates.\n\nWhat changed/learned: Migrating from synchronous HTTP polling to asynchronous MQTT publish-subscribe messaging eliminated local port forwarding and drastically reduced network overhead, enabling reliable remote hardware control across different subnets.",
    concepts: [
      {
        term: "MQTT Protocol (Plain TCP Port 1883)",
        definition:
          "Lightweight binary publish-subscribe protocol running over an unencrypted TCP socket (WiFiClient) on port 1883, maintaining a persistent broker connection for instant payload delivery.",
      },
      {
        term: "Adafruit IO Cloud MQTT Broker",
        definition:
          "Cloud MQTT broker at io.adafruit.com that hosts feeds, receives published dashboard events, and forwards messages to subscribed clients.",
      },
      {
        term: "Publish / Subscribe Pattern",
        definition:
          "Decoupled messaging architecture where the dashboard UI publishes state changes to a feed, and the ESP32 client subscribes to receive payload updates without direct IP connectivity.",
      },
      {
        term: "MQTT Feed ('username/feeds/relay-control')",
        definition:
          "Named topic path on Adafruit IO used to route binary switching payloads (ON/OFF) from cloud controls to the ESP32 hardware subscription.",
      },
      {
        term: "Optocoupler Relay Isolation",
        definition:
          "Electrical safety barrier inside the relay module using internal light coupling to separate 3.3V ESP32 control logic on GPIO 4 from high-voltage AC lamp wiring.",
      },
    ],
    diagramSteps: [
      "Adafruit IO Dashboard Toggle",
      "Adafruit IO Cloud Broker (io.adafruit.com)",
      "MQTT TCP Socket (Port 1883)",
      "ESP32 Microcontroller Subscriber",
      "Optocoupler Relay Circuit (GPIO 4)",
      "230V Mains Light Bulb Output",
    ],
    hardware: [
      {
        name: "ESP32 Dev Board",
        category: "Hardware",
        description: "Microcontroller running an active MQTT subscription loop over TCP port 1883.",
      },
      {
        name: "5V Optocoupler Relay Module",
        category: "Hardware",
        description: "Single-channel relay providing optical isolation between low-voltage logic and AC mains.",
      },
      {
        name: "Mains Light Bulb Load",
        category: "Hardware",
        description: "230V AC light fixture wired through the relay's COM and NO screw terminals.",
      },
      {
        name: "Adafruit IO Cloud Broker",
        category: "Cloud / Protocol",
        description: "Cloud MQTT infrastructure managing user feeds and interactive dashboard widgets.",
      },
      {
        name: "Adafruit_MQTT Client Library",
        category: "Software",
        description: "C++ library managing socket pings, feed subscriptions, and broker reconnect logic.",
      },
    ],
    wiringNotes:
      "ESP32 GPIO 4 connects to Relay Signal Input (IN). Relay VCC connects to 5V VIN and GND to common ground. The light bulb hot wire is routed through the relay Common (COM) and Normally Open (NO) terminal contacts.",
    configuration: [
      "Created an Adafruit IO cloud dashboard with an interactive toggle switch widget.",
      "Configured an MQTT feed named 'relay-control' to receive binary ON/OFF state strings.",
      "Embedded Wi-Fi credentials, Adafruit IO username, and AIO key placeholders in C++ sketch.",
      "Instantiated Adafruit_MQTT_Client with WiFiClient on port 1883 and registered relayFeed subscription.",
      "Implemented connectMQTT() reconnect loop and polled mqtt.readSubscription() in loop().",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_adafruit_mqtt.ino",
        description: "ESP32 MQTT Subscriber Sketch for Adafruit IO Remote Relay Control",
        code: `#include <WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

const char* WLAN_SSID = "YOUR_WIFI_SSID";
const char* WLAN_PASS = "YOUR_WIFI_PASSWORD";

#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883
#define AIO_USERNAME    "YOUR_ADAFRUIT_IO_USERNAME"
#define AIO_KEY         "YOUR_ADAFRUIT_IO_KEY"

WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);
Adafruit_MQTT_Subscribe relayFeed = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/relay-control");

const int RELAY_PIN = 4;

void connectMQTT() {
  int8_t ret;
  if (mqtt.connected()) return;

  Serial.print("Connecting to MQTT Broker... ");
  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) {
    Serial.println(mqtt.connectErrorString(ret));
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
      Serial.print("Received Payload: ");
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
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-45-14.png",
        alt: "Adafruit IO Cloud Dashboard — Interactive Remote Relay Toggle Switch",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791382568/Screenshot_from_2026-10-07_19-44-23.png",
        alt: "Adafruit IO Feed Details — MQTT Feed Topic (relay-control) & Activity Log",
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
      { provider: "vimeo", videoId: "1230618703", title: "Adafruit IO MQTT Remote Relay Control Demonstration", aspectRatio: "16/9" },
    ],
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
    subtitle: "Event-Driven Cloud Workflows & Applet Integration",
    overview:
      "What I built: An event-driven cloud automation pipeline connecting an IFTTT Applet to Adafruit IO, triggering automated ESP32 relay switching from external cloud events.\n\nHow it works: The primary automation flow starts with an IFTTT Applet configured with the trigger 'If Activate scene'. When triggered, IFTTT executes the action 'Then Send data to Adafruit IO'. The action authenticates to Adafruit IO account Suryakumar J S, targeting the feed bulb-control and passing the data payload 'ON'. Adafruit IO receives this update and publishes it over MQTT to the ESP32 microcontroller, which parses the payload and sets GPIO 4 HIGH to energize the relay. Additionally, a separate command-line testing path using a curl HTTP POST request to the IFTTT Webhook endpoint (https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY) was used to verify the trigger pipeline without voice or app interaction.\n\nWhat I used: ESP32 Microcontroller, 5V Relay & Bulb Circuit, IFTTT Applet Engine, Adafruit IO Integration Service (bulb-control feed under account Suryakumar J S), curl CLI tool.\n\nEvidence caption: IFTTT Applet configuration screenshots documenting the 'If Activate scene' trigger, 'Send data to Adafruit IO' action (account: Suryakumar J S, feed: bulb-control, value: ON), and hardware circuit.\n\nImplementation notes: IFTTT Applet trigger: 'If Activate scene'. Action service: Adafruit IO. Account: Suryakumar J S. Feed: bulb-control. Data payload: 'ON'. CLI test path: curl -X POST https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY -H \"Content-Type: application/json\" -d '{\"value1\":\"ON\"}'.\n\nWhat changed/learned: Integrating cloud event triggers with MQTT feeds decoupled event evaluation from hardware firmware. External services (scenes, webhooks, voice triggers) can now actuate the relay without changing a single line of C++ code on the ESP32.",
    concepts: [
      {
        term: "Event-Driven Cloud Automation",
        definition:
          "Architecture where hardware control is initiated asynchronously by cloud platform events (such as scene triggers) rather than direct manual UI toggling.",
      },
      {
        term: "IFTTT Applet Engine",
        definition:
          "Cloud automation service that evaluates conditional 'If This Then That' logic to connect external event sources with cloud service actions.",
      },
      {
        term: "Trigger & Action Pair ('If Activate scene' -> 'Send data to Adafruit IO')",
        definition:
          "Applet rule mapping the 'Activate scene' event to an action that dispatches payload value 'ON' to Adafruit IO feed 'bulb-control' under account 'Suryakumar J S'.",
      },
      {
        term: "Adafruit IO Action Connector",
        definition:
          "Integrated cloud service action within IFTTT that authenticates with Adafruit IO and publishes incoming values directly to specified user feeds.",
      },
      {
        term: "CLI Testing Trigger Path (curl Webhook)",
        definition:
          "Separate HTTP POST path (curl -X POST https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY) used to manually fire the IFTTT webhook event from a terminal for testing.",
      },
    ],
    diagramSteps: [
      "IFTTT Trigger ('If Activate scene' / Webhook)",
      "IFTTT Applet Logic Engine",
      "Action ('Send data to Adafruit IO')",
      "Adafruit IO Account ('Suryakumar J S')",
      "MQTT Feed ('bulb-control' / Value 'ON')",
      "ESP32 Relay Actuation (GPIO 4 HIGH)",
    ],
    hardware: [
      {
        name: "ESP32 Microcontroller",
        category: "Hardware",
        description: "Edge hardware node maintaining MQTT subscription to execute incoming event payloads.",
      },
      {
        name: "Relay & Bulb Assembly",
        category: "Hardware",
        description: "Physical actuator circuit driven by GPIO 4 in response to cloud event triggers.",
      },
      {
        name: "IFTTT Platform Engine",
        category: "Cloud / Protocol",
        description: "Cloud service processing conditional Applet rules and dispatching service actions.",
      },
      {
        name: "Adafruit IO Service",
        category: "Cloud / Protocol",
        description: "Cloud API receiving HTTP actions and publishing payload data directly to user feeds.",
      },
    ],
    wiringNotes:
      "Maintained hardware wiring from Task 2 (ESP32 GPIO 4 connected to 5V optocoupler relay module controlling 230V light bulb circuit).",
    configuration: [
      "Created IFTTT Applet selecting 'If Activate scene' as the trigger component.",
      "Selected 'Send data to Adafruit IO' as the action service, authenticating account 'Suryakumar J S'.",
      "Selected target MQTT feed 'bulb-control' from Adafruit IO feed dropdown.",
      "Set data payload value to 'ON' for explicit relay energize command upon scene trigger.",
      "Tested separate CLI trigger path using curl POST to https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY.",
    ],
    codeSnippets: [
      {
        language: "bash",
        filename: "ifttt_webhook_trigger.sh",
        description: "Sample HTTP Webhook Event Trigger Request for IFTTT Pipeline",
        code: `# Triggering an IFTTT Webhook Event via HTTP POST
curl -X POST https://maker.ifttt.com/trigger/activate_scene/with/key/YOUR_IFTTT_KEY \\
  -H "Content-Type: application/json" \\
  -d '{"value1":"ON"}'`,
      },
    ],
    images: [
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1790486672/Screenshot_from_2026-09-27_10-52-12.png",
        alt: "Task 3 Hardware Prototype & Relay Circuit Setup",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-17-19.png",
        alt: "IFTTT Applet Configuration — 'If Activate scene' -> 'Then Send data to Adafruit IO' (Suryakumar J S)",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-17-47.png",
        alt: "IFTTT Adafruit IO Action Configuration — Account: Suryakumar J S, Feed: bulb-control, Payload: ON",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-29_23-18-10.png",
        alt: "IFTTT Applet Workflow Setup — 'If Activate scene' Trigger Selected",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379293/Screenshot_from_2026-09-29_23-18-18.png",
        alt: "IFTTT Applet Building Block Setup — 'If This' -> 'Then That' Initial Canvas",
      },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618705", title: "IFTTT Cloud Event Automation Demonstration", aspectRatio: "9/16" },
    ],
    limitations: [
      "[Implemented — Cloud Service Dependency]: Workflow depends on multi-hop cloud services (IFTTT -> Adafruit IO -> ESP32), adding ~1-2 seconds of latency compared to direct local control.",
      "[Implemented — Free Tier Trigger Delay]: Free IFTTT tier applet evaluation may experience variable polling execution delays.",
    ],
    futureImprovements: [
      "[Future work — Direct Webhook Handling]: Implement direct Webhook listener or Local REST API endpoint on ESP32 for zero-cloud latency.",
      "[Future work — Bidirectional State Confirmation]: Send confirmation event back to IFTTT when relay actuation completes.",
    ],
    reflection:
      "Integrating IFTTT applet triggers with Adafruit IO demonstrated the flexibility of event-driven IoT design. Offloading trigger evaluation ('Activate scene' -> 'bulb-control' = 'ON') to cloud applets allowed external services to control hardware without requiring firmware changes on the ESP32.",
  },
  {
    id: "task-04",
    number: "04",
    title: "Firebase IoT Monitoring Dashboard",
    subtitle: "Real-Time Cloud Telemetry & Responsive Web UI",
    overview:
      "What I built: A real-time multi-sensor telemetry monitoring system streaming ambient temperature, relative humidity, and light level data from an ESP32 to Google Firebase Realtime Database, coupled with a Next.js web dashboard for live monitoring and remote relay toggling.\n\nHow it works: The ESP32 reads temperature and humidity from a DHT11 sensor on GPIO 14 (with a 10kΩ pull-up resistor) and samples ambient light from an LDR voltage divider on analog input GPIO 34 (ADC1_CH6). Using the Firebase_ESP_Client library configured with the project's Firebase Web API Key (API_KEY) and database URL (DATABASE_URL), the microcontroller updates NoSQL nodes at /sensorData/temperature, /sensorData/humidity, and /sensorData/lightLevel every 5 seconds. Database security rules permit authenticated user access to /sensorData and /appliances. Concurrently, the firmware reads /appliances/bulbState to drive GPIO 4 HIGH or LOW, allowing the Next.js web dashboard to control the relay in real time over persistent WebSocket connections.\n\nWhat I used: ESP32 Dev Board, DHT11 Climate Sensor, LDR Photoresistor, 10kΩ Pull-up Resistor, 5V Relay Module, Google Firebase Realtime Database (RTDB), Next.js Web Application framework, Firebase_ESP_Client library.\n\nEvidence caption: Real-time Firebase Realtime Database dashboard console screenshots displaying live JSON trees for /sensorData and /appliances alongside Next.js telemetry cards.\n\nImplementation notes: DHT11 data pin: GPIO 14 (10kΩ pull-up). LDR pin: GPIO 34 (ADC1_CH6). Relay pin: GPIO 4. Database configuration: API_KEY (Firebase Web API Key / configuration value) and DATABASE_URL. RTDB Security Rules: Restricted to authenticated read/write on /sensorData and /appliances. Firmware updates telemetry every 5 seconds.\n\nWhat changed/learned: Replacing periodic HTTP requests with WebSocket-backed BaaS (Firebase RTDB) enabled sub-second telemetry updates and state synchronization between edge hardware and web interfaces without building custom backend server infrastructure.",
    concepts: [
      {
        term: "Firebase Realtime Database (RTDB)",
        definition:
          "Cloud-hosted NoSQL JSON database that synchronizes live telemetry data between ESP32 hardware and web clients using persistent WebSockets.",
      },
      {
        term: "Backend-as-a-Service (BaaS)",
        definition:
          "Managed cloud platform handling real-time data persistence, authentication, and event broadcasting, replacing custom server infrastructure.",
      },
      {
        term: "DHT11 Digital Climate Sensor",
        definition:
          "Single-wire digital sensor connected to GPIO 14 (with 10kΩ pull-up resistor) measuring ambient temperature (°C) and relative humidity (%) every 5 seconds.",
      },
      {
        term: "LDR Analog Light Sensor",
        definition:
          "Photoresistive sensor in a voltage divider circuit read by ESP32 12-bit ADC on GPIO 34 (ADC1_CH6), yielding raw values between 0 (dark) and 4095 (bright).",
      },
      {
        term: "Firebase Web API Key & Security Rules",
        definition:
          "Configuration value (API_KEY) authenticating database traffic under security rules configured to allow authenticated read/write access to /sensorData and /appliances paths.",
      },
    ],
    diagramSteps: [
      "DHT11 (GPIO 14) & LDR (GPIO 34) Sampling",
      "ESP32 Microcontroller Processing",
      "Firebase RTDB WebSocket Connection",
      "Live Nodes (/sensorData & /appliances)",
      "Next.js Web Dashboard UI",
      "Bidirectional Relay Control (GPIO 4)",
    ],
    hardware: [
      {
        name: "ESP32 Dev Board",
        category: "Hardware",
        description: "Primary microcontroller reading sensors, executing ADC conversions, and updating Firebase RTDB.",
      },
      {
        name: "DHT11 Climate Sensor",
        category: "Hardware",
        description: "Digital climate sensor wired to GPIO 14 with a 10kΩ pull-up resistor.",
      },
      {
        name: "LDR Photoresistor Network",
        category: "Hardware",
        description: "Light sensor in a resistor divider network read via analog ADC input GPIO 34.",
      },
      {
        name: "5V Relay & Bulb Circuit",
        category: "Hardware",
        description: "Actuatable load connected to GPIO 4, controllable via /appliances/bulbState database node.",
      },
      {
        name: "Firebase RTDB Infrastructure",
        category: "Cloud / Protocol",
        description: "Google Cloud NoSQL database maintaining real-time JSON data trees and WebSocket sync.",
      },
      {
        name: "Next.js Web Dashboard",
        category: "Software",
        description: "Frontend web application displaying live telemetry gauges and relay toggle controls.",
      },
    ],
    wiringNotes:
      "DHT11 data line connects to GPIO 14 with a 10kΩ pull-up resistor to 3.3V. LDR voltage divider output connects to analog input pin GPIO 34 (ADC1_CH6). Relay signal input connects to GPIO 4.",
    configuration: [
      "Created a Firebase project and provisioned a Realtime Database instance.",
      "Configured Realtime Database security rules permitting authenticated read/write operations on '/sensorData' and '/appliances'.",
      "Configured Firebase_ESP_Client in ESP32 firmware with project API_KEY configuration value and DATABASE_URL.",
      "Programmed loop() to publish /sensorData/temperature, humidity, and lightLevel every 5 seconds.",
      "Configured polling on /appliances/bulbState to toggle GPIO 4 HIGH or LOW.",
    ],
    codeSnippets: [
      {
        language: "cpp",
        filename: "esp32_firebase_telemetry.ino",
        description: "ESP32 Multi-Sensor Telemetry & Firebase RTDB Integration Sketch",
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
    limitations: [
      "[Implemented — WiFi Disconnect Sensitivity]: If Wi-Fi drops, Firebase write operations pause until reconnectWiFi(true) re-establishes the connection.",
      "[Implemented — Free Tier Concurrent Limit]: Free-tier Firebase RTDB limits simultaneous client WebSocket connections.",
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
    subtitle: "Complete System Integration & CSV Analytics",
    overview:
      "What I built: A complete integrated IoT telemetry system featuring automated light-threshold relay control, dual operating modes (manual web control vs. autonomous light control), time-series database logging in Firebase under /history/$pushId, and a client-side CSV dataset export utility.\n\nHow it works: The ESP32 continuously reads DHT11 climate data and LDR analog light levels on GPIO 34. In autonomous mode (/appliances/mode set to 'automatic'), the firmware evaluates the raw LDR ADC value against a calibrated threshold setpoint of 400 ADC raw units. When ambient light drops below 400 (indicating darkness), the ESP32 automatically drives GPIO 4 HIGH to energize the relay and turn ON the bulb; when light rises above 400, the relay turns OFF. In manual mode (mode set to 'manual'), the user controls /appliances/bulbState directly from the Next.js web dashboard. On every 5-second sampling cycle, the ESP32 pushes a new time-series log record to Firebase under /history/$pushId containing timestamp, temperature, humidity, lightLevel, bulbState, and mode. The Next.js frontend includes a JavaScript utility (exportToCSV.ts) that fetches historical records from /history, maps stored fields to CSV headers (Timestamp, Temperature (C), Humidity (%), Light Level (ADC), Bulb State, Mode), and generates a browser .csv download.\n\nWhat I used: Integrated ESP32 Hardware Kit (DHT11 on GPIO 14, LDR on GPIO 34, Relay on GPIO 4), Firebase Realtime Database (/history/$pushId & /appliances nodes), Next.js Dashboard App with TypeScript CSV exporter (exportToCSV.ts).\n\nEvidence caption: Comprehensive system evidence showing Firebase Realtime Database /history push-ID node structure, live dashboard telemetry, and generated CSV analytical reports.\n\nImplementation notes: Historical path: /history/$pushId. Operating modes: /appliances/mode ('manual' vs 'automatic'). Threshold logic: LDR raw ADC < 400 -> Relay ON (GPIO 4 HIGH); LDR >= 400 -> Relay OFF (GPIO 4 LOW). CSV headers mapped: Timestamp, Temperature (C), Humidity (%), Light Level (ADC), Bulb State (\"ON\"/\"OFF\"), Mode.\n\nWhat changed/learned: Combining autonomous edge threshold decisions with cloud historical logging demonstrated how to balance local real-time responsiveness with centralized cloud analytics and user override controls.",
    concepts: [
      {
        term: "Time-Series Historical Database Logging (/history/$pushId)",
        definition:
          "Database logging structure where the ESP32 pushes time-stamped JSON telemetry objects under auto-generated Firebase push IDs ($pushId), preserving chronological historical records.",
      },
      {
        term: "Autonomous Threshold Control (400 ADC Setpoint)",
        definition:
          "On-device firmware logic evaluating analog LDR values on GPIO 34 against a setpoint of 400 ADC raw units. When light drops below 400, GPIO 4 is driven HIGH to turn ON the light bulb automatically.",
      },
      {
        term: "Dual Operating Modes (/appliances/mode)",
        definition:
          "Control architecture managed via Firebase database flags ('manual' vs 'automatic'), allowing users to switch between manual dashboard relay overrides and autonomous sensor-driven control.",
      },
      {
        term: "Client-Side CSV Export Utility (exportToCSV.ts)",
        definition:
          "TypeScript helper in Next.js that parses /history JSON data, maps stored fields (timestamp, temperature, humidity, lightLevel, bulbState, mode) into standardized CSV format, and triggers a browser download.",
      },
    ],
    diagramSteps: [
      "DHT11 & LDR Sensor Sampling",
      "ESP32 Threshold Evaluation (Set: 400 ADC)",
      "Mode Selection Check (/appliances/mode)",
      "Relay Actuation (GPIO 4 HIGH/LOW)",
      "Firebase Push Logging (/history/$pushId)",
      "Next.js CSV Exporter Download",
    ],
    hardware: [
      {
        name: "Integrated ESP32 Hardware Kit",
        category: "Hardware",
        description: "Complete hardware assembly combining ESP32, DHT11, LDR divider network, relay, and bulb.",
      },
      {
        name: "Firebase RTDB Infrastructure",
        category: "Cloud / Protocol",
        description: "Cloud database managing real-time state nodes and persistent /history time-series trees.",
      },
      {
        name: "Next.js Dashboard & Export Module",
        category: "Software",
        description: "Web application displaying live telemetry, mode controls, and client-side CSV downloads.",
      },
    ],
    wiringNotes:
      "Maintained sensor and relay connections from Task 4 (DHT11 on GPIO 14, LDR on GPIO 34, Relay on GPIO 4). Threshold decision logic executes inside the firmware loop().",
    configuration: [
      "Created /history push-ID database tree in Firebase for structured time-series logging.",
      "Added /appliances/mode configuration node in Firebase supporting 'manual' and 'automatic' values.",
      "Programmed firmware threshold setpoint: LDR < 400 ADC raw units turns relay ON; LDR >= 400 turns relay OFF.",
      "Developed exportToCSV.ts utility in Next.js to map Firebase /history JSON objects into CSV files.",
      "Mapped stored database fields to CSV column headers: Timestamp, Temperature (C), Humidity (%), Light Level (ADC), Bulb State, Mode.",
    ],
    codeSnippets: [
      {
        language: "javascript",
        filename: "exportToCSV.ts",
        description: "Client-Side Telemetry JSON to CSV Converter and Downloader",
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
        alt: "Next.js Web Telemetry Dashboard Interface",
      },
      {
        src: "https://res.cloudinary.com/g52yuts7/image/upload/v1791379292/Screenshot_from_2026-09-30_00-08-57.png",
        alt: "Generated Client-Side CSV Analytical Report Download",
      },
    ],
    videos: [
      { provider: "vimeo", videoId: "1230618704", title: "Firebase System Integration & Data Export Demonstration", aspectRatio: "9/16" },
    ],
    limitations: [
      "[Implemented — ADC Non-Linearity]: ESP32 12-bit ADC pin GPIO 34 exhibits non-linear response near voltage limits, requiring raw ADC units (0-4095) rather than calibrated Lux units.",
      "[Implemented — Unbounded Log Growth]: Pushing historical records every 5 seconds to /history/$pushId without database expiration cleanup accumulates database storage over long runs.",
    ],
    futureImprovements: [
      "[Future work — Firebase Cloud Functions Cleanup]: Deploy scheduled Cloud Functions to prune historical records older than 30 days.",
      "[Future work — Dynamic Setpoint Adjustment]: Allow users to adjust the 400 ADC threshold value remotely from the web dashboard UI.",
    ],
    reflection:
      "Building the integrated logging and analytics pipeline provided complete experience uniting embedded C++ firmware, cloud BaaS architecture, and modern web application development. Implementing dual operating modes highlighted the importance of user overrides in autonomous control systems.",
  },
];

export const OVERALL_REFLECTION =
  "Technical Architecture Synthesis & Task Lessons Learned:\n\n" +
  "Over the course of this IoT engineering sequence, the system evolved from a simple local HTTP socket server into a multi-node, cloud-integrated telemetry and automation architecture. The progression systematically addressed key embedded constraints: network isolation, bandwidth overhead, event decoupling, real-time synchronization, and analytical persistence.\n\n" +
  "1. Task 1 (Local Web Server): Handling HTTP requests on bare-metal hardware highlighted the blocking risks of synchronous socket listeners, demonstrating why embedded microcontrollers must use lightweight non-blocking handlers to maintain GPIO responsiveness.\n\n" +
  "2. Task 2 (Adafruit IO & MQTT): Transitioning to asynchronous MQTT pub/sub over TCP port 1883 proved how persistent socket subscriptions eliminate the need for local port forwarding or static IP addresses when controlling high-voltage AC loads across isolated subnets.\n\n" +
  "3. Task 3 (IFTTT Automation): Offloading event evaluation to cloud Applets ('If Activate scene' -> 'Send data to Adafruit IO') showed how external cloud integrations can actuate hardware feeds without requiring firmware modifications or recompilation.\n\n" +
  "4. Task 4 (Firebase Telemetry Dashboard): Integrating a WebSocket-backed BaaS (Firebase Realtime Database) demonstrated how sub-second data streaming between edge sensors (DHT11, LDR) and web UIs can be achieved without building custom backend server infrastructure.\n\n" +
  "5. Task 5 (Autonomous Control & Analytics): Combining on-device threshold logic (400 ADC raw units setpoint) with persistent time-series logging under '/history/$pushId' highlighted the necessity of manual override flags ('/appliances/mode') when designing autonomous control systems for downstream CSV analytics.";

