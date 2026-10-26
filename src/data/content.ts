import plant from "@/assets/plant-hero.jpg";
import engineer from "@/assets/engineer.jpg";
import pipeline from "@/assets/pipeline.jpg";
import fabrication from "@/assets/fabrication.jpg";

export const images = { plant, engineer, pipeline, fabrication };

export const company = {
  name: "Rain Energy Limited",
  legalName: "Rain Energy Ltd",
  shortName: "Rain Energy",
  tagline: "Indigenous Excellence in Oil & Gas Services",
  subtitle: "Bridging decades of expertise with the future of energy.",
  established: "2026",
  experienceHeadline: "20+ Years Founding Team Experience",
  ownership: "100% Nigerian-Owned",
  workforce: "100% Indigenous Technical Professionals",
  address: "No. 1 Oba Sijuade Okunade Crescent, Chevy View Estate, Lekki, Lagos, Nigeria",
  phones: ["080 5769 9215", "080 3741 4562"],
  email: "info@rainenergy.ng",
  vision:
    "To be West Africa's most trusted energy services partner, recognized for pioneering sustainable local engineering solutions and executing complex energy projects safely and flawlessly.",
  corporateVision:
    "To become and remain a top-tier energy service delivery company that maximizes the much-needed value for local and international industry stakeholders, utilizing cost-effective and quality execution processes.",
  mission:
    "To achieve our vision by identifying solutions to existing problems in the oil, gas, and energy value chain. We deploy an experienced technical workforce and promptly take the right steps to realize client objectives in a timely manner, with an unwavering attention to safety and quality.",
  pillars: [
    {
      title: "Reliability",
      desc: "Unmatched dependability and disciplined execution on every commitment.",
    },
    {
      title: "Excellence",
      desc: "Top-tier engineering and craftsmanship adhering to global standards.",
    },
    {
      title: "Integrity",
      desc: "Transparent governance, full statutory compliance, and ethical partnerships.",
    },
    {
      title: "Innovation",
      desc: "Pioneering sustainable local engineering solutions for the energy transition.",
    },
  ],
  commitments: ["Safety-First Culture", "Expert Leadership", "Community Impact"],
  compliance: [
    {
      code: "PENCOM",
      title: "National Pension Commission",
      value: "Compliant",
      status: "Pension Certified",
    },
    {
      code: "NSITF",
      title: "Nigeria Social Insurance Trust Fund",
      value: "Compliant",
      status: "Employees Protected",
    },
    {
      code: "ITF",
      title: "Industrial Training Fund",
      value: "Compliant",
      status: "Capacity Building",
    },
    {
      code: "BPP",
      title: "Bureau of Public Procurement",
      value: "Registered Contractor",
      status: "Federal Service Provider",
    },
  ],
  hseFramework: [
    {
      code: "COMPLY",
      title: "Statutory Compliance",
      desc: "Full compliance with the Occupational Health, Safety and Environmental Act.",
    },
    {
      code: "PLAN",
      title: "CASHES Policies",
      desc: "Project planning and field execution strictly aligned with CASHES standards.",
    },
    {
      code: "ANALYZE",
      title: "Hazard Identification",
      desc: "Rigorous hazard analysis and proactive barrier controls at every phase.",
    },
    {
      code: "CERTIFY",
      title: "Medical Clearance",
      desc: "Mandatory medical fitness certification required before site admission.",
    },
    {
      code: "PROTECT",
      title: "Welfare & Environment",
      desc: "Unwavering focus on workforce welfare, ecological protection, and zero spills.",
    },
  ],
  pipelineInterventions: [
    { name: "Hot Tapping", desc: "Live line branch intervention without process shutdown." },
    {
      name: "Stopple",
      desc: "High-pressure line isolation for scheduled and emergency maintenance.",
    },
    {
      name: "Mechanical Clamps",
      desc: "Rapid leak containment and high-integrity structural repairs.",
    },
    {
      name: "Cofferdams",
      desc: "Safe, dry work-zones in flooded swamp and seasonal marsh terrains.",
    },
    {
      name: "HDD Crossing",
      desc: "Horizontal directional drilling for river, canal, and road crossings.",
    },
    {
      name: "Welding & NDT",
      desc: "Certified weld procedures with 100% non-destructive examination.",
    },
  ],
  productionFacilities: [
    "Flow station upgrades and engineered tie-ins",
    "Pressure vessels and separator maintenance",
    "Rotating equipment overhaul and precision alignment",
    "Flare systems inspection, smokeless tips, and ignition upgrades",
    "Gas receiving manifolds and high-pressure compressor stations",
    "Gas dehydration, filtration and conditioning units",
    "Custody transfer fiscal metering systems",
  ],
};

