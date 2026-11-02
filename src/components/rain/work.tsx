import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, images } from "@/data/content";
import {
  Layout,
  PageHero,
  Reveal,
  SectionHeading,
  ServicesGrid,
  NotFound,
  QuoteButton,
  iconMap,
} from "./shared";
import { PipelineSchematic } from "./interactive";

export function ServicesPage() {
  return (
    <Layout>
      <PageHero
        title="Comprehensive solutions for the energy sector."
        description="Six core services delivered by one indigenous team, from EPIC&C and pipeline works to LPG / CNG distribution."
        image={images.refinery}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Our core services."
            description="End-to-end solutions across the oil, gas and energy value chain."
          />
          <ServicesGrid />
        </div>
      </section>
      <section className="section dark-band blueprint">
        <div className="container">
          <SectionHeading
            eyebrow="Pipeline services"
            title="Protecting critical energy infrastructure."
            description="Six specialized interventions, delivered under strict safety protocols."
          />
          <Reveal>
            <PipelineSchematic />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

export function ServicePage({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound kind="service" to="/services" label="Explore all services" />;
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <Layout>
      <PageHero
        title={service.name}
        description={service.summary}
        crumbs={[{ label: "Services", to: "/services" }]}
        image={service.image}
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            {service.headline && <div className="eyebrow">{service.headline}</div>}
            <h2>{service.short}</h2>
            <p>{service.summary}</p>
            <ul className="scope-list">
              {service.points.map((p) => (
                <li key={p}>
                  <CheckCircle2 />
                  {p}
                </li>
              ))}
            </ul>
            {service.closing && <p className="lead-gold">{service.closing}</p>}
            <div className="hero-actions">
              <QuoteButton />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={service.image}
              alt={`${service.name} at Rain Energy`}
              width={1536}
              height={1024}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {service.slug === "pipeline-works" && (
        <section className="section dark-band blueprint">
          <div className="container">
            <SectionHeading
              eyebrow="Specialized interventions"
              title="Six ways we protect the line."
            />
            <Reveal>
              <PipelineSchematic />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="More from Rain Energy" title="Explore our other services." />
          <div className="other-services">
            {others.map((s) => {
              const OtherIcon = iconMap[s.slug];
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                  {OtherIcon && <OtherIcon strokeWidth={1.4} />}
                  <span>{s.name}</span>
                  <ArrowUpRight />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
