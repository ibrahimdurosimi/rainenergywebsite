import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  MessageCircle,
  Linkedin,
  Facebook,
  DraftingCompass,
  PackageSearch,
  Wrench,
  HardHat,
  Gauge,
  Flame,
  CheckCircle2,
  Users,
  Clock,
  Layers,
  Leaf,
  Award,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, projects, news, stats, images, company } from "@/data/content";

export const iconMap = {
  engineering: DraftingCompass,
  procurement: PackageSearch,
  fabrication: Wrench,
  construction: HardHat,
  commissioning: Gauge,
  gas: Flame,
};

export function RELogoMark({
  className = "w-9 h-9",
  color = "#FFFFFF",
  accentColor = "#C6A15B",
}: {
  className?: string;
  color?: string;
  accentColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* R Stem & Upper Loop */}
      <path
        d="M16 16H48C59 16 67 24 67 35C67 44.5 60.5 52.5 50.5 54L68 84H52L36 56H28V84H16V16ZM28 28V44H47C52 44 55 40.5 55 36C55 31.5 52 28 47 28H28Z"
        fill={color}
      />
      {/* Dynamic interlocking E arms & lower diagonal matching R leg angle */}
      <path
        d="M60 20H86V30H60V20ZM56 40H84V50H56V40ZM50 63L63 84H77L64 63H50Z"
        fill={accentColor}
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <a href="/" className="brand" aria-label="Rain Energy Limited Home">
      <RELogoMark className="w-10 h-10" color="#FFFFFF" accentColor="#C6A15B" />
      <div className="brand-titles">
        <span className="brand-name">RAIN</span>
        <span className="brand-sub">ENERGY LIMITED</span>
      </div>
    </a>
  );
}
const nav: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];
export function QuoteButton({ outline = false }: { outline?: boolean }) {
  return (
    <Button asChild variant={outline ? "lightOutline" : "gold"}>
      <a href="/contact#quote">
        Request a quote <ArrowUpRight />
      </a>
    </Button>
  );
}
export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [ribbon, setRibbon] = useState(true);
  const [menu, setMenu] = useState(false);
  const active = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path ||
        (path === "/services" && pathname === "/service") ||
        (path === "/projects" && pathname === "/project") ||
        (path === "/news" && pathname === "/article");
  useEffect(() => {
    if (!menu) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", key);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = previous;
    };
  }, [menu]);
  return (
    <>
      {ribbon && (
        <div className="demo-ribbon">
          <strong>Demo build by SMEStudio.</strong> Project names, figures, team and certificates
          shown are samples for illustration.
          <Button
            className="demo-close"
            variant="ghost"
            size="icon"
            aria-label="Dismiss demo notice"
            onClick={() => setRibbon(false)}
          >
            <X size={12} />
          </Button>
        </div>
      )}
      <div className="utility">
        <div className="container">
          <div className="utility-left">
            <a href="tel:+2348057699215">
              <Phone />
              080 5769 9215
            </a>
            <a href="mailto:info@rainenergy.ng">
              <Mail />
              info@rainenergy.ng
            </a>
            <span>
              <MapPin />
              Chevy View Estate, Lekki, Lagos
            </span>
          </div>
          <div className="utility-right">
            Indigenous Excellence in Oil & Gas • 100% Nigerian-Owned • 20+ Years Founder Experience
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Wordmark />
          <nav aria-label="Main navigation" className="desktop-nav">
            {nav.map(([label, path]) =>
              path === "/services" ? (
                <div className="nav-dropdown" key={path}>
                  <a href={path} className={`nav-link ${active(path) ? "active" : ""}`}>
                    Services
                    <ChevronDown />
                  </a>
                  <div className="dropdown-panel">
                    {services.map((s) => (
                      <a key={s.slug} href={`/service?s=${s.slug}`}>
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={path}
                  className={`nav-link ${active(path) ? "active" : ""}`}
                  href={path}
                  aria-current={active(path) ? "page" : undefined}
                >
                  {label}
                </a>
              ),
            )}
          </nav>
          <div className="header-cta">
            <QuoteButton />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="menu-button"
            aria-label="Open navigation"
            onClick={() => setMenu(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>
      {menu && (
        <>
          <div className="drawer-backdrop" onClick={() => setMenu(false)} />
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Button
              variant="ghost"
              size="icon"
              className="drawer-close"
              aria-label="Close navigation"
              onClick={() => setMenu(false)}
            >
              <X />
            </Button>
            <Wordmark />
            {nav.map(([label, path]) => (
              <a key={path} href={path} className={active(path) ? "active" : ""}>
                {label}
              </a>
            ))}
            <QuoteButton />
          </nav>
        </>
      )}
      <main>{children}</main>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>
              Have a project in mind?
              <br />
              Talk to our engineers.
            </h2>
            <p>From an initial idea to a fully operational facility, we’re ready.</p>
          </div>
          <Button asChild variant="navyOutline">
            <a href="/contact#quote">
              Request a quote
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Wordmark />
              <p>
                Rain Energy Ltd is a fully indigenous Nigerian oil and gas servicing company. 100%
                Nigerian-owned and powered by skilled indigenous professionals with 20+ years of
                founding-team experience across the entire energy value chain.
              </p>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
                  <X />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                {nav
                  .filter((n) => n[1] !== "/")
                  .map(([label, path]) => (
                    <li key={path}>
                      <a href={path}>{label}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3>Our services</h3>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <a href={`/service?s=${s.slug}`}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Get in touch</h3>
              <ul>
                <li>No. 1 Oba Sijuade Okunade Crescent,</li>
                <li>Chevy View Estate, Lekki, Lagos</li>
                <li>
                  <a href="tel:+2348057699215">080 5769 9215</a>
                </li>
                <li>
                  <a href="tel:+2348037414562">080 3741 4562</a>
                </li>
                <li>
                  <a href="mailto:info@rainenergy.ng">info@rainenergy.ng</a>
                </li>
                <li>Monday – Friday, 8am – 5pm</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Rain Energy Limited. All rights reserved.</span>
            <span>Indigenous Excellence in Oil & Gas Services • West Africa</span>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/2348057699215"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Rain Energy on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
    </>
  );
}
export function PageHero({
  title,
  description,
  category,
  image = images.plant,
}: {
  title: string;
  description?: string;
  category?: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <img
        src={image}
        width={1920}
        height={1024}
        className="hero-photo"
        alt="Rain Energy industrial engineering infrastructure"
      />
      <div className="container reveal">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <ChevronRight />
          {category && (
            <>
              <a href={`/${category.toLowerCase()}`}>{category}</a>
              <ChevronRight />
            </>
          )}
          <span>{title}</span>
        </div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  link,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {href ? (
        <a href={href} className="text-link">
          {link}
          <ArrowUpRight />
        </a>
      ) : description ? (
        <p>{description}</p>
      ) : null}
    </div>
  );
}
export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap];
        return (
          <a className="service-card" href={`/service?s=${s.slug}`} key={s.slug}>
            <Icon className="service-icon" strokeWidth={1.4} />
            <span className="card-number">0{i + 1}</span>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <span className="text-link">
              Learn more
              <ArrowUpRight />
            </span>
          </a>
        );
      })}
    </div>
  );
}
export function ProjectCards({ items = projects }: { items?: typeof projects }) {
  return (
    <div className="project-grid">
      {items.map((p) => (
        <a href={`/project?p=${p.slug}`} className="project-card" key={p.slug}>
          <div className="project-image">
            <img src={p.image} alt={p.title} width={1536} height={1024} loading="lazy" />
            <span className="sample-tag">Sample project</span>
          </div>
          <div className="card-body">
            <div className="category">{services.find((s) => s.slug === p.service)?.name}</div>
            <h3>{p.title}</h3>
            <div className="card-bottom">
              <span>
                <MapPin />
                {p.location} · {p.year}
              </span>
              <ArrowUpRight />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
export function NewsCards({ items = news }: { items?: typeof news }) {
  return (
    <div className="news-grid">
      {items.map((n) => (
        <a href={`/article?n=${n.slug}`} className="news-card" key={n.slug}>
          <img src={n.image} alt={n.title} width={1536} height={1024} loading="lazy" />
          <div className="card-body">
            <div className="date">
              {n.date}
              <span className="sample-tag">Sample</span>
            </div>
            <h3>{n.title}</h3>
            <p>{n.summary}</p>
            <span className="text-link">
              Read article
              <ArrowUpRight />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
export function Stats() {
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const el = document.getElementById("delivery-stats");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate]);
  return (
    <section className="stats" id="delivery-stats" aria-label="Sample company figures">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>
              {Math.round(s.value * progress)}
              <span>{s.suffix}</span>
            </strong>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export const why = [
  {
    icon: Users,
    title: "Indigenous expertise",
    text: "Local knowledge. A skilled, 100% Nigerian workforce.",
  },
  {
    icon: ShieldCheck,
    title: "Safety in every phase",
    text: "People, assets and the environment come first.",
  },
  {
    icon: Layers,
    title: "End-to-end delivery",
    text: "One partner from design through to commissioning.",
  },
  {
    icon: Clock,
    title: "Responsive execution",
    text: "Clear communication and a focus on on-time delivery.",
  },
];
export function NotFound({
  kind = "page",
  href = "/",
  label = "Back to home",
}: {
  kind?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Layout>
      <section className="not-found container">
        <strong>404</strong>
        <h1>This {kind} couldn’t be found.</h1>
        <p>The link may be incomplete, or the {kind} is no longer available.</p>
        <Button asChild variant="gold">
          <a href={href}>
            {label}
            <ArrowRight />
          </a>
        </Button>
      </section>
    </Layout>
  );
}
export function ComplianceGrid() {
  return (
    <div className="compliance-grid">
      {company.compliance.map((c) => (
        <div className="compliance-card" key={c.code}>
          <div>
            <div className="compliance-badge">{c.code}</div>
            <div className="compliance-val">{c.value}</div>
          </div>
          <div className="compliance-desc">
            <strong className="text-navy">{c.title}</strong>
            <div>{c.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HseFrameworkGrid() {
  return (
    <div className="hse-framework-grid">
      {company.hseFramework.map((item) => (
        <div className="hse-framework-card" key={item.code}>
          <span className="hse-step-pill">{item.code}</span>
          <h4 className="hse-step-title">{item.title}</h4>
          <p className="hse-step-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Layers,
  Leaf,
  Award,
  FileCheck2,
  Phone,
  Mail,
  MapPin,
  company,
};
