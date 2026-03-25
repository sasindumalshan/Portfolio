'use client'
import React, { useState } from "react";

// ─── Theme Types ──────────────────────────────────────────────────────────────

export interface ThemeColors {
  primary: "blue" | "purple" | "pink" | "cyan" | "violet" | "indigo" | "rose" | "fuchsia";
  secondary: "blue" | "purple" | "pink" | "cyan" | "violet" | "indigo" | "rose" | "fuchsia";
  accent: "blue" | "purple" | "pink" | "cyan" | "violet" | "indigo" | "rose" | "fuchsia";
}

const DEFAULT_THEME: ThemeColors = {
  primary: "blue",
  secondary: "purple",
  accent: "pink",
};

// ─── Gradient Maps ────────────────────────────────────────────────────────────

const G_FROM: Record<ThemeColors["primary"], string> = {
  blue: "from-blue-500", purple: "from-purple-500", pink: "from-pink-500",
  cyan: "from-cyan-500", violet: "from-violet-500", indigo: "from-indigo-500",
  rose: "from-rose-500", fuchsia: "from-fuchsia-500",
};
const G_VIA: Record<ThemeColors["secondary"], string> = {
  blue: "via-blue-500", purple: "via-purple-500", pink: "via-pink-500",
  cyan: "via-cyan-500", violet: "via-violet-500", indigo: "via-indigo-500",
  rose: "via-rose-500", fuchsia: "via-fuchsia-500",
};
const G_TO: Record<ThemeColors["accent"], string> = {
  blue: "to-blue-500", purple: "to-purple-500", pink: "to-pink-500",
  cyan: "to-cyan-500", violet: "to-violet-500", indigo: "to-indigo-500",
  rose: "to-rose-500", fuchsia: "to-fuchsia-500",
};
const L_FROM: Record<ThemeColors["primary"], string> = {
  blue: "from-blue-400", purple: "from-purple-400", pink: "from-pink-400",
  cyan: "from-cyan-400", violet: "from-violet-400", indigo: "from-indigo-400",
  rose: "from-rose-400", fuchsia: "from-fuchsia-400",
};
const L_TO: Record<ThemeColors["secondary"], string> = {
  blue: "to-blue-400", purple: "to-purple-400", pink: "to-pink-400",
  cyan: "to-cyan-400", violet: "to-violet-400", indigo: "to-indigo-400",
  rose: "to-rose-400", fuchsia: "to-fuchsia-400",
};

// ─── Secondary Token Map ──────────────────────────────────────────────────────

type SecTokens = {
  border: string; bg: string; text: string;
  tabActiveBg: string; tabActiveBorder: string; tabActiveText: string;
  badge: string; badgeText: string;
  glow: string; glowHover: string;
  cardBorderHover: string; cardShadow: string;
  projCardBorderHover: string; projCardBgHover: string;
  linkHoverBorder: string; linkHoverText: string;
  dot: string; divider: string;
};

