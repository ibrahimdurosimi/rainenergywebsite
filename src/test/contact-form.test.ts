import { describe, expect, it } from "vitest";
import { buildEmail, enquirySchema } from "@/lib/contact";

const valid = {
  kind: "quote" as const,
  name: "Ada Okafor",
  company: "Delta Gas Ltd",
  email: "ada@deltagas.ng",
  phone: "08012345678",
  service: "Pipeline Works",
  location: "Warri",
  start: "",
  details: "We need a hot tap on a 12 inch line.",
};

describe("contact form validation", () => {
  it("accepts a complete enquiry", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a bad email and a missing message", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "nope" }).success).toBe(false);
    expect(enquirySchema.safeParse({ ...valid, details: "hi" }).success).toBe(false);
  });

  it("escapes HTML in the email body", () => {
    const parsed = enquirySchema.parse({
      ...valid,
      details: "<script>alert(1)</script> hello there",
    });
    const { html, text } = buildEmail(parsed);
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(text).toContain("Pipeline Works");
  });
});
