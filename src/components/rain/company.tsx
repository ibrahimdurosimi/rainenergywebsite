import { useState } from "react";
import { Button } from "@/components/ui/button";
import { images, team, company } from "@/data/content";
import {
  Layout,
  PageHero,
  SectionHeading,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Leaf,
  FileCheck2,
  ArrowUpRight,
  ComplianceGrid,
  HseFrameworkGrid,
} from "./shared";
import {
  AlertTriangle,
  HardHat,
  ClipboardCheck,
  RefreshCw,
  Download,
  Building2,
  Briefcase,
  Sparkles,
} from "lucide-react";

export function AboutPage() {
  return (
    <Layout>
      <PageHero
        title="Indigenous Excellence in Oil & Gas Services"
        description="Bridging decades of expertise with the future of energy. 100% Nigerian-owned and operated."
        image={images.engineer}
      />

      {/* Corporate Overview Split */}
      <section className="section">
        <div className="container split">
          <div className="prose">
            <div className="eyebrow">Who We Are</div>
            <h2>
              New company.
              <br />
              20+ years founder expertise.
            </h2>
            <p>
              Rain Energy Ltd is a fully indigenous Nigerian oil and gas servicing company. It is
              100% Nigerian-owned and powered by skilled indigenous professionals.
            </p>
            <p>
              A newly established company built on 20+ years of founding-team experience, delivering
              proven success and operational excellence across the entire energy value chain. We
              provide end-to-end solutions from turnkey EPIC&C to high-risk pipeline maintenance and
              nationwide LPG / CNG distribution.
            </p>

            <div className="facts">
              <h3>Corporate Credentials</h3>
              <dl>
                <div>
                  <dt>Company Name</dt>
                  <dd>Rain Energy Limited</dd>
                </div>
                <div>
                  <dt>Headquarters</dt>
                  <dd>Chevy View Estate, Lekki, Lagos</dd>
                </div>
                <div>
                  <dt>Ownership</dt>
                  <dd>100% Nigerian-Owned</dd>
                </div>
                <div>
                  <dt>Founding Experience</dt>
                  <dd>20+ Years Industry Track Record</dd>
                </div>
                <div>
                  <dt>Workforce</dt>
                  <dd>100% Indigenous Technical Professionals</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src={images.pipeline}
            alt="Rain Energy engineers on pipeline site in Nigeria"
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>
      </section>

      {/* Vision & Mission Band */}
      <section className="section dark-band">
        <div className="container split">
          <div>
            <div className="eyebrow">Our Vision</div>
            <h2>
              Pioneering sustainable
              <br />
              local energy solutions.
            </h2>
            <p className="mt-4 text-base leading-relaxed">{company.vision}</p>
            <p className="mt-3 text-sm opacity-80">{company.corporateVision}</p>
          </div>
          <div>
            <div className="eyebrow">Our Mission</div>
            <h2>
              Flawless execution.
              <br />
              Uncompromising safety.
            </h2>
            <p className="mt-4 text-base leading-relaxed">{company.mission}</p>
          </div>
        </div>
      </section>

      {/* Brand Values (from Brand Guidelines 2026) */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="A foundation built for trust and visibility."
            description="Our four core values guide every interaction, engineering review, and field execution."
          />
          <div className="values-grid">
            {company.pillars.map((pillar) => (
              <div className="value-card" key={pillar.title}>
                <Award />
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-xl border border-border flex flex-wrap items-center justify-between gap-4">
            <div className="font-semibold text-navy text-sm">Core Cultural Pillars:</div>
            <div className="flex flex-wrap gap-3">
              {company.commitments.map((c) => (
                <span
                  key={c}
                  className="px-4 py-1.5 rounded-full bg-sand-gold/15 text-navy font-bold text-xs uppercase tracking-wider border border-sand-gold/30"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Our leadership"
            title="People behind the delivery."
            description="Our multidisciplinary management team brings together two decades of upstream exploration, facility engineering, and gas logistics experience."
          />
          <div className="values-grid">
            {team.map((t) => (
              <div className="value-card" key={t.role}>
                <div className="team-avatar">{t.initials}</div>
                <h3>{t.role}</h3>
                <p className="text-xs text-muted-ink">Rain Energy Executive Leadership</p>
                <span className="sample-tag mt-2">Executive</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function HsePage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 4000);
  };

  return (
    <Layout>
      <PageHero
        title="Safety is Non-Negotiable."
        description="Health, Safety and Environment underpin every decision at Rain Energy. We embed compliance and vigilance into every project."
        image={images.engineer}
      />

      {/* 5-Step HSE Framework */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CASHES Framework"
            title="Five pillars of safe project delivery."
            description="Every assignment adheres to the five core standards defined in our corporate HSE policy."
          />
          <HseFrameworkGrid />
        </div>
      </section>

      {/* Illustrative Performance */}
      <section className="section dark-band">
        <div className="container">
          <div className="eyebrow">Safety performance</div>
          <h2>Zero incidents. Absolute accountability.</h2>
          <div className="safety-stats mt-6">
            {[
              ["0", "Lost-time injuries (LTI) target"],
              ["250,000+", "Safe man-hours milestone"],
              ["100%", "Toolbox talk & permit-to-work compliance"],
            ].map(([v, l]) => (
              <div className="safety-stat" key={l}>
                <strong>{v}</strong>
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Assurance */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Statutory Assurance"
            title="Corporate Certifications & Registrations."
            description="Rain Energy maintains up-to-date compliance across Nigerian tax, pension, labor, and procurement agencies."
          />
          <ComplianceGrid />

          <div className="download-row mt-8">
            <Button asChild variant="navyOutline">
              <a
                href="/assets/aistudio/Rain_Energy_Company_Profile_141b3416.pdf"
                download="Rain_Energy_Company_Profile_2026.pdf"
                onClick={() => showToast("Downloading Rain Energy Company Profile PDF...")}
              >
                <Download />
                Company Profile (PDF)
              </a>
            </Button>
            <Button asChild variant="navyOutline">
              <a
                href="/assets/aistudio/Rain_Energy_Limited__Brand_Guidelines_2026_5ecc235b.pdf"
                download="Rain_Energy_Brand_Guidelines_2026.pdf"
                onClick={() => showToast("Downloading Rain Energy Brand Guidelines PDF...")}
              >
                <Download />
                Brand Guidelines 2026 (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </Layout>
  );
}
