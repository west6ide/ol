import { QueryProvider } from '@/app/providers/QueryProvider';
import { RouterProvider } from '@/app/providers/RouterProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}