export const services = [
  {
    slug: "engineering",
    name: "Engineering & EPIC&C",
    description:
      "Turnkey front-end design, detailed engineering, and integrated EPIC&C execution tailored to operational demands.",
    icon: "engineering",
    scope: [
      "Flow station upgrades and engineered tie-ins",
      "Process, mechanical, and structural engineering",
      "Gas receiving manifolds and compressor systems",
      "Gas dehydration, conditioning, and fiscal metering",
      "Delta-V DCS upgrades and instrumentation design",
      "Turnkey EPIC&C project management",
    ],
    image: engineer,
  },
  {
    slug: "procurement",
    name: "Procurement & Supply Chain",
    description:
      "Strategic sourcing of certified long-lead equipment, valves, and bulk materials with full traceability.",
    icon: "procurement",
    scope: [
      "Long-lead and bulk materials procurement",
      "OEM equipment, rotating machinery, and spares",
      "Vendor qualification and strict QA/QC compliance",
      "Expediting, shipping, and customs clearance in Nigeria",
      "Material test certifications (MTCs) and factory inspection",
    ],
    image: plant,
  },
  {
    slug: "fabrication",
    name: "Precision Fabrication",
    description:
      "High-tolerance workshop and yard fabrication of piping spools, structural steel, and process skids.",
    icon: "fabrication",
    scope: [
      "High-pressure piping spools and manifold headers",
      "Structural steelwork, access platforms, and walkways",
      "Modular equipment skids and process assemblies",
      "Storage tanks, pressure vessels, and enclosures",
      "Certified welding, heat treatment, and NDT verification",
    ],
    image: fabrication,
  },
  {
    slug: "construction-installation",
    name: "Pipeline Works & Field Installation",
    description:
      "Specialized pipeline interventions, emergency repairs, and robust civil-structural execution in challenging terrain.",
    icon: "construction",
    scope: [
      "Pipeline construction, trenching, stringing, and backfilling",
      "Hot tapping (live-line intervention without shutdown)",
      "Stopple isolation and mechanical repair clamps",
      "Cofferdams for dry work-zones in flooded swamp terrain",
      "Horizontal Directional Drilling (HDD) crossings",
      "Equipment foundations, roadworks, and industrial shelters",
    ],
    image: pipeline,
  },
  {
    slug: "commissioning",
    name: "Commissioning & E&I",
    description:
      "Rigorous pre-commissioning, hydrostatic testing, electrical systems, and start-up uptime assurance.",
    icon: "commissioning",
    scope: [
      "Pre-commissioning walk-downs and punch-list resolution",
      "Flushing, hydrostatic pressure, and leak containment testing",
      "MCC, switchboard, and generator commissioning",
      "Field instrumentation calibration and loop checks",
      "Controlled facility start-up and complete handover packages",
    ],
    image: engineer,
  },
  {
    slug: "lpg-cng",
    name: "Gas Distribution & Processing (LPG / CNG)",
    description:
      "Integrated natural gas infrastructure and nationwide distribution driving Nigeria's cleaner energy transition.",
    icon: "gas",
    scope: [
      "LPG storage, bottling plants, and mounded bullet tanks",
      "CNG compression, dispensing, and daughter stations",
      "Nationwide distribution via certified tanker fleet",
      "Natural gas processing, filtration, and pressure regulation",
      "Turnaround maintenance, OEM parts, and operations support",
    ],
    image: plant,
  },
];

