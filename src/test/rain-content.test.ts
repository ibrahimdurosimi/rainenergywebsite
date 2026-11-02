import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { company, facts, pageHead, serviceHref, services, SITE_URL } from "@/data/content";

describe("Rain Energy content matches the 2026 Company Profile", () => {
  it("has the six core services in profile order", () => {
    expect(services.map((s) => s.name)).toEqual([
      "EPIC&C",
      "Pipeline Works",
      "Civil & Structural",
      "Electrical & Instrumentation",
      "Fabrication & Distribution",
      "Operations & Maintenance",
    ]);
  });

  it("lists the six specialized pipeline interventions", () => {
    expect(company.pipelineInterventions.map((p) => p.name)).toEqual([
      "Hot Tapping",
      "Stopple",
      "Mechanical Clamps",
      "Cofferdams",
      "HDD",
      "Welding & NDT",
    ]);
  });

  it("has the five HSE commitments", () => {
    expect(company.hseFramework.map((h) => h.code)).toEqual([
      "COMPLY",
      "PLAN",
      "ANALYZE",
      "CERTIFY",
      "PROTECT",
    ]);
  });

  it("shows CAC and statutory compliance but never the TIN", () => {
    const codes = company.compliance.map((c) => c.code);
    expect(codes).toEqual(["CAC", "PENCOM", "NSITF", "ITF", "BPP"]);
    expect(company.compliance[0]?.value).toBe("RC No. 1992997");
    expect(JSON.stringify(company)).not.toMatch(/31222157|TIN/);
  });

  it("only publishes headline numbers that come from the profile", () => {
    expect(facts.map((f) => [f.value, f.suffix])).toEqual([
      [20, "+"],
      [6, ""],
      [6, ""],
      [100, "%"],
    ]);
  });
});

describe("Launch readiness", () => {
  it("builds absolute canonical and share URLs", () => {
    const head = pageHead("About Rain Energy", "desc", "/about");
    expect(head.links[0]?.href).toBe(`${SITE_URL}/about`);
    expect(JSON.stringify(head.meta)).toContain(`${SITE_URL}/og-image.jpg`);
  });

  it("lists every page in the sitemap", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    for (const path of ["/about", "/services", "/hse-quality", "/contact"]) {
      expect(xml).toContain(`<loc>${SITE_URL}${path}</loc>`);
    }
    for (const s of services) expect(xml).toContain(`${SITE_URL}${serviceHref(s.slug)}`);
  });
});
