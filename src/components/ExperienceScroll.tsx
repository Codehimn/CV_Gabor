import {
    Award,
    BadgeCheck,
    Briefcase,
    Building2,
    CalendarRange,
    Code2,
    Cpu,
    Globe,
    Layers,
    MapPin,
    Rocket,
    Server,
    Sparkles,
    Target,
    Terminal,
    type LucideIcon
} from "lucide-react";

interface ExperienceItem {
    period: string;
    company: string;
    role: string;
    location: string;
    description: string;
    icon?: string;
    tags?: string[];
}

interface Props {
    items: ExperienceItem[];
    lang?: "en" | "es";
}

const ICON_MAP: Record<string, LucideIcon> = {
    Briefcase,
    Code2,
    Cpu,
    Terminal,
    Globe,
    Rocket,
    Layers,
    Building2,
    Server
};

const UI_TEXT = {
    en: {
        periodLabel: "Timeline",
        impactLabel: "Business Impact",
        techLabel: "Technology Stack",
        covidBadge: "COVID era",
        ctaTitle: "Open to high-impact product and automation work",
        ctaSubtitle:
            "From architecture to execution, I deliver systems that reduce risk and scale confidently.",
        metrics: {
            years: "Years building software",
            roles: "Specialized roles",
            companies: "Organizations served",
            quality: "Quality-first delivery"
        },
        qualityValue: "CI/CD + testing discipline"
    },
    es: {
        periodLabel: "Cronologia",
        impactLabel: "Impacto en Negocio",
        techLabel: "Stack Tecnologico",
        covidBadge: "Era COVID",
        ctaTitle: "Disponible para productos y automatizacion de alto impacto",
        ctaSubtitle:
            "Desde arquitectura hasta ejecucion, construyo sistemas que reducen riesgo y escalan con confianza.",
        metrics: {
            years: "Anos construyendo software",
            roles: "Roles especializados",
            companies: "Organizaciones atendidas",
            quality: "Entrega centrada en calidad"
        },
        qualityValue: "CI/CD + disciplina de testing"
    }
} as const;

const IMPACT_COPY = {
    en: {
        spglobal: "Building robust software for financial analytics workflows with strong reliability standards.",
        zattoo: "Built internal API mocking workflows and raised release confidence.",
        conectsen: "Delivered real-time IoT monitoring with multi-device data capture.",
        yaxa: "Scaled automation flows for logistics, messaging and pricing operations.",
        freelancer: "Shipped custom automation systems integrating diverse third-party APIs.",
        madisa: "Strengthened technical operations and customer-side system reliability."
    },
    es: {
        spglobal: "Construyendo software robusto para flujos de analitica financiera con altos estandares de confiabilidad.",
        zattoo: "Construi flujos internos de API mocking y aumente la confianza en releases.",
        conectsen: "Entregue monitoreo IoT en tiempo real con captura multi-dispositivo.",
        yaxa: "Escale automatizaciones para logistica, mensajeria y pricing operativo.",
        freelancer: "Lance sistemas de automatizacion personalizados integrando APIs de terceros.",
        madisa: "Fortaleci operaciones tecnicas y la confiabilidad de sistemas del cliente."
    }
} as const;

function getStartYear(period: string): string {
    const yearMatch = period.match(/\d{4}/);
    if (yearMatch) {
        return yearMatch[0];
    }

    return period;
}

function getImpactText(item: ExperienceItem, locale: "en" | "es"): string {
    const company = item.company.toLowerCase();

    if (company.includes("zattoo")) {
        return IMPACT_COPY[locale].zattoo;
    }
    if (company.includes("s&p") || company.includes("sp global") || company.includes("realtime analytics")) {
        return IMPACT_COPY[locale].spglobal;
    }
    if (company.includes("conectsen")) {
        return IMPACT_COPY[locale].conectsen;
    }
    if (company.includes("yaxa")) {
        return IMPACT_COPY[locale].yaxa;
    }
    if (company.includes("freelancer")) {
        return IMPACT_COPY[locale].freelancer;
    }
    if (company.includes("madisa")) {
        return IMPACT_COPY[locale].madisa;
    }

    return item.description;
}

