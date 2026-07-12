/**
 * Site content — sourced from the client's approved website copy
 * ("TSF.COM.docx"). Projects are placeholder/sample entries until the
 * client supplies real project data and photography.
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  items: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "structural-steel",
    title: "Structural Steel Engineering & Fabrication",
    short: "Structural Steel",
    intro:
      "TSF specializes in the fabrication and construction of structural steel systems for industrial, commercial, and infrastructure developments.",
    items: [
      "Industrial Buildings",
      "Steel Warehouses",
      "Factory Structures",
      "Multi-Level Steel Buildings",
      "Pipe Racks",
      "Process Plant Structures",
      "Equipment Support Structures",
      "Conveyor Structures",
      "Mezzanine Floors",
      "Structural Platforms",
      "Steel Bridges",
      "Architectural Steel Structures",
      "Heavy Steel Construction",
    ],
    image: "/images/svc-structural.jpg",
  },
  {
    slug: "custom-fabrication",
    title: "Custom Steel Fabrication",
    short: "Custom Fabrication",
    intro:
      "We manufacture engineered steel components tailored to specific client requirements.",
    items: [
      "Staircases",
      "Handrails",
      "Ladders",
      "Walkways",
      "Access Platforms",
      "Maintenance Platforms",
      "Pipe Supports",
      "Steel Racks",
      "Canopies",
      "Gantries",
      "Equipment Frames",
      "Diesel Storage Tanks",
      "Dewatering Structures",
      "Custom Fabricated Steel Components",
    ],
    image: "/images/svc-custom.jpg",
  },
  {
    slug: "stainless-steel",
    title: "Stainless Steel Fabrication",
    short: "Stainless Steel",
    intro:
      "Architectural and industrial stainless steel fabrication delivered to exacting standards.",
    items: [
      "Architectural Stainless Steel",
      "Industrial Stainless Steel Systems",
      "Process Equipment",
      "Stainless Steel Platforms",
      "Handrails & Balustrades",
      "Hygienic Fabrication",
      "Custom Stainless Steel Products",
    ],
    image: "/images/svc-stainless.jpg",
  },
  {
    slug: "sheet-metal",
    title: "Sheet Metal Fabrication",
    short: "Sheet Metal",
    intro:
      "Using advanced CNC equipment, TSF delivers precision sheet metal manufacturing services.",
    items: [
      "CNC Laser Cutting",
      "CNC Plasma Cutting",
      "CNC Shearing",
      "CNC Bending",
      "Plate Rolling",
      "Punching",
      "Drilling",
      "Forming",
      "Welding & Assembly",
    ],
    image: "/images/svc-sheetmetal.jpg",
  },
  {
    slug: "precision-machining",
    title: "Precision Machining",
    short: "Machining",
    intro:
      "In-house machining capability for precision components and custom manufactured parts.",
    items: [
      "CNC Milling",
      "CNC Turning",
      "Horizontal & Vertical Machining",
      "Drilling",
      "Boring",
      "Threading",
      "Precision Component Manufacturing",
      "Reverse Engineering",
      "Custom Machined Parts",
    ],
    image: "/images/svc-machining.jpg",
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas Engineering Solutions",
    short: "Oil & Gas",
    intro:
      "TSF supports upstream, midstream, and downstream facilities through specialized fabrication services.",
    items: [
      "Pipe Spools",
      "Structural Skids",
      "Flanges",
      "Pipe Supports",
      "Tubing Assemblies",
      "Equipment Frames",
      "Process Platforms",
      "Structural Modules",
      "Custom Fabricated Components",
    ],
    image: "/images/svc-oilgas.jpg",
  },
  {
    slug: "marine-engineering",
    title: "Marine Engineering & Fabrication",
    short: "Marine",
    intro:
      "Fabrication and maintenance solutions for marine and offshore industries.",
    items: [
      "Marine Steel Structures",
      "Vessel Structural Repairs",
      "Deck Equipment Fabrication",
      "Offshore Steel Components",
      "Ship Maintenance Support",
      "Marine Access Systems",
    ],
    image: "/images/svc-marine.jpg",
  },
];

export const industries = [
  "Industrial Manufacturing",
  "Commercial Construction",
  "Infrastructure Development",
  "Oil & Gas",
  "Petrochemical",
  "Power Generation",
  "Renewable Energy",
  "Marine & Offshore",
  "Ports & Logistics",
  "Mining & Minerals",
  "Water & Wastewater",
  "EPC Contractors",
  "Government & Public Infrastructure",
  "Warehousing & Distribution",
];

export const whyChoose = [
  {
    title: "End-to-End Capability",
    text: "Complete engineering, fabrication, and project execution capabilities under one roof, from concept to commissioning.",
  },
  {
    title: "Experienced Teams",
    text: "Highly experienced multidisciplinary engineering and project management teams with hands-on industry expertise.",
  },
  {
    title: "Modern Workshops",
    text: "Modern fabrication workshops in Sajja Industrial Area equipped with advanced manufacturing technologies.",
  },
  {
    title: "International Standards",
    text: "Strict compliance with international engineering codes, industry standards, and ISO-certified management systems.",
  },
  {
    title: "Robust QA/QC",
    text: "Comprehensive Quality Assurance and Quality Control procedures with certified welding processes and qualified personnel.",
  },
  {
    title: "On-Time, On-Budget",
    text: "Reliable project planning and scheduling with competitive commercial solutions, without compromising quality or safety.",
  },
];

export const capabilities = [
  "Conceptual Engineering",
  "Structural Engineering Design",
  "Engineering Calculations",
  "Shop Drawings & Fabrication Detailing",
  "BIM & 3D Modelling",
  "Material Procurement",
  "Structural Steel Fabrication",
  "CNC Machining & Precision Manufacturing",
  "Surface Preparation & Protective Coating",
  "Mechanical Assembly",
  "Site Installation & Steel Erection",
  "Project Management",
  "Testing & Inspection",
  "Commissioning Support",
];

export const coreStrengths = [
  "Experienced structural and mechanical engineering professionals",
  "Certified welders and highly skilled fabrication personnel",
  "Advanced CNC machinery and modern fabrication technologies",
  "Large-capacity fabrication workshops",
  "Comprehensive project management capabilities",
  "Strict QA/QC inspection and documentation systems",
  "Efficient production planning and resource management",
  "Strong supplier and subcontractor partnerships",
  "Competitive pricing through operational efficiency",
  "Proven record of successful project delivery",
];

export const vision =
  "To be recognized as the preferred engineering and structural steel fabrication partner across the Middle East and international markets by consistently delivering innovative, sustainable, and high-quality engineering solutions that create lasting value.";

export const mission =
  "To deliver world-class engineering and steel fabrication solutions through innovation, technical expertise, operational excellence, and uncompromising quality.";

export const missionCommitments = [
  "Delivering projects safely, efficiently, and on schedule",
  "Maintaining the highest standards of quality and engineering integrity",
  "Building long-term partnerships based on trust, transparency, and reliability",
  "Investing in our people, technology, and continuous improvement",
  "Creating sustainable value for our clients, employees, and stakeholders",
];

export const isoCerts = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    text: "Comprehensive inspection procedures, documented quality controls, and certified welding processes ensure compliance with client specifications and international codes.",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental Management System",
    text: "Environmental stewardship embedded in operations, with responsible material handling, waste management, and continual improvement.",
  },
  {
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety",
    text: "Proactive risk management, employee training, and safe work practices at every stage of fabrication and site erection.",
  },
];

export const clients = [
  "Khansaheb",
  "Sobha",
  "Shapoorji Pallonji",
  "AW Rostamani",
  "Septech",
  "Simplex",
  "Bin Dasmal General Trading",
  "Hollandia Solar",
  "Tala Contracting",
  "Ilyas & Mustafa Galadari Group",
];

export const stats = [
  { value: "1997", label: "Established" },
  { value: "3", label: "ISO Certifications" },
  { value: "2", label: "UAE Facilities" },
  { value: "14", label: "Industries Served" },
];

export type Project = {
  title: string;
  location: string;
  sector: string;
  scope: string;
  image: string;
};

export const projectSectors = ["Structural Steel", "Custom Fabrication"] as const;

/**
 * Real TSF project photography supplied by the client. Titles and scopes
 * describe what each photo shows; locations are kept to the emirate level
 * pending confirmed project details from the client.
 */
