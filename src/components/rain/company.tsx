import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, company } from "@/data/content";
import { Layout, PageHero, Reveal, SectionHeading, ComplianceGrid } from "./shared";
import { HseRail, ValuesRow } from "./interactive";

export const COMPANY_PROFILE_PDF = "/downloads/Rain_Energy_Company_Profile_2026.pdf";

export function AboutPage() {
  return (
    <Layout>
      <PageHero
        title="About Rain Energy"
        description={`${company.tagline}. ${company.subtitle}`}
        crumbs={[]}
        image={images.refinery}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="prose">
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

            <div className="facts">
              <h3>At a glance</h3>
              <dl>
                <div>
                  <dt>Company</dt>
                  <dd>{company.name}</dd>
                </div>
                <div>
                  <dt>Established</dt>
                  <dd>{company.established}</dd>
                </div>
                <div>
                  <dt>Ownership</dt>
                  <dd>100% Nigerian-owned</dd>
                </div>
                <div>
                  <dt>Founding team</dt>
                  <dd>20+ years of experience</dd>
                </div>
                <div>
                  <dt>Head office</dt>
                  <dd>Chevy View Estate, Lekki, Lagos</dd>
                </div>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.pipeline}
              alt="Pipeline works in the field"
              width={1536}
              height={1024}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section dark-band blueprint">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Our vision</div>
            <p className="statement">{company.vision}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow">Our mission</div>
            <p className="statement">{company.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="Built on trust and visibility." />
          <ValuesRow />
        </div>
      </section>
    </Layout>
  );
}

export function HsePage() {
  return (
    <Layout>
      <PageHero
        title="Safety is non-negotiable."
        description={company.hseIntro}
        crumbs={[]}
        image={images.engineer}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="HSE policy"
            title="Five commitments on every project."
            description="Every assignment is planned and executed against these five standards."
          />
          <Reveal>
            <HseRail />
          </Reveal>
          <div className="hse-list">
            {company.hseFramework.map((s, i) => (
              <Reveal className="hse-row" key={s.code} delay={i * 50}>
                <span className="hse-step-pill">{s.code}</span>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Compliance & certifications"
            title="A trusted corporate partner."
          />
          <ComplianceGrid />
          <Reveal className="download-row">
            <Button asChild variant="navyOutline">
              <a href={COMPANY_PROFILE_PDF} download="Rain_Energy_Company_Profile_2026.pdf">
                <Download />
                Download the Company Profile (PDF)
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
