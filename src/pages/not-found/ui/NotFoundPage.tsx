import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="card not-found">
      <span className="badge">404</span>
      <h2>Page not found</h2>
      <p>The route exists in neither product nor plan. Return to the dashboard shell.</p>
      <Link className="button button--primary" to="/">
        Back home
      </Link>
    </section>
  );
}
