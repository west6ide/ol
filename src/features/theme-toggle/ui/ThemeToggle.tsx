import { useTheme } from '@/app/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <span>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</span>
      <span className="theme-toggle__thumb" />
    </button>
  );
}
