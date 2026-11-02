import logo from "@/assets/logo.png";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
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
  MessageCircle,
  DraftingCompass,
  Cable,
  BrickWall,
  Zap,
  Flame,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, serviceHref, images, company, primaryPhone } from "@/data/content";

export const iconMap: Record<string, typeof Wrench> = {
  epicc: DraftingCompass,
  "pipeline-works": Cable,
  "civil-structural": BrickWall,
  "electrical-instrumentation": Zap,
  "fabrication-distribution": Flame,
  "operations-maintenance": Wrench,
};

/* ------------------------------------------------------------------ */
/* Motion helpers                                                      */
/* ------------------------------------------------------------------ */

/** Adds the "in" class once the element scrolls into view. Content stays visible without JS. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref as never} className={`rv ${shown ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** Counts up to `value` the first time it is seen. Server render and no-JS show the final number. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState<number | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1400, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 4))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        setN(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return (
    <span ref={ref} className="count">
      {n ?? value}
      <span>{suffix}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Brand                                                               */
/* ------------------------------------------------------------------ */

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`brand ${className}`} aria-label="Rain Energy Limited home">
      <img src={logo} alt="Rain Energy Limited" width={1400} height={199} />
    </Link>
  );
}

/** The brand's diagonal gold + steel-blue stripes. Purely decorative. */
export function Stripes({ className = "" }: { className?: string }) {
  return (
    <div className={`stripes ${className}`} aria-hidden="true">
      <i />
      <i />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "HSE & Compliance", to: "/hse-quality" },
  { label: "Contact", to: "/contact" },
] as const;

export function QuoteButton({ outline = false }: { outline?: boolean }) {
  return (
    <Button asChild variant={outline ? "lightOutline" : "gold"}>
      <Link to="/contact" hash="quote">
        Request a quote <ArrowUpRight />
      </Link>
    </Button>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="utility">
        <div className="container">
          <div className="utility-left">
            <a href={`tel:${primaryPhone.tel}`}>
              <Phone />
              {primaryPhone.display}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail />
              {company.email}
            </a>
            <span>
              <MapPin />
              Chevy View Estate, Lekki, Lagos
            </span>
          </div>
          <div className="utility-right">
            {company.tagline} • 100% Nigerian-Owned • {company.experienceHeadline}
          </div>
        </div>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Wordmark />
          <nav aria-label="Main navigation" className="desktop-nav">
            {nav.map((item) =>
              item.to === "/services" ? (
                <div className="nav-dropdown" key={item.to}>
                  <Link
                    to="/services"
                    className={`nav-link ${active(item.to) ? "active" : ""}`}
                    aria-current={active(item.to) ? "page" : undefined}
                  >
                    Services
                    <ChevronDown />
                  </Link>
                  <div className="dropdown-panel">
                    {services.map((s) => (
                      <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link ${active(item.to) ? "active" : ""}`}
                  aria-current={active(item.to) ? "page" : undefined}
                >
                  {item.label}
                </Link>
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
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className={active(item.to) ? "active" : ""}>
                {item.label}
              </Link>
            ))}
            <QuoteButton />
          </nav>
        </>
      )}
      <main id="main">{children}</main>
      <section className="cta-band">
        <Stripes className="stripes-cta" />
        <div className="container cta-inner">
          <div>
            <h2>Let's build the future of energy together.</h2>
            <p>20 years of collective experience. One indigenous team ready to deliver.</p>
          </div>
          <Button asChild variant="gold">
            <Link to="/contact" hash="quote">
              Request a quote
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Wordmark className="on-dark" />
              <p>
                {company.whoWeAre[0]} Built on 20+ years of founding-team experience across the
                entire energy value chain.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                {nav
                  .filter((n) => n.to !== "/")
                  .map((n) => (
                    <li key={n.to}>
                      <Link to={n.to}>{n.label}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3>Our services</h3>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Get in touch</h3>
              <ul>
                <li>No. 1 Oba Sijuade Okunade Crescent,</li>
                <li>Chevy View Estate, Lekki, Lagos</li>
                {company.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`}>{p.display}</a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Rain Energy Limited. All rights reserved.</span>
            <span>{company.tagline} • West Africa</span>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp"
        href={`https://wa.me/${primaryPhone.tel.replace("+", "")}`}
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
  crumbs = [],
  image = images.refinery,
  alt = "",
}: {
  title: string;
  description?: string;
  crumbs?: { label: string; to: string }[];
  image?: string;
  alt?: string;
}) {
  return (
    <section className="page-hero">
      <img
        src={image}
        width={1920}
        height={1024}
        className="hero-photo"
        alt={alt}
        fetchPriority="high"
      />
      <Stripes className="stripes-hero" />
      <div className="container reveal">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.to} className="crumb">
              <ChevronRight />
              <Link to={c.to}>{c.label}</Link>
            </span>
          ))}
          <ChevronRight />
          <span aria-current="page">{title}</span>
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
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}

export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => {
        const Icon = iconMap[s.slug] ?? Wrench;
        return (
          <Reveal key={s.slug} delay={(i % 3) * 80}>
            <Link className="service-card" to="/services/$slug" params={{ slug: s.slug }}>
              <Icon className="service-icon" strokeWidth={1.4} />
              <span className="card-number">0{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
              <span className="text-link">
                Learn more
                <ArrowUpRight />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export function NotFound({
  kind = "page",
  to = "/",
  label = "Back to home",
}: {
  kind?: string;
  to?: string;
  label?: string;
}) {
  return (
    <Layout>
      <section className="not-found container">
        <strong>404</strong>
        <h1>This {kind} couldn't be found.</h1>
        <p>The link may be incomplete, or the {kind} is no longer available.</p>
        <Button asChild variant="navy">
          <Link to={to}>
            {label}
            <ArrowRight />
          </Link>
        </Button>
      </section>
    </Layout>
  );
}

export function ComplianceGrid() {
  return (
    <div className="compliance-grid">
      {company.compliance.map((c, i) => (
        <Reveal className="compliance-card" key={c.code} delay={i * 60}>
          <div className="compliance-badge">{c.code}</div>
          <div className="compliance-val">{c.value}</div>
        </Reveal>
      ))}
    </div>
  );
}

export { serviceHref, ArrowUpRight, ArrowRight, Phone, Mail, MapPin, company };
