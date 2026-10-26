import { Button } from "@/components/ui/button";
import { images, projects, news, sectors } from "@/data/content";
import {
  Layout,
  SectionHeading,
  ServicesGrid,
  ProjectCards,
  NewsCards,
  Stats,
  QuoteButton,
  why,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
} from "./shared";
import { ArrowDown } from "lucide-react";
export function HomePage() {
  return (
    <Layout>
      <section className="home-hero">
        <img
          className="hero-photo"
          src={images.plant}
          alt="Gas processing infrastructure and pipelines at sunset"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="container hero-content reveal">
          <div className="eyebrow">Engineering · Procurement · Construction</div>
          <h1>
            Engineering, procurement
            <br />
            and construction for
            <br />
            <span>Nigeria’s oil and gas sector.</span>
          </h1>
          <p>
            Rain Energy is an indigenous company with a 100% Nigerian workforce, delivering upstream
            and downstream projects from design through to commissioning.
          </p>
          <div className="hero-actions">
            <QuoteButton />
            <Button asChild variant="lightOutline">
              <a href="/projects">
                See our projects
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>
            <ShieldCheck />
            Safety-led. Quality-driven. Locally delivered.
          </span>
          <span className="scroll-label">
            Explore our capabilities
            <ArrowDown />
          </span>
        </div>
      </section>
      <Stats />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our capabilities"
            title="One partner. Every phase."
            description="Integrated expertise across the project lifecycle. Built to deliver value where it matters most."
          />
          <ServicesGrid />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container split">
          <img
            src={images.engineer}
            alt="Nigerian engineer inspecting gas plant piping"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div>
            <div className="eyebrow">Why Rain Energy</div>
            <h2>
              Local expertise.
              <br />
              Lasting impact.
            </h2>
            <p>
              We bring together technical excellence and a deep understanding of Nigeria’s energy
              landscape to deliver projects with confidence.
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
            <a href="/about" className="text-link" style={undefined}>
              More about Rain Energy
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our track record"
            title="Expertise put to work."
            href="/projects"
            link="View all projects"
          />
          <ProjectCards items={projects.slice(0, 3)} />
        </div>
      </section>
      <section className="dark-band">
        <div className="container hse-inner">
          <ShieldCheck strokeWidth={1.2} />
          <div>
            <div className="eyebrow">HSE & quality</div>
            <h2>Safety is built into every phase of our work.</h2>
            <p>
              From the first risk assessment to the final handover, we protect our people, our
              partners and the environment. No compromises.
            </p>
          </div>
          <Button asChild variant="lightOutline">
            <a href="/hse-quality">
              Our commitment
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Where we work</div>
          <h2>Sectors we serve.</h2>
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <a href={`/projects?sector=${encodeURIComponent(s)}`} className="sector" key={s}>
                <span>0{i + 1}</span>
                <h3>{s}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="News & insights"
            title="Moving energy forward."
            href="/news"
            link="All news & updates"
          />
          <NewsCards items={news.slice(0, 3)} />
        </div>
      </section>
    </Layout>
  );
}
