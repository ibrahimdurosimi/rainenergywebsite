import plant from "@/assets/plant-hero.jpg";
import engineer from "@/assets/engineer.jpg";
import pipeline from "@/assets/pipeline.jpg";
import fabrication from "@/assets/fabrication.jpg";
export const images = { plant, engineer, pipeline, fabrication };
export const services = [
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "From front-end design to detailed engineering, built around your operational needs.",
    icon: "engineering",
    scope: [
      "Project planning and management",
      "Process engineering",
      "Structural engineering",
      "Mechanical engineering",
      "Electrical and instrumentation engineering",
      "Pipeline engineering and management",
    ],
    image: engineer,
  },
  {
    slug: "procurement",
    name: "Procurement",
    description: "The right equipment, from trusted vendors, delivered where and when you need it.",
    icon: "procurement",
    scope: [
      "Sourcing of materials and equipment",
      "Vendor qualification",
      "Expediting and logistics",
      "Customs clearing",
      "Quality inspection",
    ],
    image: plant,
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    description:
      "Precision-built steel structures, piping and modules that stand up to demanding conditions.",
    icon: "fabrication",
    scope: [
      "Piping spools",
      "Structural steel",
      "Skids and modules",
      "Tanks and vessels",
      "Welding and non-destructive testing",
    ],
    image: fabrication,
  },
  {
    slug: "construction-installation",
    name: "Construction & Installation",
    description:
      "Safe, coordinated field execution for pipelines, facilities and critical infrastructure.",
    icon: "construction",
    scope: [
      "Pipeline construction",
      "Facility and equipment installation",
      "Mechanical, electrical and instrumentation works",
      "Civil works",
    ],
    image: pipeline,
  },
  {
    slug: "commissioning",
    name: "Commissioning Services",
    description: "Thorough testing and start-up support for a confident transition into operation.",
    icon: "commissioning",
    scope: [
      "Pre-commissioning checks",
      "Flushing, pressure and leak testing",
      "Start-up support",
      "Handover documentation",
    ],
    image: engineer,
  },
  {
    slug: "lpg-cng",
    name: "LPG / CNG",
    description:
      "Integrated gas infrastructure, from storage and bottling to refuelling and distribution.",
    icon: "gas",
    scope: [
      "LPG storage and bottling plants",
      "CNG refuelling stations",
      "Gas distribution systems",
      "Maintenance and upgrades",
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
      "An integrated pipeline construction programme connecting gas supply infrastructure across the Niger Delta. This illustrative project demonstrates coordinated civil, mechanical and commissioning delivery.",
    scope: [
      "Route survey and right-of-way preparation",
      "Pipeline welding and non-destructive testing",
      "Trenching, laying and backfilling",
      "Hydrostatic testing and commissioning",
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
      "A purpose-designed LPG storage and bottling facility, bringing together engineering, equipment installation and safe operational readiness.",
    scope: [
      "Storage vessel and piping installation",
      "Bottling line integration",
      "Fire protection and safety systems",
      "Testing and operator handover",
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
      "A carefully planned upgrade to production facilities, with engineered tie-ins designed to minimise disruption and improve operational reliability.",
    scope: [
      "Facility assessment and detailed design",
      "Process and piping modifications",
      "Instrumentation integration",
      "Controlled tie-ins and start-up support",
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
      "An illustrative CNG refuelling station supporting the growing demand for cleaner transport fuels in Lagos.",
    scope: [
      "Station layout and equipment specification",
      "Compression and dispensing systems",
      "Electrical and safety installation",
      "Pressure testing and commissioning",
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
      "Fabrication and installation of storage infrastructure with a focus on material traceability, weld quality and long-term integrity.",
    scope: [
      "Tank plate preparation and fabrication",
      "Structural steel and piping works",
      "Weld inspection and non-destructive testing",
      "Tank testing and installation",
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
      "A structured assessment and repair programme to support the continued safe operation of existing pipeline assets.",
    scope: [
      "Condition assessment and inspection",
      "Corrosion and integrity analysis",
      "Repair planning and execution",
      "Verification and technical reporting",
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
      { title: `${title} | Rain Energy` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Rain Energy` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