function getPeriodBounds(period: string): { start: number; end: number } | null {
    const years = (period.match(/\d{4}/g) || []).map((year) => Number(year));
    if (years.length === 0) {
        return null;
    }

    const start = years[0];
    const hasOpenEnd = /present|presente/i.test(period);
    const end = years.length > 1 ? years[years.length - 1] : hasOpenEnd ? new Date().getFullYear() : start;

    return { start, end };
}

function isCovidEra(period: string): boolean {
    const bounds = getPeriodBounds(period);
    if (!bounds) {
        return false;
    }

    return bounds.start <= 2021 && bounds.end >= 2020;
}

function renderIcon(iconName: string) {
    const IconComponent = ICON_MAP[iconName] || Briefcase;
    return <IconComponent size={22} strokeWidth={2.1} />;
}

export default function ExperienceScroll({ items, lang = "en" }: Props) {
    const locale: "en" | "es" = lang === "es" ? "es" : "en";
    const text = UI_TEXT[locale];
    const currentYear = new Date().getFullYear();
    const years = Math.max(11, currentYear - 2010);
    const companies = new Set(items.map((item) => item.company)).size;

    const metrics = [
        { label: text.metrics.years, value: `${years}+` },
        { label: text.metrics.roles, value: `${items.length}` },
        { label: text.metrics.companies, value: `${companies}` },
        { label: text.metrics.quality, value: text.qualityValue }
    ];

    return (
        <div className="xp-shell">
            <div className="xp-light xp-light-a" aria-hidden="true" />
            <div className="xp-light xp-light-b" aria-hidden="true" />
            <div className="xp-particles" aria-hidden="true" />

            <div className="xp-metrics" role="list" aria-label="Experience Metrics">
                {metrics.map((metric, index) => (
                    <article
                        key={metric.label}
                        role="listitem"
                        className="xp-metric reveal"
                        style={{ transitionDelay: `${index * 0.08}s` }}
                    >
                        <p className="xp-metric-value">{metric.value}</p>
                        <p className="xp-metric-label">{metric.label}</p>
                    </article>
                ))}
            </div>

            <div className="xp-timeline" aria-label="Professional timeline">
                {items.map((item, index) => {
                    const year = getStartYear(item.period);
                    const isLeft = index % 2 === 0;
                    const impactText = getImpactText(item, locale);
                    const showCovidBadge = isCovidEra(item.period);

                    return (
                        <article
                            key={`${item.company}-${item.role}-${item.period}`}
                            className={`xp-row ${isLeft ? "xp-row-left reveal-left" : "xp-row-right reveal-right"}`}
                            style={{ transitionDelay: `${index * 0.06}s` }}
                        >
                            <div className="xp-column xp-column-main">
                                <div className="xp-card">
                                    <div className="xp-card-glow" aria-hidden="true" />

                                    <div className="xp-card-head">
                                        <div className="xp-icon-wrap">
                                            {renderIcon(item.icon || "Briefcase")}
                                        </div>

                                        <div className="xp-head-meta">
                                            <p className="xp-year">{year}</p>
                                            <div className="xp-pill">
                                                <CalendarRange size={14} />
                                                <span>{item.period}</span>
                                                {showCovidBadge && (
                                                    <span className="xp-event-badge" title={text.covidBadge}>
                                                        <span aria-hidden="true">😷</span>
                                                        <span>{text.covidBadge}</span>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="xp-card-body">
                                        <h3 className="xp-company">{item.company}</h3>
                                        <p className="xp-role">{item.role}</p>
                                        <p className="xp-description">{item.description}</p>

                                        <div className="xp-location-row">
                                            <MapPin size={14} />
                                            <span>{item.location}</span>
                                        </div>

                                        <div className="xp-proof-block">
                                            <div className="xp-proof-title">
                                                <Target size={15} />
                                                <span>{text.impactLabel}</span>
                                            </div>
                                            <p className="xp-proof-text">{impactText}</p>
                                        </div>

                                        {item.tags && item.tags.length > 0 && (
                                            <div className="xp-tags-wrap">
                                                <div className="xp-proof-title">
                                                    <BadgeCheck size={15} />
                                                    <span>{text.techLabel}</span>
                                                </div>
                                                <div className="xp-tags">
                                                    {item.tags.map((tag) => (
                                                        <span key={`${item.company}-${tag}`} className="xp-tag">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="xp-column xp-column-center" aria-hidden="true">
                                <span className="xp-line-dot" />
                                <span className="xp-line-label">{text.periodLabel}</span>
                            </div>

                            <div className="xp-column xp-column-side" aria-hidden="true">
                                <div className="xp-side-panel">
                                    <Award size={16} />
                                    <span>{year}</span>
                                    <Sparkles size={14} />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="xp-cta reveal">
                <div className="xp-cta-icon" aria-hidden="true">
                    <Rocket size={20} />
                </div>
                <div>
                    <p className="xp-cta-title">{text.ctaTitle}</p>
                    <p className="xp-cta-subtitle">{text.ctaSubtitle}</p>
                </div>
            </div>

            <style>{`
                .xp-shell {
                    position: relative;
                    border-radius: 34px;
                    background: linear-gradient(165deg, rgba(6, 14, 26, 0.74), rgba(7, 18, 34, 0.58));
                    border: 1px solid rgba(148, 163, 184, 0.15);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 32px 86px rgba(3, 10, 24, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);
                    overflow: hidden;
                    padding: clamp(1.1rem, 3vw, 2.1rem);
                }

                .xp-light {
                    position: absolute;
                    z-index: 0;
                    border-radius: 999px;
                    filter: blur(80px);
                    pointer-events: none;
                }

                .xp-light-a {
                    width: min(38vw, 480px);
                    height: min(38vw, 480px);
                    top: -12%;
                    left: -8%;
                    background: rgba(14, 165, 233, 0.18);
                    animation: xpFloatA 12s ease-in-out infinite alternate;
                }

                .xp-light-b {
                    width: min(30vw, 410px);
                    height: min(30vw, 410px);
                    right: -8%;
                    bottom: -14%;
                    background: rgba(245, 158, 11, 0.16);
                    animation: xpFloatB 14s ease-in-out infinite alternate;
                }

                .xp-particles {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                    background-image: radial-gradient(circle at 20% 20%, rgba(148, 163, 184, 0.2) 0 1px, transparent 1px),
                        radial-gradient(circle at 80% 40%, rgba(148, 163, 184, 0.22) 0 1px, transparent 1px),
                        radial-gradient(circle at 35% 75%, rgba(148, 163, 184, 0.16) 0 1px, transparent 1px);
                    background-size: 260px 260px, 320px 320px, 210px 210px;
                    animation: xpDrift 28s linear infinite;
                    opacity: 0.28;
                }

                .xp-metrics {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    gap: 0.85rem;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    margin-bottom: clamp(1.2rem, 3vw, 2rem);
                }

                .xp-metric {
                    border-radius: 18px;
                    padding: 0.95rem 1rem;
                    min-height: 84px;
                    border: 1px solid rgba(148, 163, 184, 0.15);
                    background: linear-gradient(150deg, rgba(15, 23, 42, 0.62), rgba(12, 22, 40, 0.3));
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
                }

                .xp-metric-value {
                    margin: 0;
                    color: #ecfeff;
                    font-weight: 700;
                    font-size: clamp(1.02rem, 1.7vw, 1.24rem);
                    font-family: "Space Grotesk", "Inter", sans-serif;
                    letter-spacing: -0.01em;
                }

                .xp-metric-label {
                    margin: 0.3rem 0 0;
                    color: #9fb1c8;
                    font-size: 0.79rem;
                    line-height: 1.35;
                }

                .xp-timeline {
                    position: relative;
                    z-index: 2;
                    display: grid;
                    gap: clamp(0.95rem, 2vw, 1.5rem);
                }

                .xp-timeline::before {
                    content: "";
                    position: absolute;
                    left: calc(50% - 0.5px);
                    top: 1rem;
                    bottom: 1rem;
                    width: 1px;
                    background: linear-gradient(to bottom, rgba(14, 165, 233, 0.05), rgba(14, 165, 233, 0.32), rgba(245, 158, 11, 0.25), rgba(14, 165, 233, 0.05));
                }

                .xp-row {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 92px minmax(0, 0.62fr);
                    align-items: stretch;
                    gap: 0.85rem;
                }

                .xp-row-right {
                    grid-template-columns: minmax(0, 0.62fr) 92px minmax(0, 1fr);
                }

                .xp-column {
                    position: relative;
                }

                .xp-row-right .xp-column-main {
                    order: 3;
                }

                .xp-row-right .xp-column-center {
                    order: 2;
                }

                .xp-row-right .xp-column-side {
                    order: 1;
                }

                .xp-card {
                    position: relative;
                    border-radius: 26px;
                    border: 1px solid rgba(148, 163, 184, 0.18);
                    background: linear-gradient(160deg, rgba(10, 20, 36, 0.76), rgba(12, 22, 40, 0.48));
                    box-shadow: 0 18px 46px rgba(1, 8, 20, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    overflow: hidden;
                    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease, border-color 0.35s ease;
                }

                .xp-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(56, 189, 248, 0.4);
                    box-shadow: 0 28px 60px rgba(1, 8, 20, 0.58), 0 0 0 1px rgba(56, 189, 248, 0.12);
                }

                .xp-card-glow {
                    position: absolute;
                    right: -3rem;
                    top: -3.5rem;
                    width: 12rem;
                    height: 12rem;
                    border-radius: 999px;
                    background: radial-gradient(circle, rgba(14, 165, 233, 0.28), rgba(14, 165, 233, 0));
                    transition: transform 0.55s ease;
                }

                .xp-card:hover .xp-card-glow {
                    transform: scale(1.1);
                }

                .xp-card-head,
                .xp-card-body {
                    position: relative;
                    z-index: 2;
                }

                .xp-card-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1.25rem 1.25rem 0;
                }

                .xp-icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(145deg, rgba(56, 189, 248, 0.22), rgba(45, 212, 191, 0.12));
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    color: #ccfbf1;
                    flex-shrink: 0;
                }

                .xp-head-meta {
                    text-align: right;
                }

                .xp-year {
                    margin: 0 0 0.45rem;
                    font-family: "Space Grotesk", "Inter", sans-serif;
                    color: #f8fafc;
                    font-weight: 700;
                    font-size: clamp(1.18rem, 2vw, 1.45rem);
                    letter-spacing: -0.02em;
                }

                .xp-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    flex-wrap: wrap;
                    padding: 0.34rem 0.62rem;
                    border-radius: 999px;
                    font-size: 0.7rem;
                    color: #bae6fd;
                    border: 1px solid rgba(56, 189, 248, 0.22);
                    background: rgba(14, 116, 144, 0.22);
                }

                .xp-event-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.15rem 0.42rem;
                    border-radius: 999px;
                    border: 1px solid rgba(245, 158, 11, 0.36);
                    background: rgba(245, 158, 11, 0.18);
                    color: #fde68a;
                    font-size: 0.64rem;
                    line-height: 1;
                    letter-spacing: 0.02em;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .xp-card-body {
                    padding: 1rem 1.25rem 1.25rem;
                }

                .xp-company {
                    margin: 0;
                    color: #f8fafc;
                    font-family: "Space Grotesk", "Inter", sans-serif;
                    font-size: clamp(1.25rem, 2.2vw, 1.8rem);
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                }

                .xp-role {
                    margin: 0.4rem 0 0.85rem;
                    color: #67e8f9;
                    font-size: clamp(0.95rem, 1.6vw, 1.08rem);
                    font-weight: 600;
                    line-height: 1.45;
                }

                .xp-description {
                    margin: 0;
                    color: #cbd5e1;
                    line-height: 1.72;
                    font-size: 0.95rem;
                }

                .xp-location-row {
                    margin-top: 0.95rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.38rem;
                    font-size: 0.78rem;
                    color: #a6bad3;
                    letter-spacing: 0.02em;
                }

                .xp-proof-block,
                .xp-tags-wrap {
                    margin-top: 0.95rem;
                    padding-top: 0.82rem;
                    border-top: 1px solid rgba(148, 163, 184, 0.18);
                }

                .xp-proof-title {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.42rem;
                    color: #dbeafe;
                    font-size: 0.73rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .xp-proof-text {
                    margin: 0.42rem 0 0;
                    color: #a8b9cf;
                    line-height: 1.6;
                    font-size: 0.85rem;
                }

                .xp-tags {
                    margin-top: 0.65rem;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.48rem;
                }

                .xp-tag {
                    display: inline-flex;
                    align-items: center;
                    min-height: 32px;
                    padding: 0.3rem 0.7rem;
                    border-radius: 999px;
                    border: 1px solid rgba(125, 211, 252, 0.25);
                    background: rgba(15, 23, 42, 0.55);
                    color: #e0f2fe;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
                }

                .xp-tag:hover {
                    transform: translateY(-2px);
                    background: rgba(14, 116, 144, 0.28);
                    border-color: rgba(34, 211, 238, 0.45);
                }

                .xp-column-center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 0.55rem;
                }

                .xp-line-dot {
                    width: 14px;
                    height: 14px;
                    border-radius: 999px;
                    background: linear-gradient(145deg, #38bdf8, #f59e0b);
                    box-shadow: 0 0 0 5px rgba(14, 165, 233, 0.16), 0 0 16px rgba(14, 165, 233, 0.45);
                }

                .xp-line-label {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    font-size: 0.58rem;
                    color: #8fa6c1;
                    text-transform: uppercase;
                    letter-spacing: 0.19em;
                }

                .xp-column-side {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .xp-side-panel {
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    border-radius: 999px;
                    padding: 0.42rem 0.7rem;
                    color: #cbd5e1;
                    font-size: 0.72rem;
                    line-height: 1;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    background: rgba(15, 23, 42, 0.45);
                    display: inline-flex;
                    gap: 0.34rem;
                    align-items: center;
                }

                .xp-row-right .xp-column-side {
                    justify-content: flex-end;
                }

                .xp-cta {
                    margin-top: clamp(1rem, 2.8vw, 1.9rem);
                    position: relative;
                    z-index: 2;
                    border-radius: 22px;
                    border: 1px solid rgba(125, 211, 252, 0.24);
                    background: linear-gradient(160deg, rgba(14, 116, 144, 0.2), rgba(15, 23, 42, 0.55));
                    padding: clamp(0.95rem, 2vw, 1.25rem);
                    display: grid;
                    grid-template-columns: auto minmax(0, 1fr);
                    gap: 0.8rem;
                    align-items: center;
                }

                .xp-cta-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 12px;
                    color: #ecfeff;
                    background: linear-gradient(145deg, rgba(56, 189, 248, 0.85), rgba(20, 184, 166, 0.75));
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .xp-cta-title {
                    margin: 0;
                    color: #ecfeff;
                    font-size: clamp(0.98rem, 1.7vw, 1.15rem);
                    font-weight: 700;
                    line-height: 1.35;
                }

                .xp-cta-subtitle {
                    margin: 0.22rem 0 0;
                    color: #bfdbfe;
                    font-size: 0.83rem;
                    line-height: 1.55;
                }

                @keyframes xpDrift {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(-80px, 40px, 0);
                    }
                }

                @keyframes xpFloatA {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(30px, 10px, 0);
                    }
                }

                @keyframes xpFloatB {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(-24px, -20px, 0);
                    }
                }

                @media (max-width: 1024px) {
                    /* Performance: reduce expensive paint effects on tablets/phones. */
                    .xp-light,
                    .xp-particles {
                        display: none;
                    }

                    .xp-shell,
                    .xp-card {
                        backdrop-filter: none;
                        -webkit-backdrop-filter: none;
                    }

                    .xp-shell {
                        box-shadow: 0 20px 44px rgba(3, 10, 24, 0.34);
                    }

                    .xp-card {
                        box-shadow: 0 14px 32px rgba(1, 8, 20, 0.34);
                    }

                    .xp-metrics {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .xp-row,
                    .xp-row-right {
                        grid-template-columns: 76px minmax(0, 1fr);
                    }

                    .xp-row-right .xp-column-main {
                        order: 2;
                    }

                    .xp-row-right .xp-column-center {
                        order: 1;
                    }

                    .xp-row-right .xp-column-side {
                        display: none;
                    }

                    .xp-column-side {
                        display: none;
                    }

                    .xp-column-center {
                        align-items: center;
                    }

                    .xp-timeline::before {
                        left: 38px;
                    }
                }

                @media (max-width: 720px) {
                    .xp-shell {
                        border-radius: 24px;
                        padding: 0.8rem;
                    }

                    .xp-metrics {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 0.55rem;
                    }

                    .xp-row,
                    .xp-row-right {
                        grid-template-columns: 58px minmax(0, 1fr);
                        gap: 0.55rem;
                    }

                    .xp-timeline::before {
                        left: 28.5px;
                    }

                    .xp-card-head {
                        padding: 0.95rem 0.95rem 0;
                    }

                    .xp-card-body {
                        padding: 0.8rem 0.95rem 0.95rem;
                    }

                    .xp-card:hover,
                    .xp-tag:hover {
                        transform: none;
                    }

                    .xp-pill {
                        padding: 0.32rem 0.55rem;
                        font-size: 0.66rem;
                    }

                    .xp-icon-wrap {
                        width: 40px;
                        height: 40px;
                    }

                    .xp-line-label {
                        font-size: 0.53rem;
                        letter-spacing: 0.14em;
                    }

                    .xp-tag {
                        min-height: 36px;
                        font-size: 0.74rem;
                    }

                    .xp-cta {
                        grid-template-columns: 1fr;
                        text-align: left;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .xp-light-a,
                    .xp-light-b,
                    .xp-particles {
                        animation: none;
                    }

                    .xp-card,
                    .xp-card-glow,
                    .xp-tag {
                        transition: none;
                    }
                }

                @media (hover: none) and (pointer: coarse) {
                    /* Performance: ultra-lite mode for touch devices with no hover support. */
                    .xp-light,
                    .xp-particles,
                    .xp-card-glow,
                    .xp-column-side,
                    .xp-line-label {
                        display: none;
                    }

                    .xp-shell,
                    .xp-card {
                        backdrop-filter: none;
                        -webkit-backdrop-filter: none;
                    }

                    .xp-card,
                    .xp-tag,
                    .xp-cta {
                        transition: none;
                    }

                    .xp-row,
                    .xp-row-right {
                        grid-template-columns: 52px minmax(0, 1fr);
                        gap: 0.5rem;
                    }

                    .xp-timeline::before {
                        left: 25px;
                    }

                    .xp-card:hover,
                    .xp-tag:hover {
                        transform: none;
                        box-shadow: none;
                    }
                }
            `}</style>
        </div>
    );
}
