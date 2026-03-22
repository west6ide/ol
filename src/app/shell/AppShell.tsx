import { NavLink, Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/features/theme-toggle/ui/ThemeToggle';

const productNavigation = [{ to: '/', label: 'Overview' }];

const anchorNavigation = [
  { href: '#system', label: 'Design System' },
  { href: '#contact', label: 'Sales Flow' },
];

export function AppShell() {
  return (
    <div className="app-shell">
      <div className="app-shell__bg" />
      <aside className="sidebar">
        <div className="brand">
          <span className="brand__mark">N</span>
          <div>
            <p className="brand__eyebrow">Production frontend</p>
            <h1 className="brand__title">Northstar</h1>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Primary">
          {productNavigation.map((item) => (
            <NavLink key={item.label} className="nav-link" to={item.to}>
              {item.label}
            </NavLink>
          ))}
          {anchorNavigation.map((item) => (
            <a key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar__footer">
          <p className="sidebar__caption">Theme</p>
          <ThemeToggle />
        </div>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
