import type { DashboardHighlight } from '@/entities/dashboard/model/types';

type HeroPanelProps = {
  highlights: DashboardHighlight[];
};

export function HeroPanel({ highlights }: HeroPanelProps) {
  return (
    <section className="hero card">
      <div className="hero__copy">
        <p className="eyebrow">2026-ready product shell</p>
        <h2>Frontend starter with clear ownership, fast delivery, and production defaults.</h2>
        <p className="hero__text">
          The architecture is designed so teams can ship features without breaking the platform:
          routing, state, API contracts, design tokens, forms, quality gates, and test hooks are in
          place from day one.
        </p>
      </div>

      <div className="hero__highlights">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="glass-tile">
            <span className="badge">{highlight.tag}</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
