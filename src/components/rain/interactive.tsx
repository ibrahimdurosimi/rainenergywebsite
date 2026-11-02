import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { company, facts, services } from "@/data/content";
import { CountUp, Reveal, iconMap } from "./shared";

/* ------------------------------------------------------------------ */
/* Headline numbers                                                    */
/* ------------------------------------------------------------------ */

export function FactsBand() {
  return (
    <section className="facts-band" aria-label="Rain Energy at a glance">
      <div className="container facts-grid">
        {facts.map((f, i) => (
          <Reveal className="fact" key={f.label} delay={i * 90}>
            <strong>
              <CountUp value={f.value} suffix={f.suffix} />
            </strong>
            <p>{f.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service explorer                                                    */
/* ------------------------------------------------------------------ */

export function ServiceExplorer() {
  const [i, setI] = useState(0);
  const s = services[i] ?? services[0]!;
  const Icon = iconMap[s.slug];
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    let next = idx;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (idx + 1) % services.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = (idx - 1 + services.length) % services.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = services.length - 1;
    else return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="explorer">
      <div className="explorer-tabs" role="tablist" aria-label="Rain Energy core services">
        {services.map((item, idx) => (
          <button
            key={item.slug}
            ref={(el) => {
              tabs.current[idx] = el;
            }}
            role="tab"
            id={`svc-tab-${item.slug}`}
            aria-selected={idx === i}
            aria-controls="svc-panel"
            tabIndex={idx === i ? 0 : -1}
            className={`explorer-tab ${idx === i ? "on" : ""}`}
            onClick={() => setI(idx)}
            onMouseEnter={() => setI(idx)}
            onKeyDown={(e) => onKey(e, idx)}
          >
            <span className="n">0{idx + 1}</span>
            <span className="t">{item.name}</span>
            <ArrowUpRight />
          </button>
        ))}
      </div>
      <div
        className="explorer-panel"
        role="tabpanel"
        id="svc-panel"
        aria-labelledby={`svc-tab-${s.slug}`}
      >
        <div className="explorer-media" key={s.slug}>
          <img src={s.image} alt="" loading="lazy" width={1200} height={800} />
          <span className="explorer-tag">
            {Icon && <Icon strokeWidth={1.5} />}0{i + 1} / 0{services.length}
          </span>
        </div>
        <div className="explorer-body" key={`${s.slug}-body`}>
          {s.headline && <div className="eyebrow">{s.headline}</div>}
          <h3>{s.name}</h3>
          <p>{s.summary}</p>
          <ul className="scope-list">
            {s.points.slice(0, 6).map((p) => (
              <li key={p}>
                <CheckCircle2 />
                {p}
              </li>
            ))}
          </ul>
          <Link className="text-link" to="/services/$slug" params={{ slug: s.slug }}>
            Explore {s.name}
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pipeline interventions schematic                                    */
/* ------------------------------------------------------------------ */

const STOPS = [{ x: 110 }, { x: 270 }, { x: 430 }, { x: 590 }, { x: 760 }, { x: 890 }] as const;

export function PipelineSchematic() {
  const items = company.pipelineInterventions;
  const [a, setA] = useState(0);
  const cur = items[a] ?? items[0]!;

  const key = (e: KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setA(idx);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setA((idx + 1) % items.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setA((idx - 1 + items.length) % items.length);
    }
  };
  const on = (idx: number) => (idx === a ? "feat on" : "feat");

  return (
    <div className="schematic">
      <svg
        viewBox="0 0 960 400"
        role="group"
        aria-label="Schematic of Rain Energy's six pipeline interventions along a pipeline run"
        className="schematic-svg"
      >
        <defs>
          <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9fb6c8" />
            <stop offset="0.45" stopColor="#557a95" />
            <stop offset="1" stopColor="#2c4a63" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#557a95" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0b1f33" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#dceaf2" strokeOpacity="0.07" />
          </pattern>
        </defs>
        <rect width="960" height="400" fill="url(#grid)" />
        {/* ground */}
        <rect x="0" y="236" width="960" height="164" fill="#0b1f33" fillOpacity="0.55" />
        <path d="M0 236H960" stroke="#8fb3cc" strokeOpacity="0.35" strokeDasharray="2 6" />

        {/* river for HDD */}
        <rect x="692" y="150" width="136" height="86" fill="url(#waterGrad)" />
        <path
          d="M692 168q17 -8 34 0t34 0t34 0t34 0"
          stroke="#dceaf2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* main pipe */}
        <g>
          <rect x="16" y="192" width="676" height="26" fill="url(#pipeGrad)" rx="2" />
          <rect x="828" y="192" width="116" height="26" fill="url(#pipeGrad)" rx="2" />
          {[60, 170, 340, 500, 668, 850].map((fx) => (
            <rect
              key={fx}
              x={fx}
              y="186"
              width="8"
              height="38"
              fill="#0b1f33"
              stroke="#dceaf2"
              strokeOpacity="0.5"
            />
          ))}
        </g>

        {/* 1 Hot tapping */}
        <g className={on(0)}>
          <rect x="104" y="128" width="12" height="64" fill="url(#pipeGrad)" />
          <rect x="96" y="120" width="28" height="12" fill="#0b1f33" stroke="#8fb3cc" />
          <rect
            x="84"
            y="70"
            width="52"
            height="48"
            rx="3"
            fill="#0b1f33"
            stroke="#8fb3cc"
            strokeWidth="1.5"
          />
          <path d="M110 118V196" stroke="#8fb3cc" strokeDasharray="3 4" />
          <circle cx="110" cy="92" r="9" fill="none" stroke="#8fb3cc" />
        </g>

        {/* 2 Stopple */}
        <g className={on(1)}>
          <rect x="246" y="140" width="14" height="52" fill="url(#pipeGrad)" />
          <rect x="280" y="140" width="14" height="52" fill="url(#pipeGrad)" />
          <path d="M253 140V112H287V140" fill="none" stroke="#557a95" strokeWidth="14" />
          <rect x="262" y="190" width="16" height="30" fill="#8fb3cc" />
        </g>

        {/* 3 Mechanical clamp */}
        <g className={on(2)}>
          <rect x="406" y="182" width="48" height="46" rx="4" fill="#8fb3cc" />
          <rect x="406" y="182" width="48" height="10" rx="4" fill="#e3c88f" />
          <circle cx="414" cy="205" r="3" fill="#0b1f33" />
          <circle cx="446" cy="205" r="3" fill="#0b1f33" />
          <path d="M430 232q-4 8 0 12t0 -12" stroke="#dceaf2" strokeOpacity="0.8" fill="none" />
        </g>

        {/* 4 Cofferdam */}
        <g className={on(3)}>
          <rect
            x="530"
            y="150"
            width="120"
            height="104"
            fill="#0b1f33"
            fillOpacity="0.55"
            stroke="#8fb3cc"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M520 262q15 -8 30 0t30 0t30 0t30 0t30 0"
            stroke="#557a95"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M520 276q15 -8 30 0t30 0t30 0t30 0t30 0"
            stroke="#557a95"
            strokeOpacity="0.6"
            fill="none"
          />
          <rect x="526" y="146" width="8" height="112" fill="#8fb3cc" />
          <rect x="646" y="146" width="8" height="112" fill="#8fb3cc" />
        </g>

        {/* 5 HDD crossing */}
        <g className={on(4)}>
          <path
            d="M692 205C720 205 726 330 760 330C794 330 800 205 828 205"
            fill="none"
            stroke="#8fb3cc"
            strokeWidth="3"
            strokeDasharray="8 6"
          />
          <circle cx="692" cy="205" r="5" fill="#8fb3cc" />
          <circle cx="828" cy="205" r="5" fill="#8fb3cc" />
        </g>

        {/* 6 Welding & NDT */}
        <g className={on(5)}>
          <rect x="880" y="184" width="12" height="42" rx="3" fill="#8fb3cc" />
          <path
            d="M862 150q28 -26 56 0"
            fill="none"
            stroke="#dceaf2"
            strokeOpacity="0.9"
            strokeWidth="2"
          />
          <path
            d="M872 160q18 -14 36 0"
            fill="none"
            stroke="#dceaf2"
            strokeOpacity="0.6"
            strokeWidth="2"
          />
          <circle cx="890" cy="172" r="5" fill="#dceaf2" />
        </g>

        {/* markers */}
        {STOPS.map((s, idx) => (
          <g
            key={items[idx]!.name}
            role="button"
            tabIndex={0}
            aria-pressed={idx === a}
            aria-label={`${items[idx]!.name}: ${items[idx]!.desc}`}
            className={`marker ${idx === a ? "on" : ""}`}
            transform={`translate(${s.x} 352)`}
            onClick={() => setA(idx)}
            onMouseEnter={() => setA(idx)}
            onFocus={() => setA(idx)}
            onKeyDown={(e) => key(e, idx)}
          >
            <path d={`M0 -128V-12`} className="leader" />
            <circle r="22" className="pulse" />
            <circle r="17" className="dot" />
            <text y="5" textAnchor="middle" className="num">
              {idx + 1}
            </text>
            <text y="40" textAnchor="middle" className="lbl">
              {items[idx]!.name.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>

      <div className="schematic-detail" aria-live="polite">
        <span className="schematic-count">
          0{a + 1} / 0{items.length}
        </span>
        <h3>{cur.name}</h3>
        <p>{cur.desc}</p>
        <div className="schematic-chips">
          {items.map((it, idx) => (
            <button
              key={it.name}
              type="button"
              className={idx === a ? "on" : ""}
              onClick={() => setA(idx)}
            >
              {it.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* HSE rail                                                            */
/* ------------------------------------------------------------------ */

export function HseRail() {
  const steps = company.hseFramework;
  const [a, setA] = useState(0);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Walk through the five steps once when the rail first scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || touched) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        let n = 0;
        timer = window.setInterval(() => {
          n += 1;
          if (n >= steps.length) {
            window.clearInterval(timer);
            return;
          }
          setA(n);
        }, 1100);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [steps.length, touched]);

  const pick = (idx: number) => {
    setTouched(true);
    setA(idx);
  };

  return (
    <div className="hse-rail" ref={ref}>
      <div className="hse-track" aria-hidden="true">
        <i style={{ width: `${(a / (steps.length - 1)) * 100}%` }} />
      </div>
      <ol>
        {steps.map((s, idx) => (
          <li key={s.code} className={idx <= a ? "done" : ""}>
            <button
              type="button"
              className={idx === a ? "on" : ""}
              aria-current={idx === a ? "step" : undefined}
              onClick={() => pick(idx)}
              onMouseEnter={() => pick(idx)}
              onFocus={() => pick(idx)}
            >
              <span className="node">{idx + 1}</span>
              <span className="code">{s.code}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="hse-desc" aria-live="polite" key={a}>
        {steps[a]!.desc}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

export function ValuesRow() {
  return (
    <div className="values-row">
      <div className="pills">
        {company.values.map((v, i) => (
          <Reveal className={`pill ${i % 2 === 0 ? "navy" : "mist"}`} key={v} delay={i * 80}>
            {v}
          </Reveal>
        ))}
      </div>
      <p className="commitments">
        {company.commitments.map((c, i) => (
          <span key={c}>
            {c}
            {i < company.commitments.length - 1 && <b aria-hidden="true">•</b>}
          </span>
        ))}
      </p>
    </div>
  );
}
