import type { DashboardActivity } from '@/entities/dashboard/model/types';

type ActivityFeedProps = {
  items: DashboardActivity[];
};

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <section className="card activity-feed">
      <div className="section-head">
        <div>
          <p className="eyebrow">Execution lane</p>
          <h3>Recent product activity</h3>
        </div>
        <span className="badge badge--neutral">{items.length} updates</span>
      </div>

      <div className="activity-feed__list">
        {items.map((item) => (
          <article key={`${item.title}-${item.time}`} className="activity-item">
            <div className="activity-item__dot" />
            <div>
              <div className="activity-item__meta">
                <strong>{item.title}</strong>
                <span>{item.time}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
