export function LoadingState() {
  return (
    <section className="card loading-state">
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--wide" />
      <div className="skeleton-grid">
        <div className="skeleton skeleton--panel" />
        <div className="skeleton skeleton--panel" />
        <div className="skeleton skeleton--panel" />
      </div>
    </section>
  );
}
