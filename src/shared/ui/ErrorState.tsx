export function ErrorState() {
  return (
    <section className="card error-state">
      <span className="badge badge--danger">Data unavailable</span>
      <h2>Dashboard failed to load</h2>
      <p>Check the API URL or replace the mock services with your backend adapters.</p>
    </section>
  );
}