const SEC: Record<ThemeColors["secondary"], SecTokens> = {
  purple: {
    border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-300",
    tabActiveBg: "from-blue-500/20 to-purple-500/20", tabActiveBorder: "border-purple-500/30", tabActiveText: "text-purple-200",
    badge: "bg-purple-500/30", badgeText: "text-purple-300",
    glow: "bg-purple-500/8", glowHover: "group-hover:bg-purple-500/15",
    cardBorderHover: "hover:border-purple-500/40", cardShadow: "hover:shadow-purple-500/10",
    projCardBorderHover: "hover:border-purple-500/25", projCardBgHover: "hover:bg-purple-500/5",
    linkHoverBorder: "hover:border-purple-500/30", linkHoverText: "hover:text-purple-300",
    dot: "from-blue-500 to-purple-500", divider: "via-purple-500/30",
  },
  blue: {
    border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-300",
    tabActiveBg: "from-cyan-500/20 to-blue-500/20", tabActiveBorder: "border-blue-500/30", tabActiveText: "text-blue-200",
    badge: "bg-blue-500/30", badgeText: "text-blue-300",
    glow: "bg-blue-500/8", glowHover: "group-hover:bg-blue-500/15",
    cardBorderHover: "hover:border-blue-500/40", cardShadow: "hover:shadow-blue-500/10",
    projCardBorderHover: "hover:border-blue-500/25", projCardBgHover: "hover:bg-blue-500/5",
    linkHoverBorder: "hover:border-blue-500/30", linkHoverText: "hover:text-blue-300",
    dot: "from-cyan-500 to-blue-500", divider: "via-blue-500/30",
  },
  pink: {
    border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-300",
    tabActiveBg: "from-purple-500/20 to-pink-500/20", tabActiveBorder: "border-pink-500/30", tabActiveText: "text-pink-200",
    badge: "bg-pink-500/30", badgeText: "text-pink-300",
    glow: "bg-pink-500/8", glowHover: "group-hover:bg-pink-500/15",
    cardBorderHover: "hover:border-pink-500/40", cardShadow: "hover:shadow-pink-500/10",
    projCardBorderHover: "hover:border-pink-500/25", projCardBgHover: "hover:bg-pink-500/5",
    linkHoverBorder: "hover:border-pink-500/30", linkHoverText: "hover:text-pink-300",
    dot: "from-purple-500 to-pink-500", divider: "via-pink-500/30",
  },
  cyan: {
    border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-300",
    tabActiveBg: "from-blue-500/20 to-cyan-500/20", tabActiveBorder: "border-cyan-500/30", tabActiveText: "text-cyan-200",
    badge: "bg-cyan-500/30", badgeText: "text-cyan-300",
    glow: "bg-cyan-500/8", glowHover: "group-hover:bg-cyan-500/15",
    cardBorderHover: "hover:border-cyan-500/40", cardShadow: "hover:shadow-cyan-500/10",
    projCardBorderHover: "hover:border-cyan-500/25", projCardBgHover: "hover:bg-cyan-500/5",
    linkHoverBorder: "hover:border-cyan-500/30", linkHoverText: "hover:text-cyan-300",
    dot: "from-blue-500 to-cyan-500", divider: "via-cyan-500/30",
  },
  violet: {
    border: "border-violet-500/30", bg: "bg-violet-500/10", text: "text-violet-300",
    tabActiveBg: "from-purple-500/20 to-violet-500/20", tabActiveBorder: "border-violet-500/30", tabActiveText: "text-violet-200",
    badge: "bg-violet-500/30", badgeText: "text-violet-300",
    glow: "bg-violet-500/8", glowHover: "group-hover:bg-violet-500/15",
    cardBorderHover: "hover:border-violet-500/40", cardShadow: "hover:shadow-violet-500/10",
    projCardBorderHover: "hover:border-violet-500/25", projCardBgHover: "hover:bg-violet-500/5",
    linkHoverBorder: "hover:border-violet-500/30", linkHoverText: "hover:text-violet-300",
    dot: "from-purple-500 to-violet-500", divider: "via-violet-500/30",
  },
  indigo: {
    border: "border-indigo-500/30", bg: "bg-indigo-500/10", text: "text-indigo-300",
    tabActiveBg: "from-blue-500/20 to-indigo-500/20", tabActiveBorder: "border-indigo-500/30", tabActiveText: "text-indigo-200",
    badge: "bg-indigo-500/30", badgeText: "text-indigo-300",
    glow: "bg-indigo-500/8", glowHover: "group-hover:bg-indigo-500/15",
    cardBorderHover: "hover:border-indigo-500/40", cardShadow: "hover:shadow-indigo-500/10",
    projCardBorderHover: "hover:border-indigo-500/25", projCardBgHover: "hover:bg-indigo-500/5",
    linkHoverBorder: "hover:border-indigo-500/30", linkHoverText: "hover:text-indigo-300",
    dot: "from-blue-500 to-indigo-500", divider: "via-indigo-500/30",
  },
  rose: {
    border: "border-rose-500/30", bg: "bg-rose-500/10", text: "text-rose-300",
    tabActiveBg: "from-pink-500/20 to-rose-500/20", tabActiveBorder: "border-rose-500/30", tabActiveText: "text-rose-200",
    badge: "bg-rose-500/30", badgeText: "text-rose-300",
    glow: "bg-rose-500/8", glowHover: "group-hover:bg-rose-500/15",
    cardBorderHover: "hover:border-rose-500/40", cardShadow: "hover:shadow-rose-500/10",
    projCardBorderHover: "hover:border-rose-500/25", projCardBgHover: "hover:bg-rose-500/5",
    linkHoverBorder: "hover:border-rose-500/30", linkHoverText: "hover:text-rose-300",
    dot: "from-pink-500 to-rose-500", divider: "via-rose-500/30",
  },
  fuchsia: {
    border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10", text: "text-fuchsia-300",
    tabActiveBg: "from-purple-500/20 to-fuchsia-500/20", tabActiveBorder: "border-fuchsia-500/30", tabActiveText: "text-fuchsia-200",
    badge: "bg-fuchsia-500/30", badgeText: "text-fuchsia-300",
    glow: "bg-fuchsia-500/8", glowHover: "group-hover:bg-fuchsia-500/15",
    cardBorderHover: "hover:border-fuchsia-500/40", cardShadow: "hover:shadow-fuchsia-500/10",
    projCardBorderHover: "hover:border-fuchsia-500/25", projCardBgHover: "hover:bg-fuchsia-500/5",
    linkHoverBorder: "hover:border-fuchsia-500/30", linkHoverText: "hover:text-fuchsia-300",
    dot: "from-purple-500 to-fuchsia-500", divider: "via-fuchsia-500/30",
  },
};

