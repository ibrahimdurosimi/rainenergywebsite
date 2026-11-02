import plant from "@/assets/plant-hero.jpg";
import engineer from "@/assets/engineer.jpg";
import pipeline from "@/assets/pipeline.jpg";
import fabrication from "@/assets/fabrication.jpg";
import refinery from "@/assets/refinery.jpg";
import pipework from "@/assets/pipework.jpg";
import blueprint from "@/assets/blueprint.jpg";

export const images = { plant, engineer, pipeline, fabrication, refinery, pipework, blueprint };

/** Public site address. Override at build time with VITE_SITE_URL if the domain changes. */
export const SITE_URL: string = (
  (import.meta.env?.["VITE_SITE_URL"] as string | undefined) ?? "https://rainenergy.ng"
).replace(/\/$/, "");

/**
 * Everything on this site comes from the Rain Energy Company Profile 2026
 * and the Brand Guidelines 2026. Do not add claims that are not in those documents.
 */
export const company = {
  name: "Rain Energy Limited",
  shortName: "Rain Energy",
  tagline: "Indigenous Excellence in Oil & Gas Services",
  subtitle: "Bridging decades of expertise with the future of energy.",
  established: "2026",
  experienceHeadline: "20+ Years Founding Team Experience",
  address: "No. 1 Oba Sijuade Okunade Crescent, Chevy View Estate, Lekki, Lagos, Nigeria",
  phones: [
    { display: "080 5769 9215", tel: "+2348057699215" },
    { display: "080 3741 4562", tel: "+2348037414562" },
  ],
  email: "info@rainenergy.ng",
  whoWeAre: [
    "Rain Energy Ltd is a fully indigenous Nigerian oil and gas servicing company. It is 100% Nigerian-owned and it is powered by skilled indigenous professionals.",
    "A newly established company built on 20+ years of founding-team experience, delivering proven success and operational excellence across the entire energy value chain.",
  ],
  endToEnd: "End-to-end solutions from EPIC&C to pipeline maintenance and LPG / CNG distribution.",
  vision:
    "To become and remain a top-tier energy service delivery company that maximizes the much-needed value for local and international industry stakeholders, utilizing cost-effective and quality execution processes.",
  mission:
    "To achieve our vision by identifying solutions to existing problems in the oil, gas, and energy value chain. We deploy an experienced technical workforce and promptly take the right steps to realize client objectives in a timely manner. This is achieved with an unwavering attention to safety and quality.",
  values: ["Reliability", "Excellence", "Integrity", "Innovation"],
  commitments: ["Safety-First Culture", "Expert Leadership", "Community Impact"],
  hseIntro:
    "Health, Safety and Environment underpin every decision at Rain Energy. We embed compliance and vigilance into every project.",
  hseFramework: [
    {
      code: "COMPLY",
      desc: "Full compliance with the Occupational Health, Safety and Environmental Act.",
    },
    { code: "PLAN", desc: "Project planning and execution aligned with CASHES policies." },
    { code: "ANALYZE", desc: "Rigorous hazard analysis and control at every stage." },
    { code: "CERTIFY", desc: "Medical certification required before any site admission." },
    { code: "PROTECT", desc: "Unwavering focus on health, welfare and environment." },
  ],
  // The TIN appears in the company profile but is intentionally not published on the website.
  compliance: [
    { code: "CAC", value: "RC No. 1992997" },
    { code: "PENCOM", value: "Compliant" },
    { code: "NSITF", value: "Compliant" },
    { code: "ITF", value: "Compliant" },
    { code: "BPP", value: "Registered Contractor / Service Provider" },
  ],
  pipelineInterventions: [
    { name: "Hot Tapping", desc: "Live line intervention without shutdown." },
    { name: "Stopple", desc: "Isolation for scheduled maintenance." },
    { name: "Mechanical Clamps", desc: "Rapid leak containment & repair." },
    { name: "Cofferdams", desc: "Dry work-zones in flooded terrain." },
    { name: "HDD", desc: "Horizontal directional drilling for crossings." },
    { name: "Welding & NDT", desc: "Certified welds, inspected & verified." },
  ],
};

