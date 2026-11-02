import { Link } from "@tanstack/react-router";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, company } from "@/data/content";
import {
  Layout,
  Reveal,
  SectionHeading,
  Stripes,
  QuoteButton,
  ComplianceGrid,
  ArrowUpRight,
} from "./shared";
import { FactsBand, HseRail, PipelineSchematic, ServiceExplorer, ValuesRow } from "./interactive";

export function HomePage() {
  return (
    <Layout>
      <section className="home-hero">
        <img
          className="hero-photo"
          src={images.refinery}
          alt="Oil and gas processing facility at dusk"
          width={2200}
          height={1467}
          fetchPriority="high"
        />
        <Stripes className="stripes-hero" />
        <div className="container hero-content reveal">
          <div className="eyebrow">
            {company.tagline} • Est. {company.established}
          </div>
          <h1>
            <span className="line">Bridging decades</span>
            <span className="line">of expertise with</span>
            <span className="line">
              the <em>future of energy.</em>
            </span>
          </h1>
          <p>
            Rain Energy Ltd is a fully indigenous Nigerian oil and gas servicing company. 100%
            Nigerian-owned, built on 20+ years of founding-team experience. End-to-end solutions
            from EPIC&amp;C to pipeline maintenance and LPG / CNG distribution.
          </p>
          <div className="hero-actions">
            <QuoteButton />
            <Button asChild variant="lightOutline">
              <Link to="/services">
                Explore our services
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>
            <ShieldCheck />
            {company.commitments.join(" • ")}
          </span>
          <span className="scroll-label">
            Explore our capabilities
            <ArrowDown />
          </span>
        </div>
      </section>

      <FactsBand />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Comprehensive solutions for the energy sector."
            description="Six core services, one indigenous team. Select a service to explore what we deliver."
          />
          <Reveal>
            <ServiceExplorer />
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split">
          <Reveal>
            <img
              src={images.engineer}
              alt="Engineer reviewing facility specifications"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow">Who we are</div>
            <h2>
              New company.
              <br />
              20 years founder experience.
            </h2>
            {company.whoWeAre.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="lead-gold">{company.endToEnd}</p>
            <Link to="/about" className="text-link">
              Read our full company story
              <ArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section dark-band blueprint">
        <div className="container">
          <SectionHeading
            eyebrow="Pipeline services"
            title="Protecting critical energy infrastructure."
            description="Expert high-risk emergency repairs and specialized pipeline interventions delivered under strict safety protocols."
          />
          <Reveal>
            <PipelineSchematic />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="HSE policy"
            title="Safety is non-negotiable."
            description={company.hseIntro}
          />
          <Reveal>
            <HseRail />
          </Reveal>
          <div className="more-link">
            <Link to="/hse-quality" className="text-link">
              Our HSE policy and compliance
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="Built on trust and visibility." />
          <ValuesRow />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Compliance & certifications"
            title="A trusted corporate partner."
          />
          <ComplianceGrid />
        </div>
      </section>
    </Layout>
  );
}
