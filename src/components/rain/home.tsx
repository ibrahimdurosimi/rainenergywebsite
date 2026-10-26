import { Button } from "@/components/ui/button";
import { images, sectors } from "@/data/content";
import {
  Layout,
  SectionHeading,
  ServicesGrid,
  QuoteButton,
  why,
  ArrowUpRight,
  ShieldCheck,
  company,
} from "./shared";
import { ArrowDown } from "lucide-react";

export function HomePage() {
  return (
    <Layout>
      <section className="home-hero">
        <img
          className="hero-photo"
          src={images.plant}
          alt="Rain Energy gas processing and pipeline infrastructure"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="container hero-content reveal">
          <div className="eyebrow">
            {company.tagline} • {company.experienceHeadline}
          </div>
          <h1>
            Bridging decades of expertise
            <br />
            with the <span>future of energy.</span>
          </h1>
          <p>
            Rain Energy Ltd is a fully indigenous Nigerian oil and gas servicing company. 100%
            Nigerian-owned and powered by skilled indigenous professionals, delivering proven
            success from EPIC&C to high-risk pipeline interventions and LPG/CNG distribution.
          </p>
          <div className="hero-actions">
            <QuoteButton />
            <Button asChild variant="lightOutline">
              <a href="/services">
                Explore our services
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>
            <ShieldCheck />
            Safety-First Culture • Expert Leadership • Community Impact
          </span>
          <span className="scroll-label">
            Explore our capabilities
            <ArrowDown />
          </span>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our capabilities"
            title="Comprehensive solutions for the energy sector."
            description="End-to-end execution across the entire energy value chain — from front-end engineering design to specialized field installations and nationwide gas distribution."
          />
          <ServicesGrid />
        </div>
      </section>

      {/* Why Rain Energy Split */}
      <section className="section section-muted">
        <div className="container split">
          <img
            src={images.engineer}
            alt="Nigerian engineer reviewing energy facility specifications"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>
              New company.
              <br />
              20+ years founder expertise.
            </h2>
            <p>
              Rain Energy Ltd brings together over two decades of technical leadership in upstream
              and downstream operations, offering unmatched reliability and flawless execution under
              strict international standards.
            </p>
            <div className="reasons">
              {why.map((r) => (
                <div className="reason" key={r.title}>
                  <r.icon />
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/about" className="text-link">
              Read our full company story
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Where we work</div>
          <h2>Sectors we serve.</h2>
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <a href="/services" className="sector" key={s}>
                <span>0{i + 1}</span>
                <h3>{s}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
