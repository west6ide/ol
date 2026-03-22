import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UiState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark' as const;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'northstar-ui',
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
