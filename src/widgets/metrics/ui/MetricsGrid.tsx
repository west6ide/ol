import type { DashboardMetric } from '@/entities/dashboard/model/types';
import { formatCompactNumber, formatPercent } from '@/shared/lib/format';

type MetricsGridProps = {
  metrics: DashboardMetric[];
};

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <section className="metrics-grid">
      {metrics.map((metric) => (
        <article key={metric.label} className="card metric-card">
          <span className="metric-card__label">{metric.label}</span>
          <strong className="metric-card__value">
            {metric.kind === 'percent'
              ? formatPercent(metric.value)
              : formatCompactNumber(metric.value)}
          </strong>
          <p className="metric-card__description">{metric.description}</p>
          <span
            className={`metric-card__delta ${
              metric.delta >= 0 ? 'metric-card__delta--positive' : 'metric-card__delta--negative'
            }`}
          >
            {metric.delta >= 0 ? '+' : ''}
            {metric.delta}%
          </span>
        </article>
      ))}
    </section>
  );
}