export const primaryPhone = company.phones[0]!;

export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  headline?: string;
  points: string[];
  image: string;
  closing?: string;
};

export const services: Service[] = [
  {
    slug: "epicc",
    name: "EPIC&C",
    short: "Engineering, Procurement, Installation, Construction & Commissioning.",
    summary:
      "Engineering, Procurement, Installation, Construction & Commissioning for oil and gas production facilities.",
    headline: "Oil & Gas Production Facilities",
    points: [
      "Flow station upgrades",
      "Pressure vessels",
      "Rotating equipment",
      "Flare systems",
      "Gas receiving manifolds & compressors",
      "Gas dehydration & conditioning",
      "Metering systems",
    ],
    closing:
      "A 20-year track record delivering turnkey oil & gas projects, engineered, installed and commissioned with precision.",
    image: images.refinery,
  },
  {
    slug: "pipeline-works",
    name: "Pipeline Works",
    short: "Pipeline construction, maintenance & emergency repairs.",
    summary:
      "Expert high-risk emergency repairs and specialized pipeline interventions delivered under strict safety protocols.",
    headline: "Protecting Critical Energy Infrastructure",
    points: company.pipelineInterventions.map((p) => `${p.name}: ${p.desc}`),
    image: images.pipeline,
  },
  {
    slug: "civil-structural",
    name: "Civil & Structural",
    short: "Equipment foundations, platforms, roads and shelters.",
    summary: "Civil and structural works that give every facility a solid foundation.",
    headline: "Building a Solid Foundation",
    points: [
      "Equipment foundations",
      "Access & maintenance platforms",
      "Roads & drainage",
      "Shelters & enclosures",
      "Structural steelwork",
    ],
    image: images.blueprint,
  },
  {
    slug: "electrical-instrumentation",
    name: "Electrical & Instrumentation",
    short: "MCC, switchboards, DCS upgrades, calibration.",
    summary: "Electrical and instrumentation installation, upgrades and calibration.",
    points: [
      "MCC & switchboard installation",
      "Generator commissioning",
      "Delta-V DCS upgrades",
      "Field instrument calibration",
      "Long-lead & bulk materials",
    ],
    image: images.engineer,
  },
  {
    slug: "fabrication-distribution",
    name: "Fabrication & Distribution",
    short: "Precision fabrication and nationwide distribution.",
    summary:
      "Precision fabrication, and nationwide LPG and CNG distribution through certified tankers and licensed infrastructure.",
    headline: "Powering the Energy Transition",
    points: [
      "Natural gas & LPG processing",
      "Certified tanker fleet & infrastructure",
      "Manpower supply & OEM spares",
      "Turnaround maintenance",
    ],
    closing: "Contributing to Nigeria's energy transition: cleaner, closer, reliable.",
    image: images.fabrication,
  },
  {
    slug: "operations-maintenance",
    name: "Operations & Maintenance",
    short: "Turnaround, manpower, OEM spares, uptime assurance.",
    summary: "Turnaround support, manpower, OEM spares and uptime assurance.",
    points: ["Turnaround maintenance", "Manpower supply", "OEM spares", "Uptime assurance"],
    image: images.plant,
  },
];

export const serviceHref = (slug: string) => `/services/${slug}`;

/** Headline numbers. All taken from the company profile. */
export const facts = [
  { value: 20, suffix: "+", label: "Years of founding-team experience" },
  { value: 6, suffix: "", label: "Core service lines" },
  { value: 6, suffix: "", label: "Specialized pipeline interventions" },
  { value: 100, suffix: "%", label: "Nigerian-owned" },
];

export const OG_IMAGE = "/og-image.jpg";

export function pageHead(title: string, description: string, path: string) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const full = `${title} | ${company.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${SITE_URL}${OG_IMAGE}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}${OG_IMAGE}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
