import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Contact / quote form delivery.
 *
 * Cloudflare settings (Workers > your worker > Settings > Variables and Secrets):
 *   RESEND_API_KEY  (secret, required)  API key from resend.com
 *   CONTACT_FROM    (text, required)    e.g. "Rain Energy Website <website@rainenergy.ng>"
 *                                        the sending domain must be verified in Resend
 *   CONTACT_TO      (text, optional)    defaults to info@rainenergy.ng
 */

const clean = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    // eslint-disable-next-line no-control-regex
    .transform((v) => v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, ""));

export const enquirySchema = z.object({
  kind: z.enum(["quote", "general", "vendor"]),
  name: clean(120).pipe(z.string().min(2, "Please enter your name")),
  company: clean(160).pipe(z.string().min(2, "Please enter your company")),
  email: clean(200).pipe(z.string().email("Please enter a valid email address")),
  phone: clean(40).pipe(z.string().min(6, "Please enter a phone number")),
  service: clean(120).optional().default(""),
  location: clean(160).optional().default(""),
  start: clean(40).optional().default(""),
  details: clean(5000).pipe(z.string().min(10, "Please tell us a little more")),
  // Spam traps: `website` is a hidden field humans never fill; `openedAt` is when the form loaded.
  website: z.string().max(200).optional().default(""),
  openedAt: z.number().optional().default(0),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryResult = { ok: true } | { ok: false; message: string };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const KIND_LABEL: Record<Enquiry["kind"], string> = {
  quote: "Quote request",
  general: "General enquiry",
  vendor: "Vendor / supplier enquiry",
};

export function buildEmail(e: Enquiry) {
  const rows: [string, string][] = [
    ["Type", KIND_LABEL[e.kind]],
    ["Name", e.name],
    ["Company", e.company],
    ["Email", e.email],
    ["Phone", e.phone],
  ];
  if (e.service) rows.push(["Service", e.service]);
  if (e.location) rows.push(["Project location", e.location]);
  if (e.start) rows.push(["Expected start", e.start]);
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Message:", e.details].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#172b3a;max-width:620px">
<h2 style="color:#0b1f33;margin:0 0 12px">${esc(KIND_LABEL[e.kind])} from rainenergy.ng</h2>
<table style="border-collapse:collapse;width:100%">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#557a95;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`,
    )
    .join("")}</table>
<p style="margin:16px 0 4px;color:#557a95">Message</p>
<p style="white-space:pre-wrap;margin:0;padding:12px;background:#f2f7fa;border-left:3px solid #c6a15b">${esc(e.details)}</p>
</div>`;
  const subject = `[${KIND_LABEL[e.kind]}] ${e.name}, ${e.company}`.slice(0, 180);
  return { subject, text, html };
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }): Promise<EnquiryResult> => {
    // Bots: a filled honeypot or an instant submit gets a quiet success and no email.
    const tooFast = data.openedAt > 0 && Date.now() - data.openedAt < 2500;
    if (data.website || tooFast) return { ok: true };

    const key = process.env["RESEND_API_KEY"];
    const from = process.env["CONTACT_FROM"];
    const to = process.env["CONTACT_TO"] || "info@rainenergy.ng";
    if (!key || !from) {
      console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM.");
      return {
        ok: false,
        message:
          "Our online form is temporarily unavailable. Please email info@rainenergy.ng or call 080 5769 9215.",
      };
    }

    const { subject, text, html } = buildEmail(data);
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], reply_to: data.email, subject, text, html }),
      });
      if (!res.ok) {
        console.error("Resend rejected the message", res.status, await res.text());
        return {
          ok: false,
          message:
            "We couldn't send your message just now. Please try again, or email info@rainenergy.ng.",
        };
      }
      return { ok: true };
    } catch (err) {
      console.error("Resend request failed", err);
      return {
        ok: false,
        message:
          "We couldn't send your message just now. Please try again, or email info@rainenergy.ng.",
      };
    }
  });
