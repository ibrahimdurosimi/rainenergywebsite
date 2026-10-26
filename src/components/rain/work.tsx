import { useState } from "react";
import { Button } from "@/components/ui/button";
import { services, projects, sectors, images } from "@/data/content";
import {
  Layout,
  PageHero,
  SectionHeading,
  ServicesGrid,
  ProjectCards,
  NotFound,
  CheckCircle2,
  QuoteButton,
} from "./shared";
export function ServicesPage() {
  return (
    <Layout>
      <PageHero
        title="Integrated capability. Complete delivery."
        description="Six specialist service lines. One connected approach to Nigeria’s upstream and downstream energy projects."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our capabilities"
            title="Expertise for every project phase."
            description="From the first design decision to final handover, our teams work together to turn complex requirements into reliable outcomes."
          />
          <ServicesGrid />
        </div>
      </section>
      <DeliverySteps />
    </Layout>
  );
}
export function DeliverySteps() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading eyebrow="How we deliver" title="Clear steps. Dependable outcomes." />
        <div className="steps">
          {[
            ["Assess", "Understand your objectives, site conditions and technical requirements."],
            ["Plan", "Develop the scope, schedule, resources and risk controls."],
            ["Execute", "Deliver coordinated work with active quality and safety oversight."],
            ["Hand over", "Verify performance and provide complete operational documentation."],
          ].map(([t, p], i) => (
            <div className="step" key={t}>
              <strong>0{i + 1}</strong>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ServicePage({ slug }: { slug?: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound kind="service" href="/services" label="Explore all services" />;
  const related = projects.filter((p) => p.service === service.slug);
  const items =
    related.length >= 2
      ? related.slice(0, 2)
      : [...related, ...projects.filter((p) => p.service !== service.slug)].slice(0, 2);
  return (
    <Layout>
      <PageHero
        title={service.name}
        category="Services"
        description={service.description}
        image={service.image}
      />
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Technical capability</div>
            <h2>
              Expertise designed
              <br />
              around your operation.
            </h2>
            <p>
              {service.description} Our team combines local experience, disciplined planning and
              close coordination to meet the technical, safety and quality requirements of each
              project.
            </p>
            <h3 className="scope-heading">What we do</h3>
            <ul className="scope-list">
              {service.scope.map((s) => (
                <li key={s}>
                  <CheckCircle2 />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={service.image}
            alt={`${service.name} capability at Rain Energy`}
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>
      </section>
      <DeliverySteps />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capability in practice"
            title="Related sample projects."
            href="/projects"
            link="All projects"
          />
          <ProjectCards items={items} />
        </div>
      </section>
    </Layout>
  );
}
export function ProjectsPage({ initialSector = "" }: { initialSector?: string }) {
  const [service, setService] = useState("");
  const [sector, setSector] = useState(sectors.includes(initialSector) ? initialSector : "");
  const filtered = projects.filter(
    (p) => (!service || p.service === service) && (!sector || p.sector === sector),
  );
  return (
    <Layout>
      <PageHero
        title="Delivery you can see."
        description="Explore illustrative projects across Nigeria’s oil and gas value chain. Every project shown is sample content for this demo."
        image={images.pipeline}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our project portfolio" title="From expertise to execution." />
          <div className="filters">
            <div className="filter-label">Service</div>
            <div className="filter-row">
              <Button
                className={`filter ${!service ? "selected" : ""}`}
                variant="ghost"
                onClick={() => setService("")}
              >
                All services
              </Button>
              {services.map((s) => (
                <Button
                  variant="ghost"
                  className={`filter ${service === s.slug ? "selected" : ""}`}
                  key={s.slug}
                  onClick={() => setService(s.slug)}
                >
                  {s.name}
                </Button>
              ))}
            </div>
            <div className="filter-label">Sector</div>
            <div className="filter-row">
              <Button
                className={`filter ${!sector ? "selected" : ""}`}
                variant="ghost"
                onClick={() => setSector("")}
              >
                All sectors
              </Button>
              {sectors.map((s) => (
                <Button
                  variant="ghost"
                  className={`filter ${sector === s ? "selected" : ""}`}
                  key={s}
                  onClick={() => setSector(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
          <p className="result-count" aria-live="polite">
            {filtered.length} sample project{filtered.length === 1 ? "" : "s"}
          </p>
          {filtered.length ? (
            <ProjectCards items={filtered} />
          ) : (
            <div className="empty-state">
              <h3>No projects match these filters.</h3>
              <p>Try another service or sector.</p>
              <Button
                variant="navyOutline"
                onClick={() => {
                  setSector("");
                  setService("");
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
export function ProjectPage({ slug }: { slug?: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound kind="project" href="/projects" label="Explore all projects" />;
  const service = services.find((s) => s.slug === project.service);
  return (
    <Layout>
      <PageHero
        title={project.title}
        category="Projects"
        image={project.image}
        description={`${project.location} · ${project.year} · Sample project`}
      />
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Project overview</div>
            <h2>
              Purposeful engineering.
              <br />
              Practical delivery.
            </h2>
            <p>{project.overview}</p>
            <h3 className="scope-heading">Scope of work</h3>
            <ul className="scope-list">
              {project.scope.map((s) => (
                <li key={s}>
                  <CheckCircle2 />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="facts">
            <span className="sample-tag">Sample project</span>
            <h3 className="scope-heading">Project facts</h3>
            <dl>
              {[
                ["Client", "Confidential client"],
                ["Location", project.location],
                ["Year", project.year],
                ["Duration", `${project.duration} (sample)`],
                ["Services", service?.name || "Integrated delivery"],
                ["Sector", project.sector],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="form-note">
              Project details and photography are illustrative and do not represent verified client
              work.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Project gallery" title="A closer look at our capability." />
          <div className="gallery">
            {[
              project.image,
              images.engineer,
              project.service === "fabrication" ? images.fabrication : images.plant,
            ].map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Illustrative project gallery photograph ${i + 1}`}
                width={1536}
                height={1024}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title="Related sample projects." />
          <ProjectCards items={projects.filter((p) => p.slug !== project.slug).slice(0, 3)} />
        </div>
      </section>
    </Layout>
  );
}
