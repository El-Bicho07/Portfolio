export interface ProtosemSection {
  subheading: string;
  text: string;
}

export interface ProtosemEntry {
  id: string;
  weekNumber: number | string;
  week: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  description?: string;
  detailReport?: string;
  notes?: string[];
  skillsUsed?: string[];
  sections?: ProtosemSection[];
  images?: string[];
  externalUrl?: string;
}

export const PROTOSEM_ENTRIES: ProtosemEntry[] = [
  {
    id: "week-00",
    weekNumber: 0,
    week: "Week 0",
    date: "Jul 20-24, 2026",
    title: "16 Personalities & ZenPencils Resonance",
    summary:
      "Took the 16 Personalities test and identified as an Architect (INTJ-A). Reflected on Gavin Aung Than's ZenPencils comic #218 on procrastination and shared it publicly as part of the learning-in-public habit.",
    description:
      "Took the 16 Personalities test and identified as an Architect (INTJ-A). Reflected on Gavin Aung Than's ZenPencils comic #218 on procrastination and shared it publicly as part of the learning-in-public habit.",
    content:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    detailReport:
      'Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting. For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
    notes: [
      "Completed 16 Personalities test & reflection.",
      "Explored ZenPencils quote comics & selected key inspiration.",
      "Shared public reflection for learning-in-public practice.",
    ],
    skillsUsed: [
      "16 Personalities",
      "Self Reflection",
      "ZenPencils",
      "Learning in Public",
    ],
    sections: [
      {
        subheading: "16 Personalities Test",
        text: "Took the 16 Personalities test. Came out as Architect (INTJ-A), a type generally associated with strategic thinking and working through problems independently before acting.",
      },
      {
        subheading: "ZenPencils Reflection",
        text: 'For ZenPencils, picked comic #218, "Procrastination," Gavin Aung Than\'s illustration of Edgar Allan Poe\'s own words: "I know too well the unconquerable procrastination which besets the poet." It resonated because I\'d been feeling tired and putting off my own work the week before. Seeing it laid out in comic form, and realizing even Poe struggled with the exact same thing nearly two centuries earlier, made the pattern harder to brush off as just a bad week. Shared it publicly as part of the program\'s learning-in-public habit, which was its own small exercise in doing the opposite of what the comic was about.',
      },
    ],
    images: [],
  },
  {
    id: "week-01",
    weekNumber: 1,
    week: "Week 1",
    date: "Jul 27-31, 2026",
    title: "5S Workspace & Portfolio Build",
    summary:
      "Applied the 5S workspace methodology at Forge to organize the electrical shutter box. Afterwards, built and deployed a personal portfolio website using Next.js, Tailwind CSS, and Vercel.",
    description:
      "Applied the 5S workspace methodology at Forge to organize the electrical shutter box. Afterwards, built and deployed a personal portfolio website using Next.js, Tailwind CSS, and Vercel.",
    content:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    detailReport:
      "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place. After that, shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
    notes: [
      "Implemented 5S workspace setup (Sort, Set in Order, Shine, Standardize, Sustain).",
      "Initialized Next.js + Tailwind CSS Obsidian portfolio shell.",
      "Established public home for Protosem weekly logs.",
    ],
    skillsUsed: [
      "5S Methodology",
      "Workspace Optimization",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
    ],
    sections: [
      {
        subheading: "5S Workspace Management",
        text: "5S workspace management was done at Forge. The method breaks down into five steps: Sort, Set in Order, Shine, Standardize, and Sustain. Our team's task was the shutter box, an accumulation of electrical and general components with no clear system behind it. Sorting meant deciding what was actually needed versus what was clutter, and Set in Order meant grouping and labeling everything so the next person could find a part without digging through the whole box. It was a small task, but a real lesson in how much time gets lost to a workspace that was never organized in the first place.",
      },
      {
        subheading: "Portfolio Website Build",
        text: "Shifted to building my own portfolio website using Next.js and Tailwind CSS, added the core content, and deployed it on Vercel.",
      },
    ],
    images: [],
  },
  {
    id: "week-02",
    weekNumber: 2,
    week: "Week 2",
    date: "Aug 3-7, 2026",
    title: "Frugal Innovation, Algorithms & Block-Based Dev",
    summary:
      "Attended a frugal innovation orientation by Mukesh Sud, reviewed algorithms with TED-Ed Think Like a Coder, and explored Scratch and MIT App Inventor before closing with Applied Design Thinking.",
    description:
      "Attended a frugal innovation orientation by Mukesh Sud, reviewed algorithms with TED-Ed Think Like a Coder, and explored Scratch and MIT App Inventor before closing with Applied Design Thinking.",
    content:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    detailReport:
      'Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation. Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics. Explored Scratch, a block-based drag-and-drop platform for building animated scenes, then moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations. Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.',
    notes: [
      "Frugal Innovation orientation session by Mukesh Sud.",
      "Algorithms & flowcharting via TED-Ed Think Like a Coder.",
      "Block-based development with Scratch & MIT App Inventor.",
      "Applied Design Thinking, Customer Discovery & Lean Startup.",
    ],
    skillsUsed: [
      "Frugal Innovation",
      "Algorithms",
      "Flowcharting",
      "Python",
      "Scratch",
      "MIT App Inventor",
      "Design Thinking",
      "Lean Startup",
    ],
    sections: [
      {
        subheading: "Frugal Innovation Orientation",
        text: "Attended an orientation session by Mukesh Sud, co-author of LeanSpark: Frugal by Design, Global in Impact and the upcoming Simple Thinking, on frugal innovation.",
      },
      {
        subheading: "Algorithms & Python Basics",
        text: 'Reviewed algorithms and flowcharting through TED-Ed\'s "Think Like a Coder" series, mapping out a flowchart for each problem, alongside a first pass at Python basics.',
      },
      {
        subheading: "Block-Based Development with Scratch",
        text: "Explored Scratch, a block-based drag-and-drop platform for building animated scenes.",
      },
      {
        subheading: "Mobile App Building with MIT App Inventor",
        text: "Moved to MIT App Inventor, a similar block-based tool but for building installable mobile apps instead of animations.",
      },
      {
        subheading: "Applied Design Thinking",
        text: "Closed the week with a session on Applied Design Thinking, covering Design Thinking, Customer Discovery, and Lean Startup concepts.",
      },
    ],
    images: [],
  },
  {
    id: "week-03",
    weekNumber: 3,
    week: "Week 3",
    date: "Aug 10-14, 2026",
    title: "Electronics Basics, Systems Thinking & Fusion 360",
    summary:
      "Explored core electronics fundamentals, systems and design thinking frameworks, Fusion 360 3D CAD modeling, and a hands-on paper rocket team activity.",
    description:
      "Explored core electronics fundamentals, systems and design thinking frameworks, Fusion 360 3D CAD modeling, and a hands-on paper rocket team activity.",
    content:
      "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors. Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes. Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay. Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints. Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won. Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
    detailReport:
      "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors. Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes. Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay. Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints. Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won. Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
    notes: [
      "Covered core electronics fundamentals, components & motor types.",
      "Explored systems thinking & 3-phase design thinking framework.",
      "Learned Fusion 360 sketch, 3D tools & Lever Bracket modeling.",
      "Participated in paper rocket activity & clay model evaluation.",
    ],
    skillsUsed: [
      "Electronics Fundamentals",
      "Fusion 360",
      "Systems Thinking",
      "Design Thinking",
      "CAD/Clay Modeling",
      "Teamwork",
    ],
    sections: [
      {
        subheading: "Electronics Basics",
        text: "Covered core electronics fundamentals: resistors, capacitors, and conductors, transistor types (BJT, MOSFET, IGBT, FET), resistor color coding, diodes and their types, and the different categories of AC and DC motors.",
      },
      {
        subheading: "Systems Thinking and Design Thinking",
        text: "Explored systems thinking, which combines mechanical, electrical, and software disciplines to develop a product. Went through the design thinking framework in three phases: Immersion (Empathize, Define), Ideation (Ideate), and Implementation (Prototype, Test, Feedback, and Iterate) for better outcomes.",
      },
      {
        subheading: "Fusion 360 Basics",
        text: "Learned the fundamentals of Fusion 360: sketch tools, Extrude, Revolve, Hole, Fillet, and Shell. Used a reference image found online to model a design in Clay.",
      },
      {
        subheading: "Patterns and the Lever Bracket Tutorial",
        text: "Explored Circular and Rectangular Pattern tools, then followed a tutorial on building a Lever Bracket in Fusion 360, using a reference sketch image from the web along with real dimensions and constraints.",
      },
      {
        subheading: "Paper Rocket Team Activity",
        text: "Paired into teams of two for a paper rocket activity: built one plane without phone access in five minutes, then a second with phone access in five minutes. The team whose plane flew farthest won.",
      },
      {
        subheading: "Clay Model and Evaluation",
        text: "Wrapped up pending work on the clay model and Lever Bracket part modeling, with Fusion 360 design evaluations conducted for a few team members.",
      },
    ],
    images: [],
  },
  {
    id: "week-04",
    weekNumber: 4,
    week: "Week 4",
    date: "Aug 17-21, 2026",
    title: "Mechanical Design, Laser Cutting & Team Role Selection",
    summary:
      "Continued Fusion 360 CAD modeling, fabricated an acrylic Assassin's Creed logo using laser cutting, designed an MQ-4 sensor enclosure, and selected the Hacker technical role for team formation.",
    description:
      "Continued Fusion 360 CAD modeling, fabricated an acrylic Assassin's Creed logo using laser cutting, designed an MQ-4 sensor enclosure, and selected the Hacker technical role for team formation.",
    content:
      "Continued working with Fusion 360, this time designing a water bottle. Ran into early difficulties understanding some of the tools and debugging errors in the software, but with peer guidance picked up what was needed and got more comfortable, to the point of being able to help teammates debug their own designs. For the laser cutting activity, chose an Assassin's Creed logo as the design and used the laser cutter to inscribe it onto a 5x5cm white transparent acrylic piece. Good practical experience in taking a digital design through to a physical fabricated object. Recreated a simple cam and follower mechanism in Fusion 360, using joints and motion constraints to represent its movement. Helped clarify how the rotational motion of the cam translates into the follower's movement. Designed an enclosure for an MQ-4 sensor, working around its physical dimensions and requirements, and got introduced to the workflow of preparing a design for 3D printing. At the Marketplace, chose not to go forward for the Visionary role and instead took on the Hacker role, the technical role within the team, focused on the implementation side of the project. Listened to the visionaries present their challenge statements, then went through a bidding process for the one I wanted to work on, submitting a CV showing past work and skills. Teams were formed based on the challenge requirements and the CVs submitted.",
    detailReport:
      "Continued working with Fusion 360, this time designing a water bottle. Ran into early difficulties understanding some of the tools and debugging errors in the software, but with peer guidance picked up what was needed and got more comfortable, to the point of being able to help teammates debug their own designs. For the laser cutting activity, chose an Assassin's Creed logo as the design and used the laser cutter to inscribe it onto a 5x5cm white transparent acrylic piece. Good practical experience in taking a digital design through to a physical fabricated object. Recreated a simple cam and follower mechanism in Fusion 360, using joints and motion constraints to represent its movement. Helped clarify how the rotational motion of the cam translates into the follower's movement. Designed an enclosure for an MQ-4 sensor, working around its physical dimensions and requirements, and got introduced to the workflow of preparing a design for 3D printing. At the Marketplace, chose not to go forward for the Visionary role and instead took on the Hacker role, the technical role within the team, focused on the implementation side of the project. Listened to the visionaries present their challenge statements, then went through a bidding process for the one I wanted to work on, submitting a CV showing past work and skills. Teams were formed based on the challenge requirements and the CVs submitted.",
    notes: [
      "Designed a water bottle and cam-and-follower mechanism in Fusion 360.",
      "Fabricated an Assassin's Creed logo on acrylic using laser cutting.",
      "Designed a 3D printable enclosure for an MQ-4 sensor.",
      "Selected Hacker role and joined team for the challenge statement.",
    ],
    skillsUsed: [
      "Fusion 360",
      "Laser Cutting",
      "Mechanism Design",
      "3D Printing",
      "Teamwork",
    ],
    sections: [
      {
        subheading: "Mechanical Design and Peer Debugging",
        text: "Continued working with Fusion 360, this time designing a water bottle. Ran into early difficulties understanding some of the tools and debugging errors in the software, but with peer guidance picked up what was needed and got more comfortable, to the point of being able to help teammates debug their own designs.",
      },
      {
        subheading: "Laser Cutting: Assassin's Creed Logo",
        text: "For the laser cutting activity, chose an Assassin's Creed logo as the design and used the laser cutter to inscribe it onto a 5x5cm white transparent acrylic piece. Good practical experience in taking a digital design through to a physical fabricated object.",
      },
      {
        subheading: "Animation and Mechanisms: Cam and Follower",
        text: "Recreated a simple cam and follower mechanism in Fusion 360, using joints and motion constraints to represent its movement. Helped clarify how the rotational motion of the cam translates into the follower's movement.",
      },
      {
        subheading: "3D Printing: MQ-4 Sensor Enclosure",
        text: "Designed an enclosure for an MQ-4 sensor, working around its physical dimensions and requirements, and got introduced to the workflow of preparing a design for 3D printing.",
      },
      {
        subheading: "Marketplace: Choosing a Team Role",
        text: "At the Marketplace, chose not to go forward for the Visionary role and instead took on the Hacker role, the technical role within the team, focused on the implementation side of the project.",
      },
      {
        subheading: "Challenge Statement Selection and Team Formation",
        text: "Listened to the visionaries present their challenge statements, then went through a bidding process for the one I wanted to work on, submitting a CV showing past work and skills. Teams were formed based on the challenge requirements and the CVs submitted.",
      },
    ],
    images: [],
  },
  {
    id: "week-05",
    weekNumber: 5,
    week: "Week 5",
    date: "Aug 24-28, 2026",
    title: "UI/UX Design, User Research & Project Brief",
    summary:
      "Explored UI/UX design with Figma and FigJam, conducted customer discovery for small business inventory management, met with stakeholders, and covered project management fundamentals.",
    description:
      "Explored UI/UX design with Figma and FigJam, conducted customer discovery for small business inventory management, met with stakeholders, and covered project management fundamentals.",
    content:
      "Started the week with an introduction to UI/UX design thinking, exploring Figma and FigJam for wireframing, prototyping, collaborative ideation, and planning user flows, with the focus on understanding the user and their requirements before moving into development. Used FigJam to organize the project's research, laying out the problem statement, process, responses, and findings in a visual, collaborative board. Worked in Figma on wireframes, sitemaps, and product flows to establish the product's basic information architecture and interface structure before development. The sessions emphasized starting from the user and the problem rather than visual appearance first, and designing around user requirements instead of personal preference, with Figma and FigJam as the tools for turning those ideas into tangible flows. As part of customer discovery, prepared and distributed structured feedback forms to gather input from potential users, using the responses to understand the problem from the perspective of people who'd actually use the system. Had an online meeting with our stakeholder, discussing the problem statement and asking questions to get a clearer picture of what was actually expected from the solution. Our project focus became an inventory management system for small scale businesses. Reached out to multiple local business owners about their current inventory practices and found a real spread: some already used dedicated software, some used none at all, and some relied on Excel or spreadsheets, showing how differently small businesses handle inventory depending on their level of digital adoption. Also got an introduction to project management fundamentals: the responsibilities and skills of a project manager, risk management, stakeholder communication, and servant leadership.",
    detailReport:
      "Started the week with an introduction to UI/UX design thinking, exploring Figma and FigJam for wireframing, prototyping, collaborative ideation, and planning user flows, with the focus on understanding the user and their requirements before moving into development. Used FigJam to organize the project's research, laying out the problem statement, process, responses, and findings in a visual, collaborative board. Worked in Figma on wireframes, sitemaps, and product flows to establish the product's basic information architecture and interface structure before development. The sessions emphasized starting from the user and the problem rather than visual appearance first, and designing around user requirements instead of personal preference, with Figma and FigJam as the tools for turning those ideas into tangible flows. As part of customer discovery, prepared and distributed structured feedback forms to gather input from potential users, using the responses to understand the problem from the perspective of people who'd actually use the system. Had an online meeting with our stakeholder, discussing the problem statement and asking questions to get a clearer picture of what was actually expected from the solution. Our project focus became an inventory management system for small scale businesses. Reached out to multiple local business owners about their current inventory practices and found a real spread: some already used dedicated software, some used none at all, and some relied on Excel or spreadsheets, showing how differently small businesses handle inventory depending on their level of digital adoption. Also got an introduction to project management fundamentals: the responsibilities and skills of a project manager, risk management, stakeholder communication, and servant leadership.",
    notes: [
      "Structured research and wireframes in FigJam and Figma.",
      "Gathered user feedback from local business owners on inventory practices.",
      "Met online with stakeholder to refine challenge requirements.",
      "Learned project management fundamentals and servant leadership.",
    ],
    skillsUsed: [
      "Figma",
      "FigJam",
      "UI/UX Design",
      "Customer Discovery",
      "Stakeholder Communication",
      "Project Management",
    ],
    sections: [
      {
        subheading: "Introduction to UI/UX Design and Prototyping",
        text: "Started the week with an introduction to UI/UX design thinking, exploring Figma and FigJam for wireframing, prototyping, collaborative ideation, and planning user flows, with the focus on understanding the user and their requirements before moving into development.",
      },
      {
        subheading: "FigJam: Research and Idea Organization",
        text: "Used FigJam to organize the project's research, laying out the problem statement, process, responses, and findings in a visual, collaborative board.",
      },
      {
        subheading: "Figma: Wireframes and Product Structure",
        text: "Worked in Figma on wireframes, sitemaps, and product flows to establish the product's basic information architecture and interface structure before development.",
      },
      {
        subheading: "UI/UX Design Principles",
        text: "The sessions emphasized starting from the user and the problem rather than visual appearance first, and designing around user requirements instead of personal preference, with Figma and FigJam as the tools for turning those ideas into tangible flows.",
      },
      {
        subheading: "User Research",
        text: "As part of customer discovery, prepared and distributed structured feedback forms to gather input from potential users, using the responses to understand the problem from the perspective of people who'd actually use the system.",
      },
      {
        subheading: "Stakeholder Meeting",
        text: "Had an online meeting with our stakeholder, discussing the problem statement and asking questions to get a clearer picture of what was actually expected from the solution.",
      },
      {
        subheading: "Project Brief: Inventory Management for Small Businesses",
        text: "Our project focus became an inventory management system for small scale businesses. Reached out to multiple local business owners about their current inventory practices and found a real spread: some already used dedicated software, some used none at all, and some relied on Excel or spreadsheets, showing how differently small businesses handle inventory depending on their level of digital adoption.",
      },
      {
        subheading: "Project Management Fundamentals",
        text: "Also got an introduction to project management fundamentals: the responsibilities and skills of a project manager, risk management, stakeholder communication, and servant leadership.",
      },
    ],
    images: [],
  },
  {
    id: "week-06",
    weekNumber: 6,
    week: "Week 6",
    date: "Aug 31-Sep 4, 2026",
    title: "Implementation Planning, Embedded Systems & Soldering",
    summary:
      "Defined first level solution architecture and UI/UX mindmaps, learned computational hardware and embedded systems, and assembled a working 555 timer IC circuit.",
    description:
      "Defined first level solution architecture and UI/UX mindmaps, learned computational hardware and embedded systems, and assembled a working 555 timer IC circuit.",
    content:
      "Started with a first level implementation discussion for the proposed solution, identifying its main components and thinking through the architecture early enough to surface ambiguities before development began. Worked with mindmaps, sitemaps, and wireframes as part of the UI/UX architecture process, using mindmaps to organize concepts, sitemaps to structure information, and wireframes to plan the interface and user flow. Covered the basics of power, voltage, and current, the foundation for understanding electronic circuits and hardware systems. Introduced to microcontrollers, microprocessors, and embedded system architecture, and how embedded systems interact with the physical world through sensors and actuators. Practiced soldering electronic components onto a dot/PCB board, working with a soldering iron, wires, and discrete components to physically assemble a circuit. The soldering activity resulted in a working 555 timer IC circuit, built with a 555 timer IC, two LEDs, resistors, an electrolytic capacitor, and power leads mounted on the board. Also got hands-on exposure to hardware prototyping and enclosure work in the lab.",
    detailReport:
      "Started with a first level implementation discussion for the proposed solution, identifying its main components and thinking through the architecture early enough to surface ambiguities before development began. Worked with mindmaps, sitemaps, and wireframes as part of the UI/UX architecture process, using mindmaps to organize concepts, sitemaps to structure information, and wireframes to plan the interface and user flow. Covered the basics of power, voltage, and current, the foundation for understanding electronic circuits and hardware systems. Introduced to microcontrollers, microprocessors, and embedded system architecture, and how embedded systems interact with the physical world through sensors and actuators. Practiced soldering electronic components onto a dot/PCB board, working with a soldering iron, wires, and discrete components to physically assemble a circuit. The soldering activity resulted in a working 555 timer IC circuit, built with a 555 timer IC, two LEDs, resistors, an electrolytic capacitor, and power leads mounted on the board. Also got hands-on exposure to hardware prototyping and enclosure work in the lab.",
    notes: [
      "Mapped UI/UX architecture and first level implementation plan.",
      "Covered fundamentals of power, electronics, and embedded systems.",
      "Practiced hands-on soldering on dot/PCB boards.",
      "Assembled and tested a working 555 timer IC circuit.",
    ],
    skillsUsed: [
      "UI/UX Architecture",
      "Electronics Fundamentals",
      "Embedded Systems",
      "Soldering",
      "Circuit Design",
    ],
    sections: [
      {
        subheading: "First Level Implementation Planning",
        text: "Started with a first level implementation discussion for the proposed solution, identifying its main components and thinking through the architecture early enough to surface ambiguities before development began.",
      },
      {
        subheading: "UI/UX Architecture",
        text: "Worked with mindmaps, sitemaps, and wireframes as part of the UI/UX architecture process, using mindmaps to organize concepts, sitemaps to structure information, and wireframes to plan the interface and user flow.",
      },
      {
        subheading: "Computational Hardware Fundamentals",
        text: "Covered the basics of power, voltage, and current, the foundation for understanding electronic circuits and hardware systems.",
      },
      {
        subheading: "Embedded Systems",
        text: "Introduced to microcontrollers, microprocessors, and embedded system architecture, and how embedded systems interact with the physical world through sensors and actuators.",
      },
      {
        subheading: "Hands-On Soldering",
        text: "Practiced soldering electronic components onto a dot/PCB board, working with a soldering iron, wires, and discrete components to physically assemble a circuit.",
      },
      {
        subheading: "555 Timer Circuit",
        text: "The soldering activity resulted in a working 555 timer IC circuit, built with a 555 timer IC, two LEDs, resistors, an electrolytic capacitor, and power leads mounted on the board.",
      },
      {
        subheading: "Hardware Prototyping",
        text: "Also got hands-on exposure to hardware prototyping and enclosure work in the lab.",
      },
    ],
    images: [],
  },
  {
    id: "week-07",
    weekNumber: 7,
    week: "Week 7",
    date: "Sep 7-11, 2026",
    title: "IoT & Embedded Systems: From Prototype to Production",
    summary:
      "Explored IoT and embedded systems through a series of ESP32-based tasks covering HTTP control, MQTT and Adafruit IO, IFTTT automation, Firebase dashboards, sensor integration, relay control, data logging, and export.",
    description:
      "Explored IoT and embedded systems through a series of ESP32-based tasks covering HTTP control, MQTT and Adafruit IO, IFTTT automation, Firebase dashboards, sensor integration, relay control, data logging, and export.",
    content:
      "Explored IoT and embedded systems through a series of ESP32-based tasks covering HTTP control, MQTT and Adafruit IO, IFTTT automation, Firebase dashboards, sensor integration, relay control, data logging, and export.",
    detailReport:
      "Explored IoT and embedded systems through a series of ESP32-based tasks covering HTTP control, MQTT and Adafruit IO, IFTTT automation, Firebase dashboards, sensor integration, relay control, data logging, and export.",
    externalUrl: "/iot",
    notes: [
      "ESP32 HTTP Web Server & HTML LED Control",
      "Adafruit IO Cloud Dashboard & MQTT Protocol",
      "IFTTT Event-Driven IoT Automation",
      "Firebase Realtime Database & Web Dashboard Integration",
      "Sensor Data Logging, Automatic Control & CSV Export",
    ],
    skillsUsed: [
      "ESP32",
      "IoT",
      "HTTP",
      "MQTT",
      "Adafruit IO",
      "IFTTT",
      "Firebase",
      "Sensors",
      "Relay Control",
    ],
    images: [],
  },
];
