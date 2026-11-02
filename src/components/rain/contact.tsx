import { useEffect, useRef, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, services } from "@/data/content";
import { sendEnquiry } from "@/lib/contact";
import { Layout, PageHero, Reveal, Phone, Mail, MapPin, ArrowUpRight } from "./shared";

type Tab = "quote" | "general";

export function ContactPage() {
  const [tab, setTab] = useState<Tab>("quote");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const openedAt = useRef(0);
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    const v = new FormData(f);
    const get = (k: string) => String(v.get(k) ?? "");
    const kind = tab === "quote" ? "quote" : get("enquiry") === "vendor" ? "vendor" : "general";
    setStatus("sending");
    setError(null);
    try {
      const result = await sendEnquiry({
        data: {
          kind,
          name: get("name"),
          company: get("company"),
          email: get("email"),
          phone: get("phone"),
          service: get("service"),
          location: get("location"),
          start: get("start"),
          details: get("details"),
          website: get("website"),
          openedAt: openedAt.current,
        },
      });
      if (result.ok) {
        setStatus("sent");
      } else {
        setStatus("idle");
        setError(result.message);
      }
    } catch {
      setStatus("idle");
      setError(
        "We couldn't send your message just now. Please check your details and try again, or email info@rainenergy.ng.",
      );
    }
  };

  const again = () => {
    setStatus("idle");
    setError(null);
    openedAt.current = Date.now();
  };

  return (
    <Layout>
      <PageHero
        title="Let's build the future of energy together."
        description="20 years of collective experience. One indigenous team ready to deliver."
      />
      <section className="section" id="quote">
        <div className="container contact-grid">
          <Reveal>
            <div className="eyebrow">Get in touch</div>
            <h2>
              A conversation is
              <br />
              where it starts.
            </h2>
            <p className="scope-heading">
              Tell us about your project, tender or supply requirement and our team will come back
              to you.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <Phone />
                <div>
                  <h3>Phone</h3>
                  <div className="space-y-1">
                    {company.phones.map((p) => (
                      <div key={p.tel}>
                        <a href={`tel:${p.tel}`}>{p.display}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <Mail />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
              <div className="contact-detail">
                <MapPin />
                <div>
                  <h3>Head office</h3>
                  <span>
                    No. 1 Oba Sijuade Okunade Crescent,
                    <br />
                    Chevy View Estate, Lekki, Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
            <iframe
              title="Rain Energy Limited head office, Lekki, Lagos"
              src="https://maps.google.com/maps?q=Chevy+View+Estate+Lekki+Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="form-tabs" role="tablist" aria-label="Enquiry type">
              {(
                [
                  ["quote", "Request a quote"],
                  ["general", "General or vendor enquiry"],
                ] as const
              ).map(([id, label]) => (
                <Button
                  key={id}
                  role="tab"
                  aria-selected={tab === id}
                  variant="ghost"
                  className={`tab ${tab === id ? "selected" : ""}`}
                  onClick={() => {
                    setTab(id);
                    setError(null);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
            {status === "sent" ? (
              <div className="success" role="status">
                <CheckCircle2 />
                <h2>Thank you.</h2>
                <p>Your message has been sent to our team. We'll be in touch shortly.</p>
                <Button variant="navyOutline" onClick={again}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} ref={form} noValidate={false}>
                <div className="form-grid">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  {tab === "quote" ? (
                    <>
                      <div className="field full">
                        <label htmlFor="service">Service required *</label>
                        <select id="service" name="service" required defaultValue="">
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Field label="Project location" name="location" required />
                      <Field label="Expected start date" name="start" type="date" />
                    </>
                  ) : (
                    <div className="field full">
                      <label htmlFor="enquiry">Enquiry type *</label>
                      <select id="enquiry" name="enquiry" defaultValue="general">
                        <option value="general">General enquiry</option>
                        <option value="vendor">Vendor / supplier enquiry</option>
                      </select>
                    </div>
                  )}
                  <div className="field full">
                    <label htmlFor="details">
                      {tab === "quote" ? "Project details" : "Your message"} *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      minLength={10}
                      maxLength={5000}
                      placeholder={
                        tab === "quote"
                          ? "Tell us about your project, scope and requirements…"
                          : "How can we help?"
                      }
                      required
                    />
                  </div>
                  {/* Honeypot: hidden from people, tempting to bots. */}
                  <div className="hp" aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    <AlertCircle />
                    {error}
                  </p>
                )}
                <div className="form-footer">
                  <Button variant="gold" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        Sending
                        <Loader2 className="spin" />
                      </>
                    ) : (
                      <>
                        {tab === "quote" ? "Submit quote request" : "Submit enquiry"}
                        <ArrowUpRight />
                      </>
                    )}
                  </Button>
                  <p className="form-note">* Required fields.</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const auto: Record<string, string> = {
    name: "name",
    email: "email",
    phone: "tel",
    company: "organization",
  };
  return (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input id={name} name={name} type={type} required={required} autoComplete={auto[name]} />
    </div>
  );
}