// ─── Other Types ──────────────────────────────────────────────────────────────

export interface Technology {
  name: string;
  category: "language" | "framework" | "tool" | "cloud" | "database";
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  tagline: string;
  period: string;
  position: string;
  location: string;
  description: string;
  companyDescription?: string;
  website?: string;
  technologies: Technology[];
  projects: Project[];
}

export interface ExperienceSectionProps {
  title?: string;
  items: ExperienceItem[];
  theme?: ThemeColors;
}

// ─── Category Config ──────────────────────────────────────────────────────────

const CAT_CONFIG: Record<Technology["category"], { label: string; badge: string }> = {
  language: { label: "Lang", badge: "bg-violet-500/10 text-violet-300 border border-violet-500/30 hover:bg-violet-500/20" },
  framework: { label: "FW", badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20" },
  tool: { label: "Tool", badge: "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10" },
  cloud: { label: "Cloud", badge: "bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20" },
  database: { label: "DB", badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20" },
};

const CAT_ORDER: Technology["category"][] = ["language", "framework", "database", "cloud", "tool"];

// ─── MetaRow ──────────────────────────────────────────────────────────────────
// Matches the image: small uppercase label above bold value

const MetaRow: React.FC<{
  label: string;
  value: string;
  isLink?: boolean;
  grad: string;
}> = ({ label, value, isLink, grad }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
      {label}
    </span>
    {isLink ? (
      <a
        href={`https://${value}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent underline underline-offset-4 ${grad}`}
      >
        {value} ↗
      </a>
    ) : (
      <span className="text-sm font-semibold text-gray-200">{value}</span>
    )}
  </div>
);

// ─── TechBadge ────────────────────────────────────────────────────────────────

const TechBadge: React.FC<{ tech: Technology; sm?: boolean }> = ({ tech, sm }) => (
  <span
    className={`
      inline-flex items-center gap-1 rounded-md font-mono font-medium
      transition-colors duration-200 cursor-default
      ${CAT_CONFIG[tech.category].badge}
      ${sm ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-0.5"}
    `}
  >
    <span className="opacity-40 text-[0.6em]">{CAT_CONFIG[tech.category].label}</span>
    {tech.name}
  </span>
);

// ─── ProjectCard ──────────────────────────────────────────────────────────────

const ProjectCard: React.FC<{
  project: Project;
  allTechs: Technology[];
  t: SecTokens;
  grad: string;
}> = ({ project, allTechs, t, grad }) => {
  const used = allTechs.filter((tech) => project.technologies.includes(tech.name));
  return (
    <div className={`group flex flex-col gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 transition-all duration-200 ${t.projCardBorderHover} ${t.projCardBgHover}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 rounded-md border border-white/8 px-2 py-1 text-[11px] font-semibold text-gray-500 transition-all duration-200 ${t.linkHoverBorder} ${t.linkHoverText}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 rounded-md border border-white/8 px-2 py-1 text-[11px] font-semibold text-gray-500 transition-all duration-200 ${t.linkHoverBorder} ${t.linkHoverText}`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-100 mb-2">{project.name}</h4>
        <p className="text-xs leading-relaxed text-gray-500">{project.description}</p>
      </div>
      <ul className="flex flex-col gap-1">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-[12px] text-gray-500">
            <span className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${t.dot}`} />
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1 pt-1">
        {used.map((tech) => <TechBadge key={tech.name} tech={tech} sm />)}
      </div>
    </div>
  );
};

// ─── ExperienceCard ───────────────────────────────────────────────────────────

const ExperienceCard: React.FC<{
  item: ExperienceItem;
  index: number;
  t: SecTokens;
  grad: string;
  gradLabel: string;
}> = ({ item, index, t, grad, gradLabel }) => {
  const [tab, setTab] = useState<"overview" | "projects">("overview");

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#141416] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${t.cardBorderHover} ${t.cardShadow}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Top gradient accent bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${grad}`} />

      {/* Ambient glow */}
      <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 ${t.glow} ${t.glowHover}`} />

      <div className="relative z-10 p-6 sm:p-8">

        {/* ── Company name + tagline + period ── */}
        <div className="mb-5">
          <h2 className="mb-1.5 text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
            {item.company}
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span>{item.tagline}</span>
            <span className="text-gray-700">·</span>
            <span className="font-mono">{item.period}</span>
          </div>
        </div>

        {/* ── Thin divider ── */}
        <div className={`mb-6 h-px w-full bg-gradient-to-r from-transparent ${t.divider} to-transparent`} />

        {/* ── Tab Bar ── */}
        <div className="mb-6 flex w-fit gap-1 rounded-xl border border-white/6 bg-white/4 p-1">
          {(["overview", "projects"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-medium transition-all duration-200 ${tab === key
                ? `border bg-gradient-to-r ${t.tabActiveBg} ${t.tabActiveBorder} ${t.tabActiveText}`
                : "text-gray-500 hover:text-gray-300"
                }`}
            >
              {key === "overview" ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              )}
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {key === "projects" && (
                <span className={`rounded-full px-2 py-px text-[10px] font-bold ${t.badge} ${t.badgeText}`}>
                  {item.projects.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ══ OVERVIEW PANEL ══
            Matches image: left col = meta rows, right col = descriptions */}
        {tab === "overview" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Left — meta rows (Position / Location / Industry / Website) */}
            <div className="flex flex-col gap-5">
              <MetaRow label="Position" value={item.position} grad={grad} />
              <MetaRow label="Location" value={item.location} grad={grad} />
              {item.website && (
                <MetaRow label="Website" value={item.website} isLink grad={grad} />
              )}

              {/* Technologies — under meta on mobile, same column on desktop */}
              <div className="pt-2">
                <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
                  Technologies
                </span>
                <div className="flex flex-col gap-2">
                  {CAT_ORDER.map((cat) => {
                    const techs = item.technologies.filter((tech) => tech.category === cat);
                    if (!techs.length) return null;
                    return (
                      <div key={cat} className="flex flex-wrap gap-1">
                        {techs.map((tech) => <TechBadge key={tech.name} tech={tech} />)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — description + company description */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
              {item.companyDescription && (
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.companyDescription}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ══ PROJECTS PANEL ══ */}
        {tab === "projects" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {item.projects.map((p) => (
              <ProjectCard key={p.name} project={p} allTechs={item.technologies} t={t} grad={grad} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title = "Experience",
  items,
  theme = DEFAULT_THEME,
}) => {
  const mid = Math.ceil(title.length / 2);
  const t = SEC[theme.secondary];
  const grad = `${G_FROM[theme.primary]} ${G_VIA[theme.secondary]} ${G_TO[theme.accent]}`;
  const gradLabel = `${L_FROM[theme.primary]} ${L_TO[theme.secondary]}`;

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden font-poppins px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090B]/0 via-[#09090B]/70 via-[#09090B] via-[#09090B]/70 to-[#09090B]/0">
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ── Section Header ── */}
        <div className="mb-16 text-center">
          <span className={`mb-3 inline-block bg-gradient-to-r bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent ${gradLabel}`}>
            My Journey
          </span>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${grad}`}>
              {title.slice(0, mid)}
            </span>
            <span className="text-white">{title.slice(mid)}</span>
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-gray-400">
            A timeline of the roles, projects, and technologies that shaped my craft as a developer.
          </p>
          <div className={`mx-auto h-1 w-20 rounded-full bg-gradient-to-r ${grad}`} />
        </div>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} t={t} grad={grad} gradLabel={gradLabel} />
          ))}
        </div>

        {/* ── Legend ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-white/5 pt-6">
          {(Object.entries(CAT_CONFIG) as [Technology["category"], { label: string; badge: string }][]).map(([cat, cfg]) => (
            <span key={cat} className={`inline-flex cursor-default items-center gap-1 rounded-md px-2 py-0.5 font-mono text-xs font-medium transition-colors duration-200 ${cfg.badge}`}>
              <span className="opacity-40 text-[0.6em]">{cfg.label}</span>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          ))}
          <span className="ml-1 text-[10px] text-gray-700">— technology categories</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

// ─── Demo Data ────────────────────────────────────────────────────────────────

export const demoData: ExperienceItem[] = [
  {
    id: "starling-bank",
    company: "Starling Bank",
    tagline: "Award winning digital bank",
    period: "2023 — Present",
    position: "Software Engineer",
    location: "London, United Kingdom",
    website: "www.starlingbank.com",
    description:
      "As a member of the Frontend Foundations team working on the Online Bank, I develop customer-facing features and integrate the design system to ensure a seamless and accessible user experience.",
    companyDescription:
      "Starling Bank is an award-winning, digital challenger bank disrupting the financial services industry with its transparent and customer-focused approach to banking.",
    technologies: [
      { name: "TypeScript", category: "language" },
      { name: "React", category: "framework" },
      { name: "Next.js", category: "framework" },
      { name: "GraphQL", category: "tool" },
      { name: "Jest", category: "tool" },
      { name: "Storybook", category: "tool" },
      { name: "AWS", category: "cloud" },
      { name: "PostgreSQL", category: "database" },
    ],
    projects: [
      {
        name: "Online Banking Dashboard",
        description: "Rebuilt the core dashboard with improved accessibility and real-time data.",
        highlights: [
          "Page load reduced by 40% via code splitting",
          "WCAG 2.1 AA compliance across all components",
          "Real-time balance updates via WebSockets",
        ],
        technologies: ["TypeScript", "React", "GraphQL", "Jest"],
        liveUrl: "https://app.starlingbank.com",
      },
      {
        name: "Design System Integration",
        description: "Led migration to the Starling design system across 30+ components.",
        highlights: [
          "12 reusable accessible components in Storybook",
          "CSS bundle size reduced by 25%",
          "Automated visual regression tests",
        ],
        technologies: ["TypeScript", "React", "Storybook", "Jest"],
      },
    ],
  },
  {
    id: "crowdhaus",
    company: "Crowdhäus",
    tagline: "Property discovery application",
    period: "2021 — 2022",
    position: "Software Engineer",
    location: "London, United Kingdom",
    description:
      "I have worked on and helped design key application features, including authentication, in-app messaging, property details, and a supporting web application.",
    companyDescription:
      "Crowdhaus was a property discovery application with 25,000+ downloads and 400+ five-star reviews, which allowed users across the United Kingdom to discover homes to buy and rent.",
    technologies: [
      { name: "TypeScript", category: "language" },
      { name: "React Native", category: "framework" },
      { name: "Node.js", category: "framework" },
      { name: "Redux", category: "framework" },
      { name: "Firebase", category: "cloud" },
      { name: "MongoDB", category: "database" },
      { name: "Figma", category: "tool" },
    ],
    projects: [
      {
        name: "In-App Messaging",
        description: "End-to-end real-time messaging between buyers, renters, and agents.",
        highlights: [
          "Real-time chat via Firebase Firestore",
          "Push notifications for iOS & Android",
          "Message threading and read receipts",
        ],
        technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      },
      {
        name: "Property Search & Details",
        description: "Core browsing with filters, maps, and full property detail views.",
        highlights: [
          "Google Maps with property pin clustering",
          "15+ filter types with advanced logic",
          "Search latency reduced by 60%",
        ],
        technologies: ["React Native", "TypeScript", "MongoDB", "Node.js"],
      },
    ],
  },
];
