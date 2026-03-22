import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '@/app/shell/AppShell';
import { HomePage } from '@/pages/home/ui/HomePage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