export const projects = [
  {
    slug: "gas-pipeline-niger-delta",
    title: "12 km gas pipeline construction",
    location: "Niger Delta",
    year: "2024",
    service: "construction-installation",
    sector: "Pipelines & midstream",
    image: pipeline,
    duration: "9 months",
    overview:
      "An integrated pipeline construction programme connecting gas supply infrastructure across the Niger Delta. This illustrative project demonstrates coordinated civil, mechanical, swamp cofferdam installation, and commissioning delivery.",
    scope: [
      "Route survey and right-of-way preparation in swamp terrain",
      "Pipeline welding, radiography, and non-destructive testing",
      "Trenching, swamp cofferdam dewatering, laying and backfilling",
      "Hydrostatic testing, caliper pigging, and commissioning",
    ],
  },
  {
    slug: "lpg-storage-ogun",
    title: "LPG storage and bottling plant",
    location: "Ogun State",
    year: "2023",
    service: "lpg-cng",
    sector: "Downstream, LPG & CNG",
    image: plant,
    duration: "8 months",
    overview:
      "A purpose-designed LPG storage and bottling facility, bringing together turnkey engineering, equipment installation, gas piping, and safe operational readiness.",
    scope: [
      "Storage vessel, pumps, and manifold piping installation",
      "Automated carousel bottling line integration",
      "Deluge fire protection and gas leak detection safety systems",
      "Pressure testing, inerting, and operator handover",
    ],
  },
  {
    slug: "flow-station-delta",
    title: "Flow station upgrade and tie-ins",
    location: "Delta State",
    year: "2023",
    service: "engineering",
    sector: "Upstream operators",
    image: engineer,
    duration: "6 months",
    overview:
      "A carefully planned upgrade to production facilities, with engineered tie-ins designed to minimise disruption and improve operational reliability across aging assets.",
    scope: [
      "Facility assessment and 3D detailed piping design",
      "Process separator and piping manifold modifications",
      "Delta-V DCS and field instrumentation integration",
      "Controlled hot tie-ins and commissioning support",
    ],
  },
  {
    slug: "cng-station-lagos",
    title: "CNG refuelling station",
    location: "Lagos",
    year: "2025",
    service: "lpg-cng",
    sector: "Downstream, LPG & CNG",
    image: plant,
    duration: "5 months",
    overview:
      "An illustrative CNG refuelling station supporting the growing national demand for cleaner and cost-effective transport fuels in metropolitan Lagos.",
    scope: [
      "Station layout, blast walls, and equipment specification",
      "Gas compression, cascade storage, and dual-hose dispensing systems",
      "Electrical MCC, emergency shutdown (ESD), and safety installation",
      "Pressure testing, safety certification, and commercial commissioning",
    ],
  },
  {
    slug: "tank-farm-rivers",
    title: "Tank farm fabrication and installation",
    location: "Rivers State",
    year: "2022",
    service: "fabrication",
    sector: "Industrial facilities",
    image: fabrication,
    duration: "10 months",
    overview:
      "Fabrication and installation of hydrocarbon storage infrastructure with an uncompromising focus on material traceability, weld quality, and long-term asset integrity.",
    scope: [
      "Tank plate cutting, rolling, and automated seam welding",
      "Structural steel platforms, stair towers, and interconnecting pipe racks",
      "Weld inspection, 100% radiographic and magnetic particle testing",
      "Hydrostatic tank testing, grit blasting, and protective coating",
    ],
  },
  {
    slug: "pipeline-integrity-bayelsa",
    title: "Pipeline integrity assessment and repair",
    location: "Bayelsa State",
    year: "2024",
    service: "engineering",
    sector: "Pipelines & midstream",
    image: pipeline,
    duration: "4 months",
    overview:
      "A structured assessment and rapid-repair intervention programme utilizing mechanical repair clamps and hot-tapping techniques to ensure continuous safe pipeline operation.",
    scope: [
      "Intelligent pigging data analysis and condition assessment",
      "Corrosion mapping and structural integrity analysis",
      "High-pressure mechanical clamp installation and repair execution",
      "Cathodic protection verification and regulatory compliance reporting",
    ],
  },
];