export const projects: Project[] = [
  {
    title: "Multi-Level Steel Building",
    location: "United Arab Emirates",
    sector: "Structural Steel",
    scope: "Structural steel framing and floor beams for a multi-storey building.",
    image: "/images/proj-01.jpg",
  },
  {
    title: "Structural Steel Framework",
    location: "Dubai, UAE",
    sector: "Structural Steel",
    scope: "Heavy structural steel columns and primary framing erected on site.",
    image: "/images/proj-02.jpg",
  },
  {
    title: "Steel Roofing Structure",
    location: "Sharjah, UAE",
    sector: "Structural Steel",
    scope: "Roof steelwork, rafters and purlins for a commercial building.",
    image: "/images/proj-03.jpg",
  },
  {
    title: "Warehouse Steel Frame",
    location: "United Arab Emirates",
    sector: "Structural Steel",
    scope: "Portal-frame fabrication and erection for an industrial warehouse.",
    image: "/images/proj-04.jpg",
  },
  {
    title: "Steel Gantry Structure",
    location: "Dubai, UAE",
    sector: "Custom Fabrication",
    scope: "Fabrication and installation of a freestanding steel gantry structure.",
    image: "/images/proj-05.jpg",
  },
  {
    title: "Outdoor Stage Structure",
    location: "United Arab Emirates",
    sector: "Custom Fabrication",
    scope: "Custom steel truss and stage structure for an outdoor venue.",
    image: "/images/proj-06.jpg",
  },
  {
    title: "Steel Canopy Gantry",
    location: "Sharjah, UAE",
    sector: "Custom Fabrication",
    scope: "Architectural steel gantry and canopy framing with painted finish.",
    image: "/images/proj-07.jpg",
  },
  {
    title: "Access Walkways & Platforms",
    location: "United Arab Emirates",
    sector: "Custom Fabrication",
    scope: "Steel walkways, access platforms and supporting structures.",
    image: "/images/proj-08.jpg",
  },
  {
    title: "Steel Storage Racking",
    location: "Dubai, UAE",
    sector: "Custom Fabrication",
    scope: "Fabrication and installation of heavy-duty steel storage racks.",
    image: "/images/proj-09.jpg",
  },
  {
    title: "Fabricated Steel Beams",
    location: "Sharjah, UAE",
    sector: "Structural Steel",
    scope: "Cut, drilled and welded structural steel beams ready for erection.",
    image: "/images/proj-10.jpg",
  },
  {
    title: "Primed Structural Steelwork",
    location: "United Arab Emirates",
    sector: "Structural Steel",
    scope: "Structural members with surface preparation and protective primer coat.",
    image: "/images/proj-11.jpg",
  },
  {
    title: "Steel Portal Frame",
    location: "Dubai, UAE",
    sector: "Structural Steel",
    scope: "Portal-frame columns and rafters fabricated for an industrial building.",
    image: "/images/proj-12.jpg",
  },
  {
    title: "Structural Steel Sections",
    location: "Sharjah, UAE",
    sector: "Structural Steel",
    scope: "Fabricated steel sections and channels prepared in the workshop.",
    image: "/images/proj-13.jpg",
  },
  {
    title: "Fabrication Supply & Delivery",
    location: "United Arab Emirates",
    sector: "Structural Steel",
    scope: "Fabricated steelwork loaded and dispatched to site for installation.",
    image: "/images/proj-14.jpg",
  },
  {
    title: "Foundation & Support Structure",
    location: "Dubai, UAE",
    sector: "Structural Steel",
    scope: "Steel supporting structures and embedments for a reinforced foundation.",
    image: "/images/proj-15.jpg",
  },
  {
    title: "Steel Platform Detail",
    location: "Sharjah, UAE",
    sector: "Structural Steel",
    scope: "Structural platform framing and connection detailing.",
    image: "/images/proj-16.jpg",
  },
  {
    title: "Structural Steel Detailing",
    location: "United Arab Emirates",
    sector: "Structural Steel",
    scope: "Fabricated and detailed structural steel members on site.",
    image: "/images/proj-17.jpg",
  },
];

export const deliveryProcess = [
  {
    step: "01",
    title: "Engineering & Detailing",
    text: "Conceptual engineering, structural design, calculations, BIM modelling, and shop drawings.",
  },
  {
    step: "02",
    title: "Fabrication & Machining",
    text: "Precision fabrication in our Sajja workshops with advanced CNC machinery and certified welders.",
  },
  {
    step: "03",
    title: "QA/QC & Coating",
    text: "Documented inspection, testing, surface preparation, and protective coating to specification.",
  },
  {
    step: "04",
    title: "Erection & Handover",
    text: "Site installation, steel erection, commissioning support, and on-schedule handover.",
  },
];