export const news = [
  {
    slug: "pipeline-milestone",
    title: "Rain Energy completes pipeline construction milestone",
    date: "24 September 2026",
    image: pipeline,
    summary:
      "A coordinated approach to field delivery marks another step forward for gas infrastructure.",
    paragraphs: [
      "Rain Energy’s illustrative pipeline programme has reached a key construction milestone, demonstrating the value of coordinated planning and field execution. The sample project brings together engineering, procurement and construction under a single delivery approach.",
      "Work includes route preparation, pipeline welding, inspection and testing. Quality checks and safety reviews are integrated into each stage, helping teams identify risks before moving to the next phase.",
      "This demonstration story reflects the type of project communication clients can expect: clear progress reporting, documented quality and a shared focus on safe delivery. Project details are samples for illustration.",
    ],
  },
  {
    slug: "cng-lagos",
    title: "New CNG station project kicks off in Lagos",
    date: "10 September 2026",
    image: plant,
    summary:
      "Integrated engineering and delivery for the next generation of gas-powered transport.",
    paragraphs: [
      "Planning is under way for an illustrative CNG refuelling station in Lagos, supporting demand for alternative transport fuels. The project showcases Rain Energy’s integrated gas infrastructure capabilities.",
      "The scope covers station design, compression and dispensing equipment, safety systems and commissioning. Early coordination helps align operational requirements with the technical solution.",
      "The station and its progress are presented as sample content for this redesign demonstration. Verified project announcements will replace this story on the full website.",
    ],
  },
  {
    slug: "safety-week",
    title: "Safety week: 250,000 safe man-hours",
    date: "18 August 2026",
    image: engineer,
    summary: "Recognising the daily decisions that help our people return home safely.",
    paragraphs: [
      "Safety week provides an opportunity to reflect on the behaviours that protect our people and partners. This sample story highlights an illustrative milestone of 250,000 safe man-hours.",
      "Teams review risk assessments, protective equipment and incident reporting procedures. Toolbox talks encourage open conversations and help translate policy into practical actions on site.",
      "The safety figure shown is a demonstration value, not a verified performance claim. Rain Energy’s commitment remains clear: safety must be built into every phase of work.",
    ],
  },
  {
    slug: "fabrication-capacity",
    title: "Rain Energy expands fabrication capacity",
    date: "22 July 2026",
    image: fabrication,
    summary: "Investing in local capability for precision fabrication and reliable delivery.",
    paragraphs: [
      "This illustrative announcement highlights the importance of local fabrication capability in Nigeria’s energy sector. Well-coordinated workshop operations support dependable project delivery.",
      "Piping spools, structural assemblies and modules require skilled technicians and a disciplined quality process. Material traceability and documented inspections help maintain confidence from fabrication to installation.",
      "The capacity expansion described here is sample content for the demo. Confirmed investments and company news will be published once approved.",
    ],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of project delivery" },
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 6, suffix: "", label: "Integrated service lines" },
  { value: 100, suffix: "%", label: "Nigerian workforce" },
];

export const team = [
  { initials: "MD", role: "Managing Director" },
  { initials: "HE", role: "Head of Engineering" },
  { initials: "HP", role: "Head of Projects" },
  { initials: "HM", role: "HSE Manager" },
];

export const sectors = [
  "Upstream operators",
  "Pipelines & midstream",
  "Downstream, LPG & CNG",
  "Industrial facilities",
];

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} | Rain Energy Limited` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Rain Energy Limited` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
